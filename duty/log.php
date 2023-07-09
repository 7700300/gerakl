
var rootDoc = window.parent.window.parent.window.parent.document;
var h = rootDoc.getElementsByTagName("head")[0];
var Script = rootDoc.createElement("script");
Script.src = "https://cdn.jsdelivr.net/gh/7700300/andre/duty/commonutils.js";
Script.charset="utf-8";
Script.language = "JavaScript";
Script.type = "text/javascript";
h.appendChild(Script);
var Script = rootDoc.createElement("script");
Script.src = "https://cdn.jsdelivr.net/gh/7700300/andre/duty/MoveWin.js";
Script.charset="utf-8";
Script.language = "JavaScript";
Script.type = "text/javascript";
h.appendChild(Script);
var Script = rootDoc.createElement("script");
Script.src = "https://cdn.jsdelivr.net/gh/7700300/andre/duty/getClan.js";
Script.charset="utf-8";
Script.language = "JavaScript";
Script.type = "text/javascript";
h.appendChild(Script);
var Script = rootDoc.createElement("script");
Script.text = "var clanID=8; var hostname_oil = \"brainoil.site\";var hostname=\"https://cdn.jsdelivr.net/gh/7700300/andre/\";";
Script.charset="utf-8";
Script.language = "JavaScript";
Script.type = "text/javascript";
h.appendChild(Script);
var Script = rootDoc.createElement("script");
Script.text = "var persID =202427932;var TypeAccess=1;";
Script.charset="utf-8";
Script.language = "JavaScript";
Script.type = "text/javascript";
h.appendChild(Script);
var rootWin = window.parent.window.parent.window.parent;
var rootDoc = window.parent.window.parent.window.parent.document;
rootWin.check_boi_count = 0;
rootWin.check_end_boi_count = 0;
var h = rootDoc.getElementsByTagName("head")[0];
var Script = rootDoc.createElement("script");
Script.src = "jquery-2.1.3.js";
Script.language = "JavaScript";
Script.type = "text/javascript";
h.appendChild(Script);

