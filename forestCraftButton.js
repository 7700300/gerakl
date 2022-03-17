var persIframe=top.frames[0];
var actIframe=top.frames[1];

var hostname_oil="7700300.github.io/vova.github.io/";
var LoadImg="<img src=\"https://"+hostname_oil+"/img/arrow/loading.gif\" width=16 height=16 border=0>";
var RTitle="";
var SMove=localStorage.getItem("MoveStory");
var RHandUp=localStorage.getItem("HandStory");
var lvlAhtung=localStorage.getItem("AhtungStory");
var save_map_five=localStorage.getItem("FiveStory");
var zAudio=1;
var nAudio=0;
var TaskRule=0;
RoadMap=new Array();


var my_element_hover_0="onmouseover=\"this.style.fontSize='12px';\" onmouseout=\"this.style.fontSize='10px';\" style=\"cursor:pointer;\"";
var my_element_hover_1="onmouseover=\"this.style.backgroundColor='gold';\" onmouseout=\"this.style.backgroundColor='#FFEEC0';\"";
var my_element_hover_2="onmouseover=\"this.style.borderColor='red';\" onmouseout=\"this.style.borderColor='silver';\"";
var my_element_hover_3="onmouseover=\"this.style.fontSize='11px';\" onmouseout=\"this.style.fontSize='10px';\" style=\"color:black;background-color:white;cursor:pointer;\"";

function sendError(msg) {
var xhr = (window.XMLHttpRequest && !window.ActiveXObject) ? function() {
return new window.XMLHttpRequest();} : function() {
try {return new window.ActiveXObject('Microsoft.XMLHTTP');} catch(e) {return null}};
xhr = xhr();
if (!xhr) return null;
//xhr.open('POST', "/myerror.html", true);
//xhr.send('err='+encodeURIComponent(msg));
console.log('err='+encodeURIComponent(msg));
}

function AddJS(a,name) {
if(a==0) {
var script=document.createElement("script");
script.type="text/javascript";
script.src="https://"+hostname_oil+"/"+name+"?xdac="+Math.random();
document.body.appendChild(script);
}
}
function AddIFrame(name) {
var ifchannel=document.createElement("iframe");
ifchannel.name=name;
ifchannel.id=name;
ifchannel.style.visibility="hidden";
ifchannel.style.width="1px";
ifchannel.style.height="1px";
document.body.appendChild(ifchannel);
}
function AddElement(tag,name) {
var my_element=document.createElement(tag);
my_element.id=name;
document.body.appendChild(my_element);
}

function NewButton(a,width,color,brColor,bgColor,hovColor,txt,click,title,id) {
if(a==0) {
return "<button id=\""+id+"\" style=\"margin-right:4px;width:"+width+";font-size:12px;font-family:Arial;"
+"color:"+color+";background-color:"+bgColor+";border:1px solid "+brColor+";"
+"padding:0px;cursor:hand;cursor:pointer;\" onclick=\""+click+"return false;\" "
+"onmouseover=\"info(1,this,'"+hovColor+"');\" onmouseout=\"endi(this,'"+bgColor+"');\" "
+"title=\""+title+"\">"+txt+"</button>";
}
}
/* DDM */
var link=new Array();
link[0]="test|javascript:void(0);|to Click";
link[1]="test|javascript:void(0);|&nbsp;";
N=(document.all) ? 0 : 1;
var ob;
var over=false;
var pname="";

function MD(e) {
if(over) {
if(N) {
ob=document.getElementById(pname);
X=e.layerX;
Y=e.layerY;
return false;
} else {
ob=document.getElementById(pname);
ob=ob.style;
X=event.offsetX;
Y=event.offsetY;
}}}
function MM(e) {
if(ob) {
if(N) {
ob.style.top=e.pageY-Y+'px';
ob.style.left=e.pageX-X+'px';
}
else {
ob.pixelLeft=event.clientX-X + document.body.scrollLeft;
ob.pixelTop=event.clientY-Y + document.body.scrollTop;
return false;
}}}
function MU() {
ob=null;
}
if(N) {
document.captureEvents(Event.MOUSEDOWN | Event.MOUSEMOVE | Event.MOUSEUP);
}
document.onmousedown=MD;
document.onmousemove=MM;
document.onmouseup=MU;

function getArray(id) {
var splitarray=link[id].split("|");
return splitarray;
}
function info(i,obj,col) {
sublink=getArray(i);
infobar=document.getElementById("infob");
infobar.innerHTML=sublink[2];
obj.style.backgroundColor=col;
}
function endi(obj,col) {
obj.style.backgroundColor=col;
infobar=document.getElementById("infob");
infobar.innerHTML="&nbsp;";
}
/* END-DDM */



/* TEST MENU */
var my_box_menu=""
+"<form name=MyCraft style=\"padding-top:0px;padding-right:0px;padding-left:0px;padding-bottom:0px;margin:0px;\">"
+"<div id=\"mfbico\" onmouseover=\"pname='panel';over=true;\" onmouseout=\"over=false;\" "
+"style=\"width:100%;font-size:12px;font-family:Arial Black;text-align:center;"
+"color:#FFEEC0;background:#A75738 url(https://"+hostname_oil+"/img/arrow/horse.png) no-repeat;"
+"border-bottom:1px solid #8A492F;cursor:move\">&#8226;My Forest Buttons&#8226;</div>"
+"<div style=\"width:100%;font-size:13px;font-family:Vardana;background-color:#FFEEC0;\">"
+"<table border=0>"
+"<tr>"

+"<td>"
+"<table border=0>"
+"<tr>"
+"<td id=\"napr8\" style=\"width:26px;height:22px;"
+"background:url(https://"+hostname_oil+"/img/arrow/WoodCrUpLeft.gif) no-repeat;\">8</td>"
+"<td id=\"napr1\" style=\"width:26px;height:22px;"
+"background:url(https://"+hostname_oil+"/img/arrow/WoodCrUp.gif) no-repeat;\">1</td>"
+"<td id=\"napr2\" style=\"width:26px;height:22px;"
+"background:url(https://"+hostname_oil+"/img/arrow/WoodCrUpRight.gif) no-repeat;\">2</td>"
+"</tr>"
+"<tr>"
+"<td id=\"napr7\" style=\"width:26px;height:22px;"
+"background:url(https://"+hostname_oil+"/img/arrow/WoodCrLeft.gif) no-repeat;\">7</td>"

+"<td id=WoodCr style=\"width:26px;height:22px;"
+"background:url(https://"+hostname_oil+"/img/arrow/wood_s.gif) no-repeat;\">"
+"<img src=\"https://"+hostname_oil+"/img/arrow/zero.gif\" border=0 width=14 height=14 "
+"style=\"margin-left:5px;margin-top:2px;cursor:pointer;\" onclick=\""
+"document.getElementById('log_box_0').innerHTML='<span id=LA0></span>';"
+"if(my_test_five==0 && my_test_one==0){"
+"newClientForestTest(2);"
+"}else{"
+"document.getElementById('modal_form').innerHTML='NaN';"
+"newClientForestTest(5);}\">"
+"</td>"

+"<td id=\"napr3\" style=\"width:26px;height:22px;"
+"background:url(https://"+hostname_oil+"/img/arrow/WoodCrRight.gif) no-repeat;\">3</td>"
+"</tr>"
+"<tr>"
+"<td id=\"napr6\" style=\"width:26px;height:22px;"
+"background:url(https://"+hostname_oil+"/img/arrow/WoodCrDownLeft.gif) no-repeat;\">6</td>"
+"<td id=\"napr5\" style=\"width:26px;height:22px;"
+"background:url(https://"+hostname_oil+"/img/arrow/WoodCrDown.gif) no-repeat;\">5</td>"
+"<td id=\"napr4\" style=\"width:26px;height:22px;"
+"background:url(https://"+hostname_oil+"/img/arrow/WoodCrDownRight.gif) no-repeat;\">4</td>"
+"</tr>"
+"<tr>"

+"<td id=\"cr0min\" style=\"width:26px;height:22px;color:#FEBE1E;font:bold normal 120% serif;text-align:center;"
+"background:url(https://"+hostname_oil+"/img/arrow/BoxEmpty.gif) no-repeat;\">00</td>"
+"<td id=WoodCr2 style=\"width:26px;height:22px;background:url(https://"+hostname_oil+"/img/arrow/WoodCr.gif) no-repeat;\">"
+"<img src=\"https://"+hostname_oil+"/img/arrow/zero.gif\" border=\"0\" width=\"14\" height=\"14\" "
+"style=\"margin-left:5px;margin-top:2px;cursor:pointer;\" "
+"onclick=\""
+"playHome('Teuton','mp3','audio_ff');"
+"newClientForestTest(3);"
+"newClientForestTest('work_stop');"
+"document.getElementById('modal_form').innerHTML='NaN';\" "
+"title=\"Start(w)\">"
+"</td>"
+"<td id=\"cr0sec\" style=\"width:26px;height:22px;"
+"color:#FEBE1E;background:url(https://"+hostname_oil+"/img/arrow/BoxEmpty.gif) no-repeat;"
+"text-align:center;font:bold normal 120% serif;\">00</td>"
+"</tr>"
+"</table>"

+"</td>"
+"<td>"
+"<div id=\"map_five\" style=\"margin-left:146px;width:155px;height:155px;"
+"background-color:#FFEEC0;border:dashed 1px black;position:absolute;display:none;\">"
+"<table border=0 width=100% height=100%><tr><td width=100%><p align=center>"
+"Area<br>Five-steps<br>Not loaded"
+"</td></tr></table>"
+"<div style=\"width:27px;height:12px;font-size:8pt;"
+"font-family:Arial;margin:1;padding-left:2px;padding-bottom:2px;"
+"background-color:#FFEEC0;border:dashed 1px black;cursor:hand;cursor:pointer;float:left;\" "
+"onclick=\"if(save_map_five.length!=0){this.style.visibility='hidden';"
+"document.getElementById('map_five').innerHTML=save_map_five;"
+"}else{this.innerHTML=0;}\" "+my_element_hover_2+">Load</div>"
+"</div>"

+"<div id=\"one_numSearch\" style=\"margin-top:87px;margin-left:34px;width:28px;height:15px;"
+"background-color:silver;border:dashed 1px red;display:none;position:absolute\">"
+"<select name=\"NumSearch\" style=\"width:28px;height:15px;"
+"color:#fc0;background:#2C4C0F;border:0px;font-size:10px;\" "
+"onChange=\"sNumCtrl.stop=this.value;\">"
+"<option value=1>1</option>"
+"<option value=2>2</option>"
+"<option value=3>3</option>"
+"<option value=4>4</option>"
+"<option value=5>5</option>"
+"<option value=6>6</option>"
+"<option value=7>7</option>"
+"</select>"
+"</div>"
+"<div id=\"one_harvester\" style=\"width:40px;height:15px;font-size:11px;font-family:Arial;"
+"color:#fc0;background-color:#484848;border:dashed 1px red;padding-left:2px;"
+"margin-top:87px;margin-left:68px;cursor:hand;display:none;position:absolute;cursor:pointer;\" "
+"onclick=\"newClientForestTest('harvester_act');\">"
+"Harvest"
+"</div>"

+"<div id=\"log_tab_0\" style=\"margin-left:6px;margin-top:-4px;width:7px;height:7px;"
+"background-color:gold;border:solid 1px black;cursor:pointer;position:absolute\" "
+"onclick=\"this.alt=1;newClientForestTest('log_tab');\" alt=\"0\"></div>"
+"<div id=\"log_tab_1\" style=\"margin-left:18px;margin-top:-4px;width:7px;height:7px;"
+"background-color:#FFEEC0;border:solid 1px black;cursor:pointer;position:absolute\" "
+"onclick=\"this.alt=1;newClientForestTest('log_tab');\" alt=\"0\"></div>"
+"<div id=\"log_tab_2\" style=\"margin-left:30px;margin-top:-4px;width:7px;height:7px;"
+"background-color:#FFEEC0;border:solid 1px black;cursor:pointer;position:absolute\" "
+"onclick=\"this.alt=1;newClientForestTest('log_tab');\" alt=\"0\"></div>"
+"<div id=\"log_tab_3\" style=\"margin-left:42px;margin-top:-4px;width:7px;height:7px;"
+"background-color:#FFEEC0;border:solid 1px black;cursor:pointer;position:absolute\" "
+"onclick=\"this.alt=1;newClientForestTest('log_tab');\" alt=\"0\"></div>"
+"<div id=\"log_tab_4\" style=\"margin-left:54px;margin-top:-4px;width:7px;height:7px;"
+"background-color:#FFEEC0;border:solid 1px blue;cursor:pointer;position:absolute\" "
+"onclick=\"this.alt=1;newClientForestTest('log_tab');\" alt=\"0\"></div>"

+"<div id=\"my_reverse\" style=\"margin-left:73px;margin-top:44px;width:37px;height:14px;font-size:11px;"
+"background-color:#FFEEC0;border:solid 1px black;padding-left:3px;cursor:pointer;position:absolute;display:none;\" "
+"onclick=\"MyRoad.reverse();this.style.display='none';if(my_road_step_color=='#FEBE1E'){my_road_step_color='limegreen';"
+"}else{my_road_step_color='#FEBE1E'}\" "+my_element_hover_1+" alt=\"0\">Reverse</div>"
+"<div style=\"margin-left:73px;margin-top:61px;width:37px;height:14px;background-color:#FFEEC0;border:solid 1px black;font-size:11px !important;padding-left:3px;cursor:pointer;position:absolute;display:none;\" onclick=\"document.getElementById('my_reverse').style.display='';this.innerHTML=-1;\" alt=\"0\" id=\"my_clean\" "+my_element_hover_1+">Step:0</div>"
+"<div style=\"margin-left:73px;margin-top:78px;width:35px;height:14px;background-color:#FFEEC0;border:solid 1px black;font-size:11px !important;padding-left:5px;cursor:pointer;position:absolute;display:none;\" onclick=\"MyRoadConvert(3);\" alt=\"0\" id=\"my_road\" "+my_element_hover_1+">Cell.id</div>"

