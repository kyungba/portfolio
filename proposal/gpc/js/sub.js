$(function(){
	$(".lnb .btn").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on")
			$(".sub .logo").addClass("on");
			$(".lnb").addClass("on");
		}else{
			$(this).removeClass("on");
			$(".sub .logo").removeClass("on");
			$(".lnb").removeClass("on");
		}
	});
});