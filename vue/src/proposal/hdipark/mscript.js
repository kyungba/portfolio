$(document).ready(function(){
	// 원페이지 스크롤 플러그인
	$('#fullpage').fullpage({
		anchors: ['section1', 'section2', 'section3', 'section4'],
		menu:'#menu',
		scrollOverflow: true,
		scrollingSpeed: 1000,
		resetSliders: true,
		onLeave: function(anchorLink, index){ // move start
			if(index == 2 || index == 4){
				$("#header").addClass("on");
			}else if(index == 1 || index == 3){
				$("#header").removeClass("on");
			}
		},
		afterLoad: function(anchorLink, index){ // move end
			if(index == 3){
				TweenMax.to($(".csr .tit"), 1, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".csr .txt"), 1, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".csr .box1"), 1, {top:0, opacity:1, delay:0.4, ease:Power3.easeOut});
				TweenMax.to($(".csr .box2"), 1, {top:0, opacity:1, delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".csr .box3"), 1, {top:0, opacity:1, delay:0.8, ease:Power3.easeOut});
				TweenMax.to($(".csr .box4"), 1, {top:0, opacity:1, delay:1, ease:Power3.easeOut});
			}else if(index == 4){
				TweenMax.to($(".news .tit"), 1, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".news .txt"), 1, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
				TweenMax.to($(".news .box1"), 1, {top:0, opacity:1, delay:0.4, ease:Power3.easeOut});
				TweenMax.to($(".news .box2"), 1, {top:0, opacity:1, delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".news .box3"), 1, {top:0, opacity:1, delay:0.8, ease:Power3.easeOut});
				TweenMax.to($(".news .box4"), 1, {top:419, opacity:1, delay:1, ease:Power3.easeOut});
				TweenMax.to($(".news .box5"), 1, {top:419, opacity:1, delay:1.2, ease:Power3.easeOut});
				TweenMax.to($(".news .box6"), 1, {top:587, opacity:1, delay:1.4, ease:Power3.easeOut});
				TweenMax.to($(".news .box7"), 1, {top:587, opacity:1, delay:1.6, ease:Power3.easeOut});
			}
		},
		normalScrollElements: '.proList'
	});
});