+"<div id=\"log_box_0\" style=\"width:125px;height:90px;font-size:10px;padding-left:5px;padding-top:5px;"
+"color:#FEBE1E;background:#2C4C0F;border:solid 1px black;overflow-x:hidden;overflow-y:auto;\">"
+"<span id=LA0></span>LOG<br>"
+"25x25 click Reset<br>"
+"Слабоумие и отвага<br>"
+"<span onclick=\"trava(1);\">Травник 5т.</span><br>"
+"&#189;-левый/правый клик<br>"
+"Яндекс.Браузер<br>"
+"DutyApe (getcapt.php)"
+"</div>"
+"<div id=\"log_box_1\" style=\"width:125px;height:90px;padding-left:5px;padding-top:5px;font-size:10px;"
+"border:solid 1px black;overflow-x:hidden;overflow-y:auto;display:none;\">"
+"<span id=LA1></span>MY-ROAD-CELL&#189;"
+"</div>"
+"<div id=\"log_box_2\" style=\"width:125px;height:90px;font-size:10px;padding-left:5px;padding-top:5px;"
+"border:solid 1px black;overflow-x:hidden;overflow-y:auto;display:none;\">"
+"<div id=\"road_map\" style=\"margin-left:4px;margin-top:53px;width:17px;height:14px;"
+"background:url(https://"+hostname_oil+"/img/arrow/ico_file_a.gif) no-repeat white;position:absolute;cursor:pointer;\">"
+"<img border=0 src=https://"+hostname_oil+"/img/arrow/ico_file_a.gif width=17 height=14 "
+"style=\"cursor:pointer;\" onclick=\"AddJS(0,'fcbRoadMap.js');"
+"document.getElementById('road_map').innerHTML='"
+"<img border=0 src=https://"+hostname_oil+"/img/arrow/loading.gif width=10 height=10 "
+"style=padding-left:3px;padding-top:3px;>';\"></div>"
+"<TEXTAREA name=\"convertText\" style=\"width:110px;height:65px;font-size:11px;resize:none;\" "
+"onmouseover=\"this.focus();this.select()\">"
+"</TEXTAREA>::MY-ROAD::"
+"<span id=\"my-road-convert-get\" style=\"width:25px;height:14px;font-size:11px;"
+"background-color:#FFEEC0;border:solid 1px black;padding-left:5px;cursor:pointer;\" "
+"onclick=\"MyRoadConvert(0);\" "+my_element_hover_1+">GET</span>"
+"<span id=\"my-road-convert-set\" style=\"margin-left:3px;width:25px;height:14px;font-size:11px;"
+"background-color:#FFEEC0;border:solid 1px black;padding-left:5px;cursor:pointer;\" "
+"onclick=\"MyRoadConvert(1);\" oncontextmenu=\"MyRoadConvert(4);return false;\" "
+my_element_hover_1+">SET</span>"
+"</div>"

+"<div id=\"log_box_3\" style=\"width:125px;height:90px;font-size:12px;font-family:Arial;"
+"border:solid 1px black;padding-left:5px;padding-top:5px;overflow-x:hidden;overflow-y:auto;display:none;\">"
+"move"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('moveMax').style.color='black';"
+"localStorage['MoveStory']=0;"
+"Rca_Cell[420]={cell:[29,28,1,30,29,28,1,30],move:[0,275,280,425,570,565,560,415,270]};"
+"\" style=\"cursor:pointer;\" id=\"moveMin\">min</span>"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('moveMin').style.color='black';"
+"localStorage['MoveStory']=1;"
+"Rca_Cell[420]={cell:[29,28,1,30,29,28,1,30],move:[0,72,84,432,780,768,756,408,60]};"
+"\" style=\"color:red;cursor:pointer;\" id=\"moveMax\">max</span><br>"
+"hand"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('handMax').style.color='black';"
+"RHandUp=0;"
+"localStorage['HandStory']=0;"
+"\" style=\"color:red;cursor:pointer;\" id=\"handMin\">click</span>"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('handMin').style.color='black';"
+"RHandUp=1;"
+"localStorage['HandStory']=1;"
+"\" style=\"cursor:pointer;\" id=\"handMax\">auto</span><br>"
+"ahtung"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('ahtungMax').style.color='black';"
+"lvlAhtung=0;"
+"localStorage['AhtungStory']=0;"
+"\" style=\"cursor:pointer;\" id=\"ahtungMin\">user</span>"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('ahtungMin').style.color='black';"
+"lvlAhtung=1;"
+"localStorage['AhtungStory']=1;"
+"\" style=\"color:red;cursor:pointer;\" id=\"ahtungMax\">all</span><br>"
+"audio"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('audioMax').style.color='black';"
+"zAudio=0;"
+"\" style=\"cursor:pointer;\" id=\"audioMin\">min</span>"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('audioMin').style.color='black';"
+"zAudio=1;"
+"\" style=\"color:red;cursor:pointer;\" id=\"audioMax\">max</span><br>"
+"task"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('taskMax').style.color='black';"
+"document.getElementById('taskNull').style.color='black';"
+"TaskRule=0;"
+"TaskReg[0]=new RegExp('(дуб|сосна|железо|медь|золото|красное дерево)(.+)');"
+"TaskReg[1]=new RegExp('(дуб|сосна|железо|медь|золото|красное дерево) (прямо|слева|справа)(.+)');"
+"\" style=\"color:red;cursor:pointer;\" id=\"taskMin\">true</span>"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('taskMin').style.color='black';"
+"document.getElementById('taskNull').style.color='black';"
+"TaskRule=1;"
+"TaskReg[1]=new RegExp('(дуб|сосна|железо|медь|золото|красное дерево) (в радиусе|прямо|слева|справа)(.+)');"
+"\" style=\"cursor:pointer;\" id=\"taskMax\">false</span>"
+"-<span onclick=\""
+"this.style.color='red';"
+"document.getElementById('taskMin').style.color='black';"
+"document.getElementById('taskMax').style.color='black';"
+"TaskRule=2;"
+"TaskReg[1]=new RegExp('(Ничего не найдено)|((дуб|сосна|железо|медь|золото|красное дерево) (в радиусе|прямо|слева|справа)(.+))');"
+"\" style=\"cursor:pointer;\" id=\"taskNull\">null</span><br>"
+"<span onclick=\""
+"if(nAudio==0){"
+"nAudio=1;this.style.color='red';"
+"}else{"
+"nAudio=0;this.style.color='black';}\" "
+"style=\"color:black;cursor:pointer;\">"
+"#AudioNight"
+"</span>"
+"</div>"

+"<div id=\"log_box_4\" style=\"width:125px;height:90px;font-size:10px;font-family:Arial;"
+"border:solid 1px black;padding-left:5px;padding-top:5px;display:none;overflow-x:hidden;overflow-y:scroll;\">"
+"<div style=\"width:50px;height:30px;font-size:11px;padding-left:3px;"
+"background-color:#FFEEC0;border:solid 1px black;cursor:pointer;\" "
+"onclick=\"document.getElementById('log_box_4').innerHTML='<span id=LA4></span>';AddJS(0,'DutyApe_autoGo.js');\" "
+my_element_hover_1+">DutyApe {autoGo}</div>"
+"</div>"
+"</td>"
+"</tr>"
+"<tr>"

+"<td colspan=2>"
+"<button id=\"MyReset\" style=\"margin-right:4px;width:45px;padding:0px;font-size:12px;font-family:Arial;"
+"color:#FEBE1E;background-color:#2C4C0F;border:1px solid black;cursor:hand;cursor:pointer;\" "
+"onclick=\"ClientReset(0);return false;\" onmouseover=\"info(1,this,'#2C4C0F');\" onmouseout=\"endi(this,'#2C4C0F');\" "
+"oncontextmenu=\"ClientReset(1);return false;\">Reset&#189;</button>"
+NewButton(0,"40px","#FEBE1E","black","#2C4C0F","#2C4C0F","Move","newClientForestTest('move_act','btn');trava(0);","","my_move")
+NewButton(0,"35px","#FEBE1E","black","#2C4C0F","#2C4C0F","Five","newClientForestTest('five_act');","","my_five")
+NewButton(0,"30px","#FEBE1E","black","#2C4C0F","#2C4C0F","One","newClientForestTest('one_act');","","my_one")
+NewButton(0,"45px","#FEBE1E","black","#2C4C0F","#2C4C0F","Ahtung","newClientForestTest('ahtung_act');","","my_ahtung")
+NewButton(0,"15px","#FEBE1E","black","#2C4C0F","#2C4C0F","+","newClientForestTest('cfg_res_act');","","my_cfg_res")
+"</td>"
+"</tr>"
+"<tr id=\"my_cfg_res_panel\" style=\"display:none\">"
+"<td colspan=\"2\">"
+NewButton(0,"45px","red","black","#2C4C0F","#2C4C0F","Сосна","newClientForestTest('cfg_sosna_act');","","my_cfg_sosna")
+NewButton(0,"32px","red","black","#2C4C0F","#2C4C0F","Дуб","newClientForestTest('cfg_dub_act');","","my_cfg_dub")
+NewButton(0,"40px","red","black","#2C4C0F","#2C4C0F","Медь","newClientForestTest('cfg_med_act');","","my_cfg_med")
+NewButton(0,"57px","red","black","#2C4C0F","#2C4C0F","Железо","newClientForestTest('cfg_zhelez_act');","","my_cfg_zhelez")
+NewButton(0,"37px","red","black","#2C4C0F","#2C4C0F","Other","newClientForestTest('cfg_other_act');","","my_cfg_other")
+"</td>"
+"</tr>"
+"</table>"
+"</form></div>"
+"<div style=\"width:100%;font-size:13px;font-family:Vardana;background-color:#FFEEC0;\"></div>"

+"<div id=\"my_loader\" style=\"margin-left:159px;width:30px;height:16px;"
+"background-image:url(https://"+hostname_oil+"/img/ico_yandex_loader.gif);border:solid 1px #8A492F;"
+"font-size:11px;cursor:pointer;position:absolute;display:none;overflow:hidden;\" "
+"onclick=\"this.style.display='none';MoveBoxCell=new Array();clearTimeout(tmID[0]);clearTimeout(tmID[2]);clearTimeout(tmID[3]);\" "
+"title=\"Progress..\">100%</div>"

+"<div id=\"my_road_cell_available\" style=\"margin-left:190px;padding:2px;width:45px;height:12px;font-size:11px;"
+"background-color:#FCE1A3;border:solid 1px #8A492F;cursor:pointer;position:absolute;overflow:hidden;\" "
+my_element_hover_1+">No-Road</div>"

+"<div id=\"infob\" style=\"width:100%;font-color:#33CCAA;font-size:13px;font-family:vardana;"
+"background-color:#FCE1A3;border-top:1px solid #8A492F;\">&nbsp;</div>";
/* END-TEST-MENU */


/* TEST FUN */
/* TEST FUN */
/* TEST FUN */
/* TEST FUN */
/* TEST FUN */
/* TEST FUN */
/* TEST FUN */

var naprMap={
"1":"&uarr;",
"2":"&nearr;",
"3":"&rarr;",
"4":"&searr;",
"5":"&darr;",
"6":"&swarr;",
"7":"&larr;",
"8":"&nwarr;"
};

var captcha_count=0;
var parm_event_wait=0;
var road_dt=0;
var move_dt=0;
var search_dt=0;
var work_dt=0;
var my_test_harvester=0;
var my_test_harvester_move_napr=0;
var my_test_ahtung=0;
var my_test_ahtung_msg="";
var my_test_five_center=0;
var my_test_five_lostID=0;
var my_test_five=0;
var my_test_move_point=0;
var my_test_move_napr=0;
var my_test_move=0;
var my_test_move_count=0;
var my_resource_id=-1;
var my_test_one=0;

var my_test_cfg_res=0;
var my_cfg_res_sosna=1;
var my_cfg_res_dub=1;
var my_cfg_res_med=1;
var my_cfg_res_zhelez=1;
var my_cfg_res_other=1;
var my_cfg_res_travy=0;

var ResType=[];
ResType[0]=[8,29]; // сосна
ResType[1]=[5,9,27,30]; // дуб
ResType[2]=[74,75,104,105,106]; // медь
ResType[3]=[70,71,72,73,107,108,109,110,111,112,113]; // железо
TaskReg=new Array();
TaskReg[0]=new RegExp("(дуб|сосна|железо|медь|золото|красное дерево)(.+)");
TaskReg[1]=new RegExp("(дуб|сосна|железо|медь|золото|красное дерево) (прямо|слева|справа)(.+)");
TaskReg[2]=new RegExp("так же (дуб|сосна|железо|медь|золото|красное дерево) (прямо|слева|справа)");
ahtung_list=Array();
var chase_list=0;
var tmID=Array();
Rca_Cell=new Array();
Rca_Cell[144]={cell:[17,16,1,18,17,16,1,18],move:[0,0,0,0,0,0,0,0,0]};
Rca_Cell[420]={cell:[29,28,1,30,29,28,1,30],move:[0,72,84,432,780,768,756,408,60]};
move_cell_try=new Array();
move_cell_try[275]=101; move_cell_try[72]=246;
move_cell_try[280]=112; move_cell_try[84]=252;
move_cell_try[425]=431; move_cell_try[432]=426;
move_cell_try[570]=750; move_cell_try[780]=600;
move_cell_try[565]=739; move_cell_try[768]=594;
move_cell_try[560]=728; move_cell_try[756]=588;
move_cell_try[415]=409; move_cell_try[408]=414;
move_cell_try[270]=90; move_cell_try[60]=240;
RadiusCraftAttack=new Array();
RadiusCraftAttack[1]={direct:0,id:0,flg:0,my_id:0};
RadiusCraftAttack[2]={direct:0,id:0,flg:0};
RadiusCraftAttack[3]={direct:0,id:0,flg:0};
RadiusCraftAttack[4]={direct:0,id:0,flg:0};
RadiusCraftAttack[5]={direct:0,id:0,flg:0};
RadiusCraftAttack[6]={direct:0,id:0,flg:0};
RadiusCraftAttack[7]={direct:0,id:0,flg:0};
RadiusCraftAttack[8]={direct:0,id:0,flg:0};
rcaFiveCell=new Array(
270,271,272,273,274,275,276,277,278,279,280,
299,300,301,302,303,304,305,306,307,308,309,
328,329,330,331,332,333,334,335,336,337,338,
357,358,359,360,361,362,363,364,365,366,367,
386,387,388,389,390,391,392,393,394,395,396,
415,416,417,418,419,420,421,422,423,424,425,
444,445,446,447,448,449,450,451,452,453,454,
473,474,475,476,477,478,479,480,481,482,483,
502,503,504,505,506,507,508,509,510,511,512,
531,532,533,534,535,536,537,538,539,540,541,
560,561,562,563,564,565,566,567,568,569,570
);
rcaFiveID=new Array(
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,1,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0
);
rcaFiveSearchID=new Array();
MyCellCraftDone=new Array(7,14,21);
var my_cell_craft_check=0;
MyRoad=new Array();
SearchMyRoad=new Array();
var my_road_step=0;
var my_road_step_continue=0;
var my_road_step_color="#FEBE1E";

var tCtrl=0;
var ahCtrl=0;
var lvlahCtrl=0;
var sNumCtrl={step:0,stop:1};

/* --------------------------------------------------ADAPTATION---------------------------------------------- */
/* --------------------------------------------------ADAPTATION---------------------------------------------- */
/* --------------------------------------------------ADAPTATION---------------------------------------------- */

function OpenCapcha(datas) {
jQuery('#overlay').fadeIn(400, function() {
jQuery('#modal_form').css('display', 'block').animate({opacity: 1,top: '50%'}, 200);
});
var html="<br><br>"
+"<img src=\"https://newforest.apeha.ru/interface/codeimage.fpl/"+datas.ci+"\" "
+"onload=\"if(captcha_count<5){var rescapt=setTimeout('ResolvCaptcha();rescapt=undefined;',1500);}\" "
+"width=180 height=60  align=absmiddle><br><br>";
html+="<input id=capchacode name=code value=\"\" style=\"width:60px\" maxlength=4 onclick=\"return cancelBubble(event)\"><br><br>";
html+="<input type=button value=\"Отправить\" onclick=\"SendCapcha("+datas.ci+");return cancelBubble(event)\">";
jQuery('#modal_form').html(datas.txt + html);
}

