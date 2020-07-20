var chatIframe = top.frames["d_chatact"];
var chatIframeWin = chatIframe.window;

var TimeShiftTxt = "";
var TimeShiftShow = false;
var timeshift = 0;
var startKraft1TimeoutId = null,
    startKraft3TimeoutId = null,
    startSearchTimeoutId = null,
    gasimovTimeoutId = null,
    changeDirectionTimeoutId = null;
var ResEnd = 0;

var sellTrav = [76, 78, 81, 87, 90, 95]; // 76 сундук
var sellTravTitle = ["Бессмертник","Дуб","Клен","Первоцвет","Шалфей"];
var sellTravMiss = [78, 81, 87, 95];
var ChangeNapr = 0;
var marshrut = [];
var indexTrav = [];
var coorsTrav = [];
var allTrav = [];
var sundOnly = true;
var travnik = true;
var travMC = false;
var goToTrav = false;
var autoSearch = false;
var autoJob = false;
var resAutoGo = false;
var autoGo = false;
var currentPosition = "";
var attemptsToChangePosition = 0;
var maxAttepmtsForNewPosition = 5;
var destGox = 0;
var destGoy = 0;
var travGox = 0;
var travGoy = 0;
var to4kaGoX = 0;
var to4kaGoY = 0;
var signX = 0;
var signY = 0;
var myLocx=0;
var myLocy=0;
var myPers = global_data.my_group.sostav.leader;
var my_id = +myPers.id;
var my_gr_id = +global_data.my_group.sub_type;

var autoGoCount=0;
if(my_test_move==0) {
newClientForestTest("move_act","btn");
trava(0);
}
var log_text=""
+"<div id=\"boxCoorsList\" style=\"margin-top:-6px;margin-left:140px;width:155px;height:155px;font-size:8pt;"
+"background-color:#FFEEC0;border:dashed 1px black;display:none;position:absolute\">"
+"<div id=\"updatePointsBtn\" style=\"width:45px;height:12px;font-family:Arial;font-size:8pt;"
+"background-color:#FFEEC0;border:dashed 1px silver;"
+"margin-top:155px;margin-left:1px;padding-left:2px;padding-bottom:2px;"
+"cursor:hand;cursor:pointer;position:absolute;\" "
+my_element_hover_2+">Создать</div>"
+"<table border=0 width=100% height=100%><tr><td width=100% style=text-align:center;>"
+"<strong>Маршрут движения</strong><br>"
+"<textarea id=\"newCoorsList\" style=\"width:140px;height:130px;font-size:8pt;padding-left:2px;"
+"background-color:#FFEEC0;overflow:auto;resize:none;\" placeholder=\" x:y \n x:y \n ...\">"
+"</textarea>"
+"</td></tr></table>"
+"</div>"
+"<div style=\"margin-left:-1px;margin-top:80px;width:52px;height:14px;padding:0px;"
+"background-color:#FFEEC0;border:solid 1px black;cursor:pointer;position:absolute;overflow:hidden;\">"
+"<input type=\"text\" id=\"mypos\" value=\"\" style=\"width:52px;height:12px;font-size:7pt;"
+"margin-top:0px;margin-left:0px;margin-bottom:0px;padding-top:0px;padding-left:1px;padding-bottom:0px;"
+"background-color:#FFEEC0;border:1px solid #FFEEC0;\" placeholder=\"Здесь X:Y\">"
+"</div>"
+"<div style=\"margin-left:54px;margin-top:80px;width:52px;height:14px;padding:0px;"
+"background-color:#FFEEC0;border:solid 1px black;cursor:pointer;position:absolute;overflow:hidden;\">"
+"<input type=\"text\" id=\"selpos\" value=\"\" style=\"margin:0px;width:52px;height:12px;font-size:7pt;"
+"margin-top:0px;margin-left:0px;margin-bottom:0px;padding-top:0px;padding-left:1px;padding-bottom:0px;"
+"background-color:#FFEEC0;border:1px solid #FFEEC0;\" placeholder=\"Курсор X:Y\" "
+"onmouseover=\"this.focus();this.select()\">"
+"</div>"
+"<div style=\"margin-left:54px;margin-top:0px;width:52px;height:14px;padding:0px;"
+"background-color:#FFEEC0;border:solid 1px black;cursor:pointer;position:absolute;overflow:hidden;\">"
+"<input type=\"text\" id=\"destinationXY\" value=\"\" style=\"width:52px;height:12px;font-size:7pt;"
+"margin-top:0px;margin-left:0px;margin-bottom:0px;padding-top:0px;padding-left:1px;padding-bottom:0px;"
+"color:blue;background-color:#FFEEC0;border:1px solid #FFEEC0;\" placeholder=\"Куда X:Y\" title=\"Куда X:Y\" "
+"onmouseover=\"this.focus();this.select()\">"
+"</div>"
+"<div id=\"destGoBtn\" style=\"margin-left:-1px;margin-top:0px;width:25px;height:13px;font-size:8pt;"
+"padding-top:1px;padding-left:2px;overflow:hidden;cursor:pointer;position:absolute;"
+"color:blue;background-color:#FFEEC0;border:solid 1px black;\" "
+"onclick=\"toggleDestGo();\" "+my_element_hover_1+">"
+"Go"
+"</div>"
+"<div id=\"routePointsCount\" style=\"margin-left:29px;margin-top:0px;width:20px;height:13px;"
+"padding-top:1px;padding-left:2px;cursor:pointer;position:absolute;overflow:hidden;"
+"background-color:#FFEEC0;border:solid 1px black;\" "
+"onclick=\"showModalToAddPoints()\" "+my_element_hover_1+" title=\"Маршрут движения\">"
+"0"
+"</div>"
+"<div id=\"distansGo\" style=\"margin-top:18px;width:105px;height:10px;font-size:7pt;"
+"background-color:#D4D0C8;border:1px solid #D4D0C8;overflow:hidden;\" title=\"Расстояние до координат\">"
+"-"
+"</div>"
+"<div id=\"coorsGo\" style=\"width:105px;font-size:7pt;"
+"background-color:white;border:1px solid white;\" title=\"Шаги\">"
+"-"
+"</div>"
+"<div id=\"mcGo\" style=\"width:105px;font-size:7pt;"
+"background-color:white;border:1px solid white;box-shadow:0 0 10px rgba(0,0,0,0.5);\" title=\"Находки\">"
+"<span id=LA5>-</span>"
+"</div>";
log_msg(log_text,4);

