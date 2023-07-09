// общие функции

function addAfter(targetEl, newEl) {
    if (targetEl.after) {
        targetEl.after(newEl);
    } else {
        targetEl.parentNode.appendChild(newEl);
    }
}
function addBefore(targetEl, newEl) {
    if (targetEl.before) {
        targetEl.before(newEl);
    } else {
        targetEl.parentNode.insertBefore(newEl, targetEl);
    }
}
function appendTo(targetEl, newEl) {
    if (targetEl.appendChild) {
        targetEl.appendChild(newEl);
    } else {
        targetEl.parentNode.appendChild(newEl);
    }
}
function curDT() {
    var d = new Date();
    return d.toLocaleTimeString();
}
function sendLogMes(htmlTxt, elemId) {
    var ta = rootDoc.getElementById(elemId);
    ta.innerHTML = "[" + curDT() + "] " + htmlTxt + "<br>" + ta.innerHTML;
    //Записываем лог
    top.activity(top.persID, 100, top.getLoc, 0, htmlTxt);
}
/*
function asAudio(name) {
    if (top.document.getElementById("audioBtn").checked) {
        top.byid("as_audio").innerHTML = "" + "<audio autoplay>" + "<source src=\"https://brainoil.site/audio/" + name + "\" type=\"audio/mpeg\">" + "</audio>";
    }
}
*/
//console.log(rootWin.nd);
function check_boi() {
    //    console.log(rootWin.check_boi_count++);
    rootWin.check_boi_count++;
    var actIframe = top.frames["d_act"];
    var actIframeWin = actIframe.window;
    var actIframeDoc = actIframe.document;
    if (actIframeWin.BID > 0 && !(actIframeWin.logBaseRoundID == actIframeWin.logLastRoundID && actIframeWin.logTail == 0) && actIframeWin.ME != undefined) {
        //        console.log('мы тут чтоли??');
        //                alert("Uzhe boi");
        if (rootWin.check_boi_tymer) {
            clearInterval(rootWin.check_boi_tymer)
        }

        rootWin.check_boi_tymer = undefined;
        rootWin.check_boi_count = NaN;
        //а теперь ждем окончания
        inject_battledata();
        rootWin.marking_timer = setInterval(markering, 1000)
        rootWin.check_end_boi_tymer = setInterval(check_end_boi, 1000);
        cur_marker(actIframeDoc.getElementById('map'));
        show_activwar();
        show_warlink(actIframeWin.BID);
        hide_activtown();
        top.activity(top.persID, 1, top.getLoc, 0, "Начался бой")
        if (top.location.host == "newforest.apeha.ru") {
        	console.log("Сохраняем параметры леса");
        	var marsJSON = '"marshrut":'+JSON.stringify(top.marshrut)        
			var travJSON = '"travnik":'+top.travnik+',"travMCBtn":'+top.travMCBtn.checked+',"sundBtn":'+top.sundBtn.checked+''
			var dest = '"destinationXY":"'+top.destinationXY.value+'"'
			var autoGO = '"autoGo":'+top.autoGo
			var strJSON = '{'+travJSON+','+dest+','+marsJSON+','+autoGO+'}'
			top.activity(top.persID, 99, top.getLoc, 0, strJSON)
			console.log("Сохранили параметры леса");
        	hide_activForest();
        }
        //}
    }else{
    	if(!top.document.getElementById("activTownBlock")) {
    		//setTimeout(function() {top.TownButtons();},1250)
    		TownButtons();
    		hide_activwar();
    		show_activtown();
    	}
    }
}