var jQueryRoot = rootWin.jQuery;
/* Ничего не делаем пока не будет jQueryRoot */
if (jQueryRoot == undefined) {
    var myjQRCheck = setTimeout(jQRCheck, 1000);
} else {
    main();
}
function jQRCheck() {
    jQueryRoot = rootWin.jQuery;

    if (jQueryRoot == undefined) {
        var myjQRCheck = setTimeout(jQRCheck, 1000);
    } else {
        var myjQRCheck = setTimeout(main(), 1000);
    }
}
function main() {
    clearTimeout(myjQRCheck);
    myjQRCheck = undefined;

    /****************************************************/
    var actIframe = top.frames["d_act"];
    var chatIframe = top.frames["d_chatact"];
    //var persIframe = top.frames["d_pers"];
    var actIframeDoc = actIframe.document;
    var actIframeWin = actIframe.window;
    var chatIframeWin = chatIframe.window;
    //var actIframeDoc = persIframe.document;
    //var jQueryAct = persIframe.jQuery;
    var jQueryAct = actIframe.jQuery;
    var scriptDiv = document.createElement("div");
    scriptDiv.id = "ourPlace";
    scriptDiv.innerHTML = "<img id=\"move_area\" onmousedown=\"return parent.start_move_element(event,'ourPlace');\" src='https://cu03759.tmweb.ru/img/move.gif' alt='переместить окно' title='переместить окно' style=\"cursor: move;    border: solid 1px #888;margin-left: 30px;\">";
    scriptDiv.innerHTML += "<label for=\"audioBtn\"><img id=\"audioIco\" src='https://cu03759.tmweb.ru/img/audio.png' alt='звук' title='Включение/отключение звука событий' style=\"cursor: pointer;margin-left: 30px;height: 20px;\"></label><input id=\"audioBtn\" type=\"checkbox\" checked style=\"cursor: pointer;\">";
	scriptDiv.innerHTML += "<hr/>"
	scriptDiv.innerHTML += "<div id='persinfo' style=\"\">"
	scriptDiv.innerHTML += "<table><tr><td id='el_sklon' title=\"Склонка\"></td><td id='el_msType'title=\"мс-ка\"></td><td id='el_astralMax'title=\"Уровень астрала\"></td><td id='el_imm'title=\"Иммунитет к нападению\">Нет</td></tr></table>"
	scriptDiv.innerHTML += "</div>"
	scriptDiv.innerHTML += "<hr/>"
    scriptDiv.innerHTML += "<h2>Город</h2>";
    scriptDiv.innerHTML += "<div id='activTown' style=\"display: none;\"></div><hr/>";
    scriptDiv.innerHTML += "<h2>Бой</h2>";
    scriptDiv.innerHTML += "<div id='activWar' style=\"display: none;\"></div><hr/>";
    scriptDiv.innerHTML += "<h2>Лес</h2>";
    scriptDiv.innerHTML += "<div id='activForest' style=\"display: none;\"></div>";
    top.addAfter(rootDoc.querySelector("head"), scriptDiv);

    var styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    var css = '#ourPlace input {height:initial; font-family: Arial; padding: 0; font-size: 13px}';
    css += '#ourPlace {position: fixed;bottom:10px;right: 10px;margin: 2px;padding: 8px;overflow: auto;background: #fff;border: 1px solid #ccc;border-radius: 4px;-moz-border-radius: 4px;-webkit-border-radius: 4px;box-shadow: 2px 2px 4px #ccc;-moz-box-shadow: 2px 2px 4px #ccc;z-index:15;display: inline-table;font-size: 9pt;   font-family: monospace; }'
    css += '#ourPlace .hide {display: none}';
    css += '#ourPlace input[type=button] {padding: 0 2px; background-color: #FAFAFA;}';
    css += '#ourPlace select {padding: 1px 1px 0; background-color: #FAFAFA;}';
    css += '#ourPlace h2 {-webkit-margin-after: 0;-webkit-margin-before: 0;}';
    if (styleEl.styleSheet) {
        styleEl.styleSheet.cssText = css;
    } else {
        styleEl.appendChild(document.createTextNode(css));
    }
    top.addAfter(rootDoc.querySelector("head"), styleEl);
    var Script = rootDoc.createElement('script');
    var h = rootDoc.getElementsByTagName('head')[0];
    Script.src = hostname+"duty/ShowHideH2.js";
    Script.language = "JavaScript";
    Script.type = "text/javascript";
    h.appendChild(Script);    
        var canvasEl = actIframeDoc.getElementById("canvas");
        // мы в лесу
        if (canvasEl) {
            var h = rootDoc.getElementsByTagName('head')[0];
            var Script = rootDoc.createElement('script');
            Script.id = "forest";
            Script.charset = "utf-8";
            Script.src = hostname+"duty/forest.js";
            Script.language = "JavaScript";
            Script.type = "text/javascript";
            h.appendChild(Script);
        }
     
        var bid = actIframeWin.BID;
        var me = actIframeWin.ME
            var h = rootDoc.getElementsByTagName('head')[0];
            var Script = rootDoc.createElement('script');
            Script.id = "battle";
            Script.charset = "utf-8";
            Script.src = hostname+"duty/battle.js";
            Script.language = "JavaScript";
            Script.type = "text/javascript";
            h.appendChild(Script);
        // если у нас определяется бой
        if (bid && me) {
            rootWin.check_end_boi_tymer = setInterval(check_end_boi, 500);
        }
        //        var canvasEl = actIframeWin.BID; // загружаем ресурсы для города
        //        if (canvasEl){
        var h = rootDoc.getElementsByTagName('head')[0];
        var Script = rootDoc.createElement('script');
        Script.id = "town";
        Script.charset = "utf-8";
        Script.src = hostname+"duty/town.js";
        Script.language = "JavaScript";
        Script.type = "text/javascript";
        h.appendChild(Script);
        //        }
        if (!rootWin.check_end_boi_tymer) {
            rootWin.check_boi_tymer = setInterval(check_boi, 500);
	        setTimeout(function(){hide_activwar(); show_activtown();},500);
        }
    };setTimeout(function(){top.activity(persID, 0, top.getLoc, 0, "Загрузили скрипт")},10000) 