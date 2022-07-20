$(function(){
	var introEnd = true;
	$(window).load(function(){
		TweenMax.to($(".wrap .introD .up"), 1.2, {bottom:0, opacity:1, ease:Power3.easeOut});
		TweenMax.to($(".wrap .introD .up"), 0, {delay:1.4, opacity:0, ease:Power3.easeOut, onComplete:function(){
			$(".wrap .introD .tit").find("img").attr("src", $(".wrap .introD .tit").find("img").attr("src").replace(".png", "_on.png"));
			TweenMax.to($(".wrap .introD .tit"), .6, {top:265, opacity:1, delay:0.01, ease:Power3.easeOut});
			TweenMax.to($(".wrap .introD .txt"), .6, {top:380, opacity:1, delay:0.15, ease:Power3.easeOut});
			TweenMax.to($(".wrap .circle .img1"), 2, {bottom:0, opacity:1, delay:0.3, ease:Power3.easeOut, onComplete:function(){
				introEnd = true;
			}});
		}});
		TweenMax.to($(".wrap .introD"), .5, {background:"#fff", delay:1.4, ease:Power3.easeOut});
	});

	$(".wrap .introD").click(function(){
		if(introEnd){
			$(".contents .topArea").fadeIn(300);
			$(".wrap .con1").fadeIn(300);
			$(".wrap .introD").fadeOut(300);
			$(".wrap .circle .img1").fadeOut(300);
			TweenMax.to($(".wrap .circle"), 1, {width:320, height:320, top:430, left:160, delay:0.3, ease:Power3.easeOut, onComplete:function(){
				$(".wrap .circle").addClass("type1");
				$(".wrap .circle").addClass("on");
				TweenMax.to($(".wrap .con1 .rollD .roll1 .tit"), .6, {left:60, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll1 .txt"), .6, {left:60, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll1 .img"), .6, {top:255, opacity:1, delay:0.4, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .btn"), .6, {opacity:1, delay:0.2, ease:Power3.easeOut});
			}});
		}
	});

	$(".wrap .con1 .rollD").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			TweenMax.to($(".wrap .con1 .rollD .roll1 .tit"), .6, {left:"-100%", opacity:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".wrap .con1 .rollD .roll1 .txt"), .6, {left:"-100%", opacity:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".wrap .con1 .rollD .btn"), .6, {opacity:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".wrap .con1 .rollD .roll1 .img"), .6, {top:325, opacity:0, delay:0.4, ease:Power3.easeOut, onComplete:function(){
				$(".wrap .circle").removeClass("type1");
				$(".wrap .circle").addClass("type2");
				$(".wrap .roll2").show();
				TweenMax.to($(".wrap .con1 .rollD .roll2 .tit"), 0, {left:110, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll2 .txt"), 0, {left:110, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll2 .img"), 0, {top:255, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll2 .tit"), .6, {left:60, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll2 .txt"), .6, {left:60, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll2 .img"), 1, {top:205, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .btn"), .6, {opacity:1, ease:Power3.easeOut});
			}});
		}else{
			$(this).removeClass("on");
			TweenMax.to($(".wrap .con1 .rollD .roll2 .tit"), .6, {left:"-100%", opacity:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".wrap .con1 .rollD .roll2 .txt"), .6, {left:"-100%", opacity:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".wrap .con1 .rollD .btn"), .6, {opacity:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".wrap .con1 .rollD .roll2 .img"), .6, {top:275, opacity:0, delay:0.4, ease:Power3.easeOut, onComplete:function(){
				$(".wrap .circle").removeClass("type2");
				$(".wrap .circle").addClass("type1");
				TweenMax.to($(".wrap .con1 .rollD .roll1 .tit"), 0, {left:110, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll1 .txt"), 0, {left:110, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll1 .img"), 0, {top:305, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll1 .tit"), .6, {left:60, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll1 .txt"), .6, {left:60, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll1 .img"), 1, {top:255, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .btn"), .6, {opacity:1, ease:Power3.easeOut});
			}});
		}
	});

	$(".contents .topArea").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".contents .fixBt").fadeIn(300);
			$(".contents .wrap").addClass("scroll");
			$(".wrap .circle").removeClass("type1");
			$(".wrap .circle").removeClass("type2");
			$(".contents .topArea").find("img").attr("src", $(".contents .topArea").find("img").attr("src").replace("1.png", "2.png"));
			$(".wrap .con1").fadeOut(0);
			$(".wrap .con2").fadeIn(500, function(){
				$(".wrap .circle").addClass("type3");
				TweenMax.to($(".wrap .con2 .rollD .roll1 .tit"), .6, {left:60, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .roll1 .txt"), .6, {left:60, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .roll1 .img"), .6, {bottom:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .btn"), .6, {opacity:1, ease:Power3.easeOut});
			});
		}else{
			$(this).removeClass("on");
			$(".contents .fixBt").fadeOut(300);
			$(".contents .wrap").removeClass("scroll");
			$(".wrap .circle").removeClass("type4");
			$(".wrap .circle").removeClass("type3");
			$(".contents .topArea").find("img").attr("src", $(".contents .topArea").find("img").attr("src").replace("2.png", "1.png"));
			$(".wrap .con2").fadeOut(0);
			$(".wrap .con1").fadeIn(500, function(){
				$(".wrap .circle").addClass("type1");
				TweenMax.to($(".wrap .con1 .rollD .roll1 .tit"), .6, {left:60, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll1 .txt"), .6, {left:60, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .roll1 .img"), .6, {bottom:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con1 .rollD .btn"), .6, {opacity:1, ease:Power3.easeOut});
			});
		}
	});

	$(".wrap .con2 .rollD").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			TweenMax.to($(".wrap .con2 .rollD .roll1 .tit"), .6, {left:"-100%", opacity:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".wrap .con2 .rollD .roll1 .txt"), .6, {left:"-100%", opacity:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".wrap .con2 .rollD .btn"), .6, {opacity:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".wrap .con2 .rollD .roll1 .img"), .6, {bottom:0, opacity:0, delay:0.4, ease:Power3.easeOut, onComplete:function(){
				$(".wrap .circle").removeClass("type3");
				$(".wrap .circle").addClass("type4");
				$(".wrap .roll2").show();
				TweenMax.to($(".wrap .con2 .rollD .roll2 .tit"), 0, {left:110, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .roll2 .txt"), 0, {left:110, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .roll2 .img"), 0, {bottom:-100, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .roll2 .tit"), .6, {left:60, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .roll2 .txt"), .6, {left:60, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .roll2 .img"), .6, {bottom:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .btn"), .6, {opacity:1, ease:Power3.easeOut});
			}});
		}else{
			$(this).removeClass("on");
			TweenMax.to($(".wrap .con2 .rollD .roll2 .tit"), .6, {left:"-100%", opacity:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".wrap .con2 .rollD .roll2 .txt"), .6, {left:"-100%", opacity:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".wrap .con2 .rollD .btn"), .6, {opacity:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".wrap .con2 .rollD .roll2 .img"), .6, {bottom:0, opacity:0, delay:0.4, ease:Power3.easeOut, onComplete:function(){
				$(".wrap .circle").removeClass("type4");
				$(".wrap .circle").addClass("type3");
				TweenMax.to($(".wrap .con2 .rollD .roll1 .tit"), 0, {left:110, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .roll1 .txt"), 0, {left:110, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .roll1 .img"), 0, {bottom:-100, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .roll1 .tit"), .6, {left:60, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .roll1 .txt"), .6, {left:60, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .roll1 .img"), .6, {bottom:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".wrap .con2 .rollD .btn"), .6, {opacity:1, ease:Power3.easeOut});
			}});
		}
	});

	$(".wrap .con2 .allPd .title").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".wrap .con2 .allPd .pdRoll > p").each(function(){
				TweenMax.to($(this), 0.6, {left: parseInt($(this).css("left").split("p")[0]) - 560, ease:Power3.easeOut});
			})
		}else{
			$(this).removeClass("on");
			$(".wrap .con2 .allPd .pdRoll > p").each(function(){
				TweenMax.to($(this), 0.6, {left: parseInt($(this).css("left").split("p")[0]) + 560, ease:Power3.easeOut});
			})
		}
	});

	$(".contents .wrap").scroll(function(){
		if($(".contents .wrap").hasClass("scroll")){
			if($(".contents .wrap").scrollTop() > 100){
				TweenMax.to($(".wrap .con2 .allPd"), 0.5, {opacity:1, top:0, ease:Power3.easeOut});
			}
			if($(".contents .wrap").scrollTop() > 500){
				TweenMax.to($(".wrap .con2 .bottom"), 0.5, {opacity:1, top:0, ease:Power3.easeOut});
			}
		}
	});

	$(".contents .fixBt").click(function(){
		TweenMax.to($(".calcPop"), 0.8, {left:0, opacity:1, ease:Power3.easeOut});
	});

	$(".contents .btList").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".contents .calcPop .btList .img").find("img").attr("src", $(".contents .calcPop .btList .img").find("img").attr("src").replace(".png", "_on.png"));
			$(".contents .calcPop .btList .img").addClass("on");
			$(".contents .calcPop .btList2 .img").find("img").attr("src", $(".contents .calcPop .btList2 .img").find("img").attr("src").replace(".png", "_on.png"));
		}else{
			$(this).removeClass("on");
			$(".contents .calcPop .btList .img").find("img").attr("src", $(".contents .calcPop .btList .img").find("img").attr("src").replace("_on.png", ".png"));
			$(".contents .calcPop .btList .img").removeClass("on");
			$(".contents .calcPop .btList2 .img").find("img").attr("src", $(".contents .calcPop .btList2 .img").find("img").attr("src").replace("_on.png", ".png"));
		}
	});
	
	$(".contents .calcPop .clickArea").click(function(){
		if(!$(this).parent(".motionD").hasClass("on")){
			$(this).parent(".motionD").addClass("on");
			$(".contents .calcPop .clickArea .click .img").each(function(){
				$(this).find("img").attr("src", $(this).find("img").attr("src").replace(".png", "_on.png"));
			});
			TweenMax.to($(".contents .calcPop .clickArea .click1 .img"), 1.2, {left:280, ease:Power3.easeOut});
			TweenMax.to($(".contents .calcPop .clickArea .click1 span"), 1.2, {width:290, ease:Power3.easeOut});
			TweenMax.to($(".contents .calcPop .clickArea .click2 .img"), 1.2, {left:140, ease:Power3.easeOut});
			TweenMax.to($(".contents .calcPop .clickArea .click2 span"), 1.2, {width:150, ease:Power3.easeOut});
			TweenMax.to($(".contents .calcPop .clickArea .click3 .img"), 1.2, {left:70, ease:Power3.easeOut});
			TweenMax.to($(".contents .calcPop .clickArea .click3 span"), 1.2, {width:80, ease:Power3.easeOut});
		}else{
			$(this).parent(".motionD").removeClass("on");
			$(".contents .calcPop .clickArea .click .img").each(function(){
				$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_on.png", ".png"));
			});		
			TweenMax.to($(".contents .calcPop .clickArea .click1 .img"), 1.2, {left:0, ease:Power3.easeOut});
			TweenMax.to($(".contents .calcPop .clickArea .click1 span"), 1.2, {width:0, ease:Power3.easeOut});
			TweenMax.to($(".contents .calcPop .clickArea .click2 .img"), 1.2, {left:0, ease:Power3.easeOut});
			TweenMax.to($(".contents .calcPop .clickArea .click2 span"), 1.2, {width:0, ease:Power3.easeOut});
			TweenMax.to($(".contents .calcPop .clickArea .click3 .img"), 1.2, {left:0, ease:Power3.easeOut});
			TweenMax.to($(".contents .calcPop .clickArea .click3 span"), 1.2, {width:0, ease:Power3.easeOut});
		}
	});

	$(".contents .calcPop .close").click(function(){
		TweenMax.to($(".contents .calcPop"), 0.8, {left:"100%", ease:Power3.easeOut, onComplete:function(){
			TweenMax.to($(".contents .calcPop"), 0, {opacity:0, ease:Power3.easeOut});
		}});
	});

	$(".wrap .con2 .allPd .pdRoll > p").click(function(){
		TweenMax.to($(".pdPop"), 0.8, {left:0, opacity:1, ease:Power3.easeOut});
	});

	$(".calcPop .nextArea").click(function(){
		$(".calcPop .typeA").hide();
		$(".calcPop .typeB").show();
		TweenMax.to($(".calcPop"), 0,{scrollTop:0, ease:Power0.easeNone});
	});

	$(".calcPop .typeB .nextPop").click(function(){
		TweenMax.to($(".pdPop"), 0.8,{left:0, opacity:1, ease:Power3.easeOut});
	});
	

	$(".pdPop .rollD").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".pdPop .rollD .list").each(function(){
				TweenMax.to($(this), 0.6, {left: parseInt($(this).css("left").split("p")[0]) - 400, ease:Power3.easeOut});
			});
			TweenMax.to($(".pdPop .rollD .lineD span"), 0.6, {left:350, ease:Power3.easeOut});
		}else{
			$(this).removeClass("on");
			$(".pdPop .rollD .list").each(function(){
				TweenMax.to($(this), 0.6, {left: parseInt($(this).css("left").split("p")[0]) + 400, ease:Power3.easeOut});
			});
			TweenMax.to($(".pdPop .rollD .lineD span"), 0.6, {left:0, ease:Power3.easeOut});
		}
	});

	$(".contents .pdPop .close").click(function(){
		TweenMax.to($(".contents .pdPop"), 0.8, {left:"100%", ease:Power3.easeOut, onComplete:function(){
			TweenMax.to($(".contents .pdPop"), 0, {opacity:0, ease:Power3.easeOut});
		}});
	});

	$(".pdPop .linkA").click(function(){
		$(".touchPop").fadeIn(300);
	});

});