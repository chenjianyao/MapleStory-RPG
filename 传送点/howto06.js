/**
-- BMS 传送点脚本空白模板 -------------------------------------------------------------------------
传送点 ID： 9
传送点名称： howto6-1
所在地图ID： 350013500
所在地图名称： 内心世界4
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
---------------------------------------------------------------------------------------------------
 **/

function enter(pi) {
	var cm = ms = rm = qm = im = pi;
	var id = pi.getPortal().getId();
	var name = pi.getPortal().getName();
	pi.playerMessage(5, "这个传送点 [" + id + " : " + name + "] 的脚本尚未修复。脚本位于： 脚本/传送点/howto06.js 【注意】修改完脚本后要在控制台重载才能生效！");
}
