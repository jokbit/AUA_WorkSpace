import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, '..');
const clonesDir = path.join(baseDir, 'script', 'output', 'customnpcs', 'clones', '1');
const outputDir = path.join(baseDir, 'nbt', 'npc');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function convertJsonToNbt(content) {
    let result = content;
    
    result = result.replace(/"([^"]+)":/g, '$1:');
    
    result = result.replace(/,\s*}/g, '}');
    result = result.replace(/,\s*]/g, ']');
    
    result = result.replace(/\{\s+/g, '{');
    result = result.replace(/\}\s+/g, '}');
    result = result.replace(/\[\s+/g, '[');
    result = result.replace(/\]\s+/g, ']');
    
    result = result.replace(/\s*,\s*/g, ',');
    result = result.replace(/\s*:\s*/g, ':');
    
    result = result.replace(/\n/g, '');
    result = result.replace(/\r/g, '');
    result = result.replace(/\t/g, '');
    
    while (result.includes('  ')) {
        result = result.replace(/  /g, ' ');
    }
    
    return result.trim();
}

function formatNbt(nbtString) {
    let result = '';
    let indent = 0;
    let inString = false;
    let stringChar = '';
    
    for (let i = 0; i < nbtString.length; i++) {
        const char = nbtString[i];
        const nextChar = nbtString[i + 1] || '';
        
        if ((char === '"' || char === "'") && nbtString[i - 1] !== '\\') {
            if (!inString) {
                inString = true;
                stringChar = char;
            } else if (char === stringChar) {
                inString = false;
            }
            result += char;
            continue;
        }
        
        if (inString) {
            result += char;
            continue;
        }
        
        if (char === '{' || char === '[') {
            result += char;
            indent++;
            result += '\n' + '  '.repeat(indent);
        } else if (char === '}' || char === ']') {
            indent--;
            result += '\n' + '  '.repeat(indent) + char;
        } else if (char === ',') {
            result += char + '\n' + '  '.repeat(indent);
        } else if (char === ':') {
            result += char + ' ';
        } else if (char !== ' ' || nextChar === '{' || nextChar === '[' || nextChar === '}' || nextChar === ']') {
            result += char;
        }
    }
    
    return result;
}

const npcFiles = fs.readdirSync(clonesDir).filter(file => file.endsWith('.json'));

console.log(`Found ${npcFiles.length} NPC files to process...\n`);

let successCount = 0;
let errorCount = 0;

for (const file of npcFiles) {
    try {
        const npcName = path.basename(file, '.json');
        const inputPath = path.join(clonesDir, file);
        const outputPath = path.join(outputDir, `${npcName}.json`);
        
        const content = fs.readFileSync(inputPath, 'utf8');
        
        const nbtString = convertJsonToNbt(content);
        
        const formattedNbt = formatNbt(nbtString);
        
        fs.writeFileSync(outputPath, formattedNbt, 'utf8');
        
        console.log(`✓ ${npcName}`);
        successCount++;
    } catch (error) {
        console.log(`✗ ${file}: ${error.message}`);
        errorCount++;
    }
}

console.log(`\nProcessing complete!`);
console.log(`Success: ${successCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Output directory: ${outputDir}`);
