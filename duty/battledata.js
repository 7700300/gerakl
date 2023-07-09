var mbClon = top.mbClon;
var mbHP = top.mbHP;

/***********************************************************/
if (top.persID == 202721325) { //Норд
    var abilityFireDust = 10165034;
    top.d_act.abilityFireDust = abilityFireDust;
    top.abilityFireDust = abilityFireDust;
    top.d_pers.abilityFireDust = abilityFireDust;

    var abilityPet = 1732691;
    top.d_act.abilityPet = abilityPet;
    top.abilityPet = abilityPet;
    top.d_pers.abilityPet = abilityPet;

    var abilityFastMove = 11960434;
    top.d_act.abilityFastMove = abilityFastMove;
    top.abilityFastMove = abilityFastMove;
    top.d_pers.abilityFastMove = abilityFastMove;


}
if (top.persID == 203628652) { // демон
    var abilityPet = 10798605;
    top.d_act.abilityPet = abilityPet;
    top.abilityPet = abilityPet;
    top.d_pers.abilityPet = abilityPet;

}
if (top.persID == 203792868) { // стрелла
    var abilityFireDust = 11975131;
    top.d_act.abilityFireDust = abilityFireDust;
    top.abilityFireDust = abilityFireDust;
    top.d_pers.abilityFireDust = abilityFireDust;

    var abilityPet = 11973985;
    top.d_act.abilityPet = abilityPet;
    top.abilityPet = abilityPet;
    top.d_pers.abilityPet = abilityPet;
}


if (top.persID == 201135707) { //Hetzer
    var abilityFireDust = 10880542;
    top.d_act.abilityFireDust = abilityFireDust;
    top.abilityFireDust = abilityFireDust;
    top.d_pers.abilityFireDust = abilityFireDust;

//Выкинуть_из_боя
	var abilityAbort = 11417264;
    top.d_act.abilityAbort = abilityAbort;
    top.abilityAbort = abilityAbort;
    top.d_pers.abilityAbort = abilityAbort;

//Убить_взглядом
    var abilityKill = 11460141;
    top.d_act.abilityKill = abilityKill;
    top.abilityKill = abilityKill;
    top.d_pers.abilityKill = abilityKill;


}


/************************************************************/

ab_fail_list = top.ab_fail_list;

function export_fail_list(nk, dmgn) {
    for (i in ab_fail_list) { // loop1
        if (ab_fail_list[i].nk == nk) {
            if (ab_fail_list[i].dmgn == 0 && dmgn == 0) return ab_fail_list[i].dmgn = dmgn;
            if (ab_fail_list[i].dmgn > 0 && dmgn > 0) return ab_fail_list[i].dmgn = dmgn;
        }
    } // end-loop1
    ab_fail_list[ab_fail_list.length] = {nk: nk, dmgn: dmgn};
}

function getPersMS(bid, persID) {
//        console.log('popali1')
    var a_iframe = document.getElementsByTagName("iframe")["pers_msinfo"];
    if (!a_iframe) AddIFrame("pers_msinfo");
    a_iframe = document.getElementsByTagName("iframe")["pers_msinfo"];
    a_iframe.onload = function () {
//        console.log('popali11')
        getPersMS2(bid, persID);
        document.getElementById("pers_msinfo").remove()
    }
    frames["pers_msinfo"].location = 'info.html?user=' + persID;
}

function getPersMS2(bid, persID) {
//    console.log('popali2')
    var reg_ms = /Игрок владеет магией\s([А-Яа-я]{4,10})$/;
    var msType;
    var bb = frames["pers_msinfo"].document.getElementsByTagName('b')
    for (var i = 0; i < bb.length; i++) {
        var xhl = new RegExp(reg_ms, "g");
        if (xhl.test(bb[i].innerText)) {
            if (bb[i].nextSibling.wholeText !== " (неактивна)") {
                rez = reg_ms.exec(bb[i].innerText)
                //          	console.log('ms ' + rez[1]);
                msType = rez[1];
            }
        }
    }
//    console.log('popali22')
    var ms = {
        "Огня": 1,
        "Воздуха": 2,
        "Земли": 3,
        "Воды": 4
    }
    if (msType) {
        data = ({
            'bid': bid,
            'persID': persID,
            'metod': 21,
            'comm': (msType) ? ms[msType] : -1
        });
        $.ajax({
            url: top.hostname + 'duty/dbrelay.php',
            type: 'POST',
            data: data,
            cache: false,
            success: function (msg) {//		alert('передали');
                parent.arrOrigPers[persID].ms = (msType) ? ms[msType] : -1
                console.log("передали мску" + msType + " (" + msg + ")");
            }
        });

    }
}

hostname_oil = 'brainoil.site';

function clean_war_arr() {
    var actIf = top.frames.d_act;
    var actIfDoc = top.frames.d_act.document;
    var actIfW = actIf.window;
    var senddata = {
        "metod": 13,
        "bid": actIfW.BID
    };
    //                console.log(senddata);
    var url = top.hostname + "duty/dbrelay.php";
    $.ajax({
        type: "POST",
        url: url,
        data: senddata,
        success: function (msg) {
//                console.log(msg);
            //            alert(msg);
            parent.arrOrigPers = JSON.parse(msg);
        }
    });
    var senddata = {
        "metod": 19,
        "bid": BID
    };
    //                console.log(senddata);
    var url = top.hostname + "duty/dbrelay.php";
    $.ajax({
        type: "POST",
        url: url,
        data: senddata,
        success: function (msg) {
//            	console.log("Получили клонов - " + msg)
            parent.arrClones = JSON.parse(msg);
        }
    });
}

function dbex_mark(bid, sd, persID, evt, wn) {
    //var isAdmin = confirm('Вы действительно желаете убрать эту магию?');
    //   if(isAdmin){
    var actIf = top.frames.d_act;
    var actIfW = actIf.window;
    /// массив для определения пути
    var paths = {
        'Создать клон': '1',
        'Магический панцирь': '1',
        'Заморозить противника': '1',
        'Магический удар': '1',
        'Создать препятствие': '1',
        'Противостояние': '1',
        'Проклясть противника': '1',
        'Разрушить препятствие': '2',
        'Сила духа': '2',
        'Напугать противника': '2',
        'Веерная защита': '2',
        'Вызвать помощника': '2',
        'Берсерк': '2',
        'Боевой клич': '2',
        'Разрушить препятствие дистанционно': '3',
        'Отпрыгнуть от противника': '3',
        'Меткий выстрел': '3',
        'Призвать слугу': '3',
        'Увернуться от удара': '3',
        'Точное попадание': '3'
    }

    ////////
    //if(actIfW.inArray==undefined){
    //actIfW.inArray = (arr, val) => arr.some(n => n instanceof Array ? inArray(n, val) : n === val);
    //}

    // 	if(!actIfW.inArray(parent.arrOrigPers,persID)&persID!=undefined)
    if ((!parent.arrOrigPers.hasOwnProperty(persID)) && persID && evt != 6 && evt != 5) {
        parent.arrOrigPers[persID] = {
            "sd": sd,
            "comment": '',
            "path": "",
            "abil": "",
            "osob": "",
            "ms": 0,
            "mstype": 0,
            "immBM": 0
        };

        data = ({
            'bid': bid,
            'persID': persID,
            'metod': 11,
            'sd': sd
        });
        $.ajax({
            url: top.hostname + 'duty/dbrelay.php',
            type: 'POST',
            data: data,
            cache: false,
            success: function (msg) {//		alert('передали');
                //			console.log(msg);
            }
        });
        if (parent.arrOrigPers[persID].ms == 0) getPersMS(bid, persID);
    }
    if (persID != undefined) {
        console.log("Передаем событие" + evt)//

        if (evt == 55) {  // испуган
            parent.arrOrigPers[persID].osob = 3;
            data = ({
                'bid': bid,
                'persID': persID,
                'metod': 15,
                'comm': 3
            });
            $.ajax({
                url: top.hostname + 'duty/dbrelay.php',
                type: 'POST',
                data: data,
                cache: false,
                success: function (msg) {//		alert('передали');
                    //			console.log(msg);
                }
            });
        }
        if ((evt == 10 || evt == 11) && sd < 2) {
            var comm = parent.arrOrigPers[persID].comment
            comm = wn + "\n" + comm
            parent.arrOrigPers[persID].comment = comm
            data = ({
                'bid': bid,
                'persID': persID,
                'metod': 12,
                'comm': comm
            });
            $.ajax({
                url: top.hostname + 'duty/dbrelay.php',
                type: 'POST',
                data: data,
                cache: false,
                success: function (msg) {
                    //		alert('передали');
                    //                   console.log(msg);
                }
            });

        }
        if ((evt == 10 || evt == 11) && sd == 2) {
            parent.arrOrigPers[persID].immBM = 1
            data = ({
                'bid': bid,
                'persID': persID,
                'metod': 18,
                'comm': 1
            });
            $.ajax({
                url: top.hostname + 'duty/dbrelay.php',
                type: 'POST',
                data: data,
                cache: false,
                success: function (msg) {
                    //		alert('передали');
                    //                   console.log(msg);
                }
            });

        }
        if (evt == 9) {
            //  		var path = parent.arrOrigPers[persID].path
            parent.arrOrigPers[persID].osob = null;
            var path = paths[wn];
            if (path) {
                if (parent.arrOrigPers[persID].path != path) {
                    parent.arrOrigPers[persID].path = path
                    data = ({
                        'bid': bid,
                        'persID': persID,
                        'metod': 14,
                        'comm': path
                    });
                    $.ajax({
                        url: top.hostname + 'duty/dbrelay.php',
                        type: 'POST',
                        data: data,
                        cache: false,
                        success: function (msg) {//		alert('передали');
                            //			console.log(msg);
                        }
                    });

                }
            }
            if (wn == 'Проклясть противника' || wn == 'Боевой клич') {
                if (parent.arrOrigPers[persID].osob != 1) {
                    parent.arrOrigPers[persID].osob = 1;
                    data = ({
                        'bid': bid,
                        'persID': persID,
                        'metod': 15,
                        'comm': 1
                    });
                    $.ajax({
                        url: top.hostname + 'duty/dbrelay.php',
                        type: 'POST',
                        data: data,
                        cache: false,
                        success: function (msg) {//		alert('передали');
                            //			console.log(msg);
                        }
                    });

                }
            } else if (wn == 'Магический панцирь' || wn == 'Веерная защита' || wn == 'Увернуться от удара') {
                if (parent.arrOrigPers[persID].osob != 2) {
                    parent.arrOrigPers[persID].osob = 2
                    data = ({
                        'bid': bid,
                        'persID': persID,
                        'metod': 15,
                        'comm': 2
                    });
                    $.ajax({
                        url: top.hostname + 'duty/dbrelay.php',
                        type: 'POST',
                        data: data,
                        cache: false,
                        success: function (msg) {//		alert('передали');
                            //			console.log(msg);
                        }
                    });

                }
            } else {
                data = ({
                    'bid': bid,
                    'persID': persID,
                    'metod': 15,
                    'comm': 0
                });
                $.ajax({
                    url: top.hostname + 'duty/dbrelay.php',
                    type: 'POST',
                    data: data,
                    cache: false,
                    success: function (msg) {//		alert('передали');
                        //			console.log(msg);
                    }
                });
            }


        }
        if (evt == 20) {
            if (sd > 1) {
                parent.arrClones[sd] = persID;
                data = ({
                    'bid': bid,
                    'persID': persID,
                    'metod': 17,
                    'comm': sd
                });
                $.ajax({
                    url: top.hostname + 'duty/dbrelay.php',
                    type: 'POST',
                    data: data,
                    cache: false,
                    success: function (msg) {
                        // 	console.log(msg)
                    }
                });
            }
        }//зарегистрировали содание клона evt==20
        if (evt == 6 || evt == 5) {// рассчитываем мску
            if (!parent.arrOrigPers.hasOwnProperty(persID)) {
                if (parent.arrClones.hasOwnProperty(persID)) {
                    persID = parent.arrClones[persID];
                }
            }
            //   	console.log(persID + ' | '+ sd);
            var pp = parent.arrOrigPers[persID];
            if (persID && pp) {// pp.mstype && pp.mstype==0){
                parent.arrOrigPers[persID].mstype = sd;
                data = ({
                    'bid': bid,
                    'persID': persID,
                    'metod': 20,
                    'comm': sd
                });
                $.ajax({
                    url: top.hostname + 'duty/dbrelay.php',
                    type: 'POST',
                    data: data,
                    cache: false,
                    success: function (msg) {
                    }
                });
            }
        }// evt==6
        if (!(evt == 6 || evt == 5)) {
            var x = UNBS[persID].x;
            var y = UNBS[persID].y;
            data = ({
                'bid': bid,
                'persID': persID,
                'metod': 22,
                'x': x,
                'y': y
            });
            $.ajax({
                url: top.hostname + 'duty/dbrelay.php',
                type: 'POST',
                data: data,
                cache: false,
                success: function (msg) {
                }
            });

        }
        if (evt == 52) { //||evt == 55) { // сошел с ума
            console.log("Передаем событие 52")//
            parent.arrOrigPers[persID].osob = 4;
            data = ({
                'bid': bid,
                'persID': persID,
                'metod': 15,
                'comm': 4
            });
            $.ajax({
                url: top.hostname + 'duty/dbrelay.php',
                type: 'POST',
                data: data,
                cache: false,
                success: function (msg) {//		alert('передали');
                    //			console.log(msg);
                }
            });
        }
        if (evt == 53) {  // взял в руки
            console.log("Передаем событие 53")//
            parent.arrOrigPers[persID].osob = 0;
            data = ({
                'bid': bid,
                'persID': persID,
                'metod': 15,
                'comm': 0
            });
            $.ajax({
                url: top.hostname + 'duty/dbrelay.php',
                type: 'POST',
                data: data,
                cache: false,
                success: function (msg) {//		alert('передали');
                    //			console.log(msg);
                }
            });
        }

        try {
            if (parent.arrOrigPers[persID].ms == 0) getPersMS(bid, persID);
        } catch (e) {
            console.log("потеряли перса( " + e + " * " + persID)
        }
    }
}