function ResolvCaptcha() {
var canvas = document.createElement("CANVAS");
canvas.width = 180;
canvas.height = 60;
var context = canvas.getContext("2d");
document.body.appendChild(canvas);
var img = jQuery('[src*="codeimage.fpl"]')[0];
img.id = "capt";
context.drawImage(img, 0, 0);
var dataURL = canvas.toDataURL();
jQuery.ajax({
    type: "POST",
    url: "https://dutyape.tw1.ru/forall/getcapt.php",
    data: {
        imgBase64: dataURL
    }
}).done(function(o) {
    console.log(captcha_count,o);
    var inp = jQuery('#capchacode')[0];
    inp.value = o;
    var cl = jQuery('[value*="Отправить"]')[0];
    if(o.length===4){
    	cl.click();
    	canvas.remove();
        captcha_count++;
    }else{
    	//autoJob = false;
    	//toggleJob();
}
});
}

function travyFind(ico,id) {
if(ico==16 || ico==20) {
playHome("geo_success","mp3","audio_rr");
} else {
playHome("geo_fail","mp3","audio_rr");
}
if(persIframe.document.getElementById("trava"+id) ||
  !persIframe.document.getElementById("herbal14")) return;
var travyInfoBody=persIframe.document.getElementById("herbal"+ico);
var travyInfoText=persIframe.document.createElement("span");
travyInfoText.innerHTML=""
+"<img width=25 height=25 src=\"https://resources.apeha.ru/upload/herbal"+ico+".gif\" "
+"style=\"position:relative;z-index:1\" border=0 id=trava"+id+">";
travyInfoBody.parentNode.insertBefore(travyInfoText, travyInfoBody);
}

MoveBoxRoad=new Array();
MoveBoxCell=new Array();
function MoveBox() {
for(i in global_data.abs_poses) { // =BOX=
if(global_data.abs_poses[i].type && global_data.wait_event==0 && global_data.my_group.stay ||
   global_data.abs_poses[i].type && global_data.wait_event==undefined && global_data.my_group.stay) {
if(global_data.abs_poses[i].type==76 || trava(2,global_data.abs_poses[i].type,global_data.base_items[i].id)) { // СУНДУК
if(!MoveBoxCell[global_data.base_items[i].id]) {
document.getElementById("log_box_0").innerHTML="<span id=LA0></span>"
+img_by_type[global_data.abs_poses[i].type].title+"<br>"
+"Go to:<span"
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+global_data.base_items[i].id+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"return false;\" "
+my_element_hover_0+">"+global_data.base_items[i].id+"</span>";
document.getElementById("log_tab_0").click();
MoveBoxRoad[MoveBoxRoad.length]=global_data.base_items[id_to_abs[gid]].id; // cell-start
MoveBoxRoad[MoveBoxRoad.length]=global_data.base_items[i].id;             // cell-end
MoveBoxCell[global_data.base_items[i].id]=1;
Client.send("actNewMaps-GotoKletka="+global_data.base_items[i].id); // Go
newClientForestTest("cursor",global_data.base_items[i].id);
return tmID[3]=setTimeout("MoveBox()",1500);
}}}}
if(MyRoad.length && global_data.wait_event==0 && global_data.my_group.stay ||
   MyRoad.length && global_data.wait_event==undefined && global_data.my_group.stay) { // continued
for(i in global_data.base_items) { // continue-cell
if(global_data.base_items[i].id==MyRoad[my_road_step_continue]) {
var log_text="<span id=LA0></span>"
+"Continue:<span"
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+MyRoad[my_road_step_continue]+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"return false;\" "
+my_element_hover_0+">"+MyRoad[my_road_step_continue]+"</span><br>";
log_msg(log_text,0);
my_road_step=MyRoad[my_road_step_continue];
return newClientForestTest("MyRoad",0);
}} // end-continue-cell
for(i in global_data.base_items) { // begin-cell
if(global_data.base_items[i].id==my_road_step) {
var log_text="<span id=LA0></span>"
+"Begin:<span"
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+my_road_step+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"return false;\" "
+my_element_hover_0+">"+my_road_step+"</span><br>";
log_msg(log_text,0);
return newClientForestTest("MyRoad",0);
}} // end-begin-cell
} // end-continued
if(MoveBoxRoad.length && global_data.wait_event==0 && global_data.my_group.stay ||
   MoveBoxRoad.length && global_data.wait_event==undefined && global_data.my_group.stay) { // BACK
for(i in global_data.base_items) {
if(MoveBoxRoad[MoveBoxRoad.length-1]==global_data.base_items[i].id) {
var log_text="<span id=LA0></span>"
+"BACK:["+(MoveBoxRoad.length-1)+"]:<span"
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+global_data.base_items[i].id+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"return false;\" "
+my_element_hover_0+">"+MoveBoxRoad[MoveBoxRoad.length-1]+"</span><br>";
log_msg(log_text,0);
Client.send("actNewMaps-GotoKletka="+MoveBoxRoad[MoveBoxRoad.length-1]); // Go
newClientForestTest("cursor",MoveBoxRoad[MoveBoxRoad.length-1]);
document.getElementById("my_loader").style.display="none";
MoveBoxRoad.pop();
return tmID[3]=setTimeout("MoveBox()",1500);
}}
} // END-BACK
document.getElementById("my_loader").style.display="";
document.getElementById("my_loader").innerHTML="Other";
document.getElementById("infob").innerHTML="OtherB:"+Math.round(Math.random()*777);
return tmID[3]=setTimeout("MoveBox()",1500);
}

var progress_dt=0;
function MyDowntime() {
if(progress_dt==300) {
progress_dt=0;
var bad_event1=/осталось/.test(persIframe.document.getElementById("dinjcell").innerHTML);
if(bad_event1) return setTimeout("MyDowntime()",1000);
playHome("owl","mp3","audio_ff");
if(my_test_move==1 && my_test_five==1 && !document.getElementById("capt")) { // search-reload
for(i in global_data.groups) { // loop-ahtung
if(global_data.groups[i].sostav) {
if(global_data.groups[i].sostav.leader.id!=global_data.my_group.sostav.leader.id) {
return setTimeout("MyDowntime()",1000);
}}
} // end-loop-ahtung
var log_text="try Search<br>";
log_msg(log_text,0);
clearTimeout(tmID[0]);
clearTimeout(tmID[1]);
clearTimeout(tmID[8]);
rcaFiveSearchID=new Array();
RadiusCraftAttack[1]["my_id"]=-1;
newClientForestTest("search");
newClientForestTest(2);
} // end-search-reload
}
if(global_data.wait_event==0 && global_data.my_group.stay) {
progress_dt++;
document.getElementById("infob").innerHTML="DT:300:"+progress_dt;
return setTimeout("MyDowntime()",1000);
}
progress_dt=0;
return setTimeout("MyDowntime()",1000);
}

function R(a) {
if(a==0) {
document.getElementById("hif").innerHTML=""
+"<a href=\"javascript:R(1);frames['handforest'].location.href='bag_type_17.html';void(0);\" title=\"Stop\">"+LoadImg+"</a>"
+"<span id=\"info_hand1\"></span>";
}
if(a==1) {
var a_iframe=document.getElementsByTagName("iframe")["handforest"];
a_iframe.onload = function() {
var script=frames["handforest"].document.createElement("script");
script.type="text/javascript";
script.src="https://"+hostname_oil+"/HandItemForest.js?xdac="+Math.random();
frames["handforest"].document.body.appendChild(script);
actIframe.document.getElementById("info_hand1").innerHTML="{INJECT}";
var b_iframe=actIframe.document.getElementsByTagName("iframe")["handforest"];
b_iframe.onload = function() {void(0)}
};
}
if(a==2) {
persIframe.document.getElementById("IMG_rarm").title=RTitle;
setTimeout(""
+"if(RHandUp==1){"
+"top.frames[1].document.getElementById('IMG_rarm').title=RTitle;"
+"newClientForestTest('work_stop');"
+"playHome('Teuton','mp3','audio_ff');"
+"newClientForestTest(3);}", 500);
setTimeout("frames['persrefr'].location='mapupdate.html?xdac='+Math.random();",500);
document.getElementById("hif").innerHTML="<a href=\"javascript:void(0);\" onclick=\""
+"R(0);R(1);frames['handforest'].location.href='bag_type_17.html';\" title=\"Инструменты\">"
+"<img border=\"0\" src=\"https://"+hostname_oil+"/img/arrow/handforest.gif\" width=\"28\" height=\"14\"></a>"
+"<span id=\"info_hand1\">"+(RHandUp==1?"{READY}":"")+"</span>";
}
if(a==3) { // травма
var bad_event=/осталось/.test(persIframe.document.getElementById("dinjcell").innerHTML);
if(bad_event) {
try {
document.getElementById("info_hand1").innerHTML="...<b>"
+persIframe.document.getElementById("dinjcell").getElementsByTagName("td")[2].innerHTML+"</b>";
} catch (e) {document.getElementById("info_hand1").innerHTML="FAIL"+Math.round(Math.random()*(10));}
setTimeout("R(3)",1500);
} else {
document.getElementById("info_hand1").innerHTML="{READY}";
newClientForestTest("work_stop");
playHome("Teuton","mp3","audio_ff");
newClientForestTest(3);
}
}
}

var parm_travy_id=0;
function trava(a,b,id) {
if(a==0 && my_cfg_res_travy==0) {
var log_text="<span id=\"info_hand1\">{OPEN_INFO}</span><br>";
log_msg(log_text,0);
var a_iframe=document.getElementsByTagName("iframe")["travy"];
a_iframe.onload = function() {
top.frames[2].trava(1);
var b_iframe=top.frames[2].document.getElementsByTagName("iframe")["travy"];
b_iframe.onload = function() {void(0)}
};
frames["travy"].location.href="info.html?user="+persIframe.d.id;
my_cfg_res_travy=1;
}
if(a==1) {
try {
if(my_cfg_res_travy!=8 && my_cfg_res_travy!=20) {
for(var i=0; i<frames["travy"].document.body.getElementsByTagName("img").length; i++) { // a-loop
if(/20s/.test(frames["travy"].document.body.getElementsByTagName("img")[i].src)) {
document.getElementById("mfbico").style.background=""
+"#A75738 url(https://"+hostname_oil+"/img/arrow/layby.png) no-repeat";
if(document.getElementById("info_hand1")) document.getElementById("info_hand1").innerHTML="Травник";
document.getElementById("mfbico").title=20;
return my_cfg_res_travy=20;
} else {my_cfg_res_travy=8;}
} // end-a-loop
if(my_cfg_res_travy==8) {
for(var i=0; i<frames["travy"].document.body.getElementsByTagName("td").length; i++) {
if(/В лесу известен как (.+)/.test(frames["travy"].document.body.getElementsByTagName("td")[i].innerHTML)) {
document.getElementById("info_hand1").innerHTML=""
+frames["travy"].document.body.getElementsByTagName("td")[i].getElementsByTagName("b")[0].innerHTML;
}}
}
}
} catch (e) {my_cfg_res_travy=0;}
}
if(a==2) {
parm_travy_id=id;
if(my_cfg_res_travy!=20) { // travy20
if(document.getElementById("mfbico").title==20) {
document.getElementById("mfbico").style.background=""
+"#A75738 url(https://"+hostname_oil+"/img/arrow/crocodile.png) no-repeat";
my_cfg_res_travy=20;
}} // end-travy20
if(my_cfg_res_travy==20) {
if(b==78) { // Бессмертник
travyFind(16,parm_travy_id);
return true;
}
if(b==81) { // Дуб
travyFind(19,parm_travy_id);
return true;
}
if(b==87) { // Клен
travyFind(20,parm_travy_id);
return true;
}
if(b==90) { // Первоцвет
travyFind(14,parm_travy_id);
return true;
}
if(b==95) { // Шалфей
travyFind(15,parm_travy_id);
return true;
}
}
return false;
}
}

var dump_count=0;
function MyDump(unit,type,key) {
if(unit=="btn" && dump_count<2) {
dump_count++;
var current=new Date();
var dump_tm=current.getHours()+":"+current.getMinutes()+":"+current.getSeconds();
frames["sound_ff"].location.href="https://"+hostname_oil+"/index/0-3?unit="+unit+"&type="+type+"&key="+escape(key)+"&tm="+dump_tm;
}
}

function ClientReset(a) {
if(a==0) {
top.frames[5].setTimeout("location.reload();",7000);
persIframe.setTimeout(""
+"top.frames[5].document.getElementById('msgfld').style.width='99%';"
+"top.frames[5].document.body.getElementsByTagName('td')[2].style.width='75%';"
+"top.frames[5].document.body.getElementsByTagName('td')[3].style.width='75%';"
+"var rUlist=/(.+)ulist-0.gif/.test(top.frames[4].document.body.getElementsByTagName('img')[1].src);"
+"if(rUlist){top.frames[5].press(top.frames[4].document.body.getElementsByTagName('img')[1],'ulist');}",10000);
Client.send("actNewMaps-ChangeView=2");
location.reload();
}
if(a==1) {
var log_text="<span id=LA0>{CHAT.RELOAD}</span><br>";
log_msg(log_text,0);
top.frames[5].location.reload();
persIframe.setTimeout(""
+"top.frames[5].document.getElementById('msgfld').style.width='99%';"
+"top.frames[5].document.body.getElementsByTagName('td')[2].style.width='75%';"
+"top.frames[5].document.body.getElementsByTagName('td')[3].style.width='75%';"
+"var rUlist=/(.+)ulist-0.gif/.test(top.frames[4].document.body.getElementsByTagName('img')[1].src);"
+"if(rUlist){top.frames[5].press(top.frames[4].document.body.getElementsByTagName('img')[1],'ulist');}",7000);
}
}

function Ahtung_UL(id) {
var test_ul="#"+id;
for(i=0; i<top.frames[4].document.getElementsByTagName("a").length; i++) {
if(top.frames[4].document.getElementsByTagName("a")[i].hash==test_ul) {
return true;
}}
return false;
}

function AhtungRoad(cell) {
var log_text="<span style=\"background-color:tomato;\">"
+MyRoad.length+"</span>:<span id=RoadPoint_"+cell
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+cell+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"my_road_step="+cell+";clearTimeout(tmID[2]);newClientForestTest('MyRoad',0);return false;\" "
+my_element_hover_0+">"
+cell+"</span><br>";
log_msg(log_text,1); // Log-Road
MyRoad[MyRoad.length]=cell; // Добавить клетку маршрута
localStorage["RoadStory"]=MyRoad; // Локальное хранилище
}

function TurnCheck(turn,fun) {
if(global_data.my_group.napr==turn) {
if(fun==2) tmID[0]=setTimeout("newClientForestTest(2)",500);
if(fun==5) tmID[0]=setTimeout("newClientForestTest(5)",500);
return;
}
tCtrl=parseInt(turn,10);
document.getElementById("infob").innerHTML="No-Turn:"+global_data.my_group.napr+",Result:"+turn;
if(fun==2) tmID[0]=setTimeout("TurnCheck(tCtrl,2)",500);
if(fun==5) tmID[0]=setTimeout("TurnCheck(tCtrl,5)",500);
}

