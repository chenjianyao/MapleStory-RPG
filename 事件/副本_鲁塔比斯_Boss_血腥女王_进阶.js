﻿/*
 * 进阶血腥女王
 */

var mapIds = [105200700, 105200710];

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
	var eim = em.newInstance("副本_鲁塔比斯_Boss_血腥女王_进阶");
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		map.resetFully();
		map.killAllMonsters(true);
	}
	//var mob = em.getMonster(8920000);
	//map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(63, 135));
	eim.startEventTimer(30 * 60 * 1000); //30分钟
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

function changedMap(eim, player, mapid) {
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

function scheduledTimeout(eim) {
	eim.disposeIfPlayerBelow(100, 105200000);
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}

function monsterValue(eim, mobId) {
	if (mobId == 8920000 || mobId == 8920001 || mobId == 8920002 || mobId == 8920003 || mobId == 8920100 || mobId == 8920101 || mobId == 8920102 || mobId == 8920103) {
		for (var i = 0; i < eim.getPlayerCount(); i++) {
			eim.getPlayers().get(i).updateInfoQuest(30011, "clear=clear");
			eim.getPlayers().get(i).updateInfoQuest(30019, "clear=clear");
		}
	}
	return 1;
}

function allMonstersDead(eim) {
	var state = em.getProperty("state");
	if (state.equals("1")) {
		em.setProperty("state", "2");
	} else if (state.equals("2")) {
		em.setProperty("state", "3");
	}
}

function playerRevive(eim, player) {
	return false;
}

function clearPQ(eim) {
	scheduledTimeout(eim);
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
	var eim = em.getInstance("副本_鲁塔比斯_Boss_血腥女王_进阶");
	eim.getMapInstance(1).getWeatherEffectNotice("无礼的家伙！竟然随意进出大殿！", 114, 4000, 1);
}
function notice3() {
	var eim = em.getInstance("副本_鲁塔比斯_Boss_血腥女王_进阶");
	//eim.getMapInstance(1).getWeatherEffectNotice("无礼的家伙！竟然随意进出大殿！", 115, 4000, 1);
}
function notice4() {
	var eim = em.getInstance("副本_鲁塔比斯_Boss_血腥女王_进阶");
	eim.getMapInstance(1).getWeatherEffectNotice("呵呵，对你的死亡，我表示很悲伤。", 116, 4000, 1);
}