function MakeDead(unb, persID) {
    data = ({
        'bid': BID,
        'persID': persID,
        'metod': 24,
        'sd': 1
    });
    $.ajax({
        url: top.hostname + 'duty/dbrelay.php',
        type: 'POST',
        data: data,
        cache: false,
        success: function (msg) {
            //		alert('передали');
            //                   console.log(msg);
        }
    });
    var dead = {nk: unb.nk, lvl: unb.lvl, rc: unb.rc, sd: unb.sd};
    if (unb.clr) dead.clr = unb.clr;
    if (unb.own) dead.own = unb.own;
    return dead;
}

function myAddData(changes, skipupd) {
    // При наличии данных о бое во фрейме выполняет изменения по логу
    //переделанная под мои нужды функция
    var naprMap = {
        "1": "&uarr;",
        "2": "&nearr;",
        "3": "&rarr;",
        "4": "&searr;",
        "5": "&darr;",
        "6": "&swarr;",
        "7": "&larr;",
        "8": "&nwarr;"
    };
    var uniq_nmb;
    var pers;
    var battle_injected = 1;
    CurLog = '';
    uniq_nmb = BID + LCID;
    if (skipupd && ROFFSETS)
        uniq_nmb -= changes.length;
    for (var i in changes) {
        var row = changes[i];
        var dmgdsc = '';
        var dmgn = '';
        var rpl = '';
        var tbl = '';
        var neprobiv = '';
        var tm = row.tm;
        if (!ANIMATE && row.chng && ME) {
            var hl1 = HiLight(row.chng[0]);
            var hl2 = HiLight(row.chng[1]);
            if (hl2 > hl1)
                hl1 = hl2;
            if (hl1) {
                tm = '<font class="mytime' + hl1 + '">' + tm + '</font>';
            }
        }
        //		if (row.chng) console.log(row.act + ' ' + UserOut(row.chng[0]))
        switch (row.act) {
            // Собираем лог
            case 0:
                // Пустышка - зарезервирована
                break;
            case 1:
                // Переместился
                AddLogRecord(tm, UserOut(row.chng[0]) + ' ' + MoveOut[uniq_nmb % MoveOut.length]);
                break;
            case 2:
                // Снял вещь;
                pers = UNBS[row.chng[0].unb];
                (pers) ? dbex_mark(BID, pers.sd, row.chng[0].unb, row.act, '') : false;
                AddLogRecord(tm, UserOut(row.chng[0]) + ' разделся');
                break;
            case 3:
                // Одел вещь;
                pers = UNBS[row.chng[0].unb];
                (pers) ? dbex_mark(BID, pers.sd, row.chng[0].unb, row.act, '') : false;
                AddLogRecord(tm, UserOut(row.chng[0]) + ' оделся');
                break;
            case 4:
                // Увернулся;
                AddLogRecord(tm, Ast(row.chng[1].unb) + UserOut(row.chng[1]) + ' <font class="uvor">' + DodgeOut[uniq_nmb % DodgeOut.length] + '</font> от удара ' + UserOut(row.chng[0]) + ' ' + BodyParts[row.pt]);
                try {
                    if (hl1 == 1 || hl1 == 3) { // LOG-TEST1
                        document.getElementById("ad_test").innerHTML = UserOut(row.chng[1]);
                        var ad_test_user = document.getElementById("ad_test").getElementsByTagName("font")[0].innerHTML;
                        ad_test_user = ad_test_user.replace(/клон (\d+)/gi, "");
                        ad_test_user = ad_test_user.replace(/(\s)/gi, "");
                        if (ad_test_user != ME.nk) {
                            export_fail_list(ad_test_user, 0);
                            console.log('AD1', '=', ab_fail_list[ab_fail_list.length - 1].nk);
                        }
                    } // END-LOG-TEST1
                } catch (e) {
                    if (document.getElementById("logb") == null) {
                        console.log(e)
                    } else {
                        document.getElementById("logb").innerHTML = e;
                    }
                }
                break;
            case 5:
                // Заблокировал;
                if (row.crt)
                    dmgdsc = '<font class="krit">критический</font> ';
                if (row.rpl || row.rpl == 0)
                    rpl = ' и ответил <font class="otv">ударом</font> на ' + row.rpl;
                if (row.neprobiv)
                    neprobiv = ' (действие перка)';
                if ((row.rpl || row.rpl > 10) && parent.magdamage) {
                    /*	var kto1 = UNBS[row.chng[0].unb];
                        var kto2 = UNBS[row.chng[1].unb];
                        var mkto1 = UNBS[parent.magdamage[0]];
                        var mkto2 = UNBS[parent.magdamage[1]];*/

                    if (row.chng[1].unb == parent.magdamage[0] && row.chng[0].unb == parent.magdamage[1]) {
                        dbex_mark(BID, 1, row.chng[1].unb, row.act, '');
                    }
                    if (row.chng[1].unb == parent.magdamage[1] && row.chng[0].unb == parent.magdamage[0]) {
                        dbex_mark(BID, 3, row.chng[0].unb, row.act, '');
                    }

                }
                parent.magdamage = undefined;
//			AddLogRecord(tm,row.chng[0].unb +" | " +row.chng[1].unb +" | " + row.nmb + " | " +row.dmg + " | " + uniq_nmb);

                AddLogRecord(tm, Ast(row.chng[1].unb) + UserOut(row.chng[1]) + ' заблокировал ' + dmgdsc + 'удар ' + UserOut(row.chng[0]) + ' ' + BodyParts[row.pt] + rpl + neprobiv);
                try {
                    if (hl1 == 1 || hl1 == 3) { // LOG-TEST2
                        document.getElementById("ad_test").innerHTML = UserOut(row.chng[1]);
                        var ad_test_user = document.getElementById("ad_test").getElementsByTagName("font")[0].innerHTML;
                        ad_test_user = ad_test_user.replace(/клон (\d+)/gi, "");
                        ad_test_user = ad_test_user.replace(/(\s)/gi, "");
                        if (ad_test_user != ME.nk) {
                            export_fail_list(ad_test_user, 1);
                            console.log('AD2', '=', ab_fail_list[ab_fail_list.length - 1].nk);
                        }
                    } // END-LOG-TEST2
                } catch (e) {
                    if (document.getElementById("logb") == null) {
                        console.log(e)
                    } else {
                        document.getElementById("logb").innerHTML = e;
                    }
                }
                break;
            case 6:
                // Удар прошел
                if (row.lck)
                    dmgdsc = '<font class="luck">' + LuckOut[uniq_nmb % LuckOut.length] + '</font> ';
                if (row.crt) {
                    dmgdsc = dmgdsc + '<font class="krit">' + KritOut[uniq_nmb % KritOut.length] + '</font> ';
                    dmgn = '<b class="krit">' + row.dmg + '</b>';
                } else {
                    dmgn = '<b>' + row.dmg + '</b>';
                }
                if (row.tbl)
                    tbl = ' пробив блок';
                if (row.neuderzh)
                    tbl += ' (действие перка)';
                if (row.rpl || row.rpl == 0)
                    rpl = ' но получил в <font class="otv">ответ</font> на ' + Rnd4Out[uniq_nmb % Rnd4Out.length] + ' удар на <b>' + row.rpl + '</b>';
                if (row.rpl || row.rpl > 0) {
                    try {
                        var kef = row.dmg / row.rpl;
                        var kto1 = UNBS[row.chng[0].unb];
                        var kto2 = UNBS[row.chng[1].unb];
                        if (kto1 && kto2 && kto1.astral_level == kto2.astral_level && kef < 1.5) {
                            (kto2) ? dbex_mark(BID, 2, row.chng[1].unb, row.act, '') : false;
                        }
                        if (kto1.astral_level == kto2.astral_level && kef > 3) {
                            (kto1) ? dbex_mark(BID, 2, row.chng[0].unb, row.act, '') : false;
                        }

                    } catch (e) {
                        console.log("Что то пошло не так - " + e)
                    }
                }
                //parent.magdamag = [row.chng[0].unb, row.chng[1].unb,row.nmb,row.dmg,uniq_nmb]; // кто, кому, чем и на сколько
                if (!row.rpl && row.dmg > 10 && parent.magdamage) {
                    /*	var kto1 = UNBS[row.chng[0].unb];
                        var kto2 = UNBS[row.chng[1].unb];
                        var mkto1 = UNBS[parent.magdamage[0]];
                        var mkto2 = UNBS[parent.magdamage[1]];*/

                    if (row.chng[0].unb == parent.magdamage[0] && row.chng[1].unb == parent.magdamage[1]) {
                        dbex_mark(BID, 1, row.chng[0].unb, row.act, '');
                    }
                    if (row.chng[0].unb == parent.magdamage[1] && row.chng[1].unb == parent.magdamage[0]) {
                        dbex_mark(BID, 3, row.chng[1].unb, row.act, '');
                    }

                }
                parent.magdamage = undefined;
// 			AddLogRecord(tm,row.chng[0].unb +" | " +row.chng[1].unb +" | " + row.nmb + " | " +row.dmg + " | " + uniq_nmb);
                AddLogRecord(tm, Ast(row.chng[1].unb) + Rnd1Out[uniq_nmb % Rnd1Out.length] + ' ' + UserOut(row.chng[0]) + ' ' + Rnd2Out[uniq_nmb % Rnd2Out.length] + ' ' + Rnd3Out[uniq_nmb % Rnd3Out.length] + ' ' + UserOut(row.chng[1]) + ' ' + dmgdsc + HitOut[uniq_nmb % HitOut.length] + ' ' + BodyParts[row.pt] + ' на ' + dmgn + tbl + rpl);
                try {
                    if (hl1 == 1 || hl1 == 3) { // LOG-TEST3
                        document.getElementById("ad_test").innerHTML = UserOut(row.chng[1]) + dmgn;
                        var ad_test_user = document.getElementById("ad_test").getElementsByTagName("font")[0].innerHTML;
                        var ad_test_dmgn = parseInt(document.getElementById("ad_test").getElementsByTagName("b")[0].innerHTML, 10);
                        var ad_test_reg1 = /(.+) \((-\d+|\d+)\) <img/;
                        var ad_test_arr1 = ad_test_reg1.exec(ad_test_user);
                        ad_test_arr1[1] = ad_test_arr1[1].replace(/клон (\d+)/gi, "");
                        ad_test_arr1[1] = ad_test_arr1[1].replace(/(\s)/gi, "");
                        if (ad_test_arr1[1] != ME.nk) {
                            export_fail_list(ad_test_arr1[1], ad_test_dmgn);
                            console.log('AD3', '=', ab_fail_list[ab_fail_list.length - 1].nk, ad_test_dmgn);
                        }
                    } // END-LOG-TEST3
                } catch (e) {
                    if (document.getElementById("logb") == null) {
                        console.log(e)
                    } else {
                        document.getElementById("logb").innerHTML = e;
                    }
                }
                break;
            case 7:
                // Удар в спину
                parent.magdamage = undefined
                AddLogRecord(tm, Ast(row.chng[1].unb) + UserOut(row.chng[1]) + ' получил <font class="back">удар в спину</font> от ' + UserOut(row.chng[0]) + ' на <b>' + row.dmg + '</b>');
                break;
            case 8:
                // Пропускает ход
                AddLogRecord(tm, UserOut(row.chng[0]) + ' ' + SkipOut[uniq_nmb % MoveOut.length]);
                break;
            case 9:
                // Использование заклинания
                //		console.log(row.act + ' ' + UserOut(row.chng[0]) + ' ' + row.wn)
                pers = UNBS[row.chng[0].unb];
                //	parent.markering(row.chng[0].unb);
                if (row.wn == 'Создать клон' || row.wn == 'Вызвать помощника' || row.wn == 'Призвать слугу') {
//            (parent.createClon) ?	parent.createClon = [row.chng[0].unb,uniq_nmb]: false;
                    parent.createClon = [row.chng[0].unb, uniq_nmb];
                    // определяем кто кинул клона
                    //               (pers) ? dbex_mark(BID, changes[uniq_nmb + 1].uid, row.chng[0].unb, row.act, row.wn) : false;
                }
                //           } else {
                (pers) ? dbex_mark(BID, pers.sd, row.chng[0].unb, row.act, row.wn) : false;
                //           }
                //console.log(pers.nk + ' x=' + pers.x + ' y=' + pers.y)
                AddLogRecord(tm, UserOut(row.chng[0]) + ' прочитал заклинание <font class="uvor">' + row.wn + '</font>');
                break;
            case 10:
                // Использование абилки
                AddLogRecord(tm, UserOut(row.chng[0]) + ' использовал абилку <font class="uvor">' + row.wn + '</font>');
                pers = UNBS[row.chng[0].unb];
                (pers) ? dbex_mark(BID, pers.sd, row.chng[0].unb, row.act, row.tm + ' ' + row.wn) : false;
                break;
            case 11:
                // Использование свитка
                AddLogRecord(tm, UserOut(row.chng[0]) + ' использовал свиток <font class="uvor">' + row.wn + '</font>');
                pers = UNBS[row.chng[0].unb];
                (pers) ? dbex_mark(BID, pers.sd, row.chng[0].unb, row.act, row.tm + ' ' + row.wn) : false;
                if (row.wn == 'Иммунитет к боевой магии') {
                    (pers) ? dbex_mark(BID, 2, row.chng[0].unb, row.act, '') : false;
                }
                break;
            case 12:
                // Урон от яда
                AddLogRecord(tm, UserOut(row.chng[0]) + ' ощутил <font class="uvor">действие яда</font> на ' + row.dmg);
                break;
            case 13:
                // Изменение здоровья
                AddLogRecord(tm, UserOut(row.chng[0]) + ' получил ' + row.dmg + ((row.dmg > 0) ? ' <font class="luck">здоровья</font>' : ' повреждений'));
                break;
            case 14:
                // Начало раунда
                top.activity(top.persID, 3, top.getLoc, 0, "Бой еще идет. Раунд - " + row.nmb)
                if (row.nmb == 1) {
                    AddLogRecord(tm, "<b>Бой начался</b>");
                } else {
                    SwitchRound(skipupd, row.nmb);
                }
                //				console.log("<b>Раунд № "+row.nmb+"</b>")
                parent.startClone = 1
                clean_war_arr();
                for (var key in parent.arrOrigPers) {
//	console.log(key);
                    var item = parent.arrOrigPers[key];
                    if (parent.arrOrigPers[key].osob == 2) {
                        parent.arrOrigPers[key].osob = 0
                    }
                }
                AddLogRecord(tm, "<b>Раунд № " + row.nmb + "</b>");
                break;
            case 15:
                // Перелом
                AddLogRecord(tm, UserOut(row.chng[0]) + ' ' + PInjOut[row.pt] + ' и получил ' + row.dmg + ' повреждений');
                break;
            case 16:
                // Удар по площади
                if (row.wn)
                    dmgdsc = ' из ' + row.wn;
                AddLogRecord(tm, UserOut(row.chng[0]) + ' стреляет' + dmgdsc);
                break;
            case 17:
                // Заморозка
                AddLogRecord(tm, UserOut(row.chng[0]) + ' заморожен' + (row.nmb == 0 ? ' до конца боя' : ''));
                break;
            case 18:
                // Завершение боя
                AddLogRecord('', "<b>Бой завершен</b>");
                break;
            case 19:
                // Получение опыта
                if (row.chng[0] == top.persID) {
                    top.activity(top.persID, 4, top.getLoc, 0, row.nmb)
                }
                AddLogRecord('', UserOut(row.chng[0]) + ' получил ' + row.nmb + ' опыта');
                break;
            case 20:
                // Вмешательство или воскрешение
                if (skipupd != 1) {
                    var uid = row.uid;
                    var aunb = row.unb[row.uid];
                    if (REMAP[uid]) {
                        var nunb = REMAP[uid].unb;
                        nunb.x = aunb.x;
                        nunb.y = aunb.y;
                        nunb.sd = aunb.sd;
                        aunb = nunb;
                        uid = REMAP[uid].id;
                    }
                    if (DEAD[uid]) {
                        data = ({
                            'bid': BID,
                            'persID': uid,
                            'metod': 24,
                            'sd': 0
                        });
                        $.ajax({
                            url: top.hostname + 'duty/dbrelay.php',
                            type: 'POST',
                            data: data,
                            cache: false,
                            success: function (msg) {
                                //		alert('передали');
                                //                   console.log(msg);
                            }
                        });
                        delete DEAD[uid];
                    }
                    UNBS[uid] = aunb;
                }
                pers = UNBS[row.uid];
//            var reg = /(.+)\sклон\s\d+/;
//            var my_bot = reg.exec(pers.nk);

                //			if (!my_bot) console.log(row.act + ' ' + UserOut({unb:row.uid}))
                if (parent.createClon && parent.createClon[1] == uniq_nmb - 1) {
                    (pers) ? dbex_mark(BID, row.uid, parent.createClon[0], row.act, '') : false;
                    parent.createClon = undefined;
                }
                AddLogRecord(tm, UserOut({
                    unb: row.uid
                }) + ' вмешался в бой');
                break;
            case 21:
                // Получение травм
                AddLogRecord('', UserOut(row.chng[0]) + ' получил ' + InjNames[row.nmb] + ' травму');
                break;
            case 22:
                // Использование предмета
                AddLogRecord(tm, Ast(row.chng[0].unb) + 'Предмет <font class="dodge">' + row.wn + '</font> ' + UserOut(row.chng[0]) + ' вспыхнул волшебным светом');
                break;
            case 23:
                // Установка препятствия
                if (skipupd == 0)
                    OBSTACLES[row.ap] = row.obst;
                break;
            case 24:
                // Удаление препятствия
                if (skipupd == 0)
                    delete OBSTACLES[row.ap];
                break;
            case 25:
                // Удар магией
                AddLogRecord(tm, Ast(row.chng[0].unb) + UserOut(row.chng[0]) + ' ' + MagHitOut[uniq_nmb % MagHitOut.length] + ' ' + UserOut(row.chng[1]) + ' на ' + row.dmg);
                break;
            case 26:
                // Переман
                AddLogRecord(tm, Ast(row.chng[0].unb) + UserOut(row.chng[0]) + ' ' + Ent1Out[uniq_nmb % Ent1Out.length] + ' ' + UserOut(row.chng[1]) + ' ' + Ent2Out[uniq_nmb % Ent2Out.length]);
                break;
            case 27:
                // Антимагия
                dmgdsc = 'Предмет <font class="dodge">' + row.wn + '</font> защитил ' + UserOut(row.chng[0]);
                if (row.chng[1]) {
                    dmgdsc = Ast(row.chng[1].unb) + dmgdsc + ' от магии ' + UserOut(row.chng[1]);
                }
                AddLogRecord(tm, dmgdsc);
                break;
            case 29:
                AddLogRecord(tm, Ast(row.chng[0].unb) + UserOut(row.chng[0]) + ' нанес ' + UserOut(row.chng[1]) + ' повреждение на <b>' + row.dmg + '</b>');
                break;
            case 30:
                // Тихо помер
                if (skipupd != 1) {
                    var duid = row.chng[0].unb;
                    if (REMAP[duid]) {
                        duid = REMAP[duid].id;
                    }
                    var dunb = UNBS[duid];
                    if (dunb) {
                        DEAD[duid] = MakeDead(dunb, duid);
                        delete UNBS[duid];
                    }
                }
                break;
            case 31:
                // Исчезновение невидимки
                if (skipupd != 1) {
                    var duid = row.chng[0].unb;
                    if (REMAP[duid]) {
                        duid = REMAP[duid].id;
                    }
                    var dunb = UNBS[duid];
                    if (dunb) {
                        DEAD[duid] = MakeDead(dunb, duid);
                        DEAD[duid].drm = 1;
                        delete UNBS[duid];
                    }
                }
                break;
            case 32:
                // Исчезновение невидимки
                if (skipupd != 1) {
                    var duid = row.chng[0].unb;
                    if (REMAP[duid]) {
                        duid = REMAP[duid].id;
                    }
                    var dunb = DEAD[duid];
                    if (dunb) {
                        DEAD[duid].drm = 1;
                    }
                    var nd = {
                        nk: row.nk,
                        lvl: row.lvl,
                        rc: row.rc,
                        sd: row.sd
                    };
                    DEAD[row.uid] = nd;
                }
                break;
            case 33:
                // Подбор предмета
                if (skipupd == 0)
                    delete ITEMS[row.ap];
                break;
            case 34:
                // Урон магией стихий
                parent.magdamage = [row.chng[0].unb, row.chng[1].unb, row.nmb, row.dmg, uniq_nmb]; // кто, кому, чем и на сколько
//			AddLogRecord(tm,row.chng[0].unb +" | " +row.chng[1].unb +" | " + row.nmb + " | " +row.dmg + " | " + uniq_nmb);
                AddLogRecord(tm, Ast(row.chng[0].unb) + UserOut(row.chng[0]) + ' нанес ' + UserOut(row.chng[1]) + ' урон магией ' + SMagicSchools[row.nmb] + ' на <b>' + row.dmg + '</b>');
                break;
            case 35:
                // Переместился/вышел из астрала
                if (row.chng[0].astral_level > 0) {
                    AddLogRecord(tm, UserOut(row.chng[0], 1) + ' перешел на ' + row.chng[0].astral_level + ' уровень астрала');
                } else {
                    AddLogRecord(tm, UserOut(row.chng[0], 1) + ' вышел из астрала');
                }
                if (UNBS[row.chng[0].unb]) {
                    UNBS[row.chng[0].unb].astral_level = row.chng[0].astral_level;
                    UNBS[row.chng[0].unb].last_calc_astr = row.chng[0].last_calc_astr;
                    UNBS[row.chng[0].unb].astral = row.chng[0].astral;
                }
                break;
            case 61:
                // Отразил магию
                AddLogRecord(tm, Ast(row.chng[1].unb) + UserOut(row.chng[1]) + ' отразил магию ' + UserOut(row.chng[0]) + ' (действие перка)');
                break;
            case 62:
                // Отразил магию Стихий
                AddLogRecord(tm, Ast(row.chng[1].unb) + UserOut(row.chng[1]) + ' отразил магию стихий ' + UserOut(row.chng[0]) + ' (действие перка)');
                break;
            case 63:
                //Смертельно опасный
                AddLogRecord(tm, Ast(row.chng[0].unb) + UserOut(row.chng[0]) + ' нанес смертельно опасный удар ' + UserOut(row.chng[1]) + ' на ' + row.dmg + ' (действие перка)');
                break;
            default:
                // Действия без параметров
                AddLogRecord(tm, UserOut(row.chng[0]) + ' ' + SimpleOut[row.act]);
                //сошел с ума, взял в руки, напуган
                console.log("перед попаданием в сводилку");
                if (row.act == 52 || row.act == 53) {
                    console.log("попали в сводилку");
                    dbex_mark(BID, 0, row.chng[0].unb, row.act, 0);
                }
                if (row.act == 55 && UNBS[row.chng[0].unb].tn == 1) {
                    (pers) ? dbex_mark(BID, pers.sd, row.chng[0].unb, row.act, 0) : false;
                }

                if ((row.act == 50 || row.act == 51 || row.act == 58 || row.act == 60) && skipupd != 1) {
                    // Помер
                    var duid = row.chng[0].unb;
                    if (REMAP[duid]) {
                        duid = REMAP[duid].id;
                    }
                    var dunb = UNBS[duid];
                    if (dunb) {
                        if (skipupd == 0) {
                            if (!ANIMATE && row.act == 58 && ME && ME.id == duid) {
                                ME = undefined;
                                FullReload();
                            }
                        }
                        DEAD[duid] = MakeDead(dunb, duid);
                        delete UNBS[duid];
                    }
                }
                break;
        }
        if (skipupd == 0) {
            for (var j in row.chng) {
                // Регистрируем изменения
                var vals = row.chng[j];
                if (vals.unb) {
                    var duid = vals.unb;
                    if (REMAP[duid]) {
                        duid = REMAP[duid].id;
                    }
                    if (UNBS[duid]) {
                        for (var k in uparams) {
                            if (vals[uparams[k]] || vals[uparams[k]] == 0)
                                UNBS[duid][uparams[k]] = vals[uparams[k]];
                        }
                    }
                }
            }
            LCID++;
        }
        uniq_nmb++;
    }
    ApplyLogChanges();
}