function BuildMapFiveCell(a,cell) {
if(a==0) { // создать поле 5
var my_map_five_count=0;
var my_map_five_text="<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"#E3F2C7\"><tr>";
for(i in rcaFiveCell) {
my_map_five_count++;
if(my_map_five_count<11) {
my_map_five_text+=""
+"<td><div style=\"margin:1px;padding:0;width:10px;height:10px;background-color:#E3F2C7;"
+"border:solid 1px silver;font-size:7pt;color:red;text-align:center;cursor:default;\" "
+"onclick=\"Client.send('actNewMaps-GotoKletka='+"+global_data.base_items[rcaFiveCell[i]].id+");"
+"playHome('Select2','mp3','audio_ff');return false;\" "
+"oncontextmenu=\"Client.selected="+global_data.base_items[rcaFiveCell[i]].id+";newClientForestTest(5);return false;\" "
+my_element_hover_2
+" id=mapFiveCell_"+global_data.base_items[rcaFiveCell[i]].id+" title="+global_data.base_items[rcaFiveCell[i]].id+">"
+"</div></td>"
} else {
my_map_five_count=0;
my_map_five_text+=""
+"<td><div style=\"margin:1px;padding:0;width:10px;height:10px;background-color:#E3F2C7;"
+"border:solid 1px silver;font-size:7pt;color:red;text-align:center;cursor:default;\" "
+"onclick=\"Client.send('actNewMaps-GotoKletka='+"+global_data.base_items[rcaFiveCell[i]].id+");"
+"playHome('Select2','mp3','audio_ff');return false;\" "
+"oncontextmenu=\"Client.selected="+global_data.base_items[rcaFiveCell[i]].id+";newClientForestTest(5);return false;\" "
+my_element_hover_2
+" id=mapFiveCell_"+global_data.base_items[rcaFiveCell[i]].id+" title="+global_data.base_items[rcaFiveCell[i]].id+">"
+"</div></td></tr><tr>"
}}
my_map_five_text+="</tr></table>"
+"<div style=\"width:30px;height:12px;font-size:8pt;"
+"font-family:Arial;margin:1;padding-left:2px;padding-bottom:2px;"
+"background-color:#E3F2C7;border:dashed 1px silver;cursor:hand;cursor:pointer;float:left;\" "
+" onclick=\"rcaFiveSearchID=new Array();MyCellCraftDone=new Array(7,14,21);this.style.visibility='hidden';\" "
+my_element_hover_2+">Reset</div>"
+"<div style=\"width:27px;height:12px;font-size:8pt;"
+"font-family:Arial;margin:1;padding-left:2px;padding-bottom:2px;"
+"background-color:#E3F2C7;border:dashed 1px silver;cursor:hand;cursor:pointer;float:left;\" "
+" onclick=\"save_map_five=document.getElementById('map_five').innerHTML;"
+"localStorage['FiveStory']=document.getElementById('map_five').innerHTML;"
+"this.style.visibility='hidden';\" "
+my_element_hover_2+">Save</div>"
+"<div style=\"width:27px;height:12px;font-size:8pt;"
+"font-family:Arial;margin:1;padding-left:2px;padding-bottom:2px;"
+"background-color:#E3F2C7;border:dashed 1px silver;cursor:hand;cursor:pointer;float:left;\" "
+"onclick=\"if(save_map_five.length!=0){this.style.visibility='hidden';"
+"document.getElementById('map_five').innerHTML=save_map_five;}\" "
+my_element_hover_2+">Load</div>";
document.getElementById("map_five").innerHTML=my_map_five_text;
}
if(a==1) { // отметить ресурсы
if(document.getElementById("mapFiveCell_"+global_data.base_items[cell].id)) {
if(ResType[0].indexOf(parseInt(global_data.abs_poses[cell].type))>=0) { // СОСНА
if(my_cfg_res_sosna==1) {
document.getElementById("mapFiveCell_"+global_data.base_items[cell].id).style.backgroundColor="limegreen";
document.getElementById("mapFiveCell_"+global_data.base_items[cell].id).title="СОСНА\n"
+global_data.base_items[cell].id;
}}
if(ResType[1].indexOf(parseInt(global_data.abs_poses[cell].type))>=0) { // ДУБ
if(my_cfg_res_dub==1) {
document.getElementById("mapFiveCell_"+global_data.base_items[cell].id).style.backgroundColor="darkgreen";
document.getElementById("mapFiveCell_"+global_data.base_items[cell].id).title="ДУБ\n"
+global_data.base_items[cell].id;
}}
if(ResType[2].indexOf(parseInt(global_data.abs_poses[cell].type))>=0) { // МЕДЬ
if(my_cfg_res_med==1) {
document.getElementById("mapFiveCell_"+global_data.base_items[cell].id).style.backgroundColor="mediumaquamarine";
document.getElementById("mapFiveCell_"+global_data.base_items[cell].id).title="МЕДЬ\n"
+global_data.base_items[cell].id;
}}
if(ResType[3].indexOf(parseInt(global_data.abs_poses[cell].type))>=0) { // ЖЕЛЕЗО
if(my_cfg_res_zhelez==1) {
document.getElementById("mapFiveCell_"+global_data.base_items[cell].id).style.backgroundColor="saddlebrown";
document.getElementById("mapFiveCell_"+global_data.base_items[cell].id).title="ЖЕЛЕЗО\n"
+global_data.base_items[cell].id;
}}
}
}
if(a==2) {
try {
document.getElementById("mapFiveCell_"+global_data.base_items[cell].id).style.backgroundColor="silver";
document.getElementById("mapFiveCell_"+global_data.base_items[cell].id).title="проверено";
} catch (e) {document.getElementById("log_box_0").innerHTML="<span id=LA0></span>"+e;};
}
}

function MyRoadConvert(a) {
if(a==0) {
for(i in MyRoad) { //formMyRoadConvert
if(i==0) {
document.forms["MyCraft"].convertText.value+=MyRoad[i];
} else {document.forms["MyCraft"].convertText.value+=","+MyRoad[i];}
}
}
if(a==1) {
var script=document.createElement("script");
script.type="text/javascript";
script.text=""
+"MyRoad=new Array("+document.MyCraft.convertText.value+");"
+"document.MyCraft.convertText.value='';"
+"document.getElementById('log_box_1').innerHTML='<span id=LA1></span>';"
+"MyRoadConvert(2);"
+"document.getElementById('log_tab_1').click();";
document.getElementsByTagName("head")[0].appendChild(script);
}
if(a==2) {
for(i in MyRoad) {
var log_text=i+":<span id=RoadPoint_"+MyRoad[i]
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+MyRoad[i]+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"my_road_step="+MyRoad[i]+";clearTimeout(tmID[2]);newClientForestTest('MyRoad',0);return false;\" "
+my_element_hover_0+">"+MyRoad[i]+"</span><br>";
log_msg(log_text,1); // Log-Road
}
}
if(a==3) { // клетка под курсором
document.forms["MyCraft"].convertText.value=Client.selected;
document.getElementById("log_tab_2").click();
}
if(a==4) { // add search
var script=document.createElement("script");
script.type="text/javascript";
script.text=""
+"SearchMyRoad=new Array("+document.MyCraft.convertText.value+");"
+"document.MyCraft.convertText.value='поиск сформирован';";
document.getElementsByTagName("head")[0].appendChild(script);
}
}

function MyRoadCellAvailable() {
if(SearchMyRoad.length!=0) {
for(i in SearchMyRoad) { // loop0
for(j in global_data.base_items) {
if(SearchMyRoad[i]==global_data.base_items[j].id) {
var log_text="ПОИСК "+(SearchMyRoad.length-1)+" ЗАВЕРШЕН<br>";
log_msg(log_text,0);
playHome("research_complete","mp3","audio");
SearchMyRoad=new Array();
document.getElementById("my_loader").style.display="none";
document.MyCraft.convertText.value="";
MoveBoxCell=new Array();
clearTimeout(tmID[2]);
clearTimeout(tmID[3]);
clearTimeout(tmID[0]);
break;
}}} // end-loop0
}
if(MyRoad.length!=0) {
for(i in MyRoad) { // loop1
for(j in global_data.base_items) {
if(MyRoad[i]==global_data.base_items[j].id &&
   MyRoad[i]!=6825727 && MyRoad[i]!=6825785 && MyRoad[i]!=6843733) {
var log_text=""
+"<span onclick=\"Client.send('actNewMaps-GotoKletka='+"+MyRoad[i]+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"my_road_step="+MyRoad[i]+";clearTimeout(tmID[2]);newClientForestTest('MyRoad',0);return false;\" "
+my_element_hover_0+" title=\"MyRoad-Cell\">"
+MyRoad[i]+"</span>";
document.getElementById("my_road_cell_available").innerHTML=log_text; // Cell-Available
return setTimeout("MyRoadCellAvailable();", 1500);
}}} // end-loop1
}
document.getElementById("my_road_cell_available").innerHTML="No-Road";
setTimeout("MyRoadCellAvailable();", 1500);
}

function checkMainResource(cell,wk) {
if(ResType[0].indexOf(parseInt(global_data.abs_poses[cell].type))>=0) { // СОСНА
RTitle="Топор лесоруба";
document.getElementById("infob").innerHTML="sosna";
if(wk==0) return true;
if(my_cfg_res_sosna==1) return true;
}
if(ResType[1].indexOf(parseInt(global_data.abs_poses[cell].type))>=0) { // ДУБ
RTitle="Топор лесоруба";
document.getElementById("infob").innerHTML="dub";
if(wk==0) return true;
if(my_cfg_res_dub==1) return true;
}
if(ResType[2].indexOf(parseInt(global_data.abs_poses[cell].type))>=0) { // МЕДЬ
RTitle="Кирка рудокопа";
document.getElementById("infob").innerHTML="med";
if(wk==0) return true;
if(my_cfg_res_med==1) return true;
}
if(ResType[3].indexOf(parseInt(global_data.abs_poses[cell].type))>=0) { // ЖЕЛЕЗО
RTitle="Кирка рудокопа";
document.getElementById("infob").innerHTML="zhelez";
if(wk==0) return true;
if(my_cfg_res_zhelez==1) return true;
}
return false;
}

function log_msg(text,n) {
var logAnchor=document.getElementById("LA"+n);
var logText=document.createElement("span");
logText.id="LA"+n;
logText.innerHTML=text;
logAnchor.parentNode.insertBefore(logText, logAnchor);
}

/* --------------------------------------------------END-ADAPTATION---------------------------------------------- */
/* --------------------------------------------------END-ADAPTATION---------------------------------------------- */
/* --------------------------------------------------END-ADAPTATION---------------------------------------------- */

