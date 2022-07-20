$(function(){
	//메인 비쥬얼
	var swiper = new Swiper('.swiperCont',{
		pagination: {
			el: '.swiper-pagination',
			clickable :true
		}
	});
	
	//게이트화면
	TweenMax.to($(".gate .txt1"), 1.4, {top:411, opacity:1, ease:Power3.easeOut});
	TweenMax.to($(".gate .txt2 img"), .8, {height:100, opacity:1, delay:.7, ease:Power3.easeOut});
	TweenMax.to($(".gate .txt3"), .8, {top:681, opacity:1, delay:1.2, ease:Power3.easeOut});
	TweenMax.to($(".gate"), 1, {opacity:0, delay:3, ease:Power3.easeOut, onComplete:function(){
		$(".gate").css('display', 'none')
		$("#mobileWrap .contents .wrap").css('overflow-y', 'auto')
	}});

	//nh포켓
	$(".loginBt").click(function(){
		TweenMax.to($(".loginBt_on"), 0.5, {left:0, ease:Power3.easeOut});
		$("#mobileWrap .contents .wrap").css('height', '1949px');
		$("#header2").css('display', 'none');
	});
	$(".loginBt_on").click(function(){
		TweenMax.to($(".loginBt_on"), 0.5, {left:"100%", ease:Power3.easeOut});
		$("#mobileWrap .contents .wrap").css('height', '100%');
		$("#header2").css('display', 'block');
	});

	//나의nh
	$(".gnbDiv .gnbWrap .twoD a").click(function(){
		TweenMax.to($(".twoD_on"), 0.5, {left:0, ease:Power3.easeOut});
		$("#mobileWrap .contents .wrap").css('height', '2695px');
		$("#header2").css('display', 'none');
	});
	$(".twoD_on").click(function(){
		TweenMax.to($(".twoD_on"), 0.5, {left:"100%", ease:Power3.easeOut});
		$("#mobileWrap .contents .wrap").css('height', '100%');
		$("#header2").css('display', 'block');
		$(".blackBg").fadeOut(0);
		TweenMax.to($(".gnbDiv"), 0, {top:-1764, ease:Power3.easeOut});
	});

	//바코드 버튼
	$("#header2 a.barcode").click(function(){
		$(".blackBg").fadeIn(500);
		TweenMax.to($(".barcodeDiv"), 0.5, {top:0, ease:Power3.easeOut});
		$("#mobileWrap .contents .wrap").css('height', '2695px');
	});
	$(".barcodeDiv").click(function(){
		$(".blackBg").fadeOut(500);
		TweenMax.to($(".barcodeDiv"), 0.5, {top:-740, ease:Power3.easeOut});
	});

	//메뉴관리 버튼
	$(".go_btn").click(function(){
		$(".blackBg").fadeIn(300);
		TweenMax.to($(".go_btn_on"), 0.5, {top:180, opacity:1, ease:Power3.easeOut});
		$("#mobileWrap .contents .wrap").css('height', '2700px');
	});
	$(".go_btn_on").click(function(){
		$(".blackBg").fadeOut(300);
		TweenMax.to($(".go_btn_on"), 0.5, {top:-1000, opacity:0, ease:Power3.easeOut});
		$("#mobileWrap .contents .wrap").css('height', '100%');
	});

	//바코드 버튼
	$("#header2 a.barcode").click(function(){
		$(".blackBg").fadeIn(500);
		TweenMax.to($(".barcodeDiv"), 0.5, {top:0, ease:Power3.easeOut});
	});
	$(".barcodeDiv").click(function(){
		$(".blackBg").fadeOut(500);
		TweenMax.to($(".barcodeDiv"), 0.5, {top:-740, ease:Power3.easeOut});
	});

	//gnb버튼
	$("#header2 a.gnbBt").click(function(){
		TweenMax.to($(".gnbDiv"), 0.5, {top:0, ease:Power3.easeOut});
		$("#mobileWrap .contents .wrap").css('height', 2068);
	});
	$(".gnbDiv .xBtn").click(function(){
		TweenMax.to($(".gnbDiv"), 0.5, {top:-1764, ease:Power3.easeOut});
		$("#mobileWrap .contents .wrap").css('height', '100%');
	});

	$(".gnbWrap").hover(function(){
		$(this).find(".oneD").addClass("on")
		$(this).find(".twoD").addClass("on")
	}, function(){
		$(this).find(".oneD").removeClass("on")
		$(this).find(".twoD").removeClass("on")
	});

	var isBarcode = false;
	$(".gnbDiv .gnbWrap .oneD a").on("click", function(){
		if(!isBarcode) {
			isBarcode = true;
			TweenMax.to($(".gnbDiv .gnbWrap .twoD a"), 0.8, {left:-198, ease:Power2.easeOut});
		} else {
			isBarcode = false;
			TweenMax.to($(".gnbDiv .gnbWrap .twoD a"), 0.8, {left:160, ease:Power2.easeOut});
		}
	});

	$("#mobileWrap .contents .wrap").scroll(function(){
		if($("#mobileWrap .contents .wrap").scrollTop() > 50){
			$("#header2").css("top", $("#mobileWrap .contents .wrap").scrollTop());

			$(".loginBt").css("top", $("#mobileWrap .contents .wrap").scrollTop()+1006);

			$(".gnbDiv .gnbFot").css("top", $("#mobileWrap .contents .wrap").scrollTop()+1056);
		}else{
			$("#header2").css("top", 0);

			$(".loginBt").css("top", 1006);

			$(".gnbDiv .gnbFot").css("top", 1056);
		}
	})

});

