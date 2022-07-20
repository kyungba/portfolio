$(function(){
	//진입모션
	firstMotionPlay();

	//window resize
	$(window).resize(function(){
		windowResize();
	}); $(window).resize();
	
	//visual 숫자로보는~
	visualTab();

	//iconskew
	iconSkew();

	//mouse wheel event
	mouseWheel();

	//side btn event
	sideBtnEvent();

	//biz img over
	bizOverEvent();

	//issue over
	issueOverEvent();

	TweenMax.to($(".visual_cont .ico_wheel"), 0.5, {bottom:90, ease:Power1.easeOut, yoyo:true, repeat:-1});
	$(".gnb_over").click(function(){
		$(this).stop(true, true).slideUp(300);
	});
	$(".gnb_menu a").click(function(){
		$(".gnb_over").slideDown(300);
	});

	var familyN = 0;
	$(".family_cont a").each(function(index){
		$(this).click(function(){
			if(familyN == 0) {
				$(".family_cont a").eq(familyN).stop(true, true).fadeOut(200);
				familyN = 1;
				$(".family_cont a").eq(familyN).stop(true, true).fadeIn(200);
			} else if(familyN == 1) {
				$(".family_cont a").eq(familyN).stop(true, true).fadeOut(200);
				familyN = 2;
				$(".family_cont a").eq(familyN).stop(true, true).fadeIn(200);
			} else if(familyN == 2) {
				$(".family_cont a").eq(familyN).stop(true, true).fadeOut(200);
				familyN = 3;
				$(".family_cont a").eq(familyN).stop(true, true).fadeIn(200);
			} else if(familyN == 3) {
				$(".family_cont a").stop(true, true).fadeOut(200);
				familyN = 4;
				$(".family_cont a").eq(familyN).stop(true, true).fadeIn(200);
			} else if(familyN == 4) {
				$(".family_cont").stop(true, true).fadeOut(200);
				familyN = 0;
			}
		});
	});

	$(".gnb_area .gnb_icon1, .section .familyBt").click(function(){
		$(".family_cont").stop(true, true).fadeIn(200);
		$(".family_cont a").hide();
		$(".family_cont a").eq(0).show();
	});

	var cRollNum = 0;
	$(".career_cont .rollArea").click(function(){
		if(cRollNum == 0){
			cRollNum = 1;
			$(".career_cont .rollArea .indi a").eq(0).removeClass("on");
			$(".career_cont .rollArea .indi a").eq(1).addClass("on");
			TweenMax.to($(".career_cont .rollArea .txt").eq(0), 0.8, {opacity:0, left:-392, ease:Power3.easeOut});
			TweenMax.to($(".career_cont .rollArea .img").eq(0), 0.8, {opacity:0, right:-270, ease:Power3.easeOut});
			TweenMax.to($(".career_cont .rollArea .txt").eq(1), 0.8, {opacity:1, left:0, delay:0.1, ease:Power3.easeOut});
			TweenMax.to($(".career_cont .rollArea .img").eq(1), 0.8, {opacity:1, right:0, delay:0.2, ease:Power3.easeOut});
		}else{
			cRollNum = 0;
			$(".career_cont .rollArea .indi a").eq(1).removeClass("on");
			$(".career_cont .rollArea .indi a").eq(0).addClass("on");
			TweenMax.to($(".career_cont .rollArea .txt").eq(1), 0.8, {opacity:0, left:-392, ease:Power3.easeOut});
			TweenMax.to($(".career_cont .rollArea .img").eq(1), 0.8, {opacity:0, right:-270, ease:Power3.easeOut});
			TweenMax.to($(".career_cont .rollArea .txt").eq(0), 0.8, {opacity:1, left:0, delay:0.1, ease:Power3.easeOut});
			TweenMax.to($(".career_cont .rollArea .img").eq(0), 0.8, {opacity:1, right:0, delay:0.2, ease:Power3.easeOut});
		}
	});
});

function issueOverEvent()
{
	var $btn = $(".issue_over");
	$btn.each(function(index){
		$(this).hover(function(){
			TweenMax.to($(this).find(".overImg"), 0.4, {opacity:1, scale:1, ease:Power3.easeOut});
		}, function(){
			TweenMax.to($(this).find(".overImg"), 0.4, {opacity:0, scale:1, ease:Power3.easeOut});
		});
	});
}

