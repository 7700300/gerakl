io_parm=new Array();
io_parm[0]="<a href=javascript:void(0); onclick=\"alert('Not&nbsp;Found');R(2);\" title=\"Надеть Кирку\"><img border=0 src=https://apeha.ru/img/lic/25s.gif width=16 height=16 style=\"background-color:white;\"></a>&nbsp;";
io_parm[1]="<a href=javascript:void(0); onclick=\"alert('Not&nbsp;Found');R(2);\" title=\"Надеть Топор\"><img border=0 src=https://apeha.ru/img/lic/24s.gif width=16 height=16 style=\"background-color:white;\"></a>";

function actUnWear(i) {
var element=document.getElementsByTagName("head")[0];
var text=document.createElement("span");
text.id="status";
text.innerHTML="<img"
+" src=bag_type_17.html?actUser-Unwear="+i
+" width=20"
+" height=10"
+" border=0"
+" style=background-color:crimson;"
+" onError=check_Item();"
+"this.style.backgroundColor='lawngreen';"
+">";
element.parentNode.insertBefore(text, element);
}


function check_Item() {
// Снять
for(i=0; i<document.getElementsByTagName("div").length; i++) {
if(document.getElementsByTagName("div")[i].style.top && document.getElementsByTagName("div")[i].style.left) {
if(document.getElementsByTagName("div")[i].style.top=="175px" && document.getElementsByTagName("div")[i].style.left=="3px" || document.getElementsByTagName("div")[i].style.top=="175px" && document.getElementsByTagName("div")[i].style.left=="144px") {
if(document.getElementsByTagName("div")[i].getElementsByTagName("img").length) {
if(document.getElementsByTagName("div")[i].getElementsByTagName("img")[0].title!="NaN") {
document.getElementsByTagName("div")[i].getElementsByTagName("img")[0].title="NaN";
return document.getElementsByTagName("div")[i].getElementsByTagName("img")[0].click();
}}
}}
}
for(i=0; i<document.getElementsByTagName("img").length; i++) {
if(document.getElementsByTagName("img")[i].style.cursor) {
if(document.getElementsByTagName("img")[i].title=="NaN") {
parent.R(1);
parent.document.getElementById("info_hand1").innerHTML="{CLEAN}";
//parent.frames["persrefr"].location='mapupdate.html?xdac='+Math.random();
return location.href="bag_type_17.html";
}}}

// Одеть
for(i=0; i<document.getElementsByTagName("td").length; i++) {
if(document.getElementsByTagName("td")[i].style.padding) {
if(document.getElementsByTagName("td")[i].getElementsByTagName("img")[0].title=="Кирка рудокопа") {
if(document.getElementsByTagName("td")[i+2].getElementsByTagName("input").length) {
io_parm[0]=document.getElementsByTagName("td")[i+2].getElementsByTagName("input")[0].value;
io_parm[0]="<a href=javascript:void(0); onclick=\"frames['handforest'].location.href='bag_type_17.html?actUser-Wear="+io_parm[0]+"';RTitle='Кирка рудокопа';R(2);\" title='Надеть Кирку"+i+"' id='hif_2'><img border=0 src=\"https://apeha.ru/img/lic/25s.gif\" "
+"onload=\""
+"if(RTitle=='Кирка рудокопа' && RHandUp==1){"
+"frames['handforest'].location.href='bag_type_17.html?actUser-Wear="+io_parm[0]+"';RTitle='Кирка рудокопа';R(2);"
+"}"
+"\" width=16 height=16 style=\"background-color:#E3F2C6;\"></a>&nbsp;";
io_parm[2]=1;
}}
}}
for(i=0; i<document.getElementsByTagName("td").length; i++) {
if(document.getElementsByTagName("td")[i].style.padding) {
if(document.getElementsByTagName("td")[i].getElementsByTagName("img")[0].title=="Топор лесоруба") {
if(document.getElementsByTagName("td")[i+2].getElementsByTagName("input").length) {
io_parm[1]=document.getElementsByTagName("td")[i+2].getElementsByTagName("input")[0].value;
io_parm[1]="<a href=javascript:void(0); onclick=\"frames['handforest'].location.href='bag_type_17.html?actUser-Wear="+io_parm[1]+"';RTitle='Топор лесоруба';R(2);\" title='Надеть Топор"+i+"' id='hif_3'><img border=0 src=\"https://apeha.ru/img/lic/24s.gif\" "
+"onload=\""
+"if(RTitle=='Топор лесоруба' && RHandUp==1){"
+"frames['handforest'].location.href='bag_type_17.html?actUser-Wear="+io_parm[1]+"';RTitle='Топор лесоруба';R(2);"
+"}"
+"\" width=16 height=16 style=\"background-color:#E3F2C6;\"></a>&nbsp;";
io_parm[3]=1;
}}
}}
for(i=0; i<document.getElementsByTagName("td").length; i++) { // количество 1
if(document.getElementsByTagName("td")[i].style.padding) {
if(document.getElementsByTagName("td")[i].getElementsByTagName("img")[0].title=="Кирка рудокопа") {
if(document.getElementsByTagName("td")[i+2].getElementsByTagName("input").length) {
var breq=document.getElementsByTagName("td")[i+4].innerHTML+"dot";
var reg=new RegExp("количество: 1dot","g");
if(reg.test(breq)) {
io_parm[0]=document.getElementsByTagName("td")[i+2].getElementsByTagName("input")[0].value;
io_parm[0]="<a href=javascript:void(0); onclick=\"frames['handforest'].location.href='bag_type_17.html?actUser-Wear="+io_parm[0]+"';RTitle='Кирка рудокопа';R(2);\" title='Надеть Кирку1' id='hif_2'><img border=0 src=\"https://apeha.ru/img/lic/25s.gif\" "
+"onload=\""
+"if(RTitle=='Кирка рудокопа' && RHandUp==1){"
+"frames['handforest'].location.href='bag_type_17.html?actUser-Wear="+io_parm[0]+"';RTitle='Кирка рудокопа';R(2);"
+"}"
+"\" width=16 height=16 style=\"background-color:#E3F2C6;\"></a>&nbsp;";
}
}}
}}
for(i=0; i<document.getElementsByTagName("td").length; i++) { // количество 1
if(document.getElementsByTagName("td")[i].style.padding) {
if(document.getElementsByTagName("td")[i].getElementsByTagName("img")[0].title=="Топор лесоруба") {
if(document.getElementsByTagName("td")[i+2].getElementsByTagName("input").length) {
var breq=document.getElementsByTagName("td")[i+4].innerHTML+"dot";
var reg=new RegExp("количество: 1dot","g");
if(reg.test(breq)) {
io_parm[1]=document.getElementsByTagName("td")[i+2].getElementsByTagName("input")[0].value;
io_parm[1]="<a href=javascript:void(0); onclick=\"frames['handforest'].location.href='bag_type_17.html?actUser-Wear="+io_parm[1]+"';RTitle='Топор лесоруба';R(2);\" title='Надеть Топор1' id='hif_3'><img border=0 src=\"https://apeha.ru/img/lic/24s.gif\" "
+"onload=\""
+"if(RTitle=='Топор лесоруба' && RHandUp==1){"
+"frames['handforest'].location.href='bag_type_17.html?actUser-Wear="+io_parm[1]+"';RTitle='Топор лесоруба';R(2);"
+"}"
+"\" width=16 height=16 style=\"background-color:#E3F2C6;\"></a>&nbsp;";
}
}}
}}
parent.document.getElementById("hif").innerHTML=io_parm[0]+io_parm[1];
}
check_Item();