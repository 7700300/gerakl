/*	var rootWin = window.parent.window.parent.window.parent;
    var rootDoc = window.parent.window.parent.window.parent.document;

    var actIframe = top.frames["d_act"];
    var chatIframe = top.frames["d_chatact"];
    //var persIframe = top.frames["d_pers"];
    var actIframeDoc = actIframe.document;
    var actIframeWin = actIframe.window;
    var chatIframeWin = chatIframe.window;
    //var actIframeDoc = persIframe.document;
    //var jQueryAct = persIframe.jQuery;
    var jQueryAct = actIframe.jQuery;
    
    bad_room="badroom_hid_"+MyHome+".html";
	bad_room_sit="badroom_hid_"+MyHome+".html?actHouse-SitDown=1";
	bad_room_up="badroom_hid_"+MyHome+".html?actHouse-StandUp=1";

*/

function TownButtons(){
	
	// заполняем профиль перса
	var sklon = top.sklon
/*	if(sklon){
		var td = document.getElementById("el_sklon")
		td.innerHTML = "<img src='img/magic/s"+sklon+"-1.gif'>";
	}
	var msType = top.msType
	if(msType){
		var td = document.getElementById("el_msType")
		td.innerHTML = msType;
	}
	var astralN = top.astralN
	if(astralN){
		var td = document.getElementById("el_astralMax")
		td.innerHTML = astralN;
	}
*/
	var immH = (top.immH)?top.immH:0;
	var immM = (top.immM)?top.immM:0;
	if(immH>0||immM>0){
		var td = document.getElementById("el_imm")
		td.innerHTML = (immH>0)?immH+"ч":""
		td.innerHTML += " "+ (immM>0)?immM+"мин":"";
	}

     // готовим кнопки с действиями
    var actionsDiv = document.createElement('div');
    actionsDiv.id = "activTownBlock";
//    alert("проверяем дом");
    if (rootWin.HomeID!=undefined){
  		var td = document.getElementById("el_sklon")
		td.innerHTML = "<label title=\"Дом цел/сломан\">Дом:<input id=\"HomeCrashed\" type=\"checkbox\" checked/></label>";

	  	bad_room="badroom_hid_"+rootWin.HomeID+".html";
		bad_room_sit="badroom_hid_"+rootWin.HomeID+".html?actHouse-SitDown=1";
		sunduk = 'hstoreroom_sumka_1_hid_'+rootWin.HomeID+'.html';

    	actionsDiv.innerHTML += '<input type="button" oncontextmenu="top.d_act.goR(\''+bad_room_sit+'\');return false;" onclick="top.d_act.goR(\''+bad_room_sit+'\');" style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/home.png);height: 25px;" title="Левый клик мышкой - в дом\nПравый клик мышкой - в в кровать">';
    	actionsDiv.innerHTML += '<input type="button" onclick="top.d_act.goR(\''+sunduk+'\')" style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/sunduk.png);height: 25px;" title="в сундук">';
    }

    if (rootWin.clanID===undefined){
    	actionsDiv.innerHTML +='<div style="color: crimson;">Безклановый</div>';
    }
    else
    {
    //actionsDiv.innerHTML = '<input type="button" onclick="top.d_act.goR(\'castle_room_1_cid_'+rootWin.clanID+'.chtml\');" style="width: 50px;margin-right: 5px;background-image: url(https://dutyape.site/img/tron.png);height: 25px;">';
    //goRC('castle_cid_'+rootWin.clanID+'_room_1_actClan-StandUp_1.html')
    //goRC('castle_cid_'+rootWin.clanID+'_room_1_actClan-SitDown_1.html')
    //goRC('medroom_cid_'+rootWin.clanID+'_actClan-SitDown_1.html')
    actionsDiv.innerHTML += '<input type="button" oncontextmenu="top.d_act.goR(\'castle_room_1_cid_'+rootWin.clanID+'.chtml\');setTimeout(function() {top.d_act.goR(\'castle_cid_'+rootWin.clanID+'_room_1_actClan-SitDown_1.html\')},500);return false;" onclick="top.d_act.goR(\'castle_room_1_cid_'+rootWin.clanID+'.chtml\');" style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/tron.png);height: 25px;" title="Левый клик мышкой - в тронку\nПравый клик мышкой - в тронку и на стул">';
    actionsDiv.innerHTML += '<input type="button" oncontextmenu="top.d_act.goR(\'medroom_cid_'+rootWin.clanID+'.html\');setTimeout(function() {top.d_act.goR(\'medroom_cid_'+rootWin.clanID+'_actClan-SitDown_1.html\')},500);return false;" onclick="top.d_act.goR(\'medroom_cid_'+rootWin.clanID+'.html\')" style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/doc.png);height: 25px;" title="Левый клик мышкой - в лечебку\nПравый клик мышкой - в лечебку и на стул">';
//    actionsDiv.innerHTML += '<input type="button" onclick="top.d_act.goR(\'medroom_cid_'+rootWin.clanID+'_actClan-SitDown_1.html\')" style="width: 50px;margin-right: 5px;background-image: url(https://dutyape.site/img/doc.png);height: 25px;">';
//    	top.d_act.goR(\'fortunawheeldata_actUser-SpinWheel_1.html\'); // колесо удачи
//		top.d_act.goRC(\'market_mode_2_uid_203628652.html\')// своя лавка
    }//
    actionsDiv.innerHTML += '<br/><input type="button" oncontextmenu="top.d_act.goR(\'room_mode_0_type_12.chtml\');return false;" onclick="top.d_act.goR(\'room.chtml\')"  style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/db.png);height: 25px;" title="Левый клик мышкой - в ДБ\nПравый клик мышкой - в свитки ДБ">';
    actionsDiv.innerHTML += '<input type="button" onclick="top.d_act.goR(\'shop.html\')" style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/shop.png);height: 25px;">';
    actionsDiv.innerHTML += '<input type="button" oncontextmenu="top.d_act.goR(\'market_mode_2_uid_'+rootWin.persID+'.html\');return false;" onclick="top.d_act.goR(\'market.html\')" style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/rynok.png);height: 25px;" title="Левый клик мышкой - на рынок\nПравый клик мышкой - в свою лавку">';
    actionsDiv.innerHTML += '<input type="button" oncontextmenu="return false;" onmousedown = "e = event;if(e.which==1){top.d_act.goR(\'smith.html\')};if(e.which==2){e.preventDefault();top.d_act.goR(\'privsmith_uid_'+rootWin.persID+'.html\');}if(e.which==3){e.preventDefault();top.d_act.goR(\'jewelry_uid_'+rootWin.persID+'.html\')}" style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/kuznya.png);height: 25px;" title="Левый клик мышкой - в кузню\nПравый клик мышкой - в свою гранилку\nКлик колесиком - в свою кузню"><br/>';
    actionsDiv.innerHTML += '<input type="button" oncontextmenu="return false;" onmousedown = "e = event;if(e.which==1){top.d_act.goR(\'uchastki_uid_'+rootWin.persID+'_mode_0.html\')}if(e.which==2){top.d_act.goR(\'sawmill_mode_3.html\')}if(e.which==3){top.d_act.goR(\'mine_mode_3.html\')}" style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/pole.png);height: 25px;" title="Левый клик мышкой - на свой участок\nПравый клик мышкой - в свою плавильню\nКлик колесиком - в свою пилильню))">';
    actionsDiv.innerHTML += '<input type="button" oncontextmenu="top.d_act.goR(\'mageshop_type_12_stype_6.html\');return false;" onclick="top.d_act.goR(\'mageshop.html\')" style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/mage.png);height: 25px;" title="Левый клик мышкой - к магу\nПравый клик мышкой - в свитки иммуна">';
    actionsDiv.innerHTML += '<input type="button" oncontextmenu="top.d_act.goR(\'magiccasters_uid_'+rootWin.persID+'.html\');return false;" onclick="top.d_act.goR(\'magiccasters.html\')" style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/zakl.png);height: 25px;" title="Левый клик мышкой - к заклинателям\nПравый клик мышкой - к себе в заклинательную">';
    actionsDiv.innerHTML += '<input type="button" onclick="top.d_act.goR(\'arena_room_3_bmode_3.html\')" style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/arena.png);height: 25px;"><br/>';
/*    actionsDiv.innerHTML += '<input type="button" onclick="top.d_act.location = \'fortunawheeldata_actUser-SpinWheel_1.html\';" style="width: 50px;margin-right: 5px;background-image: url('+top.hostname+'img/wheel.png);height: 25px;" title="КОЛЕСО">';*/
    var activTown = rootDoc.getElementById("activTown");
    activTown.innerHTML = '';
    appendTo(activTown, actionsDiv);
    
    /******************************************/
    /* для автобоя*/
    var MyClan =(parent.clanID)?parent.clanID:0
var MyHome=(parent.HomeID)?parent.HomeID:0
function dbexGetmbClone(persID) {
    var senddata = {
        "persID": persID,
        "metod": 26
    };
    //            console.log(senddata);
    var url = top.hostname+"duty/dbrelay.php";
    $.ajax({
        type: "POST",
        url: top.hostname+'duty/dbrelay.php',
        data: senddata,
        error:function(html) {
	        console.log(html);
       	var cas = JSON.parse(html.responseText);
        	var mbClon = cas.castID;
        	top.d_act.mbClon =mbClon; 
        	top.mbClon = mbClon;
        	top.d_pers.mbClon = mbClon;
//            console.log(cas);
//            var activWar = byid("activWarBlock");
//    		activWar.innerHTML=html;
        },
        success: function(msg) {
       	var cas = JSON.parse(msg);
        	var mbClon = cas.castID;
        	top.d_act.mbClon =mbClon; 
        	top.mbClon = mbClon;
        	top.d_pers.mbClon = mbClon;
//            console.log(cas);
//            var activWar = byid("activWarBlock");
//    		activWar.innerHTML=html;
        }//  dataType: dataType
    });
}
    dbexGetmbClone(top.d_pers.d.id?top.d_pers.d.id:top.d_chatact.meid);

function dbexGetmbHP(persID) {
    var senddata = {
        "persID": persID,
        "metod": 27
    };

    //            console.log(senddata);
    var url = top.hostname+"duty/dbrelay.php";
    $.ajax({
        type: "POST",
        url: top.hostname+'duty/dbrelay.php',
        data: senddata,
         error:function(html) {
            console.log(html);
       	var cas = JSON.parse(html.responseText);
        	var mbHP =  cas.castID;
        	top.d_act.mbHP =mbHP; 
        	top.mbHP = mbHP;
        	top.d_pers.mbHP = mbHP;

        },
        success: function(msg) {
       	var cas = JSON.parse(msg);
        	var mbHP =  cas.castID;
        	top.d_act.mbHP =mbHP; 
        	top.mbHP = mbHP;
        	top.d_pers.mbHP = mbHP;
//            console.log(msg.castID);
//            var activWar = byid("activWarBlock");
//    		activWar.innerHTML=html;
        }//  dataType: dataType
    });
    
}
    dbexGetmbHP(top.d_pers.d.id?top.d_pers.d.id:top.d_chatact.meid);

var ab_limit_hp = 4;
soclanList = new Array();
soclanList[0] = {
    nk: "NaN"
};


top.d_pers.chatRowArray = new Array();
var condition_hp = 0;
var wheeluck_day = 0;
var guard_act = 0;
var guard = 1;
var buttons = 1;
var demand = 0;
var OnOffguard = 0;
var OnOffbuttons = 1;
var OnOffMyfort = 0;
var OnOffMytime = 0;
var as_audio = "";
var ioTitle = 0;
var ioVar = 0;
RoomReg = new Array();
RoomReg[0] = new RegExp("castle_room_1_cid_" + MyClan);
RoomReg[1] = new RegExp("medroom_cid_" + MyClan);
RoomReg[2] = new RegExp("badroom_hid_" + MyHome);
    castle_room = "castle_room_1_cid_" + MyClan + ".html";
    med_room = "medroom_cid_" + MyClan + ".html";
    bad_room = "badroom_hid_" + MyHome + ".html";
    bad_room_sit = "badroom_hid_" + MyHome + ".html?actHouse-SitDown=1";
    bad_room_up = "badroom_hid_" + MyHome + ".html?actHouse-StandUp=1";

iTempData = new Array();
var addObs = function() {
//    console.log("gjgfkb")
 //   i++;
//    alert("efwefwefwef");
    try {
        var nform = top.frames["d_act"].document.forms.length;
        var y = top.frames["d_act"].document.forms["f_ub"].ubl1.value;
    } catch (e) {
        y = 99;
        guard = 1;
        buttons = 1;
    }
    // move-parm
    castle_room = "castle_room_1_cid_" + MyClan + ".html";
    med_room = "medroom_cid_" + MyClan + ".html";
    bad_room = "badroom_hid_" + MyHome + ".html";
    bad_room_sit = "badroom_hid_" + MyHome + ".html?actHouse-SitDown=1";
    bad_room_up = "badroom_hid_" + MyHome + ".html?actHouse-StandUp=1";

/*    if (soclanList.length == 1) {
        castle_room = "arena_room_1_bmode_1.html";
        med_room = "arena_room_1_bmode_1.html";
        bad_room = "arena_room_1_bmode_1.html";
    }
*/    // end-move-parm
/*    if (!LocSite("value", "input", "Прервать работу") && !top.frames["d_act"].document.getElementById("buttons")) {
        // wheeluck
        var Moscow_tm = new Date(Date.now() + 10800000);
        var Moscow_day = Moscow_tm.getUTCDate();
        var Moscow_hours = Moscow_tm.getUTCHours();
        if (Moscow_hours == 10 && wheeluck_day != Moscow_day || Moscow_hours == 11 && wheeluck_day != Moscow_day) {
            //setTimeout("frames['channel_3'].location='fortunawheeldata_actUser-SpinWheel_1.html';",5555);
            asAudio("server_lost.mp3");
            Indicator("lawngreen", "Колесо удачи, День " + Moscow_day);
          //  byid("t").innerHTML = "Колесо удачи, День " + Moscow_day;
            wheeluck_day = Moscow_day;
        }
    }*/
    // end-wheeluck
    if (!top.frames["d_act"].document.getElementsByTagName("META")[0] && !LocSite("value", "INPUT", "html") && top.document.el_CrDemand.act_castle.value == 1) {
        // meta
      //  byid("t").innerHTML = "html.META";
        if (top.frames["d_act"].document && top.frames["d_act"].document.getElementsByTagName && top.frames["d_act"].document.getElementById && top.frames["d_act"].document.body) {
            Indicator("red", "<input type=button value=html>", 25);
        }
        if (MyHome > 0  && chbox.checked) {
            console.log("Перемещаем в дом");
            top.frames["d_act"].location = bad_room;
        } else {
            top.frames["d_act"].location = med_room;
        }
        top.activity(top.persID, 6, top.getLoc, 0, "Переместили в дом")
    }
    // end-meta
    var health = "осталось";
    var e1 = top.d_pers.document.all("VAL_hp").innerHTML;
    var e2 = top.d_pers.document.all("VAL_mana").innerHTML;
    var e3 = top.d_pers.document.all("dinjcell").innerHTML;
    var xhp = /(\d+)\/(\d+)/.exec(e1);
    var xmp = /(\d+)\/(\d+)/.exec(e2);
    var xhl = new RegExp(health,"g");
    var minhp = Math.ceil(xhp[2] / 100 * 75) + 1;
    var minmp = Math.ceil(xmp[2] / 100 * 85) + 1;
    var chbox = document.getElementById('HomeCrashed');

    if (xhp[1] >= minhp) {
        demand += 1;
    }
    if (xmp[1] >= minmp) {
        demand += 1;
    }
    if (!xhl.test(e3) || top.d_pers.d.lvl < 8) {
        demand += 1;
    }
    if (demand == 0) {
        byid("act_castle").style.background = "white url(https://apeha.ru/img/smode-3.gif) no-repeat";
    }
    if (demand == 1) {
        byid("act_castle").style.background = "white url(https://apeha.ru/img/smode-3.gif) no-repeat";
    }
    if (demand == 2) {
        byid("act_castle").style.background = "gold url(https://apeha.ru/img/smode-3.gif) no-repeat";
    }
    if (demand == 3) {
        // active-demand
        byid("act_castle").style.background = "skyblue url(https://apeha.ru/img/smode-3.gif) no-repeat";
        if (y == 99 && top.document.el_CrDemand.act_castle.value == 1) {
            // move-demand
            if (LocSite("name", "INPUT", "Battle{vall}") && nform != 0) {
                // msg-log
                var element = top.frames["d_act"].document.getElementsByTagName("b")[1];
                var text = top.frames["d_act"].document.createElement("span");
                text.id = "control_msg";
                text.style.background = "white";
                text.innerHTML = "msg";
                element.parentNode.insertBefore(text, element);
                // end-msg-log
                AddJS(2, "auto_demand.js");
                top.activity(top.persID, 7, top.getLoc, 0, "Ищем заявки")

            }
            if (!LocSite("name", "INPUT", "Battle{vall}") && nform != 0) {
                // в лечебницу (от бандита)
                top.frames["d_act"].location = "arena_room_1_bmode_3.html";
                console.log("MyHome1" + MyHome)
                if (MyHome > 0 && chbox.checked) {
                    top.setTimeout("top.d_pers.frames['channel_3'].location='"+bad_room+"'", 1500);
                } else {
                    top.setTimeout("top.d_pers.frames['channel_3'].location='"+med_room+"'", 1500);
                }
                        top.activity(top.persID, 6, top.getLoc, 0, "Переместили в лечебку")

            }
            if (!LocSite("name", "INPUT", "Battle{vall}") && LocSite("title", "BUTTON", "Просмотр повтора")) {
                // в лечебницу (от бандита)
                top.frames["d_act"].location = "arena_room_1_bmode_3.html";
                //console.log("MyHome2" + MyHome)
                if (MyHome > 0 && chbox.checked) {
                    top.setTimeout("top.d_pers.frames['channel_3'].location='"+bad_room+"'", 1500);
                } else {
                    top.setTimeout("top.d_pers.frames['channel_3'].location='"+med_room+"'", 1500);
                }
            }
            if (!LocSite("name", "INPUT", "Battle{vall}") && (LocSite("value", "INPUT", "Присесть") || LocSite("value", "INPUT", "Управление"))) {
                //&&!/arena_room_1_bmode_3/.test(top.frames["d_act"].location))) { // в лечебницу (от бандита)
                //if (/badroom_hid_/.test(top.frames["d_act"].location)) top.frames["d_act"].location=bad_room_up;
                if (MyHome > 0 && chbox.checked) {
                    top.frames["d_act"].location = top.bad_room_up;
                  //  console.log("MyHome33 " + MyHome);
                    top.frames["d_pers"].setTimeout("top.frames['d_act'].location='arena_room_1_bmode_3.html'", 500);
                } else {
                    top.frames["d_act"].location = "arena_room_1_bmode_3.html";
                    //console.log("MyHome3" + MyHome)
                }
                if (MyHome > 0 && chbox.checked) {
                    top.setTimeout("top.d_pers.frames['channel_3'].location='"+bad_room+"'", 1500);
                } else {
                    top.setTimeout("top.d_pers.frames['channel_3'].location='"+med_room+"'", 1500);
                }
            }
        }
        // end-move-demand
    }
    // end-active-demand
    if (y == 99 && top.document.el_CrDemand.act_castle.value == 1 && LocSite("value", "INPUT", "Подать заявку")) {
        // wait-fight
        var e3 = top.d_pers.document.all("dinjcell").innerHTML;
        var xhl = new RegExp(health,"g");
        var bad_loc = RoomReg[1].test(top.frames["d_act"].location);
        var bad_loc_home = RoomReg[2].test(top.frames["d_act"].location);
        if (soclanList.length == 1)
            bad_loc = /arena_room_1_bmode_1/.test(top.frames["d_act"].location);
        if (xhl.test(e3) && (!bad_loc || (MyHome > 0 && !bad_loc_home))) {
            // в лечебницу
//            console.log("MyHome4" + MyHome)

            if (MyHome > 0 && chbox.checked) {
                top.frames["d_act"].location = bad_room;
            } else {
                top.frames["d_act"].location = med_room;
            }
        }
        var e3 = top.d_pers.document.all("dinjcell").innerHTML;
        var xhl = new RegExp(health,"g");
        var bad_loc = RoomReg[0].test(top.frames["d_act"].location);
        if (soclanList.length == 1)
            bad_loc = /arena_room_1_bmode_1/.test(top.frames["d_act"].location);
        if (demand != 3 && !xhl.test(e3) && (!bad_loc || (MyHome > 0 && !bad_loc_home))) {
            // к замку
  //          console.log("MyHome5" + MyHome)

            if (MyHome > 0 && chbox.checked) {
                top.frames["d_act"].location = bad_room;
            } else {
                top.frames["d_act"].location = castle_room;
            }
        }
    }
    // end-wait-fight
    if (top.document.el_CrDemand.act_castle.value == 1) {
        // hand-off
        var rhandd = top.d_pers.document.getElementById("IMG_rarm").title;
        var lhandd = top.d_pers.document.getElementById("IMG_larm").title;
        if (rhandd == "кулаки" || lhandd == "кулаки") {
            document.el_CrDemand.act_castle.click();
        //    setTimeout("byid('t').innerHTML='РАЗОРУЖЕН';", 14000);
        //    byid("t").innerHTML = "РАЗОРУЖЕН" + "<audio autoplay loop>" + "<source src=\"https://" + hostname_oil + "/audio/pling.mp3\" type=\"audio/mpeg\">" + "</audio>";
        }
    }
    // end-hand-off
    if (OnOffMytime == 1) {
        // Сигнал mytime
        if (MyTime(0)) {
            asAudio("Alarm.mp3");
        }
    }
    if (OnOffMyfort == 1) {
        // На форпост напали!
        if (MyTime(1)) {
            asAudio("ReligionConvert.mp3");
        }
    }
    if (y == 0) {
        // fight
        document.getElementById("as_audio").innerHTML = as_audio;
        if (OnOffbuttons == 1) {
            if (buttons == 1) {
                // активировать кнопки
                buttons = 0;
                Indicator("lawngreen", "B5");
               // AddJS(2, "aladushek.js");
            }
        }
        if (OnOffguard == 1) {
            if (guard == 1) {
                // активировать охрану
                guard = 0;
                guard_act = 1;
                Indicator("lawngreen", "G");
               // AddJS(2, "aladushek.js");
            }
        }
    }
    // end-fight
    if (LocSite("title", "BUTTON", "Просмотр повтора") && !LocSite("value", "INPUT", "Log") && top.document.el_CrDemand.act_castle.value == 1) {
        // log-back
        // msg-log
        var element = top.frames["d_act"].document.getElementsByTagName("b")[1];
        var text = top.frames["d_act"].document.createElement("span");
        text.id = "control_msg";
        text.style.background = "white";
        text.innerHTML = "msg";
        element.parentNode.insertBefore(text, element);
        // end-msg-log
        var e3 = top.d_pers.document.all("dinjcell").innerHTML;
        var xhl = new RegExp(health,"g");
        if (xhl.test(e3)) {
            // в лечебницу
            // msg-fun-log
            var script = top.frames["d_act"].document.createElement("script");
            script.type = "text/javascript";
            script.text = "function msgBadEvent() {" + "var bad_event=/осталось/.test(top.frames['d_pers'].document.getElementById('dinjcell').innerHTML);" + "if(bad_event) {" + "document.getElementById('dinjcell2').innerHTML=" + "top.frames['d_pers'].document.getElementById('dinjcell').getElementsByTagName('td')[2].innerHTML;" + "setTimeout('msgBadEvent()',1500);" + "} else {" + "document.getElementById('dinjcell2').innerHTML='<span style=background-color:red;color:white;>CASTLE</span>';" + "top.frames['d_pers'].frames['channel_3'].location='" + ((MyHome == 0 || !chbox.checked) ? castle_room : bad_room) + "';" + "}" + "}" + "setTimeout('msgBadEvent()',1500);";
    //        console.log("MyHome6" + MyHome)

            top.frames["d_act"].document.getElementsByTagName("head")[0].appendChild(script);
            // end-msg-fun-log
            var control_text = "" + "MOVE-<span style=background-color:green;color:white;>MEDROOM</span>" + ":<span style=color:green;>WAIT:<span style=background-color:black;color:white; id=dinjcell2>NaN</span>" + "<input type=hidden value=Log><br>";
            top.frames["d_act"].document.getElementById("control_msg").innerHTML = control_text;
     //       console.log("MyHome7" + MyHome)
            if (MyHome > 0  && chbox.checked) {
             //   top.frames["d_act"].location = bad_room;
          //   top.frames["d_pers"].setTimeout("top.frames[\"d_act\"].location='"+bad_room_sit+"'", 1500);
          top.frames["d_pers"].setTimeout("top.frames['d_pers'].frames['channel_3'].location='"+bad_room_sit+"'",1500);
          //   top.frames["d_act"].location=bad_room_sit;
            } else {
            //    top.frames["d_act"].location = med_room;
              top.frames["d_pers"].setTimeout("top.frames['d_pers'].frames['channel_3'].location='"+med_room+"'",1500);
            }

        } else {
            // к замку
            // msg-fun-log
            var script = top.frames["d_act"].document.createElement("script");
            script.type = "text/javascript";
            script.text = "function msgBadEvent() {" + "var bad_event=/осталось/.test(top.frames['d_pers'].document.getElementById('dinjcell').innerHTML);" + "if(bad_event) {" + "document.location.reload();" + "}" + "}" + "setTimeout('msgBadEvent()',7000);";
            top.frames["d_act"].document.getElementsByTagName("head")[0].appendChild(script);
            // end-msg-fun-log
 var control_text = "" 
 + "MOVE-" 
 + (top.d_pers.d.mp >= 50 ? "<span style=color:red;>HP</span>-" : "HP-") 
 + "<span style=background-color:red;color:white;>CASTLE</span>" 
 + "-<span style=color:blue;>MMP:85%:</span><span style=background-color:blue;color:white;>" + minmp + "</span>" 
 + "-<span style=color:#BC2EEA;>MHP:75%:</span><span style=background-color:#BC2EEA;color:white;>" + minhp + "</span>" 
 + "<input type=hidden value=Log><br/>"
 +"<img src=magbook.html"+((top.d_pers.d.mp*100/top.d_pers.d.mmp )>=50?"?actUser-UseCast="+mbHP:"")+" "
 +"onError=\"frames[0].location='"+((MyHome==0 || !chbox.checked)?castle_room:bad_room)+"';\" width=1 height=1><br>";
			top.frames["d_act"].document.getElementById("control_msg").innerHTML = control_text;
//            console.log("MyHome8" + MyHome)
            if (MyHome > 0  && chbox.checked) {
//                frames[0].location = bad_room;
          top.frames["d_pers"].setTimeout("top.frames['d_pers'].frames['channel_3'].location='"+bad_room_sit+"'",1500);
          //   top.frames["d_act"].location=bad_room_sit;
            } else {
            //    top.frames["d_act"].location = med_room;
              top.frames["d_pers"].setTimeout("top.frames['d_pers'].frames['channel_3'].location='"+castle_room+"'",1500);
            }
        }

    }
    // end-log-back
    if (top.document.el_CrDemand.act_castle.value == 0) {
        // look-castle
        byid("act_castle").style.background = "#D4D0C8 url(https://apeha.ru/img/smode-3.gif) no-repeat";
    }
    // end-look-castle
    demand = 0;
    setTimeout(addObs, 10000);
}

//hostname_oil = 'dutyape.site/duty';
var link = new Array();
link[0] = "Test|javascript:void(0);|to Click";
link[1] = "Test|javascript:void(0);|&nbsp;";
link[2] = "Test|javascript:void(0);|"+top.clan_name;
N = (document.all) ? 0 : 1;

var ddmbox =
    "<form name=el_CrDemand style=\"padding-right:0px;padding-left:0px;padding-bottom:0px;margin:0px;padding-top:0px\">" +
    "<div style=\"width:100%;/*background-color:#FFEEC0*/;font-size:13px;font-family:Vardana\">" +
    "<table border=0 width=100%>" +
    "<tr>" + "<td>" +
    NewButton(0, "39px", "#8A492F",
        "#8A492F", "#FFEEC0", "gold",
        "&nbsp;>>&nbsp;", "ShowDsc();",
        "", "tdscbtn") +    "<td><span id=\"melt\"></span></td>" + "</td>" +
    "</tr>" +
    "<tr style=\"display:none\" id=\"tdsc\">" +
    "<td colspan=\"2\">" +
    "<select size=1 name=map style=width:70px>" +
    "<option selected value=0>станд.</option>" +
    "<option value=1>Аванпост</option>" +
    "<option value=2>Катакомбы</option>" +
    "<option value=3>Засада</option>" +
    "<option value=4>Лабиринт</option>" +
    "<option value=5>Крепость</option>" +
    "<option value=6>На заставу</option>" +
    "<option value=7>Переправа</option>" +
    "<option value=8>Вход в подземелье</option>" +
    "<option value=9>БЛИЦ</option>" +
    "</select>" +
    "<select size=1 name=minlvl>" +
    "<option value=8>8</option>" +
    "<option value=9>9</option>" +
    "<option value=10>10</option>" +
    "<option value=11>11</option>" +
    "<option value=12>12</option>" +
    "<option selected value=13>13</option>" +
    "<option value=14>14</option>" +
    "<option value=15>15</option>" +
    "<option value=16>16</option>" +
    "<option value=17>17</option>" +
    "<option value=18>18</option>" +
    "<option value=19>19</option>" +
    "<option value=20>20</option>" +
    "<option value=21>21</option>" +
    "<option value=22>22</option>" +
    "<option value=23>23</option>" +
    "<option value=24>24</option>" +
    "<option value=25>25</option>" +
    "<option value=26>26</option>" +
    "</select>" +
    "<select size=1 name=maxlvl>" +
    "<option value=8>8</option>" +
    "<option value=9>9</option>" +
    "<option value=10>10</option>" +
    "<option value=11>11</option>" +
    "<option value=12>12</option>" +
    "<option value=13>13</option>" +
    "<option value=14>14</option>" +
    "<option value=15>15</option>" +
    "<option value=16>16</option>" +
    "<option value=17>17</option>" +
    "<option value=18>18</option>" +
    "<option value=19>19</option>" +
    "<option value=20>20</option>" +
    "<option value=21>21</option>" +
    "<option value=22>22</option>" +
    "<option value=23>23</option>" +
    "<option value=24>24</option>" +
    "<option value=25>25</option>" +
    "<option value=26>26</option>" +
    "<option value=27>27</option>" +
    "<option value=28>28</option>" +
    "<option value=29>29</option>" +
    "<option selected value=30>30</option>" +
    "</select>" + "&#8226;" +
    "<select size=1 name=maxp>" +
    "<option value=4>4</option>" +
    "<option value=6>6</option>" +
    "<option value=8>8</option>" +
    "<option selected value=10>10</option>" +
    "<option value=12>12</option>" +
    "<option value=14>14</option>" +
    "<option value=16>16</option>" +
    "</select>" +
    "<input type=button value=Ok onclick=\"" +
    "CreateDemand(el_CrDemand.map.value,el_CrDemand.minlvl.value,el_CrDemand.maxlvl.value,el_CrDemand.maxp.value)\">" +
    "<br>" +
    "<input type=text name=sortby2 size=20>" +
    "<input type=button value=\"Найти лог\" onclick=\"" +
    "window.open('finished.lhtml?sortby=2&unick1='+el_CrDemand.sortby2.value+'')\">" +
    "</tr></table></div>" +
/*    "<div style=\"margin-top:0px;margin-left:220px;padding-left:2px;width:25px;height:16px;" +
    "background-color:#FCE1A3;border-color:#8A492F;border-style:solid;" +
    "border-width:1px 0px 1px 1px;position:absolute;\" id=\"info_soclan\">K</div>" +
    "<div style=\"width:100%;height:16px;background-color:#FCE1A3;border-top:1px solid #8A492F;" +
    "font-color:#33CCAA;font-size:13px;font-family:vardana;\" id=\"infob\">&#182;&nbsp;</span></div>" +*/
    "</form>";
    var divDDM = document.createElement("div");
    divDDM.id = "panel";
/*    divDDM.style.left = "1px";
    divDDM.style.top = "350px";
    divDDM.style.width = "255px";
    divDDM.style.border = "2px solid #8A492F";
    divDDM.style.fontSize = "12px";
    divDDM.style.fontFamily = "Vardana";
    divDDM.style.position = "absolute";
    divDDM.style.zIndex = "7";
    */
    divDDM.innerHTML = ddmbox;
    top.activTown.appendChild(divDDM);
    foundry(10);
    
    function foundry(tm) {
    var span = document.createElement("span");
    span.id = "as_audio";
    document.body.appendChild(span);
    if (tm == 10) {
        document.getElementById("melt").innerHTML = "" +
    "<table border=0>" + "<tr>" +
    "<td>" +
    "<span style=\"display:block;width:48;height:22;" +
    "background:url(" +
    top.hostname +
    "duty/img/arrow/fight.gif) no-repeat right center;\"  title=\"Автобой\" id=\"rgua\">" +
    "<img border=0 src=" +
    top.hostname +
    "duty/img/arrow/checkbox.gif width=48 height=22 onclick=MainSwitch(3);MainSwitch(4);>" +
    "</span>" + "</td>" +  "<td>" +
    "<div style=\"margin-top:0px;margin-left:40px;width:7px;height:20px;" +
    "background-color:skyblue;border-color:black;border-style:solid;" +
    "border-width:1px 1px 1px 0px;position:absolute;\" id=\"auto_sys\">" +
    "<div style=\"width:7px;height:6px;background-color:skyblue;border-width:0px;\"></div>" +
    "<div style=\"width:7px;height:7px;background-color:gold;border-width:0px;\"></div>" +
    "<div style=\"width:7px;height:7px;background-color:white;border-width:0px;\"></div>" +
    "</div>" +
    "<input name=\"act_castle\" type=\"button\" value=\"0\" " +
    "onclick=\"if(this.value==0){" +
    "this.style.background='gold url(https://apeha.ru/img/smode-3.gif) no-repeat';" +
    "this.value=1;this.blur();" +
    "}else{" + "this.blur();" +
    "byid('auto_sys').style.borderColor='black';" +
    "this.style.background='#D4D0C8 url(https://apeha.ru/img/smode-3.gif) no-repeat';" +
    "this.value=0;this.style.borderColor='black';};\" " +
    "style=\"width:48px;height:22px;background:url(https://apeha.ru/img/smode-3.gif) no-repeat;" +
    "border:1px solid black;color:#0000FF;padding-left:24px;cursor:help\" " +
    "id=\"act_castle\" title=\"Из Замка в бой\">" +
    "</td>" +
  "<td>" +
    "<input type=\"text\" name=\"abround\" value=\"10\" onmouseover=\"this.focus();this.select()\" " +
    "style=\"margin-top:4px;margin-left:4px;width:18px;height:15px;font-size:8pt;" +
    "background-color:#D4D0C8;border:1px solid black;position:absolute;\">" +
    "<div style=\"width:48px;height:22px;" +
    "background:url(" +
    top.hostname +
    "duty/img/arrow/fight.gif) no-repeat;\" title=\"Лимит раундов\">" +
    "</div>" + "</td><td>"
+"<div onclick=\"top.document.el_CrDemand.clonsum.click();\" "
+"style=\"margin-top:2px;margin-left:0px;width:15px;height:12px;"
+"background:url(" +
    top.hostname +
    "duty/img/arrow/ico_unis.png) no-repeat;"
+"border-width:0px 0px 0px 0px;position:absolute;\" title=\"Лимит врагов\"></div>"
+"<input name=\"clonsum\" type=\"button\" value=1 onclick=\""
+"if(this.value==0){"
+"this.value=1;"
+"this.style.color='gold';"
+"this.style.backgroundColor='gold';"
+"}else{"
+"this.value=0;"
+"this.style.color='#D4D0C8';"
+"this.style.backgroundColor='#D4D0C8';};\" "
+"style=\"padding:0px;width:15px;height:22px;"
+"color:gold;background-color:gold;border:1px solid black;\" title=\"Лимит врагов\">"
+"<input name=\"abHP\" type=\"button\" value=0 onclick=\""
+"if(this.value==0){"
+"this.value=1;"
+"this.style.color='gold';"
+"this.style.backgroundColor='gold';"
+"}else{"
+"this.value=0;"
+"this.style.color='#D4D0C8';"
+"this.style.backgroundColor='#D4D0C8';};\" "
+"style=\"margin-left:2px;padding:0px;width:15px;height:22px;background:url(" +
    top.hostname +
    "duty/img/arrow/ico_lifeup.png) no-repeat;"
+"color:#D4D0C8;background-color:#D4D0C8;border:1px solid black;\" title=\"Лимит HP\">"

+"</td>"+"<td>" +
    "<div onclick=\"document.el_CrDemand.abMoveСlick.click();\" " +
    "style=\"margin-top:1px;margin-left:1px;width:12px;height:13px;" +
    "background:url(" +
    top.hostname +
    "duty/img/arrow/ico_move_to.png) no-repeat;" +
    "border-width:0px 0px 0px 0px;position:absolute;\" title=\"Ходить в один клик\"></div>" +
    "<input name=\"abMoveСlick\" type=\"button\" value=0 onclick=\"" +
    "if(this.value==0){" +
    "this.value=1;" +
    "this.style.color='gold';" +
    "this.style.backgroundColor='gold';" +
    "}else{" + "this.value=0;" +
    "this.style.color='#D4D0C8';" +
    "this.style.backgroundColor='#D4D0C8';};\" " +
    "style=\"margin-left:0px;padding:0px;width:14px;height:22px;" +
    "color:#D4D0C8;background-color:#D4D0C8;border:1px solid black;\" title=\"Ходить в один клик\">" +
    "</td>" + "<td>&nbsp;</td>" +
    "</tr>" + "</table>";
//console.log("ща будем запускать")
        setTimeout(addObs, 10);
    }
}


AddIFramePers("channel_3");
function sl_Data() {
    if (top.d_pers.frames["channel_2"].document.getElementsByTagName("a")[0]) {
        for (var i = 0; i < top.d_pers.frames["channel_2"].document.body.getElementsByTagName("a").length; i++) {
            if (top.d_pers.frames["channel_2"].document.body.getElementsByTagName("a")[i].title == "Приват") {
                top.d_pers.frames["channel_2"].document.body.getElementsByTagName("a")[i].title = 0;
                var sl_str = "" + top.d_pers.frames["channel_2"].document.body.getElementsByTagName("a")[i].onclick;
                var sl_reg = /setPrivate\((\d+),"(.+)"\)/;
                var sl_arr = sl_reg.exec(sl_str);
                sl_arr[2] = sl_arr[2].replace(/(\s)/gi, "");
                soclanList[soclanList.length] = {
                    nk: sl_arr[2]
                };
            }
        }
    }
  //  byid("info_soclan").innerHTML = "K" + soclanList.length;
}
AddIFramePers("channel_2");
    var a_iframe = top.d_pers.document.getElementsByTagName("iframe")["channel_2"];
    a_iframe.onload = function() {
        sl_Data();
    }
    top.d_pers.frames["channel_2"].location = "soclan.html";
    // END-SOCLAN-READ
    
/*******************************************/
/* Включаем боевой режим пребывания в лесу */
/*******************************************/

if (location.host == "newforest.apeha.ru") {
    top.MainSwitch(3)
    top.document.el_CrDemand.clonsum.click()
    show_activForest();
    
/*******************************************/
/* Получаем последнее состояние в лесу */
/*******************************************/

var senddata = {
    "persID": top.persID,
    "metod": 1
};
//                console.log(senddata);
var url = top.hostname+"duty/activity.php";
$.ajax({
    type: "POST",
    url: url,
    data: senddata,
    success: function(msg) {
        console.log(msg);
        var strArr = JSON.parse(JSON.parse(msg))
        if (strArr.travnik) {
            $("#grassBtn").click();
            if (strArr.travMCBtn) {
                $("#travMCBtn").click()
            }
            if (strArr.sundBtn) {
                $("#sundBtn").click()
            }
        }
        if(strArr.autoGo){
            top.marshrut = strArr.marshrut
            top.destinationXY.value = strArr.destinationXY
            top.routePointsCount.innerText = strArr.marshrut.length
            $("#destGoBtn").click()
        }

    }
});
    
    setTimeout(function() {top.hide_activtown()},1000)
}
    
}
////////////////////////////////////////////////////////////////
function Indicator(c, txt) {
    var div = top.frames["d_act"].document.createElement("div");
    div.id = "status";
    div.style.top = "10px";
    div.style.left = "10px";
    div.style.width = "25px";
    div.style.height = "20px";
    div.style.background = c;
    div.style.position = "absolute";
    div.style.zIndex = "1";
    div.innerHTML = txt;
    top.frames["d_act"].document.body.appendChild(div);
}
function AddIFramePers(name) {
    var ifchannel = top.d_pers.document.createElement("iframe");
    ifchannel.name = name;
    ifchannel.id = name;
    ifchannel.style.visibility = "hidden";
    ifchannel.style.width = "1px";
    ifchannel.style.height = "1px";
    top.d_pers.document.body.appendChild(ifchannel);
}
function AddJS(n, xfile) {
    if (n == 0) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = top.hostname+"duty/" + xfile + "?xdac=" + Math.random();
        document.body.appendChild(script);
    }
    if (n == 1) {
        var script = top.frames["d_act"].document.createElement("script");
        script.type = "text/javascript";
        script.src = top.hostname+"duty/" + xfile + "?xdac=" + Math.random();
        top.frames["d_act"].document.body.appendChild(script);
    }
    if (n == 2) {
        var script = top.frames["d_act"].document.createElement("script");
        script.type = "text/javascript";
        script.src = top.hostname+"duty/" + xfile + "?xdac=" + Math.random();
        top.frames["d_act"].document.body.appendChild(script);
    }
}
function LocSite(elem, tag, txt) {
    if (elem == "title") {
        for (i = 0; i < top.frames["d_act"].document.getElementsByTagName(tag).length; i++) {
            if (top.frames["d_act"].document.getElementsByTagName(tag)[i].title == txt) {
                return true;
            }
        }
    }
    if (elem == "value") {
        for (i = 0; i < top.frames["d_act"].document.getElementsByTagName(tag).length; i++) {
            if (top.frames["d_act"].document.getElementsByTagName(tag)[i].value == txt) {
                return true;
            }
        }
    }
    if (elem == "name") {
        for (i = 0; i < top.frames["d_act"].document.getElementsByTagName(tag).length; i++) {
            if (top.frames["d_act"].document.getElementsByTagName(tag)[i].name == txt) {
                return true;
            }
        }
    }
}
function CreateDemand(map, minlvl, maxlvl, maxp) {
    var game = "arena_room_1_bmode_3.html";
    if (map == 9) {
        game = "arena_room_1_bmode_7.html";
    }
    if (!top.frames["d_act"].document.getElementById("control_msg")) {
        // msg-log
        var element = top.frames["d_act"].document.getElementsByTagName("b")[1];
        var text = top.frames["d_act"].document.createElement("span");
        text.id = "control_msg";
        text.style.background = "yellow";
        text.innerHTML = "msg";
        element.parentNode.insertBefore(text, element);
        // end-msg-log
    }
    var control_text = "" + "<span style=background-color:yellow;color:black;>СОЗДАТЬ_ЗАЯВКУ</span>" + "<form name=cd action=" + game + " method=post>" + "<input type=hidden name=Battle{fist} value=0>" + "<input type=hidden name=Battle{blood} value=1>" + "<input type=hidden name=Battle{minlvl} value=" + minlvl + ">" + "<input type=hidden name=Battle{maxlvl} value=" + maxlvl + ">" + "<input type=hidden name=Battle{maxp} value=" + maxp + ">" + "<input type=hidden name=Battle{tm} value=60>" + "<input type=hidden name=Battle{mapid} value=" + map + ">" + "<input type=hidden name=Battle{bpos1} value=0>" + "<input type=hidden name=Battle{bpos2} value=0>" + "<input type=hidden name=Battle{obst} value=0>" + "<input type=hidden name=Battle{vall} value=0>" + "<input type=hidden name=actBattle-CreateHeader value=1>" + "</form><br>";
//    document.getElementById("t").innerHTML = "" + "<span style=background-color:yellow;color:black;>СОЗДАТЬ_ЗАЯВКУ</span>";
    top.frames["d_act"].document.getElementById("control_msg").innerHTML = control_text;
    var chform = top.frames["d_act"].document.forms["cd"];
    chform.submit();
    top.frames["d_act"].document.body.appendChild(chform);
    top.activity(top.persID, 5, top.getLoc, 600, "Создали заявку")
}

