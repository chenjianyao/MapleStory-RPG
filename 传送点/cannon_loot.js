/*
 * 神炮王剧情 - 10
 * 地图：可可岛 - 可可岛海岸 (3000300)
 * @author 狐狸糊涂
 */
function enter(pi) {
    if (pi.isQuestActive(2564)) {
        pi.effect_OnUserEff("UI/tutorial.img/cannon/1");
        return true;
    }
    return false;
}