function bizOverEvent()
{
	var $img = $(".biz_cont .img_cont");
	$img.each(function(index){
		$(this).hover(function(){
			$(this).find(".over").stop(true, true).fadeIn(600);
			$(this).find(".txt2").stop(true, true).fadeIn(600);
		}, function(){
			$(this).find(".over").stop(true, true).fadeOut(600);
			$(this).find(".txt2").stop(true, true).fadeOut(600);
		});
	});
}

function introInit()
{
	$(".bz_intro").show();
	$(".issue_intro").show();
	$(".career_intro").show();
}


var $wheelNum = 0;
function mouseWheel()
{
	var isWheelMove =false, wheelSpeed = 1;
	$(".section").on('mousewheel DOMMouseScroll', function(e) {
		var E = e.originalEvent;
		if(isWheelMove) return;
		if(E.wheelDelta < 0) {
			//down
			isWheelMove = true;
			TweenMax.to($(".sticky_gnb"), 0.4, {top:0, ease:Power3.easeOut});
			if($wheelNum == 3) {
				TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:-170, ease:Power3.easeOut});
			} else {
				TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:-$wH, ease:Power3.easeOut});
			}
			$(".sideMenu a").eq($wheelNum).removeClass("on");
			$wheelNum++;
			$(".sideMenu a").eq($wheelNum).addClass("on");

			if($wheelNum >= 4) $wheelNum = 4;
			//TweenMax.to($(".section").eq($wheelNum), 0, {top:$wH, ease:Power3.easeOut});
			if($wheelNum == 4) {
				$(".sideMenu a").eq($wheelNum -1).addClass("on");
				TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:$wH - 170, ease:Power3.easeOut, onComplete:function(){isWheelMove = false;}});
			} else if($wheelNum == 1) {
				TweenMax.to($(".section").eq($wheelNum), 0, {top:$wH, ease:Power3.easeOut});
				TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:70, ease:Power3.easeOut, onComplete:function(){isWheelMove = false;}});
			} else {
				TweenMax.to($(".section").eq($wheelNum), 0, {top:$wH, ease:Power3.easeOut});
				TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:0, ease:Power3.easeOut, onComplete:function(){isWheelMove = false;}});
			}

			if($wheelNum != 4) introInit();
			

			$(".sideMenu").addClass("type2");
			if($wheelNum == 1) {
				if($myTween != undefined) $myTween.kill();
				$(".skewIcon").stop(true, true).fadeOut(300);
				$(".skewIcon2").stop(true, true).fadeIn(300);
				
				$(".sticky_gnb").css("background","#fff");

				setTimeout(function(){
					$(".bz_intro").stop(true, true).fadeOut(500);
					$(".skewIcon2").stop(true, true).fadeOut(600, function(){
						
						$(".skewIcon2").remove();
					});
					TweenMax.to($(".biz_cont .float_box .img_cont.c1"), 0.8, {left:0, opacity:1, delay:0.3, ease:Power3.easeOut});
					TweenMax.to($(".biz_cont .float_box .img_cont.c2"), 0.8, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut});
					TweenMax.to($(".biz_cont .float_box .img_cont.c3"), 0.8, {left:0, opacity:1, delay:0.1, ease:Power3.easeOut});
					TweenMax.to($(".biz_cont .float_box .img_cont.c4"), 0.8, {left:0, opacity:1, delay:0.4, ease:Power3.easeOut});
					TweenMax.to($(".biz_cont .float_box .img_cont.c5"), 0.8, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				}, 1000);
			} else if($wheelNum == 2) {
				$(".sticky_gnb").css("background","none");
				//TweenMax.to($(".issue_tit"), 0.5, {top:0, opacity:1, delay:1, ease:Power3.easeOut});
				TweenMax.to($(".issue_allBtn"), 0.5, {top:-30, opacity:1, delay:1, ease:Power3.easeOut});
				$(".issue_img").each(function(index){
					TweenMax.to($(".issue_img").eq(index), 0.5, {top:0, opacity:1, delay:0.1*index+1, ease:Power3.easeOut});
				});
				TweenMax.to($(".issue_cont2 a").eq(0), 0.5, {top:0, opacity:1, delay:1.5, ease:Power3.easeOut});
				TweenMax.to($(".issue_cont2 a").eq(1), 0.5, {top:0, opacity:1, delay:1.6, ease:Power3.easeOut});
				TweenMax.to($(".issue_cont2 a").eq(2), 0.5, {top:0, opacity:1, delay:1.7, ease:Power3.easeOut});
				TweenMax.to($(".issue_cont2 a").eq(3), 0.5, {top:0, opacity:1, delay:1.8, ease:Power3.easeOut});

				setTimeout(function(){
					$(".issue_intro").stop(true, true).fadeOut(500);
				}, 1000);
			} else if($wheelNum == 3) {
				$(".sticky_gnb").css("background","none");
				//TweenMax.to($(".career_tit"), 0.5, {top:80, opacity:1, delay:1, ease:Power3.easeOut});
				TweenMax.to($(".career_cont > div"), 0.5, {top:0, opacity:1, delay:0.1+1.2, ease:Power3.easeOut});
				TweenMax.to($(".career_cont > a").eq(0), 0.5, {top:0, opacity:1, delay:0.2+1.2, ease:Power3.easeOut});
				TweenMax.to($(".career_cont > a").eq(1), 0.5, {top:325, opacity:1, delay:0.3+1.2, ease:Power3.easeOut});
				TweenMax.to($(".career_cont > a").eq(2), 0.5, {top:325, opacity:1, delay:0.4+1.2, ease:Power3.easeOut});

				setTimeout(function(){
					$(".career_intro").stop(true, true).fadeOut(500);
				}, 1000);
			} else if($wheelNum == 4) {
				$(".sticky_gnb").css("background","#fff");
			}
		} else {
			//up
			if($wheelNum == 0) return;
			isWheelMove = true;
			TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:$wH, ease:Power3.easeOut});
			$(".sideMenu a").eq($wheelNum).removeClass("on");
			$wheelNum--;
			if($wheelNum < 0) $wheelNum = 0;
			$(".sideMenu a").eq($wheelNum).addClass("on");
			//TweenMax.to($(".section").eq($wheelNum), 0, {top:$wH, ease:Power3.easeOut});
			if($wheelNum != 3 ) TweenMax.to($(".section").eq($wheelNum), 0, {top:-$wH, ease:Power3.easeOut});
			TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:0, ease:Power3.easeOut, onComplete:function(){isWheelMove = false;}});


			if($wheelNum != 3) introInit();
			console.log()
			if($wheelNum == 0) {
				$(".skewIcon").stop(true, true).fadeIn(300);
				$(".sideMenu").removeClass("type2");
				$myTween = TweenMax.to($(".skewIcon"), 3, {skewX:makeRandom(-20, 20), skewY:makeRandom(-20, 20), scale:makeRandom(1, 1.2), yoyo:true, ease:Back.easeOut, onComplete:iconSkew});
				TweenMax.to($(".sticky_gnb"), 0.4, {top:-70, ease:Power3.easeOut});
				//TweenMax.to($(".section").eq($wheelNum), 0, {top:-$wH, ease:Power3.easeOut});
				//TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:0, ease:Power3.easeOut, onComplete:function(){isWheelMove = false;}});
			} else if($wheelNum == 1){
				$(".sticky_gnb").css("background","#fff");
				TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:70, ease:Power3.easeOut, onComplete:function(){isWheelMove = false;}});

				$(".sticky_gnb").css("background","#fff");

				setTimeout(function(){
					$(".bz_intro").stop(true, true).fadeOut(500);
					$(".skewIcon2").stop(true, true).fadeOut(600, function(){
						
						//$(".skewIcon2").remove();
					});
					TweenMax.to($(".biz_cont .float_box .img_cont.c1"), 0.8, {left:0, opacity:1, delay:0.3, ease:Power3.easeOut});
					TweenMax.to($(".biz_cont .float_box .img_cont.c2"), 0.8, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut});
					TweenMax.to($(".biz_cont .float_box .img_cont.c3"), 0.8, {left:0, opacity:1, delay:0.1, ease:Power3.easeOut});
					TweenMax.to($(".biz_cont .float_box .img_cont.c4"), 0.8, {left:0, opacity:1, delay:0.4, ease:Power3.easeOut});
					TweenMax.to($(".biz_cont .float_box .img_cont.c5"), 0.8, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				}, 1000);
			} else if($wheelNum == 2){
				TweenMax.to($(".issue_allBtn"), 0.5, {top:-30, opacity:1, delay:1, ease:Power3.easeOut});
				$(".issue_img").each(function(index){
					TweenMax.to($(".issue_img").eq(index), 0.5, {top:0, opacity:1, delay:0.1*index+1, ease:Power3.easeOut});
				});
				TweenMax.to($(".issue_cont2 a").eq(0), 0.5, {top:0, opacity:1, delay:1.5, ease:Power3.easeOut});
				TweenMax.to($(".issue_cont2 a").eq(1), 0.5, {top:0, opacity:1, delay:1.6, ease:Power3.easeOut});
				TweenMax.to($(".issue_cont2 a").eq(2), 0.5, {top:0, opacity:1, delay:1.7, ease:Power3.easeOut});
				TweenMax.to($(".issue_cont2 a").eq(3), 0.5, {top:0, opacity:1, delay:1.8, ease:Power3.easeOut});

				setTimeout(function(){
					$(".issue_intro").stop(true, true).fadeOut(500);
				}, 1000);
			} else if($wheelNum == 3){
				$(".sticky_gnb").css("background","none");
				TweenMax.to($(".career_cont > div"), 0.5, {top:0, opacity:1, delay:0.1+1.2, ease:Power3.easeOut});
				TweenMax.to($(".career_cont > a").eq(0), 0.5, {top:0, opacity:1, delay:0.2+1.2, ease:Power3.easeOut});
				TweenMax.to($(".career_cont > a").eq(1), 0.5, {top:325, opacity:1, delay:0.3+1.2, ease:Power3.easeOut});
				TweenMax.to($(".career_cont > a").eq(2), 0.5, {top:325, opacity:1, delay:0.4+1.2, ease:Power3.easeOut});

				setTimeout(function(){
					$(".career_intro").stop(true, true).fadeOut(500);
				}, 1000);
			}
		}
	});
}