AddData = myAddData;

function showerror(e) {
    console.log(e)
};
//function (msg, url, lineNo, columnNo, error) {
//    sendError (msg + ' ' + (lineNo || 0) + ' ' + url + ' ' + navigator.userAgent);
//                            
//    if (error !== undefined && error.stack !== undefined) {
//        sendError (error.stack);
//    }
//    return false;
//}
top.d_act.onerror = showerror;

/// управление полетами
function ChangeAstralLevel(a) {
    // ASTRAL
    if (location.host != "newforest.apeha.ru") {
        if (astral_id == 0 && a == 0) {
            // loading
            byid("astral1").style.visibility = "hidden";
            if (ready_mb == 1)
                return setTimeout("ChangeAstralLevel(0)", 500);
            try {
                var script = frames['channel_2'].document.createElement('script');
                script.type = 'text/javascript';
                script.text = 'function getAstralLevel() {' + 'if(document.forms.length!=0) {' + 'for(var i= 0; i< document.forms.length; i++) {' + 'if(document.forms[i].elements[0].name=="actBattle-ChangeAstralLevel") {' + 'parent.astral_id=document.forms[i].elements[0].value;' + 'parent.ChangeAstralLevel(0);' + '}' + '}' + '} else {' + 'parent.setTimeout("ChangeAstralLevel(0)",1500);' + 'document.location="ability.chtml";' + '}' + '}' + 'getAstralLevel();';
                frames["channel_2"].document.getElementsByTagName("head")[0].appendChild(script);
            } catch (e) {
                ready_mb = 1;
                byid("status").innerHTML = "OpenAstral";
                frames["channel_2"].location = "ability.chtml";
                return setTimeout("ChangeAstralLevel(0)", 500);
            }
        }
        // end-loading
        if (astral_id != 0 && a == 0) {
            // start
            if (UNBS[ME.id]) {
                if (ME.astral_level < top.astralN && ME.astral > 5 && UNBS[ME.id].flg != 8 && byid("buttons").style.visibility != "hidden") {
                    clearTimeout(astral_tm);
                    byid("astral1").style.visibility = "hidden";
                    frames["channel_4"].location = "ability.chtml?actBattle-ChangeAstralLevel=" + astral_id + "&level=" + (ME.astral_level + 1);
                    setTimeout("" + "byid('astral1').style.visibility='visible';" + "byid('astral1').innerHTML='Астрал_'+(ME.astral_level+1);", 188000);
                    astral_tm = setTimeout("ChangeAstralLevel(0)", 188000);
                }
            } else {
                ChangeAstralLevel(1)
            }
            if (top.OnOffguard == 0)
                setTimeout("actReload()", 1500);
        }
        if (a == 1) {
            // a-stop
            if (ME.astral_level != 0 && DEAD[ME.id] && FLDX + FLDY < 26) {
                frames["channel_4"].location.href = "" + "ability_type_common.chtml?actBattle-ChangeAstralLevel=" + astral_id + "&level=" + (ME.astral_level - 1);
//            byid("status").style.backgroundColor = "lime";
//            byid("status").innerHTML = "Astral:" + (ME.astral_level - 1);
                byid("astral1").style.visibility = "hidden";
                return astral_tm = setTimeout("ChangeAstralLevel(1)", 188000);
            }
            astral_tm = setTimeout("ChangeAstralLevel(1)", 60000);
        }
        // end-a-stop
        if (a == 2) {
            // hover
            if (byid("astral1").style.borderStyle == "dashed") {
                byid("astral1").style.borderStyle = "solid";
            } else {
                byid("astral1").style.borderStyle = "dashed";
            }
            setTimeout("ChangeAstralLevel(2)", 777);
        }
        // end-hover
    }
}

