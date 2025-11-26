export type Locale = "en" | "zh-CN" | "zh-TW";

export const defaultLocale: Locale = "zh-CN";

export const localeOptions: { code: Locale; labelKey: TranslationKey }[] = [
  { code: "en", labelKey: "language.en" },
  { code: "zh-CN", labelKey: "language.zh-CN" },
  { code: "zh-TW", labelKey: "language.zh-TW" },
];

const en = {
  "app.title": "Coding Farm (Open Source)",
  "app.description":
    "Coding Farm open source edition - program a farm with JavaScript",
  "app.unusedSlot": "Unused save slot",

  "header.run": "Run",
  "header.abort": "Abort",
  "header.reset": "Reset",
  "header.save": "Save",
  "header.techTree": "Tech Tree",

  "saveStart.title": "Coding Farm (Open Source)",
  "saveStart.subtitle": "Choose how to start:",
  "saveStart.newGame": "New Game",
  "saveStart.loadGame": "Load Save",
  "saveStart.chooseSlot": "Pick a save",
  "saveStart.empty": "No saves yet",
  "saveStart.autoName": "Save {time}",

  "confirm.deleteTitle": "Delete Save",
  "confirm.deleteMessage": 'Are you sure you want to delete "{name}"?',
  "confirm.cancel": "Cancel",
  "confirm.ok": "Delete",

  "alert.ok": "OK",

  "saveCard.neverSaved": "Not saved yet",
  "saveCard.load": "Load",
  "saveCard.delete": "Delete",

  "console.title": "Console Output",
  "console.user": "[User]",
  "console.system": "[System]",

  "status.running": "Running…",
  "status.ready": "Ready",
  "status.aborted": "Run aborted ⛔",
  "status.completed": "Run completed",
  "status.error": "Code error ⛔ {error}",
  "status.timeout": "Run timed out ⏰",
  "status.reset": "Reset done ⟳",

  "unlock.tooltip.feature": "Feature",
  "unlock.tooltip.currentLevel": "Current Level",
  "unlock.tooltip.locked": "Locked",
  "unlock.tooltip.currentEffect": "Current Effect",
  "unlock.tooltip.upgradeNeeds": "Upgrade Cost",
  "unlock.tooltip.nextEffect": "After Upgrade",
  "unlock.tooltip.maxLevel": "Max level reached",

  "unlock.ability.yieldMultiplier": "Yield multiplier",
  "unlock.ability.appleYieldMultiplier": "Apple yield multiplier",
  "unlock.ability.worldSize": "World size",
  "unlock.ability.growthBonus": "Growth speed bonus",
  "unlock.ability.goldYieldMultiplier": "Gold yield multiplier",
  "unlock.ability.spawnConcurrency": "Spawn concurrency",
  "unlock.ability.speedMultiplier": "Speed multiplier",
  "unlock.ability.waterPerSec": "Water per second",

  "unlock.cactus.name": "Cactus",
  "unlock.cactus.desc":
    "Boost cactus output so it becomes a high-value resource. Each level multiplies cactus yield.",
  "unlock.carrots.name": "Carrot",
  "unlock.carrots.desc":
    "Increase carrot production so it grows into a major value source. Each level multiplies carrot yield.",
  "unlock.debug.name": "console.log()",
  "unlock.debug.desc":
    "Unlock console.log() for logging messages—essential for debugging and observing game state.",
  "unlock.dictionaries.name": "Dictionaries",
  "unlock.dictionaries.desc":
    "Allow using objects (dictionaries) in code to store and organize complex data structures.",
  "unlock.snake.name": "Snake",
  "unlock.snake.desc":
    "Unlock the Snake model so you can control it to collect apples as an extra resource source.",
  "unlock.expand.name": "Expansion",
  "unlock.expand.desc":
    "Unlock expansion to increase the world size and gain more plantable tiles.",
  "unlock.fertilizer.name": "Fertilizer",
  "unlock.fertilizer.desc":
    "Unlock fertilizer so you can boost plant growth speed and yield.",
  "unlock.functions.name": "Functions",
  "unlock.functions.desc":
    "Unlock functions so you can define and call custom functions for richer interactions.",
  "unlock.grass.name": "Grass",
  "unlock.grass.desc":
    "Unlock grass so you can grow it and gain an additional resource source.",
  "unlock.dino.name": "Baby Dino",
  "unlock.dino.desc": "Unlock the baby dino skin.",
  "unlock.lists.name": "Lists",
  "unlock.lists.desc":
    "Unlock lists so you can create and manipulate list data for more interactions.",
  "unlock.loops.name": "Loops",
  "unlock.loops.desc":
    "Unlock loops so you can repeat code blocks for more interactivity and automation.",
  "unlock.mazes.name": "Maze",
  "unlock.mazes.desc":
    "Unlock the maze system to explore and collect gold for higher-tier tech.",
  "unlock.megafarm.name": "Mega Farm",
  "unlock.megafarm.desc":
    "Unlock mega farm to greatly increase spawn concurrency and overall automation throughput.",
  "unlock.operators.name": "Operators",
  "unlock.operators.desc":
    "Unlock operators to perform basic math and enrich gameplay logic.",
  "unlock.plant.name": "Planting",
  "unlock.plant.desc":
    "Unlock planting so you can plant crops and add more interactive gameplay.",
  "unlock.pumpkins.name": "Pumpkin",
  "unlock.pumpkins.desc":
    "Unlock pumpkin cultivation so you can grow and manage pumpkins for more interaction.",
  "unlock.senses.name": "Sensors",
  "unlock.senses.desc":
    "Unlock sensors to read your current position and enrich game interactions.",
  "unlock.speed.name": "Speed",
  "unlock.speed.desc":
    "Increase the game speed so you can finish tasks faster.",
  "unlock.sunflowers.name": "Sunflower",
  "unlock.sunflowers.desc":
    "Unlock sunflowers as a speed-up material. They are auto-consumed to greatly boost growth speed.",
  "unlock.remains.name": "Farmer's Remains",
  "unlock.remains.desc": "A mysterious relic left behind by the farmer.",
  "unlock.trees.name": "Trees",
  "unlock.trees.desc":
    "Unlock tree production and boost tree output as a steady wood source.",
  "unlock.utilities.name": "Utilities",
  "unlock.utilities.desc":
    "Unlock utility functions such as random() to generate random numbers for richer interactions.",
  "unlock.variables.name": "Variables",
  "unlock.variables.desc":
    "Unlock variables so you can define and use values in code for more interaction.",
  "unlock.watering.name": "Watering",
  "unlock.watering.desc":
    "Unlock watering so you can irrigate soil and speed up growth and yield.",

  "unlock.title": "Tech Tree",
  "unlock.close": "Close",

  "doc.prompt": "Pick a document on the left",

  "language.label": "Language",
  "language.en": "English",
  "language.zh-CN": "简体中文",
  "language.zh-TW": "繁體中文",

  "inventory.hay": "Hay",
  "inventory.wood": "Wood",
  "inventory.carrot": "Carrot",
  "inventory.pumpkin": "Pumpkin",
  "inventory.cactus": "Cactus",
  "inventory.gold": "Gold",
  "inventory.apple": "Apple",
  "inventory.sunflower": "Sunflower",
  "inventory.water": "Water",
  "inventory.fertilizer": "Fertilizer",
} as const;

