var dataidm;
var divData;
function list() {
var domain =window.location.hostname;
var times=Math.floor(Date.now() / 60000);
$("#eventlist").empty();
$.ajax({
url: "events.json?time="+times+"",
success: function(json) {
for(var i = 0; i < json.length; i++) {
var obj = json[i];
var icons=obj.sport;
var iconHtml=icons.toLowerCase();
if (icons !== 'atom' && icons !== 'money' && icons !== 'electron' && icons !== 'architecture-alt') {
iconHtml='result-sport';
}

if (icons=='TV') {
iconHtml='field-alt';
}
if (icons !='Snooker') {
$("#eventlist").append('<a href="https://'+domain+'/player.html?id='+obj.streamid+'&title='+obj.eventhome+' - '+obj.eventaway+'" class="eventClick '+obj.sport+' '+obj.id+'" dataId="'+obj.id+'" target="search_iframe" dataName="'+obj.eventhome+' - '+obj.eventaway+'"><div class="event even block"><div class="icon"><i class="icofont-'+iconHtml+'"></i></div><div class="live"><span><span style="color: black">'+obj.start+' </span>VIVO</span></div><div class="teams"><span>'+obj.eventhome+' - '+obj.eventaway+'</span></div><div class="league"><span>'+obj.sport+'</span></div><div class="clear"></div></div></a>');
}
}
$(".SportSelect."+divData+"").trigger("click");
///$("#eventlist").empty().append(t);
$('[dataid="'+dataidm+'"]').addClass("activeSelect");
}
})
}

list(), setInterval(list, 60000), $("body").on("click", "a.eventClick", function() {
$("html, body").animate({ scrollTop: 0 }, "slow");
$(".eventClick").removeClass("activeSelect");
dataidm = $(this).attr("dataId");
$(this).addClass("activeSelect");

})
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '.' + mm + '.' + yyyy;
document.getElementById('date').innerHTML = today;
$(document).ready(function () {
var popupExpire = new Date();
popupExpire.setMinutes(popupExpire.getMinutes() + 10);
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
} else {
var hasCookie = $.cookie('popup');
if (typeof hasCookie == 'undefined') {
$('.popup').click(function () {
$.cookie('popup', true, {expires: popupExpire});
}).trigger('click');
}
}
$(".SportSelect.Inicio").click(function(){
$('.SportSelect').removeClass("active");
$(this).addClass("active");
$(".eventClick").show();
divData='Inicio';
});
$(".SportSelect.atom").click(function(){
$('.SportSelect').removeClass("active");
$(this).addClass("active");
$(".eventClick").hide();
$(".eventClick.atom").show();
divData='atom';
});
$(".SportSelect.architecture-alt").click(function(){
$('.SportSelect').removeClass("active");
$(this).addClass("active");
$(".eventClick").hide();
$(".eventClick.architecture-alt").show();
divData='architecture-alt';
});
$(".SportSelect.money").click(function(){
$('.SportSelect').removeClass("active");
$(this).addClass("active");
$(".eventClick").hide();
$(".eventClick.money").show();
divData='money';
});
$(".SportSelect.electron").click(function(){
$('.SportSelect').removeClass("active");
$(this).addClass("active");
$(".eventClick").hide();
$(".eventClick.electron").show();
divData='electron';
});
$(".SportSelect.Otros").click(function(){
$('.SportSelect').removeClass("active");
$(this).addClass("active");
$(".eventClick").show();
$(".eventClick.atom").hide();
$(".eventClick.architecture-alt").hide();
$(".eventClick.money").hide();
$(".eventClick.electron").hide();
divData='Otros';
});
});