function NewButton(a, width, color, brColor, bgColor, hovColor, txt, click, title, id) {
    if (a == 0) {
        return "<a href=javascript:void(0); onclick=\"" + click + "\" title=\"" + title + "\">" + "<div onmouseover=\"info(1,this,'" + hovColor + "');\" onmouseout=\"endi(this,'" + bgColor + "');\" " + "style=\"margin-right:4px;width:" + width + ";" + "border:1px solid " + brColor + ";background-color:" + bgColor + ";color:" + color + ";" + "font-size:12px;font-family:Arial;text-align:center;" + "float:left;cursor:hand;\" " + "id=" + id + ">" + txt + "</div></a>";
    }
}

function info(i, obj, col) {
    sublink = getArray(i);
    infobar = document.getElementById("infob");
    infobar.innerHTML = "&#182; " + sublink[2];
    obj.style.backgroundColor = col;
}

function endi(obj, col) {
    obj.style.backgroundColor = col;
    infobar = document.getElementById("infob");
    infobar.innerHTML = "&#182; &nbsp;";
}

function getArray(id) {
    var splitarray = link[id].split("|");
    return splitarray;
}

function AddIFrame(name) {
    var ifchannel = document.createElement("iframe");
    ifchannel.name = name;
    ifchannel.id = name;
    ifchannel.style.visibility = "hidden";
    ifchannel.style.width = "1px";
    ifchannel.style.height = "1px";
    document.head.appendChild(ifchannel);
}

function save_battle() {
    data = ({
        'metod': 0,
        'bid': BID,
        'x': FLDX,
        'y': FLDY
    });
    $.ajax({
        url: top.hostname + 'duty/dbrelay.php',
        type: 'POST',
        data: data,
        cache: false,
        success: function (msg) {//		alert('передали');
            console.log(msg);
        }
    });
}

var link = new Array();
var astral_tm;
var astral_id = 0;
AddIFrame("channel_2");
var cast_load_count = 0;
var ready_mb = 0;
var f5_mbCast = 0;
var yes_mbCast = 1;
var move_round = 0;
var MyX = 0;
var MyY = 0;
// READYMB
var a_iframe = document.getElementsByTagName("iframe")["channel_2"];
a_iframe.onload = function () {
    top.frames["d_act"].ready_mb = 0;
    top.frames["d_act"].cast_load_count++;
}
;
// END-READYMB
//<!-----------------------------------------------------
//<!-------            AUTOBATTLEFIELD           --------
//<!-----------------------------------------------------
var cn0 = 0;
var cn1 = 0;
var tl_min = 0;
var tl_sec = 0;
var amountfriend = 0;
var amountenemy = 0;
var amountFriendClon = 0;
var amountEnemyClon = 0;
var amountFriendTN = 0;
var amountEnemyTN = 0;
var amountFaceToFace = 0;
var amountAll = 0;
var startAmountFriend = 0;
var startAmountEnemy = 0;
var saf_ready = 0;
var sae_ready = 0;
var ab_hide = 0;
var ab_move = 0;
var at_stock = 0;
var begin_round = 1;
var list_white_count = 0;
var list_black_count = 0;
var tmID = Array();
ddx = new Array();
ddy = new Array();
ab_fail_list = new Array();
ab_fail_list[0] = {
    nk: "NaN",
    dmgn: 0
};
EFOBJ = {
    0: {
        x: 0,
        y: 0,
        id: 0,
        clr: 0,
        nxy: -1,
        rnd: -1
    },
    1: {
        x: 0,
        y: 0
    }
};
AddIFrame("channel_4");
link[0] = "Test|javascript:void(0);|to Click";
link[1] = "Test|javascript:void(0);|&nbsp;";
link[2] = "Test|javascript:void(0);|" + top.clan_name;
document.getElementById("buttons").innerHTML = ""
    + "<br/><table border=0 cellspacing=0 cellpadding=1>"
    + "<tr>"
    + "<td colspan=3>"
    + NewButton(0, "65px", "black", "black", "#FFEEC0", "gold", "Рюкзак", "if(!window.refreshed){open('/bag.html?xdac='+Math.random(),'BAG','width=850,height=650,scrollbars=1,resizable=1')};move_round=0;yes_mbCast=1;", "", "")
    + NewButton(0, "65px", "black", "black", "#FFEEC0", "gold", "Удар/Блок", "move_round=0;yes_mbCast=1;SwitchAttack(1);", "", "")
    + NewButton(0, "65px", "black", "black", "#FFEEC0", "gold", "Магия", "if(!window.refreshed){open('/mbag.html?xdac='+Math.random(),'MAGIC','width=850,height=650,scrollbars=1,resizable=1')};move_round=0;yes_mbCast=1;", "", "")
    + NewButton(0, "65px", "black", "black", "#FFEEC0", "gold", "Ходить", "move_round=0;yes_mbCast=1;MakeMove();", "", "")
    + NewButton(0, "65px", "mediumpurple", "mediumpurple", "#FFEEC0", "gold", "Астрал_1", "ChangeAstralLevel(0);", "1-2-3", "astral1")
    + "<input type=button value=\"F5.Clon\" onclick=\"if(yes_mbCast!=0){f5_mbCast=1;move_round=0;yes_mbCast=1;UseMagCast(1,0," + mbClon + ",MyX,MyY);this.value='F5.Clon';}\" oncontextmenu=\"if(yes_mbCast!=0){f5_mbCast=1;move_round=0;yes_mbCast=1;UseMagCast(1,0,mbStone,MyX,MyY);this.value='F5.Stone';}return false;\" onmouseover=info(1,this,'gold'); onmouseout=endi(this,'#FFEEC0'); style=\"visibility:visible;width:65px;border:1px solid black;border-style:dashed;cursor:pointer;\" title=\"Left/Right Click\n Clone/Stone\" id=MyClon>"
    + "</td>" + "</tr>" + "<tr>"
    + "<td valign=top style=\"width: 85px;\">"
    + "<input type=button value=\"Голова\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubkick(0,0);ubblock(1,2);ubblock(1,3);MakeTurn();\" oncontextmenu=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,4);ubblock(0,2);ubblock(1,3);ubblock(1,1);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=width:83px;color:black;background-color:khaki;  title=\"Левый клик мышкой - удар\nПравый клик мышкой - блок\n В указаную часть тела/ кроме указанной части тела\">"
    + "<br>"
    + "<input type=button value=\"L\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubkick(0,2);ubkick(1,2);MakeTurn();\" oncontextmenu=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,4);ubblock(1,3);ubblock(0,1);ubblock(1,0);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=width:28px;color:black;background-color:khaki;\" title=\"Левый клик мышкой - удар\nПравый клик мышкой - блок\n В указаную часть тела\">"
    + "<input type=button value=\"B\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubkick(0,1);ubkick(1,1);MakeTurn();\" oncontextmenu=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,4);ubblock(1,3);ubblock(0,2);ubblock(1,0);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=\"width:27px;color:black;background-color:khaki;\"title=\"Левый клик мышкой - удар\nПравый клик мышкой - блок\n В указаную часть тела\">"
    + "<input type=button value=\"R\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubkick(0,3);ubkick(1,3);MakeTurn();\" oncontextmenu=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,4);ubblock(1,2);ubblock(0,1);ubblock(1,0);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=width:28px;color:black;background-color:khaki;\"title=\"Левый клик мышкой - удар\nПравый клик мышкой - блок\n В указаную часть тела\">"
    + "<br>"
    + "<input type=button value=\"Ноги\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubkick(0,4);ubkick(1,4);MakeTurn();\" oncontextmenu=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,0);ubblock(1,1);ubblock(0,2);ubblock(1,3);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=width:83px;color:black;background-color:khaki;\"title=\"Левый клик мышкой - удар\nПравый клик мышкой - блок\n В указаную часть тела\">"
    + "</td>"
    + "<td valign=top style=\"width: 55px;\">"
    + "<input type=button value=\"ПодКлич\" onclick=\"SwitchAttack(1);ubkick(0,0);ubkick(1,4);ubblock(0,4);ubblock(1,2);ubblock(0,1);ubblock(1,0);MakeTurn();\" title=\"Удар(x2),Блок(x4)\" style=\"height: 57px;\">"
    + "</td>"
    + "<td valign=top style=\"width: 55px;\">"
    + "<input type=button value=\"Пепел\" onclick=\"if(abilityFireDust!=0){UseMagCast(2,0,abilityFireDust);}\" oncontextmenu=\"return false;\" style=background-color:sandybrown;color:black;>"
    + "</td>"
    + "<td valign=top style=\"width: 55px;\">"
    + "<input type=button value=\"Выкинуть\" onclick=\"if(abilityAbort!=0){UseMagCast(2,0,abilityAbort);}\" title=\"Выкинуть_из_боя\" style=\"border:1px solid black;background-color:white;color:black;\">"
    + "</td>"
    + "<td valign=top style=\"width: 55px;\">"
    + "<input type=button value=\"Убить\" onclick=\"if(abilityKill!=0){UseMagCast(2,0,abilityKill);}\" title=\"Убить_взглядом\" style=\"border:1px dashed white;background-color:black;color:white;\">"
    + "<td valign=top style=\"width: 55px;\">"
    + "<input type=button value=\"Метнуться кабанчиком\" onclick=\"if(abilityFastMove!=0){UseMagCast(2,2,abilityFastMove,MyX,MyY);}\" title=\"Быстрое перемещение\" style=\"border:1px solid black;background-color:white;color:black;\">"
    + "</td>"
    /*+ "<td valign=top style=\"width: 85px;\"> Для мака только блоки"
    + "<input type=button value=\"Голова\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,4);ubblock(0,2);ubblock(1,3);ubblock(1,1);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=width:83px;color:black;background-color:khaki;  title=\"Левый клик мышкой - блок\n В указаную часть тела/ кроме указанной части тела\">"
    + "<br>"
    + "<input type=button value=\"L\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,4);ubblock(1,3);ubblock(0,1);ubblock(1,0);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=width:28px;color:black;background-color:khaki;\" title=\"Левый клик мышкой - блок\n В указаную часть тела\">"
    + "<input type=button value=\"B\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,4);ubblock(1,3);ubblock(0,2);ubblock(1,0);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=\"width:27px;color:black;background-color:khaki;\"title=\"Левый клик мышкой - блок\n В указаную часть тела\">"
    + "<input type=button value=\"R\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,4);ubblock(1,2);ubblock(0,1);ubblock(1,0);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=width:28px;color:black;background-color:khaki;\"title=\"Левый клик мышкой - блок\n В указаную часть тела\">"
    + "<br>"
    + "<input type=button value=\"Ноги\" onclick=\"move_round=0;yes_mbCast=1;SwitchAttack(1);ubblock(0,0);ubblock(1,1);ubblock(0,2);ubblock(1,3);MakeTurn();return false;\" onmouseover=info(1,this,'tomato'); onmouseout=endi(this,'khaki'); style=width:83px;color:black;background-color:khaki;\"title=\"Левый клик мышкой - блок\n В указаную часть тела\">"
    + "</td>"
    */
    + "<td valign=top style=\"width: 55px;\">"
    + "<input type=button value=\"Пет\" onclick=\"if(abilityPet!=0){UseMagCast(2,1,abilityPet);byid('animal').style.display='none';}\" title=\"Призвать_животное\" onmouseover=info(1,this,'gold'); onmouseout=endi(this,'#FFEEC0'); id=animal style=\"width:50px;background:#FFEEC0 url(http://r45308.narod.ru/ico_animal_cat.png) no-repeat;padding-left:20px;\">"
    + "</td>"
    + "</tr>"
    + "<tr>" + "<td valign=top>"
    + "<span style=\"visibility:hidden;\" id=infob></span>"
    + "<span id=areahit></span>" + "</td>" + "</tr>" + "</table>"
    + top.asAudio("uvedomlenie8.mp3");