$(function(){
	// 메인비주얼
	mainVis();

	// GNB
	$("#gnb").hover(function(){
		$("#gnb .twoD").stop(true, true).slideDown(300);
		$("#header").addClass("hover");
		$("#gnb > a .bar").show();
	},function(){
		$("#gnb .twoD").stop(true, true).slideUp(300, function(){
			$("#header").removeClass("hover");
		});
		$("#gnb > a .bar").hide();
	});

	// 우측 메뉴 클릭
	$("#header .util").click(function(){
		TweenMax.to($(".proList"), 1, {left:0, ease:Power3.easeOut});
		$("#header").addClass("on2");
		$(".proListClose").stop().fadeIn(700);
	});
	$(".proListClose").click(function(){
		TweenMax.to($(".proList"), 1, {left:"100%", ease:Power3.easeOut});
		$("#header").removeClass("on2");
		$(".proListClose").stop().fadeOut(700);
	});

	// 프로덕트
	var proOpen = false;
	$(".product .pro").each(function(i){
			$(this).hover(function(){
				if(!proOpen){
					TweenMax.to($(this).find(".txtArea"), 0.7, {height:423, ease:Power3.easeOut});
					TweenMax.to($(this).find(".txtArea .txt3"), 0.7, {opacity:1, ease:Power3.easeOut});
					TweenMax.to($(this).find(".txtArea .btn a span"), 0.7, {opacity:1, ease:Power3.easeOut});
					$(this).find(".dimd").stop().fadeIn(700);
				}
			},function(){
				if(!proOpen){
					TweenMax.to($(this).find(".txtArea"), 0.7, {height:339, ease:Power3.easeOut});
					TweenMax.to($(this).find(".txtArea .txt3"), 0.7, {opacity:0, ease:Power3.easeOut});
					TweenMax.to($(this).find(".txtArea .btn a span"), 0.7, {opacity:0, ease:Power3.easeOut});
					$(this).find(".dimd").stop().fadeOut(700);
				}
			});
	});
	
	var proNum = 0;
	$(".product .pro").each(function(i){
		$(this).children(".open").click(function(){
			proOpen = true;
			$(".product .pro").find(".dimd").stop().fadeOut(700);
			$(".product .pro").find(".txtArea").stop().fadeOut(700);
			$(".product .bg").css("background", "#000");

			TweenMax.to($(".product .pro").find(".proCon .txt1"), 0, {width:0, ease:Power3.easeOut});
			TweenMax.to($(".product .pro").find(".proCon .txt2"), 0, {width:0, ease:Power3.easeOut});
			TweenMax.to($(".product .pro").find(".proCon .txt3"), 0, {width:0, ease:Power3.easeOut});
			TweenMax.to($(".product .pro").find(".proCon .img1"), 0, {top:814, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".product .pro").find(".proCon .img2"), 0, {top:814, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".product .pro").find(".proCon .img3"), 0, {top:814, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".product .pro").find(".proCon .img4"), 0, {top:814, opacity:0, ease:Power3.easeOut});
			
			proNum = i;
			if(proNum == 0){
				$(".product .pro").children(".open").show();
				$(".product .pro").eq(0).children(".open").hide();
				$(".product .bg .bg1").fadeIn(1000);
				$(".product .bg .bg2").fadeOut(1000);
				$(".product .close").fadeIn(1000);
				TweenMax.to($(".product .pro").eq(0).find(".subTit"), 0.7, {opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".product .pro").eq(1).find(".subTit"), 0.7, {opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".product .pro").eq(2).find(".subTit"), 0.7, {opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".product .close"), 1, {left:$(window).width() - 287, ease:Power3.easeOut});
				TweenMax.to($(".product .pro").eq(0), 1, {width:$(window).width() - 194, ease:Power3.easeOut});
				TweenMax.to($(".product .pro").eq(1), 1, {width:97, left:$(window).width() - 194, ease:Power3.easeOut});
				TweenMax.to($(".product .pro").eq(2), 1, {width:97, left:$(window).width() - 97, ease:Power3.easeOut, onComplete:function(){
					TweenMax.to($(".product .pro").eq(0).find(".proCon .txt1"), 1, {width:600, ease:Power3.easeOut});
					TweenMax.to($(".product .pro").eq(0).find(".proCon .txt2"), 1, {width:600, delay:0.2, ease:Power3.easeOut});
					TweenMax.to($(".product .pro").eq(0).find(".proCon .txt3"), 1, {width:600, delay:0.4, ease:Power3.easeOut});
					TweenMax.to($(".product .pro").eq(0).find(".proCon .img1"), 1, {top:714, opacity:1, delay:0.6, ease:Power3.easeOut});
					TweenMax.to($(".product .pro").eq(0).find(".proCon .img2"), 1, {top:714, opacity:1, delay:0.8, ease:Power3.easeOut});
					TweenMax.to($(".product .pro").eq(0).find(".proCon .img3"), 1, {top:714, opacity:1, delay:1, ease:Power3.easeOut});
					TweenMax.to($(".product .pro").eq(0).find(".proCon .img4"), 1, {top:714, opacity:1, delay:1.2, ease:Power3.easeOut});
				}});
			}else if(proNum == 1){
				$(".product .pro").children(".open").show();
				$(".product .pro").eq(1).children(".open").hide();
				$(".product .bg .bg2").fadeIn(1000);
				$(".product .bg .bg1").fadeOut(1000);
				$(".product .close").fadeIn(1000);
				TweenMax.to($(".product .pro").eq(1).find(".subTit"), 0.7, {opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".product .pro").eq(0).find(".subTit"), 0.7, {opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".product .pro").eq(2).find(".subTit"), 0.7, {opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".product .close"), 1, {left:$(window).width() - 194, ease:Power3.easeOut});
				TweenMax.to($(".product .pro").eq(0), 1, {width:97, ease:Power3.easeOut});
				TweenMax.to($(".product .pro").eq(1), 1, {width:$(window).width() - 194, left:97, ease:Power3.easeOut});
				TweenMax.to($(".product .pro").eq(2), 1, {width:97, left:$(window).width() - 97, ease:Power3.easeOut, onComplete:function(){
					TweenMax.to($(".product .pro").eq(1).find(".proCon .txt1"), 1, {width:600, ease:Power3.easeOut});
					TweenMax.to($(".product .pro").eq(1).find(".proCon .txt2"), 1, {width:600, delay:0.2, ease:Power3.easeOut});
					TweenMax.to($(".product .pro").eq(1).find(".proCon .txt3"), 1, {width:600, delay:0.4, ease:Power3.easeOut});
					TweenMax.to($(".product .pro").eq(1).find(".proCon .img1"), 1, {top:714, opacity:1, delay:0.6, ease:Power3.easeOut});
					TweenMax.to($(".product .pro").eq(1).find(".proCon .img2"), 1, {top:714, opacity:1, delay:0.8, ease:Power3.easeOut});
					TweenMax.to($(".product .pro").eq(1).find(".proCon .img3"), 1, {top:714, opacity:1, delay:1, ease:Power3.easeOut});
					TweenMax.to($(".product .pro").eq(1).find(".proCon .img4"), 1, {top:714, opacity:1, delay:1.2, ease:Power3.easeOut});
				}});
			}
		});
	});

	$(".product .close").click(function(){
		$(".product .bg > div").fadeOut(1000);
		TweenMax.to($(".product .pro").find(".subTit"), 0.7, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".product .pro").find(".txtArea"), 0.7, {height:339, ease:Power3.easeOut});
		TweenMax.to($(".product .pro").find(".txtArea .txt3"), 0.7, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".product .pro").find(".txtArea .btn a span"), 0.7, {opacity:0, ease:Power3.easeOut});
		$(".product .pro").find(".dimd").stop().fadeOut(700);
		$(".product .pro").children(".open").show();
		$(".product .pro").find(".txtArea").stop().fadeIn(700);
		$(".product .bg").css("background", "none");
		TweenMax.to($(".product .pro").eq(0), 1, {width:"33.3%", ease:Power3.easeOut});
		TweenMax.to($(".product .pro").eq(1), 1, {width:"33.4%", left:"33.3%", ease:Power3.easeOut});
		TweenMax.to($(".product .pro").eq(2), 1, {width:"33.3%", left:"66.7%", ease:Power3.easeOut, onComplete:function(){
			proOpen = false;
		}});

		TweenMax.to($(".product .pro").find(".proCon .txt1"), 0, {width:0, ease:Power3.easeOut});
		TweenMax.to($(".product .pro").find(".proCon .txt2"), 0, {width:0, ease:Power3.easeOut});
		TweenMax.to($(".product .pro").find(".proCon .txt3"), 0, {width:0, ease:Power3.easeOut});
		TweenMax.to($(".product .pro").find(".proCon .img1"), 0, {top:814, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".product .pro").find(".proCon .img2"), 0, {top:814, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".product .pro").find(".proCon .img3"), 0, {top:814, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".product .pro").find(".proCon .img4"), 0, {top:814, opacity:0, ease:Power3.easeOut});

		if(proNum == 0){
			$(".product .close").fadeOut(1000);
			TweenMax.to($(".product .close"), 1, {left:547, ease:Power3.easeOut});
		}else if(proNum == 1){
			$(".product .close").fadeOut(1000);
			TweenMax.to($(".product .close"), 1, {left:1187, ease:Power3.easeOut, onComplete:function(){
				TweenMax.to($(".product .close"), 0, {left:547, ease:Power3.easeOut});
			}});
		}
	});
});


