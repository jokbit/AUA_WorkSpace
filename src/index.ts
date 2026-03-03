import {Entity, EntityType, modSpawnInfo} from "./base/common";
import fs from 'fs'

const DEFAULT_MOB_COUNT = 30;

const MOB_COUNT_HIGH = 60;

const MOB_COUNT_LOW = 10;

const MOB_NO_LIMIT = 500;

const DAY_RANGE = 110;

function addEntities(entities: Entity[]) {
    for (let entity of entities) {
        console.log(JSON.stringify(entity))
    }
}

function createMobSpawn(mod: string, entities: Entity[], maxCount: number): modSpawnInfo {
    return {
        mod,
        entities,
        maxCount
    }
}

function outputEntities(entities: Entity[], fileName?: string) {
    try {
        if (!fileName) {
            fileName = entities[0].mod;
        }
        const json = entities.map(entity => JSON.stringify(entity))
            .join(',\n');
        fs.writeFileSync(`./data/${fileName}.json`, `[\n${json}\n]`)
        console.log(`write mod file ${fileName} successfully.`);
    } catch (error) {
        console.error(`write mod file ${fileName} failed: ${error}.`);
    }
}

function outputContent(content: string, fileName: string) {
    try {
        fs.writeFileSync(`./data/${fileName}`, `${content}`)
        console.log(`write mod file ${fileName} successfully.`);
    } catch (error) {
        console.error(`write mod file ${fileName} failed: ${error}.`);
    }
}

const minecraftEntities = [
    {mod: 'minecraft', name: 'zombie', level: 1, type: EntityType.zombie},
    {mod: 'minecraft', name: 'zombie_villager', level: 1, type: EntityType.zombie},
    {mod: 'minecraft', name: 'skeleton', level: 8, type: EntityType.skeleton},
    {mod: 'minecraft', name: 'stray', level: 8, type: EntityType.skeleton},
    {mod: 'minecraft', name: 'husk', level: 1, type: EntityType.zombie},
    {mod: 'minecraft', name: 'drowned', level: 1, type: EntityType.zombie},
    {mod: 'minecraft', name: 'ghast', level: 7, type: EntityType.ghost, sieger: true},
    {mod: 'minecraft', name: 'creeper', level: 5, type: EntityType.zombie, sieger: true},
    {mod: 'minecraft', name: 'giant', level: 5, type: EntityType.zombie},
]