//+ "<audio autoplay>" + "<source src=\"https://brainoil.site/audio/jungle4.mp3\" type=\"audio/mpeg\">" + "</audio>";

save_battle();
var div = document.createElement("div");
div.id = "div_ad_test";
//        div.style.position = "absolute";
//        div.style.top = "10px";
//        div.style.left = "145px";
//        div.style.width = "500px";
//        div.style.height = "20px";
//        div.style.background = "palegreen";
//        div.style.zIndex = "1";
//        div.style.overflow = "hidden";
div.innerHTML += "<span id=\"ad_test\" style=\"display:none\"></span>";
document.body.appendChild(div);

if (top.OnOffguard == 1) {
//	top.OnOffguard=1;
    top.guard_act = 0;
    setTimeout(function () {
        autotest()
    }, 3333);
}

function autotest() {
    if (!document.getElementById("control_panel")) {
        // control
        var div = document.createElement("div");
        div.id = "control_panel";
        div.style.position = "absolute";
        div.style.top = "10px";
        div.style.left = "145px";
        div.style.width = "500px";
        div.style.height = "20px";
        div.style.background = "palegreen";
        div.style.zIndex = "1";
        div.style.overflow = "hidden";
        div.innerHTML = "" + "<input type=button value=OFF onclick=\"" + "if(this.value=='OFF') {" + "clearTimeout(tmID[0]);" + "clearTimeout(tmID[1]);" + "byid('status').innerHTML=this.value;" + "this.value='ON';" + "} else {" + "autotest();" + "byid('status').innerHTML=this.value;" + "this.value='OFF';" + "}\" id=\"ctrl_btn\">" + "<span id=\"logb\">&#153;Силу подлости и зла одолеет дух Добра!</span>";
        div.innerHTML += "&nbsp;";
        div.innerHTML += "<span id=\"logc\"></span>";
        div.innerHTML += "<span id=\"audio\"></span>";
        div.innerHTML += "&nbsp;";
        div.innerHTML += "<span id=\"logBW\"></span>";
        document.body.appendChild(div);
        EnemyNum();
        if (FLDX + FLDY == 27 && amountenemy == 1) {
            top.document.el_CrDemand.act_castle.click();
            return abAudio("achtung.mp3");
        }
        if (FLDY > 3 && FLDX + FLDY != 27 && amountenemy > 2 && amountfriend <= amountenemy) {
            // astral-up
            ChangeAstralLevel(0);
        }
        // end-astral-up
        if (amountenemy == 1) {
            // limit
            byid("logb").innerHTML = "" + "<span style=\"color:red;\">" + "&#9674;Лимит врагов" + "</span>";
            return abAudio("call_message.mp3");
        }
        // end-limit
        top.frames["d_chatact"].chclear();
        top.frames["d_chatact"].chclear();
        if (!DEAD[ME.id] && UNBS[ME.id].flg != 8)
            // AddJS(1, "_jsgame_AddData.js");
            return tmID[0] = setTimeout(function () {
                autotest()
            }, 5555);
    }
    // end-control

    ab_limit_hp = 4;// top.ab_limit_hp;
    var canmove1 = byid("buttons").style.visibility;
    var rxy = -1;
    var nxy = -1;
    var onlyclon = 0;
    var UNISstr = "";
    UNIS = new Array();
    xobj = new Array();
    rndarr = new Array();
    BattleTime();
    EnemyNum();
    var TurnirBatle = [8, 9, 13];
//        {
//        	console.log("запуск боя был тут.");
//          	top.d_act.autobat = function d() {console.log("запуск боя был тут.")};
//        }

    if (TurnirBatle.indexOf(top.d_act.BTP) < 0) {
        // ============
//    byid("logBW").innerHTML = "" + "<span style=\"background-color:black;color:white;font-size:7pt;\">" + list_black_count + "</span>" + "<span style=\"background-color:white;color:black;font-size:7pt;\">" + list_white_count + "</span>" + "<span style=\"background-color:#D4D0C8;color:black;font-size:7pt;\">" + ab_fail_list.length + "</span>";
        if (top.document.el_CrDemand.clonsum.value == 1 && amountenemy < startAmountEnemy / 2 && amountEnemyClon < 2) {
            // limit
            byid("logb").innerHTML = "" + "<span style=\"color:red;\">" + "&#9674;Лимит врагов" + "</span>";
            abAudio("call_message.mp3");
            return document.getElementById("ctrl_btn").value = "ON";
        }
        // end-limit
        if (logLastRoundID >= top.document.el_CrDemand.abround.value) {
            // limit-raund
            byid("logb").innerHTML = "" + "<span style=\"color:red;\">" + "&#215;Лимит " + top.document.el_CrDemand.abround.value + " раунд" + "</span>";
            abAudio("call_message.mp3");
            return document.getElementById("ctrl_btn").value = "ON";
        }
        // end-limit-raund
        if (MyTime(3)) {
            // chat-control
            byid("status").innerHTML = "Chat";
            byid("status").style.backgroundColor = "red";
            abAudio("call_waiting.mp3");
            return tmID[0] = setTimeout(function () {
                autotest()
            }, 7000);
        }
        // end-chat-control
        if (tl_sec > 55 || canmove1 == "hidden") {
            // wait-timeleft
            actReload();
            byid("status").innerHTML = "AT0";
            byid("status").style.backgroundColor = "yellowgreen";
            return tmID[0] = setTimeout(function () {
                autotest()
            }, 3000);
        }
        // end-wait-timeleft
        var condition_hp = top.condition_hp;
        if (tl_sec > 44 && UNBS[ME.id].hp < ME.mhp / ab_limit_hp) {
            // hp-bad
            byid("status").innerHTML = "HP";
            byid("status").style.backgroundColor = "red";
            return tmID[0] = setTimeout(function () {
                autotest()
            }, 7000);
        }
        // end-hp-bad
        if (tl_sec < 55 && canmove1 == "visible" && UNBS[ME.id].hp < ME.mhp / ab_limit_hp && yes_mbCast == 1) {
            // hp-up
            if (top.document.el_CrDemand.abHP.value == 1) {
                byid("logb").innerHTML = "" + "<span style=\"color:red;\">" + "&#215;Лимит HP" + "</span>";
                byid("status").innerHTML = "HP";
                abAudio("boom.mp3");
                return document.getElementById("ctrl_btn").value = "ON";
            } else {
                byid("status").innerHTML = "HP";
                byid("status").style.backgroundColor = "red";
                document.getElementById("logb").innerHTML = "<b>Восстановить HP</b>";
                abAudio("call_in.mp3");
                UseMagCast(0, 0, mbHP);
                cn0 = 0;
                cn1 = 0;
                return tmID[0] = setTimeout(function () {
                    autotest()
                }, 7000);
            }
        }
        // end-hp-up
        if (tl_sec > 14 && amountfriend > 1 && amountenemy > 1 && amountEnemyTN == 0 && !EnemyFind(0)) {
            // wait-turn
            byid("status").innerHTML = "AT1";
            byid("status").style.backgroundColor = "yellowgreen";
            document.getElementById("logb").innerHTML = "&#9674;" + "Враг:<b>" + amountenemy + "</b>,Союз:" + amountfriend;
            byid("logc").innerHTML = "&#937; Ж&#916;УН";
            actReload();
            return tmID[0] = setTimeout(function () {
                autotest()
            }, 5000);
        }
        if (tl_sec > 21 && EnemyFind(0) && amountFriendTN < amountfriend / 2 && amountEnemyTN < amountenemy / 2 && amountFaceToFace < 2 && amountAll < FLDX * FLDY / 2) {
            byid("status").innerHTML = "AT2";
            byid("status").style.backgroundColor = "yellowgreen";
            document.getElementById("logb").innerHTML = "&#9674;" + "Враг:<b>" + amountenemy + "</b>,Союз:" + amountfriend;
            byid("logc").innerHTML = "&#937; Ж&#916;УН";
            actReload();
            return tmID[0] = setTimeout(function () {
                autotest()
            }, 3000);
        }
        if (amountEnemyClon < 4) {
            if (tl_min != 0 && EnemyTN() && !EnemyFind(0) && amountenemy > 2 && UNBS[ME.id].mp >= 75) {
                byid("status").innerHTML = "S";
                byid("status").style.backgroundColor = "white";
                //actReload();
                return tmID[0] = setTimeout(function () {
                    autotest()
                }, 7000);
            }
        }
        // end-wait-turn
        // ============

        for (i in UNBS) {
            UNIS[i] = {
                nk: UNBS[i].nk,
                x: UNBS[i].x,
                y: UNBS[i].y,
                sd: UNBS[i].sd,
                flg: UNBS[i].flg,
                rc: UNBS[i].rc,
                clr: UNBS[i].clr
            }
        }
        for (i in OBSTACLES) {
            UNIS[i] = {
                nk: "NaN",
                x: OBSTACLES[i].x,
                y: OBSTACLES[i].y,
                sd: UNBS[ME.id].sd,
                flg: 0,
                rc: 0,
                clr: 0
            }
        }
        for (i in UNIS) {
            // mass
            if (UNIS[i].flg != 8 && UNIS[i].rc != 7) {
                // only-clon
                if (UNIS[i].sd != UNBS[ME.id].sd && UNIS[i].clr && !at_stock) {
                    onlyclon++;
                }
            }
            // end-only-clon
            UNISstr += "x:" + UNIS[i].x + ",y:" + UNIS[i].y + ";";
        }
        // end-mass
        for (i in UNIS) {
            // target-all
            if (UNIS[i].flg != 8 && UNIS[i].rc != 7 && EnemyFind(1, UNIS[i].nk)) {
                if (UNIS[i].sd != UNBS[ME.id].sd && onlyclon == 0) {
                    rxy++;
                    xobj[rxy] = {
                        x: UNIS[i].x,
                        y: UNIS[i].y,
                        clr: UNIS[i].clr
                    };
                    //all
                }
            }
        }
        // end-target-all
        for (i in UNIS) {
            // target-clon
            if (UNIS[i].flg != 8 && UNIS[i].rc != 7 && EnemyFind(1, UNIS[i].nk)) {
                if (UNIS[i].sd != UNBS[ME.id].sd && UNIS[i].clr && onlyclon > 0) {
                    rxy++;
                    xobj[rxy] = {
                        x: UNIS[i].x,
                        y: UNIS[i].y,
                        clr: UNIS[i].clr
                    };
                    //clon
                }
            }
        }
        // end-target-clon
        if (rxy != -1) {
            // main-cast
            var rnd = Math.round(Math.random() * rxy);
            var even1 = xobj[rnd].y / 2;
            var even2 = Math.ceil(even1);
            if (even1 == even2) {
                ddx[0] = xobj[rnd].x - 1;
                ddy[0] = xobj[rnd].y - 1;
                ddx[1] = xobj[rnd].x;
                ddy[1] = xobj[rnd].y - 1;
                ddx[2] = xobj[rnd].x + 1;
                ddy[2] = xobj[rnd].y;
                ddx[3] = xobj[rnd].x;
                ddy[3] = xobj[rnd].y + 1;
                ddx[4] = xobj[rnd].x - 1;
                ddy[4] = xobj[rnd].y + 1;
                ddx[5] = xobj[rnd].x - 1;
                ddy[5] = xobj[rnd].y;
            } else {
                ddx[0] = xobj[rnd].x;
                ddy[0] = xobj[rnd].y - 1;
                ddx[1] = xobj[rnd].x + 1;
                ddy[1] = xobj[rnd].y - 1;
                ddx[2] = xobj[rnd].x + 1;
                ddy[2] = xobj[rnd].y;
                ddx[3] = xobj[rnd].x + 1;
                ddy[3] = xobj[rnd].y + 1;
                ddx[4] = xobj[rnd].x;
                ddy[4] = xobj[rnd].y + 1;
                ddx[5] = xobj[rnd].x - 1;
                ddy[5] = xobj[rnd].y;
            }
            for (var i = 0; i < 6; i++) {
                var xobjstr = "x:" + ddx[i] + ",y:" + ddy[i];
                var reg = new RegExp(xobjstr, "g");
                if (!reg.test(UNISstr)) {
                    if (ddx[i] < FLDX && ddy[i] < FLDY && ddx[i] != -1 && ddy[i] != -1) {
                        EFOBJ[0].x = xobj[rnd].x;
                        EFOBJ[0].y = xobj[rnd].y;
                        EFOBJ[0].clr = xobj[rnd].clr;
                        MyX = ddx[i];
                        MyY = ddy[i];
                        cn0 = 1;
                    }
                }
            }
            if (cn0 == 1) {
                console.log("main-cast", MyX, MyY);
            }
        }
        // end-main-cast
        if (EnemyFind(0)) {
            // face-cast
            var even1 = EFOBJ[0].y / 2;
            var even2 = Math.ceil(even1);
            if (even1 == even2) {
                ddx[0] = EFOBJ[0].x - 1;
                ddy[0] = EFOBJ[0].y - 1;
                ddx[1] = EFOBJ[0].x;
                ddy[1] = EFOBJ[0].y - 1;
                ddx[2] = EFOBJ[0].x + 1;
                ddy[2] = EFOBJ[0].y;
                ddx[3] = EFOBJ[0].x;
                ddy[3] = EFOBJ[0].y + 1;
                ddx[4] = EFOBJ[0].x - 1;
                ddy[4] = EFOBJ[0].y + 1;
                ddx[5] = EFOBJ[0].x - 1;
                ddy[5] = EFOBJ[0].y;
            } else {
                ddx[0] = EFOBJ[0].x;
                ddy[0] = EFOBJ[0].y - 1;
                ddx[1] = EFOBJ[0].x + 1;
                ddy[1] = EFOBJ[0].y - 1;
                ddx[2] = EFOBJ[0].x + 1;
                ddy[2] = EFOBJ[0].y;
                ddx[3] = EFOBJ[0].x + 1;
                ddy[3] = EFOBJ[0].y + 1;
                ddx[4] = EFOBJ[0].x;
                ddy[4] = EFOBJ[0].y + 1;
                ddx[5] = EFOBJ[0].x - 1;
                ddy[5] = EFOBJ[0].y;
            }
            for (var i = 0; i < 6; i++) {
                var xobjstr0 = "x:" + EFOBJ[0].x + ",y:" + EFOBJ[0].y;
                var xobjstr1 = "x:" + ddx[i] + ",y:" + ddy[i];
                var reg = new RegExp(xobjstr1, "g");
                if (!reg.test(UNISstr)) {
                    if (ddx[i] < FLDX && ddy[i] < FLDY && ddx[i] != -1 && ddy[i] != -1 && xobjstr1 != xobjstr0) {
                        nxy++;
                        rndarr[nxy] = {
                            x: ddx[i],
                            y: ddy[i]
                        };
                        cn0 = 1;
                    }
                }
            }
            if (nxy != -1) {
                var rnd = Math.round(Math.random() * nxy);
                MyX = rndarr[rnd].x;
                MyY = rndarr[rnd].y;
                console.log("face-cast", MyX, MyY);
            }
        }
        // end-face-cast
        if (cn0 == 1 && UNBS[ME.id].mp > 75 && canmove1 == "visible" && yes_mbCast == 1 && logLastRoundID == begin_round) {
            // clon
            var at_cast = true;
            if (top.document.el_CrDemand.clonsum.value == 1 && amountenemy <= startAmountEnemy / 2 && amountFriendClon > amountEnemyClon) {
                //limit
                if (at_stock)
                    at_cast = false;
            }
            //end-limit
            if (at_cast) {
                //cast
                UseMagCast(1, 0, mbClon, MyX, MyY);
                byid("logb").innerHTML = (EFOBJ[0].clr ? "&#8226;" : "&#164;") + "Цель:" + EFOBJ[0].x + "," + EFOBJ[0].y + " <u>Клон</u>:<b>" + MyX + "," + MyY + "</b>";
            } else {
                yes_mbCast = 0;
                byid("logb").innerHTML = "&#9674;Лимит целей";
            }
            //end-cast
        } else {
            // end-clon
            byid("status").innerHTML = begin_round + "|<b>" + logLastRoundID + "</b>";
            byid("status").style.backgroundColor = "white";
        }
        if (tl_sec > 8 || tl_min > 0) {
            // STOCK
            if (cn0 == 0 && cn1 <= rxy && !at_stock) {
                // stock0
                cn1++;
                byid("status").innerHTML = "CN" + cn1;
                byid("logb").innerHTML = "&#9674;Поиск цели..";
                return tmID[0] = setTimeout(function () {
                    autotest()
                }, 500);
            }
            // end-stock0
            if (!at_stock && yes_mbCast)
                cn1 = 0;
            at_stock = 1;
            if (cn0 == 0 && cn1 <= rxy && yes_mbCast) {
                // stock1
                cn1++;
                byid("status").innerHTML = "CN" + cn1;
                byid("logb").innerHTML = "&#9674;Поиск цели..";
                return tmID[0] = setTimeout(function () {
                    autotest()
                }, 500);
            }
            // end-stock1
        }
        // END-STOCK
        cn0 = 0;
        cn1 = 0;
        byid("logc").innerHTML = "" + "&#937; Ж&#916;УН <b>" + amountEnemyTN + "/" + (amountenemy / 2) + "</b>";
        if (canmove1 == "visible" && amountEnemyTN >= amountenemy / 2 || canmove1 == "visible" && tl_sec <= 21 || canmove1 == "visible" && EnemyFind(0)) {
            var speed_autobat = (tl_sec < 8) ? 1500 : 5555;
            if (EnemyFind(0))
                speed_autobat = 3000;
            if (!EnemyFind(0))
                speed_autobat = tl_sec / 2 * 1000;
            if (amountEnemyTN >= amountenemy / 2 && tl_sec > 5)
                speed_autobat = 2000;
            byid("logc").innerHTML = "&#937; <b>Переход " + (speed_autobat / 1000) + " сек.</b>";
            tmID[1] = setTimeout("" + "UseMagCast(777);" + "ab_hide=0;" + "autobat(0);", speed_autobat);
        } else {
            tmID[0] = setTimeout("autotest()", 7000);
        }
    } else {
        console.log("Ненаш бой")
    }
}