function sideBtnEvent()
{
	var wheelSpeed = 1;
	$(".sideMenu a").each(function(index){
		$(this).click(function(){
			if($wheelNum == 4) return;
			introInit();
			if($wheelNum < index) {
				//down
				isWheelMove = true;
				TweenMax.to($(".sticky_gnb"), 0.4, {top:0, ease:Power3.easeOut});
				if($wheelNum == 3) {
					TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:-170, ease:Power3.easeOut});
				} else {
					TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:-$wH, ease:Power3.easeOut});
				}
				$(".sideMenu a").eq($wheelNum).removeClass("on");
				$wheelNum = index;;
				$(".sideMenu a").eq($wheelNum).addClass("on");

				if($wheelNum >= 4) $wheelNum = 4;
				//TweenMax.to($(".section").eq($wheelNum), 0, {top:$wH, ease:Power3.easeOut});
				if($wheelNum == 4) {
					$(".sideMenu a").eq($wheelNum -1).addClass("on");
					TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:$wH - 170, ease:Power3.easeOut, onComplete:function(){isWheelMove = false;}});
				} else if($wheelNum == 1) {
					TweenMax.to($(".section").eq($wheelNum), 0, {top:$wH, ease:Power3.easeOut});
					TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:70, ease:Power3.easeOut, onComplete:function(){isWheelMove = false;}});
				} else {
					TweenMax.to($(".section").eq($wheelNum), 0, {top:$wH, ease:Power3.easeOut});
					TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:0, ease:Power3.easeOut, onComplete:function(){isWheelMove = false;}});
				}

				if($wheelNum != 4) introInit();
				

				$(".sideMenu").addClass("type2");
				if($wheelNum != 0) $(".skewIcon").stop(true, true).fadeOut(300);
				if($wheelNum == 1) {
					if($myTween != undefined) $myTween.kill();
					
					$(".skewIcon2").stop(true, true).fadeIn(300);
					
					$(".sticky_gnb").css("background","#fff");

					setTimeout(function(){
						$(".bz_intro").stop(true, true).fadeOut(500);
						$(".skewIcon2").stop(true, true).fadeOut(600, function(){
							
							$(".skewIcon2").remove();
						});
						TweenMax.to($(".biz_cont .float_box .img_cont.c1"), 0.8, {left:0, opacity:1, delay:0.3, ease:Power3.easeOut});
						TweenMax.to($(".biz_cont .float_box .img_cont.c2"), 0.8, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut});
						TweenMax.to($(".biz_cont .float_box .img_cont.c3"), 0.8, {left:0, opacity:1, delay:0.1, ease:Power3.easeOut});
						TweenMax.to($(".biz_cont .float_box .img_cont.c4"), 0.8, {left:0, opacity:1, delay:0.4, ease:Power3.easeOut});
						TweenMax.to($(".biz_cont .float_box .img_cont.c5"), 0.8, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
					}, 1000);
				} else if($wheelNum == 2) {
					$(".sticky_gnb").css("background","none");
					//TweenMax.to($(".issue_tit"), 0.5, {top:0, opacity:1, delay:1, ease:Power3.easeOut});
					TweenMax.to($(".issue_allBtn"), 0.5, {top:-30, opacity:1, delay:1, ease:Power3.easeOut});
					$(".issue_img").each(function(index){
						TweenMax.to($(".issue_img").eq(index), 0.5, {top:0, opacity:1, delay:0.1*index+1, ease:Power3.easeOut});
					});
					TweenMax.to($(".issue_cont2 a").eq(0), 0.5, {top:0, opacity:1, delay:1.5, ease:Power3.easeOut});
					TweenMax.to($(".issue_cont2 a").eq(1), 0.5, {top:0, opacity:1, delay:1.6, ease:Power3.easeOut});
					TweenMax.to($(".issue_cont2 a").eq(2), 0.5, {top:0, opacity:1, delay:1.7, ease:Power3.easeOut});
					TweenMax.to($(".issue_cont2 a").eq(3), 0.5, {top:0, opacity:1, delay:1.8, ease:Power3.easeOut});

					setTimeout(function(){
						$(".issue_intro").stop(true, true).fadeOut(500);
					}, 1000);
				} else if($wheelNum == 3) {
					$(".sticky_gnb").css("background","none");
					//TweenMax.to($(".career_tit"), 0.5, {top:80, opacity:1, delay:1, ease:Power3.easeOut});
					TweenMax.to($(".career_cont > div"), 0.5, {top:0, opacity:1, delay:0.1+1.2, ease:Power3.easeOut});
					TweenMax.to($(".career_cont > a").eq(0), 0.5, {top:0, opacity:1, delay:0.2+1.2, ease:Power3.easeOut});
					TweenMax.to($(".career_cont > a").eq(1), 0.5, {top:325, opacity:1, delay:0.3+1.2, ease:Power3.easeOut});
					TweenMax.to($(".career_cont > a").eq(2), 0.5, {top:325, opacity:1, delay:0.4+1.2, ease:Power3.easeOut});

					setTimeout(function(){
						$(".career_intro").stop(true, true).fadeOut(500);
					}, 1000);
				} else if($wheelNum == 4) {
					$(".sticky_gnb").css("background","#fff");
				}
			} else {
				//up
				isWheelMove = true;
				TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:$wH, ease:Power3.easeOut});
				$(".sideMenu a").eq($wheelNum).removeClass("on");
				$wheelNum = index;
				$(".sideMenu a").eq($wheelNum).addClass("on");
				if($wheelNum < 0) $wheelNum = 0;
				//TweenMax.to($(".section").eq($wheelNum), 0, {top:$wH, ease:Power3.easeOut});
				if($wheelNum != 3) TweenMax.to($(".section").eq($wheelNum), 0, {top:-$wH, ease:Power3.easeOut});
				TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:0, ease:Power3.easeOut, onComplete:function(){isWheelMove = false;}});


				if($wheelNum != 3) introInit();
				if($wheelNum == 0) {
					$(".skewIcon").stop(true, true).fadeIn(300);
					$(".sideMenu").removeClass("type2");
					$myTween = TweenMax.to($(".skewIcon"), 3, {skewX:makeRandom(-20, 20), skewY:makeRandom(-20, 20), scale:makeRandom(1, 1.2), yoyo:true, ease:Back.easeOut, onComplete:iconSkew});
					TweenMax.to($(".sticky_gnb"), 0.4, {top:-70, ease:Power3.easeOut});
					TweenMax.to($(".section").eq($wheelNum), 0, {top:-$wH, ease:Power3.easeOut});
					TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:0, ease:Power3.easeOut, onComplete:function(){isWheelMove = false;}});
				} else if($wheelNum == 1){
					$(".sticky_gnb").css("background","#fff");
					TweenMax.to($(".section").eq($wheelNum), wheelSpeed, {top:70, ease:Power3.easeOut, onComplete:function(){isWheelMove = false;}});

					$(".sticky_gnb").css("background","#fff");

					setTimeout(function(){
						$(".bz_intro").stop(true, true).fadeOut(500);
						$(".skewIcon2").stop(true, true).fadeOut(600, function(){
							
							//$(".skewIcon2").remove();
						});
						TweenMax.to($(".biz_cont .float_box .img_cont.c1"), 0.8, {left:0, opacity:1, delay:0.3, ease:Power3.easeOut});
						TweenMax.to($(".biz_cont .float_box .img_cont.c2"), 0.8, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut});
						TweenMax.to($(".biz_cont .float_box .img_cont.c3"), 0.8, {left:0, opacity:1, delay:0.1, ease:Power3.easeOut});
						TweenMax.to($(".biz_cont .float_box .img_cont.c4"), 0.8, {left:0, opacity:1, delay:0.4, ease:Power3.easeOut});
						TweenMax.to($(".biz_cont .float_box .img_cont.c5"), 0.8, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
					}, 1000);
				} else if($wheelNum == 2){
					TweenMax.to($(".issue_allBtn"), 0.5, {top:-30, opacity:1, delay:1, ease:Power3.easeOut});
					$(".issue_img").each(function(index){
						TweenMax.to($(".issue_img").eq(index), 0.5, {top:0, opacity:1, delay:0.1*index+1, ease:Power3.easeOut});
					});
					TweenMax.to($(".issue_cont2 a").eq(0), 0.5, {top:0, opacity:1, delay:1.5, ease:Power3.easeOut});
					TweenMax.to($(".issue_cont2 a").eq(1), 0.5, {top:0, opacity:1, delay:1.6, ease:Power3.easeOut});
					TweenMax.to($(".issue_cont2 a").eq(2), 0.5, {top:0, opacity:1, delay:1.7, ease:Power3.easeOut});
					TweenMax.to($(".issue_cont2 a").eq(3), 0.5, {top:0, opacity:1, delay:1.8, ease:Power3.easeOut});

					setTimeout(function(){
						$(".issue_intro").stop(true, true).fadeOut(500);
					}, 1000);
				} else if($wheelNum == 3){
					$(".sticky_gnb").css("background","none");
					TweenMax.to($(".career_cont > div"), 0.5, {top:0, opacity:1, delay:0.1+1.2, ease:Power3.easeOut});
					TweenMax.to($(".career_cont > a").eq(0), 0.5, {top:0, opacity:1, delay:0.2+1.2, ease:Power3.easeOut});
					TweenMax.to($(".career_cont > a").eq(1), 0.5, {top:325, opacity:1, delay:0.3+1.2, ease:Power3.easeOut});
					TweenMax.to($(".career_cont > a").eq(2), 0.5, {top:325, opacity:1, delay:0.4+1.2, ease:Power3.easeOut});

					setTimeout(function(){
						$(".career_intro").stop(true, true).fadeOut(500);
					}, 1000);
				}
			}
		});
	});
}

