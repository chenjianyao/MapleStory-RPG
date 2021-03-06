﻿/*
 * 血腥女王
 * 修改：jessefjxm
 */
var mapIds = [105200300, 105200310];

//自定义复活次数
var reviveCount = 5;
var next = 0;

function init() {
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
	em.setProperty("state", "1");
	em.setProperty("stage", "0");
	em.setProperty("leader", "true");
	var eim = em.newInstance("Boss_鲁塔比斯_血腥女王");
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		map.resetFully();
		map.killAllMonsters(true);
	}
	eim.startEventTimer(15 * 60 * 1000); //15分钟
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	player.setReviveCount(reviveCount); //地图复活次数
	player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
	if (player.getReviveCount() > 0) {
		player.eventRevive();
		player.changePortal(0);
		return true;
	}
	player.addHP(50);
	var map = eim.getMapInstance(0);
	player.changeMap(map, map.getPortal(0));
	return true;
}

function scheduledTimeout(eim) {
	eim.disposeIfPlayerBelow(100, 105200000);
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
	//eim.broadcastPlayerMsg(2, "changedMap [ID]=" + mapIds.indexOf(mapid));
	if (mapIds.indexOf(mapid) < 0) {
		eim.unregisterPlayer(player);
		if (eim.disposeIfPlayerBelow(0, 0)) {
			em.setProperty("state", "0");
			em.setProperty("leader", "true");
		}
	}
}

function playerDisconnected(eim, player) {
	return 0;
}

function playerExit(eim, player) {
	//eim.broadcastPlayerMsg(2, "playerExit");
	eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}

function monsterValue(eim, mobId) {
	var teamMembers = eim.getPlayerCount();
	eim.getPlayers().forEach(function (player) {
		player.updateInfoQuest(30011, "clear=clear");
		player.updateInfoQuest(30019, "clear=clear");
		player.updateAchievement(719, 0, "mob_kill", 1, 10);
		player.updateAchievement(720, 0, "mob_kill", 1, 100);
		player.updateAchievement(721, 0, "mob_kill", 1, 1000);
		player.updateAchievement(722, 0, "mob_kill", 1, 1000);
		//  [血腥女王]我们从未经历过死亡 
		if (teamMembers == 4) {
			player.gainAchievement(729, 0, "mob_kill=1");
		} else if (teamMembers == 5) {
			player.gainAchievement(729, 1, "mob_kill=1");
		} else if (teamMembers == 6) {
			player.gainAchievement(729, 2, "mob_kill=1");
		}
		//  [血腥女王]各有特色 
		player.gainAchievement(728, mobId % 10, "mob_kill=1");
	});
	return 1;
}

// TODO
function allMonstersDead(eim) {
	eim.broadcastPlayerMsg(2, "allMonstersDead");
	var state = em.getProperty("state");
	if (state.equals("1")) {
		em.setProperty("state", "2");
	} else if (state.equals("2")) {
		em.setProperty("state", "3");
	}
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDrop(eim, player, mob) {}
function pickUpItem(eim, player, itemID) {}

// 循环调动事件
function scheduleNew(funcName, seconds) {
	var setupTask = em.schedule(funcName, seconds * 1000);
	return setupTask;
}
function notice2() {
	var eim = em.getInstance("Boss_鲁塔比斯_血腥女王");
	eim.getMapInstance(1).getWeatherEffectNotice("无礼的家伙！竟然随意进出大殿！", 114, 4000, 1);
}
function notice3() {
	var eim = em.getInstance("Boss_鲁塔比斯_血腥女王");
	//eim.getMapInstance(1).getWeatherEffectNotice("无礼的家伙！竟然随意进出大殿！", 115, 4000, 1);
}
function notice4() {
	var eim = em.getInstance("Boss_鲁塔比斯_血腥女王");
	eim.getMapInstance(1).getWeatherEffectNotice("呵呵，对你的死亡，我表示很悲伤。", 116, 4000, 1);
}
