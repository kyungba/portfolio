$(function() {
	
	//로드
	$(".searchD .textMotion").addClass("on");
	TweenMax.to($(".searchD .top"), 1, {top:0, opacity:1, delay:0.7, ease:Power3.easeOut});
	TweenMax.to($(".searchD .bottom"), 1, {top:0, opacity:1, delay:0.9, ease:Power3.easeOut});
	TweenMax.to($(".visualDiv .ingD span.bar b"), 7.5,{width:"100%", ease:Power0.easeNone});


	//메인영상
	if($(".main2").size() > 0){
		var visualN = 0;
		$(".visualDiv .visualRoll .roll").eq(0).find("video")[0].play();
		var videoMotion = setInterval(function(){
			$(".visualDiv").addClass("on");
			$(".visualDiv").addClass("hide");
			$(".visualDiv .visualRoll .roll").eq(visualN).stop(true, true).fadeOut(600);
			$(".visualDiv .visualRoll .roll").eq(visualN).find("video")[0].pause();
			if(visualN == 0){
				visualN = 1;
				$(".visualDiv .ingD span.prev").text("02");
				$(".visualDiv .ingD span.next").text("01");
			}else if(visualN == 1){
				visualN = 0;
				$(".visualDiv .ingD span.prev").text("02");
				$(".visualDiv .ingD span.next").text("01");
			}
			TweenMax.to($(".visualDiv .ingD span.bar b"), 0,{width:"0"});
			$(".visualDiv .visualRoll .roll").eq(visualN).stop(true, true).fadeIn(600, function(){
				$(".visualDiv").removeClass("on");
				TweenMax.to($(".visualDiv"), 0, {className:"-=hide", delay:0.4});
				TweenMax.to($(".visualDiv .ingD span.bar b"), 6.9,{width:"100%", ease:Power0.easeNone});
			});
			$(".visualDiv .visualRoll .roll").eq(visualN).find("video")[0].pause();
			$(".visualDiv .visualRoll .roll").eq(visualN).find("video")[0].currentTime = 0;
			$(".visualDiv .visualRoll .roll").eq(visualN).find("video")[0].play();
		}, 7500);
	}else{
		var visualN = 0;
		$(".visualDiv .visualRoll .roll").eq(0).find("video")[0].play();
		var videoMotion = setInterval(function(){
			$(".visualDiv").addClass("on");
			$(".visualDiv").addClass("hide");
			$(".visualDiv .visualRoll .roll").eq(visualN).stop(true, true).fadeOut(600);
			$(".visualDiv .visualRoll .roll").eq(visualN).find("video")[0].pause();
			if(visualN == 0){
				visualN = 1;
				$(".visualDiv .ingD span.prev").text("02");
				$(".visualDiv .ingD span.next").text("03");
			}else if(visualN == 1){
				visualN = 2;
				$(".visualDiv .ingD span.prev").text("03");
				$(".visualDiv .ingD span.next").text("01");
			}else if(visualN == 2){
				visualN = 0;
				$(".visualDiv .ingD span.prev").text("01");
				$(".visualDiv .ingD span.next").text("02");
			}
			TweenMax.to($(".visualDiv .ingD span.bar b"), 0,{width:"0"});
			$(".visualDiv .visualRoll .roll").eq(visualN).stop(true, true).fadeIn(600, function(){
				$(".visualDiv").removeClass("on");
				TweenMax.to($(".visualDiv"), 0, {className:"-=hide", delay:0.4});
				TweenMax.to($(".visualDiv .ingD span.bar b"), 6.9,{width:"100%", ease:Power0.easeNone});
			});
			$(".visualDiv .visualRoll .roll").eq(visualN).find("video")[0].pause();
			$(".visualDiv .visualRoll .roll").eq(visualN).find("video")[0].currentTime = 0;
			$(".visualDiv .visualRoll .roll").eq(visualN).find("video")[0].play();
		}, 7500);
	}

	//팝업
	$(".visualDiv .searchDiv .searchD").click(function(){
		$(".searchPop").stop(true, true).fadeIn(400);
		$(".dimdBg").stop(true, true).fadeIn(400);
	});
	$(".searchPop p").each(function(q){
		$(this).click(function(){
			if(q == 0){
				$(".searchPop p").eq(0).hide();
				$(".searchPop p").eq(1).show();
			}
			if(q == 1){
				$(".searchPop p").eq(1).hide();
				$(".searchPop p").eq(2).show();
			}
			if(q == 2){
				$(".searchPop p").eq(2).hide();
				$(".searchPop p").eq(3).show();
			}
			if(q == 3){
				$(".searchPop p").eq(3).hide();
				$(".searchPop p").eq(4).show();
			}
			if(q == 4){
				$(".searchPop p").eq(4).hide();
				$(".searchPop p").eq(5).show();
			}
			if(q == 5){
				$(".searchPop p").eq(5).hide();
				$(".searchPop").stop(true, true).fadeOut(400, function(){
					$(".searchPop p").eq(0).show();
				});
				$(".dimdBg").stop(true, true).fadeOut(400);				
			}
		});
	});
	$(".searchPop .xBt").click(function(){
		$(".searchPop").stop(true, true).fadeOut(400);
		$(".dimdBg").stop(true, true).fadeOut(400);				
	});

	//퀵버튼
	$(".quickBtn").click(function(){
		$(".quickMenu").addClass("on");
		$(".quickMenu").css("z-index","12");
		$(".dimdBg").stop(true, true).fadeIn(500);
	});
	$(".quickMenu").click(function(){
		if(!$(this).hasClass("two")){
			$(".quickMenu").addClass("two");
		}else{
			$(".quickMenu").removeClass("on");
			$(".dimdBg").stop(true, true).fadeOut(500, function(){
				$(".quickMenu").css("z-index","7");
				$(".quickMenu").removeClass("two");
			});
		}
	});

	//검색
	$(".searchD .bottom").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".searchD .twoD").stop(true, true).slideDown(300);
		}else{
			$(this).removeClass("on");
			$(".searchD .twoD").stop(true, true).slideUp(300);
		}
	});
	$(".searchD .twoD img").each(function(q){
		$(this).click(function(){
			if(q == 0){
				$(this).hide();
				$(".searchD .twoD img").eq(1).show();
			}
			if(q == 1){
				$(this).hide();
				$(".searchD .twoD img").eq(2).show();
			}
			if(q == 2){
				$(this).hide();
				$(".searchD .twoD img").eq(3).show();
			}
			if(q == 3){
				$(".searchD .bottom").removeClass("on");
				$(this).parents(".twoD").stop(true, true).slideUp(300, function(){
					$(".searchD .twoD img").eq(3).hide();
					$(".searchD .twoD img").eq(0).show();
				});				

			}
		});
	});


	//어떤타입
	$(".mdPickD .tabs a").each(function(q){
		$(this).hover(function(){
			if(!$(this).hasClass("on")){
				$(".mdPickD .tabs a").removeClass("on");
				$(this).addClass("on");
				$(".mdPickD .viewDiv .viewD.on").stop(true, true).fadeOut(300);
				$(".mdPickD .viewDiv .viewD.on").removeClass("on");
				$(".mdPickD .viewDiv .viewD").eq(q).stop(true, true).fadeIn(300);
				$(".mdPickD .viewDiv .viewD").eq(q).addClass("on");
			}
		});
	});

	//프로모션
	$(".promotionD .topD .tabs a").each(function(q){
		$(this).hover(function(){
			if(!$(this).hasClass("on")){
				$(".promotionD .topD .tabs a").removeClass("on");
				$(this).addClass("on");
				$(".promotionD .topD .visual.on").stop(true, true).fadeOut(300);
				$(".promotionD .topD .visual.on").removeClass("on");
				$(".promotionD .topD .visual").eq(q).stop(true, true).fadeIn(300);
				$(".promotionD .topD .visual").eq(q).addClass("on");
			}
		});
	});
	
	
	//스크롤
	var scTop;
	$(window).load(function(){
		$(window).scroll(function(){
			scTop = $(window).scrollTop() + $(window).height();

			/*
			if($(window).scrollTop() > $(".searchD").outerHeight() - 234){
				$(".fixDc").css({"position":"fixed","top":"59px","right":$("#wrap").offset().left - 18})
			}else{
				$(".fixDc").css({"position":"", "top":"","right":""})
			}*/
			
			if(scTop >= $(".footer").offset().top){
				$(".quickBtn").css({"position":"absolute", "top":$(".footer").offset().top - $(window).height() + 940,"right":"80px"})
				$(".quickMenu").css({"position":"absolute", "bottom":$(window).scrollTop() + $(window).height() - parseInt($(".quickBtn").css("top").split("p")[0]) - $(".quickBtn").outerHeight(),"right":"80px"})
			}else{
				$(".quickBtn").css({"position":"","top":$(".visualDiv .searchDiv .searchD").offset().top + $(".visualDiv .searchDiv .searchD").outerHeight() - $(".quickBtn").height(),"right":$("#wrap").offset().left + 80})
				$(".quickMenu").css({"position":"","bottom":$(window).height() - parseInt($(".quickBtn").css("top").split("p")[0]) - $(".quickBtn").outerHeight(),"right":$("#wrap").offset().left + 80})
			}

			if(scTop > $(".recommendD").offset().top + 400){
				if(!$(".recommendD .textMotion").hasClass("on")){
					$(".recommendD .textMotion").addClass("on");
					TweenMax.to($(".recommendD .line"), 0, {className:"+=on", delay:0.9});
					/*
					TweenMax.to($(".recommendD .ovBg1"), 0, {left:"100%", delay:1.3});
					TweenMax.to($(".recommendD .ovBg2"), 0, {left:"100%", delay:1.5});*/
					$(".recommendD .listDiv .list").each(function(q){
						if(q < 4){
							TweenMax.to($(this).find(".motion"), 0,{width:"100%", delay:1.3});
						}else{
							TweenMax.to($(this).find(".motion"), 0,{width:"100%", delay:1.7});
						}
					});
				}
			}
			if($(".mdPickD").size() > 0){
				if(scTop > $(".mdPickD").offset().top + 350){
					if(!$(".mdPickD .textMotion").hasClass("on")){
						$(".mdPickD .textMotion").addClass("on");
						TweenMax.to($(".mdPickD .line"), 0, {className:"+=on", delay:0.9});
						TweenMax.to($(".mdPickD"), 0, {className:"+=on", delay:0.9});
					}
				}
			}
			if($(".hotPlaceD").size() > 0){
				if(scTop > $(".hotPlaceD").offset().top + 350){
					if(!$(".hotPlaceD .textMotion").hasClass("on")){
						$(".hotPlaceD .textMotion").addClass("on");
						TweenMax.to($(".hotPlaceD .line"), 0, {className:"+=on", delay:0.9});
						TweenMax.to($(".hotPlaceD"), 0, {className:"+=on", delay:0.9});
					}
				}
			}

			if(scTop > $(".promotionD").offset().top + 350){
				if(!$(".promotionD .textMotion").hasClass("on")){
					$(".promotionD .textMotion").addClass("on");
					TweenMax.to($(".promotionD .line"), 0, {className:"+=on", delay:0.9});
					TweenMax.to($(".promotionD .topD .visualD"), 0, {top:0, opacity:1, delay:1});
					TweenMax.to($(".promotionD .tabs"), 0, {opacity:1, delay:1.4});
				}
			}
			if($(".promotionD .bottomD").size() > 0){
				if(scTop > $(".promotionD .bottomD").offset().top + 350){
					if(!$(".promotionD .bottomD").hasClass("on")){
						$(".promotionD .bottomD").addClass("on");
					}
				}
			}
		});$(window).scroll();
	});
	
	//리사이즈
	$(window).resize(function(){
		$(".quickBtn").css("right", $("#wrap").offset().left + 80);
		$(".quickMenu").css("right", $("#wrap").offset().left + 80);
		$(".quickMenu").css("bottom",$(window).height() - parseInt($(".quickBtn").css("top").split("p")[0]) - $(".quickBtn").outerHeight());
	});$(window).resize();

	//프로모션 swiper
	 var proSwiper = new Swiper('.proSwiper .swiper-container', {
		speed: 1000,
		slidesPerView: 1.5,
		spaceBetween: 50,
		centeredSlides:true,
		loop: true,
		loopAdditionalSlides: 3,
		autoplay: {
			delay: 4000,
		},
		on:{
			init:function(){
				$(".proSwiper .paging span").text("0" + (this.realIndex+1));
				$(".proSwiper .paging b").text("0" + $(".proSwiper .txtArea .txt").size());
			},
			slideChangeTransitionStart: function(){
				$(".proSwiper .paging span").text("0" + (this.realIndex+1));
				if(this.realIndex - 1 < 0){
					$(".proSwiper .txtArea .txt").eq($(".proSwiper .txtArea .txt").size()-1).css("opacity","0");
				}else{
					$(".proSwiper .txtArea .txt").eq(this.realIndex - 1).css("opacity","0");
				}
				TweenMax.to($(".proSwiper .txtArea .txt").eq(this.realIndex), 0, {opacity:1, delay:0.3});
			},
		},
	});
	

	//footer 클릭
	$(".footer").click(function(){
		TweenMax.to($("html, body"), 0.5, {scrollTop:0});
	});

});