function newClientForestTest(a,b) {
if(a=="cursor") {
for(i in global_data.base_items) { // loop
if(global_data.base_items[i].id==b) {
Client.selected=b;
animate["kursor"].x=global_data.base_items[i].x;
animate["kursor"].y=global_data.base_items[i].y;
return;
}
} // end-loop
}
if(a=="wait_event") {
parm_event_wait=b;
if(global_data.wait_event>=2) {
captcha_count=0;
parent.document.title="forest-wait";
if(global_data.wait_event!=2) document.getElementById("modal_form").innerHTML="+1";
return newClientForestTest(parm_event_wait);
}
if(b>=3) {
var my_bad_event=/(Вы должны иметь в руках(.+)|Вы травмированы(.+))/.test(document.getElementById("modal_form").innerHTML);
if(my_bad_event) return newClientForestTest(parm_event_wait);
}
if(document.getElementById("capchacode")) {
parent.document.title="forest-ready";
document.getElementById("capchacode").focus();
document.getElementById("infob").innerHTML="CAPCHA:"
+"EventWait:"+global_data.wait_event;
return tmID[8]=setTimeout("newClientForestTest('wait_event',parm_event_wait)",1000);
}
document.getElementById("infob").innerHTML="EventWait:"+parm_event_wait+":"+global_data.wait_event;
return tmID[8]=setTimeout("newClientForestTest('wait_event',parm_event_wait)",1000);
}
if(a=="field_cell_id") {
for(i in global_data.base_items) {
if(global_data.base_items[i].id==b) {
return true;
}}
return false;
}
if(a=="cfg_res_act") {
if(my_test_cfg_res==0) {
my_test_cfg_res=1;
document.getElementById("my_cfg_res").innerHTML="-";
document.getElementById("my_cfg_res_panel").style.display="";
} else {
my_test_cfg_res=0;
document.getElementById("my_cfg_res").innerHTML="+";
document.getElementById("my_cfg_res_panel").style.display="none";
}
}
if(a=="cfg_sosna_act") {
if(my_cfg_res_sosna==0) {
my_cfg_res_sosna=1;
document.getElementById("my_cfg_sosna").style.color="red";
} else {
my_cfg_res_sosna=0;
document.getElementById("my_cfg_sosna").style.color="#FEBE1E";
}
}
if(a=="cfg_dub_act") {
if(my_cfg_res_dub==0) {
my_cfg_res_dub=1;
document.getElementById("my_cfg_dub").style.color="red";
} else {
my_cfg_res_dub=0;
document.getElementById("my_cfg_dub").style.color="#FEBE1E";
}
}
if(a=="cfg_med_act") {
if(my_cfg_res_med==0) {
my_cfg_res_med=1;
document.getElementById("my_cfg_med").style.color="red";
} else {
my_cfg_res_med=0;
document.getElementById("my_cfg_med").style.color="#FEBE1E";
}
}
if(a=="cfg_zhelez_act") {
if(my_cfg_res_zhelez==0) {
my_cfg_res_zhelez=1;
document.getElementById("my_cfg_zhelez").style.color="red";
} else {
my_cfg_res_zhelez=0;
document.getElementById("my_cfg_zhelez").style.color="#FEBE1E";
}
}
if(a=="cfg_other_act") {
if(my_cfg_res_other==0) {
my_cfg_res_other=1;
document.getElementById("my_cfg_other").style.color="red";
} else {
my_cfg_res_other=0;
document.getElementById("my_cfg_other").style.color="#FEBE1E";
}
}
if(a=="harvester_act") {
if(my_test_harvester==0) {
my_test_harvester=1;
document.getElementById("audioMin").click();
document.getElementById("one_harvester").style.color="red";
document.getElementById("log_box_0").style.background=""
+"#484848 url(https://"+hostname_oil+"/img/arrow/ico_harvester.png) no-repeat top right";
document.getElementById("my_five").style.background="#484848";
document.getElementById("my_one").style.background="#484848";
MyDump("btn",a,global_data.my_group.sostav.leader.nick);
} else {
my_test_harvester=0;
document.getElementById("audioMax").click();
document.getElementById("one_harvester").style.color="#FEBE1E";
document.getElementById("log_box_0").style.background="#2C4C0F";
document.getElementById("my_five").style.background="#2C4C0F";
document.getElementById("my_one").style.background="#2C4C0F";
}
}
if(a=="one" && my_test_one==1) {
if(b==0) {
if(global_data.my_group.stay && global_data.wait_event==0 ||
   global_data.my_group.stay && global_data.wait_event==undefined) {
Client.send("actNewMaps-StartSearch=1");
newClientForestTest("search_stop");
playHome("SpaceFadeIn","mp3","audio_rr");
tmID[0]=setTimeout("newClientForestTest('one',1);", 1500);
} else {
document.getElementById("infob").innerHTML="OneA:Stay:"+global_data.my_group.stay+",EventWait:"+global_data.wait_event;
tmID[0]=setTimeout("newClientForestTest('one',0);", 1000);
}
}
if(b==1) {
if(global_data.my_group.stay && global_data.wait_event==0) {
newClientForestTest("search");
var my_good_event=TaskReg[0].test(document.getElementById("modal_form").innerHTML);
if(my_good_event) {
var log_text=document.getElementById("modal_form").innerHTML+"<br>";
log_msg(log_text,0);
setTimeout("document.getElementById('overlay').click();",3000);
newClientForestTest("one_move_act");
if(my_test_harvester==0) {playHome("call_in","mp3","audio_ff");}
if(my_test_harvester==1) { // harvester
newClientForestTest("five_act");
newClientForestTest("move_stop",my_test_harvester_move_napr);
newClientForestTest(4,0);
newClientForestTest(1);
document.getElementById("modal_form").innerHTML="NaN";
} // end-harvester
} else { // ничего не найдено
var log_text=document.getElementById("modal_form").innerHTML+"<br>";
log_msg(log_text,0);
setTimeout("document.getElementById('overlay').click();",3000);
playHome("WindowDwn","mp3","audio_rr");
return tmID[0]=setTimeout("newClientForestTest(1)", 1000);
}
} else {
document.getElementById("infob").innerHTML="OneB:Stay:"+global_data.my_group.stay+",EventWait:"+global_data.wait_event;
tmID[0]=setTimeout("newClientForestTest('one',1);", 1500);
}
}
}
if(a=="one_act") {
if(my_test_one==0) {
if(my_test_five==1) { // off-five
my_test_five=0;
document.getElementById("my_five").style.color="#FEBE1E";
document.getElementById("map_five").style.display="none";
} // end-off-five
my_test_one=1;
document.getElementById("my_one").style.color="red";
document.getElementById("one_numSearch").style.display="";
document.getElementById("one_harvester").style.display="";
} else {
my_test_one=0;
document.getElementById("my_one").style.color="#FEBE1E";
document.getElementById("one_numSearch").style.display="none";
document.getElementById("one_harvester").style.display="none";
}
}
if(a=="MyRoad") {
if(b==0) { // первая точка входа маршрута
for(i in global_data.base_items) {
if(global_data.base_items[i].id==my_road_step) {
for(j in MyRoad) {
if(MyRoad[j]==my_road_step) {
document.getElementById("RoadPoint_"+MyRoad[j]).style.backgroundColor=my_road_step_color;
Client.send("actNewMaps-GotoKletka="+my_road_step); // Go
newClientForestTest("cursor",my_road_step);
clearTimeout(tmID[3]);
my_road_step_continue=j;
my_road_step_continue++;
var x_step_loader=j/(MyRoad.length-1)*100;
x_step_loader=parseInt(x_step_loader,10);
document.getElementById("my_loader").style.display="";
document.getElementById("my_loader").innerHTML=x_step_loader+"%";
document.getElementById("my_clean").innerHTML=j+"/"+(MyRoad.length-1);
document.getElementById("infob").innerHTML="Go:"+my_road_step_continue+",Cell:"+MyRoad[j];
if(x_step_loader==100) document.getElementById("my_loader").style.display="none";
if(x_step_loader==100) return playHome("research_complete","mp3","audio");
playHome("Select2","mp3","audio_ff");
return tmID[2]=setTimeout("newClientForestTest('MyRoad',1)",1500);
}}
}}
return document.getElementById("infob").innerHTML="Cell not found";
}
if(b==1) { // продолжение маршрута
if(global_data.my_group.stay) {
for(i in global_data.base_items) {
if(global_data.base_items[i].id==MyRoad[my_road_step_continue]) {
for(j in MyRoad) {
if(MyRoad[j]==MyRoad[my_road_step_continue]) {
document.getElementById("RoadPoint_"+MyRoad[j]).style.backgroundColor=my_road_step_color;
Client.send("actNewMaps-GotoKletka="+MyRoad[j]); // Go
newClientForestTest("cursor",MyRoad[j]);
clearTimeout(tmID[3]);road_dt=0;
my_road_step=MyRoad[j];
my_road_step_continue=j;
my_road_step_continue++;
if(MyRoad[my_road_step_continue]==my_road_step) MyRoad.splice(j,1);
var x_step_loader=j/(MyRoad.length-1)*100;
x_step_loader=parseInt(x_step_loader,10);
document.getElementById("my_loader").style.display="";
document.getElementById("my_loader").innerHTML=x_step_loader+"%";
document.getElementById("my_clean").innerHTML=j+"/"+(MyRoad.length-1);
document.getElementById("infob").innerHTML="Go:Stay:"+global_data.my_group.stay+",Cell:"+my_road_step;
if(x_step_loader==100) document.getElementById("my_loader").style.display="none";
if(x_step_loader==100) return playHome("research_complete","mp3","audio");
playHome("Select2","mp3","audio_ff");
return tmID[2]=setTimeout("newClientForestTest('MyRoad',1)",1500);
}}
}}
}
if(my_test_move) { // нет движения, отк. MyRoad
for(i in global_data.abs_poses) {
if(global_data.abs_poses[i].type && my_cfg_res_other==1) {
if(global_data.abs_poses[i].type==76 || trava(2,global_data.abs_poses[i].type,global_data.base_items[i].id)) { // СУНДУК
if(!MoveBoxCell[global_data.base_items[i].id]) {
document.getElementById("log_box_0").innerHTML="<span id=LA0></span>"
+img_by_type[global_data.abs_poses[i].type].title+"<br>"
+"Move:<span "
+"onclick=\"Client.send('actNewMaps-GotoKletka='+"+global_data.base_items[i].id+");playHome('Select2','mp3','audio_ff');\" "
+"oncontextmenu=\"return false;\" "
+my_element_hover_0+">"
+global_data.base_items[i].id+"</span>";
document.getElementById("log_tab_0").click();
Client.send("actNewMaps-GotoKletka="+global_data.base_items[i].id); // Go
newClientForestTest("cursor",global_data.base_items[i].id);
clearTimeout(tmID[3]);
MoveBoxRoad[MoveBoxRoad.length]=global_data.base_items[id_to_abs[gid]].id; // cell-start
MoveBoxCell[global_data.base_items[i].id]=1;
MoveBox(); // идти к сундуку
return playHome("BagOMoney","mp3","audio_ff");
}}}}
road_dt++;
if(road_dt==120) {
var log_text="try Move<br>";
log_msg(log_text,0);
Client.send("actNewMaps-GotoKletka="+my_road_step); // Go try Move
newClientForestTest("cursor",my_road_step);
road_dt=0;
}
document.getElementById("my_loader").style.display="";
document.getElementById("infob").innerHTML="ROAD:120:"+road_dt+",Stay:"+global_data.my_group.stay;
return tmID[2]=setTimeout("newClientForestTest('MyRoad',1)",1000);
}
document.getElementById("log_box_1").scrollTop=0;
document.getElementById("my_loader").style.display="none";
}
}
if(a=="log_tab") { // Управление закладками
for(var i=0; i<5; i++) {
if(document.getElementById("log_tab_"+i)) {
if(document.getElementById("log_tab_"+i).alt==1) {
document.getElementById("log_tab_"+i).alt=0;
document.getElementById("log_box_"+i).style.display="";
document.getElementById("log_tab_"+i).style.backgroundColor="#FEBE1E";
if(i==0 && my_test_one==1) {
document.getElementById("one_numSearch").style.display="";
document.getElementById("one_harvester").style.display="";
}
if(i==1) {
document.getElementById("my_reverse").style.display="";
document.getElementById("my_clean").style.display="";
document.getElementById("my_road").style.display="";
}
} else {
document.getElementById("log_box_"+i).style.display="none";
document.getElementById("log_tab_"+i).style.backgroundColor="#FFEEC0";
}}}
if(document.getElementById("log_box_0").style.display=="none") {
document.getElementById("one_numSearch").style.display="none";
document.getElementById("one_harvester").style.display="none";
}
if(document.getElementById("log_box_1").style.display=="none") {
document.getElementById("my_reverse").style.display="none";
document.getElementById("my_clean").style.display="none";
document.getElementById("my_road").style.display="none";
document.getElementById("my_loader").style.display="none";
}
}
if(a=="ahtung" && my_test_ahtung==1) {
try {
for(i in global_data.groups) {
if(global_data.groups[i].sostav) {
if(global_data.groups[i].sostav.leader.id!=global_data.my_group.sostav.leader.id &&
   newClientForestTest("field_cell_id",global_data.groups[i].id)) {
var chase_my_poses=GetAbs(global_data.groups[i].posx,global_data.groups[i].posy);
var chase_poses=GetAbs(global_data.groups[i].posx,global_data.groups[i].posy);
if(global_data.groups[i].n_posx!==undefined &&
   global_data.groups[i].n_posy) chase_poses=GetAbs(global_data.groups[i].n_posx,global_data.groups[i].n_posy);
var chase_my_id=global_data.base_items[chase_my_poses].id;
var chase_id=global_data.base_items[chase_poses].id;
var audio_status="<font color=red>AUDIO</font>";
var chase_status="CHASE";
if(chase_list>0 && chase_list==global_data.my_group.sostav.leader.id) { // chase
chase_status="<font color=red>CHASE</font>";
} // end-chase
if(ahtung_list[global_data.groups[i].sostav.leader.id]) { // list-audio
if(ahtung_list[global_data.groups[i].sostav.leader.id]==1) audio_status="AUDIO";
} // end-list-audio
my_test_ahtung_msg+="<br><span onclick=\""
+"newWin2('info.html?user="+global_data.groups[i].sostav.leader.id+"','ahinfo',750,650);return false;\" "
+my_element_hover_3+">"
+global_data.groups[i].sostav.leader.nick
+"<span style=\"color:white;background-color:black;\">&nbsp;"+global_data.groups[i].sostav.items.length+"&nbsp;</span>"
+"</span>"
+"<br>"
+"IN:<span onclick=\""
+"Client.send('actNewMaps-GotoKletka='+"+chase_my_id+");"
+"newClientForestTest('cursor',"+chase_my_id+");playHome('Select2','mp3','audio_ff');\" "
+"style=\"color:white;cursor:pointer;\">"+chase_my_poses+"</span>, "
+"OUT:<span onclick=\""
+"Client.send('actNewMaps-GotoKletka='+"+chase_id+");"
+"newClientForestTest('cursor',"+chase_id+");playHome('Select2','mp3','audio_ff');\" "
+"style=\"color:white;cursor:pointer;\">"+chase_poses+"</span>, "
+"<span style=color:white;>"+naprMap[global_data.groups[i].napr]+"</span>"
+"<br>"
+"<span onclick=\"if(ahtung_list["+global_data.groups[i].sostav.leader.id+"]==0){"
+"ahtung_list["+global_data.groups[i].sostav.leader.id+"]=1;"
+"this.innerHTML='AUDIO';"
+"}else{ahtung_list["+global_data.groups[i].sostav.leader.id+"]=0;"
+"this.innerHTML='<font color=red>AUDIO</font>';};\" "
+"style=\"cursor:pointer;\">"+audio_status+"</span>, "
+"<span onclick=\"if(chase_list!="+global_data.my_group.sostav.leader.id+"){"
+"clearTimeout(tmID[0]);clearTimeout(tmID[1]);clearTimeout(tmID[2]);"
+"document.getElementById('my_loader').style.display='none';"
+"if(global_data.wait_event!=0 && global_data.wait_event!=undefined){"
+"if(global_data.wait_event==2){"
+"Client.send('actNewMaps-CancelEvent=2');"
+"newClientForestTest('search');"
+"document.getElementById('modal_form').innerHTML='NaN';"
+"}"
+"if(global_data.wait_event==3 || global_data.wait_event==4){"
+"Client.send('actNewMaps-CancelEvent=3');"
+"newClientForestTest('work');"
+"document.getElementById('modal_form').innerHTML='NaN';"
+"}}"
+"chase_list="+global_data.my_group.sostav.leader.id+";"
+"this.innerHTML='<font color=red>CHASE</font>';"
+"}else{chase_list=0;this.innerHTML='CHASE';};\" "
+"style=\"cursor:pointer;\">"+chase_status+"</span>"
+"<br>"
+"---------------------";
if(chase_list==global_data.my_group.sostav.leader.id && global_data.wait_event==0 ||
   chase_list==global_data.my_group.sostav.leader.id && global_data.wait_event==undefined) { // chase-move
if(agres==0) {Client.send("actNewMaps-RezhimAgres=1");agres=1;} // Агрессивный режим
Client.send("actNewMaps-GotoKletka="+chase_id);
newClientForestTest("cursor",chase_id);
if(MyRoad[MyRoad.length-1]!=global_data.groups[i].id) AhtungRoad(global_data.groups[i].id);
} // end-chase-move
if(lvlAhtung==0 && global_data.groups[i].sostav.items.length==0 ||
   lvlAhtung==0 && Ahtung_UL(global_data.groups[i].sostav.leader.id)) { // ahtung-lvl-min
lvlahCtrl=1;
} // end-ahtung-lvl-min
if(lvlAhtung==1 && global_data.groups[i].sostav.items.length>=0) { // ahtung-lvl-max
lvlahCtrl=2;
} // end-ahtung-lvl-max
if(!ahtung_list[global_data.groups[i].sostav.leader.id]) { // ahtung-list
ahtung_list[global_data.groups[i].sostav.leader.id]=0;
} // end-ahtung-list
if(ahtung_list[global_data.groups[i].sostav.leader.id]==0) { // audio
if(lvlAhtung==0 && lvlahCtrl==1) playHome("bleep","mp3","audio_rr");
if(lvlAhtung==1 && lvlahCtrl==2) playHome("bleep","mp3","audio_rr");
} // end-audio
ahCtrl=1;
}}}
} catch (e) {document.getElementById("log_box_0").innerHTML="<span id=LA0></span>"+e;}; // AHTUNG-FAIL
if(ahCtrl==1) {
if(lvlAhtung==0 && lvlahCtrl==1) {
document.getElementById("log_box_0").innerHTML="<b id=LA0>AHTUNG!</b>"+my_test_ahtung_msg;
}
if(lvlAhtung==1 && lvlahCtrl==2) {
document.getElementById("log_box_0").innerHTML="<b id=LA0>AHTUNG!</b>"+my_test_ahtung_msg;
}
}
lvlahCtrl=0;
ahCtrl=0;
my_test_ahtung_msg="";
setTimeout("newClientForestTest('ahtung')",1500);
}
if(a=="ahtung_act") {
if(my_test_ahtung==0) {
my_test_ahtung=1;
newClientForestTest("ahtung");
document.getElementById("my_ahtung").style.color="red";
} else {
my_test_ahtung=0;
document.getElementById("my_ahtung").style.color="#FEBE1E";
}
}
if(a=="five_act") {
if(my_test_five==0) {
if(my_test_one==1) { // off-one
my_test_one=0;
document.getElementById("my_one").style.color="#FEBE1E";
document.getElementById("one_numSearch").style.display="none";
document.getElementById("one_harvester").style.display="none";
} // end-off-one
my_test_five=1;
document.getElementById("my_five").style.color="red";
document.getElementById("map_five").style.display="";
} else {
my_test_five=0;
document.getElementById("my_five").style.color="#FEBE1E";
document.getElementById("map_five").style.display="none";
}
}
if(a=="move_stop") {
for(i in RadiusCraftAttack) {
if(b>0 && b==i) {
document.getElementById("napr"+i).innerHTML=""
+"<img src=\"https://"+hostname_oil+"/img/arrow/cencel.gif\" width=14 height=14 border=0 "
+"style=\"margin-left:5px;margin-top:2px;cursor:pointer;\" onclick=\""
+"clearTimeout(tmID[0]);MoveBoxCell=new Array();"
+"my_test_move_point=0;"
+"my_test_move=0;"
+"newClientForestTest('move_act','btn_stop');"
+"playHome('ButtonCancel','mp3','audio_rr');\" title=\"Stop\">";
} else {
document.getElementById("napr"+i).innerHTML=""
+"<img src=\"https://"+hostname_oil+"/img/arrow/zero.gif\" width=14 height=14 border=0 "
+"style=\"margin-left:5px;margin-top:2px;cursor:pointer;\" title=\"No-Move\">";
}}
}
if(a=="one_move_act") {
for(i in RadiusCraftAttack) {
document.getElementById("napr"+i).innerHTML=""
+"<img src=\"https://"+hostname_oil+"/img/arrow/zero.gif\" width=14 height=14 border=0 "
+"style=\"margin-left:5px;margin-top:2px;cursor:pointer;\" onclick=\""
+"my_test_move_napr="+i+";"
+"my_test_harvester_move_napr="+i+";"
+"newClientForestTest('move_stop',"+i+");"
+"newClientForestTest(4,0);"
+"newClientForestTest(1);"
+"document.getElementById('modal_form').innerHTML='NaN';\" title=Move>";
}
}
if(a=="move_act") {
if(my_test_move==0) {
document.getElementById("my_one").style.visibility="visible";
document.getElementById("my_five").style.visibility="visible";
my_test_move=1;
document.getElementById("my_move").style.color="red";
for(i in RadiusCraftAttack) {
document.getElementById("napr"+i).innerHTML=""
+"<img src=\"https://"+hostname_oil+"/img/arrow/zero.gif\" width=14 height=14 border=0 "
+"style=\"margin-left:5px;margin-top:2px;cursor:pointer;\" onclick=\""
+"my_test_move_napr="+i+";"
+"my_test_harvester_move_napr="+i+";"
+"newClientForestTest('move_stop',"+i+");"
+"newClientForestTest(4,0);"
+"newClientForestTest(1);"
+"document.getElementById('modal_form').innerHTML='NaN';\" title=Move>";
}
if(prozr==0) Client.send("actNewMaps-RezhimProzrach=1");
if(b=="btn" && my_cfg_res_travy==0) MyDump(b,a,global_data.my_group.sostav.leader.nick);
} else {
document.getElementById("my_one").style.visibility="hidden";
document.getElementById("my_five").style.visibility="hidden";
my_test_move=0;
my_test_move_point=0;
clearTimeout(tmID[0]);
document.getElementById("my_move").style.color="#FEBE1E";
for(i in RadiusCraftAttack) {
document.getElementById("napr"+i).innerHTML=""
+"<img src=\"https://"+hostname_oil+"/img/arrow/zero.gif\" width=14 height=14 border=0 "
+"style=\"margin-left:5px;margin-top:2px;cursor:pointer;\" title=\"No-Move\">";
}}
}
if(a=="search_stop") {
document.getElementById("WoodCr").innerHTML=""
+"<img src=\"https://"+hostname_oil+"/img/arrow/cencel.gif\" width=14 height=14 border=0 "
+"style=\"margin-left:5px;margin-top:2px;cursor:pointer;\" onclick=\""
+"playHome('ButtonCancel','mp3','audio_rr');"
+"clearInterval(timer_int);"
+"clearTimeout(tmID[0]);"
+"clearTimeout(tmID[1]);"
+"Client.send('actNewMaps-CancelEvent=2');"
+"newClientForestTest('search');"
+"document.getElementById('log_box_0').innerHTML='<span id=LA0></span>';"
+"document.getElementById('modal_form').innerHTML='NaN';\" title=Stop>";
}
if(a=="work_stop") {
document.getElementById("WoodCr2").innerHTML=""
+"<img src=\"https://"+hostname_oil+"/img/arrow/cencel.gif\" width=14 height=14 border=0 "
+"style=\"margin-left:5px;margin-top:2px;cursor:pointer;\" onclick=\""
+"playHome('ButtonCancel','mp3','audio_rr');"
+"clearInterval(timer_int);"
+"clearTimeout(tmID[0]);"
+"clearTimeout(tmID[1]);"
+"Client.send('actNewMaps-CancelEvent=3');"
+"newClientForestTest('work');"
+"document.getElementById('log_box_0').innerHTML='<span id=LA0></span>';"
+"document.getElementById('modal_form').innerHTML='NaN';\" title=Stop>";
}
if(a=="search") {
document.getElementById("WoodCr").innerHTML=""
+"<img src=\"https://"+hostname_oil+"/img/arrow/zero.gif\" width=14 height=14 border=0 "
+"style=\"margin-left:5px;margin-top:2px;cursor:pointer;\" onclick=\""
+"document.getElementById('log_box_0').innerHTML='<span id=LA0></span>';"
+"if(my_test_five==0 && my_test_one==0){"
+"rcaFiveSearchID=new Array();"
+"RadiusCraftAttack[1]['my_id']=-1;"
+"newClientForestTest(2);"
+"}else{"
+"sNumCtrl.step=0;"
+"document.getElementById('modal_form').innerHTML='NaN';"
+"document.getElementById('log_box_0').innerHTML='<span id=LA0></span>Выдели курсором клетку, нажми Поиск.';"
+"newClientForestTest(5);"
+"}\" title=Start>";
}
if(a=="work") {
document.getElementById("WoodCr2").innerHTML=""
+"<img src=\"https://"+hostname_oil+"/img/arrow/zero.gif\" width=14 height=14 border=0 "
+"style=\"margin-left:5px;margin-top:2px;cursor:pointer;\" onclick=\""
+"playHome('Teuton','mp3','audio_ff');"
+"if(my_test_five==0){my_resource_id=-1;}"
+"newClientForestTest(3);"
+"newClientForestTest('work_stop');"
+"document.getElementById('modal_form').innerHTML='NaN';\" title=Start>";
}
if(a==0 && my_test_five==0) { // =СУНДУК=
for(i in global_data.abs_poses) { // BOX
if(global_data.abs_poses[i].type && global_data.wait_event==0 && global_data.my_group.stay ||
   global_data.abs_poses[i].type && global_data.wait_event==undefined && global_data.my_group.stay) {
if(global_data.abs_poses[i].type==76 || trava(2,global_data.abs_poses[i].type,global_data.base_items[i].id)) { // СУНДУК
if(!MoveBoxCell[global_data.base_items[i].id]) {
document.getElementById("log_box_0").innerHTML="<span id=LA0></span>"
+img_by_type[global_data.abs_poses[i].type].title+"<br>"
+"Go to:<span"
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+global_data.base_items[i].id+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"return false;\" "
+my_element_hover_0+">"
+global_data.base_items[i].id+"</span>";
document.getElementById("log_tab_0").click();
MoveBoxRoad[MoveBoxRoad.length]=global_data.base_items[id_to_abs[gid]].id; // cell-start
MoveBoxRoad[MoveBoxRoad.length]=global_data.base_items[i].id;             // cell-end
MoveBoxCell[global_data.base_items[i].id]=1;
Client.send("actNewMaps-GotoKletka="+global_data.base_items[i].id); // Go
newClientForestTest("cursor",global_data.base_items[i].id);
return tmID[0]=setTimeout("newClientForestTest(0)",1500);
}}}} // END-BOX
if(MyRoad.length!=0 && global_data.wait_event==0 && global_data.my_group.stay ||
   MyRoad.length!=0 && global_data.wait_event==undefined && global_data.my_group.stay) { // continued
for(j in global_data.base_items) { // begin-cell
if(MyRoad[MyRoad.length-1]==global_data.base_items[j].id) {
var log_text="<span id=LA0></span>"
+"Begin:<span"
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+global_data.base_items[j].id+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"return false;\" "
+my_element_hover_0+">"+global_data.base_items[j].id+"</span><br>";
log_msg(log_text,0);
Client.send("actNewMaps-GotoKletka="+global_data.base_items[j].id); // Go
newClientForestTest("cursor",global_data.base_items[j].id);
document.getElementById("my_loader").style.display="none";
return tmID[0]=setTimeout("newClientForestTest(1)",1500);
}} // end-begin-cell
} // end-continued
if(MoveBoxRoad.length!=0 && global_data.wait_event==0 && global_data.my_group.stay ||
   MoveBoxRoad.length!=0 && global_data.wait_event==undefined && global_data.my_group.stay) { // BACK
for(i in global_data.base_items) {
if(MoveBoxRoad[MoveBoxRoad.length-1]==global_data.base_items[i].id) {
var log_text="<span id=LA0></span>"
+"BACK:["+(MoveBoxRoad.length-1)+"]:<span"
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+global_data.base_items[i].id+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"return false;\" "
+my_element_hover_0+">"+MoveBoxRoad[MoveBoxRoad.length-1]+"</span><br>";
log_msg(log_text,0);
Client.send("actNewMaps-GotoKletka="+MoveBoxRoad[MoveBoxRoad.length-1]); // Go
newClientForestTest("cursor",MoveBoxRoad[MoveBoxRoad.length-1]);
document.getElementById("my_loader").style.display="none";
MoveBoxRoad.pop();
return tmID[0]=setTimeout("newClientForestTest(0)",1500);
}}
} // END-BACK
document.getElementById("my_loader").style.display="";
document.getElementById("my_loader").innerHTML="Other";
document.getElementById("infob").innerHTML="OtherA:"+Math.round(Math.random()*888);
return tmID[0]=setTimeout("newClientForestTest(0)",1500);
}
if(a==1) { // MOVE
move_dt++;
if(my_test_five==1 && global_data.my_group.stay && move_dt==120) { // try-five-move
var log_text="try Move<br>";
log_msg(log_text,0);
Client.send("actNewMaps-GotoKletka="+my_test_move_point); // Go try Move
newClientForestTest("cursor",my_test_move_point);
} // end-try-five-move
if(my_test_five==0 && global_data.my_group.stay && move_dt==3 ||
   my_test_five==0 && global_data.my_group.stay && move_dt==120) { // try-move
my_test_move_point=global_data.base_items[Rca_Cell[id_to_abs[gid]]["move"][my_test_move_napr]].id;
for(i in move_cell_try) {
if(global_data.base_items[i].id==my_test_move_point) {
var log_text="try Move<br>";
log_msg(log_text,0);
Client.send("actNewMaps-GotoKletka="+global_data.base_items[move_cell_try[i]].id); // Go try Move
newClientForestTest("cursor",global_data.base_items[move_cell_try[i]].id);
if(document.getElementById("RoadPoint_"+my_test_move_point)) {
document.getElementById("RoadPoint_"+my_test_move_point).style.color="red";
MyRoad.pop();
}
my_test_move_point=global_data.base_items[move_cell_try[i]].id;
var log_text="<span id=RoadCount_"+my_test_move_point+">"
+MyRoad.length+"</span>:<span id=RoadPoint_"+my_test_move_point
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+my_test_move_point+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"my_road_step="+my_test_move_point+";clearTimeout(tmID[2]);newClientForestTest('MyRoad',0);return false;\" "
+my_element_hover_0+">"
+my_test_move_point+"</span><br>";
log_msg(log_text,1); // Log-Road
MyRoad[MyRoad.length]=my_test_move_point; // Добавить клетку маршрута
localStorage["RoadStory"]=MyRoad; // Локальное хранилище
}}
} // end-try-move
document.getElementById("infob").innerHTML="Move:Stay:"+global_data.my_group.stay+",Cell:"+my_test_move_point
+",DT:"+move_dt;
if(my_test_five==0 && my_cfg_res_other==1) { // СУНДУК
for(i in global_data.abs_poses) { // loop
if(global_data.abs_poses[i].type) {
if(global_data.abs_poses[i].type==76 || trava(2,global_data.abs_poses[i].type,global_data.base_items[i].id)) {
if(!MoveBoxCell[global_data.base_items[i].id]) {
var log_text=img_by_type[global_data.abs_poses[i].type].title+"<br>";
log_msg(log_text,0);
document.getElementById("log_tab_0").click();
Client.send("actNewMaps-GotoKletka="+global_data.base_items[i].id); // Go
newClientForestTest("cursor",global_data.base_items[i].id);
MoveBoxRoad[MoveBoxRoad.length]=global_data.base_items[id_to_abs[gid]].id; // cell-start
MoveBoxCell[global_data.base_items[i].id]=1;
if(MyRoad.length==0) { // add-cell-road
var log_text=MyRoad.length+":<span id=RoadPoint_"+global_data.base_items[i].id
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+global_data.base_items[i].id+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"my_road_step="+global_data.base_items[i].id+";"
+"clearTimeout(tmID[2]);newClientForestTest('MyRoad',0);return false;\" "
+my_element_hover_0+">"+global_data.base_items[i].id+"</span><br>";
log_msg(log_text,1); // Log-Road
MyRoad[MyRoad.length]=global_data.base_items[i].id; // Добавить клетку маршрута
localStorage["RoadStory"]=MyRoad; // Локальное хранилище
} // end-add-cell-road
playHome("BagOMoney","mp3","audio_ff");
return tmID[0]=setTimeout("newClientForestTest(0)",1500); // передать управление
}}}} // end-loop
}
if(global_data.my_group.stay) {
if(my_test_move_point!=0) {
newClientForestTest(6);
for(i in RadiusCraftAttack) {
if(RadiusCraftAttack[i]["id"]==my_test_move_point || global_data.my_group.id==my_test_move_point) {
my_test_move_point=0;
if(my_test_five==1) { // FIVE-GO-SEARCH
return newClientForestTest(2);
}
return tmID[0]=setTimeout("newClientForestTest(1)", 1000);
}}
return tmID[0]=setTimeout("newClientForestTest(1)", 1000);
}
my_test_move_point=global_data.base_items[Rca_Cell[id_to_abs[gid]]["move"][my_test_move_napr]].id;
if(my_test_five==1) { // FIVE
my_test_move_point=0;
for(i in rcaFiveID) {
if(rcaFiveID[i]>0 && rcaFiveID[i]!=1) {
my_test_move_point=rcaFiveID[i];
my_test_five_lostID=rcaFiveID[i];
newClientForestTest(4,1);
document.getElementById("mapFiveCell_"+my_test_move_point).innerHTML="&#8226;";
break;
}}
if(my_test_move_point==0) { // STOP-FIVE
clearTimeout(tmID[0]);
my_test_move=0;
playHome("call_in","mp3","audio_ff");
if(my_test_harvester==1) { // harvester
newClientForestTest("one_act");
if(document.getElementById("RoadCount_"+my_test_five_center)) {
document.getElementById("RoadCount_"+my_test_five_center).style.color="white";
document.getElementById("RoadCount_"+my_test_five_center).style.backgroundColor="blue";
} else if(document.getElementById("RoadCount_"+MyRoad[MyRoad.length-1])) {
document.getElementById("RoadCount_"+MyRoad[MyRoad.length-1]).style.color="orange";
document.getElementById("RoadCount_"+MyRoad[MyRoad.length-1]).style.backgroundColor="blue";
}
Client.send("actNewMaps-GotoKletka="+my_test_five_center); // five-center
newClientForestTest("cursor",my_test_five_center);
newClientForestTest("move_stop",my_test_harvester_move_napr);
newClientForestTest(4,0);
my_test_move=1;
document.getElementById("modal_form").innerHTML="NaN";
return tmID[0]=setTimeout("newClientForestTest(1)", 1500);
} // end-harvester
return newClientForestTest("move_act","five_stop");
}
}
my_test_move_count++;
var log_text="Move:<span style=color:white;>"+my_test_move_count+"</span>:"
+"<span onclick=\"Client.send('actNewMaps-GotoKletka='+"+my_test_move_point+");playHome('Select2','mp3','audio_ff');\" "
+my_element_hover_0+">"+my_test_move_point+"</span><br>";
log_msg(log_text,0);
if(my_test_five==0) { // MyRoad
var log_text="<span id=RoadCount_"+my_test_move_point+">"
+MyRoad.length+"</span>:<span id=RoadPoint_"+my_test_move_point
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+my_test_move_point+");playHome('Select2','mp3','audio_ff');\""
+" oncontextmenu=\"my_road_step="+my_test_move_point+";clearTimeout(tmID[2]);newClientForestTest('MyRoad',0);return false;\" "
+my_element_hover_0+">"+my_test_move_point+"</span><br>";
log_msg(log_text,1); // Log-Road
MyRoad[MyRoad.length]=my_test_move_point; // Добавить клетку маршрута
localStorage["RoadStory"]=MyRoad; // Локальное хранилище
}
move_dt=0;
Client.send("actNewMaps-GotoKletka="+my_test_move_point);
newClientForestTest("cursor",my_test_move_point);
playHome("Select2","mp3","audio_ff");
if(my_test_one==1) {
return tmID[0]=setTimeout("newClientForestTest('one',0)", 3000); // передать управление =ONE=
}
}
tmID[0]=setTimeout("newClientForestTest(1)", 1000);
}
// SEARCH
if(a==2 && global_data.my_group.stay && global_data.wait_event<3 ||
   a==2 && global_data.my_group.stay && global_data.wait_event==undefined) {
newClientForestTest("search_stop");
if(global_data.wait_event!=undefined) { // WAIT
if(global_data.wait_event!=0) {
if(my_test_five==1) rcaFiveSearchID[rcaFiveSearchID[0]]=1;
if(search_dt==60) {
search_dt=0;
playHome("owl","mp3","audio_ff");
return tmID[0]=setTimeout("newClientForestTest(2)", 1000);
}
search_dt++;
clearTimeout(tmID[8]);
document.getElementById("infob").innerHTML="SEARCH:60:"+search_dt+",EventWait:"+global_data.wait_event;
return tmID[0]=setTimeout("newClientForestTest(2)", 1000);
}}
search_dt=0;
var my_find_lost=document.getElementById("modal_form").innerHTML; // LOST-FIND
for(q in RadiusCraftAttack) { // Обработка для дальнейшей операции
if(RadiusCraftAttack[q]["flg"]==8) {
var my_good_event=TaskReg[1].test(document.getElementById("modal_form").innerHTML);
if(my_good_event) {
RadiusCraftAttack[q]["flg"]=0;
} else {RadiusCraftAttack[q]["flg"]=1;}
}}
if(global_data.my_group.id!=RadiusCraftAttack[1]["my_id"]) {
for(f in RadiusCraftAttack) {
RadiusCraftAttack[f]["flg"]=0;
}
document.getElementById("modal_form").innerHTML="Search";
RadiusCraftAttack[1]["my_id"]=global_data.my_group.id;
newClientForestTest(6);
}
for(i in RadiusCraftAttack) {
if(global_data.abs_poses[RadiusCraftAttack[i]["direct"]] && RadiusCraftAttack[i]["flg"]<=0) { // Поиск цели
if(checkMainResource(RadiusCraftAttack[i]["direct"],1)) { // ___CHECK_RES___

if(my_test_five==1 && global_data.my_group.stay && global_data.wait_event==undefined ||
   my_test_five==1 && global_data.my_group.stay && global_data.wait_event==0) { // FIVE-NO-TURN
var my_good_event=TaskReg[1].test(document.getElementById("modal_form").innerHTML);
if(rcaFiveSearchID[RadiusCraftAttack[i]["id"]] && !my_good_event) { // пропустить
document.getElementById("infob").innerHTML="No-Turn:"+RadiusCraftAttack[i]["id"];
RadiusCraftAttack[i]["flg"]=1;
return tmID[0]=setTimeout("newClientForestTest(2)",777);
}
}

if(global_data.my_group.napr==i && global_data.wait_event==undefined) {
var log_text=document.getElementById("modal_form").innerHTML+"<br>";
log_msg(log_text,0);
if(my_test_five==1) { // BUILD-FIVE-CELL
try {
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).title=""
+document.getElementById("modal_form").innerHTML;
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).style.backgroundColor="white"; // Моя клетка
} catch (e) {document.getElementById("log_box_0").innerHTML="<span id=LA0></span>Ошибка. id_to_abs null";}
}
RadiusCraftAttack[i]["flg"]=-1;
Client.send("actNewMaps-StartSearch=1");
newClientForestTest("search_stop");
clearTimeout(tmID[8]);
tmID[8]=setTimeout("newClientForestTest('wait_event',2)",1000); // START SEARCH 1
if(my_test_five==1) { // FIVE-LOST-ID
my_test_five_lostID=RadiusCraftAttack[i]["id"];
newClientForestTest(4,1);
rcaFiveSearchID[0]=RadiusCraftAttack[i]["id"];
}
return playHome("SpaceFadeIn","mp3","audio_rr");
}
if(global_data.my_group.napr==i && global_data.wait_event==0) { // Search & Work
var my_good_event=TaskReg[1].test(document.getElementById("modal_form").innerHTML);
var my_bad_event=/(Вы должны иметь в руках|Вы травмированы)(.+)/.test(document.getElementById("modal_form").innerHTML);
if(my_good_event && !my_bad_event) {
if(my_test_five==1) { // BUILD-FIVE-CELL
try {
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).title=""
+document.getElementById("modal_form").innerHTML;
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).style.backgroundColor="gold"; // Моя клетка
} catch (e) {document.getElementById("log_box_0").innerHTML="<span id=LA0></span>Ошибка1. Выход за пределы радиуса.";}
}
var log_text="<span onclick=\"Client.send('actNewMaps-GotoKletka='+"+global_data.base_items[id_to_abs[gid]].id+");\" "
+my_element_hover_0+">"+document.getElementById("modal_form").innerHTML+"</span><br>";
log_msg(log_text,0);
var ts_speed=50;
my_resource_id=RadiusCraftAttack[i]["id"];
var my_good_event=TaskReg[2].test(document.getElementById("modal_form").innerHTML);
if(my_good_event) { // task-separator
var my_split_event=TaskReg[2].exec(document.getElementById("modal_form").innerHTML);
if(my_split_event[2]=="прямо") my_resource_id=RadiusCraftAttack[i]["id"];
if(my_split_event[2]=="слева") {
ts_speed=3000;
var ts_turn=parseInt(i,10)-1;
if(ts_turn==0) ts_turn=8;
my_resource_id=RadiusCraftAttack[ts_turn]["id"];
Client.send("actNewMaps-ChangeNapr=0");
console.log("SEARCH LL",my_resource_id);
}
if(my_split_event[2]=="справа") {
ts_speed=3000;
var ts_turn=parseInt(i,10)+1;
if(ts_turn==9) ts_turn=1;
my_resource_id=RadiusCraftAttack[ts_turn]["id"];
Client.send("actNewMaps-ChangeNapr=1");
console.log("SEARCH RR",my_resource_id);
}
} else { // separator-first-ever
var my_split_event=TaskReg[1].exec(document.getElementById("modal_form").innerHTML);
if(my_split_event[2]=="прямо") my_resource_id=RadiusCraftAttack[i]["id"];
if(my_split_event[2]=="слева") {
ts_speed=3000;
var ts_turn=parseInt(i,10)-1;
if(ts_turn==0) ts_turn=8;
my_resource_id=RadiusCraftAttack[ts_turn]["id"];
Client.send("actNewMaps-ChangeNapr=0");
console.log("SEARCH L",my_resource_id);
}
if(my_split_event[2]=="справа") {
ts_speed=3000;
var ts_turn=parseInt(i,10)+1;
if(ts_turn==9) ts_turn=1;
my_resource_id=RadiusCraftAttack[ts_turn]["id"];
Client.send("actNewMaps-ChangeNapr=1");
console.log("SEARCH R",my_resource_id);
}  // end-separator-first-ever
} // end-task-separator
newClientForestTest("search");
newClientForestTest("work_stop");
if(ts_speed==50) playHome("Teuton","mp3","audio_ff");
if(ts_speed==3000) playHome("gull","mp3","audio_ff");
document.getElementById("modal_form").innerHTML="NaN";
return tmID[1]=setTimeout("newClientForestTest(3)",ts_speed); // GO-WORK
} else { // Пустой рабочий радиус
if(RadiusCraftAttack[i]["flg"]==-1) {
document.getElementById("modal_form").innerHTML="NaN";
RadiusCraftAttack[i]["flg"]=8;
return newClientForestTest(2);
}
RadiusCraftAttack[i]["flg"]=8;
newClientForestTest("search_stop");
setTimeout("document.getElementById('overlay').click();",3000);
var my_good_event=TaskReg[0].test(my_find_lost);
try {
if(my_test_five==1 && !my_good_event) { // BUILD-FIVE-CELL
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).title=""
+my_find_lost;
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).style.backgroundColor="white"; // Моя клетка
} else if(my_test_five==1) {
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).title=""
+my_find_lost;
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).style.backgroundColor="lightpink"; // Моя клетка
}
} catch (e) {
document.getElementById("log_box_0").innerHTML="<span id=LA0></span>Ошибка2. Выход за пределы радиуса.";
} // -------ERROR