function EnemyNum() {
    ME = top.d_act.ME;
    amountfriend = 0;
    amountenemy = 0;
    amountFriendClon = 0;
    amountEnemyClon = 0;
    amountFriendTN = 0;
    amountEnemyTN = 0;
    for (i in UNBS) {
        if (!UNBS[i].clr && UNBS[i].sd == UNBS[ME.id].sd && UNBS[i].tn == 0 && UNBS[i].flg != 8)
            amountFriendTN++;
        if (!UNBS[i].clr && UNBS[i].sd != UNBS[ME.id].sd && UNBS[i].tn == 0 && UNBS[i].flg != 8)
            amountEnemyTN++;
        if (!UNBS[i].clr && UNBS[i].sd == UNBS[ME.id].sd && UNBS[i].flg != 8)
            amountfriend++;
        if (!UNBS[i].clr && UNBS[i].sd != UNBS[ME.id].sd && UNBS[i].flg != 8)
            amountenemy++;
        if (UNBS[i].clr && UNBS[i].sd == UNBS[ME.id].sd && UNBS[i].flg != 8)
            amountFriendClon++;
        if (UNBS[i].clr && UNBS[i].sd != UNBS[ME.id].sd && UNBS[i].flg != 8)
            amountEnemyClon++;
    }
    amountAll = amountfriend + amountenemy + amountFriendClon + amountEnemyClon;
    if (saf_ready == 0)
        startAmountFriend = amountfriend;
    if (sae_ready == 0)
        startAmountEnemy = amountenemy;
    saf_ready = 1;
    sae_ready = 1;
}

function abAudio(name) {

    byid("audio").innerHTML = "" + "<audio " + top.document.getElementById("audioBtn").checked ? "autoplay" : "" + ">" + "<source src=\"https://" + hostname_oil + "/audio/" + name + "\" type=\"audio/mpeg\">" + "</audio>";
}

function MapClick(ev) {
    // js-game
    ev = ev || event;
    var x = (ev.x || ev.clientX) + document.body.scrollLeft;
    var y = (ev.y || ev.clientY) + document.body.scrollTop;
    var el = byid('map');
    while (el) {
        x -= el.offsetLeft;
        y -= el.offsetTop;
        el = el.offsetParent;
    }
    var row = Math.floor(y / 30);
    var col = Math.floor((x - ((row % 2 == 0) ? 0 : 17)) / 34);

    if ((col >= 0) && (row >= 0) && (col < FLDX) && (row < FLDY)) {
        var mrkr = byid('mrkr');
        mrkr.style.top = (50 + 30 * row);
        mrkr.style.left = (25 + 34 * col + (row % 2) * 17);
    }
    ENEMY = 0;
    OBST = -1;
    EX = col;
    EY = row;
    byid("mrkr").style.visibility = "visible";
    MyX = EX;
    MyY = EY;
    // move-click
    if (yes_mbCast == 0)
        move_round++;
    if (move_round > 0 && UNBS[ME.id] && UNBS[ME.id].flg != 8 && top.document.el_CrDemand.abMoveСlick.value == 1) {
        byid("status").style.backgroundColor = "yellow";
        byid("status").innerHTML = "move";
        PrepareReq("bid=" + BID + "&x=" + EX + "&y=" + EY + "&cmd=Move");
        move_round = 0;
        yes_mbCast = 1;
    }
    // end-move-click
}

function UBClick() {
    var nb = this.id;
    SelectUB(nb.substring(3));
    MyX = UNBS[nb.substring(3)].x;
    MyY = UNBS[nb.substring(3)].y;
}

function OBClick() {
    var nb = this.id;
    SelectOB(nb.substring(3));
    MyX = OBSTACLES[nb.substring(3)].x;
    MyY = OBSTACLES[nb.substring(3)].y;
}

function BattleTime() {
    if (document.getElementById("time_left")) {
        var batime = document.getElementById("time_left").innerHTML;
        if (batime.length == 0) {
            batime = "99:99"
        }
        var cutime = /(\d+):(\d+)/.exec(batime);
        tl_min = parseInt(cutime[1], 10);
        tl_sec = parseInt(cutime[2], 10);
    }
}

function EnemyFind(a, b) {
    var soclanList = top.soclanList;
    if (a == 0) {
        // face-to-face
        amountFaceToFace = 0;
        var nxy = -1;
        EFOBJ[0].id = -1;
        rndarr = new Array();
        ENEMY = 0;
        Redraw();
        var even1 = UNBS[ME.id].y / 2;
        var even2 = Math.ceil(even1);
        if (even1 == even2) {
            ddx[0] = UNBS[ME.id].x - 1;
            ddy[0] = UNBS[ME.id].y - 1;
            ddx[1] = UNBS[ME.id].x;
            ddy[1] = UNBS[ME.id].y - 1;
            ddx[2] = UNBS[ME.id].x + 1;
            ddy[2] = UNBS[ME.id].y;
            ddx[3] = UNBS[ME.id].x;
            ddy[3] = UNBS[ME.id].y + 1;
            ddx[4] = UNBS[ME.id].x - 1;
            ddy[4] = UNBS[ME.id].y + 1;
            ddx[5] = UNBS[ME.id].x - 1;
            ddy[5] = UNBS[ME.id].y;
        } else {
            ddx[0] = UNBS[ME.id].x;
            ddy[0] = UNBS[ME.id].y - 1;
            ddx[1] = UNBS[ME.id].x + 1;
            ddy[1] = UNBS[ME.id].y - 1;
            ddx[2] = UNBS[ME.id].x + 1;
            ddy[2] = UNBS[ME.id].y;
            ddx[3] = UNBS[ME.id].x + 1;
            ddy[3] = UNBS[ME.id].y + 1;
            ddx[4] = UNBS[ME.id].x;
            ddy[4] = UNBS[ME.id].y + 1;
            ddx[5] = UNBS[ME.id].x - 1;
            ddy[5] = UNBS[ME.id].y;
        }
        for (i in UNBS) {
            // loop-rnd
            for (var j = 0; j < 6; j++) {
                if (UNBS[i].x == ddx[j] && UNBS[i].y == ddy[j] && UNBS[i].sd != UNBS[ME.id].sd && EnemyFind(1, UNBS[i].nk)) {
                    nxy++;
                    rndarr[nxy] = {
                        x: ddx[j],
                        y: ddy[j],
                        id: i,
                        clr: UNBS[i].clr
                    };
                    amountFaceToFace++;
                }
            }
        }
        // end-loop-rnd
        if (nxy != -1) {
            var rnd = Math.round(Math.random() * nxy);
            EFOBJ[0].x = rndarr[rnd].x;
            EFOBJ[0].y = rndarr[rnd].y;
            EFOBJ[0].id = rndarr[rnd].id;
            EFOBJ[0].clr = rndarr[rnd].clr;
            EFOBJ[0].nxy = nxy;
            EFOBJ[0].rnd = rnd;
        }
        for (var i = 0; i < 6; i++) {
            var xobjstr0 = "x:" + UNBS[ENEMY].x + ",y:" + UNBS[ENEMY].y;
            var xobjstr1 = "x:" + ddx[i] + ",y:" + ddy[i];
            if (xobjstr0 == xobjstr1 && UNBS[ENEMY].flg != 8 && UNBS[ENEMY].rc != 7) {
                return true;
            }
        }
        return false;
    }
    // end-face-to-face
    if (a == 1) {
        // fail-list
        var list_white = 0;
        var list_black = 0;
        var cut_nk = b;
        cut_nk = cut_nk.replace(/клон (\d+)/gi, "");
        cut_nk = cut_nk.replace(/(\s)/gi, "");
        for (s in soclanList) {
            // loop0
            if (soclanList[s].nk == cut_nk) {
                list_black_count++;
                return false;
            }
        }
        // end-loop0
        for (i in ab_fail_list) {
            // loop1
            if (ab_fail_list[i].nk == cut_nk) {
                if (ab_fail_list[i].dmgn == 0)
                    list_black = 1;
                if (ab_fail_list[i].dmgn > 0)
                    list_white = 1;
            }
        }
        // end-loop1
        if (list_black == 1 && list_white == 0) {
            list_black_count++;
            return false;
        } else {
            list_white_count++;
            return true;
        }
    }
    // end-fail-list
}

