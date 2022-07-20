$(function () {
	$("#wrap.main .link").hover(function(){
		$(".header").addClass("on");
		$(".header .twoD").stop(true, true).slideDown(300);
	}, function(){
		$(".header").removeClass("on");
		$(".header .twoD").stop(true, true).slideUp(300);
	});


	$(".login").css("padding-right", ($(".visual").width() - 1520)/2);
	TweenMax.to($(".visual .img"), 0, {className:"+=on"});
});