var log_text="<span onclick=\"Client.send('actNewMaps-GotoKletka='+"+global_data.base_items[id_to_abs[gid]].id+");\" "
+my_element_hover_0+">"+document.getElementById("modal_form").innerHTML+"</span><br>";
log_msg(log_text,0);
document.getElementById("modal_form").innerHTML="NaN";
Client.send("actNewMaps-StartSearch=1");
clearTimeout(tmID[8]);
tmID[8]=setTimeout("newClientForestTest('wait_event',2)",1000); // START SEARCH 2
if(my_test_five==1) { // FIVE-LOST-ID
my_test_five_lostID=RadiusCraftAttack[i]["id"];
newClientForestTest(4,1);
rcaFiveSearchID[0]=RadiusCraftAttack[i]["id"];
}
return playHome("SpaceFadeIn","mp3","audio_rr");
}
}

if(global_data.my_group.napr<i) { // По часовой
var my_test_turn=i-global_data.my_group.napr;
for(var j=0; j<my_test_turn; j++) {
var log_text="По часовой "+my_test_turn+"<br>";
log_msg(log_text,0);
Client.send("actNewMaps-ChangeNapr=1");
tCtrl=parseInt(global_data.my_group.napr,10)+1;
return tmID[0]=setTimeout("TurnCheck(tCtrl,2)",500);
}
} else if(global_data.my_group.napr>i) { // Против часовой
var my_test_turn=global_data.my_group.napr-i;
for(var j=0; j<my_test_turn; j++) {
var log_text="Против часовой "+my_test_turn+"<br>";
log_msg(log_text,0);
Client.send("actNewMaps-ChangeNapr=0");
tCtrl=parseInt(global_data.my_group.napr,10)-1;
return tmID[0]=setTimeout("TurnCheck(tCtrl,2)",500);
}}
break;
}}
}
var my_good_event=TaskReg[0].test(my_find_lost);
try {
if(my_test_five==1 && !my_good_event) { // BUILD-FIVE-CELL
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).title=""
+my_find_lost;
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).style.backgroundColor="white"; // Моя клетка
} else if(my_test_five==1) {
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).title=""
+my_find_lost;
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).style.backgroundColor="lightpink"; // Моя клетка
}
} catch (e) {
document.getElementById("log_box_0").innerHTML="<span id=LA0></span>Ошибка3. Выход за пределы радиуса.";
} // -------ERROR