function mainVis(){
	TweenMax.to($(".mainVis .visArea .vis").eq(0).find(".txt1"), 1, {width:269, delay:0.5, ease:Power2.easeOut});
	TweenMax.to($(".mainVis .visArea .vis").eq(0).find(".txt2"), 1, {width:522, delay:0.9, ease:Power2.easeOut});
	TweenMax.to($(".mainVis .visArea .vis").eq(0).find(".txt3"), 1, {width:319, delay:1.3, ease:Power2.easeOut});
	TweenMax.to($(".mainVis .visArea .vis").eq(0).find(".txt4"), 1, {width:319, delay:1.7, ease:Power2.easeOut});
	TweenMax.to($(".mainVis .visArea .vis").eq(0).find(".btn"), 1, {width:319, delay:2.1, ease:Power2.easeOut});
	TweenMax.to($(".mainVis .visIndi a").eq(0).find(".bar"), 3, {width:"100%", delay:0.5, ease:Power0.easeOut});

	var mainVisNum = 0 , rollNum;
	$(".mainVis .visIndi a").each(function(i){
		$(this).click(function(){
			$(".mainVis .visIndi a").eq(mainVisNum).removeClass("on");
			TweenMax.to($(".mainVis .visIndi a").eq(mainVisNum).find(".bar"), 0, {width:0, ease:Power0.easeOut});
			TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum), 1, {left:"-100%", ease:Power2.easeOut});
			mainVisNum = i;
			rollNum = i;
			$(".mainVis .visIndi a").eq(mainVisNum).addClass("on");
			TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum), 0, {left:"100%", ease:Power2.easeOut});
			TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt1"), 0, {width:0, ease:Power2.easeOut});
			TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt2"), 0, {width:0, ease:Power2.easeOut});
			TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt3"), 0, {width:0, ease:Power2.easeOut});
			TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt4"), 0, {width:0, ease:Power2.easeOut});
			TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".btn"), 0, {width:0, ease:Power2.easeOut});
			TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum), 1, {left:"0", ease:Power2.easeOut, onComplete:function(){
				TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt1"), 1, {width:269, delay:0.5, ease:Power2.easeOut});
				TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt2"), 1, {width:522, delay:0.9, ease:Power2.easeOut});
				TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt3"), 1, {width:319, delay:1.3, ease:Power2.easeOut});
				TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt4"), 1, {width:319, delay:1.7, ease:Power2.easeOut});
				TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".btn"), 1, {width:319, delay:2.1, ease:Power2.easeOut});
				TweenMax.to($(".mainVis .visIndi a").eq(mainVisNum).find(".bar"), 3, {width:"100%", delay:0.5, ease:Power0.easeOut});
			}});
		});
	});
}