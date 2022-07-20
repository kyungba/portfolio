var isWheel;
var curN = 0;
var sideNum = 0;
var arrY = new Array();

$(function(){
	var curMv = 0;

	TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt1"), .8, {top:150, opacity:1, delay:.7, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt2"), .8, {top:202, opacity:1, delay:.8, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt3"), .8, {top:254, opacity:1, delay:.9, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt4"), .8, {top:305, opacity:1, delay:1, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt5"), .8, {top:382, opacity:1, delay:1.1, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt6"), .8, {top:580, opacity:1, delay:1.2, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt7"), 2, {top:120, opacity:1, delay:.2, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt8"), 2, {top:244, opacity:1, delay:1.2, ease:Power3.easeOut});
	TweenMax.to(jQuery(".balloon"), 2, {top:130, right:100, opacity:1, delay:1.2, ease:Power3.easeOut});

	$(".mVisual .indi a").each(function(q){
		$(this).click(function(){
			if(curMv != q){
				$(".mVisual .indi a").eq(curMv).removeClass("on");
				TweenMax.to(jQuery(".mVisual .roll").eq(curMv), 1.2, {top:'-100%', ease:Power3.easeOut});
				curMv = q;
				$(".mVisual .indi a").eq(curMv).addClass("on");
				TweenMax.to(jQuery(".mVisual .roll").eq(curMv), 0, {top:'100%', ease:Power3.easeOut});
				TweenMax.to(jQuery(".mVisual .roll").eq(curMv), 1.2, {top:0, ease:Power3.easeOut});

				if(q == 0){
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt1"), 0, {top:250, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt2"), 0, {top:302, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt3"), 0, {top:354, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt4"), 0, {top:405, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt5"), 0, {top:482, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt6"), 0, {top:680, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt7"), 0, {top:220, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt8"), 0, {top:344, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".balloon"), 0, {top:300, right:237, opacity:0, ease:Power3.easeOut});

					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt1"), .8, {top:150, opacity:1, delay:.7, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt2"), .8, {top:202, opacity:1, delay:.8, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt3"), .8, {top:254, opacity:1, delay:.9, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt4"), .8, {top:305, opacity:1, delay:1, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt5"), .8, {top:382, opacity:1, delay:1.1, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt6"), .8, {top:580, opacity:1, delay:1.2, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt7"), 2, {top:120, opacity:1, delay:.2, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt8"), 2, {top:244, opacity:1, delay:1.2, ease:Power3.easeOut});
					TweenMax.to(jQuery(".balloon"), 2, {top:130, right:100, opacity:1, delay:1.2, ease:Power3.easeOut});
				}else if(q == 1){
					TweenMax.to(jQuery(".balloon"), 3, {top:-100, right:137, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt1"), 0, {top:250, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt2"), 0, {top:433, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt3"), 0, {top:680, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt4"), 0, {top:250, right:-50, opacity:0, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt5"), 0, {top:250, right:100, opacity:0, ease:Power3.easeOut});

					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt1"), .8, {top:150, opacity:1, delay:.7, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt2"), .8, {top:333, opacity:1, delay:.8, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt3"), .8, {top:580, opacity:1, delay:.9, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt4"), 2, {top:150, right:0, opacity:1, delay:1.5, ease:Power3.easeOut});
					TweenMax.to(jQuery(".mVisual .roll").eq(curMv).find(".untis .txt5"), 2, {top:150, right:0, opacity:1, delay:1, ease:Power3.easeOut});
				}
			}
		})
	});

	//scroll
	isWheel = false;
	arrY = [0, jQuery("#mainCon1").offset().top, jQuery("#mainCon2").offset().top, jQuery("#mainCon3").offset().top ];
	
	reset();
	if(jQuery(window).scrollTop() == 0)reset();

	jQuery("#wrap").mousewheel(function(objEvent, intDelta){
		blockWheel();
		if(!isWheel) {
			isWheel = true;
			
			if(intDelta > 0) {
				console.log("up");
				sideNum--;
				if(sideNum < 0) sideNum = 0;
				eval("movie"+sideNum+"()");

				TweenMax.to(jQuery("html, body"), 1, {scrollTop:arrY[sideNum], ease:Power3.easeOut, onComplete:function(){
					isWheel = false;
					playWheel();
					if(jQuery(window).scrollTop() == 0)reset();
				}});

			} else {
				console.log("down");
				sideNum++;
				if(sideNum > 3) sideNum = 3;
				eval("movie"+sideNum+"()");

				TweenMax.to(jQuery("html, body"), 1.2, {scrollTop:arrY[sideNum], ease:Power3.easeInOut, onComplete:function(){
					isWheel = false;
					playWheel();
				}});
			}
		}
	});
	

	$(".totalIndi").css('top', $(window).height()/2 - 43);
});