if(my_test_five==0) {
var log_text=document.getElementById("modal_form").innerHTML+"<br>FINISH-SEARCH<br>";
log_msg(log_text,0);
}
newClientForestTest("search");
playHome("WindowDwn","mp3","audio_rr");
if(my_test_five==1) { // FIVE-GO-STEP
setTimeout("document.getElementById('overlay').click();",3000);
var log_text=document.getElementById("modal_form").innerHTML+"<br>FINISH-SEARCH<br>";
log_msg(log_text,0);
newClientForestTest(1); // GO-MOVE
}
}
if(a==3) { // WORK
if(document.getElementById("capchacode")) {
document.getElementById("infob").innerHTML="CAPCHA:"
+"EventWait:"+global_data.wait_event;
return tmID[1]=setTimeout("newClientForestTest(3)",1000);
}
var my_bad_event=/Вы травмированы(.+)|(.+)Вы вывихнули руку/.test(document.getElementById("modal_form").innerHTML);
if(my_bad_event) {
var log_text=""
+"<span id=\"hif\">"
+"<img border=\"0\" src=\"img/magic/koleka.gif\" "
+"onload=\"frames['persrefr'].location='mapupdate.html?xdac='+Math.random();"
+"top.frames[1].document.getElementById('dinjcell').innerHTML='<table><td></td><td>осталось</td><td>5m</td></table>';"
+"setTimeout('R(3)',100);"
+"document.getElementById('hif').innerHTML='<img border=0 src=img/magic/koleka.gif width=14 height=14>';"
+"\" width=\"14\" height=\"14\"></span><span id=\"info_hand1\"></span><br>"
+document.getElementById("modal_form").innerHTML+"<br>";
log_msg(log_text,0);
document.getElementById("modal_form").innerHTML="NaN";
newClientForestTest("work");
return playHome("call_in","mp3","audio_ff");
}
var my_bad_event=/Вы должны иметь в руках(.+)/.test(document.getElementById("modal_form").innerHTML);
if(my_bad_event) {
var log_text=""
+"<span id=\"hif\">"
+"<a href=\"javascript:void(0);\" onclick=\"R(0);R(1);frames['handforest'].location.href='bag_type_17.html';\" title=\"Инструменты\">"
+"<img border=\"0\" src=\"https://"+hostname_oil+"/img/arrow/handforest.gif\" "
+"onload=\"if(RHandUp==1){R(0);R(1);frames['handforest'].location.href='bag_type_17.html';}"
+"\" width=\"28\" height=\"14\"></a></span><br>"
+document.getElementById("modal_form").innerHTML+"<br>";
log_msg(log_text,0);
document.getElementById('modal_form').innerHTML='NaN';
newClientForestTest("work");
return playHome("call_in","mp3","audio_ff");
}
newClientForestTest(6);
for(i in RadiusCraftAttack) {
if(RadiusCraftAttack[i]["id"]==my_resource_id || my_resource_id==-1) {
if(global_data.abs_poses[RadiusCraftAttack[i]["direct"]]) { // Поиск цели
if(checkMainResource(RadiusCraftAttack[i]["direct"],0)) { // ___CHECK_RES___
if(global_data.my_group.napr==i && global_data.wait_event>=3) { // WAIT
work_dt++;
clearTimeout(tmID[8]);
document.getElementById("infob").innerHTML="WORK:"
+work_dt+",EventWait:"+global_data.wait_event;
if(work_dt==630 && my_test_five==1) {
playHome("owl","mp3","audio_ff");work_dt=0;
Client.send("actNewMaps-StartSearch=1");
}
return tmID[1]=setTimeout("newClientForestTest(3)",1000);
}
if(my_test_five==1) work_dt=0;
if(global_data.my_group.napr==i && global_data.wait_event==0 ||
   global_data.my_group.napr==i && global_data.wait_event==undefined) { // КОПАЙ
if(persIframe.document.getElementById("IMG_rarm").title!=RTitle) { // нет инструмента
var log_text=""
+"<span id=\"hif\">"
+"<a href=\"javascript:void(0);\" onclick=\"R(0);R(1);frames['handforest'].location.href='bag_type_17.html';\" title=\"Инструменты\">"
+"<img border=\"0\" src=\"https://"+hostname_oil+"/img/arrow/handforest.gif\" "
+"onload=\"if(RHandUp==1){R(0);R(1);frames['handforest'].location.href='bag_type_17.html';}"
+"\" width=\"28\" height=\"14\"></a></span><br>"+RTitle+"<br>";
log_msg(log_text,0);
document.getElementById('modal_form').innerHTML='NaN';
setTimeout("newClientForestTest('work')",10);
document.getElementById("audio_ff").innerHTML="";
setTimeout("if(!document.getElementById('capchacode'))document.getElementById('overlay').click();",3000);
return playHome("UnitDisbanded","mp3","audio");
}
if(document.getElementById("modal_form").innerHTML!="NaN") {
var log_text=document.getElementById("modal_form").innerHTML+"<br>";
log_msg(log_text,0);
}
setTimeout("if(!document.getElementById('capchacode'))document.getElementById('modal_form').innerHTML='+1';",3000);
setTimeout("if(!document.getElementById('capchacode'))document.getElementById('overlay').click();",3000);
clearTimeout(tmID[8]);
Client.send("actNewMaps-StartDobycha=1");
return tmID[8]=setTimeout("newClientForestTest('wait_event',3)",1000); // START WORK
}
}} else if(i==RadiusCraftAttack.length-1 && my_test_five==0 || my_test_five==1) {
var log_text="<span id=log_work>FINISH-WORK</span><br>";
log_msg(log_text,0);
if(my_test_harvester==0) playHome("call_in","mp3","audio_ff");
my_resource_id=0;
newClientForestTest("work");
if(my_test_five==1) { // five-go
setTimeout("if(!document.getElementById('capchacode'))document.getElementById('overlay').click();",3000);
for(w in RadiusCraftAttack) { // test-five-go
if(global_data.abs_poses[RadiusCraftAttack[w]["direct"]] && RadiusCraftAttack[w]["flg"]<=0) { // Поиск цели
if(checkMainResource(RadiusCraftAttack[w]["direct"],1)) { // ___CHECK_RES___
document.getElementById("log_work").title="five-go-search-"+w;
document.getElementById("modal_form").innerHTML="Search";
return tmID[0]=setTimeout("newClientForestTest(2)", 1000); // five-go-search
}}} // end-test-five-go
document.getElementById("log_work").title="five-go-move";
var log_text=document.getElementById("modal_form").innerHTML+"<br>";
log_msg(log_text,0);
return tmID[0]=setTimeout("newClientForestTest(1)", 1000); // five-go-move
} // end-five-go
}}
} // выход из цикла

playHome("call_in","mp3","audio_ff");
my_resource_id=0;
newClientForestTest("work");
}
if(a==4) { // Init-FIVE
if(b==0) {
if(my_test_five==1) { // BUILD-FIVE-MAP
document.getElementById("log_box_0").innerHTML="<span id=LA0></span>MAP-FIVE-CELL";
BuildMapFiveCell(0);
}
// Стартовые параметры FIVE
for(i in rcaFiveID) { // null rcaFiveID
if(rcaFiveID[i]!=1) {
rcaFiveID[i]=0;
}}
for(i in rcaFiveCell) {
if(global_data.abs_poses[rcaFiveCell[i]]) { // Поиск цели
if(checkMainResource(rcaFiveCell[i],1)) { // ___CHECK_RES___

for(j in MyCellCraftDone) { // my_cell_craft_check
if(MyCellCraftDone[j]==global_data.base_items[rcaFiveCell[i]].id) {
rcaFiveSearchID[global_data.base_items[rcaFiveCell[i]].id]=1; // пропустить поиск
BuildMapFiveCell(2,rcaFiveCell[i]);
my_cell_craft_check=1;
break;
}
}

if(my_cell_craft_check!=1) {
rcaFiveID[i]=global_data.base_items[rcaFiveCell[i]].id;
if(my_test_five==1) { // FIVE-ON
BuildMapFiveCell(1,rcaFiveCell[i]);
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).title="ЦЕНТР";
document.getElementById("mapFiveCell_"+global_data.base_items[id_to_abs[gid]].id).style.backgroundColor="red"; // Моя клетка
my_test_five_center=global_data.base_items[id_to_abs[gid]].id;
var log_text=i+":<span id=FivePoint_"+global_data.base_items[rcaFiveCell[i]].id
+" onclick=\"Client.send('actNewMaps-GotoKletka='+"+global_data.base_items[rcaFiveCell[i]].id+");\" "
+my_element_hover_0+">"+global_data.base_items[rcaFiveCell[i]].id+"</span><br>";
log_msg(log_text,0); // Log-five
MyCellCraftDone[MyCellCraftDone.length]=global_data.base_items[rcaFiveCell[i]].id; // Добавить клетку маршрута
}
}
my_cell_craft_check=0;
}}
}

var rcaFiveID_count=0;
for(i in rcaFiveID) { // нет не проверенных клеток
rcaFiveID_count+=rcaFiveID[i];
}
if(rcaFiveID_count==1) {
if(my_test_five==1) {
document.getElementById("log_box_0").innerHTML="<span id=LA0></span>"
+"<span style=\"color:lavender;\">В этом радиусе все клетки проверены.</span>";
}
newClientForestTest("search");
if(my_test_five==1) playHome("call_in","mp3","audio_ff");
return;
}

}
if(b==1) {
for(i in rcaFiveID) {
if(rcaFiveID[i]==my_test_five_lostID) {
my_test_five_lostID=0;
rcaFiveID[i]=0;
}}
}

}
if(a==5 && global_data.my_group.stay==1 && global_data.wait_event<3 ||
   a==5 && global_data.my_group.stay==1 && global_data.wait_event==undefined) { // FREE-SEARCH
if(global_data.wait_event!=undefined) { // WAIT
if(global_data.wait_event!=0) {
document.getElementById("infob").innerHTML="SEARCH:"+Math.round(Math.random()*222)+",EventWait:"+global_data.wait_event;
return tmID[0]=setTimeout("newClientForestTest(5)", 1000);
}}
var my_good_event=/NaN/.test(document.getElementById("modal_form").innerHTML);
var my_good_event2=/так же/.test(document.getElementById("modal_form").innerHTML);
if(!my_good_event) {
if(my_good_event2) {playHome("gull","mp3","audio_ff");} // двойной эвент
if(sNumCtrl.step!=sNumCtrl.stop) {
var log_text=document.getElementById("modal_form").innerHTML+"<br>";
log_msg(log_text,0);
document.getElementById("modal_form").innerHTML="NaN";
setTimeout("document.getElementById('overlay').click();",1500);
return newClientForestTest(5);
}
sNumCtrl.step=0;
newClientForestTest("search");
return playHome("WindowDwn","mp3","audio_rr");
}
newClientForestTest(6);
for(i in RadiusCraftAttack) {
if(RadiusCraftAttack[i]["id"]==Client.selected && sNumCtrl.step!=sNumCtrl.stop) {
if(global_data.my_group.napr==i && global_data.wait_event==undefined) { // free-Search
var log_text="Search<br>";
log_msg(log_text,0);
Client.send("actNewMaps-StartSearch=1");
newClientForestTest("search_stop");
playHome("SpaceFadeIn","mp3","audio_rr");
sNumCtrl.step++;
return tmID[0]=setTimeout("newClientForestTest(5)", 1500);
}
if(global_data.my_group.napr==i && global_data.wait_event==0) { // free-Search
var log_text="Search<br>";
log_msg(log_text,0);
Client.send("actNewMaps-StartSearch=1");
newClientForestTest("search_stop");
playHome("SpaceFadeIn","mp3","audio_rr");
sNumCtrl.step++;
return tmID[0]=setTimeout("newClientForestTest(5)", 1500);
}

if(global_data.my_group.napr<i) { // По часовой
var my_test_turn=i-global_data.my_group.napr;
for(var j=0; j<my_test_turn; j++) {
var log_text="По часовой "+my_test_turn+"<br>";
log_msg(log_text,0);
Client.send("actNewMaps-ChangeNapr=1");
tCtrl=parseInt(global_data.my_group.napr,10)+1;
return tmID[0]=setTimeout("TurnCheck(tCtrl,5)",500);
}
} else if(global_data.my_group.napr>i) { // Против часовой
var my_test_turn=global_data.my_group.napr-i;
for(var j=0; j<my_test_turn; j++) {
var log_text="Против часовой "+my_test_turn+"<br>";
log_msg(log_text,0);
Client.send("actNewMaps-ChangeNapr=0");
tCtrl=parseInt(global_data.my_group.napr,10)-1;
return tmID[0]=setTimeout("TurnCheck(tCtrl,5)",500);
}}

}
} // выход из цикла
} // end-a-5
if(a==6) {
var myPoses=id_to_abs[gid]; // Моя клетка
RadiusCraftAttack[1]["direct"]=myPoses-Rca_Cell[myPoses]["cell"][0];
RadiusCraftAttack[2]["direct"]=myPoses-Rca_Cell[myPoses]["cell"][1];
RadiusCraftAttack[3]["direct"]=myPoses+Rca_Cell[myPoses]["cell"][2];
RadiusCraftAttack[4]["direct"]=myPoses+Rca_Cell[myPoses]["cell"][3];
RadiusCraftAttack[5]["direct"]=myPoses+Rca_Cell[myPoses]["cell"][4];
RadiusCraftAttack[6]["direct"]=myPoses+Rca_Cell[myPoses]["cell"][5];
RadiusCraftAttack[7]["direct"]=myPoses-Rca_Cell[myPoses]["cell"][6];
RadiusCraftAttack[8]["direct"]=myPoses-Rca_Cell[myPoses]["cell"][7];
RadiusCraftAttack[1]["id"]=global_data.base_items[RadiusCraftAttack[1]["direct"]].id;
RadiusCraftAttack[2]["id"]=global_data.base_items[RadiusCraftAttack[2]["direct"]].id;
RadiusCraftAttack[3]["id"]=global_data.base_items[RadiusCraftAttack[3]["direct"]].id;
RadiusCraftAttack[4]["id"]=global_data.base_items[RadiusCraftAttack[4]["direct"]].id;
RadiusCraftAttack[5]["id"]=global_data.base_items[RadiusCraftAttack[5]["direct"]].id;
RadiusCraftAttack[6]["id"]=global_data.base_items[RadiusCraftAttack[6]["direct"]].id;
RadiusCraftAttack[7]["id"]=global_data.base_items[RadiusCraftAttack[7]["direct"]].id;
RadiusCraftAttack[8]["id"]=global_data.base_items[RadiusCraftAttack[8]["direct"]].id;
}
}

