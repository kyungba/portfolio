$(function(){
	var comma_separator_number_step
	$(window).load(function(){
		TweenMax.to($(".main2Con1 > p").eq(0), 1, {top:12, opacity:1, delay:0, ease:Power3.easeOut});
		TweenMax.to($(".main2Con1 > p").eq(1), 1, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
		TweenMax.to($(".main2Con1 > p").eq(2), 1, {top:83, opacity:1, delay:0.4, ease:Power3.easeOut});
		TweenMax.to($(".main2Con1 > p").eq(3), 1, {top:83, opacity:1, delay:0.6, ease:Power3.easeOut});
		TweenMax.to($(".quick"), 1, {right:26, opacity:1, delay:0.8, ease:Power3.easeOut});

		TweenMax.to($(".activity > a > img").eq(0), 1, {left:0, opacity:1, delay:0, ease:Power3.easeOut});
		TweenMax.to($(".activity > a > img").eq(1), 1, {left:0, opacity:1, delay:0.2, ease:Power3.easeOut});
		TweenMax.to($(".activity > a > img").eq(2), 1, {left:0, opacity:1, delay:0.4, ease:Power3.easeOut});
		TweenMax.to($(".activity > a > img").eq(3), 1, {left:0, opacity:1, delay:0.6, ease:Power3.easeOut});

		// 숫자 모션
		comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
		$('.main2 .number1').animateNumber(
			{
				number: 6700,
				numberStep: comma_separator_number_step
			},
			1000
		);

		// 라운드 프로그래스 모션 #ed1e24, #f6dc09
		$('.main2 .circle1').circleProgress({
			size: 197,
			startAngle: -1.5,
			value: 0.25,
			emptyFill : "rgba(0, 0, 0, 0)",
			thickness: 17,
			lineCap: "round",
			fill: {color:"#ed1e24", image: "http://design.easymedia.co.kr/mynb/verMotion/typeA/imagesM/mynb_circle_bg1.gif"},
			animation:{
				duration:1000
			}
		}).on('circle-animation-progress', function(event, progress) {
			//$(this).find('strong').html(Math.round(6700 * progress));
		});
	});
	
	// 카드 클릭
	var circle = false;
	$(".main2 > .inner .cardArea").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			TweenMax.to($(".main2 > .inner .cardArea > div"), 1, {left:-450, ease:Power3.easeOut, onComplete:function(){
				// 숫자 모션
				$('.main2 .number2').animateNumber(
					{
						number: 9400,
						numberStep: comma_separator_number_step
					},
					1000
				);
				
				// 라운드 프로그래스 모션 #ed1e24, #f6dc09
				if(!circle){
					$('.main2 .circle2').circleProgress({
						size: 197,
						startAngle: -1.5,
						value: 0.6,
						emptyFill : "rgba(0, 0, 0, 0)",
						thickness: 17,
						lineCap: "round",
						fill: {color:"#f6dc09", image: "http://design.easymedia.co.kr/mynb/verMotion/typeA/imagesM/mynb_circle_bg2.gif"},
						animation:{
							duration:1000
						}
					}).on('circle-animation-end', function(event, progress) {
						circle=true;
					});
					}
			}});
		}else{
			$(this).removeClass("on");
			TweenMax.to($(".main2 > .inner .cardArea > div"), 1, {left:0, ease:Power3.easeOut});
		}
	});

	// 퀵버튼 클릭
	$(".quick .openBt").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".blackBg").fadeIn(500);
			TweenMax.to($(".quick .quickBt").eq(0), 0.5, {right:0, ease:Power3.easeOut});
			TweenMax.to($(".quick .quickBt").eq(1), 0.5, {right:0, delay:0.1, ease:Power3.easeOut});
			TweenMax.to($(".quick .quickBt").eq(2), 0.5, {right:0, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".quick .quickBt").eq(3), 0.5, {right:0, delay:0.3, ease:Power3.easeOut});
		}else{
			$(this).removeClass("on");
			$(".blackBg").fadeOut(500);
			TweenMax.to($(".quick .quickBt").eq(3), 0.5, {right:-251, ease:Power3.easeOut});
			TweenMax.to($(".quick .quickBt").eq(2), 0.5, {right:-251, delay:0.1, ease:Power3.easeOut});
			TweenMax.to($(".quick .quickBt").eq(1), 0.5, {right:-251, delay:0.2, ease:Power3.easeOut});
			TweenMax.to($(".quick .quickBt").eq(0), 0.5, {right:-251, delay:0.3, ease:Power3.easeOut});
		}
	});
});