function check_end_boi() {
    //    console.log(rootWin.check_end_boi_count++);
    //    rootWin.check_end_boi_count++;
    var actIframe = top.frames.d_act;
    var actIframeDoc = actIframe.document;
    var actIframeWin = actIframe.window;
    //     var AddData = myAddData.bind(actIframeWin) ;
    //	actIframeWin.AddData = myAddData;
    //	myAddData.bind(actIframeWin);
/*    if(!top.d_act.document.getElementById("control_panel")){
//    	if(top.guard_act==1) {
			top.OnOffguard=1;
			top.guard_act=0;
			if(top.document.getElementById("el_CrDemand")==null){
            	//TownButtons();
            	//setTimeout("top.d_act.autotest()",3333);
			}
//            setTimeout("top.d_act.autotest()",1333);
//			
//		}
    }
    */
    if (!rootWin.marking_timer) {
        var senddata = {
            "metod": 23,
            "bid": actIframeWin.BID
        };
        //                console.log(senddata);
        var url = top.hostname+"duty/dbrelay.php";
        $.ajax({
            type: "POST",
            url: url,
            data: senddata,
            success: function(msg) {
                //                console.log(msg);
                //            alert(msg);
                if(msg){
                cur_marker(actIframeDoc.getElementById('map'));
                rootWin.arrOrigPers = JSON.parse(msg);
                try{
                rootWin.marking_timer = setInterval(markering, 1000)
                }
                catch(e){console.log("Пока нет пометок " + e);
                }
                
                }
            }
        });
        var senddata = {
            "metod": 19,
            "bid": actIframeWin.BID
        };
        //                console.log(senddata);
        var url = top.hostname+"duty/dbrelay.php";
        $.ajax({
            type: "POST",
            url: url,
            data: senddata,
            success: function(msg) {
            	if(msg){
                console.log(msg);
                //            alert(msg);
                rootWin.arrClones = JSON.parse(msg);
            	}
            }
        });
    }

    /**********************************/
    actIframeWin.PLATINA = 1;
    if (actIframeWin.logBaseRoundID == actIframeWin.logLastRoundID && actIframeWin.logTail == 0 && actIframeWin.ME == undefined) {
        //        console.log('закончился чтоли?????');
        //		alert("Закончился");
        var popup = rootDoc.getElementById('popup');
        popup.style.display = "none"
        rootWin.arrOrigPers = [];
        hide_warlink();
        hide_activwar();
        show_activtown();
        if (actIframeDoc.getElementById("inj_battledata") != undefined) {
            actIframeDoc.getElementById("inj_battledata").remove;
        }
        if (rootWin.check_end_boi_tymer) {
            clearInterval(rootWin.check_end_boi_tymer);
        }
        if (rootWin.marking_timer) {
            clearInterval(rootWin.marking_timer);
        }
        rootWin.marking_timer = undefined
        rootWin.check_end_boi_tymer = undefined;
        //        rootWin.check_end_boi_count = NaN;
        rootWin.check_boi_tymer = setInterval(check_boi, 500);
                top.activity(top.persID, 2, top.getLoc, 0, "Закончился бой")
    } else {
        if (actIframeDoc.getElementById("inj_battledata") == undefined) {
            inject_battledata();
            show_activwar();
            show_warlink(actIframeWin.BID);
            hide_activtown();
            top.activity(top.persID, 1, top.getLoc, 0, "Обновили страницу во время боя")
//    	if(!top.document.getElementById("activTownBlock")) {
//   		top.TownButtons();
//    		setTimeout(function(){top.d_act.autotest()},3333);
//    	}
        }
        if (actIframeDoc.getElementById("ruler") == undefined) {
            create_ruler();
        }
        var el = actIframeDoc.getElementById('map')
        if (el && !el.onmousemove) {
            cur_marker(el);
        }
        var els = actIframeWin.$('[id^=pr_]');
        for (var i = 0; i < els.length; i++) {
            cur_marker(els[i])
        }
        if (actIframeDoc.getElementById("HotKeys") == undefined) {
            var h = actIframeDoc.getElementsByTagName('head')[0];
            var Script = actIframeDoc.createElement('script');
            Script.id = "HotKeys";
            Script.charset = "utf-8";
            Script.src = top.hostname+"duty/jquery.keyboard.js";
            Script.language = "JavaScript";
            Script.type = "text/javascript";
            h.appendChild(Script);
        }
        if (actIframeDoc.getElementById("HotKeys2") == undefined && actIframeWin.$.keyboard) {

            var h = actIframeDoc.getElementsByTagName('body')[0];
            var Script = actIframeDoc.createElement('script');
            var html = '';
            actIframeWin.$.keyboard('shift+[(n1-n9)|(fkeys)],alt+[(n1-n9)],ctrl+[(n1-n9)]', function(e, bind) {
                top.$('#WarBut' + e[1].originalEvent.code.replace('Digit', ''))[0].click()
            })
            Script.id = "HotKeys2";
            Script.charset = "utf-8";
            Script.text = html;
            Script.language = "JavaScript";
            Script.type = "text/javascript";
            appendTo(h, Script);

        }
//        var TurnirBatle = [3,5,15];
//        if(TurnirBatle.indexOf(top.d_act.BTP)>=0)
//        {
//        	console.log("запуск боя был тут.");
//          	top.d_act.autobat = function d() {console.log("запуск боя был тут.")};
//        }

    }
}

