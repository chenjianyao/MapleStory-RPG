﻿function start() {
    var eim = ms.getEventInstance();
    var em = ms.getEventManager("Boss_黑色天堂_斯乌_困难");
    if (eim != null && ms.getMap().getMobsSize() <= 0) {
        mobid = 8240099;////第3只斯乌 
        mob = em.getMonster(mobid);
        //modified = em.newMonsterStats();
        //modified.setOHp(50000000000);
        //modified.setOMp(1000000);
        //mob.setOverrideStats(modified);
        eim.registerMonster(mob);
        ms.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-2, -16));
        ;
    }
    ms.getMap().startMapEffect("欢迎进入斯乌最后阶段!!!请在规定的时间内击败.", 5120124);
    ms.dispose();
}