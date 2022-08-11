$(function(){
	//헤더
	$(".gnbBt").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".gnbD").stop(true, true).slideDown(250);
			$(".dimdBg").stop(true, true).fadeIn(250);
		}else{
			$(".gnbD").stop(true, true).slideUp(250);
			$(".dimdBg").stop(true, true).fadeOut(250);
			$(this).removeClass("on");
		}
	});

	$(".wrap .header .login").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".wrap .rightCon.one img:last").attr("src", $(".wrap .rightCon.one img:last").attr("src").replace("img4.png", "img4_login.png"));
			TweenMax.to($("html, body"), 0.6, {scrollTop:$(".mainCon").offset().top, ease:Power3.easeOut});
			$(".wrap .rightCon.thr").show();
			$(".wrap .rightCon.fou").show();
			$(".wrap .rightArea").removeClass("on");
		}else{
			TweenMax.to($(".logInfoD"), 0.6, {right:0, ease:Power3.easeOut});
			$(".dimdBg").stop(true, true).fadeIn(600);
		}
	});
	$(".wrap .logInfoD .close").click(function(){
		TweenMax.to($(".logInfoD"), 0.6, {right:"-600", ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeOut(600);
	});

	$(window).load(function(){
		if($(".sub2").size() > 0){
			$(".wrap .subCon.sub2 .img").each(function(q){
				TweenMax.to($(".wrap .subCon.sub2  .img").eq(q), 1, {top:0, opacity:1, delay:0.3 + q*0.05, ease:Power3.easeOut});
			});

			$(".wrap .subCon.sub2 .more").click(function(){
				$(".wrap .subCon.sub2 .moreImg").each(function(q){
					TweenMax.to($(".wrap .subCon.sub2  .moreImg").eq(q), 1, {display:'block', top:0, opacity:1, delay:q*0.05, ease:Power3.easeOut});
				});
			});
		}

		if($(".sub3").size() > 0){
			TweenMax.to($(".wrap .subCon.sub3 .txt1"), 1, {top:80, opacity:1, delay:0.4, ease:Power3.easeOut});
			TweenMax.to($(".wrap .subCon.sub3 .txt2"), 1, {top:80, opacity:1, delay:0.5, ease:Power3.easeOut});
			TweenMax.to($(".wrap .subCon.sub3 .line"), 1, {top:230, opacity:1, delay:0.6, ease:Power3.easeOut});
			TweenMax.to($(".wrap .subCon.sub3 .txt3"), 1, {top:270, opacity:1, delay:0.7, ease:Power3.easeOut});
		}
	});

	$(window).scroll(function(){
		if($(".sub1").size() > 0){
			if($(window).scrollTop() > 100){
				TweenMax.to($(".subCon .img2"), 1, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".subCon .img3"), 1, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				$(".subCon .clear1 p").each(function(q){
					TweenMax.to($(".subCon .clear1 p").eq(q), 1, {top:0, opacity:1, delay:0.4 + q*0.1, ease:Power3.easeOut});
				});
				TweenMax.to($(".subCon .img7"), 1, {top:0, opacity:1, delay:0.7, ease:Power3.easeOut});
			}

			if($(window).scrollTop() > $(".subCon .clear1").offset().top){
				TweenMax.to($(".subCon .img8"), 1, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".subCon .img9"), 1, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				$(".subCon .clear2 p").each(function(q){
					TweenMax.to($(".subCon .clear2 p").eq(q), 1, {top:0, opacity:1, delay:0.4 + q*0.1, ease:Power3.easeOut});
				});
				TweenMax.to($(".subCon .img12"), 1, {top:0, opacity:1, delay:0.7, ease:Power3.easeOut});
			}

			if($(window).scrollTop() > $(".subCon .clear2").offset().top){
				TweenMax.to($(".subCon .img13"), 1, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".subCon .img14"), 1, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".subCon .img15"), 1, {top:0, opacity:1, delay:0.4, ease:Power3.easeOut});
			}

			if($(window).scrollTop() > $(".subCon .img13").offset().top){
				TweenMax.to($(".subCon .img16"), 1, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".subCon .img17"), 1, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".subCon .img18"), 1, {top:0, opacity:1, delay:0.4, ease:Power3.easeOut});
			}
		}

		if($(".sub3").size() > 0){
			if($(window).scrollTop() > 600){
				$(".wrap .subCon.sub3 .thumb").each(function(q){
					TweenMax.to($(".wrap .subCon.sub3 .thumb").eq(q), 1, {top:0, opacity:1, delay:0.1 + q*0.1, ease:Power3.easeOut});
				});
				TweenMax.to($(".wrap .subCon.sub3 .btnArea"), 1, {top:0, opacity:1, delay:0.7, ease:Power3.easeOut});
			}
			if($(window).scrollTop() > $(".wrap .subCon.sub3 .btnArea").offset().top - 100){
				TweenMax.to($(".wrap .subCon.sub3 .bgD .listTit1"), 1, {top:0, opacity:1, ease:Power3.easeOut});
				$(".wrap .subCon.sub3 .bgD .listDiv1 .list").each(function(q){
					TweenMax.to($(".wrap .subCon.sub3 .bgD .listDiv1 .list").eq(q), 1, {top:0, opacity:1, delay:0.2 + q*0.1, ease:Power3.easeOut});
				});
			}

			if($(window).scrollTop() > $(".wrap .subCon.sub3 .bgD .listTit1").offset().top){
				TweenMax.to($(".wrap .subCon.sub3 .bgD .listTit2"), 1, {top:0, opacity:1, ease:Power3.easeOut});
				$(".wrap .subCon.sub3 .bgD .listDiv2 .list").each(function(q){
					TweenMax.to($(".wrap .subCon.sub3 .bgD .listDiv2 .list").eq(q), 1, {top:0, opacity:1, delay:0.2 + q*0.1, ease:Power3.easeOut});
				});
			}
		}
	}); $(window).scroll();
});