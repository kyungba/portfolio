var rInterval;
var rTime = 9000;
var mainMove = false;
var mainRoll = 0;

$(function(){
	// gnb
	$("#header .gnbDiv").hover(function(){
		$("#header .gnbDiv .twoD").stop(true, true).slideDown(400);
		$("#header").addClass("on");
	},function(){
		$("#header .gnbDiv .twoD").stop(true, true).slideUp(400, function(){
			if($(window).scrollTop() == 0){
				$("#header").removeClass("on");						
			}	
		});
	});

	// loading
	$(window).load(function(){
		TweenMax.to($(".mainWrap .bg") , 0.3, {delay:0.2, opacity:1, ease:Power3.easeOut, onComplete:function(){
			TweenMax.to($(".mainWrap .mainV") , 0.6, {opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".mainWrap .mainV .visList").eq(0).find(".img") , 2 , {opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".mainWrap .mainV .visList").eq(0).find(".img") , 6.5 , {delay:1.5, scale:1.1, ease:Power3.easeOut});	
			TweenMax.to($(".mainWrap .mainV .visList").eq(0).find(".txtDiv .tit") , 1.5, {delay:0.5, top:0, opacity:1, ease:Power3.easeOut, onComplete:function(){
				TweenMax.to($(".mainWrap .mainV .quickDiv a").eq(0) , 0.6 , {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".mainWrap .mainV .quickDiv a").eq(1) , 0.6 , {delay:0.2, top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".mainWrap .mainV .quickDiv a").eq(2) , 0.6 , {delay:0.4, top:0, opacity:1, ease:Power3.easeOut});			
			}});
			TweenMax.to($(".mainWrap .mainV .visList").eq(0).find(".txtDiv .txt") , 1.5, {delay:0.8, top:0, opacity:1, ease:Power3.easeOut});
		}});

		
		//rInterval = setInterval("rVisual()",rTime);
	});
	
	// counter
	$('.counter').counterUp({
		//delay:0.2,
		time: 2000
	});

	// scroll
	$(window).scroll(function(){
		if($(window).scrollTop() > 0) {
			$("#header").addClass("on");
		}else{			
			$("#header").removeClass("on");
		}
		//console.log($(window).scrollTop());
		
		if($(window).scrollTop() > 450) {
			TweenMax.to($(".sectionDiv.type1 .tit"), 0.5, {delay:0.2, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type1 .moreBtn"), 0.5, {delay:0.2, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type1 .txt1"), 0.5, {delay:0.4, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type1 .txt2"), 0.5, {delay:0.6, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type1 .sectionList li").eq(0), 0.5, {delay:0.6, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type1 .sectionList li").eq(1), 0.5, {delay:0.9, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type1 .sectionList li").eq(2), 0.5, {delay:1.2, top:0, opacity:1, ease:Power2.easeOut});
		}

		if($(window).scrollTop() > 1300) {
			TweenMax.to($(".sectionDiv.type2 .tit"), 0.5, {delay:0.2, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type2 .moreBtn"), 0.5, {delay:0.2, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type2 .txt1"), 0.5, {delay:0.4, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type2 .txt2"), 0.5, {delay:0.6, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type2 .sectionList li").eq(0), 0.5, {delay:0.6, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type2 .sectionList li").eq(1), 0.5, {delay:0.8, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type2 .sectionList li").eq(2), 0.5, {delay:1, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".sectionDiv.type2 .sectionList li").eq(3), 0.5, {delay:1.2, top:0, opacity:1, ease:Power2.easeOut});
		}

		if($(window).scrollTop() > 1970) {
			TweenMax.to($(".rollCon .inner > .tit"), 0.5, {delay:0.2, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(0).find(".txtDiv .label"), 0.5, {delay:0.4, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(0).find(".txtDiv .tit"), 0.5, {delay:0.6, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(0).find(".txtDiv .txt"), 0.5, {delay:0.8, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(0).find(".txtDiv .moreBt"), 0.5, {delay:1, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(0).find(".imgDiv"), 1, {delay:1.2, right:-240, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .rollBtn"), 1, {delay:1.8, opacity:1, ease:Power2.easeOut});
		}

		if($(window).scrollTop() > 2590) {
			TweenMax.to($(".inner.notice .noticeList a").eq(0), 0.5, {delay:0.2, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".inner.notice .noticeList a").eq(0).find(".tit"), 0.5, {delay:0.3, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".inner.notice .noticeList a").eq(0).find(".txt"), 0.5, {delay:0.4, top:0, opacity:1, ease:Power2.easeOut});

			TweenMax.to($(".inner.notice .noticeList a").eq(1), 0.5, {delay:0.4, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".inner.notice .noticeList a").eq(1).find(".tit"), 0.5, {delay:0.5, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".inner.notice .noticeList a").eq(1).find(".txt"), 0.5, {delay:0.6, top:0, opacity:1, ease:Power2.easeOut});

			TweenMax.to($(".inner.notice .noticeList a").eq(2), 0.5, {delay:0.6, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".inner.notice .noticeList a").eq(2).find(".tit"), 0.5, {delay:0.7, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".inner.notice .noticeList a").eq(2).find(".txt"), 0.5, {delay:0.8, top:0, opacity:1, ease:Power2.easeOut});

			TweenMax.to($(".inner.notice .noticeList a").eq(3), 0.5, {delay:0.8, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".inner.notice .noticeList a").eq(3).find(".tit"), 0.5, {delay:0.9, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".inner.notice .noticeList a").eq(3).find(".txt"), 0.5, {delay:1, top:0, opacity:1, ease:Power2.easeOut});

			TweenMax.to($(".inner.notice a.moreBt"), 0.5, {delay:1.3, opacity:1, ease:Power2.easeOut});
		}
	}); $(window).scroll();

	// 메인비주얼
	$(".mainV").click(function(){
		TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".img"), 2.5, {opacity:0, scale:1, ease:Power3.easeOut});
		TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".txtDiv .tit") , 0, {top:100, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".txtDiv .txt") , 0, {top:100, opacity:0, ease:Power3.easeOut});
		$(".mainWrap .mainV .rollBtn a").removeClass("on");
		mainRoll ++;
		if(mainRoll > 1){
			mainRoll = 0;
		}
		$(".mainWrap .mainV .rollBtn a").eq(mainRoll).addClass("on");
		TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".img") , 2 , {opacity:1, ease:Power3.easeOut});
		TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".img") , 6.5 , {delay:1.5, scale:1.1, ease:Power3.easeOut});		
		TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".txtDiv .tit") , 1.5, {delay:0.5, top:0, opacity:1, ease:Power3.easeOut});
		TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".txtDiv .txt") , 1.5, {delay:0.8, top:0, opacity:1, ease:Power3.easeOut});		
	});

	$(".mainVisual .navi .play").click(function(){
		 if(mainMove == false){ 
			clearInterval(rInterval);
			$(".mainVisual .navi .play").find("img").attr("src", $(".mainVisual .navi .play").find("img").attr("src").replace(".png", "_on.png"));
			mainMove = true;
		}else if(mainMove == true){
			 clearInterval(rInterval);
			 rInterval = setInterval("rVisual()",rTime);
			 $(".mainVisual .navi .play").find("img").attr("src", $(".mainVisual .navi .play").find("img").attr("src").replace("_on.png", ".png"));
			mainMove = false;
		}
	});

	// 롤링
	var isMove =  false;
	var rollNum = 0;
	$(".rollCon .rollDiv .rollBtn .next").click(function(){
		if(isMove == false){
			isMove = true;
			$(".rollCon .rollDiv .rollBtn .prev").addClass("on");
			$(".rollCon .rollDiv .rollBtn .next").addClass("on");
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .label"), 0, {top:100, opacity:0, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .tit"), 0, {top:100, opacity:0, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .txt"), 0, {top:100, opacity:0, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .moreBt"), 0, {top:100, opacity:0, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".imgDiv img"), 1.2, {top:"-100%", ease:Power2.easeOut});

			rollNum++;
			if(rollNum > 1){
				rollNum = 0; 
			}
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".imgDiv img"), 0, {top:"100%", ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .label"), 0.7, {top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .tit"), 0.7, {delay:0.2, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .txt"), 0.7, {delay:0.4, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .moreBt"), 0.7, {delay:0.6, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".imgDiv img"), 1.2, {top:0, ease:Power2.easeOut ,onComplete:function(){
				isMove = false;
			}});
		}
	});

	$(".rollCon .rollDiv .rollBtn .prev").click(function(){
		if(isMove == false){
			isMove = true;
			$(".rollCon .rollDiv .rollBtn .next").addClass("on");
			$(".rollCon .rollDiv .rollBtn .prev").addClass("on");
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .label"), 0, {top:100, opacity:0, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .tit"), 0, {top:100, opacity:0, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .txt"), 0, {top:100, opacity:0, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .moreBt"), 0, {top:100, opacity:0, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".imgDiv img"), 1.2, {top:"-100%", ease:Power2.easeOut});

			rollNum--;
			if(rollNum < 0){
				rollNum = 1; 
			}
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".imgDiv img"), 0, {top:"100%", ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .label"), 0.7, {top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .tit"), 0.7, {delay:0.2, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .txt"), 0.7, {delay:0.4, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".txtDiv .moreBt"), 0.7, {delay:0.6, top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".rollCon .rollDiv .roll").eq(rollNum).find(".imgDiv img"), 1.2, {top:0, ease:Power2.easeOut ,onComplete:function(){
				isMove = false;
			}});
		}
	});
});


/*function rVisual(){
	TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".img"), 2.5, {opacity:0, scale:1, ease:Power3.easeOut});
	TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".txtDiv .tit") , 0, {top:100, opacity:0, ease:Power3.easeOut});
	TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".txtDiv .txt") , 0, {top:100, opacity:0, ease:Power3.easeOut});
	$(".mainWrap .mainV .rollBtn a").removeClass("on");
	mainRoll ++;
	if(mainRoll > 1){
		mainRoll = 0;
	}

	$(".mainWrap .mainV .rollBtn a").eq(mainRoll).addClass("on");
	TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".img") , 2 , {opacity:1, ease:Power3.easeOut});
	TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".img") , 6.5 , {delay:1.5, scale:1.1, ease:Power3.easeOut});		
	TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".txtDiv .tit") , 1.5, {delay:0.5, top:0, opacity:1, ease:Power3.easeOut});
	TweenMax.to($(".mainWrap .mainV .visList").eq(mainRoll).find(".txtDiv .txt") , 1.5, {delay:0.8, top:0, opacity:1, ease:Power3.easeOut});		
}*/