function firstMotionPlay()
{
	TweenMax.to($(".visual_cont .inner .txt"), 0.5, {delay:0.2, top:460, opacity:1, ease:Power3.easeOut});
	//TweenMax.to($(".visual_cont .inner .line"), 0.5, {delay:0.4, top:582, opacity:1, ease:Power3.easeOut});
	//TweenMax.to($(".visual_cont .inner .playBt"), 0.5, {delay:0.6, top:632, opacity:1, ease:Power3.easeOut});
	TweenMax.to($(".section .familyBt"), 0.5, {delay:0.4, top:"50%", opacity:1, ease:Power3.easeOut});
	TweenMax.to($(".section .playBt2"), 0.5, {delay:0.6, right:20, opacity:1, ease:Power3.easeOut});
}


var $myTween;
function iconSkew()
{
	$myTween = TweenMax.to($(".skewIcon"), 5, {skewX:makeRandom(-10, 10), skewY:makeRandom(-10, 10), scale:makeRandom(1, 1.2), yoyo:true, ease:Back.easeInOut, onComplete:iconSkew});
}

function makeRandom(min, max)
{
	var val = Math.random() * (max - min) + min;
	return Math.floor(val);
}

var $wH;
var $halfW;
function windowResize()
{
	$wH = $(window).height();
	$halfW = $(window).width()/2 + 320;
	$(".section").css("top", $wH);
	if(!$wheelNum) $(".section").eq($wheelNum).css("top", 0);
	//else $(".section").eq($wheelNum).css("top", 70);
	$("#section_container").height($wH);

	//skewicon
	var skewPosX = $(window).width()/2 - 90;
	if(skewPosX < 550) skewPosX = 550;
	$(".skewIcon").css("left", skewPosX);

	//skewicon2
	var skewPosX2 = $(window).width()/2 - 131;
	if(skewPosX2 < 550) skewPosX2 = 550;
	$(".skewIcon2").css("left", skewPosX2);

	//biz image
	$(".biz_cont .c1").height($(window).height()/2 - 35);
	$(".biz_cont .c2").height($(window).height()/2 - 35);
	$(".biz_cont .c3").height($(window).height() - 70);
	$(".biz_cont .c4").height($(window).height()/2 - 35);
	$(".biz_cont .c5").height($(window).height()/2 - 35);
}


