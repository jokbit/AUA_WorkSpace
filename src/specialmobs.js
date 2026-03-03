import fs from "fs";

const contents = fs.readFileSync("../specialmobs_entity.json", "utf8");
const entityJsons = contents.split("\n");

for (let entityJson of entityJsons) {
    const entity = JSON.parse(entityJson)
    const mobId = entity.registerName.replace('entities/', '');
}

const entities = entityJsons.map(json => JSON.parse(json))
    .map(entity => entity.registerName.replace('entities/', ''))
    .map(name => `${name}`);

function write() {
    fs.writeFileSync("./data/specialmobs_entities.txt", JSON.stringify(entities));
}

const creepers = [
    "specialmobs:creeper",
    "specialmobs:darkcreeper",
    "specialmobs:deathcreeper",
    "specialmobs:dirtcreeper",
    "specialmobs:doomcreeper",
    "specialmobs:drowningcreeper",
    "specialmobs:endercreeper",
    "specialmobs:firecreeper",
    "specialmobs:gravelcreeper",
    "specialmobs:jumpingcreeper",
    "specialmobs:lightningcreeper",
    "specialmobs:minicreeper",
    "specialmobs:sandcreeper",
    "specialmobs:scopecreeper",
    "specialmobs:snowcreeper",
    "specialmobs:skeletoncreeper",
    "specialmobs:splittingcreeper",
]

const zombies = [
    "specialmobs:zombie",
    "specialmobs:brutezombie",
    "specialmobs:firezombie",
    "specialmobs:fishingzombie",
    "specialmobs:frozenzombie",
    "specialmobs:giantzombie",
    "specialmobs:hungryzombie",
    "specialmobs:huskzombie",
    "specialmobs:madscientistzombie",
    "specialmobs:plaguezombie",
]

const drowneds = [
    "specialmobs:drowned",
    "specialmobs:abyssaldrowned",
    "specialmobs:brutedrowned",
    "specialmobs:fishingdrowned",
    "specialmobs:frozendrowned",
    "specialmobs:giantdrowned",
    "specialmobs:hungrydrowned",
    "specialmobs:knightdrowned",
    "specialmobs:plaguedrowned",
]

const zombifiedpiglins = [
    "specialmobs:zombifiedpiglin",
    "specialmobs:brutezombifiedpiglin",
    "specialmobs:fishingzombifiedpiglin",
    "specialmobs:giantzombifiedpiglin",
    "specialmobs:hungryzombifiedpiglin",
    "specialmobs:knightzombifiedpiglin",
    "specialmobs:plaguezombifiedpiglin",
    "specialmobs:vampirezombifiedpiglin",
]

const skeletons = [
    "specialmobs:skeleton",
    "specialmobs:bruteskeleton",
    "specialmobs:fireskeleton",
    "specialmobs:gatlingskeleton",
    "specialmobs:giantskeleton",
    "specialmobs:knightskeleton",
    "specialmobs:ninjaskeleton",
    "specialmobs:poisonskeleton",
    "specialmobs:sniperskeleton",
    "specialmobs:spitfireskeleton",
    "specialmobs:strayskeleton",
    "specialmobs:weatheredskeleton"
]

const witherskeletons = [
    "specialmobs:witherskeleton",
    "specialmobs:brutewitherskeleton",
    "specialmobs:gatlingwitherskeleton",
    "specialmobs:giantwitherskeleton",
    "specialmobs:knightwitherskeleton",
    "specialmobs:ninjawitherskeleton",
    "specialmobs:sniperwitherskeleton",
    "specialmobs:spitfirewitherskeleton",
]

const slimes = [
    "specialmobs:slime",
    "specialmobs:blackberryslime",
    "specialmobs:blueberryslime",
    "specialmobs:caramelslime",
    "specialmobs:frozenslime",
    "specialmobs:grapeslime",
    "specialmobs:lemonslime",
    "specialmobs:potionslime",
    "specialmobs:strawberryslime",
    "specialmobs:watermelonslime",
]

const cubes = [
    "specialmobs:magmacube",
    "specialmobs:bouncingmagmacube",
    "specialmobs:hardenedmagmacube",
    "specialmobs:stickymagmacube",
    "specialmobs:volatilemagmacube",
]

const spiders = [
    "specialmobs:spider",
    "specialmobs:babyspider",
    "specialmobs:desertspider",
    "specialmobs:firespider",
    "specialmobs:flyingspider",
    "specialmobs:giantspider",
    "specialmobs:hungryspider",
    "specialmobs:motherspider",
    "specialmobs:palespider",
    "specialmobs:poisonspider",
    "specialmobs:waterspider",
    "specialmobs:webspider",
    "specialmobs:witchspider",
]

const cave_spiders = [
    "specialmobs:cavespider",
    "specialmobs:babycavespider",
    "specialmobs:desertcavespider",
    "specialmobs:firecavespider",
    "specialmobs:flyingcavespider",
    "specialmobs:mothercavespider",
    "specialmobs:palecavespider",
    "specialmobs:watercavespider",
    "specialmobs:webcavespider",
    "specialmobs:witchcavespider",
]

const fishes = [
    "specialmobs:silverfish",
    "specialmobs:albinosilverfish",
    "specialmobs:blindingsilverfish",
    "specialmobs:desiccatedsilverfish",
    "specialmobs:firesilverfish",
    "specialmobs:fishingsilverfish",
    "specialmobs:flyingsilverfish",
    "specialmobs:poisonsilverfish",
    "specialmobs:puffersilverfish",
    "specialmobs:toughsilverfish",
]

const endermans = [
    "specialmobs:enderman",
    "specialmobs:blindingenderman",
    "specialmobs:flameenderman",
    "specialmobs:icyenderman",
    "specialmobs:lightningenderman",
    "specialmobs:minienderman",
    "specialmobs:mirageenderman",
    "specialmobs:runicenderman",
    "specialmobs:thiefenderman",
]

const witchs = [
    "specialmobs:witch",
    "specialmobs:dominationwitch",
    "specialmobs:icewitch",
    "specialmobs:shadowswitch",
    "specialmobs:undeadwitch",
    "specialmobs:wildswitch",
    "specialmobs:windwitch",
]

const ghasts = [
    "specialmobs:ghast",
    "specialmobs:babyghast",
    "specialmobs:corporealshiftghast",
    "specialmobs:fighterghast",
    "specialmobs:kingghast",
    "specialmobs:queenghast",
    "specialmobs:slabghast",
    "specialmobs:unholyghast",
]

const blazes = [
    "specialmobs:blaze",
    "specialmobs:armoredblaze",
    "specialmobs:cinderblaze",
    "specialmobs:conflagrationblaze",
    "specialmobs:emberblaze",
    "specialmobs:hellfireblaze",
    "specialmobs:infernoblaze",
    "specialmobs:joltblaze",
    "specialmobs:wildfireblaze"
]

function gen() {
    for (let witherskeleton of witherskeletons) {
        content = `{
  "type": "tconstruct:severing",
  "entity": {
    "types": [
      "minecraft:wither_skeleton",
      "minecraft:wither"
    ]
  },
  "result": "minecraft:wither_skeleton_skull"
}`
    }
}