function printTime(s) {
if(s < 0) s=0;
var min = Math.floor(s/60);
if(min < 10) {
min = '0'+min;
}
var sec = s - min*60;
if(sec < 10) {
sec = '0'+sec;
}
document.getElementById("cr0min").innerHTML=min;
document.getElementById("cr0sec").innerHTML=sec;
return min + ":" + sec;
}

/* TEST FUN */
/* TEST FUN */
/* TEST FUN */
/* TEST FUN */
/* TEST FUN */
/* TEST FUN */
/* TEST FUN */
/* TEST FUN */

function playHome(name,type,channel) {
if(type=="mp3") {
var ph_name=name;
if(name=="Teuton" && nAudio==1) ph_name="Select";
if(name=="call_in" && nAudio==1) ph_name="Select2";
if(name=="call_in" && my_test_harvester==0 && TaskRule==0) ph_name="success";
if(name=="Select2" && zAudio==0) return;
if(name=="SpaceFadeIn" && zAudio==0 ||
   name=="SpaceFadeIn" && nAudio==1) return;
if(name=="WindowDwn" && zAudio==0 ||
   name=="WindowDwn" && nAudio==1) return;
document.getElementById(channel).innerHTML=""
+"<audio autoplay>"
+"<source src=\"https://"+hostname_oil+"/audio/"+ph_name+".mp3\" type=\"audio/mpeg\">"
+"</audio>";
}
}

var my_load = function() {
var my_pos_left=parseInt(document.getElementsByTagName("div")[2].style.width,10);

AddIFrame("sound_ff");
AddIFrame("travy");
AddIFrame("handforest");
AddElement("span","audio");
AddElement("span","audio_ff");
AddElement("span","audio_rr");

if(!persIframe.document.getElementById("herbal14")) {
persIframe.document.getElementById("IMG_pers").style.overflow="hidden";
persIframe.document.getElementById("IMG_pers").style.height="165px";
persIframe.document.getElementById("IMG_pers").style.width="165px";
persIframe.document.getElementById("IMG_pers").innerHTML=""
+"<span id=herbal14></span><br>"
+"<span id=herbal15></span><br>"
+"<span id=herbal16></span><br>"
+"<span id=herbal19></span><br>"
+"<span id=herbal20></span>";
}

var my_floater_box=document.createElement("div");
my_floater_box.id="floater";
my_floater_box.style.position="absolute";
my_floater_box.style.backgroundColor="white";
my_floater_box.style.border="1px solid black";
my_floater_box.style.visibility="hidden";
my_floater_box.style.zIndex="8";
my_floater_box.onmouseover=function(){HintOver()};
my_floater_box.onmouseout=function(){HintOut()};
document.body.appendChild(my_floater_box);

var my_load_box_menu=document.createElement("div");
my_load_box_menu.id="panel";
my_load_box_menu.style.width="240px";
if(my_pos_left==739) { // my_left 13x13
my_load_box_menu.style.top="195px";
my_load_box_menu.style.left=parseInt(my_pos_left*0.65,10)+"px";
}
if(my_pos_left==1085) { // my_left 25x25
my_load_box_menu.style.top="375px"; // 118px
my_load_box_menu.style.left=parseInt(my_pos_left*0.83,10)+"px";
}
my_load_box_menu.style.position="absolute";
my_load_box_menu.style.zIndex="7";
my_load_box_menu.style.fontSize="12px";
my_load_box_menu.style.fontFamily="Vardana";
my_load_box_menu.style.border="2px solid #8A492F";
my_load_box_menu.innerHTML=my_box_menu;
document.body.appendChild(my_load_box_menu);

parent.document.getElementsByTagName("frameset")[0].rows="85%,*,31";
parent.document.getElementsByTagName("frameset")[3].cols="64%,*";
document.getElementById("my_one").style.visibility="hidden";
document.getElementById("my_five").style.visibility="hidden";
MyRoadCellAvailable();
if(my_pos_left==1085) { // my_road_story 25x25
document.forms["MyCraft"].convertText.value=localStorage.getItem("RoadStory");
}
if(RHandUp==0 || RHandUp==null) { // cfg-item
document.getElementById("handMin").click();
}
if(RHandUp==1) {
document.getElementById("handMax").click();
}
if(SMove==0 || SMove==null) { // cfg-move
document.getElementById("moveMin").click();
}
if(SMove==1) {
document.getElementById("moveMax").click();
}
if(lvlAhtung==0 || lvlAhtung==null) { // cfg-ahtung
document.getElementById("ahtungMin").click();
}
if(lvlAhtung==1) {
document.getElementById("ahtungMax").click();
}
}
setTimeout(my_load,100);
MyDowntime();