var isTab_firMotion1 = isTab_firMotion2 = isTab_firMotion3 = false;
function visualTab()
{
	var $btn = $(".tab_btn");
	var $black = $(".tab_btn .black");
	var num = -1;
	$btn.find("a.btn").each(function(index){
		$(this).on("click", function(){
			$(".blackBg").stop(true, true).fadeIn(400);
			$btn.find("a").addClass("on").removeClass("off");
			$(this).removeClass("on").addClass("off");
			$black.addClass("on");
			TweenMax.to($(".tab_btn"), 0.4, {top:0, ease:Power3.easeOut});
			TweenMax.to($(".tab_contents"), 0.4, {height:$(window).height(), ease:Power3.easeOut});
			//$(".tab_contents .content").removeClass("bgStyle1").removeClass("bgStyle2").addClass("bgStyle"+(index+1)+"");
			
			$(".content .txt_box").fadeOut(400);
			$(".content .txt_box").eq(index).fadeIn(400);
			//$(".content .txt_box").find(".txt1, .txt2").css("opacity", 0);
			//tabTxtPlay(index);

			$(".content .txt_box:eq("+index+") .intro_txt").show();
			$(".content .txt_box:eq("+index+") .intro_txt").stop(true, true).delay(1000).fadeOut(500);
			$(".content .txt_box:eq("+index+") .tab_inner_img").hide();
			
			
			if(index == 1) {
				$(".content .txt_box:eq("+index+") .tab_inner_img").stop(true, true).delay(1000).fadeIn(500);
			} else {
				$(".content .txt_box:eq("+index+") .tab_inner_img:first").stop(true, true).delay(1000).fadeIn(500);
			}
			$(".content .txt_box:eq("+index+") .line").css("left", "100%");
			TweenMax.to($(".content .txt_box:eq("+index+") .line"), 0.5, {left:0, delay:1, ease:Power3.easeOut});
			//$(".content .txt_box:eq("+index+") .line").stop(true, true).delay(1000).fadeIn(500);
		});
	});

	$(".blackBg, .visual_cont .tab_contents .closeBt").on("click", function(){
		$(".content .txt_box").fadeOut(400);
		$(".blackBg").stop(true, true).fadeOut(400);
		$btn.find("a").removeClass("on").removeClass("off");
		$black.removeClass("on");
		TweenMax.to($(".tab_btn"), 0.4, {top:-80, ease:Power3.easeOut});
		TweenMax.to($(".tab_contents"), 0.4, {height:0, ease:Power3.easeOut});
	});

	tabInnerEvent();
}

