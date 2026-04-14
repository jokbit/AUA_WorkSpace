import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nbtFilePath = path.join(__dirname, 'ttt.nbt');
const outputFilePath = path.join(__dirname, 'summon_command_from_spawner.txt');

const nbtContent = fs.readFileSync(nbtFilePath, 'utf8').trim();

function extractSpawnDataEntity(nbtString) {
    const spawnDataMatch = nbtString.match(/SpawnData:\{entity:\{/);
    if (!spawnDataMatch) {
        console.error('SpawnData.entity not found in NBT');
        return null;
    }
    
    const startIndex = spawnDataMatch.index + 'SpawnData:{entity:'.length;
    
    let braceCount = 1;
    let i = startIndex;
    
    while (i < nbtString.length && braceCount > 0) {
        const char = nbtString[i];
        if (char === '{') {
            braceCount++;
        } else if (char === '}') {
            braceCount--;
        }
        i++;
    }
    
    const entityNbt = nbtString.substring(startIndex, i);
    
    return entityNbt;
}

const entityNbt = extractSpawnDataEntity(nbtContent);

if (entityNbt) {
    const command = `/summon customnpcs:customnpc ~ ~ ~ ${entityNbt}`;
    
    fs.writeFileSync(outputFilePath, command, 'utf8');
    
    console.log('Command generated successfully from spawner!');
    console.log(`File saved to: ${outputFilePath}`);
    console.log(`Entity NBT length: ${entityNbt.length} characters`);
    console.log(`Command length: ${command.length} characters`);
} else {
    console.error('Failed to extract entity NBT from spawner');
}
