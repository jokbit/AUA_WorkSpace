import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commandFilePath = path.join(__dirname, 'summon_command_from_spawner.txt');

const commandContent = fs.readFileSync(commandFilePath, 'utf8').trim();

const importantKeys = [
    'NPCDialogOptions',
    'NpcInteractLines',
    'NpcInteractNPCLines',
    'Texture',
    'Model',
    'Name',
    'Title',
    'Dialog',
    'Dialogs',
    'Quests',
    'QuestDialogs',
    'Items',
    'Armor',
    'Attributes',
    'FactionID',
    'FactionPoints',
    'AttackSpeed',
    'AttackStrenght',
    'AttackRange',
    'AggroRange',
    'ActiveRange'
];

console.log('Checking command from spawner for important keys:\n');

for (const key of importantKeys) {
    const hasKey = commandContent.includes(key + ':') || commandContent.includes(key + ' ');
    console.log(`${hasKey ? '✓' : '✗'} ${key}: ${hasKey ? 'Found' : 'Missing'}`);
}

console.log(`\nTotal command length: ${commandContent.length} characters`);