function tabInnerEvent()
{
	var cont_num1 = cont_num2 = cont_num3 = 0;
	$("#contents1 .direcBtn").each(function(index){
		$(this).click(function(){
			if(!index) {
				$("#contents1 .indicator a").eq(cont_num1).removeClass("on");
				$("#contents1 .tab_inner_img").eq(cont_num1).stop(true, true).fadeOut(200);
				cont_num1--;
				if(cont_num1 < 0) cont_num1 = 3;
				$("#contents1 .indicator a").eq(cont_num1).addClass("on");
				$("#contents1 .tab_inner_img").eq(cont_num1).stop(true, true).fadeIn(200);
			} else {
				$("#contents1 .indicator a").eq(cont_num1).removeClass("on");
				$("#contents1 .tab_inner_img").eq(cont_num1).stop(true, true).fadeOut(200);
				cont_num1++;
				if(cont_num1 > 3) cont_num1 = 0;
				$("#contents1 .indicator a").eq(cont_num1).addClass("on");
				$("#contents1 .tab_inner_img").eq(cont_num1).stop(true, true).fadeIn(200);
			}
		});
	});

	$("#contents1 .indicator a").each(function(index){
		$(this).click(function(){
			$("#contents1 .indicator a").eq(cont_num1).removeClass("on");
			$("#contents1 .tab_inner_img").eq(cont_num1).stop(true, true).fadeOut(200);
			cont_num1 = index;
			$("#contents1 .indicator a").eq(cont_num1).addClass("on");
			$("#contents1 .tab_inner_img").eq(cont_num1).stop(true, true).fadeIn(200);
		});
	});

	$("#contents2 .indicator a").each(function(index){
		$(this).click(function(){
			if(cont_num2 < index) {
				$("#contents2").removeClass().addClass("txt_box");
				$("#contents2 .indicator a").eq(cont_num2).removeClass("on");
				TweenMax.to($("#contents2 .tab_inner_img").eq(cont_num2), 0.6, {left:"-100%", ease:Power3.easeOut});
				cont_num2 = index;
				$("#contents2").removeClass().addClass("txt_box").addClass("step"+(index+1)+"");
				$("#contents2 .indicator a").eq(cont_num2).addClass("on");
				TweenMax.to($("#contents2 .tab_inner_img").eq(cont_num2), 0, {left:"100%", ease:Power3.easeOut});
				TweenMax.to($("#contents2 .tab_inner_img").eq(cont_num2), 0.6, {left:0, ease:Power3.easeOut});
			} else {
				$("#contents2").removeClass().addClass("txt_box");
				$("#contents2 .indicator a").eq(cont_num2).removeClass("on");
				TweenMax.to($("#contents2 .tab_inner_img").eq(cont_num2), 0.6, {left:"100%", ease:Power3.easeOut});
				cont_num2 = index;
				$("#contents2").removeClass().addClass("txt_box").addClass("step"+(index+1)+"");
				$("#contents2 .indicator a").eq(cont_num2).addClass("on");
				TweenMax.to($("#contents2 .tab_inner_img").eq(cont_num2), 0, {left:"-100%", ease:Power3.easeOut});
				TweenMax.to($("#contents2 .tab_inner_img").eq(cont_num2), 0.6, {left:0, ease:Power3.easeOut});
			}
			//if(cont_num2 == 3) TweenMax.to($(".content .txt_box:eq(1) .line"), 1, {left:-$halfW, ease:Power3.easeOut});
			//else TweenMax.to($(".content .txt_box:eq(1) .line"), 0.5, {left:0, ease:Power3.easeOut});
		});
	});

	$("#contents3 .direcBtn").each(function(index){
		$(this).click(function(){
			if(!index) {
				$("#contents3 .indicator a").eq(cont_num3).removeClass("on");
				$("#contents3 .tab_inner_img").eq(cont_num3).stop(true, true).fadeOut(500);
				cont_num3--;
				if(cont_num3 < 0) cont_num3 = 3;
				$("#contents3 .indicator a").eq(cont_num3).addClass("on");
				$("#contents3 .tab_inner_img").eq(cont_num3).stop(true, true).fadeIn(500);
			} else {
				$("#contents3 .indicator a").eq(cont_num3).removeClass("on");
				$("#contents3 .tab_inner_img").eq(cont_num3).stop(true, true).fadeOut(500);
				cont_num3++;
				if(cont_num3 > 3) cont_num3 = 0;
				$("#contents3 .indicator a").eq(cont_num3).addClass("on");
				$("#contents3 .tab_inner_img").eq(cont_num3).stop(true, true).fadeIn(500);
			}
		});
	});
	$("#contents3 .indicator a").each(function(index){
		$(this).click(function(){
			$("#contents3 .indicator a").eq(cont_num3).removeClass("on");
			$("#contents3 .tab_inner_img").eq(cont_num3).stop(true, true).fadeOut(500);
			cont_num3 = index;
			$("#contents3 .indicator a").eq(cont_num3).addClass("on");
			$("#contents3 .tab_inner_img").eq(cont_num3).stop(true, true).fadeIn(500);
		});
	});
}

function tabTxtPlay(num)
{
	$(".content .txt_box").find(".txt1, .txt2").css("opacity", 0);
	$(".content .txt_box").eq(num).show();
	TweenMax.fromTo($(".content .txt_box").eq(num).find(".txt1"), 0.5, {top:50, opacity:0}, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});
	TweenMax.fromTo($(".content .txt_box").eq(num).find(".txt2"), 0.5, {top:123, opacity:0}, {top:73, opacity:1, delay:0.5, ease:Power3.easeOut});
}

