/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:椅子专卖
 *  @Author 娜娜 
 */
var status = 0;
var choice;
var scrolls = Array(
Array("我的朋友小喵喵",1702124, 10000),
Array("玫瑰花。",1702115, 10000),
Array("温莉的叶子",1702114, 10000),
Array("雪猪仔棒",1702113, 10000),
Array("如意金箍棒",1702112, 10000),
Array("夏其尔的剑",1702119, 10000),
Array("亚努斯的剑",1702118, 10000),
Array("中国结（蓝色）",1702117, 10000),
Array("中国结（红色）",1702116, 10000),
Array("巨无霸冰淇淋",1702104, 10000),
Array("通心钥匙",1702105, 10000),
Array("巧克力罐",1702106, 10000),
Array("大奶糖",1702107, 10000),
Array("七彩棒棒果",1702108, 10000),
Array("嫣红玫瑰",1702109, 10000),
Array("冰蓝玫瑰",1702110, 10000),
Array("果黄玫瑰",1702111, 10000),
Array("比萨饼盘",1702096, 10000),
Array("小提琴",1702098, 10000),
Array("透明拳套",1702099, 10000),
Array("圣诞钟",1702100, 10000),
Array("粉色遮阳伞",1702103, 10000),
Array("可可糖果棒",1702089, 10000),
Array("专用刷子",1702088, 10000),
Array("网球拍",1702091, 10000),
Array("羽毛剑",1702090, 10000),
Array("毛驴拐杖",1702093, 10000),
Array("南瓜拐杖",1702092, 10000),
Array("奶牛拳套",1702094, 10000),
Array("紫色激光剑",1702081, 10000),
Array("绿色激光剑",1702080, 10000),
Array("指手套",1702083, 10000),
Array("天琴弓",1702082, 10000),
Array("青蛙拳套",1702085, 10000),
Array("风车",1702084, 10000),
Array("红色铅笔",1702087, 10000),
Array("鼓具鸡",1702086, 10000),
Array("芭蕉扇",1702078, 10000),
Array("蓝色激光剑",1702079, 10000),
Array("粉红闪耀之弩",1702074, 10000),
Array("闪光大剑",1702072, 10000),
Array("蓝闪耀之弩",1702073, 10000),
Array("运动护带",1702070, 10000),
Array("拉拉队毛巾(日本)",1702071, 10000),
Array("拉拉队毛巾(法国)",1702068, 10000),
Array("拉拉队毛巾(巴西)",1702069, 10000),
Array("校园风拎包",1702066, 10000),
Array("拉拉队毛巾(英国)",1702067, 10000),
Array("石头",1702064, 10000),
Array("布",1702065, 10000),
Array("剪刀",1702063, 10000),
Array("寒冰神拳",1702062, 10000),
Array("烈焰神拳",1702061, 10000),
Array("闪耀之弓",1702060, 10000),
Array("仙人掌",1702059, 10000),
Array("如来神掌",1702058, 10000),
Array("蓝色电吉他",1702057, 10000),
Array("黄色电吉他",1702056, 10000),
Array("征战弓",1702055, 10000),
Array("In-Hand FB Helmet(Away)",1702053, 10000),
Array("In-Hand FB Helmet(Home)",1702052, 10000),
Array("灯笼",1702051, 10000),
Array("手机",1702050, 10000),
Array("雪人手套",1702049, 10000),
Array("洗澡用手巾",1702048, 10000),
Array("突击步枪",1702044, 10000),
Array("向日葵",1702045, 10000),
Array("星座弩",1702046, 10000),
Array("雪杖",1702047, 10000),
Array("星座弓",1702040, 10000),
Array("星座叉子",1702041, 10000),
Array("麦克风",1702042, 10000),
Array("便便棍子",1702043, 10000),
Array("光轮扫帚",1702036, 10000),
Array("茶壶",1702037, 10000),
Array("星座拳套",1702038, 10000),
Array("星座网兜",1702039, 10000),
Array("羽扇",1702032, 10000),
Array("孙家之杖",1702033, 10000),
Array("青龙偃月刀",1702034, 10000),
Array("曹家之弓",1702035, 10000),
Array("白猫拳",1702029, 10000),
Array("甜甜面包圈",1702028, 10000),
Array("双古剑",1702031, 10000),
Array("七星剑",1702030, 10000),
Array("蓝宝天使弓",1702025, 10000),
Array("黄金天使弓",1702024, 10000),
Array("梦幻激光剑",1702027, 10000),
Array("黄金天使弩",1702026, 10000),
Array("黑色电吉他",1702021, 10000),
Array("棒棒糖",1702020, 10000),
Array("绿色电吉他",1702023, 10000),
Array("褐色电吉他",1702022, 10000),
Array("兔宝宝",1702017, 10000),
Array("玩具彩箱",1702016, 10000),
Array("蓝色大抱枕",1702019, 10000),
Array("香蕉冰激淋",1702018, 10000),
Array("玩具弹弓(蓝)",1702003, 10000),
Array("玩具弹弓(褐)",1702002, 10000),
Array("玫瑰花束",1702001, 10000),
Array("星战激光剑",1702000, 10000),
Array("绿彩棒",1702007, 10000),
Array("红彩棒",1702006, 10000),
Array("黄彩棒",1702005, 10000),
Array("天使星星棒",1702004, 10000),
Array("紫色充气榔头",1702011, 10000),
Array("橙色充气榔头",1702010, 10000),
Array("虎爪手套",1702009, 10000),
Array("礼物包",1702008, 10000),
Array("网兜",1702015, 10000),
Array("喇叭枪",1702014, 10000),
Array("熊宝宝",1702013, 10000),
Array("苍蝇拍",1702012, 10000),
Array("小小梅花鹿武器",1702799, 10000),
Array("桃心闪闪杖",1702798, 10000),
Array("虎喵的喵铃铛",1702797, 10000),
Array("黑暗军师武器",1702787, 10000),
Array("血族的誓约",1702786, 10000),
Array("小蝙蝠魔法武器",1702785, 10000),
Array("羽毛信使武器",1702784, 10000),
Array("怦然心动武器",1702791, 10000),
Array("金色摇篮曲",1702790, 10000),
Array("喵了个汪汪丸武器",1702789, 10000),
Array("猫咪的浓香咖啡",1702788, 10000),
Array("彩云梦武器",1702814, 10000),
Array("柴犬的狗骨头",1702812, 10000),
Array("皇家卫队武器",1702813, 10000),
Array("卡德娜复仇锁链",1702802, 10000),
Array("别拿走我的鱼",1702803, 10000),
Array("小企企暖手宝",1702801, 10000),
Array("带走我吧！",1702804, 10000),
Array("派对礼花权杖",1702805, 10000),
Array("网球武器",1702819, 10000),
Array("粉红独角兽武器",1702818, 10000),
Array("野餐盒武器",1702821, 10000),
Array("蝴蝶翩翩网兜",1702820, 10000),
Array("甜心果冻拼图",1702822, 10000),
Array("一闪一闪南瓜星",1702726, 10000),
Array("萌兔泡泡棒武器",1702727, 10000),
Array("僵尸熊",1702724, 10000),
Array("降灵术士",1702725, 10000),
Array("冬季兔兔",1702722, 10000),
Array("三只小猪",1702723, 10000),
Array("冒险岛M智能手机",1702720, 10000),
Array("死亡之字",1702721, 10000),
Array("冒险岛5000天旗帜",1702734, 10000),
Array("星座的玫瑰",1702735, 10000),
Array("New帽子里的兔子",1702732, 10000),
Array("超大童摇鼓",1702733, 10000),
Array("雪兔子",1702731, 10000),
Array("蜜糖脚掌武器",1702728, 10000),
Array("只要有你在",1702729, 10000),
Array("超星魔导杖",1702742, 10000),
Array("出动吧，冲锋鸡！",1702740, 10000),
Array("手掌荧光棒",1702739, 10000),
Array("咯咯嗒小鸡",1702738, 10000),
Array("寒冰楼阁",1702737, 10000),
Array("舞动的雪花权杖",1702736, 10000),
Array("草莓跳绳",1702750, 10000),
Array("情书包",1702749, 10000),
Array("春之豚鼠武器",1702748, 10000),
Array("我的朋友小喜鹊",1702747, 10000),
Array("小恐龙",1702746, 10000),
Array("柔软银铃花",1702745, 10000),
Array("闪闪月光灯",1702744, 10000),
Array("镇魂杖",1702756, 10000),
Array("希纳斯的守护",1702757, 10000),
Array("骷髅王麦克风武器",1702758, 10000),
Array("樱桃棒棒糖",1702759, 10000),
Array("雪之铃兰武器",1702752, 10000),
Array("潘多拉武器",1702753, 10000),
Array("香甜法棍",1702755, 10000),
Array("执法者铁锤",1702764, 10000),
Array("清凉弹珠汽水瓶武器",1702765, 10000),
Array("闪亮钻石",1702766, 10000)
);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            choices = "\r\n点卷：#r" + cm.getPlayer().getCSPoints(1) + "#k (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d点卷#k#l";
            }
            cm.askMenuS("欢迎来到" + cm.getServerName() + "稀有点装3号店,你想买我们商店的物品么?请选择吧：." + choices, 2);
        } else if (status == 1) {
            cm.askYesNo("你确定要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getPlayer().getCSPoints(1) < money) {
                cm.sendOk("抱歉，你没足够的点卷！");
                cm.dispose();
            } else {
                var gachaponItem = cm.gainGachaponItem(scrolls[choice][1], 1, "椅子专卖3号店", 3, true);
				if (gachaponItem != -1) {
					cm.gainNX(-money);
					cm.dispose();
					cm.sendOk("恭喜您成功购买#i" + scrolls[choice][1] + ":# #b#t" + scrolls[choice][1] + "##k。");
				} else {
					cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
				}
            }
        }
    }
}