function MyTime(a) {
    // Чат
    if (a == 0) {
        var breq = top.frames["d_chat"].document.getElementById("messages").innerHTML;
        var reg = new RegExp("(mytime|Голос)", "g");
        var regg = new RegExp("(Длительность Вашей травмы|Читайте новости|присоединение к захвату)", "g");
        if (regg.test(breq)) {
            top.frames["d_chatact"].chclear();
            top.frames["d_chatact"].chclear();
        }
        if (reg.test(breq)) {
            return true;
        }
    }
    if (a == 1) {
        var breq = top.frames["d_chat"].document.getElementById("messages").innerHTML;
        var reg = new RegExp("На форпост", "g");
        if (reg.test(breq)) {
            return true;
        }
    }
    if (a == 3 && top.frames["d_chat"].document.getElementById("messages").getElementsByTagName("span").length != 0) {
        for (var i = 0; i < top.frames["d_chat"].document.getElementById("messages").getElementsByTagName("span").length; i++) {
            var chat_msg = top.frames["d_chat"].document.getElementById("messages").getElementsByTagName("span")[i].id;
            var chatReg = /row(\d+)/;
            var chatRowArray = chatReg.exec(chat_msg);
            // check-messages
            var breq = top.frames["d_chat"].document.getElementById("row" + chatRowArray[1]).innerHTML;
            /****************************/
            /* не большое исправление */
            /**************************/
            var t = ME.nk;
            var nk = t.replace(new RegExp("[*]", 'g'), "[*]");

            var reg = new RegExp("(" + nk + "|На форпост)", "g");
            //var reg=new RegExp("("+ME.nk+"|На форпост)","g");
            if (reg.test(breq) && !top.frames["d_pers"].chatRowArray[chatRowArray[1]]) {
                document.getElementById("logb").innerHTML = "" + "<a href=\"#\" onclick=\"" + "MyTime(4);" + "this.innerHTML='Готов';" + "return false;\">" + "<b>[Принять чат]</b></a>";
                return true;
            }
        }
        return false;
    }
    if (a == 4 && top.frames["d_chat"].document.getElementById("messages").getElementsByTagName("span").length != 0) {
        for (var i = 0; i < top.frames["d_chat"].document.getElementById("messages").getElementsByTagName("span").length; i++) {
            var chat_msg = top.frames["d_chat"].document.getElementById("messages").getElementsByTagName("span")[i].id;
            var chatReg = /row(\d+)/;
            var chatRowArray = chatReg.exec(chat_msg);
            // clear-messages
            var breq = top.frames["d_chat"].document.getElementById("row" + chatRowArray[1]).innerHTML;
            /****************************/
            /* не большое исправление */
            /**************************/
            var t = ME.nk;
            var nk = t.replace(new RegExp("[*]", 'g'), "[*]");

            var reg = new RegExp("(" + nk + "|На форпост)", "g");
            //var reg=new RegExp("("+ME.nk+"|На форпост)","g");
            if (reg.test(breq) && !top.frames["d_pers"].chatRowArray[chatRowArray[1]]) {
                top.frames["d_pers"].chatRowArray[chatRowArray[1]] = 1;
            }
        }
    }
}

function UseMagCast(a, b, id, mb_x, mb_y) {
    // Magic-Book-Cast
    var el = top.d_act.document.getElementById("status");
    if (!el) top.Indicator("lawngreen", "");
    if (a == 777) {
        cast_load_count = -1;
        return frames["channel_2"].location = "img/persmanas.gif";
    }
    try {
        // OpenMagBook
        if (location.host != "newforest.apeha.ru") {
            var mb_code = frames["channel_2"].document.forms[0].code.value;
            byid("status").innerHTML = "Получили код";//mb_code;
            byid("MyClon").style.visibility = "visible";
        } else {
            var mb_code = "newforest.apeha.ru";
        }
    } catch (e) {
        mb_parm = new Array(a, b, id, mb_x, mb_y);
        byid("status").style.backgroundColor = "skyblue";
        byid("status").innerHTML = "OpenMagBook";
        byid("buttons").style.visibility = "hidden";
        top.d_act.$(".ApplyButton").hide();
        byid("MyClon").style.visibility = "hidden";
        if (a == 2) {
            if (ready_mb == 0) {
                ready_mb = 1;
                frames["channel_2"].location = "ability.chtml";
            }
        } else {
            if (ready_mb == 0) {
                ready_mb = 1;
                frames["channel_2"].location = "magbook.chtml";
            }
        }
        if (UNBS[ME.id] && UNBS[ME.id].flg != 8) {
            var speed_cast = (f5_mbCast) ? 1000 : 500;
            document.getElementById("status").innerHTML = "OpenMagBook:" + cast_load_count;
            return setTimeout("UseMagCast(mb_parm[0],mb_parm[1],mb_parm[2],mb_parm[3],mb_parm[4])", speed_cast);
        } else {
            return byid("status").innerHTML = "CloseMagBook";
        }
    }
    if (a == 0) {
        // на себя
        if (b == 0) {
            // хп, панцирь
            // FORM-CAST
            var addform = frames["channel_2"].document.createElement("span");
            addform.innerHTML = "" + "<form name=castform method=post action=magbook.chtml>" + "<input name=actBattle-UseCast type=hidden value=" + id + ">" + "<input name=code type=hidden value=" + mb_code + ">" + "<input name=bid type=hidden value=" + BID + ">" + "</form>";
            frames["channel_2"].document.getElementsByTagName("head")[0].appendChild(addform);
            var chform = frames["channel_2"].document.forms["castform"];
            chform.submit();
            // END-FORM-CAST
        }
        if (b == 1) {
            // проклятие
            frames["channel_2"].location = "magbook.html?actBattle-UseCast=" + id + "&bid=" + BID + "&fl=1&code=" + mb_code + "";
        }
    }
    if (a == 1) {
        // на врага
        if (b == 0) {
            // клон
            if (f5_mbCast == 1) {
                // F5-wait
                f5_mbCast = 0;
                mb_parm = new Array(a, b, id, mb_x, mb_y);
                byid("status").style.backgroundColor = "orange";
                byid("status").innerHTML = "F5";
                byid("buttons").style.visibility = "hidden";
                top.d_act.$(".ApplyButton").hide();
                byid("MyClon").style.visibility = "hidden";
                return setTimeout("UseMagCast(mb_parm[0],mb_parm[1],mb_parm[2],mb_parm[3],mb_parm[4])", 777);
            }
            byid("status").style.backgroundColor = "skyblue";
            byid("status").innerHTML = mb_code;
            // FORM-CAST-CLONE
            var addform = frames["channel_2"].document.createElement("span");
            addform.innerHTML = "" + "<form name=castform method=post action=magbook_actBattle-FieldCast_" + id + ".chtml?code=" + mb_code + ">" + "<input name=bid type=hidden value=" + BID + ">" + "<input name=ex type=hidden value=" + mb_x + ">" + "<input name=ey type=hidden value=" + mb_y + ">" + "</form>";
            frames["channel_2"].document.getElementsByTagName("head")[0].appendChild(addform);
            var chform = frames["channel_2"].document.forms["castform"];
            chform.submit();
            // END-FORM-CAST-CLONE
        }
        if (b == 1) {
            // магудар
            frames["channel_2"].location = "magbook_actBattle-UseCast_" + id + ".html?bid=" + BID + "&uid=" + ENEMY + "&code=" + mb_code + "";
        }
    }
    if (a == 2) {
        if (b == 0) {
            // испепеление, выкинуть
            frames["channel_2"].location = "ability_actBattle-UseCast_" + id + ".html?bid=" + BID + "&uid=" + ENEMY + "&code=" + mb_code + "";
        }
        if (b == 1) {
            // пит
            frames["channel_2"].location = "ability.html?actBattle-UseCast=" + id + "&bid=" + BID + "&pettarget=1&tactic=3&code=" + mb_code + "";
        }
        if (b == 2) {
            // Быстрое перемещение
            var addform = frames["channel_2"].document.createElement("span");
            addform.innerHTML = "" + "<form name=castform method=post action=\"ability_type_knight.chtml\">" + "<input name=bid type=hidden value=" + BID + ">" + "<input name=actBattle-UseCast type=hidden value=" + id + ">" + "<input name=code type=hidden value=" + mb_code + ">" + "</form>";
            frames["channel_2"].document.getElementsByTagName("head")[0].appendChild(addform);
            var chform = frames["channel_2"].document.forms["castform"];
            chform.submit();
            // END-FORM-CAST-CLONE
            setTimeout(function () {
                byid("status").style.backgroundColor = "yellow";
                byid("status").innerHTML = "move";
                PrepareReq("bid=" + BID + "&x=" + mb_x + "&y=" + mb_y + "&cmd=Move");
                move_round = 0;
                yes_mbCast = 1;
            }, 500)

        }
    }
    byid("buttons").style.visibility = "hidden";
    top.d_act.$(".ApplyButton").hide();
    setTimeout("UseMagCast(777)", 1000);
    setTimeout("actReload()", 500);
    yes_mbCast = 0;
    cast_load_count = 0;
}

function EnemyTN() {
    for (i in UNBS) {
        if (!UNBS[i].clr && UNBS[i].tn == 1 && UNBS[i].sd != UNBS[ME.id].sd && UNBS[i].flg != 8) {
            return true;
        }
    }
}

function autobat(a) {
    var canmove1 = byid("buttons").style.visibility;
    if (a == 0) {
        // MAKE
        if (canmove1 == "hidden") {
            // watch-hide
            ab_hide++
            if (ab_hide > 14 && !DEAD[ME.id] && UNBS[ME.id].flg != 8) {
                ab_hide = 0;
                actReload();
            }
            byid("status").innerHTML = "AB" + ab_hide;
            return tmID[0] = setTimeout("autobat(0)", 1000);
        }
        // end-watch-hide
        if (logLastRoundID != begin_round) {
            begin_round = logLastRoundID;
        }
        ENEMY = 0;
        Redraw();
        at_stock = 0;
        if (canmove1 == "visible" && ENEMY != 0) {
            top.d_act.$(".ApplyButton").show();
            if (UNBS[ENEMY].sd != UNBS[ME.id].sd) {
                var even1 = UNBS[ME.id].y / 2;
                var even2 = Math.ceil(even1);
                if (even1 == even2) {
                    ddx[0] = UNBS[ME.id].x - 1;
                    ddy[0] = UNBS[ME.id].y - 1;
                    ddx[1] = UNBS[ME.id].x;
                    ddy[1] = UNBS[ME.id].y - 1;
                    ddx[2] = UNBS[ME.id].x + 1;
                    ddy[2] = UNBS[ME.id].y;
                    ddx[3] = UNBS[ME.id].x;
                    ddy[3] = UNBS[ME.id].y + 1;
                    ddx[4] = UNBS[ME.id].x - 1;
                    ddy[4] = UNBS[ME.id].y + 1;
                    ddx[5] = UNBS[ME.id].x - 1;
                    ddy[5] = UNBS[ME.id].y;
                } else {
                    ddx[0] = UNBS[ME.id].x;
                    ddy[0] = UNBS[ME.id].y - 1;
                    ddx[1] = UNBS[ME.id].x + 1;
                    ddy[1] = UNBS[ME.id].y - 1;
                    ddx[2] = UNBS[ME.id].x + 1;
                    ddy[2] = UNBS[ME.id].y;
                    ddx[3] = UNBS[ME.id].x + 1;
                    ddy[3] = UNBS[ME.id].y + 1;
                    ddx[4] = UNBS[ME.id].x;
                    ddy[4] = UNBS[ME.id].y + 1;
                    ddx[5] = UNBS[ME.id].x - 1;
                    ddy[5] = UNBS[ME.id].y;
                }
                for (var i = 0; i < 6; i++) {
                    // loop
                    var xobjstr0 = "x:" + UNBS[ENEMY].x + ",y:" + UNBS[ENEMY].y;
                    var xobjstr1 = "x:" + ddx[i] + ",y:" + ddy[i];
                    if (xobjstr0 == xobjstr1 && EnemyFind(0)) {
                        ReloadReq = 0;
                        cn0 = 1;
                        yes_mbCast = 1;
                        ab_move = 0;
                        if (EFOBJ[0].id != -1)
                            ENEMY = EFOBJ[0].id;
                        if (!EnemyFind(1, UNBS[ENEMY].nk)) {
                            cn0 = 0;
                            break;
                        }
                        //fail
                        console.log('K0', '=', EFOBJ[0].nxy, EFOBJ[0].rnd, EFOBJ[0].id);
                        byid("status").innerHTML = "K";
                        byid("status").style.backgroundColor = "yellow";
                        byid("logc").innerHTML = "&#936; <b>УДАР</b>";
                        var rnd = Math.round(Math.random() * 3);

                        switch (rnd) {
                            // удар-блок
                            case 0:
                                SwitchAttack(1);
                                ubkick(0, 0);
                                ubblock(1, 2);
                                ubblock(1, 3);
                                MakeTurn();
                                byid("status").innerHTML = "K0";
                                break;
                            // голова
                            case 1:
                                SwitchAttack(1);
                                ubkick(0, 1);
                                ubblock(1, 2);
                                ubblock(1, 3);
                                MakeTurn();
                                byid("status").innerHTML = "K1";
                                break;
                            // корпус
                            case 2:
                                SwitchAttack(1);
                                ubkick(0, 4);
                                ubblock(1, 2);
                                ubblock(1, 3);
                                MakeTurn();
                                byid("status").innerHTML = "K2";
                                break;
                            // ноги
                            case 3:
                                SwitchAttack(1);
                                ubkick(0, 0);
                                ubkick(1, 0);
                                MakeTurn();
                                byid("status").innerHTML = "K3";
                                break;
                            // голова-голова
                        }
                    }
                }
                // end-loop
                console.log('K1', '=', EFOBJ[0].nxy, EFOBJ[0].rnd, ENEMY);
            }
        }
        if (canmove1 == "visible" && cn0 == 0) {
            ReloadReq = 0;
            yes_mbCast = 1;
            ab_move = 0;
            if (!EnemyFind(0) && UNBS[ENEMY].rc != 7) {
                MoveRandom(0);
            } else {
                autobat(2);
            }
            // move
        }
        if (cn0 == 1)
            autobat(2);
    }
    // END-MAKE
    if (a == 1) {
        // BEGIN
        if (canmove1 == "hidden") {
            // watch-hide
            ab_hide++
            if (ab_hide > 14 && !DEAD[ME.id] && UNBS[ME.id].flg != 8) {
                ab_hide = 0;
                actReload();
            }
            byid("status").innerHTML = "AB" + ab_hide;
            return tmID[0] = setTimeout("autobat(1)", 1000);
        }
        // end-watch-hide
        if (ab_move == 0) {
            console.log(ab_move, 'M1', UNBS[ME.id].x, UNBS[ME.id].y, '=', EFOBJ[1].x, EFOBJ[1].y);
            begin_round++;
            cn0 = 0;
            setTimeout("actReload()", 4000);
            return tmID[0] = setTimeout("autotest()", 5000);
        }
        console.log(ab_move, 'M2', UNBS[ME.id].x, UNBS[ME.id].y, '=', EFOBJ[1].x, EFOBJ[1].y);
        if (UNBS[ME.id].x == EFOBJ[1].x && UNBS[ME.id].y == EFOBJ[1].y) {
            begin_round++;
            ab_move = 0;
            cn0 = 0;
            setTimeout("actReload()", 4000);
            tmID[0] = setTimeout("autotest()", 5000);
        } else {
            autobat(0)
        }
    }
    // END-BEGIN
    if (a == 2) {
        // BLOCK
        if (cn0 == 0 && ab_move == 0) {
            byid("status").innerHTML = "B";
            byid("status").style.backgroundColor = "yellow";
            byid("logc").innerHTML = "&#936; <b>БЛОК</b>";
            SwitchAttack(1);
            ubblock(0, 0);
            ubblock(1, 1);
            ubblock(0, 2);
            ubblock(1, 3);
            MakeTurn();
            //ноги
        }
        ab_hide = 0;
        var speed_autobat = (ab_move) ? 3000 : 5555;
        console.log('M', '=', ab_move, 'SA', '=', speed_autobat);
        tmID[0] = setTimeout("autobat(1)", speed_autobat);
    }
    // END-BLOCK
}

