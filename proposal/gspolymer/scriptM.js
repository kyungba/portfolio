var fNum = 0, waterInterval, splashInterval;

$(function(){
	setTimeout(function(){
		splashInterval = setInterval( "splash()", 30);

		TweenMax.to($(".splash .img1"), 3, {opacity:0, delay:1, ease:Power3.easeOut});
		TweenMax.to($(".splash .img2"), 3, {opacity:1, delay:1, ease:Power3.easeOut, onComplete:function(){
			$(".splash").fadeOut(500);
		}});
	}, 1000);

	$("#mobileWrap .contents .wrap").scroll(function(){
		console.log($(this).scrollTop());
	});

	$("#header .right").click(function(){
		TweenMax.to($(".gnb"), 0.5, {right:0, ease:Power3.easeOut});
		$(".blackBg").fadeIn(500);
	});
	$(".gnb .closeBt").click(function(){
		TweenMax.to($(".gnb"), 0.5, {right:-590, ease:Power3.easeOut});
		$(".blackBg").fadeOut(500);
	});
	$(".gnb .soundBt").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(this).find("img").show();
		}else{
			$(this).removeClass("on");
			$(this).find("img").hide();
		}
	});
	$(".gnb .oneD").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(this).find("img").show();
			TweenMax.to($(".gnb .twoD a"), 0.5, {top:-480, ease:Power3.easeOut});
		}else{
			$(this).removeClass("on");
			$(this).find("img").hide();
			TweenMax.to($(".gnb .twoD a"), 0.5, {top:0, ease:Power3.easeOut});
		}
	});

	$(".point").click(function(){
		$(".point").fadeOut(300);
	});
	
	var sec1Num = 0;
	$(".sec1").click(function(){
		if(sec1Num == 0){
			sec1Num = 1;
			waterInterval = setInterval( "water()", 30);
			$(".sec1 .img1").delay(1000).fadeOut(300);
			$(".sec1 .img2").delay(1000).fadeIn(300);
		}else if(sec1Num == 1){
			sec1Num = 2;
			$(".sec1 .img2").fadeOut(300);
			$(".sec1 .img3").fadeIn(300);
		}else if(sec1Num == 2){
			sec1Num = 3;
			$(".sec1 .img3").fadeOut(300);
			$(".sec1 .img4").fadeIn(300);
		}else if(sec1Num == 3){
			sec1Num = 4;
			$(".sec1 .img4").fadeOut(300);
			$(".sec1 .img5").fadeIn(300);
		}else if(sec1Num == 4){
			sec1Num = 5;
			$(".sec1 .img5").fadeOut(300);
			$(".sec1 .img6").fadeIn(300);
		}else if(sec1Num == 5){
			sec1Num = 0;
			$(".sec1 .img6").fadeOut(300);
			$(".sec1 .img1").show();
		}
	});

	var sec3Num = 0;
	$(".sec3 .rollArea").click(function(){
		if(sec3Num == 0){
			sec3Num = 1;
			TweenMax.to($(".sec3 .roll").eq(0), 0.5, {left:-640, ease:Power3.easeOut});
			TweenMax.to($(".sec3 .roll").eq(1), 0, {left:640, ease:Power3.easeOut});
			TweenMax.to($(".sec3 .roll").eq(1), 0.5, {left:0, ease:Power3.easeOut});
			$(".sec3 .indiArea a").removeClass("on");
			$(".sec3 .indiArea a").eq(1).addClass("on");
		}else if(sec3Num == 1){
			sec3Num = 0;
			TweenMax.to($(".sec3 .roll").eq(1), 0.5, {left:-640, ease:Power3.easeOut});
			TweenMax.to($(".sec3 .roll").eq(0), 0, {left:640, ease:Power3.easeOut});
			TweenMax.to($(".sec3 .roll").eq(0), 0.5, {left:0, ease:Power3.easeOut});
			$(".sec3 .indiArea a").removeClass("on");
			$(".sec3 .indiArea a").eq(0).addClass("on");
		}
	});

	var barcodeOpen = false;
	$(".barcodeBt").click(function(){
		if(!barcodeOpen){
			barcodeOpen = true;
			$(".blackBg").fadeIn(500);
			TweenMax.to($(".barcodeBt").find("span"), 0.3, {opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".barcode"), 0.5, {bottom:0, ease:Power3.easeOut});
		}else{
			barcodeOpen = false;
			$(".blackBg").fadeOut(500);
			TweenMax.to($(".barcodeBt").find("span"), 0.3, {opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".barcode"), 0.5, {bottom:-1136, ease:Power3.easeOut});
		}
	});
	$(".barcode").click(function(){
		$(".point").fadeIn(300);
	});
});

function water(){
	$(".sec1 .water img").eq(fNum).css("display", "none");
	fNum ++;
	if(fNum > 79) {
		clearInterval(waterInterval);
		fNum = 0;
	} 
	$(".sec1 .water img").eq(fNum).css("display", "block");
}

function splash(){
	$(".splash .water img").eq(fNum).css("display", "none");
	fNum ++;
	if(fNum > 79) {
		clearInterval(splashInterval);
		fNum = 0;
	} 
	$(".splash .water img").eq(fNum).css("display", "block");
}