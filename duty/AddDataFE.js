function myAddDataFE(changes, skipupd) {
    // При наличии данных о бое во фрейме выполняет изменения по логу
    //переделанная под мои нужды функция
    var uniq_nmb;
    var pers;
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
 //       if (row.chng) console.log(row.act + ' ' + UserOut(row.chng[0]))
        switch (row.act) {
            // Собираем лог
        case 18:
            // Завершение боя
            AddLogRecord('', "<b>Бой завершен</b>");
            break;
        case 19:
            // Получение опыта
            console.log(row.chng[0].unb + ' ' + top.persID)
            if(row.chng[0].unb==top.persID){
            	top.activity(top.persID, 4, top.getLoc, 0, row.nmb)
            }
            AddLogRecord('', UserOut(row.chng[0]) + ' получил ' + row.nmb + ' опыта');
            break;
        default:
            break;
        }
        uniq_nmb++;
    }
    ApplyLogChanges();
     if (location.host == "newforest.apeha.ru") {
     	top.location.reload();
     }
}

