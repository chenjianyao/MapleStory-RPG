﻿var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("浣?濂斤???链???寰?涔?浠ュ??镟剧?????妤扑?璋风??板栾优??枥蒎凹缬???枥蒎凹绌???");
    } else if (status == 1) {
        qm.sendNextPrevS("镦╀汉镄??????肩Ξ绡?灏卞????????!!??澹?阒匡?浣??宠??村挤澶э????????", 4, 9330355);
    } else if (status == 2) {
        qm.sendNextPrev("?炬????惧凹绌???.????涓??╁?嫔??澹???铹℃??垫??榛?骈殒?″??锷???...");
    } else if (status == 3) {
        qm.sendNextPrev("#i3800647#\r\n?惧凹绌????宠?阃???镊?宸憋??瑰??点?灏??稿挤澶х??凿??卞??澹?...");
    } else if (status == 4) {
        qm.sendNextPrevS("#i3800646#\r\n浣??稿?岖???惧凹???持缨?材鳘宸憋?????锛???渚??瑰?绲?妤?涔?璋凤???链???澹?.. ", 4, 9330355);
    } else if (status == 5) {
        qm.sendNextPrevS("#i3800648#?惧凹??..浣???妯Ｖ缨?材鳘宸憋?????????涓?瑕???澶┝?涓?浜?..", 4, 9330355);
    } else if (status == 6) {
        qm.sendNextPrev("板??舵?????宠?灏???榛????″?㈠??镄?寮ㄩ?芥??涓?妯ｇ??,浣??规???涓?榛?涓???..\r\n??澹???..璜?浣?绛?柘?...?????崭缔镓句?镄?");
    } else if (status == 7) {
        qm.forceCompleteQuest();
        qm.dispose();
    }
}