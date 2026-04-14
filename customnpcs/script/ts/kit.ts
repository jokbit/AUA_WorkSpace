// 子对话框类型
export interface SubDialog {
    label: string;
    text: string;
    taskId?: number;
    giftId?: number;
}

// 对话框类型
export interface Dialog {
    subTitle?: string;
    label: string;
    sub?: SubDialog[];
}

// 任务类型
export interface Task {
    id: number;
    type: number;
    item?: string;
    mob?: string;
    count: number;
    label: string;
    text: string;
    completeText: string;
}

// 礼物类型
export interface Gift {
    id: number;
    item: string;
    count: number;
    label: string;
    text: string;
    completeText: string;
}

// NPC主对象类型
export interface NPC {
    id: number;
    name: string;
    weapon: string;
    armors: string[];
    npcLines: string[];
    texture: string;
    dialogs: Dialog[];
    tasks: Task[];
    gifts: Gift[];
}