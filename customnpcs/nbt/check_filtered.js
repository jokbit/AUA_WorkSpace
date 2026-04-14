import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filteredFilePath = path.join(__dirname, 'summon_command_filtered.txt');

const filteredContent = fs.readFileSync(filteredFilePath, 'utf8').trim();

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
    'FactionPoints'
];

console.log('Checking filtered command for important keys:\n');

for (const key of importantKeys) {
    const hasKey = filteredContent.includes(key + ':') || filteredContent.includes(key + ' ');
    console.log(`${hasKey ? '✓' : '✗'} ${key}: ${hasKey ? 'Found' : 'Missing'}`);
}

console.log(`\nTotal command length: ${filteredContent.length} characters`);
