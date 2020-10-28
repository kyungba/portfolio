$(function(){
	var curMain = 0;
	var isMove = false;
	var isClick = false;

	TweenMax.to($(".mainVis .rollU").eq(curMain).find(".txt1"), .8, {top:316, opacity:1, delay:0.5, ease:Power3.easeOut});
	TweenMax.to($(".mainVis .rollU").eq(curMain).find(".txt2"), .8, {top:365, opacity:1, delay:0.6, ease:Power3.easeOut});
	TweenMax.to($(".mainVis .rollU").eq(curMain).find(".txt3"), .8, {top:475, opacity:1, delay:0.7, ease:Power3.easeOut});

	$(".mainVis .indiP .indi a").click(function(){
		if(isMove == false){
			isMove = true;
			TweenMax.to($(".mainVis .rollU").eq(curMain), .8, {left:"-100%", ease:Power3.easeOut});
			curMain++;
			if(isClick == false){
				$(this).find("img").attr("src", $(this).find("img").attr("src").replace(".png", "_on.png"));
				isClick = true;
			}else if(isClick == true){
				$(this).find("img").attr("src", $(this).find("img").attr("src").replace("_on.png", ".png"));
				isClick = false;
			}
			if(curMain > 1){
				curMain = 0;
			};
			TweenMax.to($(".mainVis .rollU").eq(curMain), 0, {left:"100%", ease:Power3.easeOut});
			TweenMax.to($(".mainVis .rollU").eq(curMain), .8, {left:0, ease:Power3.easeOut});
			TweenMax.to($(".mainVis .rollU").eq(curMain).find(".txt1"), 0, {top:416, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainVis .rollU").eq(curMain).find(".txt2"), 0, {top:465, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainVis .rollU").eq(curMain).find(".txt3"), 0, {top:575, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainVis .rollU").eq(curMain).find(".txt1"), .8, {top:316, opacity:1, delay:0.5, ease:Power3.easeOut});
			TweenMax.to($(".mainVis .rollU").eq(curMain).find(".txt2"), .8, {top:365, opacity:1, delay:0.6, ease:Power3.easeOut});
			TweenMax.to($(".mainVis .rollU").eq(curMain).find(".txt3"), .8, {top:475, opacity:1, delay:0.7, ease:Power3.easeOut, onComplete:function(){
				isMove = false;
			}});
		};
	});

	$("#header p .menu").hover(function(){
		$(".twoD").addClass("on");
	}, function(){
		$(".twoD").removeClass("on");
	});

	$(".twoD").hover(function(){
		$(".twoD").addClass("on");
	}, function(){
		$(".twoD").removeClass("on");
	});

	$(".mainVis .indiP .srch .input").click(function(){
		TweenMax.to($(".mainVis .indiP .srch .input"), .5, {width:517, ease:Power3.easeOut});
		TweenMax.to($(".mainVis .indiP .srch .input .off"), .5, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".mainVis .indiP .srch .input .on"), .5, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($(".mainVis .indiP .srch .bt"), .8, {left:517, ease:Power3.easeOut});
		TweenMax.to($(".mainVis .indiP .srch .xbt"), 1.1, {left:680, rotation:720, ease:Power3.easeOut});
	});

	$(".mainVis .indiP .srch .xbt").click(function(){
		TweenMax.to($(".mainVis .indiP .srch .input"), 1.1, {width:288, ease:Power3.easeInOut});
		TweenMax.to($(".mainVis .indiP .srch .input .off"), 1.1, {opacity:1, ease:Power3.easeInOut});
		TweenMax.to($(".mainVis .indiP .srch .input .on"), 1.1, {opacity:0, ease:Power3.easeInOut});
		TweenMax.to($(".mainVis .indiP .srch .bt"), .8, {left:158, ease:Power3.easeInOut});
		TweenMax.to($(".mainVis .indiP .srch .xbt"), .5, {left:260, rotation:0, ease:Power3.easeInOut});
	});

	var curCon1 = 0;
	TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").find(".txt1"), 0, {top:50, opacity:0, ease:Power3.easeOut});
	TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").find(".txt2"), 0, {top:135, opacity:0, ease:Power3.easeOut});
	TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").find(".txt3"), 0, {top:258, opacity:0, ease:Power3.easeOut});
	TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(0).find(".txt1"), 0, {top:0, opacity:1, ease:Power3.easeOut});
	TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(0).find(".txt2"), 0, {top:85, opacity:1, ease:Power3.easeOut});
	TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(0).find(".txt3"), 0, {top:208, opacity:1, ease:Power3.easeOut});

	TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").find(".off"), 0, {opacity:1, ease:Power3.easeOut});
	TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(0).find(".off"), 0, {opacity:0, ease:Power3.easeOut});

	$(".mainCon1 .inner .imgArea a").click(function(){
		if(curCon1 == 0){
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(0).find(".txt1"), .8, {top:-50, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(0).find(".txt2"), .8, {top:35, opacity:0, delay:.1, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(0).find(".txt3"), .8, {top:158, opacity:0, delay:.2, ease:Power3.easeOut});

			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(1).find(".txt1"), 0, {top:50, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(1).find(".txt2"), 0, {top:135, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(1).find(".txt3"), 0, {top:258, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(1).find(".txt1"), .8, {top:0, opacity:1, delay:.2, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(1).find(".txt2"), .8, {top:85, opacity:1, delay:.3, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(1).find(".txt3"), .8, {top:208, opacity:1, delay:.4, ease:Power3.easeOut});

			TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(0), .5, {left:-200, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(1).find(".off"), 0, {opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(1), .8, {left:0, opacity:1, ease:Power3.easeOut, onComplete:function(){
				TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(0), 0, {left:1000, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(0), .5, {left:844, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(0).find(".off"), 0, {opacity:1, ease:Power3.easeOut});
				curCon1 = 1;
			}});

			
		}else if(curCon1 == 1){
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(1).find(".txt1"), .8, {top:-50, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(1).find(".txt2"), .8, {top:35, opacity:0, delay:.1, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(1).find(".txt3"), .8, {top:158, opacity:0, delay:.2, ease:Power3.easeOut});

			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(0).find(".txt1"), 0, {top:50, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(0).find(".txt2"), 0, {top:135, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(0).find(".txt3"), 0, {top:258, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(0).find(".txt1"), .8, {top:0, opacity:1, delay:.2, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(0).find(".txt2"), .8, {top:85, opacity:1, delay:.3, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .txtArea .txtRoll").eq(0).find(".txt3"), .8, {top:208, opacity:1, delay:.4, ease:Power3.easeOut});

			TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(1), .5, {left:-200, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(0).find(".off"), 0, {opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(0), .8, {left:0, opacity:1, ease:Power3.easeOut, onComplete:function(){
				TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(1), 0, {left:1000, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(1), .5, {left:844, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".mainCon1 .inner .imgArea .imgRoll").eq(1).find(".off"), 0, {opacity:1, ease:Power3.easeOut});
				curCon1 = 0;
			}});
		}
	});

	$(".mainCon2 > div").hover(function(){
		$(".mainCon2 > div a").eq(0).addClass("on");
		$(".mainCon2 > div .bg").addClass("on");
	}, function(){
		$(".mainCon2 > div a").eq(0).removeClass("on");
		$(".mainCon2 > div .bg").removeClass("on");
	});

	$(".mainCon3 .news .list a").eq(1).hover(function(){
		TweenMax.to($(this).find(".off"), .8, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($(this).find(".on"), .8, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($(this).find("span"), .5, {right:0, opacity:1, ease:Power3.easeOut});
	}, function(){
		TweenMax.to($(this).find(".off"), .8, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($(this).find(".on"), .8, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($(this).find("span"), .5, {right:20, opacity:0, ease:Power3.easeOut});
	});
});