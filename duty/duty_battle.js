     // готовим кнопки с действиями
function create_war_button(html) {
//    console.log(html)
    if(html!=""){
//    console.log(html);
    var buttons = JSON.parse(html);

    //     	alert(buttons.length);
    var buthtml = '';
    // делаем поля для вставки цели
    
    for (but in buttons) {
        //    	var but = buttons[i];
//        console.log(buttons[but].img)
//        html += '<input type="button" id="WarBut'+buttons[but].orders+'" onclick="makeCast(' + buttons[but].castID + ',' + buttons[but].row + ',' + buttons[but].page + ',' + buttons[but].type + ');return false"  accesskey="'+buttons[but].orders+'" style="width: 50px;margin-right: 5px;background-image: url(' + buttons[but].img + ');height: 25px;" title="' + buttons[but].castName + '">';
buthtml += '<input type="button" id="WarBut'+buttons[but].orders+'" onclick="top.d_act.UseMagCast(' + buttons[but].a + ',' + buttons[but].b + ',' + buttons[but].castID + ',top.d_act.MyX, top.d_act.MyY);return false"  accesskey="'+buttons[but].orders+'" style="width: 50px;margin-right: 5px;background-image: url(' + top.hostname+buttons[but].img + ');height: 25px;" title="' + buttons[but].castName + '">';

        if (but == 4) {
            buthtml += "<br/>"
        }
    }
    buthtml += "<br/>"+'<input type="button"  onclick="man_warbook();return false" style="width: 27px;margin-right: 5px;background-image: url('+top.hostname+'/img/settings.png);height: 25px;" title="Настройка книги">';
    buthtml += "<br/>"+'<input type="checkbox" id="showMy">Показать своих';
      }   else{
         buthtml='<div style="color: crimson;">Книга магии не инициализирована!! <br/>Инициализировать ее можно только в бою!<br/> И только до использования магии!!!</div>'
        buthtml += '<input type="button" onclick="inic_MB();return false" style="margin-right: 5px;height: 25px;" title="Инициализация Книги магии" value="Инициализировать">';
     }
//console.log(html);
    var activWar = rootWin.byid("activWarBlock");
    activWar.innerHTML = buthtml;
    
}
function dbexGetMB(persID) {
	console.log(top.hostnname);
    var senddata = {
        "persID": persID,
        "metod": 3
    };
    console.log("senddata " + senddata.persID);
    var url = top.hostname+"duty/dbrelay.php";
    $.ajax({
        type: "POST",
        url: top.hostname+'duty/dbrelay.php',
        data: senddata,
        error:function(html) {
            console.log(JSON.parse(html.responseText));
           setTimeout(function() { create_war_button(html.responseText);},500)
        },
        success: function(html) {
//        	console.log("msg " + html);
        	create_war_button(html);
 //           
//            var activWar = byid("activWarBlock");
//    		activWar.innerHTML=html;
        }//  dataType: dataType
    });
    
}
            var h = rootDoc.getElementsByTagName('head')[0];
            var Script = rootDoc.createElement('script');
            Script.id = "commonbatleutils";
            Script.charset = "utf-8";
            Script.src = top.hostname+"duty/commonbattleutils.js?ver="+Math.random();
            Script.language = "JavaScript";
            Script.type = "text/javascript";
            h.appendChild(Script);

             
    var activWar = rootDoc.getElementById("activWar");

     var styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    var css = '#popup{position: fixed;background: rgba(0, 0, 0, 0.8);box-shadow: 0 0 5px black;padding: 3px 6px;color: white;font: 12px Arial;}';
	css += 'div .warlink {display:block;padding:4px;margin:8px auto;background: #ccffcc;border:1px dotted #76dd82;border-radius: 2px;-moz-border-radius: 2px;-khtml-border-radius: 2px;-webkit-border-radius: 2px;font-size: 10px;line-height: 16px;}';
    css += 'div .error {display:block;padding:4px;margin:8px auto;background: #ffcccc;border:1px dotted #dd7682;border-radius: 2px;-moz-border-radius: 2px;-khtml-border-radius: 2px;-webkit-border-radius: 2px;font-size: 14px;line-height: 16px;}';
	css += 'div .done {display:block;padding:4px;margin:8px auto;background: #ccffcc;border:1px dotted #76dd82;border-radius: 2px;-moz-border-radius: 2px;-khtml-border-radius: 2px;-webkit-border-radius: 2px;font-size: 14px;line-height: 16px;}';
    if (styleEl.styleSheet) {
        styleEl.styleSheet.cssText = css;
    } else {
        styleEl.appendChild(document.createTextNode(css));
    }
    appendTo(activWar, styleEl);

    var responce = '<div class="warlink" style="display: none;"></div><div class="error" style="display: none;"></div><div class="done" style="display: none;"></div><div id="popup" style="display: none; z-index: 100;"></div>';
    var actionsDiv = document.createElement('div');
    actionsDiv.id = "activWarResponce";
    actionsDiv.innerHTML = responce;
    appendTo(activWar, actionsDiv);

    var coor = '<input type="hidden" id="coorx" value="0" style="width: 20px;">';
	coor +='<input type="hidden" id="coory" value="0" style="width: 20px;">';
	coor +='<input type="hidden" id="warcoors" value="0" style="width: 60px;"> ';
	
    var actionsDiv = document.createElement('div');
    actionsDiv.id = "activWarCoors";
    actionsDiv.innerHTML = coor;
    appendTo(activWar, actionsDiv);
    
/*    var warbut = "<table border=0 cellspacing=0 cellpadding=1><tr>"
    +"<td valign=top>"
+"<input type=button value=\"HEAD\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubkick(0,0);ubblock(1,2);ubblock(1,3);MakeTurn();\" oncontextmenu=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,4);ubblock(0,2);ubblock(1,3);ubblock(1,1);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=width:83px;color:black;background-color:khaki;  title=\"Left/Right Click\n Kick/Block\n This type of button\">"
+"<br>"
+"<input type=button value=\"L\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubkick(0,2);ubkick(1,2);MakeTurn();\" oncontextmenu=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,4);ubblock(1,3);ubblock(0,1);ubblock(1,0);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=width:28px;color:black;background-color:khaki;>"
+"<input type=button value=\"B\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubkick(0,1);ubkick(1,1);MakeTurn();\" oncontextmenu=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,4);ubblock(1,3);ubblock(0,2);ubblock(1,0);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=\"width:27px;color:black;background-color:khaki;\">"
+"<input type=button value=\"R\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubkick(0,3);ubkick(1,3);MakeTurn();\" oncontextmenu=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,4);ubblock(1,2);ubblock(0,1);ubblock(1,0);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=width:28px;color:black;background-color:khaki;>"
+"<br>"
+"<input type=button value=\"SHOES\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubkick(0,4);ubkick(1,4);MakeTurn();\" oncontextmenu=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,0);ubblock(1,1);ubblock(0,2);ubblock(1,3);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=width:83px;color:black;background-color:khaki;>"
+"</td></tr></table>";
    var actionsDiv = document.createElement('div');
    actionsDiv.id = "activWarButtons";
    actionsDiv.innerHTML = warbut;
    appendTo(activWar, actionsDiv);
*/
    var persIframe = top.frames.d_pers;
    var persIframeWin = persIframe.window;
    var actionsDiv = document.createElement('div');
    actionsDiv.id = "activWarBlock";
    actionsDiv.innerHTML = 'А тут у нас будут боевые кнопки';
    appendTo(activWar, actionsDiv);
    dbexGetMB(top.d_pers.d.id?top.d_pers.d.id:top.d_chatact.meid);


 