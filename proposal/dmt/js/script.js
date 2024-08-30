var secNum = 0;
var secMove = true;
var sec3st = 0;
var delta;
var sec3mt = 0;
var subSt = 0;

$(function(){
	$(window).load(function(){
		$(".sec1, .sec2, .sec3").height($(window).height());
		$(".stickyHeader").width($("#cBody").width());
	});
	if($("#cBody.sub").length > 0){
		$("html,body").css({"overflow":"auto" , "height":"auto"});
	}
	
	$(window).resize(function(){
		$(".sec1, .sec2, .sec3").height($(window).height());
		$(".stickyHeader").width($("#cBody").width());
	});$(window).resize();

	$(window).on("load", function(){
		TweenMax.to($(".loading .on"), 1.5, {height:"100%", ease:Power3.easeIn, onComplete:function(){
			$(".loading").fadeOut(200);
			TweenMax.to($(".sec.sec1 .mainTit"), 1, {width:320, delay:0.5, ease:Power3.easeOut});
			TweenMax.to($(".sec.sec1 .con1 .txtArea .tit"), 1, {top:0, opacity:1, delay:0.8, ease:Power3.easeOut});
			TweenMax.to($(".sec.sec1 .con1 .txtArea .txt"), 1, {top:0, opacity:1, delay:1, ease:Power3.easeOut});
			TweenMax.to($(".sec.sec1 .con1 .txtArea .btn"), 1, {top:0, opacity:1, delay:1.2, ease:Power3.easeOut});
			TweenMax.to($(".sec.sec1 .nextBt"), 1, {right:0, opacity:1, delay:1.5, ease:Power3.easeOut});
			TweenMax.to($(".sec.sec1 .scroll"), 1, {opacity:1, delay:2, ease:Power3.easeOut, onComplete:function(){
				TweenMax.fromTo($(".sec.sec1 .scroll"), 1.5, {height:100}, {height:0, repeat:-1, ease:Power1.easeOut});
				secMove = false;
			}});
		}});
		
	});
	
	// 메인 스크롤 이벤트
	TweenMax.to($("html, body, .sec3"), 0, {scrollTop:0});
	
	$("html, body").on('mousewheel DOMMouseScroll', function(e) {
		var E = e.originalEvent;
		delta = 0;
		if (E.detail) {
			delta = E.detail * -40;
		}else{
			delta = E.wheelDelta;
		};
		
		if(delta < 0 && !secMove && $(".scrollDiv").length > 0){ // 마우스 휠을 아래로 내렸을 경우
			secMove = true;
			if(secNum == 0){
				secNum = 1;
				TweenMax.to($(".scrollDiv"), 1.5, {top:-$(window).height() * secNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					TweenMax.to($(".sec.sec2 .mainTit"), 0.8, {width:320, ease:Power3.easeOut});
					TweenMax.to($(".swiperArea"), 2, {left:0, delay:0.5, ease:Back.easeOut.config(1), onComplete:function(){
						$(".swiperArea").addClass("ended");
					}});
				}});
				$("#header").removeClass("type2");
			}else if(secNum == 1){
				$(".sec3").scrollTop(0);
				secNum = 2;
				TweenMax.to($(".scrollDiv"), 1.5, {top:-$(window).height() * secNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
				}});
				TweenMax.to($(".sec.sec3 .blueBg"), 0.8, {width:800, height:920, marginTop:0, delay:1.1, ease:Power3.easeOut});
				TweenMax.to($(".sec.sec3 .mainTit"), 0.8, {width:320, delay:1.1, ease:Power3.easeOut});
				$("#header").addClass("type2");
			}else if(secNum == 2){
				secNum = 2;
				secMove = false;
			}
		};

		if(delta > 0 && !secMove && $(".scrollDiv").length > 0){ // 마우스 휠을 위로 올렸을 경우
			if(secNum == 0){
				secMove = true;
				secNum = 0;
				secMove = false;
				$("#header").removeClass("type2");
			}else if(secNum == 1){
				secMove = true;
				secNum = 0;
				TweenMax.to($(".scrollDiv"), 1.5, {top:-$(window).height() * secNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
				}});
				$("#header").removeClass("type2");
			}else if(secNum == 2){
				if(sec3st <= 5){
					secMove = true;
					secNum = 1;
					TweenMax.to($(".scrollDiv"), 1.5, {top:-$(window).height() * secNum, ease:Power3.easeInOut, onComplete:function(){
						secMove = false;
						TweenMax.to($(".sec.sec2 .mainTit"), 0.8, {width:320, ease:Power3.easeOut});
						TweenMax.to($(".swiperArea"), 2, {left:0, delay:0.5, ease:Back.easeOut.config(1), onComplete:function(){
							$(".swiperArea").addClass("ended");
						}});
					}});
					$("#header").removeClass("type2");
				}
			}
		};
		$(".indi a").removeClass("on");
		$(".indi a").eq(secNum).addClass("on");
	});
	
	$(".sec3").scroll(function(){
		sec3st = $(this).scrollTop();
		sec3mt = $(this).scrollTop();
		if(sec3mt > 663) sec3mt = 663;

		if(sec3st - 210 >= $(".sec3 .blueBg").offset().top && sec3st - 210 + $(".sec.sec3 .blueBg").height() < $(".sec3 .con1").height() - 210){
			$(".sec3 .blueBg").removeClass("stop").addClass("fixed");
		}else if(sec3st - 210 < $(".sec3 .blueBg").offset().top){
			$(".sec3 .blueBg").removeClass("fixed");
		}else if(sec3st - 210 + $(".sec.sec3 .blueBg").height() >= $(".sec3 .con1").height() - 210){
			$(".sec3 .blueBg").addClass("stop");
			TweenMax.to($(".indi"), 0, {marginTop:-(sec3st - 663)});
		}
		
		if(secNum == 2){
			TweenMax.to($("#header"), 0, {top:-sec3st});
			TweenMax.to($(".sec3 .mainTit"), 0, {marginTop:sec3mt});
			if(sec3st - 210 + $(".sec.sec3 .blueBg").height() >= $(".sec3 .con1").height() - 210){
				console.log(sec3st - $(".sec3 .con1").offset().top - $(".sec3 .con1").height());
			}
		}
	});
	
	// main indi
	$(".indi a").each(function(i){
		$(this).click(function(){
			if(!$(this).hasClass("on")){
				secMove = true;
				$(".indi a").eq(secNum).removeClass("on");
				secNum = i;
				if(secNum == 2){
					$("#header").addClass("type2");
					TweenMax.to($(".sec.sec3 .blueBg"), 0.8, {width:800, height:920, marginTop:0, delay:1.1, ease:Power3.easeOut});
					TweenMax.to($(".sec.sec3 .mainTit"), 0.8, {width:320, delay:1.1, ease:Power3.easeOut});
				}else{
					$("#header").removeClass("type2");
					$(".sec3 .blueBg").removeClass("fixed");
					TweenMax.to($("#header"), 0, {top:0});
					TweenMax.to($(".sec3 .mainTit"), 0, {marginTop:0});
					TweenMax.to($(".indi"), 0, {marginTop:0});
				}
				$(".indi a").eq(secNum).addClass("on");
				TweenMax.to($(".scrollDiv"), 1.5, {top:-$(window).height() * secNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					$(".sec.sec3 .blueBg").removeClass("stop");
					$(".sec.sec3 .blueBg").removeClass("fixed");
					if(secNum == 2){
						
					}else if(secNum == 1){
						TweenMax.to($(".sec.sec2 .mainTit"), 0.8, {width:320, ease:Power3.easeOut});
						TweenMax.to($(".swiperArea"), 2, {left:0, delay:0.5, ease:Back.easeOut.config(1), onComplete:function(){
							$(".swiperArea").addClass("ended");
						}});
					}
					$(".sec3").scrollTop(0);
				}});
			}
		});
	});
	
	// gnb
	$("#gnb a").hover(function(){
		$("#header").addClass("hover");
	}, function(){
		$("#header").removeClass("hover");
	});

	// main top button
	$(".topBt").click(function(){
		secNum = 0;
		secMove = true;
		$(".indi a").removeClass("on");
		$(".indi a").eq(secNum).addClass("on");
		$("#header").removeClass("type2");
		$(".sec.sec3 .blueBg").removeClass("stop");
		$(".sec.sec3 .blueBg").removeClass("fixed");
		TweenMax.to($("#header"), 0, {top:0});
		TweenMax.to($(".scrollDiv"), 1, {top:0, ease:Power3.easeInOut, onComplete:function(){
			secMove = false;
			$(".sec3").scrollTop(0);
		}});
		if($("#cBody.sub").length > 0){
			TweenMax.to($("html,body"), 1, {scrollTop:0, ease:Power3.easeInOut});
		}
	});
	
	// sec1
	$(".sec.sec1 .nextBt").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".sec.sec1 .nextBt .arrow.next").hide(300);
			TweenMax.to($(".sec.sec1 .con2"), 1, {left:0, ease:Power3.easeOut});
			$(".sec.sec1 .nextBt .arrow.prev").delay(200).fadeIn(300);
		}else{
			$(this).removeClass("on");
			$(".sec.sec1 .nextBt .arrow.prev").hide(300);
			TweenMax.to($(".sec.sec1 .con2"), 1, {left:"100%", ease:Power3.easeOut});
			$(".sec.sec1 .nextBt .arrow.next").delay(200).fadeIn(300);
		}
	});
	
	var vid1 = document.getElementById("mainVisVideo1");
	var vid2 = document.getElementById("mainVisVideo2");
	$(".sec.sec1 .con2 .boxArea .box.box1").hover(function(){
		$(".sec.sec1 .con2 .video1").show();
		vid1.play();
	}, function(){
		$(".sec.sec1 .con2 .video1").hide();
		vid1.pause();
		vid1.currentTime = 0;
	});
	$(".sec.sec1 .con2 .boxArea .box.box2").hover(function(){
		$(".sec.sec1 .con2 .video2").show();
		vid2.play();
	}, function(){
		$(".sec.sec1 .con2 .video2").hide();
		vid2.pause();
		vid2.currentTime = 0;
	});

	// sec2
	var sec2swiper = new Swiper('.sec.sec2 .swiper-container', {
		slidesPerView: 'auto',
		grabCursor: true
	});	
	sec2swiper.on('slideChange', function () {
		console.log('slide changed');
		console.log(sec2swiper.activeIndex);
		if(sec2swiper.activeIndex > 0){
			TweenMax.to($(".sec2 .mainTit"), 0.3, {opacity:0, ease:Power3.easeOut});
		}else{
			TweenMax.to($(".sec2 .mainTit"), 0.3, {opacity:1, ease:Power3.easeOut});
		}
	});

	// sec3
	$(".sec.sec3 .con2 .next").click(function(){
		TweenMax.to($(".sec.sec3 .con2 .conArea .slide1 a").eq(0), 0.3, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".sec.sec3 .con2 .conArea .slide1 a").eq(1), 0.3, {opacity:0, delay:0.1, ease:Power3.easeOut});
		TweenMax.to($(".sec.sec3 .con2 .conArea .slide1 a").eq(2), 0.3, {opacity:0, delay:0.2, ease:Power3.easeOut});
		TweenMax.to($(".sec.sec3 .con2 .conArea .slide1 a").eq(3), 0.3, {opacity:0, delay:0.3, ease:Power3.easeOut, onComplete:function(){
			$(".sec.sec3 .con2 .conArea .slide1").hide();
			$(".sec.sec3 .con2 .conArea .slide2").show();
			TweenMax.to($(".sec.sec3 .con2 .conArea .slide2 a").eq(0), 0.3, {opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".sec.sec3 .con2 .conArea .slide2 a").eq(1), 0.3, {opacity:1, delay:0.1, ease:Power3.easeOut});
			TweenMax.to($(".sec.sec3 .con2 .conArea .slide2 a").eq(2), 0.3, {opacity:1, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".sec.sec3 .con2 .conArea .slide2 a").eq(3), 0.3, {opacity:1, delay:0.3, ease:Power3.easeOut});
		}});
		
		$(".sec.sec3 .con2 .prev").fadeIn(300);
	});

	$(".sec.sec3 .con2 .prev").click(function(){
		TweenMax.to($(".sec.sec3 .con2 .conArea .slide2 a").eq(0), 0.3, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".sec.sec3 .con2 .conArea .slide2 a").eq(1), 0.3, {opacity:0, delay:0.1, ease:Power3.easeOut});
		TweenMax.to($(".sec.sec3 .con2 .conArea .slide2 a").eq(2), 0.3, {opacity:0, delay:0.2, ease:Power3.easeOut});
		TweenMax.to($(".sec.sec3 .con2 .conArea .slide2 a").eq(3), 0.3, {opacity:0, delay:0.3, ease:Power3.easeOut, onComplete:function(){
			$(".sec.sec3 .con2 .conArea .slide2").hide();
			$(".sec.sec3 .con2 .conArea .slide1").show();
			TweenMax.to($(".sec.sec3 .con2 .conArea .slide1 a").eq(0), 0.3, {opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".sec.sec3 .con2 .conArea .slide1 a").eq(1), 0.3, {opacity:1, delay:0.1, ease:Power3.easeOut});
			TweenMax.to($(".sec.sec3 .con2 .conArea .slide1 a").eq(2), 0.3, {opacity:1, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".sec.sec3 .con2 .conArea .slide1 a").eq(3), 0.3, {opacity:1, delay:0.3, ease:Power3.easeOut});
		}});

		$(".sec.sec3 .con2 .prev").fadeOut(300);
	});

	$(".helpArea .helpBtn").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			TweenMax.to($(".helpArea .helpCon"), 0.8, {width:240, height:690, ease:Power3.easeInOut});
		}else{
			$(this).removeClass("on");
			TweenMax.to($(".helpArea .helpCon"), 0.8, {width:0, height:0, ease:Power3.easeInOut});
		}
	});


	// sub page scroll header
	$(window).scroll(function(){
		subSt = $(window).scrollTop();

		if($("#cBody.sub").length > 0){
			if(subSt > 200){
				if(delta > 0){
					$(".stickyHeader").addClass("fixed");
				}else if(delta < 0){
					$(".stickyHeader").removeClass("fixed");
				}
			}else if(subSt <= 200){
				$(".stickyHeader").removeClass("fixed");
			}
		}
	});

	// sub1
	if($(".sub1").length > 0){
		$(window).load(function(){
			TweenMax.to($(".sub1 .subCon1 .tit"), 1, {top:278, opacity:1, delay:0.5, ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon1 .txt"), 1, {top:384, opacity:1, delay:0.7, ease:Power3.easeOut});
		});
		
		var sub1St = 0;
		var boxTop = 0;
		$(window).scroll(function(){
			sub1St = $(window).scrollTop() + ($(window).height()/2);

			if(sub1St > $(".sub1 .subCon2").offset().top){
				TweenMax.to($(".sub1 .subCon2 .tit"), 1, {top:250, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon2 .txt"), 1, {top:387, opacity:1, delay:0.2, ease:Power3.easeOut});
			}
			/*
			if(sub1St > $(".sub1 .subCon2 .boxArea .box1").offset().top){
				TweenMax.to($(".sub1 .subCon2 .boxArea .box1 .left"), 1, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon2 .boxArea .box1 .right"), 1, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
			}
			if(sub1St > $(".sub1 .subCon2 .boxArea .box2").offset().top){
				TweenMax.to($(".sub1 .subCon2 .boxArea .box2 .right"), 1, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon2 .boxArea .box2 .left"), 1, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
			}
			if(sub1St > $(".sub1 .subCon2 .boxArea .box3").offset().top){
				TweenMax.to($(".sub1 .subCon2 .boxArea .box3 .left"), 1, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon2 .boxArea .box3 .right"), 1, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
			}
			*/
			if(sub1St > $(".sub1 .subCon2").offset().top && sub1St < $(".sub1 .subCon3").offset().top){
				console.log((sub1St - $(".sub1 .subCon2").offset().top)/3);
				boxTop = (sub1St - $(".sub1 .subCon2").offset().top)/2;
				
				TweenMax.to($(".sub1 .subCon2 .boxArea .box1 > div").eq(0), 0.7, {top:200 - boxTop/3});
				TweenMax.to($(".sub1 .subCon2 .boxArea .box1 > div").eq(1), 0.7, {top:500 - boxTop});
				TweenMax.to($(".sub1 .subCon2 .boxArea .box2 > div").eq(0), 0.7, {top:500 * 1.5 - boxTop});
				TweenMax.to($(".sub1 .subCon2 .boxArea .box2 > div").eq(1), 0.7, {top:200 - boxTop/3});
				TweenMax.to($(".sub1 .subCon2 .boxArea .box3 > div").eq(0), 0.7, {top:200 - boxTop/3});
				TweenMax.to($(".sub1 .subCon2 .boxArea .box3 > div").eq(1), 0.7, {top:500 * 2 - boxTop});
			}
			if(sub1St > $(".sub1 .subCon3").offset().top){
				TweenMax.to($(".sub1 .subCon3 .tit"), 1, {top:81, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon3 .txt"), 1, {top:150, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon3 .box"), 1, {top:258, opacity:1, delay:0.4, ease:Power3.easeOut});
			}
			if(sub1St > $(".sub1 .subCon4").offset().top){
				TweenMax.to($(".sub1 .subCon4 .tit"), 1, {top:129, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon4 .txt"), 1, {top:197, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon4 .box"), 1, {top:298, opacity:1, delay:0.4, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon4 .subIndi"), 1, {top:850, opacity:1, delay:0.6, ease:Power3.easeOut});
			}
			if(sub1St > $(".sub1 .subCon5").offset().top){
				TweenMax.to($(".sub1 .subCon5 > .tit"), 1, {top:170, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon5 > .txt"), 1, {top:248, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon5 .boxArea .tit"), 1, {top:413, opacity:1, delay:0.4, ease:Power3.easeOut});
			}
			if(sub1St > $(".sub1 .subCon6").offset().top){
				TweenMax.to($(".sub1 .subCon6 .boxArea > div").eq(0), 1, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon6 .boxArea > div").eq(1), 1, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon6 .boxArea > div").eq(2), 1, {top:0, opacity:1, delay:0.4, ease:Power3.easeOut});
				TweenMax.to($(".sub1 .subCon6 .boxArea > div").eq(3), 1, {top:0, opacity:1, delay:0.6, ease:Power3.easeOut});
			}
		});
		
		$(".sub1 .subCon5 .boxArea .left").hover(function(){
			TweenMax.to($(".sub1 .subCon5 .boxArea .left"), 0.5, {width:"55%", ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon5 .boxArea .right"), 0.5, {width:"45%", ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon5 .boxArea .left .tit"), 0, {height:50, ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon5 .boxArea .left .con"), 0.5, {opacity:1, ease:Power3.easeOut});
		},function(){
			TweenMax.to($(".sub1 .subCon5 .boxArea .left"), 0.5, {width:"50%", ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon5 .boxArea .right"), 0.5, {width:"50%", ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon5 .boxArea .left .tit"), 0, {height:146, ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon5 .boxArea .left .con"), 0.5, {opacity:0, ease:Power3.easeOut});
		});
		$(".sub1 .subCon5 .boxArea .right").hover(function(){
			TweenMax.to($(".sub1 .subCon5 .boxArea .left"), 0.5, {width:"45%", ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon5 .boxArea .right"), 0.5, {width:"55%", ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon5 .boxArea .right .tit"), 0, {height:50, ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon5 .boxArea .right .con"), 0.5, {opacity:1, ease:Power3.easeOut});
		},function(){
			TweenMax.to($(".sub1 .subCon5 .boxArea .left"), 0.5, {width:"50%", ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon5 .boxArea .right"), 0.5, {width:"50%", ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon5 .boxArea .right .tit"), 0, {height:146, ease:Power3.easeOut});
			TweenMax.to($(".sub1 .subCon5 .boxArea .right .con"), 0.5, {opacity:0, ease:Power3.easeOut});
		});
	}

	// sub2
	if($(".sub2").length > 0){
		$(".sub2 .rollArea .txtArea .rollBtn").click(function(){
			if(!$(this).hasClass("on")){
				$(".sub2 .rollArea .txtArea .rollBtn, .sub2 .rollArea .txtArea .subIndi").addClass("on");
				TweenMax.to($(".sub2 .rollArea .rollImg .img").eq(0), 0.8, {left:"-100%", ease:Power3.easeOut});
				TweenMax.to($(".sub2 .rollArea .rollImg .img").eq(1), 0.8, {left:0, ease:Power3.easeOut});
				TweenMax.to($(".sub2 .rollArea .txtArea .rollTxt .img").eq(0), 0.8, {left:"-100%", ease:Power3.easeOut});
				TweenMax.to($(".sub2 .rollArea .txtArea .rollTxt .img").eq(1), 0.8, {left:0, ease:Power3.easeOut});
			}else{
				$(".sub2 .rollArea .txtArea .rollBtn, .sub2 .rollArea .txtArea .subIndi").removeClass("on");
				TweenMax.to($(".sub2 .rollArea .rollImg .img").eq(1), 0.8, {left:"100%", ease:Power3.easeOut});
				TweenMax.to($(".sub2 .rollArea .rollImg .img").eq(0), 0.8, {left:0, ease:Power3.easeOut});
				TweenMax.to($(".sub2 .rollArea .txtArea .rollTxt .img").eq(1), 0.8, {left:"100%", ease:Power3.easeOut});
				TweenMax.to($(".sub2 .rollArea .txtArea .rollTxt .img").eq(0), 0.8, {left:0, ease:Power3.easeOut});
			}
		});
	}
});