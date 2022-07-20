$(function () {
	/*
	$(".bookBtn").click(function(){
		TweenMax.to($(".bookingArea"), 0.5, {bottom:0, ease:Power3.easeOut});
	});
	$(".bookingArea").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(this).find("img").eq(0).hide();
			$(this).find("img").eq(1).show();
		}else{
			TweenMax.to($(".bookingArea"), 0.5, {bottom:"-100%", ease:Power3.easeOut});
		}
	});*/

	$(".level").click(function(){
		TweenMax.to($(".levelPop"), 0.5, {bottom:0, ease:Power3.easeOut});
	});
	$(".levelPop").click(function(){
		TweenMax.to($(".levelPop"), 0.5, {bottom:"-100%", ease:Power3.easeOut});
	});


	$("#mobileWrap .phone .top").click(function(){
		TweenMax.to($(".scrollArea"), 0.5, {scrollTop:0, ease:Power3.easeOut});
	});
})