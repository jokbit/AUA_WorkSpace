import fs from 'fs'

function spawnawner() {
  const filenames = fs.readdirSync('../../npc');
  const spawner = [];
  for (const filename of filenames) {
    const name = filename.split('.')[0];
    const temp = 
    `{
        "mob": "customnpcs:customnpc",
        "cloneTab": 1,
        "cloneName": "${name}"
}`
    spawner.push(temp);
  }
  fs.mkdirSync('../output/spawner');
  fs.writeFileSync('../output/spawner/spawner.json', spawner.join(',\n'));
}

spawnawner();
