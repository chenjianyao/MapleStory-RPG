﻿/*  This source is made by BMS Team
 *  脚本功能：[新手任务]龙的传人系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    status++;
    var i = -1;
    if (status <= i++) {
        ms.dispose();
} else if (status === i++) {
ms.setDirectionMode(true);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
ms.effect_Direction("Effect/Direction100.img/TimeLine/timeLine0");
ms.inGameDirectionEvent_AskAnswerTime(4000);
ms.updateInfoQuest(26900, "mt=1");
ms.updateInfoQuest(26900, "mt=1;al=1");
ms.updateInfoQuest(26900, "mt=1;id=0;al=1");
ms.updateInfoQuest(26900, "mt=1;id=0;al=1");
ms.updateInfoQuest(26902, "");
ms.updateInfoQuest(26903, "");
ms.updateInfoQuest(26904, "");
ms.updateInfoQuest(26905, "");
ms.updateInfoQuest(26900, "sf=0;mt=1;id=0;al=1");
ms.forceStartQuest(55037, "1");
ms.updateInfoQuest(52410, "job=1");
ms.forceCompleteQuest(52401);
ms.updateInfoQuest(16119, "");
ms.updateInfoQuest(16150, "");
ms.updateInfoQuest(27039, "");
ms.updateInfoQuest(56995, "state=0");
ms.updateInfoQuest(14756, "d=19/09/19/14/43");
ms.updateInfoQuest(14755, "");
ms.updateInfoQuest(52998, "");
ms.updateInfoQuest(65132, "");
ms.updateInfoQuest(56070, "LUT=19000101");
ms.updateInfoQuest(61585, "0=20190919");
ms.updateInfoQuest(26015, "");
ms.updateInfoQuest(26011, "");
ms.updateInfoQuest(32547, "lastDecTime=2019/09/19 14:43:15");
ms.updateInfoQuest(64346, "new=0");
ms.updateInfoQuest(62153, "lastday=19/09/19");
ms.updateInfoQuest(100194, "check=1");
ms.updateInfoQuest(16860, "new=1");
ms.updateInfoQuest(55801, "new=1");
ms.updateInfoQuest(16862, "check=1");
ms.updateInfoQuest(16862, "check=1;reset=1");
ms.updateInfoQuest(16772, "reset=1");
ms.updateInfoQuest(16035, "");
ms.updateInfoQuest(16774, "reset=1");
ms.updateInfoQuest(16807, "count=0");
ms.updateInfoQuest(16842, "check=1");
ms.updateInfoQuest(32429, "");
ms.updateInfoQuest(32430, "");
ms.updateInfoQuest(32431, "");
ms.updateInfoQuest(32432, "");
ms.updateInfoQuest(32433, "");
ms.updateInfoQuest(32434, "");
ms.updateInfoQuest(32435, "");
ms.updateInfoQuest(32436, "");
ms.updateInfoQuest(32437, "");
ms.updateInfoQuest(32438, "");
ms.updateInfoQuest(32439, "");
ms.updateInfoQuest(32440, "");
ms.updateInfoQuest(32441, "");
ms.updateInfoQuest(32442, "");
ms.updateInfoQuest(32443, "");
ms.updateInfoQuest(32444, "");
ms.updateInfoQuest(32445, "");
ms.updateInfoQuest(32446, "");
ms.updateInfoQuest(32447, "");
ms.updateInfoQuest(32448, "");
ms.updateInfoQuest(32449, "");
ms.updateInfoQuest(32450, "");
ms.updateInfoQuest(32451, "");
ms.updateInfoQuest(32452, "");
ms.updateInfoQuest(32453, "");
ms.updateInfoQuest(32454, "");
ms.updateInfoQuest(32455, "");
ms.updateInfoQuest(32456, "");
ms.updateInfoQuest(32457, "");
ms.updateInfoQuest(32458, "");
ms.updateInfoQuest(32459, "");
ms.updateInfoQuest(32460, "");
ms.updateInfoQuest(32461, "");
ms.updateInfoQuest(32462, "");
ms.updateInfoQuest(32463, "");
ms.updateInfoQuest(32464, "");
ms.updateInfoQuest(32465, "");
ms.updateInfoQuest(32466, "");
ms.updateInfoQuest(32467, "");
ms.updateInfoQuest(32468, "");
ms.updateInfoQuest(32469, "");
ms.updateInfoQuest(32470, "");
ms.updateInfoQuest(32471, "");
ms.updateInfoQuest(32472, "");
ms.updateInfoQuest(32473, "");
ms.updateInfoQuest(32474, "");
ms.updateInfoQuest(32475, "");
ms.updateInfoQuest(32476, "");
ms.updateInfoQuest(32477, "");
ms.updateInfoQuest(32478, "");
ms.updateInfoQuest(32479, "");
ms.updateInfoQuest(39101, "");
ms.updateInfoQuest(39102, "");
ms.updateInfoQuest(39103, "");
ms.updateInfoQuest(39104, "");
ms.updateInfoQuest(39105, "");
ms.updateInfoQuest(39106, "");
ms.updateInfoQuest(39107, "");
ms.updateInfoQuest(39108, "");
ms.updateInfoQuest(39109, "");
ms.updateInfoQuest(39110, "");
ms.updateInfoQuest(39111, "");
ms.updateInfoQuest(39112, "");
ms.updateInfoQuest(39113, "");
ms.updateInfoQuest(39114, "");
ms.updateInfoQuest(39115, "");
ms.updateInfoQuest(39116, "");
ms.updateInfoQuest(39117, "");
ms.updateInfoQuest(39118, "");
ms.updateInfoQuest(39119, "");
ms.updateInfoQuest(39120, "");
ms.updateInfoQuest(39121, "");
ms.updateInfoQuest(39122, "");
ms.updateInfoQuest(39123, "");
ms.updateInfoQuest(39124, "");
ms.updateInfoQuest(39125, "");
ms.updateInfoQuest(39126, "");
ms.updateInfoQuest(39127, "");
ms.updateInfoQuest(39128, "");
ms.updateInfoQuest(39129, "");
ms.updateInfoQuest(39130, "");
ms.updateInfoQuest(39131, "");
ms.updateInfoQuest(39132, "");
ms.updateInfoQuest(39133, "");
ms.updateInfoQuest(39134, "");
ms.updateInfoQuest(39135, "");
ms.updateInfoQuest(39136, "");
ms.updateInfoQuest(39137, "");
ms.updateInfoQuest(39138, "");
ms.updateInfoQuest(39139, "");
ms.updateInfoQuest(39140, "");
ms.updateInfoQuest(39141, "");
ms.updateInfoQuest(39142, "");
ms.updateInfoQuest(39143, "");
ms.updateInfoQuest(39144, "");
ms.updateInfoQuest(39145, "");
ms.updateInfoQuest(39146, "");
ms.updateInfoQuest(39147, "");
ms.updateInfoQuest(39148, "");
ms.updateInfoQuest(39149, "");
ms.updateInfoQuest(39150, "");
ms.updateInfoQuest(39151, "");
ms.updateInfoQuest(39152, "");
ms.updateInfoQuest(39153, "");
ms.updateInfoQuest(39154, "");
ms.updateInfoQuest(39155, "");
ms.updateInfoQuest(39156, "");
ms.updateInfoQuest(39157, "");
ms.updateInfoQuest(39158, "");
ms.updateInfoQuest(39159, "");
ms.updateInfoQuest(39160, "");
ms.updateInfoQuest(39161, "");
ms.updateInfoQuest(39162, "");
ms.updateInfoQuest(39163, "");
ms.updateInfoQuest(39164, "");
ms.updateInfoQuest(39165, "");
ms.updateInfoQuest(39160, "start=1");
ms.updateInfoQuest(39165, "start=1");
ms.updateInfoQuest(39100, "");
ms.updateInfoQuest(39100, "");
ms.updateInfoQuest(39100, "");
ms.updateInfoQuest(39100, "");
ms.updateInfoQuest(39100, "");
ms.updateInfoQuest(39002, "");
ms.updateInfoQuest(39003, "");
ms.updateInfoQuest(39004, "");
ms.updateInfoQuest(39005, "");
ms.updateInfoQuest(39006, "");
ms.updateInfoQuest(39007, "");
ms.updateInfoQuest(39008, "");
ms.updateInfoQuest(39009, "");
ms.updateInfoQuest(39010, "");
ms.updateInfoQuest(39011, "");
ms.updateInfoQuest(39012, "");
ms.updateInfoQuest(15708, "");
ms.updateInfoQuest(15418, "");
ms.updateInfoQuest(1072, "reset=1");
ms.forceCompleteQuest(62417);
ms.updateInfoQuest(15458, "lastdate=19/09/19");
ms.updateInfoQuest(15458, "check=0;lastdate=19/09/19");
ms.updateInfoQuest(15459, "gold=0");
ms.updateInfoQuest(15459, "gold=0;tpoint=0");
ms.updateInfoQuest(61389, "Wedding=0");
ms.updateInfoQuest(14285, "");
ms.updateInfoQuest(14285, "start=0");
ms.updateInfoQuest(14285, "start=0;start2=0");
ms.updateInfoQuest(15373, "resetData=1");
ms.updateInfoQuest(15157, "guide=0");
ms.updateInfoQuest(15157, "guide=0;gDate=19/09/19");
ms.forceStartQuest(52387, "2");
ms.forceStartQuest(52388, "0");
ms.forceStartQuest(52389, "1");
ms.forceStartQuest(52390, "3");
ms.forceStartQuest(52347, "0");
ms.forceStartQuest(52394, "19");
ms.updateInfoQuest(14470, "state=0");
ms.updateInfoQuest(26551, "check=1");
ms.updateInfoQuest(13887, "MPAttend=0");
ms.updateInfoQuest(13887, "lastGame=19/09/19;MPAttend=0");
ms.updateInfoQuest(13261, "born=190919");
ms.updateInfoQuest(13271, "sn2=0");
ms.updateInfoQuest(13251, "count=0");
ms.forceStartQuest(5402, "0");
ms.forceStartQuest(5403, "19");
ms.updateInfoQuest(26415, "val=0");
ms.updateInfoQuest(26416, "val=0");
ms.updateInfoQuest(26417, "val=0");
ms.updateInfoQuest(3155, "reset=1");
ms.forceStartQuest(9571, "0");
ms.forceStartQuest(20760, "0");
ms.forceStartQuest(31190, "0");
ms.forceStartQuest(42102, "0");
ms.updateInfoQuest(42102, "date=00/00/00/00/00");
ms.updateInfoQuest(7264, "dojangRank=0");
ms.updateInfoQuest(7264, "dojangRankJob=0;dojangRank=0");
ms.forceStartQuest(7621, "");
ms.updateInfoQuest(19019, "id=0");
ms.updateInfoQuest(19019, "date=0;id=0");
ms.updateInfoQuest(19019, "expired=1;date=0;id=0");
ms.updateInfoQuest(64533, "num=0");
ms.updateInfoQuest(64539, "Photo=0");
ms.updateInfoQuest(64539, "Photo=0;already=0");
ms.updateInfoQuest(65097, "lehellen=0");
ms.updateInfoQuest(62563, "RunAct=0");
ms.updateInfoQuest(62564, "count=0");
ms.updateInfoQuest(62565, "count=0");
ms.updateInfoQuest(62566, "count=0");
ms.updateInfoQuest(64497, "dayCnt=0");
ms.updateInfoQuest(64194, "count=3");
ms.updateInfoQuest(64270, "");
ms.updateInfoQuest(63862, "");
ms.updateInfoQuest(62483, "eNum=0");
ms.updateInfoQuest(62483, "eNum=0;lastDate=19/09/19");
ms.updateInfoQuest(62484, "clear=0");
ms.updateInfoQuest(62485, "clear=0");
ms.updateInfoQuest(62486, "0=0");
ms.updateInfoQuest(62486, "0=0;1=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0;4=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0;4=0;5=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0;4=0;5=0;6=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0");
ms.updateInfoQuest(62486, "10=0;0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0");
ms.updateInfoQuest(62486, "10=0;11=0;0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0");
ms.updateInfoQuest(62487, "sc=0");
ms.updateInfoQuest(62487, "a12=0;sc=0");
ms.updateInfoQuest(62489, "gotKey=0");
ms.updateInfoQuest(62497, "lastDate=19/09/19");
ms.updateInfoQuest(62499, "lastDate=19/09/19");
ms.updateInfoQuest(63033, "dayNW=0");
ms.updateInfoQuest(63120, "dayNR=0");
ms.updateInfoQuest(63042, "dayNR=0");
ms.updateInfoQuest(62457, "date=19/09/19");
ms.updateInfoQuest(62457, "sing=0;date=19/09/19");
ms.forceStartQuest(62458, "");
ms.updateInfoQuest(62459, "date=19/09/19");
ms.updateInfoQuest(62459, "date=19/09/19;sing1=0");
ms.forceStartQuest(62460, "");
ms.updateInfoQuest(62461, "date=19/09/19");
ms.updateInfoQuest(62461, "han=0;date=19/09/19");
ms.forceStartQuest(62462, "");
ms.updateInfoQuest(62463, "date=19/09/19");
ms.updateInfoQuest(62463, "date=19/09/19;han1=0");
ms.forceStartQuest(62464, "");
ms.updateInfoQuest(58977, "");
ms.updateInfoQuest(58977, "lastDay=19/09/19/14/43");
ms.updateInfoQuest(58980, "");
ms.forceCompleteQuest(16884);
ms.updateInfoQuest(7907, "point=0");
ms.updateInfoQuest(7907, "lastW=15;point=0");
ms.updateInfoQuest(26589, "coinCount=0");
ms.updateInfoQuest(26589, "RGive1=0;coinCount=0");
ms.updateInfoQuest(26589, "RGive1=0;RGive2=0;coinCount=0");
ms.updateInfoQuest(26553, "count=0");
ms.updateInfoQuest(26453, "val=0");
ms.updateInfoQuest(18192, "count=0;val2=0;tDate=19/09/19/14/43;val=0");
ms.updateInfoQuest(500208, "count=0;val2=0;tDate=19/09/19/14/43;val=0");
ms.updateInfoQuest(500209, "count=0;val2=0;tDate=19/09/19/14/43;val=0");
ms.updateInfoQuest(7708, "win=0");
ms.updateInfoQuest(7708, "lose=0;win=0");
ms.updateInfoQuest(7708, "draw=0;lose=0;win=0");
ms.forceStartQuest(7019, "0");
ms.forceCompleteQuest(7707);
ms.forceStartQuest(14431, "");
ms.forceStartQuest(15148, "");
ms.updateInfoQuest(16019, "");
ms.forceStartQuest(16019, "");
ms.forceStartQuest(16021, "");
ms.forceStartQuest(16023, "");
ms.updateInfoQuest(16025, "");
ms.forceStartQuest(16025, "");
ms.updateInfoQuest(16027, "");
ms.forceStartQuest(16027, "");
ms.forceStartQuest(16029, "");
ms.forceStartQuest(16874, "");
ms.forceCompleteQuest(16874);
ms.forceStartQuest(16875, "");
ms.forceCompleteQuest(16875);
ms.forceStartQuest(16876, "");
ms.forceCompleteQuest(16876);
ms.forceStartQuest(18938, "");
ms.forceStartQuest(33189, "");
ms.forceStartQuest(33190, "");
ms.forceStartQuest(33243, "");
ms.forceStartQuest(33265, "");
ms.forceStartQuest(33267, "");
ms.forceStartQuest(39346, "");
ms.forceStartQuest(100194, "");
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
ms.dispose();
ms.warp(743030000, 0);
} else {
 ms.dispose();
}
}