function reset()
{
	//스크롤세팅
	TweenMax.to(jQuery("#mainCon1 .inner .left .txt1"), 0, {opacity:0, top:0, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .left .txt2"), 0, {opacity:0, top:200, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .left .txt3"), 0, {opacity:0, top:100, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .right .txt1"), 0, {opacity:0, top:220, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .right .txt2"), 0, {opacity:0, top:350, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .right .txt3"), 0, {opacity:0, top:445, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .list"), 0, {opacity:0, bottom:-290, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .list a").eq(1), 0, {opacity:0, top:290, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .list a").eq(2), 0, {opacity:0, top:290, ease:Power4.easeOut});

	TweenMax.to(jQuery("#mainCon2 .inner .txt1"), 0, {opacity:0, top:100, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .inner .txt2"), 0, {opacity:0, top:100, left:-50, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .inner .txt3"), 0, {opacity:0, top:100, left:50, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .inner .txt4"), 0, {opacity:0, top:100, left:-50, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .inner .txt5"), 0, {opacity:0, top:100, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .inner .txt6"), 0, {opacity:0, top:100, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .balls .ball1"), 0, {opacity:0, top:120, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .balls .ball2"), 0, {opacity:0, top:108, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .balls .ball3"), 0, {opacity:0, top:576, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .balls .ball4"), 0, {opacity:0, top:477, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .balls .ball5"), 0, {opacity:0, top:874, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .balls .ball6"), 0, {opacity:0, top:1285, ease:Power4.easeOut});

	TweenMax.to(jQuery("#mainCon3 .inner .tit"), 0, {opacity:0, top:220, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon3 .inner .txt1"), 0, {opacity:0, top:320, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon3 .inner .txt2"), 0, {opacity:0, top:320, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon3 .inner .txt3"), 0, {opacity:0, top:320, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon3 .inner .txt4"), 0, {opacity:0, top:320, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon3 .inner a"), 0, {opacity:0, top:723, ease:Power4.easeOut});

	$(".totalIndi a").removeClass("on");
	$(".totalIndi a").eq(0).addClass("on");

}

function movie0()
{
	playWheel();
	isWheel = false;
	//jQuery(".mainCon1 .left").css("position", "absolute");
}

function movie1()
{
	TweenMax.to(jQuery("#mainCon1 .inner .left .txt1"), 1.2, {opacity:1, top:0, delay:.5, ease:Power4.easeOut, onComplete:function(){isWheel = false;playWheel();}});
	TweenMax.to(jQuery("#mainCon1 .inner .left .txt2"), 3, {opacity:1, top:0, delay:.8, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .left .txt3"), 1.2, {opacity:1, top:0, delay:1, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .right .txt1"), 1.2, {opacity:1, top:120, delay:1, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .right .txt2"), 1.2, {opacity:1, top:250, delay:1.1, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .right .txt3"), 1.2, {opacity:1, top:345, delay:1.2, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .list"), 1.2, {opacity:1, bottom:0, delay:1.5, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .list a").eq(1), 1.2, {opacity:1, top:0, delay:1.6, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon1 .inner .list a").eq(2), 1.2, {opacity:1, top:0, delay:1.7, ease:Power4.easeOut});

	$(".totalIndi a").removeClass("on");
	$(".totalIndi a").eq(1).addClass("on");
}

function movie2()
{
	TweenMax.to(jQuery("#mainCon2 .inner .txt1"), 1.2, {opacity:1, top:0, delay:.7, ease:Power4.easeOut, onComplete:function(){isWheel = false;playWheel();}});
	TweenMax.to(jQuery("#mainCon2 .inner .txt2"), 1.2, {opacity:1, top:0, left:0, delay:.8, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .inner .txt3"), 1.2, {opacity:1, top:0, left:0, delay:.9, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .inner .txt4"), 1.2, {opacity:1, top:0, left:0, delay:1, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .inner .txt5"), 1.2, {opacity:1, top:0, delay:1.1, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .inner .txt6"), 1.2, {opacity:1, top:0, delay:1.2, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .balls .ball1"), 2, {opacity:1, top:-120, delay:.7, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .balls .ball2"), 2, {opacity:1, top:-92, delay:1, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .balls .ball3"), 2, {opacity:1, top:376, delay:1.3, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .balls .ball4"), 2, {opacity:1, top:277, delay:1.6, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .balls .ball5"), 2, {opacity:1, top:674, delay:1.9, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon2 .balls .ball6"), 2, {opacity:1, top:1085, delay:2.2, ease:Power4.easeOut});

	$(".totalIndi a").removeClass("on");
	$(".totalIndi a").eq(2).addClass("on");
}

function movie3()
{
	TweenMax.to(jQuery("#mainCon3 .inner .tit"), 1.4, {opacity:1, top:120, delay:.7, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon3 .inner .txt1"), 1.4, {opacity:1, top:220, delay:.8, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon3 .inner .txt2"), 1.4, {opacity:1, top:220, delay:.9, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon3 .inner .txt3"), 1.4, {opacity:1, top:220, delay:1, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon3 .inner .txt4"), 1.4, {opacity:1, top:220, delay:1.1, ease:Power4.easeOut});
	TweenMax.to(jQuery("#mainCon3 .inner a"), 1.4, {opacity:1, top:623, delay:1.2, ease:Power4.easeOut});

	$(".totalIndi a").removeClass("on");
	$(".totalIndi a").eq(3).addClass("on");
}

function blockWheel()
{
	jQuery(window).on("mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll", function(e) {
		e.preventDefault();
		return;
	});

	jQuery(window).on("keydown.disableScroll", function(e) {
		var eventKeyArray = [32, 33, 34, 35, 36, 37, 38, 39, 40];
		for (var i = 0; i < eventKeyArray.length; i++) {
			if (e.keyCode === eventKeyArray [i]) {
				e.preventDefault();
				return;
			}
		}
	});
};

function playWheel()
{
	jQuery(window).off(".disableScroll");
}
