$(function(){
	// gnb
	$('.header .menu').mouseenter(function(){
		$('.twoD').stop(true,true).slideDown(300);
		$('.gnbBg').stop(true,true).slideDown(300);
	});
	$('.header .menu').mouseleave(function(){
		$('.twoD').stop(true,false).slideUp(300);
		$('.gnbBg').stop(true,false).slideUp(300);
	});


	// 로그인 전,후
	$('.loginBtn').click(function(){
		$('.myArea').show();
		$('.loginBtn').hide();
	});

	$('.myInfo').click(function(){
		$('.myArea').hide();
		$('.loginBtn').show();
	});


	// mainV
	TweenMax.to($('.mainV_txt1'),0.5,{marginTop:0, opacity:1});
	TweenMax.to($('.mainV_txt2'),0.5,{marginTop:0, opacity:1, delay:0.3});
	TweenMax.to($('.mainV_btn'),0.5,{marginTop:0, opacity:1, delay:0.6});
	TweenMax.to($('.mainV_indi'),0.5,{marginTop:0, opacity:1, delay:0.9});

	// 씨앗 모션
	TweenMax.to($('.water'),0.5,{opacity:1, delay:1.3});
	TweenMax.to($('.seed1'),0.6,{opacity:1, delay:1.2});
	TweenMax.to($('.seed2'),0.6,{opacity:1, delay:1.9});
	TweenMax.to($('.seed3'),0.6,{opacity:1, delay:2.6});
	TweenMax.to($('.stem1'),0.6,{opacity:1, delay:2.7, height:127});
	TweenMax.to($('.seed4'),0.6,{opacity:1, delay:3.3});
	TweenMax.to($('.stem2'),0.7,{opacity:1, delay:3.4, height:260});
	TweenMax.to($('.tree'),0.8,{opacity:1, delay:4.1});


	TweenMax.to($('.s1_txt_circle img:last-child'),0,{scale:0});

	// 혜택보기 hover
	$('.s1 .firTxt').hover(function(){
		$('.s1 .s1_txt1 img').attr("src", "./images/s1_txt1_on.png");
		TweenMax.to($('.s1 .s1_txt1'),0.5,{left:50});
		TweenMax.to($('.s1_txt_circle img:last-child'),0.5,{scale:1});
	},function(){
		$('.s1 .s1_txt1 img').attr("src", "./images/s1_txt1.png");
		TweenMax.to($('.s1 .s1_txt1'),0.5,{left:0});
		TweenMax.to($('.s1_txt_circle img:last-child'),0.5,{scale:0});
	});

	// 스크롤 할 때 나오게
	$(window).scroll(function(){
		if($(window).scrollTop() >= 760 && $(window).scrollTop() < 1894){
			TweenMax.to($(".s1 .firTxt"), 0.5, {opacity:1, marginTop:0});
			TweenMax.to($(".s1 .s1_txt2"), 0.5, {opacity:1, marginTop:0, delay:0.4});
			TweenMax.to($(".s1 .s1_txt3"), 0.5, {opacity:1, marginTop:0, delay:0.8});
			TweenMax.to($(".s1 .s1_txt4"), 0.5, {opacity:1, marginTop:0, delay:1.2});
			TweenMax.to($(".s1 .s1_txt5"), 0.5, {opacity:1, marginTop:0, delay:1.6});
		}
		else if($(window).scrollTop() >= 1940 && $(window).scrollTop() < 3000){
			TweenMax.to($(".s2 .imgList .s2_list1"), 0.5, {marginTop:0, opacity:1, delay:0.2});
			TweenMax.to($(".s2 .imgList .s2_list2"), 0.5, {marginTop:0, opacity:1, delay:0.6});
			TweenMax.to($(".s2 .imgList .s2_list3"), 0.5, {marginTop:0, opacity:1, delay:1});
			TweenMax.to($(".s2 .imgList .s2_list4"), 0.5, {marginTop:0, opacity:1, delay:1.4});
		}
		else if($(window).scrollTop() >= 3000){
			TweenMax.to($(".s3_phone"), 1, {height:746, opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".s3_img1"), 0.8, {marginLeft:0, opacity:1, ease:Power3.easeOut, delay:0.4});
			TweenMax.to($(".s3_img2"), 0.8, {marginLeft:0, opacity:1, ease:Power3.easeOut, delay:0.8});
			TweenMax.to($(".s3_btn"), 0.8, {marginLeft:0, opacity:1, ease:Power3.easeOut, delay:1.2});
		}
	});
});
