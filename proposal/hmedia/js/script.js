var visN = 0;
var isVisMove = false;
$(function(){

	//load
	$(".wrap .mainV .rollDiv .roll").css("left","100%");
	$(".wrap .mainV .rollDiv .roll").eq(0).css("left","0");
	$(".wrap .mainV .rollBtn a").eq(0).css("left","-250px");
	$(".wrap .mainV .rollBtn a").eq(1).css("left","0");
	$(".wrap .mainV .rollBtn a").eq(2).css("left","250px");
	$(".wrap .allContD .listD .list").eq(1).css("left","100%");
	TweenMax.to($(".wrap .mainV .rollBtn"), 1, {top:180, opacity:1, delay:0.3, ease:Power3.easeOut});
	TweenMax.to($(".wrap .mainV .allContBtn"), 1, {top:415, opacity:1, delay:0.5, ease:Power3.easeOut});
	mainRoll();

	//헤더
	$(".gnbBt").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".gnbD").stop(true, true).slideDown(250);
			$(".dimdBg").stop(true, true).fadeIn(250);
		}else{
			$(".gnbD").stop(true, true).slideUp(250);
			$(".dimdBg").stop(true, true).fadeOut(250);
			$(this).removeClass("on");
		}
	});

	$(".wrap .header .login").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".wrap .rightCon.one img:last").attr("src", $(".wrap .rightCon.one img:last").attr("src").replace("img4.png", "img4_login.png"));
			TweenMax.to($("html, body"), 0.6, {scrollTop:$(".mainCon").offset().top, ease:Power3.easeOut});
			$(".wrap .rightCon.thr").show();
			$(".wrap .rightCon.fou").show();
			$(".wrap .rightArea").removeClass("on");
		}else{
			TweenMax.to($(".logInfoD"), 0.6, {right:0, ease:Power3.easeOut});
			$(".dimdBg").stop(true, true).fadeIn(600);
		}
	});
	$(".wrap .logInfoD .close").click(function(){
		TweenMax.to($(".logInfoD"), 0.6, {right:"-600", ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeOut(600);
	});
		
	//메인롤링
	$(".wrap .mainV .rollBtn a").each(function(q){
		$(this).click(function(){
			if(!isVisMove){
				if(q == 0){
					isVisMove = true;
					if(visN == 1){
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(1), 0.6, {left:"100%", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(0), 0, {left:"-100%", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(0), 0.6, {left:0, ease:Power3.easeOut});
						
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(0), 0.6, {left:500, ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(1), 0, {left:"-250", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(1), 0.6, {left:0, ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(2), 0.6, {left:250, ease:Power3.easeOut, onComplete:function(){
							visN = 0;
							mainRoll();
						}});
					}
					if(visN == 2){
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(2), 0.6, {left:"-100%", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(0), 0, {left:"100%", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(0), 0.6, {left:0, ease:Power3.easeOut});
						
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(0), 0.6, {left:"-250", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(1), 0.6, {left:0, ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(2), 0, {left:500, ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(2), 0.6, {left:250, ease:Power3.easeOut, onComplete:function(){
							visN = 0;
							mainRoll();
						}});
					}
				}
				if(q == 1){
					isVisMove = true;
					if(visN == 0){
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(0), 0.6, {left:"-100%", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(1), 0, {left:"100%", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(1), 0.6, {left:0, ease:Power3.easeOut});
						
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(0), 0, {left:500, ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(0), 0.6, {left:250, ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(1), 0.6, {left:"-250", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(2), 0.6, {left:0, ease:Power3.easeOut, onComplete:function(){
							visN = 1;
							mainRoll();
						}});
					}
					if(visN == 2){
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(2), 0.6, {left:"100%", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(1), 0, {left:"-100%", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(1), 0.6, {left:0, ease:Power3.easeOut});
						
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(0), 0.6, {left:250, ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(1), 0.6, {left:500, ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(2), 0, {left:"-250", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(2), 0.6, {left:0, ease:Power3.easeOut, onComplete:function(){
							visN = 1;
							mainRoll();
						}});
					}
				}
				if(q == 2){
					isVisMove = true;
					if(visN == 0){
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(0), 0.6, {left:"100%", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(2), 0, {left:"-100%", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(2), 0.6, {left:0, ease:Power3.easeOut});
						
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(1), 0.6, {left:250, ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(2), 0.6, {left:500, ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(0), 0, {left:"-250", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(0), 0.6, {left:0, ease:Power3.easeOut, onComplete:function(){
							visN = 2;
							mainRoll();
						}});
					}
					if(visN == 1){
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(1), 0.6, {left:"-100%", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(2), 0, {left:"100%", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(2), 0.6, {left:0, ease:Power3.easeOut});
						
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(1), 0, {left:500, ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(1), 0.6, {left:250, ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(2), 0.6, {left:"-250", ease:Power3.easeOut});
						TweenMax.to($(".wrap .mainV .rollBtn a").eq(0), 0.6, {left:0, ease:Power3.easeOut, onComplete:function(){
							visN = 2;
							mainRoll();
						}});
					}
				}
			}
		});
	});
	
	//컨텐츠 전체보기
	$(".wrap .allContBtn").click(function(){
		TweenMax.to($(".wrap .allContD"), 0.6, {right:0, ease:Power3.easeOut});
		TweenMax.to($(".wrap .allContD .tit"), 1, {top:150, opacity:1, delay:0.4, ease:Power3.easeOut});
		$(".wrap .allContD .list p").each(function(q){
			if(q < 5){
				TweenMax.to($(this), 1, {top:0, opacity:1, delay:0.6 + q*0.08, ease:Power3.easeOut});
			}else{
				TweenMax.to($(this), 1, {top:235, opacity:1, delay:0.6 + q*0.08, ease:Power3.easeOut});
			}
		});
	});
	$(".wrap .allContD .xBt").click(function(){
		TweenMax.to($(".wrap .allContD"), 0.6, {right:"-100%", ease:Power3.easeOut});
	});
	$(".wrap .allContD .page").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			TweenMax.to($(".wrap .allContD .listD .list").eq(0), 0.6, {left:"-100%", ease:Power3.easeOut});
			TweenMax.to($(".wrap .allContD .listD .list").eq(1), 0.6, {left:0, ease:Power3.easeOut});
		}else{
			$(this).removeClass("on");
			TweenMax.to($(".wrap .allContD .listD .list").eq(0), 0.6, {left:0, ease:Power3.easeOut});
			TweenMax.to($(".wrap .allContD .listD .list").eq(1), 0.6, {left:"100%", ease:Power3.easeOut});
		}
	});

	//scrollDown
	$(".wrap .mainV .scrollDown").click(function(){
		if($(".mainCon").size() > 0){
			TweenMax.to($("html, body"), 0.5, {scrollTop : $(".mainCon").offset().top, ease:Power3.easeOut});
		}
	});

	//스크랩
	$(".wrap .mainCon .rightArea .rightCon .motion").hover(function(){
		if($(".wrap .header .login").hasClass("on")){
			$(this).find("img").attr("src", $(this).find("img").attr("src").replace(".png", "_hover.png"));
		}
	}, function(){
		if($(".wrap .header .login").hasClass("on")){
			$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_hover.png", ".png"));
		}
	});
	$(".wrap .mainCon .rightArea .rightCon .motion").click(function(){
		$(this).addClass("on");
	});

	//settingArea
	$(".wrap .mainCon .leftArea .leftSetting").click(function(){
		TweenMax.to($(".settingArea"), 0.5, {left:0, ease:Power3.easeOut});
	});
	//category
	$(".settingArea .category").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			TweenMax.to($(".settingArea .orderTit"), 1, {opacity:1, delay:0.1, ease:Power3.easeOut});
			TweenMax.to($(".settingArea .orderD"), 1, {opacity:1, delay:0.3, ease:Power3.easeOut});
		}
	});
	//sortable
	$( ".settingArea .orderD" ).sortable({
		cancel: ".noSort"
    });

	$(".settingArea .cancel").click(function(){
		TweenMax.to($(".settingArea"), 0.5, {left:"-100%", ease:Power3.easeOut});
	});
	var tabDetach, leftDetach, rightDetach;
	$(".settingArea .save").click(function(){
		tabDetach = $(".wrap .mainCon .leftArea .leftTab span").eq(2).detach();
		$(".wrap .mainCon .leftArea .leftTab").prepend(tabDetach);

		leftDetach = $(".wrap .mainCon .leftArea .leftCon .list").eq(2).detach();
		$(".wrap .mainCon .leftArea .leftCon").prepend(leftDetach);

		rightDetach = $(".wrap .mainCon .rightArea .rightCon").eq(2).detach();
		$(".wrap .mainCon .rightArea").prepend(rightDetach);
		TweenMax.to($(".settingArea"), 0.5, {left:"-100%", ease:Power3.easeOut});
		scrollMotion();
	});

	

	$(window).scroll(function(){
		scrollMotion();
	});$(window).scroll();
});


function scrollMotion(){
	//메인 하단 모션
	if($(".mainCon").size() > 0){
		if($(window).scrollTop() > $(".wrap .mainCon").offset().top){
			$(".leftArea").addClass("on");
		}else{
			$(".leftArea").removeClass("on");
		}
		if($(window).scrollTop() >= 0 && $(window).scrollTop() < $(".wrap .mainCon .rightCon").eq(1).offset().top - 200){
			if($(".wrap .mainCon .leftArea .leftTab span").eq(1).hasClass("on")){
				TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(0), 0, {top:"-100%", ease:Power3.easeOut});
				TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(0), 0.6, {top:0, ease:Power3.easeOut});
				TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(1), 0.6, {top:"100%", ease:Power3.easeOut});
			}
			$(".wrap .mainCon .leftArea .leftTab span").removeClass("on");
			$(".wrap .mainCon .leftArea .leftTab span").eq(0).addClass("on");
			$(".wrap .mainCon .leftArea .leftCon .list").removeClass("on");
			$(".wrap .mainCon .leftArea .leftCon .list").eq(0).addClass("on");
		}
		if($(".wrap .mainCon .rightCon.thr").is(":visible")){
			if($(window).scrollTop() >= $(".wrap .mainCon .rightCon").eq(1).offset().top - 200 && $(window).scrollTop() < $(".wrap .mainCon .rightCon").eq(2).offset().top - 200){
				if($(".wrap .mainCon .leftArea .leftTab span").eq(0).hasClass("on")){
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(1), 0, {top:"100%", ease:Power3.easeOut});
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(1), 0.6, {top:0, ease:Power3.easeOut});
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(0), 0.6, {top:"-100%", ease:Power3.easeOut});
				}
				if($(".wrap .mainCon .leftArea .leftTab span").eq(2).hasClass("on")){
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(1), 0, {top:"-100%", ease:Power3.easeOut});
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(1), 0.6, {top:0, ease:Power3.easeOut});
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(2), 0.6, {top:"100%", ease:Power3.easeOut});
				}
				$(".wrap .mainCon .leftArea .leftTab span").removeClass("on");
				$(".wrap .mainCon .leftArea .leftTab span").eq(1).addClass("on");
				$(".wrap .mainCon .leftArea .leftCon .list").removeClass("on");
				$(".wrap .mainCon .leftArea .leftCon .list").eq(1).addClass("on");
			}
		}else{
			if($(window).scrollTop() >= $(".wrap .mainCon .rightCon").eq(1).offset().top - 200){
				if($(".wrap .mainCon .leftArea .leftTab span").eq(0).hasClass("on")){
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(1), 0, {top:"100%", ease:Power3.easeOut});
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(1), 0.6, {top:0, ease:Power3.easeOut});
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(0), 0.6, {top:"-100%", ease:Power3.easeOut});
				}
				if($(".wrap .mainCon .leftArea .leftTab span").eq(2).hasClass("on")){
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(1), 0, {top:"-100%", ease:Power3.easeOut});
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(1), 0.6, {top:0, ease:Power3.easeOut});
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(2), 0.6, {top:"100%", ease:Power3.easeOut});
				}
				$(".wrap .mainCon .leftArea .leftTab span").removeClass("on");
				$(".wrap .mainCon .leftArea .leftTab span").eq(1).addClass("on");
				$(".wrap .mainCon .leftArea .leftCon .list").removeClass("on");
				$(".wrap .mainCon .leftArea .leftCon .list").eq(1).addClass("on");
			}
		}
		if($(".wrap .mainCon .rightCon.thr").is(":visible")){
			if($(window).scrollTop() >= $(".wrap .mainCon .rightCon").eq(2).offset().top - 200 && $(window).scrollTop() < $(".wrap .mainCon .rightCon").eq(3).offset().top - 200){
				console.log($(".wrap .mainCon .rightCon.thr").size())
				if($(".wrap .mainCon .leftArea .leftTab span").eq(1).hasClass("on")){
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(2), 0.6, {top:0, ease:Power3.easeOut});
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(1), 0.6, {top:"-100%", ease:Power3.easeOut});
				}
				if($(".wrap .mainCon .leftArea .leftTab span").eq(3).hasClass("on")){
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(2), 0.6, {top:0, ease:Power3.easeOut});
					TweenMax.to($(".wrap .mainCon .leftArea .leftCon .list").eq(3), 0.6, {top:"100%", ease:Power3.easeOut});
				}
				$(".wrap .mainCon .leftArea .leftTab span").removeClass("on");
				$(".wrap .mainCon .leftArea .leftTab span").eq(2).addClass("on");
				$(".wrap .mainCon .leftArea .leftCon .list").removeClass("on");
				$(".wrap .mainCon .leftArea .leftCon .list").eq(2).addClass("on");
			}
		}
	}
}
function mainRoll(){
	if($(window).width() > 1700){
		TweenMax.to($(".wrap .mainV .rollDiv .roll").find(".type"), 0, {top:520, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".wrap .mainV .rollDiv .roll").find(".tit"), 0, {top:580, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".wrap .mainV .rollDiv .roll").find(".txt"), 0, {top:740, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(visN).find(".type"), 0.5, {top:420, opacity:1, ease:Power3.easeOut});
		TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(visN).find(".tit"), 0.5, {top:480, opacity:1, delay:0.15, ease:Power3.easeOut});
		TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(visN).find(".txt"), 0.5, {top:640, opacity:1, delay:0.3, ease:Power3.easeOut, onComplete:function(){
			isVisMove = false;
		}});
	}else{
		TweenMax.to($(".wrap .mainV .rollDiv .roll").find(".type"), 0, {top:570, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".wrap .mainV .rollDiv .roll").find(".tit"), 0, {top:630, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".wrap .mainV .rollDiv .roll").find(".txt"), 0, {top:790, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(visN).find(".type"), 0.5, {top:470, opacity:1, ease:Power3.easeOut});
		TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(visN).find(".tit"), 0.5, {top:530, opacity:1, delay:0.15, ease:Power3.easeOut});
		TweenMax.to($(".wrap .mainV .rollDiv .roll").eq(visN).find(".txt"), 0.5, {top:690, opacity:1, delay:0.3, ease:Power3.easeOut, onComplete:function(){
			isVisMove = false;
		}});
	}
};