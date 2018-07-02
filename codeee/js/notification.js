$(function(){
	$("#openBtn").click(function(){
	$("#navbar").removeClass("resize")
	$("#navbar").addClass("grow")
	$("#openBtn").css("display","none")
	$("#closeBtn").css("display","block")
	$("#navbar span").addClass("moveright")
	$("#navbar span").removeClass("moveleft")
	$(".open").css("justify-content","flex-start")
})

$("#closeBtn").click(function(){
	$("#navbar").removeClass("grow")
	$("#navbar").addClass("resize")
	$("#openBtn").css("display","block")
	$("#closeBtn").css("display","none")
	$("#navbar span").removeClass("moveright")
	$("#navbar span").addClass("moveleft")
})

$("#miniOpenBtn").click(function(){
	$(".navbar-mini-list").css("display","flex");
})
$("#miniClose").click(function(){
	$(".navbar-mini-list").css("display","none");
})

})