type TranslationShape = typeof en;

const zhCN: TranslationShape = {
  "app.title": "编程农场开源版",
  "app.description": "编程农场开源版 - 使用 JavaScript 编程的农场游戏",
  "app.unusedSlot": "未使用存档",

  "header.run": "运行",
  "header.abort": "中止",
  "header.reset": "重置",
  "header.save": "保存",
  "header.techTree": "科技树",

  "saveStart.title": "编程农场开源版",
  "saveStart.subtitle": "请选择开始方式：",
  "saveStart.newGame": "新游戏",
  "saveStart.loadGame": "加载存档",
  "saveStart.chooseSlot": "选择一个存档",
  "saveStart.empty": "暂无存档",
  "saveStart.autoName": "存档 {time}",

  "confirm.deleteTitle": "删除存档",
  "confirm.deleteMessage": "确定删除 “{name}” 吗？",
  "confirm.cancel": "取消",
  "confirm.ok": "删除",

  "alert.ok": "确定",

  "saveCard.neverSaved": "尚未保存",
  "saveCard.load": "加载",
  "saveCard.delete": "删除",

  "console.title": "控制台输出",
  "console.user": "[用户]",
  "console.system": "[系统]",

  "status.running": "运行中…",
  "status.ready": "已就绪",
  "status.aborted": "运行已中止 ⛔",
  "status.completed": "运行完成",
  "status.error": "代码错误 ⛔{error}",
  "status.timeout": "运行超时 ⏰",
  "status.reset": "已重置 ⟳",

  "unlock.tooltip.feature": "【功能介绍】",
  "unlock.tooltip.currentLevel": "【当前等级】",
  "unlock.tooltip.locked": "未解锁",
  "unlock.tooltip.currentEffect": "【当前效果】",
  "unlock.tooltip.upgradeNeeds": "【升级需要】",
  "unlock.tooltip.nextEffect": "【升级后效果】",
  "unlock.tooltip.maxLevel": "已达最高等级",

  "unlock.ability.yieldMultiplier": "产量倍率",
  "unlock.ability.appleYieldMultiplier": "苹果产量倍率",
  "unlock.ability.worldSize": "世界尺寸",
  "unlock.ability.growthBonus": "生长速度加成",
  "unlock.ability.goldYieldMultiplier": "金币产量倍率",
  "unlock.ability.spawnConcurrency": "spawn并发数量",
  "unlock.ability.speedMultiplier": "速度倍率",
  "unlock.ability.waterPerSec": "水资源每秒产出",

  "unlock.cactus.name": "仙人掌",
  "unlock.cactus.desc":
    "提高仙人掌的产能，使其成为高价值资源的主要来源。每升一级，使仙人掌产能成倍提升。",
  "unlock.carrots.name": "胡萝卜",
  "unlock.carrots.desc":
    "提高胡萝卜的产量，使其成为高价值资源的主要来源。每升一级，使胡萝卜产量成倍提升。",
  "unlock.debug.name": "console.log()",
  "unlock.debug.desc":
    "解锁 console.log() 函数，用于在控制台输出信息，是调试脚本与观察游戏状态的重要工具。",
  "unlock.dictionaries.name": "{'a':1, 'b':2}",
  "unlock.dictionaries.desc":
    "允许在代码中使用对象（dictionary），以存储和组织更复杂的数据结构，是构建高级自动化逻辑的重要基础能力。",
  "unlock.snake.name": "蛇",
  "unlock.snake.desc":
    "解锁贪吃蛇模型，使你能够操控蛇并收集苹果，为农场提供额外的资源来源。",
  "unlock.expand.name": "扩建",
  "unlock.expand.desc":
    "解锁扩建功能，使你能够增加游戏世界的尺寸，为游戏提供更多的可种植区域。",
  "unlock.fertilizer.name": "肥料",
  "unlock.fertilizer.desc":
    "解锁肥料功能，使你能够为植物添加肥料，提高其生长速度和产量。",
  "unlock.functions.name": "function() {}",
  "unlock.functions.desc":
    "解锁函数功能，使你能够定义和调用自定义函数，为游戏添加更多的交互性和灵活性。",
  "unlock.grass.name": "草",
  "unlock.grass.desc":
    "解锁草功能，使你能够在游戏世界中种植和生长草，为农场提供额外的资源来源。",
  "unlock.dino.name": "小恐龙",
  "unlock.dino.desc": "解锁小恐龙皮肤",
  "unlock.lists.name": "[1,2,3]",
  "unlock.lists.desc":
    "解锁列表功能，使你能够创建和操作列表，为游戏添加更多的交互性和灵活性。",
  "unlock.loops.name": "while",
  "unlock.loops.desc":
    "解锁循环功能，使你能够重复执行代码块，为游戏添加更多的交互性和灵活性。",
  "unlock.mazes.name": "迷宫",
  "unlock.mazes.desc":
    "解锁迷宫系统，可在迷宫中探索并收集金币，为高级科技提供重要资源。",
  "unlock.megafarm.name": "巨型农场",
  "unlock.megafarm.desc":
    "解锁巨型农场系统，显著提升自动化任务的并发能力，让农场整体效率得到巨幅提升。",
  "unlock.operators.name": "1 + 1",
  "unlock.operators.desc":
    "解锁运算符功能，使你能够进行基本的数学运算，为游戏添加更多的交互性和灵活性。",
  "unlock.plant.name": "plant()",
  "unlock.plant.desc":
    "解锁种植功能，使你能够在游戏中种植作物，为游戏添加更多的互动性和趣味性。",
  "unlock.pumpkins.name": "南瓜",
  "unlock.pumpkins.desc":
    "解锁南瓜栽培功能，使你能够在游戏中种植和管理南瓜，为游戏添加更多的互动性和趣味性。",
  "unlock.senses.name": "(x,y)",
  "unlock.senses.desc":
    "解锁传感器功能，使你能够在游戏中获取当前位置的信息，为游戏添加更多的互动性和趣味性。",
  "unlock.speed.name": "速度",
  "unlock.speed.desc": "提升游戏的行动速度，使你能够更快地完成任务。",
  "unlock.sunflowers.name": "向日葵",
  "unlock.sunflowers.desc":
    "解锁向日葵，可将其作为加速材料使用。系统会自动消耗向日葵,能显著提升植物的生长速度。",
  "unlock.remains.name": "农夫的遗骨",
  "unlock.remains.desc": "农夫留下的神秘遗物。",
  "unlock.trees.name": "树",
  "unlock.trees.desc":
    "解锁树木生产，并提升树的产能，使其成为高效稳定的木材来源。",
  "unlock.utilities.name": "random()",
  "unlock.utilities.desc":
    "解锁工具类函数，比如 random()，使你能够在游戏中生成随机数，为游戏添加更多的互动性和趣味性。",
  "unlock.variables.name": "let a = 2",
  "unlock.variables.desc":
    "解锁变量功能，使你能够在游戏中定义和使用变量，为游戏添加更多的互动性和趣味性。",
  "unlock.watering.name": "浇水",
  "unlock.watering.desc":
    "解锁浇水功能，使你能够在游戏中为土壤浇水，提升其生长速度和产量。",

  "unlock.title": "科技树",
  "unlock.close": "关闭",

  "doc.prompt": "请选择左侧文档",

  "language.label": "语言",
  "language.en": "English",
  "language.zh-CN": "简体中文",
  "language.zh-TW": "繁體中文",

  "inventory.hay": "草料",
  "inventory.wood": "木材",
  "inventory.carrot": "胡萝卜",
  "inventory.pumpkin": "南瓜",
  "inventory.cactus": "仙人掌",
  "inventory.gold": "金币",
  "inventory.apple": "苹果",
  "inventory.sunflower": "向日葵",
  "inventory.water": "水",
  "inventory.fertilizer": "肥料",
};

