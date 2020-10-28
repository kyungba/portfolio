$(function () {
	
	var lineHeight;
	$(window).resize(function(){
		$(".rightDiv .txtArea").css("left",$("#wrap").offset().left + 293);
		$(".rightDiv .plusBtn").css("top",$(".rightDiv .txtArea").offset().top + 22);
		$(".rightDiv .plusBtn").css("left",$("#wrap").offset().left + 1850);

		if($(window).height() > 1100){
			lineHeight = 500;
		}
		if($(window).height() < 1100 && $(window).height() > 980){
			lineHeight = 335;
		}
		if($(window).height() < 980){
			lineHeight = 265;
		}
	});$(window).resize();

	//로드
	TweenMax.to($(".visualDiv .line1"), 0.6, {height:190, ease:Power0.easeNone});
	TweenMax.to($(".visualDiv .tit span.t1"), 0.8, {top:0, opacity:1, delay:0.8, ease:Power3.easeOut});
	TweenMax.to($(".visualDiv .tit span.t2"), 0.8, {top:0, opacity:1, delay:1.3, ease:Power3.easeOut});
	TweenMax.to($(".visualDiv .txt"), 2, {top:470, opacity:1, delay:1.8, ease:Power3.easeOut});
	TweenMax.to($(".visualDiv .line2"), 0.6, {height:lineHeight, delay:2.1, ease:Power0.easeNone});
	
	$(".contentDiv .apartList").click(function(){
		TweenMax.to($("html, body"), 1, {scrollTop:$(".contentDiv .motionVisual").offset().top + $(".contentDiv .motionVisual").outerHeight() - 69, ease:Power3.easeOut});
	});
	
	$(".allMenuBtn").click(function(){
		TweenMax.to($(".allMenuPop"), 0.6, {display:"block", left:$("#wrap").offset().left, ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeIn(600);
	});

	$(".allMenuPop").click(function(){
		TweenMax.to($(".allMenuPop"), 0.6, {left:"-100%", ease:Power3.easeOut, onComplete:function(){
			TweenMax.to($(".allMenuPop"), 0, {display:"none"});
		}});
		$(".dimdBg").stop(true, true).fadeOut(600);
	});

	$(".searchBtn").click(function(){
		TweenMax.to($(".searchPop"), 0.6, {display:"block", left:$("#wrap").offset().left, ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeIn(600);
	});

	$(".searchPop").click(function(){
		TweenMax.to($(".searchPop"), 0.6, {left:"100%", ease:Power3.easeOut, onComplete:function(){
			TweenMax.to($(".searchPop"), 0, {display:"none"});
		}});
		$(".dimdBg").stop(true, true).fadeOut(600);
	});
	
	var rollN = 0;
	setInterval(function(){
		TweenMax.to($(".contentDiv .motionVisual .roll").eq(rollN), 1, {opacity:0, ease:Power3.easeOut});
		rollN ++;
		if(rollN > $(".contentDiv .motionVisual .roll").size() -1) rollN = 0;
		TweenMax.to($(".contentDiv .motionVisual .roll").eq(rollN), 1.5, {opacity:1, ease:Power3.easeOut});
	}, 3500);

	$(".contentDiv .apartList .list").each(function(q){
		$(this).click(function(){
			if(q < 2){
				if(!$(this).hasClass("on")){
					$(this).addClass("on");
				}else{
					$(this).removeClass("on");
				}
			}
		});
	});

	//누리다
	$(".visualDiv .nextBtn").hover(function(){
		if(!$(".rightDiv").hasClass("on")){
			$(".rightDiv").css("left","93%");
		}
	}, function(){
		if(!$(".rightDiv").hasClass("on")){
			$(".rightDiv").css("left","100%");
		}
	});

	$(".visualDiv .nextBtn").click(function(){
		if(!$(".rightDiv").hasClass("on")){
			$(".rightDiv").addClass("on");
			$(".rightDiv").css("left","0");
			$(".visualDiv .nextBtn").css("right","1780px");
			$(".visualDiv .prevBtn").css("left","-1780px");
			$("#wrap").css({"height":"100%","overflow":"hidden"});
			TweenMax.to($(".visualDiv .nextBtn"), 0.5, {className:"+=on", onComplete:function(){
				$(".rightDiv .txtArea").addClass("on");
				$(".rightDiv .plusBtn").addClass("on");
				$(".rightDiv .pop").addClass("on");
				$(".rightDiv .pop2").addClass("on");
			}});
		}else{
			$(".rightDiv").removeClass("on");
			$(".rightDiv").css("left","100%");
			$(".visualDiv .nextBtn").css("right","0");
			$(".visualDiv .prevBtn").css("left","0");
			TweenMax.to($(".visualDiv .nextBtn"), 0.5, {className:"-=on"});
			$(".rightDiv .txtArea").removeClass("on");
			$(".rightDiv .plusBtn").removeClass("on");
			$(".rightDiv .pop").removeClass("on");
			$(".rightDiv .pop2").removeClass("on");
			$("#wrap").css({"height":"","overflow":""});
		}
	});

	//말하다
	$(".visualDiv .prevBtn").hover(function(){
		if(!$(".leftDiv").hasClass("on")){
			$(".leftDiv").css("left","-93%");
		}
	}, function(){
		if(!$(".leftDiv").hasClass("on")){
			$(".leftDiv").css("left","-100%");
		}
	});

	$(".visualDiv .prevBtn").click(function(){
		if(!$(".leftDiv").hasClass("on")){
			$(".leftDiv").addClass("on");
			$(".leftDiv").css("left","0");
			$(".visualDiv .nextBtn").css("right","-1780px");
			$(".visualDiv .prevBtn").css("left","1780px");
			$("#wrap").css({"height":"100%","overflow":"hidden"});
			TweenMax.to($(".visualDiv .prevBtn"), 0.5, {className:"+=on"});
		}else{
			$(".leftDiv").removeClass("on");
			$(".leftDiv").css("left","-100%");
			$(".visualDiv .nextBtn").css("right","0");
			$(".visualDiv .prevBtn").css("left","0");
			TweenMax.to($(".visualDiv .prevBtn"), 0.5, {className:"-=on"});
			$("#wrap").css({"height":"","overflow":""});
		}
	});

	$(".rightDiv .plusBtn").click(function(){
		if($(".rightDiv .txtArea > .two").hasClass("on")){
			TweenMax.to($(".rightDiv .pop"), 0.6, {display:"block", right:0, ease:Power3.easeOut});
			$(".dimdBg").stop(true, true).fadeIn(600);
		}
		if($(".rightDiv .txtArea > .thr").hasClass("on")){
			TweenMax.to($(".rightDiv .pop2"), 0.6, {display:"block", right:0, ease:Power3.easeOut});
			$(".dimdBg").stop(true, true).fadeIn(600);
		}
	});

	$(".rightDiv .pop").click(function(){
		TweenMax.to($(".rightDiv .pop"), 0.6, {right:-530, ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeOut(600);
	});
	$(".rightDiv .pop2").click(function(){
		TweenMax.to($(".rightDiv .pop2"), 0.6, {right:-530, ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeOut(600);
	});

	var upHeight = $(window).height() / 85;
	$(".rightDiv .plusBtn").addClass("one");
	$(".rightDiv").scroll(function(){
		$(".rightDiv .txtArea").css("margin-top", ($(".rightDiv .section1").offset().top)/upHeight);
		if($(".rightDiv .section2").offset().top > $(window).height()/2){
			$(".rightDiv .txtArea > div").removeClass("on");
			$(".rightDiv .txtArea > div.one").addClass("on");
			$(".rightDiv .plusBtn").addClass("one");
			$(".rightDiv .plusBtn").removeClass("two");
			$(".rightDiv .plusBtn").removeClass("thr");
		}else if($(".rightDiv .section3").offset().top > $(window).height()/2){
			$(".rightDiv .txtArea > div").removeClass("on");
			$(".rightDiv .txtArea > div.two").addClass("on");
			$(".rightDiv .plusBtn").removeClass("one");
			$(".rightDiv .plusBtn").addClass("two");
			$(".rightDiv .plusBtn").removeClass("thr");
		}else{
			$(".rightDiv .txtArea > div").removeClass("on");
			$(".rightDiv .txtArea > div.thr").addClass("on");
			$(".rightDiv .plusBtn").removeClass("one");
			$(".rightDiv .plusBtn").removeClass("two");
			$(".rightDiv .plusBtn").addClass("thr");
		}
	});
	
	var headFix = false;
	var leftN = 0;
	$(".leftDiv").on('mousewheel DOMMouseScroll', function(e) {
		if(!headFix){
			var E = e.originalEvent;
			delta = 0;
			if (E.detail) {
			}else{
				delta = E.wheelDelta;
				deltaY = E.deltaY
				if(delta == 120){
					if(leftN == 2){
						headFix = true;
						TweenMax.to($(".leftDiv .section3"), 0.6, {top:"100%", delay:0.6, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section3"), 0.6, {scale:0.9, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section2"), 0.6, {top:"0", delay:0.6, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section2"), 0, {scale:0.9, delay:0.6, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section2"), 0.6, {scale:1, delay:1.1, ease:Power3.easeOut, onComplete:function(){
							leftN = 1;
							headFix = false;
						}});
						$(".leftDiv .indicator span").removeClass("on");
						$(".leftDiv .indicator span").eq(1).addClass("on");
					}
					if(leftN == 1){
						headFix = true;
						TweenMax.to($(".leftDiv .section2"), 0.6, {top:"100%", delay:0.6, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section2"), 0.6, {scale:0.9, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section1"), 0.6, {top:"0", delay:0.6, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section1"), 0, {scale:0.9, delay:0.6, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section1"), 0.6, {scale:1, delay:1.1, ease:Power3.easeOut, onComplete:function(){
							leftN = 0;
							headFix = false;
						}});
						$(".leftDiv .indicator span").removeClass("on");
						$(".leftDiv .indicator span").eq(0).addClass("on");
					}
				}else if(delta == -120){
					if(leftN == 0){
						headFix = true;
						TweenMax.to($(".leftDiv .section1"), 0.6, {top:"-100%", delay:0.6, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section1"), 0.6, {scale:0.9, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section2"), 0.6, {top:"0", delay:0.6, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section2"), 0, {scale:0.9, delay:0.6, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section2"), 0.6, {scale:1, delay:1.1, ease:Power3.easeOut, onComplete:function(){
							leftN = 1;
							headFix = false;
						}});
						$(".leftDiv .indicator span").removeClass("on");
						$(".leftDiv .indicator span").eq(1).addClass("on");
					}
					if(leftN == 1){
						headFix = true;
						TweenMax.to($(".leftDiv .section2"), 0.6, {top:"-100%", delay:0.6, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section2"), 0.6, {scale:0.9, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section3"), 0.6, {top:"0", delay:0.6, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section3"), 0, {scale:0.9, delay:0.6, ease:Power3.easeOut});
						TweenMax.to($(".leftDiv .section3"), 0.6, {scale:1, delay:1.1, ease:Power3.easeOut, onComplete:function(){
							leftN = 2;
							headFix = false;
						}});
						$(".leftDiv .indicator span").removeClass("on");
						$(".leftDiv .indicator span").eq(2).addClass("on");
					}
				}
			}
		}
	});

	var clickN = 0;
	$(".leftDiv .indicator").click(function(){
		if(!headFix){
			if(clickN == 0){
				headFix = true;
				TweenMax.to($(".leftDiv .section1"), 0.6, {top:"-100%", delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section1"), 0.6, {scale:0.9, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section2"), 0.6, {top:"0", delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section2"), 0, {scale:0.9, delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section2"), 0.6, {scale:1, delay:1.1, ease:Power3.easeOut, onComplete:function(){
					clickN = 1;
					headFix = false;
				}});
				$(".leftDiv .indicator span").removeClass("on");
				$(".leftDiv .indicator span").eq(1).addClass("on");
			}
			if(clickN == 1){
				headFix = true;
				TweenMax.to($(".leftDiv .section2"), 0.6, {top:"-100%", delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section2"), 0.6, {scale:0.9, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section3"), 0.6, {top:"0", delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section3"), 0, {scale:0.9, delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section3"), 0.6, {scale:1, delay:1.1, ease:Power3.easeOut, onComplete:function(){
					clickN = 2;
					headFix = false;
				}});
				$(".leftDiv .indicator span").removeClass("on");
				$(".leftDiv .indicator span").eq(2).addClass("on");
			}
			if(clickN == 2){
				headFix = true;
				TweenMax.to($(".leftDiv .section3"), 0.6, {top:"100%", delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section3"), 0.6, {scale:0.9, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section2"), 0.6, {top:"0", delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section2"), 0, {scale:0.9, delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section2"), 0.6, {scale:1, delay:1.1, ease:Power3.easeOut, onComplete:function(){
					clickN = 3;
					headFix = false;
				}});
				$(".leftDiv .indicator span").removeClass("on");
				$(".leftDiv .indicator span").eq(1).addClass("on");
			}
			if(clickN == 3){
				headFix = true;
				TweenMax.to($(".leftDiv .section2"), 0.6, {top:"100%", delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section2"), 0.6, {scale:0.9, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section1"), 0.6, {top:"0", delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section1"), 0, {scale:0.9, delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".leftDiv .section1"), 0.6, {scale:1, delay:1.1, ease:Power3.easeOut, onComplete:function(){
					clickN = 0;
					headFix = false;
				}});
				$(".leftDiv .indicator span").removeClass("on");
				$(".leftDiv .indicator span").eq(0).addClass("on");
			}
		}
	});
	
	var opacityN = 1;
	$(window).scroll(function(){
		if($("#wrap.main").size() > 0){
			if($(window).scrollTop() > 0){
				$(".visualDiv .scroll").css("position","absolute");
			}else{
				$(".visualDiv .scroll").css("position","fixed");
			}

			if($(window).scrollTop() > $(".contentDiv").offset().top - 150){
				$(".header").addClass("on");
			}else{
				$(".header").removeClass("on");
			}

			if($(window).scrollTop() > 0 && $(window).scrollTop() < $(".contentDiv").offset().top){
				opacityN = 1 - $(window).scrollTop()/Math.floor($(".visualDiv").outerHeight());
				$(".visualDiv").css("opacity",opacityN + 0.1);
			}

			if($(window).scrollTop() > 500){
				$(".contentDiv .motionVisual").css("width", $(window).scrollTop() + 800);
			}

			if($(window).scrollTop() > $(".contentDiv .apartList").offset().top - 500){
				$(".contentDiv .apartList .list").each(function(q){
					TweenMax.to($(this), 0.6, {top:0, opacity:1, delay:q*0.25, ease:Power3.easeOut});
				});
			}

			if($(window).scrollTop() > $(".contentDiv .noticeDiv").offset().top - 950){
				TweenMax.to($(".contentDiv .noticeDiv .title"), 0.6, {top:0, opacity:1, ease:Power3.easeOut});
				$(".contentDiv .noticeList .list").each(function(q){
					TweenMax.to($(this), 0.6, {top:0, opacity:1, delay:q*0.25 + 0.5, ease:Power3.easeOut});
				});
				TweenMax.to($(".contentDiv .noticeDiv .btn"), 0.6, {top:0, opacity:1, delay:1.6, ease:Power3.easeOut});
			}
		}
	});$(window).scroll();
});