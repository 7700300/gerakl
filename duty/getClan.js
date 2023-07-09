function AddIFrame(name) {
    var ifchannel = document.createElement("iframe");
    ifchannel.name = name;
    ifchannel.id = name;
    ifchannel.style.visibility = "hidden";
    ifchannel.style.width = "1px";
    ifchannel.style.height = "1px";
    //    ifchannel.onload = 'alert("ghbdtn")' ;
    document.body.appendChild(ifchannel);
}
function getPersInfo() {
    //    console.log('popali')
    var nobr = frames["pers_info"].document.getElementsByTagName('nobr')
    //    console.log(nobr)    
    var done = false
    for (var i = 0; i < nobr.length; i++) {
        var ch = nobr[i].innerText.charAt(0)
        if (ch.charCodeAt() == 32 && !done) {
            done = true;
            clan_name = nobr[i].innerText.trim()
            parent.clan_name = clan_name;
        }
    }
    var street = {
        "Древних": "0",
        "Драконов": "1",
        "Кланов": "2",
        "Победителей": "3",
        "Героев": "4",
        "Магов": "5",
        "Наемников": "6",
        "Лавочников": "7",
        "Лесная": "8",
        "Тихая": "9"
    }
    var home = 0;
    var reg_home = /Улица\s([А-Яа-я]{5,11})\,\s(\d+)/;
    var reg_astr = /Астральный маг\s(\d)\sуровня/;
    var reg_ms = /Игрок владеет магией\s([А-Яа-я]{4,10})$/;
    var reg_imm = /Наложено заклинание \"Иммунитет к нападениям\"/
	var reg_imm_time = /((\d+)(ч))?\s?((\d+)(мин))?/
	var reg_d = /Смерти/
	var reg_o = /Порядка/
	var reg_l = /Жизни/
	var reg_c = /Хаоса/
	var xhl_d = new RegExp(reg_d,"g");
	var xhl_o = new RegExp(reg_o,"g");
	var xhl_l = new RegExp(reg_l,"g");
	var xhl_c = new RegExp(reg_c,"g");

    var bb = frames["pers_info"].document.getElementsByTagName('b')
    for (var i = 0; i < bb.length; i++) {
        var xhl = new RegExp(reg_home,"g");
        if (xhl.test(bb[i].innerText)) {
            rez = reg_home.exec(bb[i].innerText)
            //        console.log(rez[1]);
            //        console.log(rez[2])
            home = "".concat(street[rez[1]],((rez[2].length==1)?'0'+rez[2]:rez[2]));
//            console.log('street ' + street[rez[1]])
//            console.log('home ' + home)
            parent.HomeID = home;

        }
        var xhl = new RegExp(reg_astr,"g");
        if (xhl.test(bb[i].innerText)) {
            rez = reg_astr.exec(bb[i].innerText)
//            console.log('astral ' + rez[1]);
          	if (Number(rez[1])>3) {
              rez[1]=3
            }
            parent.astralN = rez[1];
        }
        var xhl = new RegExp(reg_ms,"g");
        if (xhl.test(bb[i].innerText)) {
	        if(bb[i].nextSibling.wholeText!==" (неактивна)"){
            	rez = reg_ms.exec(bb[i].innerText)
//            	console.log('ms ' + rez[1]);
            	parent.msType = rez[1];
        	}}
	    var xhl = new RegExp(reg_imm,"g");
	    if (xhl.test(bb[i].innerText)) {
        	rez = reg_imm_time.exec(bb[i+1].innerText)
            parent.immH = rez[2];
            parent.immM	= rez[5];
        	//console.log(rez);
    	}
   	    if (xhl_d.test(bb[i].innerText)) {
	        parent.sklon="d";
    	}
	    if (xhl_c.test(bb[i].innerText)) {
        	parent.sklon="c";
    	}
    	if (xhl_l.test(bb[i].innerText)) {
	        parent.sklon="l"
	    }
	    if (xhl_o.test(bb[i].innerText)) {
        	parent.sklon="o"
    	}
    }
//alert("получили данные на перса");
}
function parserating(clanName) {

    // получение массива
    var jQnw = frames["newrating"].window.jQuery
    var trs = jQnw("#left-content table table tbody tr")
    //console.log(clanName);
    for (var i = 4; i < trs.length; i++) {
        var raceclan = 1;
        //        console.log(i)
        if (trs[i].children[1] == undefined) {
//            newWin.close();
            break
        }
        if (trs[i].children[1].children[raceclan].tagName == "IMG") {
            var raceclan = 2;
        }
        var clname = trs[i].children[1].children[raceclan].innerText.trim()
        if (clname == clanName) {
            // получение ИД
            var clID = trs[i].children[1].children[raceclan].children[0].attributes["onclick"].value.split(",")[1].split(")")[0]
            //            console.log(clname + " " + clID);
            dbex(persID, undefined, undefined, undefined, 5, undefined, Number(clID))
            //            newWin.close();
            //console.log(clID)
            parent.clanID = clID;
/*var h = top.document.getElementsByTagName("head")[0];
var Script = top.document.createElement("script");
Script.text = "var clanID="+clID ;
Script.charset="utf-8";
Script.language = "JavaScript";
Script.type = "text/javascript";
h.append(Script);
*/
            parserating=clID;
            break;
        }
    }
}
AddIFrame("pers_info");
var a_iframe = document.getElementsByTagName("iframe")["pers_info"];
a_iframe.onload = function() {
    getPersInfo();
    document.getElementById("pers_info").remove()
}

frames["pers_info"].location = 'info.html?user=' + top.d_pers.d.id;
/***********************************/
AddIFrame("newrating");
var a_iframe = document.getElementsByTagName("iframe")["newrating"];
a_iframe.onload = function() {
    parserating(top.clan_name);
    console.log("clanID "+clanID);
    document.getElementById("newrating").remove()
}
frames["newrating"].location = 'newrating.shtml'
//var rootDoc = window.parent.window.parent.window.parent.document;
