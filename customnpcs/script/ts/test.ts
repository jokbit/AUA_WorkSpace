import fs from 'fs';
import type { NPC } from './kit';
function test1() {
    const npc:NPC = JSON.parse(fs.readFileSync('../../npc/二狗.json', 'utf8'));
    const json = JSON.stringify(npc.npcLines);
    console.log(json);
}
function test2() {
    const dir = fs.readdirSync('../../npc');
    const npcs:NPC[] = [];
    dir.forEach((file:string) => {
        const npc:NPC = JSON.parse(fs.readFileSync(`../../npc/${file}`, 'utf8'));
        npcs.push(npc);
    });

    npcs.sort((a,b) => a.id - b.id);
    npcs.forEach((npc) => {
        console.log(npc.id);
    });
    
}

function main() {
    test2();
}

main();
