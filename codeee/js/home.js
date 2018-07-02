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

$("#generateQuestion").click(function(){
	$(".addQuestionBottom").addClass("resizeQuestionBottom");

})
$("#focusComment").click(function(){
	$(".newComment").css("display","block");
	$(".newComment textarea").focus();
})

$("#miniOpenBtn").click(function(){
	$(".navbar-mini-list").css("display","flex");
})
$("#miniClose").click(function(){
	$(".navbar-mini-list").css("display","none");
})






var text = $('#generateQuestion');
text.on('change drop keydown cut paste', function() {
  text.height('auto');
	text.height(text.prop('scrollHeight'));
});
var text1 = $('#generateCommentToComment');
text1.on('change drop keydown cut paste', function() {
  text1.height('auto');
	text1.height(text1.prop('scrollHeight'));
});
var text2 = $('#generateComment');
text2.on('change drop keydown cut paste', function() {
  text2.height('auto');
	text2.height(text2.prop('scrollHeight'));
});

});




