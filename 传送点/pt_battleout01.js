function enter(pi) {
	var cm = ms = rm = qm = im = pi;
	var id = pi.getPortal().getId();
	var name = pi.getPortal().getName();
	pi.playerMessage(5, "这个传送点 [" + id + " : " + name + "] 的脚本尚未修复。脚本位于： 脚本/传送点/pt_battleout01.js 【注意】修改完脚本后要在控制台重载才能生效！");
}
