import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nbtFilePath = path.join(__dirname, 'test.json');
const outputFilePath = path.join(__dirname, 'summon_command_from_json.txt');

const nbtContent = fs.readFileSync(nbtFilePath, 'utf8').trim();

const command = `/summon customnpcs:customnpc ~ ~ ~ ${nbtContent}`;

fs.writeFileSync(outputFilePath, command, 'utf8');

console.log('Command generated successfully from JSON!');
console.log(`File saved to: ${outputFilePath}`);
console.log(`NBT length: ${nbtContent.length} characters`);
console.log(`Command length: ${command.length} characters`);
