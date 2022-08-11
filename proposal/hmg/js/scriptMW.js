$(function(){
	$(".mRoll").click(function(){
		if(!$(this).hasClass("on")){
			$(".mRoll .roll").eq(0).stop(true,true).fadeOut(400);
			$(".mRoll .roll").eq(1).stop(true,true).fadeIn(400);
			$(this).addClass("on");
		}else{
			$(".mRoll .roll").eq(1).stop(true,true).fadeOut(400);
			$(".mRoll .roll").eq(0).stop(true,true).fadeIn(400);
			$(this).removeClass("on");
		}
	});
});