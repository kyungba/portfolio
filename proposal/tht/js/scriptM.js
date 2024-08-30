$(function () {
	// swiper
	var swiper = new Swiper('.visRoll.swiper-container', {
		effect : 'fade',
		speed:1000,
		loop:true,
		autoplay: {
			delay: 4000,
		},
    });


	//퀵메뉴
	$(".quick").click(function(){
		$(".quickPop").addClass("on");
		$(".dimdBg").stop(true, true).fadeIn(400);
	});

	$(".quickPop").click(function(){
		$(".quickPop").removeClass("on");
		$(".dimdBg").stop(true, true).fadeOut(400);
	});


	//전체메뉴
	$("#mobileWrap .contents .scrollArea .gnb").click(function(){
		TweenMax.to($(".allMenuPop"), 0.4, {right:0,ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeIn(400);
	});
	$(".allMenuPop").click(function(){
		TweenMax.to($(".allMenuPop"), 0.4, {right:"-100%",ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeOut(400);
	});

	//검색메뉴
	$(".search").click(function(){
		TweenMax.to($(".searchPop"), 0.4, {height:"100%",ease:Power3.easeOut});
	});
	$(".searchPop p").each(function(q){
		$(this).click(function(){
			if(q == 0){
				$(this).hide();
				$(".searchPop p").eq(1).show();
			}
			if(q == 1){
				$(this).hide();
				$(".searchPop p").eq(2).show();
			}
			if(q == 2){
				$(this).hide();
				$(".searchPop p").eq(3).show();
			}
			if(q == 3){
				$(this).hide();
				$(".searchPop p").eq(4).show();
			}
			if(q == 4){
				$(this).hide();
				$(".searchPop p").eq(5).show();
			}
			if(q == 5){
				TweenMax.to($(".searchPop"), 0.5, {height:0,ease:Power3.easeOut, onComplete:function(){
					$(".searchPop p").eq(5).hide();
					$(".searchPop p").eq(0).show();
				}});
			}
		});
	});
	$(".searchPop .xBt").click(function(){
		TweenMax.to($(".searchPop"), 0.4, {height:"0",ease:Power3.easeOut});
	});
	


	
	$(".top").click(function(){
		TweenMax.to($(".scrollArea"), 0.4, {scrollTop:0});
	});

})