function clog(text) {
    alert(text);
}
function dbex(persID, castID, row, page, metod, castName, clanID) {
    //    var jQnw = newWin.jQuery
    var senddata = {
        "persID": persID,
        "castID": castID,
        "row": row,
        "page": page,
        "metod": metod,
        "castName": castName,
        "clanID": clanID
    };
    //                console.log(senddata);
    var url = top.hostname+"duty/dbrelay.php";
    $.ajax({
        type: "POST",
        url: url,
        data: senddata,
        success: function(msg) {
            console.log(msg);
        }
    });

}
function activity(persID, act, loc, duration, comm) {
    //    var jQnw = newWin.jQuery
    var senddata = {
        "persID": persID,
        "act": act,
        "loc": loc,
       // "dtStamp": curDT,
        "duration": duration,
        "comm": comm
    };
    //                console.log(senddata);
    var url = top.hostname+"duty/activity.php";
    $.ajax({
        type: "POST",
        url: url,
        data: senddata,
        success: function(msg) {
            console.log(msg);
        }
    });

}
function activityForest(persID, act, loc, duration, comm, metod) {
    //    var jQnw = newWin.jQuery
    var senddata = {
        "persID": persID,
        "act": act,
        "loc": loc,
       // "dtStamp": curDT,
        "duration": duration,
        "comm": comm,
        "metod":metod
    };
    //                console.log(senddata);
    var url = top.hostname+"duty/activity.php";
    $.ajax({
        type: "POST",
        url: url,
        data: senddata,
        success: function(msg) {
            console.log(msg);
        }
    });

}
function inject_battledata() {
    var actIframe = top.d_act;
    var actIframeDoc = actIframe.document;

    var h = actIframeDoc.getElementsByTagName('body')[0];
    var Script = actIframeDoc.createElement('script');
    Script.id = "inj_battledata";
    Script.charset = "utf-8";
    Script.src = top.hostname+"duty/inj_battledata.js?ver=" + Math.random();
    Script.language = "JavaScript";
    Script.type = "text/javascript";
    (h) ? appendTo(h, Script) : false;

}
function create_ruler() {
    var actIframe = top.frames["d_act"];
    var actIframeDoc = actIframe.document;
    var actIframeWin = actIframe.window;
    var numleters = ["", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Э", "Ю", "Я"]

    var w = actIframeWin.FLDX;
    var h = actIframeWin.FLDY;
    var map = actIframeDoc.getElementById("map")
    if (map && map.style["width"].length > 0) {
        //    if (!map==undefined){
        var maxw = Number(map.style["width"].substr(-map.style["width"].length, (map.style["width"].length - 2))) + 30;
        var maxh = Number(map.style["height"].substr(-map.style["height"].length, (map.style["height"].length - 2))) + 50;

        var ell = actIframeDoc.createElement('div');
        var html = '';
        ell.id = "ruler";
        for (var linx = 1; linx <= w; linx++) {
            html += '<div id="linx' + linx + '" style="position: absolute; top: 40px;left:' + (4 + 34 * linx) + 'px; font-weight: 600;">' + linx + '</div>';
            html += '<div id="linmx' + linx + '" style="position: absolute; top: ' + maxh + ';left:' + (4 + ((h % 2 == 0) ? 17 : 0) + 34 * linx) + 'px; font-weight: 600;">' + linx + '</div>';
        }

        for (var liny = 1; liny <= h; liny++) {
            html += '<div id="liny' + liny + '" style="position: absolute; top:' + (32 + 30 * liny) + 'px;left:10px; font-weight: 600;">' + numleters[liny] + '</div>';
            html += '<div id="linmy' + liny + '" style="position: absolute; top:' + (32 + 30 * liny) + 'px;left:' + maxw + '; font-weight: 600;">' + numleters[liny] + '</div>';
        }
        //          console.log(html);
        ell.innerHTML = html;
        if (map.after) {
            map.after(ell);
        } else {
            map.parentNode.appendChild(ell);
            //    }
        }
    }
}
function cur_marker(el) {
    //	var rootDoc = window.parent.window.parent.window.parent.document;
    var numleters = ["", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Э", "Ю", "Я"]
    var actIframe = top.frames["d_act"];
    var actIframeWin = actIframe.window;
    var actIframeDoc = actIframe.document;
    // подписываем положение
    //        var link = actIframeDoc.getElementById('map');

    //var ev = getAllEventListeners(link)
    //if (!ev.hasOwnProperty("mousemove")){
    if (!el.onmousemove) {
        //        el.addEventListener('mousemove', function(e) {
        el.onmousemove = function(e) {
            e.preventDefault();
        var popup = top.document.getElementById('popup');
            popup.style.display = 'block';
            if (el.id != "map") {
                //            	popup.style.left = e.screenX- el.offsetLeft+ el.width/2 + 'px';
                //	            popup.style.top = e.screenY- el.offsetTop + el.height + 'px';
                popup.style.left = e.screenX + el.width / 2 + 'px';
                popup.style.top = e.screenY - el.height - 15 + 'px';
                var row = Math.floor((e.clientY - el.height - 15) / 30);
                var col = Math.floor((15 + (e.clientX) - ((row % 2 == 0) ? 0 : 17) - 40) / 34);

            } else {
                popup.style.left = e.screenX - el.offsetLeft + 16 + 'px';
                popup.style.top = e.screenY - el.offsetTop + 16 + 'px';
                var row = Math.floor(e.layerY / 30);
                var col = Math.floor((e.layerX - ((row % 2 == 0) ? 0 : 17)) / 34);
            }
            //           popup.style.left = e.screenX - el.offsetLeft + 16 + 'px';
            //           popup.style.top = e.screenY - el.offsetTop + 16 + 'px';
            popup.style.zIndex = 100
            popup.innerText = numleters[(row + 1)] + ':' + (col + 1);
        }
        ;
        //        el.addEventListener('mouseover', function() {
        el.onmouseover = function(e) {
        var popup = top.document.getElementById('popup');
            e.preventDefault();
            popup.style.display = "block"
        }
        ;
        //        el.addEventListener('mouseleave', function() {
        el.onmouseleave = function(e) {
        var popup = top.document.getElementById('popup');
            e.preventDefault();
            popup.style.display = "none"
        }
        ;
        if (parent.arrClones && parent.arrClones.hasOwnProperty(el.id.split("_")[1])) {
            el.oncontextmenu = function(e) {
                e.preventDefault();
                //alert(parent.arrClones[el.id.split("_")[1]]);return false;
                var pp = parent.arrClones[el.id.split("_")[1]];
                el.title = 'Клон:';
                var actIf = top.frames["d_act"];
                var actIfW = actIf.window;
                var item = arrOrigPers[pp];
                var zap = '';

                if (item.ms && item.ms > 0) {
                    // у нас оказывается есть еще и боевая магия
                    zap += ' мс:' + actIfW.SMagicSchools[item.mstype];
                }
                if (item.mstype && item.mstype != '0') {
                    // у нас оказывается есть еще и мска
                    zap += ' тип мс:';
                    if (item.mstype == 1)
                        zap += 'атака';
                    if (item.mstype == 2)
                        zap += 'защита';
                    if (item.mstype == 3)
                        zap += 'отраж.';
                }
                if (item.immBM && item.immBM == 1) {
                    // у нас оказывается есть еще и боевая магия
                    zap += ' иммун к БМ';
                }
                if (actIfW.DEAD[pp]) {
                    zap += ' оригинал мертв';
                }
                var enem;
                if (enem = actIfW.UNBS[pp]) {
                    zap += ' оригинал: ' + numleters[enem.y + 1] + ':' + (enem.x + 1);
                }

                el.title = zap;
                return false;
            }
        }
    }

}

function AddIFrame(name) {
    var ifchannel = document.createElement("iframe");
    ifchannel.name = name;
    ifchannel.id = name;
    ifchannel.style.visibility = "hidden";
    ifchannel.style.width = "1px";
    ifchannel.style.height = "1px";
    document.body.appendChild(ifchannel);
}
function show_warlink(BID){
  	var dd = $('.warlink');
  	var txt = '<a href='+top.hostname+'forall/warmap.html?bid='+BID+'" target=_blank style="padding-right: 15px;">Ссылка на карту</a>';
  	txt += '<a href="https://kovcheg.apeha.ru/combat_bid_'+BID+'.chtml" target=_blank">Ссылка на бой</a>';
	dd.html(txt).show('slow');
	//console.log(txt);
}
function hide_warlink(){
  	var dd = $('.warlink');
	dd.hide('slow');
	//console.log(txt);
}
function show_activwar(){
  	var dd = $('#activWar');
	dd.show('slow');
	//console.log(txt);
}
function hide_activwar(){
  	var dd = $('#activWar');
	dd.hide('slow');
	//console.log(txt);
}
function show_activtown(){
  	var dd = $('#activTown');
	dd.show('slow');
	//console.log(txt);
}
function hide_activtown(){
  	var dd = $('#activTown');
	dd.hide('slow');
	//console.log(txt);
}
function show_activForest(){
  	var dd = $('#activForest');
	dd.show('slow');
	//console.log(txt);
}
function hide_activForest(){
  	var dd = $('#activForest');
	dd.hide('slow');
	//console.log(txt);
}

function getLoc(){
	var el = top.d_act.document.getElementById("rollingscroll");
	if (el) {
	var loc = el.title;
	loc = loc.replace(/&#38;/g,"");
	loc = loc.replace(/quot\;/g,"'");
	}else{
		loc = "Не нашли расположние";
	}
	return loc
}
function dtStamp() {
    var d = new Date();
    return d.toLocaleTimeString();
}
function myAddDataFE(changes, skipupd) {
            var h = top.d_act.document.getElementsByTagName('head')[0];
            if (top.d_act.document.getElementById("MyAddData") != undefined) {
            	top.d_act.document.getElementById("MyAddData").remove;
        	}

            var Script = top.d_act.document.createElement('script');
            Script.id = "MyAddData";
            Script.charset = "utf-8";
            Script.src = top.hostname+"duty/AddDataFE.js?ver=" + Math.random();
            Script.language = "JavaScript";
            Script.type = "text/javascript";
            h.appendChild(Script);
}
top.document.getElementsByTagName('frame')[2].setAttribute('onLoad', 'if(top.d_act.document.location.pathname=="/endbattle.html"){top.myAddDataFE();setTimeout(function(){top.d_act.AddData = top.d_act.myAddDataFE;top.d_act.ShowLog();},1000);}');