function NewButton(a, width, color, brColor, bgColor, hovColor, txt, click, title, id) {
    if (a == 0) {
        return "<a href=javascript:void(0); onclick=\"" + click + "\" title=\"" + title + "\">" + "<div onmouseover=\"info(1,this,'" + hovColor + "');\" onmouseout=\"endi(this,'" + bgColor + "');\" " + "style=\"margin-right:4px;width:" + width + ";" + "border:1px solid " + brColor + ";background-color:" + bgColor + ";color:" + color + ";" + "font-size:12px;font-family:Arial;text-align:center;" + "float:left;cursor:hand;\" " + "id=" + id + ">" + txt + "</div></a>";
    }
}
function ShowDsc() {
    val = byid("tdsc").style.display;
    byid("tdsc").style.display = (val ? "" : "none");
    byid("tdscbtn").innerHTML = (val ? "&nbsp;<<&nbsp;" : "&nbsp;>>&nbsp;");
}
function getArray(id) {
    var splitarray = link[id].split("|");
    return splitarray;
}
function info(i, obj, col) {
/*    sublink = getArray(i);
    infobar = document.getElementById("infob");
    infobar.innerHTML = "&#182; " + sublink[2];
    obj.style.backgroundColor = col;*/
}
function endi(obj, col) {
    /*obj.style.backgroundColor = col;
    infobar = document.getElementById("infob");
    infobar.innerHTML = "&#182; &nbsp;";*/
}
function MainSwitch(t) {
    if (t == 2) {
        OnOffguard = 0;
        document.getElementById("rgua").innerHTML = "" + "<img border=0 src=" +
    top.hostname +
    "duty/img/arrow/checkbox.gif width=48 height=22 onclick=MainSwitch(3);MainSwitch(4);>";
    }
    if (t == 3) {
        OnOffguard = 1;
        document.getElementById("rgua").innerHTML = "" + "<img border=0 src=" +
    top.hostname +
    "duty/img/arrow/checkbox-a.gif width=48 height=22 onclick=MainSwitch(2);>";
    }
    if (t == 4) {
        OnOffbuttons = 0;
   }
}
function asAudio(name) {
	if (top.document.getElementById("audioBtn").checked) {
		var el = byid("as_audio");
		if(el){
    		byid("as_audio").innerHTML = "" + "<audio autoplay>" + "<source src=\""+
    top.hostname +
    "duty/audio/" + name + "\" type=\"audio/mpeg\">" + "</audio>";
		}
    }


}