export enum EntityType {
    zombie = 'zombie',
    skeleton = 'skeleton',
    animal = 'animal',
    creeper = 'creeper',
    ghost = 'ghost',
    human = 'human',
    demon = "demon",
    unknown = 'unknown',
}
export interface Entity {
    mod: string;
    name: string;
    level: number;
    type: EntityType;
    sieger?: boolean;
}

export interface modSpawnInfo {
    mod: string;
    entities: Entity[];
    maxCount: number;
}