function MyCursor(id) {
for(i in global_data.base_items) {
if(global_data.base_items[i].id==id) {
Client.selected=id;
animate["kursor"].x=global_data.base_items[i].x;
animate["kursor"].y=global_data.base_items[i].y;
break;
}}
}

var ph_count=14;
function phCount() {
ph_count++;
document.getElementById("infob").innerHTML=ph_count;
if(ph_count==14) return;
setTimeout("phCount()",1000);
}

// фича с присасыванием к чату и его обработка
chatIframeWin.Client.decode = function(e) {
    var str = JSON.parse(e);
    pars_log(str);
    return str;
};
function showModalToAddPoints() {
var MyRoute="";
document.getElementById("boxCoorsList").style.display="";
if(autoGo) return;
if(marshrut.length > 0) {
for(var i = 0, len = marshrut.length; i < len; i++) {
MyRoute+=marshrut[i][0]+":"+ marshrut[i][1]+"\r\n";
}}
document.getElementById("newCoorsList").value=MyRoute;
jQuery("#updatePointsBtn").click(updatePoints);
}
function updatePoints() {
    marshrut = [];
    document.getElementById("routePointsCount").innerHTML="0";
    parsePoints(document.getElementById("newCoorsList").value);
}
function parsePoints(pointsStr) {
    var pointsList = pointsStr.split(/\s+/);
    var routePointsCountEl = document.getElementById("routePointsCount");
    for (var i = 0, len = pointsList.length, points, dd; i < len; i++) {
        points = pointsList[i].split(/[:x]/);
        if (points.length !== 2) {
            continue;
        }
        if (isNumeric(points[0]) && isNumeric(points[1])) {
            marshrut.push([points[0], points[1]]);

            dd =+ routePointsCountEl.innerHTML;
            routePointsCountEl.innerHTML = ""+(dd+1);
        }
    }
    var tmpMarshT = marshrut.shift();
    document.getElementById("destinationXY").value = tmpMarshT[0]+":"+tmpMarshT[1];
    document.getElementById("boxCoorsList").style.display="none";
}
function sendWSMessage(cellID, description) {
 console.log(description, cellID);
 if(MoveBoxCell[cellID]) {
 if(MoveBoxCell[cellID]>3) return;
 MoveBoxCell[cellID]++;
 }
 Client.send("actNewMaps-GotoKletka="+cellID);
}
function toggleDestGo() {
    var destGoBtn = document.getElementById("destGoBtn");
    if (autoGo) {
        destGoBtn.innerHTML = "Go";
        destGoBtn.style.color = "blue";
        MoveBoxCell=new Array();
        indexTrav = [];
        coorsTrav = [];
        allTrav = [];
        to4kaGoX = 0;
        to4kaGoY = 0;
        autoGoCount=0;
    } else {
        destGoBtn.innerHTML = "Stop";
        destGoBtn.style.color = "red";
        MoveBoxCell=new Array();
        indexTrav = [];
        coorsTrav = [];
        allTrav = [];
        to4kaGoX = 0;
        to4kaGoY = 0;
    }
    autoGo = !autoGo;
}
function getReadableTime(ms) {
    var minutes = Math.floor(ms / 60 / 1000);
    var seconds = Math.floor(ms / 1000) - minutes * 60;
    return minutes + " мин. " + seconds + " сек.";
}
function getRandomInt(min, max, isLong) {
    if (isLong) {
        var randomNumber = Math.random() * 100;
        var bigDelay = +document.getElementById("bigDelay").value;
        bigDelay = isNaN(bigDelay) ? 3 : bigDelay;
        if (randomNumber > 100 - bigDelay) {
            timeshift = Math.floor(Math.random() * (300000 + 1)) + 300000;
            //17
        } else {
            timeshift = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    } else {
        timeshift = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log("Задержка - "+getReadableTime(timeshift));
    TimeShiftShow = true;
    return timeshift;
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function getDestinationPoint() {
    var destinationPoints = document.getElementById("destinationXY").value.split(/[:x]/);
    if (destinationPoints.length !== 2) {
        return null;
    }
    if (!isNumeric(destinationPoints[0]) || !isNumeric(destinationPoints[1])) {
        return null;
    }
    return {
        x: +destinationPoints[0],
        y: +destinationPoints[1]
    };
}
function autoGoFunc(destinationX, destinationY) {
    if (travnik) {
        if (!goToTrav) {
            var tmpIndexGrass = indexTrav.shift();
            if (tmpIndexGrass !== undefined) {
                var grassObj = coorsTrav[tmpIndexGrass];
                travGox = grassObj[0];
                travGoy = grassObj[1];
                var grassTitle = grassObj[2];
                goToTrav = true;
                autoGoCount++;
                var lootColor="chocolate";
                if(sellTravTitle.indexOf(grassTitle)>=0) lootColor="green";
                var log_text="<span style=color:blue>"+autoGoCount+"</span>:";
                log_msg(log_text+"<strong style=color:"+lootColor+";>"+grassTitle+" "+travGox+":"+travGoy+"</strong><br>",5);
                if(grassTitle=="Сундук") playHome("message_mail","mp3","audio");
                if(grassTitle=="Клен" || grassTitle=="Дуб") {
                playHome("geo_success","mp3","audio_rr");
                } else if(lootColor=="green"){playHome("geo_fail","mp3","audio_rr");}
            }
        }
        if (goToTrav) {
            destinationX = travGox;
            destinationY = travGoy;
        }
    }
    var shag = [[6, 6], [12, 6], [12, 12]];
    var size = jQuery('#viewmode').val();
    var shagX = shag[size][0];
    var shagY = shag[size][1];
    var myGroupX = +global_data.my_group.posx;
    var myGroupY = +global_data.my_group.posy;

    var shagovX = Math.abs(destinationX - myGroupX) / shagX;
    var shagovY = Math.abs(destinationY - myGroupY) / shagY;
    signX = Math.sign(destinationX - myGroupX);
    signY = Math.sign(destinationY - myGroupY);

    var shagDelta = shagovX / shagovY;

    if (shagDelta > 1) {
        shagY = Math.round(shagY / shagDelta);
    } else {
        shagX = Math.round(shagX * shagDelta);
    }

    if (Math.abs(destinationX - myGroupX) < shag[size][0]) {
        shagX = Math.abs(destinationX - myGroupX);
    } else {
        shagX = Math.floor(Math.random() * (shagX - 2 + 1)) + 2;
    }
    if (Math.abs(destinationY - myGroupY) < shag[size][1]) {
        shagY = Math.abs(destinationY - myGroupY);
    } else {
        shagY = Math.floor(Math.random() * (shagY - 2 + 1)) + 2;
    }
    to4kaGoX = myGroupX + (signX * shagX);
    to4kaGoY = myGroupY + (signY * shagY);
    autoGoCount++;
    var log_text="<span id=SmokeBreak></span><span style=color:blue>"+autoGoCount+"</span>:";
    document.getElementById("coorsGo").innerHTML=log_text+"След.т. "+to4kaGoX+":"+to4kaGoY+"<br>";

    var to4ka = to4kaGoX + (to4kaGoY - 1) * 6000;
    if (to4kaGoX === destinationX && to4kaGoY === destinationY && goToTrav === false) {
        var tmpMarshT = marshrut.shift();
        if (tmpMarshT === undefined) {
            autoGoCount=0;
            document.getElementById("coorsGo").innerHTML="<b>СТОП ходилка!</b><br>"
            +document.getElementById("coorsGo").innerHTML;
            playHome("research_complete","mp3","audio");
            toggleDestGo();
        } else {
            var routePointsCountEl = document.getElementById("routePointsCount");
            var dd = +routePointsCountEl.innerHTML;

            routePointsCountEl.innerHTML = ""+(dd-1);
            document.getElementById("destinationXY").value = tmpMarshT[0]+":"+tmpMarshT[1];
        }
    }
    MyCursor(to4ka);
    if(ph_count==14) {
    ph_count=0;
    phCount();
    playHome("Select2","mp3","audio_ff");
    }
    setTimeout(function() {
        sendWSMessage(to4ka, "autoGoFunc:: точка равна 0");
    }, getRandomInt(300, 800, false));
}

function isInTheSea() {
    var myPosY = global_data.my_group.posy;
    if (myPosY > 3000) {
        return true;
    }
    var myPosX = global_data.my_group.posx;
    return myPosY > 2250 && myPosX > 4500;
}
function saveTrav(itemTitle,item) {
    if (allTrav.indexOf(item.id) < 0) {
        MoveBoxCell[item.id]=1;
        indexTrav.push(item.id);
        allTrav.push(item.id);
        coorsTrav[item.id] = [item.posx, item.posy, itemTitle];
    }
}
function SearchLog(obj) {
    if(obj !== undefined) {
        var addItems = obj.to_add_items;
        var imgBT = img_by_type;
        var trLocx =0;
        var trLocy =0;
        if(addItems !== undefined) {
            for(var j = 0; j < addItems.length; j++) {
                var item = addItems[j];
                var itemType = +item.type;
                if(itemType > 75 && itemType < 98) {
       	            trLocx = Math.floor(item.posx/1500);
		            trLocy = Math.floor(item.posy/750);
		            
                    var itemTitle = imgBT[itemType].title;
                    if((trLocx==myLocx&trLocy==myLocy)
                    	&((travnik && sundOnly && itemType === 76) 
                    	|| (travnik && !sundOnly && travMC && sellTrav.indexOf(itemType) >= 0)
                    	|| (travnik && !travMC && !sundOnly && (itemType !== 82 || isInTheSea())))
                    	)
                    	{
                    		saveTrav(itemTitle,item);
                    	}
                    var loot="loot"+item.posx+"_"+item.posy;
                    var toTake = allTrav.indexOf(item.id) > -1;
                    var msg = (toTake?"":"MIMO ")+itemTitle+" "+item.posx+"x"+item.posy+"<br>";
                    if(sellTravMiss.indexOf(itemType)>=0 && !document.getElementById(loot)) {
                    log_msg("<span id="+loot+" style=color:green; title="+item.id+">"+msg+"</span>",5);
                    }
                    if(sellTrav.indexOf(itemType)>=0) log_msg(msg,0);
                }
            }
        }
        if(obj.my_gr !== undefined) {
            jQuery("#mypos").val(obj.my_gr.posx+":"+obj.my_gr.posy);
            myLocx = Math.floor(obj.my_gr.posx/1500);
            myLocy = Math.floor(obj.my_gr.posy/750);
            if (autoGo) {
                var destinationPoints = getDestinationPoint();
                if(destinationPoints !== null) {
                    destGox = destinationPoints.x;
                    destGoy = destinationPoints.y;

                    if(destGox > 0 && destGoy > 0) {
                        if(
                            (indexTrav.length > 0 && !goToTrav)
                            || (+obj.my_gr.stay === 1)
                            || (Math.abs(obj.my_gr.posx - to4kaGoX) < 2 && Math.abs(obj.my_gr.posy - to4kaGoY) < 2)
                            || (to4kaGoX === 0 && to4kaGoY === 0)
                        ) {
                            var autoGoResDiv = document.getElementById("distansGo");
                            autoGoResDiv.innerHTML = "O: по х:"+(destGox-obj.my_gr.posx)+", по у:"+(destGoy-obj.my_gr.posy);
                            autoGoFunc(destGox, destGoy);
                        }
                    }
                } else {
                    toggleDestGo();
                }
            }
        }
    }
}
function getPersLocationHtml() {
    var mg = global_data.my_group;
    return "("+mg.posx +":"+mg.posy+", "+naprMap[mg.napr]+")";
}
function pars_log(str) {
    var t = "";
    var mgr = str.my_gr;
    var imgBT = img_by_type;
    var group_id = +str.group_id,
        flags = +str.flags,
        wait_event = + str.wait_event,
        to_cut = str.to_cut;

    if (flags === 11 && wait_event === 0 && group_id === my_gr_id) {
        t = str.txt;
    }

    if (flags === 9) {
        var resPosX = +str.item.posx;
        var resPosY = +str.item.posy;
        var type = +str.item.type;
        var myGrPosX = global_data.my_group.posx;
        var myGrPosY = global_data.my_group.posy;
        var deltaX = Math.abs(resPosX - myGrPosX);
        var deltaY = Math.abs(resPosY - myGrPosY);
        if (deltaX < 2 && deltaY < 2 && (type <= 75 || type >= 98)) {
            ResEndText = "<strong>Ресурс "+imgBT[type].title+" закончился</strong> "+getPersLocationHtml();
            ResEnd = 1;
            if (resAutoGo) {
                //16
            }
        }
        if (deltaX < 3 && deltaY < 3 && type > 75 && type < 98) {
            autoGoCount++;
            ResEndText = "<span style=color:blue>"+autoGoCount+"</span>:"
             +"<strong>"+imgBT[type].title+" забрал </strong>"+getPersLocationHtml()+"<br>";
            log_msg(ResEndText,5);
            goToTrav = false;
            var itemIndex = indexTrav.indexOf(str.item.id);
            if (itemIndex > -1) {
                indexTrav.splice(itemIndex, 1);
            }
        }
    }

    if (to_cut === null && ChangeNapr === 1 && startKraft1TimeoutId === null && !resAutoGo) {
        //15
    }
    if (to_cut === null && ChangeNapr === 1 && CanChangeNapr) {
        ChangeNapr = 0;
    }

    if((t !== "" && t !== undefined) && group_id === my_gr_id) {
        if((t === "Ничего не найдено" || t.indexOf("в радиусе 5 шагов от Вас") > 0) && startSearchTimeoutId === null) {
            //14
        } else if(t.indexOf("а также") > 0 && startSearchTimeoutId === null) {
            //13
        } else if(t.indexOf("прямо перед Вами") > 0 && startKraft1TimeoutId === null) {
            //12
        } else if(t.indexOf("слева от Вас") > 0 && changeDirectionTimeoutId === null) {
            if (resAutoGo) {
                //11
            } else {
                //10
            }
        } else if(t.indexOf("справа от Вас") > 0 && changeDirectionTimeoutId === null) {
            if (resAutoGo) {
                //9
            } else {
                //8
            }
        } else if(t.indexOf("вывихнули") > 0 && autoJob) {
            //7
        } else if(t.indexOf("Топор лесоруба") > 0 && autoJob) {
            //6
        } else if(t.indexOf("Кирка рудокопа") > 0 && autoJob) {
            //5
        } else {
            //4
        }
    }

    if (mgr !== undefined) {
        var sostav = mgr.sostav;
        if (sostav === undefined && flags === 11 && startKraft3TimeoutId === null && group_id === my_gr_id) {
            //3
            if (ResEnd === 1) {
                //2
            } else if (autoJob) {
                if (toolUsageCount > 0) {
                    // 1
                } else {
                    var resourceType = getCurrResourceType();
                    if (resourceType !== null) {
                        //0
                    }
                }

            }
        } else if (sostav !== undefined) {
            var leader_id = +mgr.sostav.leader.id;
            if (leader_id !== undefined) {
                if (leader_id === my_id) {
                    SearchLog(str);
                } else {
                    SearchLog(str);
                }
            }
        }
    }
}

//Profit!
var myVar = setInterval(myTimer, 1000);
function myTimer() {
if(autoGo) document.getElementById("boxCoorsList").style.display="none";
if(my_cfg_res_travy==20) {
travMC=true;
travnik=true;
sundOnly=false;
}
if(Client.selected>0 && Client.posx!==undefined) jQuery("#selpos").val(Client.posx+":"+Client.posy);
var GD = global_data;
var myGroup = GD.my_group;
    if(1 === +myGroup.stay && autoGo) {
        attemptsToChangePosition++;
        var myPosX = +myGroup.posx,
            myPosY = +myGroup.posy;
        var newPosition = myPosX+":"+myPosY;
        if(newPosition === currentPosition && attemptsToChangePosition >= maxAttepmtsForNewPosition) {
            // TODO: change new point and log error
            var message = "<strong>Не смог сдвинуться с "+newPosition+"</strong><br>";
            document.getElementById("SmokeBreak").innerHTML=message;
        } else {
            if (newPosition === currentPosition) {
                attemptsToChangePosition++;
            } else {
                currentPosition = newPosition;
                attemptsToChangePosition = 0;
            }
            if (to4kaGoY === 0 && to4kaGoX === 0) {
                var tmpNaprX = (Math.random() * 2 > 1) ? -1 : 1;
                var tmpNaprY = (Math.random() * 2 > 1) ? -1 : 1;

                var tmpShagX = Math.floor(Math.random() * (3)) + 1,
                    tmpShagY = Math.floor(Math.random() * (3)) + 1;
                var tmpPointX = myPosX + (tmpNaprX * tmpShagX),
                    tmpPointY = myPosY + (tmpNaprY * tmpShagY);
                var tmpPointId = tmpPointX + tmpPointY * 6000;
                MyCursor(tmpPointId);
                setTimeout(function() {
                sendWSMessage(tmpPointId, "myTimer::tmpto4ka  равна 0! GO TO: "+tmpPointX+":"+tmpPointY);
                }, getRandomInt(300, 800, false));
            } else {
                var destinationPoints = getDestinationPoint();
                if (destinationPoints !== null) {
                    destGox = destinationPoints.x;
                    destGoy = destinationPoints.y;
                }

                if (myPosX === to4kaGoX && myPosY === to4kaGoY) {
                    autoGoFunc(destGox, destGoy);
                } else {
                    if (signX === 0 && signY === 0) {
                        signX = Math.sign(destGox - myPosX);
                        signY = Math.sign(destGoy - myPosY);
                    }
                    to4kaGoX = to4kaGoX + (signX * (-1));
                    to4kaGoY = to4kaGoY + (signY * (-1));

                    autoGoCount++;
                    var log_text="<span id=SmokeBreak></span><span style=color:blue>"+autoGoCount+"</span>:";
                    document.getElementById("coorsGo").innerHTML=log_text+"След.т. "+to4kaGoX+"x"+to4kaGoY+"<br>";
                    var to4ka = to4kaGoX + (to4kaGoY - 1) * 6000;
                    MyCursor(to4ka);
                    setTimeout(function() {
                    sendWSMessage(to4ka, "myTimer::to4ka  равна 0!!! GO TO: "+to4kaGoX+":"+to4kaGoY);
                    }, getRandomInt(300, 800, false));
                }
            }
        }
    } else {
        attemptsToChangePosition = 0;
    }

}