﻿function enter(pi) {
	if (pi.isQuestFinished(3140)) {
		pi.playPortalSE();
		pi.warp(211060500, 1);
	} else {
		pi.openNpc(1, "狮子王城_闯塔");
	}
	return true;
}
