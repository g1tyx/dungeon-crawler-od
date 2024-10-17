/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Common": "普通",
    "Confirm": "确认",
    "Dungeon Crawler on Demand!": "随机地牢爬行者！",
    "Epic": "史诗",
    "Equipment": "装备",
    "Heirloom": "传家宝",
    "Inventory": "背包",
    "Legendary": "传说",
    "Menu": "菜单",
    "Rare": "稀有",
    "Sell": "出售",
    "Stats": "属性",
    "Tap to explore the dungeon": "点击探索地下城",
    "Uncommon": "罕见",
    "What is your name?": "你叫什么名字？",
    "Aegis Thorns": "荆棘盾",
    "Allocate Stats": "分配属性",
    "Blade Dance": "剑舞",
    "Devastator": "毁灭者",
    "Paladin's Heart": "圣骑之心",
    "Passive": "被动",
    "Remnant Razor": "残刃剃刀",
    "Reset": "重置",
    "Titan's Will": "泰坦意志",
    "Attacks deal extra 8% of enemies' current health on hit.": "攻击对敌人造成额外8%当前生命值的伤害。",
    "Attacks deal extra 5% of your maximum health on hit.": "攻击时额外造成你最大生命值5%的伤害。",
    "Deal 30% more damage but you lose 30% base attack speed.": "造成30%以上的伤害，但你失去30%的基础攻击速度。",
    "Enemies receive 15% of the damage they dealt.": "敌人会收到他们造成的伤害的15%。",
    "Gain increased attack speed after each hit. Stack resets after battle.": "每次命中后增加攻击速度。战斗后堆叠重置。",
    "You receive 25% less damage permanently.": "你受到的伤害永久减少25%。",
    "Bonus Stats": "属性加成",
    "exp": "经验值",
    "Exp": "经验值",
    "Nothing equipped.": "未装备。",
    "Resting...": "正在休息...",
    "There are no items available.": "没有可用的物品。",
    "Explore": "探索",
    "Exploring...": "探索中...",
    "Cancel": "取消",
    "Unequip": "脱下",
    "Unequip all your items?": "脱下你所有的装备？",
    "Enter": "进入",
    "Ignore": "忽略",
    "Pause": "暂停",
    "You explored and found nothing.": "你探索了一番，一无所获。",
    "You found a corpse.": "你发现了一具尸体。",
    "You found a monster corpse.": "你发现了一具怪物尸体。",
    "You found a door.": "你发现了一扇门。",
    "You found an empty chest.": "你找到了一个空箱子。",
    "Back to Menu": "返回菜单",
    "You died!": "你挂掉了!",
    "You moved to the next floor.": "你移动到了下一层。",
    "Engage": "交战",
    "Flee": "逃跑",
    "There is nothing in this area.": "这个区域什么都没有。",
    "Offer": "提供",
    "You found a Cursed Totem. Do you want to offer": "你找到了一个诅咒图腾。你是否愿意提供",
    "Open the chest": "打开箱子",
    "You found a treasure chamber. There is a": "你发现了一个藏宝室。这里有",
    "Chest inside.": "箱子在里面。",
    "The chest is empty.": "箱子是空的。",
    "You don't have enough gold.": "你没有足够的黄金。",
    "Claim": "领取",
    " dropped": " 掉落",
    "You found": "你找到了",
    "C.DMG UP": "暴击伤害提升",
    "VAMP UP": "吸血提升",
    "DEF UP": "防御提升",
    "Level Up!": "升级了！",
    "You moved to the next room.": "你移动到了下一个房间。",
    "You found a Statue of Blessing. Do you want to offer": "你找到了一个祝福雕像。你愿意提供",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Flail": "连枷",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "HP:": "生命值:",
    "ATK:": "攻击:",
    "ATK.SPD:": "攻击速度:",
    "C.DMG:": "暴击伤害:",
    "DEF:": "防御:",
    "C.RATE:": "暴击率:",
    "VAMP:": "吸血:",
    "HP+": "生命值+",
    "ATK+": "攻击+",
    "ATK.SPD+": "攻击速度+",
    "C.DMG+": "暴击伤害+",
    "DEF+": "防御+",
    "C.RATE+": "暴击率+",
    "VAMP+": "吸血+",
    "Stat Points:": "属性点:",
    "Door Mimic": "模拟门",
    "You encountered ": "你遇到了 ",
    "Skeleton Warrior": "骷髅战士",
    "? This will strengthen the monsters but will also improve the loot quality. (Curse Lv.": "？ 这将加强怪物，但也将提高战利品的质量。(诅咒等级",
    "Skeleton Knight": "骷髅骑士",
    "Orc Mage": "兽人法师",
    "Reroll ": "重来 ",
    "Increase bonus C.DMG by ": "提高 暴击伤害 加成 ",
    "Increase bonus DEF by ": "提高 防御 加成 ",
    "Increase bonus ATK by ": "提高 攻击 加成 ",
    "Increase bonus ATK.SPD by ": "提高 攻击速度 加成 ",
    "Increase bonus VAMP by ": "提高 吸血 加成 ",
    "Increase bonus C.RATE by ": "提高 暴击率 加成 ",
    "Increase bonus HP by ": "提高 生命值 加成 ",
    " died! (": " 挂掉了! (",
    "Goblin Archer": "哥布林弓箭手",
    "Common ": "普通",
    "to gain blessings? (Blessing Lv.": "以获得祝福？(祝福 等级",
    "Skeleton Samurai": "骷髅武士",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "Door Mimic.": "模拟门。",
    "Skeleton Warrior.": "骷髅战士。",
    "Skeleton Knight.": "骷髅骑士。",
    "Skeleton Samurai.": "骷髅武士。",
    "Orc Mage.": "兽人法师。",
    "Goblin Archer.": "哥布林弓箭手。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^ ([\d\.,]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)\(([\d\.]+)\%\)$/,
    /^ ([\d\.,]+)\/([\d\.,]+)\(([\d\.]+)\%\)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^ ([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^You earned (.+) exp.$/, '你获得了 $1 经验值。'],
    [/^ dealt (.+) damage to (.+).$/, ' 对 $2 造成 $1 点伤害。'],
    [/^(.+) dealt (.+) damage to $/, '$1 造成 $2 点伤害对 '],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) gold.$/, '$1 黄金。'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^You leveled up! \(Lv.([\d\.,]+) \> Lv.([\d\.,]+)\)$/, '你升级了！（$1级 \> ￥2级）'],
    [/^ Lv.([\d\.,]+)$/, ' 等级 $1'],
    [/^(.+) Lv.([\d\.,]+)$/, '$1 等级 $2'],
    [/^(.+) Lv.([\d\.,]+) \(([\d\.]+)\%\)$/, '$1 等级 $2 \($3\%\)'],
    [/^Room ([\d\.,]+)$/, '房间 $1'],
    [/^Floor ([\d\.,]+)$/, '层数 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^Lv.([\d\.,]+) Tier ([\d\.,]+)$/, '等级 $1 品阶 $2'],
    [/^Remaining: ([\d\.,]+)$/, '剩余: $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);