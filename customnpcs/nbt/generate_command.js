import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nbtFilePath = path.join(__dirname, 'ttt.nbt');
const outputFilePath = path.join(__dirname, 'summon_command_filtered.txt');

const nbtContent = fs.readFileSync(nbtFilePath, 'utf8').trim();

const importantKeys = [
    'Armor',
    'ArmorDropChances',
    'Attributes',
    'AttackSpeed',
    'AttackStrenght',
    'AttackRange',
    'AggroRange',
    'ActiveRange',
    'Accuracy',
    'AttackInvisible',
    'AttackOtherFactions',
    'AvoidsSun',
    'AvoidsWater',
    'BurnInSun',
    'CanDrown',
    'CanLeap',
    'CanPickUpLoot',
    'CanSprint',
    'CanSwim',
    'CanUpdate',
    'CombatRegen',
    'CreatureType',
    'DoorInteract',
    'FactionID',
    'FactionPoints',
    'InteractLines',
    'NPCDialogOptions',
    'NpcInteractLines',
    'NpcInteractNPCLines',
    'Texture',
    'Model',
    'Name',
    'Title',
    'MovementSpeed',
    'Navigation',
    'Job',
    'Role',
    'BossBar',
    'BossColor',
    'BossType',
    'DropChance',
    'MainHand',
    'OffHand',
    'Weapon',
    'Projectile',
    'Shooting',
    'AimWhileShooting',
    'BurstCount',
    'DirectLOS',
    'DisablePitch',
    'DistanceToMelee',
    'DefendFaction',
    'Retaliate',
    'Response',
    'Dialog',
    'Dialogs',
    'Quests',
    'QuestDialogs',
    'Items',
    'RewardExp',
    'RewardItems',
    'CompleteText',
    'QuestText',
    'QuestTitle',
    'QuestType',
    'QuestTarget',
    'QuestCount',
    'QuestItem',
    'QuestMob',
    'QuestEntity',
    'SkinPlayer',
    'PlayerTexture',
    'CloakTexture',
    'Size',
    'Scale',
    'ShowName',
    'NameVisible',
    'AlwaysShowName',
    'NoAI',
    'PersistenceRequired',
    'CustomName',
    'CustomNameVisible',
    'Tags',
    'HandItems',
    'HandDropChances',
    'ArmorItems',
    'CitadelData'
];

function parseNbtValue(nbtString, startIndex) {
    let depth = 0;
    let i = startIndex;
    let inString = false;
    
    while (i < nbtString.length) {
        const char = nbtString[i];
        
        if (char === '"' && nbtString[i-1] !== '\\') {
            inString = !inString;
        } else if (!inString) {
            if (char === '{' || char === '[') {
                depth++;
            } else if (char === '}' || char === ']') {
                depth--;
                if (depth < 0) {
                    return i;
                }
            } else if (char === ',' && depth === 0) {
                return i;
            }
        }
        i++;
    }
    
    return nbtString.length;
}

function extractImportantNbt(nbtString) {
    const result = [];
    let i = 1;
    
    while (i < nbtString.length - 1) {
        let keyEnd = nbtString.indexOf(':', i);
        if (keyEnd === -1) break;
        
        const key = nbtString.substring(i, keyEnd).trim();
        const keyName = key.replace(/"/g, '');
        
        const valueStart = keyEnd + 1;
        const valueEnd = parseNbtValue(nbtString, valueStart);
        const value = nbtString.substring(valueStart, valueEnd).trim();
        
        const isImportant = importantKeys.some(importantKey => 
            keyName === importantKey || keyName.includes(importantKey)
        );
        
        if (isImportant) {
            result.push(`${key}:${value}`);
        }
        
        i = valueEnd + 1;
        while (i < nbtString.length && (nbtString[i] === ' ' || nbtString[i] === '\n' || nbtString[i] === '\r')) {
            i++;
        }
    }
    
    return '{' + result.join(',') + '}';
}

const filteredNbt = extractImportantNbt(nbtContent);

const command = `/summon customnpcs:customnpc ~ ~ ~ ${filteredNbt}`;

fs.writeFileSync(outputFilePath, command, 'utf8');

console.log('Filtered command generated successfully!');
console.log(`File saved to: ${outputFilePath}`);
console.log(`Original length: ${nbtContent.length} characters`);
console.log(`Filtered length: ${filteredNbt.length} characters`);
console.log(`Command length: ${command.length} characters`);