const apocalypseEntities = [
    // {mod: 'apocalypse', name: 'ghost', level: 7, type: EntityType.ghost, sieger: true},
    {mod: 'apocalypse', name: 'destroyer', level: 10, type: EntityType.ghost, sieger: true},
    {mod: 'apocalypse', name: 'seeker', level: 7, type: EntityType.ghost, sieger: true},
    // {mod: 'apocalypse', name: 'grump', level: 7, type: EntityType.ghost, sieger: true},
]
const apocalypseSpawn = createMobSpawn('apocalypse', apocalypseEntities, MOB_COUNT_HIGH);
const mutantszombiesEntities = [
    {mod: 'mutantszombies', name: 'blister_zombie', level: 2, type: EntityType.zombie},
    {mod: 'mutantszombies', name: 'crawler', level: 2, type: EntityType.zombie},
    {mod: 'mutantszombies', name: 'zombie_brute', level: 5, type: EntityType.zombie},
    {mod: 'mutantszombies', name: 'spitter', level: 5, type: EntityType.zombie},
    {mod: 'mutantszombies', name: 'split_head_zombie', level: 2, type: EntityType.zombie},
    {mod: 'mutantszombies', name: 'mutant_brute', level: 5, type: EntityType.zombie},
    {mod: 'mutantszombies', name: 'rotten_mutant', level: 2, type: EntityType.zombie},
]
const mutantszombiesSpawn = createMobSpawn('mutantszombies', mutantszombiesEntities, DEFAULT_MOB_COUNT);
const angry_animalsEntities = [
    {mod: 'angry_animals', name: 'angry_pig', level: 4, type: EntityType.animal},
    {mod: 'angry_animals', name: 'angry_cow', level: 4, type: EntityType.animal},
    {mod: 'angry_animals', name: 'angry_sheep', level: 4, type: EntityType.animal},
    {mod: 'angry_animals', name: 'angry_chicken', level: 4, type: EntityType.animal},
    {mod: 'angry_animals', name: 'angry_wolf', level: 4, type: EntityType.animal},
    {mod: 'angry_animals', name: 'angry_ocelot', level: 4, type: EntityType.animal},
    {mod: 'angry_animals', name: 'angry_bee', level: 4, type: EntityType.animal, sieger: true},
    {mod: 'angry_animals', name: 'angry_fox', level: 4, type: EntityType.animal},
    {mod: 'angry_animals', name: 'angry_goat', level: 4, type: EntityType.animal},
    {mod: 'angry_animals', name: 'angry_llama', level: 4, type: EntityType.animal},
    {mod: 'angry_animals', name: 'shadow_angry_cow', level: 4, type: EntityType.animal},
    {mod: 'angry_animals', name: 'angry_golden_pig', level: 4, type: EntityType.animal},
]
const angry_animalsSpawn = createMobSpawn('angry_animals', angry_animalsEntities, DEFAULT_MOB_COUNT);
const much_more_skeletonsEntities = [
    {mod: 'much_more_skeletons', name: 'skeleton_pig', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'skeleton_cow', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'skeleton_chicken', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'skeleton_wolf', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'skeleton_cat', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'skeleton_villager', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'skeleton_enderman', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'dark_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'ender_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'husk_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'girl_skeleton', level: 1, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'skeleton_ravager', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'skeleton_spider', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'zombie_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'undead_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'wither_stray', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'nether_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'skeleton_piglin', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'hell_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'jungle_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'swamp_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'soul_sand_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'soul_fire_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'lava_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'tainted_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'warped_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'crimson_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'infected_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'wither_skeleton_enderman', level: 2, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'wither_skeleton_wolf', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'wither_skeleton_cat', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'wither_skeleton_villager', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'skeleton_fox', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'wither_skeleton_fox', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'skeleton_hoglin', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'wither_skeleton_hoglin', level: 4, type: EntityType.skeleton},
    {mod: 'much_more_skeletons', name: 'skeleton_ghast', level: 1, type: EntityType.skeleton},
]
const much_more_skeletonsSpawn = createMobSpawn('much_more_skeletons', much_more_skeletonsEntities, DEFAULT_MOB_COUNT);
const mobzEntities = [
    {mod: 'mobz', name: 'tank_zombie', level: 1, type: EntityType.zombie},
    {mod: 'mobz', name: 'fast_zombie', level: 1, type: EntityType.zombie},
    {mod: 'mobz', name: 'armored_zombie', level: 2, type: EntityType.zombie},
    {mod: 'mobz', name: 'ender_zombie', level: 1, type: EntityType.zombie},
    {mod: 'mobz', name: 'boss_skeleton', level: 8, type: EntityType.skeleton},
    {mod: 'mobz', name: 'overgrown_skeleton', level: 8, type: EntityType.skeleton},
    {mod: 'mobz', name: 'nether_skeleton', level: 1, type: EntityType.skeleton},
    {mod: 'mobz', name: 'small_zombie', level: 2, type: EntityType.zombie},
    {mod: 'mobz', name: 'bigboss', level: 2, type: EntityType.zombie},
    {mod: 'mobz', name: 'bowman', level: 0, type: EntityType.human},
    {mod: 'mobz', name: 'archer', level: 0, type: EntityType.human},
    {mod: 'mobz', name: 'templar', level: 0, type: EntityType.human},
    {mod: 'mobz', name: 'warrior', level: 0, type: EntityType.human},
    {mod: 'mobz', name: 'iron_steve', level: 0, type: EntityType.human},
    {mod: 'mobz', name: 'knight', level: 0, type: EntityType.human},
    {mod: 'mobz', name: 'william', level: 0, type: EntityType.human},
    {mod: 'mobz', name: 'andriu', level: 0, type: EntityType.human},
    {mod: 'mobz', name: 'charles', level: 0, type: EntityType.human},

]
const mobzSpawn = createMobSpawn('mobz', mobzEntities, DEFAULT_MOB_COUNT);
const born_in_chaos_v1Entities = [
    {mod: 'born_in_chaos_v1', name: 'decrepit_skeleton', level: 1, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'skeleton_demoman', level: 3, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'baby_skeleton', level: 2, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'baby_skeleton_minion', level: 2, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'bone_imp', level: 2, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'bone_imp_minion', level: 2, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'siamese_skeletons', level: 2, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'siamese_skeletonsleft', level: 2, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'siamese_skeletonsleft', level: 2, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'skeleton_thrasher', level: 5, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'bonescaller', level: 3, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'supreme_bonescaller', level: 3, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'supreme_bonescaller_stage_2', level: 3, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'spirit_guide', level: 3, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'spirit_guide_assistant', level: 3, type: EntityType.skeleton},
    {mod: 'born_in_chaos_v1', name: 'decaying_zombie', level: 1, type: EntityType.zombie},
    {mod: 'born_in_chaos_v1', name: 'barrel_zombie', level: 1, type: EntityType.zombie},
    {mod: 'born_in_chaos_v1', name: 'door_knight', level: 2, type: EntityType.zombie},
    {mod: 'born_in_chaos_v1', name: 'zombie_clown', level: 3, type: EntityType.zombie},
    {mod: 'born_in_chaos_v1', name: 'zombie_fisherman', level: 1, type: EntityType.zombie},
    {mod: 'born_in_chaos_v1', name: 'zombie_lumberjack', level: 1, type: EntityType.zombie},
    {mod: 'born_in_chaos_v1', name: 'zombie_bruiser', level: 2, type: EntityType.zombie},
    {mod: 'born_in_chaos_v1', name: 'maggot', level: 1, type: EntityType.unknown},
    {mod: 'born_in_chaos_v1', name: 'restless_spirit', level: 4, type: EntityType.ghost, sieger: true},
    {mod: 'born_in_chaos_v1', name: 'scarlet_persecutor', level: 5, type: EntityType.ghost, sieger: true},
    {mod: 'born_in_chaos_v1', name: 'pumpkin_spirit', level: 3, type: EntityType.demon},
    {mod: 'born_in_chaos_v1', name: 'seared_spirit', level: 3, type: EntityType.demon},
    {mod: 'born_in_chaos_v1', name: 'mr_pumpkin_controlled', level: 2, type: EntityType.demon},
    {mod: 'born_in_chaos_v1', name: 'controlled_spiritual_assistant', level: 2, type: EntityType.demon},
    {mod: 'born_in_chaos_v1', name: 'controlled_baby_skeleton', level: 2, type: EntityType.demon},
    {mod: 'born_in_chaos_v1', name: 'corpse_fish', level: 9, type: EntityType.demon},

]
const born_in_chaos_v1Spawn = createMobSpawn('born_in_chaos_v1', born_in_chaos_v1Entities, DEFAULT_MOB_COUNT);
const infectiousEntities = [
    {mod: 'infectious', name: 'angry_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'infectious_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'fat_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'old_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_girl', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'screamer', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'chained_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'balloon_zombie', level: 4, type: EntityType.zombie, sieger: true},
    {mod: 'infectious', name: 'sleepy_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_spiter', level: 3, type: EntityType.zombie},
    {mod: 'infectious', name: 'tower_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_on_stelts', level: 3, type: EntityType.zombie},
    {mod: 'infectious', name: 'big_zombie', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_head', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'brain_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'blind_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'crawling_zombie', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'armless_zombie', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'bodyless_zombie', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'headless_zombie', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'maggot_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'claw_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'bucket_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'pylon_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'pumpkin_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'beehive_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'barrel_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'door_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'iron_door_zombie', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'football_player_zombie', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'bouncer_zombie', level: 3, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_climber', level: 3, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_runner', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_boxer', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'muscular_zombie', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'pool_tube_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_diver', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'deep_sea_diver_zombie', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_farmer', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_fisherman', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'beekeeper_zombie', level: 3, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_lumberjack', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_miner', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'construction_worker_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_painter', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_clown', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'disco_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_dancer', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'mc_donalds_worker_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_cook', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_doctor', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_astronaut', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'robotic_zombie', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_scientist', level: 4, type: EntityType.zombie, sieger: true},
    {mod: 'infectious', name: 'fire_fighter_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_agent', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'security_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_police', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'swat_zombie', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_soldier', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_prisoner', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'psycho_zombie', level: 5, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_bomber', level: 5, type: EntityType.zombie},
    {mod: 'infectious', name: 'franklin_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'baseball_bat_zombie', level: 3, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_archer', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'firework_zombie', level: 5, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_warrior', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_horseman', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'burning_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'burned_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'withered_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'frozen_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'muddy_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'balloon_zombie_no_balloon', level: 4, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_horseman_no_horse', level: 2, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_miner_spawn', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_screamer', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'tower_zombie_1', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'tower_zombie_2', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'tower_zombie_3', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'tower_zombie_4', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombified_bird', level: 4, type: EntityType.zombie, sieger: true},
]
const infectiousSpawn = createMobSpawn('infectious', infectiousEntities, DEFAULT_MOB_COUNT);
const undead_revamp2Entities = [
    {mod: 'undead_revamp2', name: 'theheavy', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'bomber', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'thebidy', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'thepregnant', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'theimmortal', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'invisiimmortal', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'thedungeon', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'thesmoker', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'theswarmer', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'thegliter', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'the_moonflower', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'sucker', level: 6, type: EntityType.zombie, sieger: true},
    {mod: 'undead_revamp2', name: 'thehunter', level: 6, type: EntityType.zombie, sieger: true},
    {mod: 'undead_revamp2', name: 'thesomnolence', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'bigsucker', level: 6, type: EntityType.zombie, sieger: true},
    {mod: 'undead_revamp2', name: 'invisiblebidy', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'thelurker', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'theposessive', level: 6, type: EntityType.zombie},
    {mod: 'undead_revamp2', name: 'therabidus', level: 6, type: EntityType.zombie},
]
const undead_revamp2Spawn = createMobSpawn('undead_revamp2', undead_revamp2Entities, DEFAULT_MOB_COUNT);
const zombie_extremeEntities = [
    {mod: 'zombie_extreme', name: 'infected', level: 1, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'runner', level: 1, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'infected_police', level: 1, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'infected_hazmat', level: 1, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'infected_military', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'infected_juggernaut', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'boomer', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'crawler', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'demolisher', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'ram', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'chainsaw', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'explosive_infected', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'night_hunter', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'rat_king', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'clicker', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'inflated', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'faceless', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'goon', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'revived', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'divided', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'devestated', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'parasite', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'zero_patient', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'fetus', level: 2, type: EntityType.zombie},
    {mod: 'zombie_extreme', name: 'military', level: 0, type: EntityType.human},
    {mod: 'zombie_extreme', name: 'assasin_black_ops', level: 0, type: EntityType.human},
]
const zombie_extremeSpawn = createMobSpawn('zombie_extreme', zombie_extremeEntities, DEFAULT_MOB_COUNT);
const mutantmonstersEntities = [
    {mod: 'mutantmonsters', name: 'mutant_skeleton', level: 3, type: EntityType.skeleton},
    {mod: 'mutantmonsters', name: 'mutant_zombie', level: 3, type: EntityType.zombie},
]
const mutantmonstersSpawn = createMobSpawn('mutantmonsters', mutantmonstersEntities, MOB_COUNT_LOW);
const mutantmoreEntities = [
    {mod: 'mutantmore', name: 'mutant_wither_skeleton', level: 1, type: EntityType.skeleton},
    {mod: 'mutantmore', name: 'mutant_husk', level: 7, type: EntityType.zombie},
    {mod: 'mutantmore', name: 'mutant_frozen_zombie', level: 7, type: EntityType.zombie},
    {mod: 'mutantmore', name: 'mutant_jungle_zombie', level: 7, type: EntityType.zombie},
]
const mutantmoreSpawn = createMobSpawn('mutantmore', mutantmoreEntities, MOB_COUNT_LOW);
const specialmobsEntities = [
    {mod: 'specialmobs', name: 'brutezombie', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'firezombie', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'frozenzombie', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'giantzombie', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'hungryzombie', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'madscientistzombie', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'plaguezombie', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'abyssaldrowned', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'brutedrowned', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'frozendrowned', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'giantdrowned', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'hungrydrowned', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'knightdrowned', level: 2, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'plaguedrowned', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'zombifiedpiglin', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'brutezombifiedpiglin', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'fishingzombifiedpiglin', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'giantzombifiedpiglin', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'hungryzombifiedpiglin', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'knightzombifiedpiglin', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'plaguezombifiedpiglin', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'plaguezombifiedpiglin', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'bruteskeleton', level: 8, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'fireskeleton', level: 8, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'gatlingskeleton', level: 8, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'giantskeleton', level: 8, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'knightskeleton', level: 2, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'ninjaskeleton', level: 8, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'poisonskeleton', level: 8, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'sniperskeleton', level: 8, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'spitfireskeleton', level: 8, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'weatheredskeleton', level: 2, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'brutewitherskeleton', level: 1, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'gatlingwitherskeleton', level: 1, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'giantwitherskeleton', level: 1, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'knightwitherskeleton', level: 1, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'ninjawitherskeleton', level: 1, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'sniperwitherskeleton', level: 1, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'spitfirewitherskeleton', level: 1, type: EntityType.skeleton},
    {mod: 'specialmobs', name: 'babyghast', level: 9, type: EntityType.ghost},
    {mod: 'specialmobs', name: 'corporealshiftghast', level: 9, type: EntityType.ghost},
    {mod: 'specialmobs', name: 'fighterghast', level: 9, type: EntityType.ghost},
    {mod: 'specialmobs', name: 'kingghast', level: 9, type: EntityType.ghost},
    {mod: 'specialmobs', name: 'queenghast', level: 9, type: EntityType.ghost},
    {mod: 'specialmobs', name: 'slabghast', level: 9, type: EntityType.ghost},
    {mod: 'specialmobs', name: 'unholyghast', level: 9, type: EntityType.ghost},
]
const specialmobsSpawn = createMobSpawn('specialmobs', specialmobsEntities, MOB_NO_LIMIT);
const mozombies_waveEntities = [
    {mod: 'mozombies_wave', name: 'survivor', level: 0, type: EntityType.human},
    {mod: 'mozombies_wave', name: 'disco_zombie', level: 1, type: EntityType.zombie},
    {mod: 'mozombies_wave', name: 'zombie_chef', level: 1, type: EntityType.zombie},
    {mod: 'mozombies_wave', name: 'zombie_cyborg', level: 2, type: EntityType.zombie},
    {mod: 'mozombies_wave', name: 'zombie_king', level: 1, type: EntityType.zombie},
    {mod: 'mozombies_wave', name: 'zombie_knight', level: 1, type: EntityType.zombie},
    {mod: 'mozombies_wave', name: 'zombie_miner', level: 1, type: EntityType.zombie},
    {mod: 'mozombies_wave', name: 'zombie_pa', level: 1, type: EntityType.zombie},
    {mod: 'mozombies_wave', name: 'zombie_pirate', level: 1, type: EntityType.zombie},
    {mod: 'mozombies_wave', name: 'zombie_dwarf', level: 1, type: EntityType.zombie},
    {mod: 'mozombies_wave', name: 'nether_zombie', level: 1, type: EntityType.zombie},
    {mod: 'mozombies_wave', name: 'zombie_creeper', level: 5, type: EntityType.zombie, sieger: true},
]
const mozombies_waveSpawn = createMobSpawn('mozombies_wave', mozombies_waveEntities, MOB_COUNT_HIGH);

const graveyardEntities: Entity[] = [
    {mod: 'graveyard', name: 'reaper', level: 5, type: EntityType.ghost, sieger: true},
    {mod: 'graveyard', name: 'acolyte', level: 1, type: EntityType.demon},
    {mod: 'graveyard', name: 'corrupted_vindicator', level: 1, type: EntityType.demon},
    {mod: 'graveyard', name: 'corrupted_pillager', level: 1, type: EntityType.demon},
    {mod: 'graveyard', name: 'ghoul', level: 1, type: EntityType.demon},
    {mod: 'graveyard', name: 'revenant', level: 1, type: EntityType.demon},
    {mod: 'graveyard', name: 'wraith', level: 5, type: EntityType.ghost, sieger: true},
    {mod: 'graveyard', name: 'ghouling', level: 1, type: EntityType.demon},
    {mod: 'graveyard', name: 'nameless_hanged', level: 0, type: EntityType.demon},
]

const graveyardEntitiesSpawn = createMobSpawn("graveyard", graveyardEntities, DEFAULT_MOB_COUNT);

const tinyskeletonsEntities: Entity[] = [
    {mod: 'tinyskeletons', name: 'baby_skeleton', level: 8, type: EntityType.skeleton},
    {mod: 'tinyskeletons', name: 'baby_wither_skeleton', level: 8, type: EntityType.skeleton},
    {mod: 'tinyskeletons', name: 'baby_stray', level: 8, type: EntityType.skeleton},
]
const tinyskeletonsSpawn = createMobSpawn('tinyskeletons', tinyskeletonsEntities, DEFAULT_MOB_COUNT);

const giants_overhaulEntities: Entity[] = [
    {mod: 'giants_overhaul', name: 'giant_drowned', level: 5, type: EntityType.zombie},
    {mod: 'giants_overhaul', name: 'giant_husk', level: 5, type: EntityType.zombie},
]
const giants_overhaulSpawn = createMobSpawn('giants_overhaul', giants_overhaulEntities, DEFAULT_MOB_COUNT);


const rottedEntities: Entity[] = [
    {mod: 'rotted', name: 'marine', level: 1, type: EntityType.zombie},
    {mod: 'rotted', name: 'doctor', level: 1, type: EntityType.zombie},
    {mod: 'rotted', name: 'farmer', level: 1, type: EntityType.zombie},
    {mod: 'rotted', name: 'shielder', level: 1, type: EntityType.zombie},
    {mod: 'rotted', name: 'miner', level: 1, type: EntityType.zombie},
    {mod: 'rotted', name: 'adventurer', level: 1, type: EntityType.zombie},
    {mod: 'rotted', name: 'flusk', level: 5, type: EntityType.zombie, sieger: true},
]
const rottedSpawn = createMobSpawn('rotted', rottedEntities, MOB_COUNT_LOW);

const rottencreaturesEntities: Entity[] = [
    {mod: 'rottencreatures', name: 'burned', level: 1, type: EntityType.zombie},
    {mod: 'rottencreatures', name: 'frostbitten', level: 1, type: EntityType.zombie},
    {mod: 'rottencreatures', name: 'swampy', level: 3, type: EntityType.zombie},
    {mod: 'rottencreatures', name: 'undead_miner', level: 2, type: EntityType.zombie},
    {mod: 'rottencreatures', name: 'mummy', level: 3, type: EntityType.zombie},
    {mod: 'rottencreatures', name: 'glacial_hunter', level: 1, type: EntityType.zombie},
    {mod: 'rottencreatures', name: 'hunter_wolf', level: 1, type: EntityType.animal},
    {mod: 'rottencreatures', name: 'dead_beard', level: 1, type: EntityType.zombie},
    {mod: 'rottencreatures', name: 'zombie_lackey', level: 1, type: EntityType.zombie},
    {mod: 'rottencreatures', name: 'skeleton_lackey', level: 1, type: EntityType.skeleton},
    {mod: 'rottencreatures', name: 'immortal', level: 1, type: EntityType.zombie},
    {mod: 'rottencreatures', name: 'zap', level: 1, type: EntityType.zombie},
]

const rottencreaturesSpawn = createMobSpawn('rottencreatures', rottencreaturesEntities, DEFAULT_MOB_COUNT);

const undeadvariantsEntities: Entity[] = [
    {mod: 'undeadvariants', name: 'zombified_piglin_brute', level: 1, type: EntityType.zombie},
    {mod: 'undeadvariants', name: 'husk_villager', level: 1, type: EntityType.zombie},
    {mod: 'undeadvariants', name: 'drowned_piglin', level: 1, type: EntityType.zombie},
    {mod: 'undeadvariants', name: 'drowning_piglin', level: 1, type: EntityType.zombie},
    {mod: 'undeadvariants', name: 'drowned_villager', level: 1, type: EntityType.zombie},
    {mod: 'undeadvariants', name: 'drowning_zombie_villager', level: 1, type: EntityType.zombie},
]

const undeadvariantsSpawn = createMobSpawn('undeadvariants', undeadvariantsEntities, DEFAULT_MOB_COUNT);


const mods: string[] = [
    "apocalypse",
    "mutantszombies",
    "angry_animals",
    "much_more_skeletons",
    "mobz",
    "born_in_chaos_v1",
    "infectious",
    "undead_revamp2",
    "zombie_extreme",
    "mutantmonsters",
    "mutantmore",
    "specialmobs",
    "mozombies_wave",
    "graveyard",
    "tinyskeletons",
    "giants_overhaul",
    "rotted",
    "rottencreatures",
    "undeadvariants"
]

const spawns: modSpawnInfo[] = [
    apocalypseSpawn,
    mutantszombiesSpawn,
    angry_animalsSpawn,
    much_more_skeletonsSpawn,
    mobzSpawn,
    born_in_chaos_v1Spawn,
    infectiousSpawn,
    undead_revamp2Spawn,
    zombie_extremeSpawn,
    mutantmonstersSpawn,
    mutantmoreSpawn,
    specialmobsSpawn,
    mozombies_waveSpawn,
    graveyardEntitiesSpawn,
    tinyskeletonsSpawn,
    giants_overhaulSpawn,
    rottedSpawn,
    rottencreaturesSpawn,
    undeadvariantsSpawn
]


const allEntitiesArr: Entity[][] = [
    minecraftEntities,
    apocalypseEntities,
    mutantszombiesEntities,
    angry_animalsEntities,
    much_more_skeletonsEntities,
    mobzEntities,
    born_in_chaos_v1Entities,
    infectiousEntities,
    undead_revamp2Entities,
    zombie_extremeEntities,
    mutantmonstersEntities,
    mutantmoreEntities,
    specialmobsEntities,
    mozombies_waveEntities,
    graveyardEntities,
    tinyskeletonsEntities,
    giants_overhaulEntities,
    rottedEntities,
    rottencreaturesEntities,
    undeadvariantsEntities
]

function getAllEntities() {
    const allEntities: Entity[] = []
    for (let entities of allEntitiesArr) {
        allEntities.push(...entities);
    }
    return allEntities;
}

// for (let entities of allEntitiesArr) {
//     outputEntities(entities)
// }

function outputMods() {
    let modStr = ``
    for (let mod of mods) {
        modStr += `"${mod}", `
    }
    console.log(`"mods": [${modStr}]`)
}

function spawnDeny() {
    let content = '';
    for (let spawn of spawns) {
        const entityName = spawn.entities
            .filter(entity => entity.type !== EntityType.human)
            // .filter(entity => !entity.sieger)
            .map(entity => `"${entity.mod}:${entity.name}"`);
        if (entityName.length === 0)
            continue;
        content += `
  {
    "mob": [${entityName.join(',')}],
    "mincount": {
       "amount": ${spawn.maxCount},
                    "mob": [${entityName.join(',')}],
                    "perplayer": true
                },
                "result": "deny"
            },
            `
    }
    console.log(content)
    outputContent(`[\n${content}\n]`, 'deny.json')
}

function spawnMobs() {
    let content = '';
    for (let i = 0; i < 10; i++) {
        const day = i * 10;
        const names = getAllEntities()
            .filter(entity => i >= entity.level - 1)
            // .filter(entity => !entity.sieger)
            .filter(entity => entity.type !== EntityType.human)
            .map(entity => `"${entity.mod}:${entity.name}"`);
        if (names.length === 0)
            continue;
        const equipment =
            `"armorhelmet": "morevanillaarmor:paper_helmet",`
        const potion = `"potion": "minecraft:fire_resistance,24000,1",`
        content += `
  {
    "mob": [${names.join(',')}],
    "dimension": "minecraft:overworld",
    "phase": "range_day_${day}",
    "damagemultiply": ${Math.max(1, Math.floor((i - 1) / 2) + 1)},
    "speedmultiply": ${1 + Math.max(Math.floor(i / 2) * 0.1, 0.0)},
    ${day === 90 ? potion : ''}
    "result": "allow"
  },
            `
    }
    console.log(content)
    outputContent(`[\n${content}\n]`, 'spawn.json')
}

function rangeDay() {
    let output = '';
    for (let i = 0; i < 11; i++) {
        const day = i * 10;
        output += `{
 "name": "range_day_${day}",
 "conditions": {
  "daycount": "repeat(${DAY_RANGE},${day},${day + 9})"
  }
 },
  `
    }
    const content = `[${output} ]`
    outputContent(content, 'rangeDay.json');
}

function rangeDayNight() {
    let output = '';
    for (let i = 0; i < 11; i++) {
        const day = i * 10;
        output += `{
 "name": "range_day_${day}_night",
 "conditions": {
  "daycount": "repeat(${DAY_RANGE},${day},${day + 9})",
   "mintime": 13000,
  "maxtime": 24000
  }
 },
  `
    }
    const content = `[${output} ]`
    outputContent(content, 'rangeDayNight.json');
}

function opAfterDayPhase() {
    let output = '';
    for (let i = 0; i < 11; i++) {
        const day = i * 10;
        output += `{
 "name": "reach_day_${day}",
 "conditions": {
  "daycount": "repeat(${DAY_RANGE},${day},${DAY_RANGE})"
  }
 },
  `
    }
    const content = `[${output} ]`
    outputContent(content, 'AfterDayPhase.json');
}

const invadeMobs: [Entity, string][] = [
    [{mod: 'minecraft', name: 'zombie', level: 1, type: EntityType.zombie}, ""],
    [{mod: 'minecraft', name: 'drowned', level: 1, type: EntityType.zombie}, "inliquid"],
    [{mod: 'infectious', name: 'balloon_zombie', level: 4, type: EntityType.zombie}, "inair"],
]

function opDayNightPhase() {
    let output = '';
    for (let i = 1; i <= 11; i++) {
        const day = i * 10 - 1;
        output += `{
 "name": "on_day_${day}_night",
 "conditions": {
  "daycount": "repeat(${DAY_RANGE},${day},${day})",
  "mintime": 13000,
  "maxtime": 24000
  }
 },
  `
    }
    const content = `[\n${output}\n]`
    outputContent(content, 'at_day_night_phase.json');
}

function opDayTimePhase() {
    let output = '';
    for (let i = 0; i <= 10; i++) {
        output += `{
 "name": "after_day_${i * 10}_daytime",
 "conditions": {
  "mindaycount": ${i * 10},
   "mintime": 0,
  "maxtime": 13000
  }
 },
  `
    }
    const content = `[${output} ]`
    outputContent(content, 'after_daytime_phase.json');
}

function opAllMobs() {
    const name = getAllEntities()
        .filter(entity => entity.type === EntityType.human)
        .map(entity => `${entity.mod}:${entity.name}`);
    const content: string = `\n${name.join(',')}\n`;
    outputContent(`${content}`, 'allMobs.txt');
}

function tags() {
    let content = ''
    const allEntities = getAllEntities()
        .filter(entity => entity.mod !== "minecraft")
        .filter(entity => entity.type !== EntityType.human)
    for (let entity of allEntities) {
        content += `
        {
            "required": false,
            "id": "${entity.mod}:${entity.name}"
        },\n
        `
    }
    outputContent(`[\n${content}\n]`, 'tags.json');
}

const nightSiegers: [Entity, number, string][] = [
    [{mod: 'minecraft', name: 'ghast', level: 7, type: EntityType.ghost, sieger: true}, 3, "inair"],
    [{mod: 'minecraft', name: 'creeper', level: 5, type: EntityType.zombie, sieger: true}, 8, ""],
    [{mod: 'apocalypse', name: 'destroyer', level: 10, type: EntityType.ghost, sieger: true}, 3, "inair"],
    [{mod: 'apocalypse', name: 'seeker', level: 7, type: EntityType.ghost, sieger: true}, 3, "inair"],
    [{mod: 'angry_animals', name: 'angry_bee', level: 4, type: EntityType.animal, sieger: true}, 3, "inair"],
    [{mod: 'born_in_chaos_v1', name: 'restless_spirit', level: 4, type: EntityType.ghost, sieger: true}, 3, "inair"],
    [{mod: 'born_in_chaos_v1', name: 'scarlet_persecutor', level: 5, type: EntityType.ghost, sieger: true}, 3, "inair"],
    [{mod: 'infectious', name: 'balloon_zombie', level: 4, type: EntityType.zombie, sieger: true}, 3, "inair"],
    [{mod: 'infectious', name: 'zombie_scientist', level: 4, type: EntityType.zombie, sieger: true}, 3, "inair"],
    [{mod: 'infectious', name: 'zombified_bird', level: 4, type: EntityType.zombie, sieger: true}, 3, "inair"],
    [{mod: 'undead_revamp2', name: 'sucker', level: 6, type: EntityType.zombie, sieger: true}, 3, "inair"],
    [{mod: 'undead_revamp2', name: 'thehunter', level: 6, type: EntityType.zombie, sieger: true}, 3, "inair"],
    [{mod: 'undead_revamp2', name: 'bigsucker', level: 6, type: EntityType.zombie, sieger: true}, 3, "inair"],
    [{mod: 'mozombies_wave', name: 'zombie_creeper', level: 5, type: EntityType.zombie, sieger: true}, 8, "inair"],
    [{mod: 'minecraft', name: 'drowned', level: 1, type: EntityType.zombie}, 15, "inliquid"],
    [{mod: 'infectious', name: 'pool_tube_zombie', level: 1, type: EntityType.zombie}, 10, "inliquid"],
    [{mod: 'infectious', name: 'zombie_diver', level: 1, type: EntityType.zombie}, 10, "inliquid"],
    [{mod: 'graveyard', name: 'reaper', level: 5, type: EntityType.zombie}, 10, "inair"],
    [{mod: 'graveyard', name: 'wraith', level: 5, type: EntityType.zombie}, 10, "inair"],
    [{mod: 'rotted', name: 'flusk', level: 5, type: EntityType.zombie, sieger: true}, 3, 'inair'],
]


function spawnerSiegers() {
    let content = '';
    for (let i = 0; i < 10; i++) {
        const day = (i * 10) + 9;
        const entities = nightSiegers
            .filter(sieger => sieger[0].level - 1 <= i);
        const persecond = (day + 1) % 50 === 0 ? 0.034 : 0.017;
        const baseCount = (day + 1) % 50 === 0 ? 5 : 2;
        for (let entity of entities) {
            content += `
            {
            "mob": "${entity[0].mod}:${entity[0].name}",
            "phase": "on_day_${day}_night",
            "persecond": ${persecond},
            "attempts": 20,
            "amount": { "minimum": ${Math.max(Math.floor(entity[1] / 3), 1)}, "maximum": ${entity[1]} },
            "conditions": {
              "dimension": "minecraft:overworld",
              ${entity[2] === "" ? "" : `"${entity[2]}": true,`}
              "norestrictions": true,
              "mindist": 24,
              "maxdist": 64,
              "maxthis": ${Math.max(1, Math.floor(entity[1] / 2)) * 10}
              }
            },\n`
        }
    }
    outputContent(`[\n${content}\n]`, 'spawnerSiegers.json');
}

function spawnerinvade() {
    let content = '';
    for (let i = 0; i < 10; i++) {
        const day = i * 10;
        const entities = invadeMobs
            .filter(sieger => sieger[0].level - 1 <= i);
        const persecond = 0.0167;
        const count = i + 1
        for (let entity of entities) {
            content += `
            {
            "mob": "${entity[0].mod}:${entity[0].name}",
            "phase": "range_day_${day}",
            "persecond": ${persecond},
            "attempts": 20,
            "amount": { "minimum": ${count}, "maximum": ${count} },
            "conditions": {
              "dimension": "minecraft:overworld",
              ${entity[1] === "" ? "" : `"${entity[1]}": true,`}
              "norestrictions": true,
              "mindist": 24,
              "maxdist": 64
              }
            },\n`
        }
    }
    outputContent(`[\n${content}\n]`, 'spawnerinvade.json');
}

function commonDayNight() {
    let output = '';
    for (let i = 0; i < 11; i++) {
        const day = i * 10;
        output += `{
 "name": "reach_day_${day}_night",
 "conditions": {
  "daycount": "repeat(${DAY_RANGE},${day},${DAY_RANGE})",
  "mintime": 13000,
  "maxtime": 24000
  }
 },
  `
    }
    const content = `[\n${output}\n]`
    outputContent(content, 'commonDayNight.json');
}

const commonSiegers: [Entity, string][] = [
    [{mod: 'minecraft', name: 'ghast', level: 7, type: EntityType.ghost, sieger: true}, "inair"],
    [{mod: 'minecraft', name: 'creeper', level: 5, type: EntityType.zombie, sieger: true}, ""],
    [{mod: 'apocalypse', name: 'seeker', level: 7, type: EntityType.ghost, sieger: true}, "inair"],
    [{mod: 'angry_animals', name: 'angry_bee', level: 4, type: EntityType.animal, sieger: true}, "inair"],
    [{mod: 'born_in_chaos_v1', name: 'restless_spirit', level: 4, type: EntityType.ghost, sieger: true}, "inair"],
    [{mod: 'born_in_chaos_v1', name: 'scarlet_persecutor', level: 5, type: EntityType.ghost, sieger: true}, "inair"],
    [{mod: 'infectious', name: 'balloon_zombie', level: 4, type: EntityType.zombie, sieger: true}, "inair"],
    [{mod: 'infectious', name: 'zombie_scientist', level: 4, type: EntityType.zombie, sieger: true}, "inair"],
    [{mod: 'infectious', name: 'zombified_bird', level: 4, type: EntityType.zombie, sieger: true}, "inair"],
    [{mod: 'undead_revamp2', name: 'sucker', level: 6, type: EntityType.zombie, sieger: true}, "inair"],
    [{mod: 'undead_revamp2', name: 'thehunter', level: 6, type: EntityType.zombie, sieger: true}, "inair"],
    [{mod: 'undead_revamp2', name: 'bigsucker', level: 6, type: EntityType.zombie, sieger: true}, "inair"],
    [{mod: 'mozombies_wave', name: 'zombie_creeper', level: 5, type: EntityType.zombie, sieger: true}, "inair"],
    [{mod: 'minecraft', name: 'drowned', level: 1, type: EntityType.zombie}, "inliquid"],
    [{mod: 'infectious', name: 'pool_tube_zombie', level: 1, type: EntityType.zombie}, "inliquid"],
    [{mod: 'infectious', name: 'zombie_diver', level: 1, type: EntityType.zombie}, "inliquid"],
    [{mod: 'graveyard', name: 'reaper', level: 5, type: EntityType.zombie}, "inair"],
    [{mod: 'graveyard', name: 'wraith', level: 5, type: EntityType.zombie}, "inair"],
]

const humans: string[] = [
    "minecraft:iron_golem",
    "guardvillagers:guard",
    "roamers:bandit",
    "roamers:hermit",
    "roamers:player_descendant",
    "roamers:roamer",
    "minecraft:evoker",
    "minecraft:witch",
    "minecraft:pillager",
    "minecraft:vindicator",
    "minecraft:ravager",
    "minecraft:vex",
    "minecraft:witch",
    "minecraft:villager",
    "player_mobs:player_mob",
    "players:fake_player",
    "mobz:bowman",
    "mobz:archer",
    "mobz:templar",
    "mobz:warrior",
    "mobz:iron_steve",
    "mobz:knight",
    "mobz:william",
    "mobz:andriu",
    "mobz:charles",
    "zombie_extreme:military",
    "zombie_extreme:assasin_black_ops",
    "mozombies_wave:survivor",
    "humancompanions:knight",
    "humancompanions:archer",
    "humancompanions:arbalist",
    "humancompanions:axeguard",
]

const humanVillager = [
    "guardvillagers:guard",
    "roamers:bandit",
    "roamers:hermit",
    "roamers:player_descendant",
    "roamers:roamer",
    "minecraft:evoker",
    "minecraft:pillager",
    "minecraft:vindicator",
    "minecraft:ravager",
    "minecraft:witch",
    "player_mobs:player_mob",
    "players:fake_player",
    "mobz:bowman",
    "mobz:archer",
    "mobz:templar",
    "mobz:warrior",
    "mobz:iron_steve",
    "mobz:knight",
    "mobz:william",
    "mobz:andriu",
    "mobz:charles",
    "zombie_extreme:military",
    "zombie_extreme:assasin_black_ops",
    "mozombies_wave:survivor",
    "humancompanions:knight",
    "humancompanions:archer",
    "humancompanions:arbalist",
    "humancompanions:axeguard",
]

const equipHumans = [
    "guardvillagers:guard",
    "roamers:bandit",
    "roamers:hermit",
    "roamers:player_descendant",
    "roamers:roamer",
    "minecraft:evoker",
    "minecraft:witch",
    "minecraft:pillager",
    "minecraft:ravager",
    "minecraft:villager",
    "player_mobs:player_mob",
    "players:fake_player",
    "mobz:bowman",
    "mobz:archer",
    "mobz:templar",
    "mobz:warrior",
    "mobz:iron_steve",
    "mobz:knight",
    "mobz:william",
    "mobz:andriu",
    "mobz:charles",
    "zombie_extreme:military",
    "zombie_extreme:assasin_black_ops",
    "mozombies_wave:survivor",
    "humancompanions:knight",
    "humancompanions:archer",
    "humancompanions:arbalist",
    "humancompanions:axeguard",
]

function commonSiegersSpawner() {
    let content = '';
    for (let i = 0; i < 10; i++) {
        const siegers = commonSiegers
            .filter(sieger => sieger[0].level - 1 <= i)
        const names =
            siegers.map(sieger => `"${sieger[0].mod}:${sieger[0].name}"`)
        const day = i * 10;
        const persecond = 0.0167;
        const count = Math.floor(i / 2) + 1
        content += `
            {
            "mob": [${names.join(',')}],
            "phase": "range_day_${day}_night",
            "persecond": ${persecond},
            "attempts": 20,
            "amount": { "minimum": ${count}, "maximum": ${count} },
            "conditions": {
              "dimension": "minecraft:overworld",
              "norestrictions": true,
              "mindist": 24,
              "maxdist": 64
              }
            },\n`
    }
    outputContent(`[\n${content}\n]`, 'commonSiegers.json');

}


function osHumans() {
    const content = humans
        // .map(human => `"${human}"`)
        .join(',');
    console.log(content)
    outputContent(`[\n${content}\n]`, 'osHumans.json');
}

function osMobs() {
    const content = getAllEntities()
        .filter(entity => entity.type !== EntityType.human)
        .map(entity => `${entity.mod}:${entity.name}`)
        .join(',');
    console.log(content)
}

function osHumanVillagers() {
    let contents = [];
    for (let i = 0; i < humanVillager.length - 1; i++) {
        const villager = humanVillager[i];
        const mod1 = villager.split(":")[0];
        const name1 = villager.split(":")[1];
        let flag = false;
        for (let j = i + 1; j < humanVillager.length; j++) {
            const villager1 = humanVillager[j];
            const mod2 = villager1.split(':')[0];
            const name2 = villager1.split(':')[1];
            if (mod1 === mod2) {
                flag = true;
                const content = `"${mod1}:${name1};${mod2}:${name2};2;10"`;
                console.log(content)
                contents.push(content);
            }
        }
        if (!flag) {
            const content = `"${mod1}:${name1};${mod1}:${name1};2;10"`;
            contents.push(content);
        }
    }
    outputContent(`[${contents.join(',')}]`, 'osHumanVillagers.json');
}

function osMobLevel(level: number) {
    let content = ''
    const allEntities = getAllEntities()
        .filter(entity => entity.mod !== "minecraft")
        .filter(entity => entity.level === level)
        .filter(entity => entity.type !== EntityType.human)
    for (let entity of allEntities) {
        content += `
        {
            "required": false,
            "id": "${entity.mod}:${entity.name}"
        },\n
        `
    }
    outputContent(`[\n${content}\n]`, 'level1s.json');
}

const replacers = [
    "minecraft:evoker",
    "minecraft:witch",
    "minecraft:pillager",
    "mobz:bowman",
    "mobz:archer",
    "minecraft:vindicator",
    "humancompanions:archer",
    "humancompanions:arbalist",
    "guardvillagers:guard",
    "roamers:bandit",
    "roamers:hermit",
    "roamers:player_descendant",
    "roamers:roamer",
    "player_mobs:player_mob",
    "players:fake_player",
    "mobz:templar",
    "mobz:warrior",
    "mobz:iron_steve",
    "mobz:knight",
    "mobz:william",
    "mobz:andriu",
    "mobz:charles",
    "zombie_extreme:military",
    "zombie_extreme:assasin_black_ops",
    "mozombies_wave:survivor",
    "humancompanions:knight",
    "humancompanions:axeguard"
]

function osReplacers() {
    let content = '';
    for (let replacer of replacers) {
        content += `
        {
        "mobId": "${replacer}",
        "weight": 10
      },
        `
    }
    outputContent(`[${content}]`, 'replacers.json');
}

function replacerTags() {
    let content = ''
    for (let replacer of replacers) {
        content += `
        {
            "required": false,
            "id": "${replacer}"
        },\n
        `
    }
    outputContent(`[\n${content}\n]`, 'replacerTags.json');
}

const drowneds = [
    {mod: 'specialmobs', name: 'abyssaldrowned', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'brutedrowned', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'frozendrowned', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'giantdrowned', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'hungrydrowned', level: 1, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'knightdrowned', level: 2, type: EntityType.zombie},
    {mod: 'specialmobs', name: 'plaguedrowned', level: 1, type: EntityType.zombie},
    {mod: 'minecraft', name: 'drowned', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'pool_tube_zombie', level: 1, type: EntityType.zombie},
    {mod: 'infectious', name: 'zombie_diver', level: 1, type: EntityType.zombie},
    {mod: 'undeadvariants', name: 'drowned_piglin', level: 1, type: EntityType.zombie},
    {mod: 'undeadvariants', name: 'drowning_piglin', level: 1, type: EntityType.zombie},
    {mod: 'undeadvariants', name: 'drowned_villager', level: 1, type: EntityType.zombie},
    {mod: 'giants_overhaul', name: 'giant_drowned', level: 5, type: EntityType.zombie},
]

function tagDrowneds() {
    let content = ''
    for (let drowned of drowneds) {
        content += `
        {
            "required": false,
            "id": "${drowned.mod}:${drowned.name}"
        },\n
        `
    }
    outputContent(`[\n${content}\n]`, 'tagDrowneds.json');
}

function test() {
    const entities = getAllEntities()
        .filter(entity =>  entity.type === EntityType.zombie)
        .map(entity => `${entity.mod}:${entity.name}`)
    outputContent(JSON.stringify(entities ), 'zombiessss.json');
}

function main() {
    test();
}

main();

console.log('============================Done==========================');