function MoveRandom(a, b) {
    if (a == 0) {
        // A0
        var UNISstr = "";
        UNIS = new Array();
        var mr_move_z = 1;

        for (i in UNBS) {
            UNIS[i] = {
                x: UNBS[i].x,
                y: UNBS[i].y,
                sd: UNBS[i].sd,
                flg: UNBS[i].flg
            }
        }
        for (i in OBSTACLES) {
            UNIS[i] = {
                x: OBSTACLES[i].x,
                y: OBSTACLES[i].y,
                sd: UNBS[ME.id].sd,
                flg: 0
            }
        }
        for (i in UNIS) {
            UNISstr += "x:" + UNIS[i].x + ",y:" + UNIS[i].y + ";";
        }
        var even1 = UNBS[ME.id].y / 2;
        var even2 = Math.ceil(even1);
        if (even1 == even2) {
            ddx[0] = UNBS[ME.id].x - 1;
            ddy[0] = UNBS[ME.id].y - 1;
            ddx[1] = UNBS[ME.id].x;
            ddy[1] = UNBS[ME.id].y - 1;
            ddx[2] = UNBS[ME.id].x + 1;
            ddy[2] = UNBS[ME.id].y;
            ddx[3] = UNBS[ME.id].x;
            ddy[3] = UNBS[ME.id].y + 1;
            ddx[4] = UNBS[ME.id].x - 1;
            ddy[4] = UNBS[ME.id].y + 1;
            ddx[5] = UNBS[ME.id].x - 1;
            ddy[5] = UNBS[ME.id].y;
        } else {
            ddx[0] = UNBS[ME.id].x;
            ddy[0] = UNBS[ME.id].y - 1;
            ddx[1] = UNBS[ME.id].x + 1;
            ddy[1] = UNBS[ME.id].y - 1;
            ddx[2] = UNBS[ME.id].x + 1;
            ddy[2] = UNBS[ME.id].y;
            ddx[3] = UNBS[ME.id].x + 1;
            ddy[3] = UNBS[ME.id].y + 1;
            ddx[4] = UNBS[ME.id].x;
            ddy[4] = UNBS[ME.id].y + 1;
            ddx[5] = UNBS[ME.id].x - 1;
            ddy[5] = UNBS[ME.id].y;
        }
        for (var i = 0; i < 6; i++) {
            // loop
            var xobjstr = "x:" + ddx[i] + ",y:" + ddy[i];
            var reg = new RegExp(xobjstr, "g");
            if (!reg.test(UNISstr)) {
                if (ddx[i] < FLDX && ddy[i] < FLDY && ddx[i] != -1 && ddy[i] != -1) {
                    EFOBJ[0].x = ddx[i];
                    EFOBJ[0].y = ddy[i];
                    MyX = ddx[i];
                    MyY = ddy[i];
                    ab_move = 1;

                    if (UNBS[ME.id].y == 0)
                        mr_move_z = 0;
                    if (UNBS[ME.id].y == FLDY - 1)
                        mr_move_z = 1;
                    if (UNBS[ME.id].y == UNBS[ENEMY].y)
                        mr_move_z = 1;
                    if (mr_move_z == 1) {
                        // LINE-X
                        if (UNBS[ME.id].x > UNBS[ENEMY].x) {
                            if (ddx[i] == UNBS[ME.id].x - 1 && ddy[i] == UNBS[ME.id].y && UNBS[ME.id].y == UNBS[ENEMY].y) {
                                return MoveRandom(1, "M2");
                            }
                            if (ddx[i] == UNBS[ME.id].x - 1 && ddy[i] != UNBS[ME.id].y && UNBS[ME.id].y != UNBS[ENEMY].y) {
                                return MoveRandom(1, "M2");
                            }
                        }
                        if (UNBS[ME.id].x < UNBS[ENEMY].x) {
                            if (ddx[i] == UNBS[ME.id].x + 1 && ddy[i] == UNBS[ME.id].y && UNBS[ME.id].y == UNBS[ENEMY].y) {
                                return MoveRandom(1, "M2");
                            }
                            if (ddx[i] == UNBS[ME.id].x + 1 && ddy[i] != UNBS[ME.id].y && UNBS[ME.id].y != UNBS[ENEMY].y) {
                                return MoveRandom(1, "M2");
                            }
                        }
                        // END-LINE-X
                        // LINE-Y
                        if (UNBS[ME.id].y > UNBS[ENEMY].y) {
                            if (ddy[i] == UNBS[ME.id].y - 1 && ddx[i] == UNBS[ME.id].x && UNBS[ME.id].x == UNBS[ENEMY].x) {
                                return MoveRandom(1, "M2");
                            }
                            if (ddy[i] == UNBS[ME.id].y - 1 && ddx[i] == UNBS[ME.id].x && UNBS[ME.id].x != UNBS[ENEMY].x) {
                                return MoveRandom(1, "M2");
                            }
                        }
                        if (UNBS[ME.id].y < UNBS[ENEMY].y) {
                            if (ddy[i] == UNBS[ME.id].y + 1 && ddx[i] == UNBS[ME.id].x && UNBS[ME.id].x == UNBS[ENEMY].x) {
                                return MoveRandom(1, "M2");
                            }
                            if (ddy[i] == UNBS[ME.id].y + 1 && ddx[i] == UNBS[ME.id].x && UNBS[ME.id].x != UNBS[ENEMY].x) {
                                return MoveRandom(1, "M2");
                            }
                        }
                        // END-LINE-Y
                    }
                }
            }
        }
        // end-loop
        return MoveRandom(1, "M1");
    }
    // END-A0
    if (a == 1) {
        // A1
        if (ab_move == 0)
            autobat(2);
        if (ab_move == 1) {
            if (top.d_act.logLastRoundID == 1) {
                byid("status").innerHTML = "B";
                byid("status").style.backgroundColor = "yellow";
                byid("logc").innerHTML = "&#936; <b>В первом раунде - БЛОК</b>";
                SwitchAttack(1);
                ubblock(0, 0);
                ubblock(1, 1);
                ubblock(0, 2);
                ubblock(1, 3);
                MakeTurn();
                //ноги
                //	ab_hide = 0;
                //	var speed_autobat = (ab_move) ? 3000 : 5555;
                console.log("В первом раунде - БЛОК");
                //	tmID[0] = setTimeout("autobat(2)", 500);
                yes_mbCast = 0;
                tmID[0] = setTimeout(function () {
                    autotest()
                }, 3000);
            } else {
                EFOBJ[1].x = MyX;
                EFOBJ[1].y = MyY;
                byid("status").innerHTML = b;
                byid("status").style.backgroundColor = "yellow";
                byid("logc").innerHTML = "&#936; <b>Иду на врага!</b>";
                PrepareReq("bid=" + BID + "&x=" + MyX + "&y=" + MyY + "&cmd=Move");
                tmID[0] = setTimeout("autobat(2)", 500);
            }
        }
    }
    // END-A1
}

function showBM(mags,magsCode) {

    var el = top.d_act;
    var jq = el.jQuery;
    var els = jq("td>table[cellpadding=\"0\"][cellspacing=\"0\"][width=\"100%\"]").not("table[border=\"0\"]").find(">tbody>tr");
    for (var i = 0; i < els.length; i++) {
        var tr = els[i];
        var td = document.createElement('td');
        tr.appendChild(td);
    }
    var wbtext = `<div class="sostavBM" id="sostavBM" >
    <div class="head" style="text-align: center;">
        <h2>Состав книги БМ</h2></div>
    <table><thead>
    <tr>
        <th style="text-align: center;width: 75px;">N</th>
        <th style="text-align: center;width: 200px;">Магия</th>
        <th style="text-align: center;width: 50px;">Количество</th>
        <th style="text-align: center;width: 100px;" class="ApplyButton">Применить</th>
    </tr></thead>
        <tbody>`;
    var o = 0;
    for (let key in mags) {
        o++;
        //td[0].innerHTML+=key + ' ' + mags[key] + "<br/>";
        wbtext += `<tr><td style="text-align: center;"><strong>${o}</strong></td>`
        wbtext += `<td style="text-align: left;">${key}</td>`
        wbtext += `<td style="text-align: center;">${mags[key]}</td>`
        wbtext += `<td style="text-align: center;" className="ApplyButton">${magsCode[key]}</td></tr>`

//        console.log(key + ' ' + top.d_act.mags[key]);
    }
    wbtext += ` </tbody>
    </table>
</div>
</div>`;
    td.style = "vertical-align: top;";
    td.innerHTML = wbtext;
    td.id = "WarBookContent";
// Функция скрытия использования
//top.d_act.$(".ApplyButton").hide()

}

function parseBM() {
    var ifchannel = document.createElement("iframe");
    ifchannel.name = "channel_BM";
    ifchannel.id = "channel_BM";
    ifchannel.style.visibility = "hide";
    ifchannel.style.width = "1px";
    ifchannel.style.height = "1px";
    top.d_act.document.head.appendChild(ifchannel);

    var parseBM = function () {
        var el = top.d_act.frames["channel_BM"];
        var jq = el.jQuery;
        var els = jq("table tr td[style=\"padding-left:134px;width:190px\"]")
        if (top.d_act.mags == undefined) {
            top.d_act.mags = []
        }
        if (top.d_act.magsCode == undefined) {
            top.d_act.magsCode = []
        }
        for (var i = 0; i < els.length; i++) {
            if (top.d_act.mags[els[i].innerText.trim()] === undefined) {
                top.d_act.mags[els[i].innerText.trim()] = 0;
            }
            //     console.log(top.d_act.mags[els[i].innerText.trim()]);
            top.d_act.mags[els[i].innerText.trim()] = Number(top.d_act.mags[els[i].innerText.trim()]) + 1;
            top.d_act.magsCode[els[i].innerText.trim()] = els[i].nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
        }
        var but = jq("button[title='Следующая']")
        if (but.length > 0) {
            but.click();
        } else {
            top.d_act.showBM(top.d_act.mags,top.d_act.magsCode);
            var el = top.d_act.document.getElementsByTagName("iframe")["channel_BM"]
            el.remove()
        }
    };
    var a_iframe = top.d_act.document.getElementsByTagName("iframe")["channel_BM"];
    a_iframe.onload = function () {
        setTimeout(parseBM, 500)
    };
    a_iframe.contentDocument.location = '/bmbook.chtml'
}

parseBM();
