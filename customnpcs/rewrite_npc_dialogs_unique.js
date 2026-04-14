import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const npcDir = path.join(__dirname, 'npc');
const npcFiles = fs.readdirSync(npcDir).filter(file => file.endsWith('.json'));

console.log(`找到 ${npcFiles.length} 个NPC文件`);

// 为每个NPC定义独特的对话风格
const npcDialogStyles = {
  "二狗": {
    taskSubTitle: "兄弟，有点事儿想麻烦你，帮完肯定不亏待你",
    giftSubTitle: "最近看上几样东西，你要是能送我就太好了",
    dialogs: {
      "黑暗中的枯骨": "哎兄弟，你来得正好！我跟你说，最近那帮骨架可把我烦死了。那天我出去挖矿，差点被它们围殴，吓死我了。这帮家伙阴魂不散的，你能不能帮我干掉4只？我请你吃顿好的！",
      "地狱中的骨头": "哥们，下界骷髅这玩意儿你见过没？贼烦人！上次我去地狱找堡垒，结果被这帮家伙追着射，差点回不来。你帮我收拾3只，回头我送你点好东西！",
      "金色的原料": "兄弟，我最近想搞点装备，但是缺粗金。这玩意儿不好挖啊，我自己挖了好几天都没凑够。你要是能帮我弄12块，那可帮了大忙了！",
      "暴躁的草泥马": "我艹，丧尸羊驼这玩意儿太恶心了！那天我在草原上溜达，突然就被这帮家伙吐了一身，恶心死我了。你帮我干掉5只，我肯定记着你的好！"
    },
    gifts: {
      "粗金": "哥们，我看上粗金了，这玩意儿做装备贼好用。你要是能送我一块，我肯定好好报答你！",
      "红石剑": "兄弟，红石剑这玩意儿我馋好久了，看着就帅！你要是能送我一把，那可太好了！",
      "香蕉": "哎，最近想吃香蕉了，但是找不到。你要是能送我一个，我肯定记着你的好！"
    }
  }
};

// 从文本中提取物品名称或怪物名称
function extractNameFromText(text) {
  let match = text.match(/击杀\d+只([^\（]+)（/);
  if (match) return match[1];
  
  match = text.match(/收集\d+[个只把根块张张片颗枚滴桶瓶碗杯袋箱组套件双对付]?([^\（]+)（/);
  if (match) return match[1];
  
  match = text.match(/赠送\d+[个只把根块张张片颗枚滴桶瓶碗杯袋箱组套件双对付]?([^\（]+)（/);
  if (match) return match[1];
  
  return "东西";
}

// 处理每个NPC文件
npcFiles.forEach(file => {
  const filePath = path.join(npcDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  try {
    const npcData = JSON.parse(content);
    const npcName = npcData.name;
    
    console.log(`处理 ${file}...`);
    
    // 如果这个NPC有预定义的对话风格，使用它
    if (npcDialogStyles[npcName]) {
      const style = npcDialogStyles[npcName];
      let hasChanges = false;
      
      // 改写dialogs
      if (npcData.dialogs && Array.isArray(npcData.dialogs)) {
        npcData.dialogs.forEach(dialog => {
          // 改写任务subTitle
          if (dialog.label === '任务' && style.taskSubTitle) {
            dialog.subTitle = style.taskSubTitle;
            hasChanges = true;
          }
          
          // 改写赠礼subTitle
          if (dialog.label === '赠礼' && style.giftSubTitle) {
            dialog.subTitle = style.giftSubTitle;
            hasChanges = true;
          }
          
          // 改写sub中的text
          if (dialog.sub && Array.isArray(dialog.sub)) {
            dialog.sub.forEach(sub => {
              if (sub.label && style.dialogs[sub.label]) {
                sub.text = style.dialogs[sub.label];
                hasChanges = true;
              }
              if (sub.label && style.gifts[sub.label]) {
                sub.text = style.gifts[sub.label];
                hasChanges = true;
              }
            });
          }
        });
      }
      
      // 如果有更新，写回文件
      if (hasChanges) {
        fs.writeFileSync(filePath, JSON.stringify(npcData, null, 2));
        console.log(`已更新 ${file}`);
      }
    } else {
      console.log(`${file} 没有预定义的对话风格，跳过`);
    }
  } catch (error) {
    console.error(`处理文件 ${file} 时出错: ${error.message}`);
  }
});

console.log('NPC对话改写完成！');
