/*
 * 龙神剧情 - 05
 * 地图：梦中 - 梦中的森林入口 (900010000)
 */
function enter(pi) {
    if (pi.getInfoQuest(22013).equals("dt00=o;mo00=o;mo01=o")) {
        pi.updateInfoQuest(22013, "dt00=o;mo00=o;mo01=o;mo02=o");
        pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon02");
        return true;
    }
//    if (pi.getInfoQuest(22013).equals("dt00=o;mo00=o;mo01=o;mo02=o")) {
//        return false;
//    }
//    pi.updateInfoQuest(22013, "dt00=o;mo00=o;mo01=o;mo02=o");
//    pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon02");
//    return true;
}