const zhTW: TranslationShape = {
  "app.title": "編程農場開源版",
  "app.description": "編程農場開源版 - 使用 JavaScript 編程的農場遊戲",
  "app.unusedSlot": "未使用存檔",

  "header.run": "執行",
  "header.abort": "中止",
  "header.reset": "重置",
  "header.save": "儲存",
  "header.techTree": "科技樹",

  "saveStart.title": "編程農場開源版",
  "saveStart.subtitle": "請選擇開始方式：",
  "saveStart.newGame": "新遊戲",
  "saveStart.loadGame": "載入存檔",
  "saveStart.chooseSlot": "選擇一個存檔",
  "saveStart.empty": "暫無存檔",
  "saveStart.autoName": "存檔 {time}",

  "confirm.deleteTitle": "刪除存檔",
  "confirm.deleteMessage": "確定刪除「{name}」嗎？",
  "confirm.cancel": "取消",
  "confirm.ok": "刪除",

  "alert.ok": "確定",

  "saveCard.neverSaved": "尚未儲存",
  "saveCard.load": "載入",
  "saveCard.delete": "刪除",

  "console.title": "控制台輸出",
  "console.user": "[用戶]",
  "console.system": "[系統]",

  "status.running": "運行中…",
  "status.ready": "已就緒",
  "status.aborted": "運行已中止 ⛔",
  "status.completed": "運行完成",
  "status.error": "程式錯誤 ⛔{error}",
  "status.timeout": "運行超時 ⏰",
  "status.reset": "已重置 ⟳",

  "unlock.tooltip.feature": "【功能介紹】",
  "unlock.tooltip.currentLevel": "【當前等級】",
  "unlock.tooltip.locked": "未解鎖",
  "unlock.tooltip.currentEffect": "【當前效果】",
  "unlock.tooltip.upgradeNeeds": "【升級需要】",
  "unlock.tooltip.nextEffect": "【升級後效果】",
  "unlock.tooltip.maxLevel": "已達最高等級",

  "unlock.ability.yieldMultiplier": "產量倍率",
  "unlock.ability.appleYieldMultiplier": "蘋果產量倍率",
  "unlock.ability.worldSize": "世界尺寸",
  "unlock.ability.growthBonus": "生長速度加成",
  "unlock.ability.goldYieldMultiplier": "金幣產量倍率",
  "unlock.ability.spawnConcurrency": "spawn並發數量",
  "unlock.ability.speedMultiplier": "速度倍率",
  "unlock.ability.waterPerSec": "水資源每秒產出",

  "unlock.cactus.name": "仙人掌",
  "unlock.cactus.desc":
    "提高仙人掌的產能，使其成為高價值資源的主要來源。每升一級，使仙人掌產能成倍提升。",
  "unlock.carrots.name": "胡蘿蔔",
  "unlock.carrots.desc":
    "提高胡蘿蔔的產量，使其成為高價值資源的主要來源。每升一級，使胡蘿蔔產量成倍提升。",
  "unlock.debug.name": "console.log()",
  "unlock.debug.desc":
    "解鎖 console.log() 函數，用於在控制台輸出資訊，是除錯與觀察遊戲狀態的重要工具。",
  "unlock.dictionaries.name": "{'a':1, 'b':2}",
  "unlock.dictionaries.desc":
    "允許在程式中使用物件（dictionary），以儲存與組織更複雜的資料結構，是高階自動化邏輯的重要基礎。",
  "unlock.snake.name": "蛇",
  "unlock.snake.desc":
    "解鎖貪吃蛇模型，使你能操控蛇並收集蘋果，為農場提供額外的資源來源。",
  "unlock.expand.name": "擴建",
  "unlock.expand.desc":
    "解鎖擴建功能，使你能增加遊戲世界的尺寸，提供更多可種植區域。",
  "unlock.fertilizer.name": "肥料",
  "unlock.fertilizer.desc":
    "解鎖肥料功能，使你能為植物添加肥料，提高生長速度與產量。",
  "unlock.functions.name": "function() {}",
  "unlock.functions.desc":
    "解鎖函數功能，使你能定義並呼叫自訂函數，增加互動性與靈活性。",
  "unlock.grass.name": "草",
  "unlock.grass.desc":
    "解鎖草功能，使你能在遊戲世界中種植與生長草，提供額外資源來源。",
  "unlock.dino.name": "小恐龍",
  "unlock.dino.desc": "解鎖小恐龍皮膚。",
  "unlock.lists.name": "[1,2,3]",
  "unlock.lists.desc":
    "解鎖列表功能，使你能建立並操作列表，為遊戲增加更多互動性。",
  "unlock.loops.name": "while",
  "unlock.loops.desc":
    "解鎖迴圈功能，使你能重複執行程式碼區塊，提升互動與自動化。",
  "unlock.mazes.name": "迷宮",
  "unlock.mazes.desc":
    "解鎖迷宮系統，可在迷宮中探索並收集金幣，為高階科技提供重要資源。",
  "unlock.megafarm.name": "巨型農場",
  "unlock.megafarm.desc":
    "解鎖巨型農場系統，大幅提升 spawn 並發能力，讓自動化效率巨幅提升。",
  "unlock.operators.name": "1 + 1",
  "unlock.operators.desc":
    "解鎖運算子功能，使你能進行基本數學運算，增加遊戲互動性。",
  "unlock.plant.name": "plant()",
  "unlock.plant.desc":
    "解鎖種植功能，使你能在遊戲中種植作物，增加更多互動與趣味。",
  "unlock.pumpkins.name": "南瓜",
  "unlock.pumpkins.desc":
    "解鎖南瓜栽培功能，使你能種植與管理南瓜，增加更多互動性。",
  "unlock.senses.name": "(x,y)",
  "unlock.senses.desc":
    "解鎖感測器功能，使你能取得當前位置資訊，增加更多互動。",
  "unlock.speed.name": "速度",
  "unlock.speed.desc": "提升遊戲行動速度，讓你更快完成任務。",
  "unlock.sunflowers.name": "向日葵",
  "unlock.sunflowers.desc":
    "解鎖向日葵，可作為加速材料。系統會自動消耗向日葵，顯著提升生長速度。",
  "unlock.remains.name": "農夫的遺骨",
  "unlock.remains.desc": "農夫留下的神秘遺物。",
  "unlock.trees.name": "樹",
  "unlock.trees.desc":
    "解鎖樹木生產並提升其產能，成為穩定的木材來源。",
  "unlock.utilities.name": "random()",
  "unlock.utilities.desc":
    "解鎖工具函數，例如 random()，讓你能生成隨機數，增加互動性。",
  "unlock.variables.name": "let a = 2",
  "unlock.variables.desc":
    "解鎖變數功能，使你能在遊戲中定義與使用變數，增加互動性。",
  "unlock.watering.name": "澆水",
  "unlock.watering.desc":
    "解鎖澆水功能，使你能為土壤澆水，提升生長速度與產量。",

  "unlock.title": "科技樹",
  "unlock.close": "關閉",

  "doc.prompt": "請選擇左側文件",

  "language.label": "語言",
  "language.en": "English",
  "language.zh-CN": "简体中文",
  "language.zh-TW": "繁體中文",

  "inventory.hay": "草料",
  "inventory.wood": "木材",
  "inventory.carrot": "胡蘿蔔",
  "inventory.pumpkin": "南瓜",
  "inventory.cactus": "仙人掌",
  "inventory.gold": "金幣",
  "inventory.apple": "蘋果",
  "inventory.sunflower": "向日葵",
  "inventory.water": "水",
  "inventory.fertilizer": "肥料",
};

const dictionaries: Record<Locale, TranslationShape> = {
  en,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
};

export type TranslationKey = keyof TranslationShape;

function interpolate(
  template: string,
  params?: Record<string, string | number>
) {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    return key in params ? String(params[key]) : `{${key}}`;
  });
}

export function translate(
  locale: Locale,
  key: TranslationKey,
  params?: Record<string, string | number>
) {
  const dict = dictionaries[locale] ?? dictionaries[defaultLocale];
  const template = dict[key] ?? dictionaries[defaultLocale][key];
  return interpolate(template, params);
}

export function normalizeLocale(input?: string | null): Locale {
  if (!input) return defaultLocale;

  const lower = input.toLowerCase();

  if (
    lower.startsWith("zh-tw") ||
    lower.startsWith("zh-hk") ||
    lower.startsWith("zh-hant")
  ) {
    return "zh-TW";
  }

  if (lower.startsWith("zh")) return "zh-CN";
  if (lower.startsWith("en")) return "en";

  return defaultLocale;
}
