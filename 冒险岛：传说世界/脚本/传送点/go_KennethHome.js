/**
-- BMS 传送点脚本空白模板 -------------------------------------------------------------------------
传送点 ID： 2
传送点名称： goKenneth
所在地图ID： 871000000
所在地图名称：
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
---------------------------------------------------------------------------------------------------
 **/

function enter(pi) {
	var cm = ms = rm = qm = im = pi;
	if (cm.getQuestStatus(64605) == 1) {
		pi.warp(871000014);
	} else {
		pi.warp(871000001);
	}
}
