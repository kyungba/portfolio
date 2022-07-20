$(function() {

	var rightPx = 0;
	var bottomPx = 0;
	$(window).resize(function(){
		rightPx = $(window).width() - 210;
		bottomPx = $(window).height() - 420;
		TweenMax.to($("#clip"), 0.5, {right:160, bottom:80, width:175, height:230});
		$(".visualDiv .visual .visualClip").css('clip','rect(0 0 0 0)');
		/*
		$(".tabContent1 .scrollDiv .title2").css("left",$("#wrap").offset().left + 120);
		$(".tabContent2 .scrollDiv .title2").css("right",$("#wrap").offset().left + 160);
		$(".tabContent3 .scrollDiv .title2").css("left",$("#wrap").offset().left + 280);*/
	});$(window).resize();

	TweenMax.to($(".visualDiv .visual .txtArea .txt1 img"), 0.8, {top:-28, delay:3, ease:Power3.easeOut});
	TweenMax.to($(".visualDiv .visual .txtArea .txt2 img"), 0.8, {top:0, delay:3, ease:Power3.easeOut});
	
	setTimeout(function () {
		TweenMax.to($(".visualClip"), 0, {clip:'rect('+$("#clip").offset().top+'px '+($("#clip").outerWidth() + $("#clip").offset().left - $("#wrap").offset().left)+'px '+($("#clip").outerHeight() + $("#clip").offset().top)+'px '+($("#clip").offset().left - $("#wrap").offset().left)+'px)', opacity:1})
		$(window).on("mousemove", function (e) {
			TweenMax.to($("#clip"), 0, {width:$(window).width() - e.pageX, height:$(window).height() - e.pageY + 50});
			TweenMax.to($(".visualClip"), 0, {clip:'rect('+$("#clip").offset().top+'px '+($("#clip").outerWidth() + $("#clip").offset().left - $("#wrap").offset().left)+'px '+($("#clip").outerHeight() + $("#clip").offset().top)+'px '+($("#clip").offset().left - $("#wrap").offset().left)+'px)'})

			if($("#clip").width() > 275 && $("#clip").height() > 295){
				TweenMax.to($("#clip .clipText"), 0.8, {opacity:1, ease:Power3.easeOut});
			}else{
				TweenMax.to($("#clip .clipText"), 0.8, {opacity:0, ease:Power3.easeOut});
			}
		});
	}, 2000);
	
	var mainN = 0;
	var mainInterval = setInterval(function(){
		$(".visualDiv .visual").eq(mainN).removeClass("on");
		TweenMax.to($(".visualDiv .visual").eq(mainN), 0, {opacity:0});
		mainN ++;
		if(mainN > 3) mainN = 0;
		$(".visualDiv .visual").eq(mainN).addClass("on");
		TweenMax.to($(".visualDiv .visual").eq(mainN), 0, {opacity:1});
	}, 2000);
	
	$("#clip").click(function(){
		$(this).addClass("off");
		TweenMax.to($(this), 1, {top:145, left:40, width:1880, height:$(window).height() - 145, ease:Power3.easeOut});
		$(".visualDiv").addClass("on");
		$(".visualDiv .txtArea").css("opacity","0");
		$(".tabContent1").css("display","block");
		$(".tabContent1").css("z-index","3");
		$(".indicator a").eq(0).addClass("on");
		TweenMax.to($(".tabContent1 .scrollDiv .title"), 0.6, {top:180, opacity:1, delay:0.7, ease:Power3.easeOut});
		TweenMax.to($(".tabContent1 .scrollDiv .con1 .txtArea"), 0.6, {top:580, opacity:1, delay:0.8, ease:Power3.easeOut});
		TweenMax.to($(".tabContent1 .scrollDiv .con1 .imgArea .img1"), 0.6, {top:0, opacity:1, delay:0.9, ease:Power3.easeOut});
		TweenMax.to($(".tabContent1 .scrollDiv .con1 .imgArea .img2"), 0.6, {top:205, opacity:1, delay:1, ease:Power3.easeOut});
		TweenMax.to($(".tabContent1 .scrollDiv .con1 .imgArea .img3"), 1, {top:-160, opacity:1, delay:1.1, ease:Power3.easeOut});
		$(window).off("mousemove");
		
	
		/*
		$(window).on("mousemove", function(e){
			if(e.pageX > $(window).width() / 2){
				TweenMax.to($(".tabContent1"), 0, {left: 40 - ($(window).width() - e.pageX)/200});
				TweenMax.to($("#clip"), 0, {left: 40 - ($(window).width() - e.pageX)/200});

				TweenMax.to($(".tabContent2"), 0, {right: -($(window).width() - e.pageX)/200});

				TweenMax.to($(".tabContent3"), 0, {right: ($(window).width() - e.pageX)/200});
			}else{
				TweenMax.to($(".tabContent1"), 0, {left: 40 + ($(window).width() - e.pageX)/200});
				TweenMax.to($("#clip"), 0, {left: 40 + ($(window).width() - e.pageX)/200});

				TweenMax.to($(".tabContent2"), 0, {right:($(window).width() - e.pageX)/200});
				
				TweenMax.to($(".tabContent3"), 0, {right: -($(window).width() - e.pageX)/200});
			}
		});
		*/
	});

	$(".tabContent .scrollDiv .con1 .txtArea").hover(function(){
		$(this).addClass("on");
	},function(){
		$(this).removeClass("on");
	});
	$(".tabContent .scrollDiv .con1 .img").hover(function(){
		$(this).parents(".con1").find(".txtArea").addClass("on");
	},function(){
		$(this).parents(".con1").find(".txtArea").removeClass("on");
	});
	var motionInterval;
	$(".tabContent .scrollDiv .con3").hover(function(){
		$(this).find(".txtArea").addClass("on");
		 motionInterval = setInterval(function(){
			if(!$(".tabContent1 .scrollDiv .con3").hasClass("on")){
				$(".tabContent1 .scrollDiv .con3").addClass("on");
				$(".tabContent1 .scrollDiv .con3 .imgArea img").eq(0).stop(true, true).fadeOut(300);
				$(".tabContent1 .scrollDiv .con3 .imgArea img").eq(1).stop(true, true).fadeIn(300);
			}else{
				$(".tabContent1 .scrollDiv .con3").removeClass("on");
				$(".tabContent1 .scrollDiv .con3 .imgArea img").eq(1).stop(true, true).fadeOut(300);
				$(".tabContent1 .scrollDiv .con3 .imgArea img").eq(0).stop(true, true).fadeIn(300);
			}
		}, 2000);
	},function(){
		$(this).find(".txtArea").removeClass("on");
		clearInterval(motionInterval);
	});
	
	$(".indicator .tabs a").each(function(q){
		$(this).click(function(){
			$(".indicator .tabs a").removeClass("on");
			$(this).addClass("on");
		});
	});

	$(".indicator .tabs a").eq(1).click(function(){
		$(".tabContent2").show();
		$(".tabContent2").css("z-index","3");
		$("#clip").css("background","rgba(113, 183, 216, 0.5)");
		TweenMax.to($(".tabContent2"), 0.6, {right:0, ease:Power3.easeOut});
		TweenMax.to($(".tabContent1 .scrollDiv"), 0.6, {opacity:0.05, ease:Power3.easeOut, onComplete:function(){
			$(".tabContent1 .scrollDiv").css("overflow","hidden");
		}});

		TweenMax.to($(".tabContent2 .scrollDiv .title"), 0.6, {top:150, opacity:1, delay:0.6, ease:Power3.easeOut});
		TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .type").eq(0), 0.6, {top:0, opacity:1, delay:0.7, ease:Power3.easeOut});
		TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .img").eq(0), 0.6, {top:46, opacity:1, delay:0.8, ease:Power3.easeOut});
		TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .tit").eq(0), 0.6, {top:770, opacity:1, delay:0.9, ease:Power3.easeOut});
		TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .txt").eq(0), 0.6, {top:770, opacity:1, delay:1, ease:Power3.easeOut});
		TweenMax.to($(".tabContent2 .scrollDiv .rollBtn"), 0.6, {top:1140, opacity:1, delay:1.1, ease:Power3.easeOut});
		TweenMax.to($(".contentName p").eq(0), 0.6, {opacity:1, ease:Power3.easeOut});
	});

	$(".indicator .tabs a").eq(2).click(function(){
		$(".tabContent3").show();
		$(".tabContent3").css("z-index","3");
		TweenMax.to($(".tabContent3"), 0.6, {right:80, ease:Power3.easeOut});
		TweenMax.to($(".tabContent2 .scrollDiv"), 0.6, {opacity:0.05, ease:Power3.easeOut, onComplete:function(){
			$(".tabContent2 .scrollDiv").css("overflow","hidden");
		}});

		TweenMax.to($(".tabContent3 .scrollDiv .title"), 0.6, {top:130, opacity:1, delay:0.6, ease:Power3.easeOut});
		TweenMax.to($(".tabContent3 .scrollDiv .con1 .searchArea"), 0.6, {top:340, opacity:1, delay:0.7, ease:Power3.easeOut});
		TweenMax.to($(".tabContent3 .scrollDiv .con1 .tabs"), 0.6, {top:0, opacity:1, delay:0.8, ease:Power3.easeOut});
		TweenMax.to($(".tabContent3 .scrollDiv .con1 .tabDiv"), 0.6, {top:70, opacity:1, delay:0.8, ease:Power3.easeOut});

		TweenMax.to($(".tabContent3 .scrollDiv .tabCont .rollD .roll .img").eq(0), 0.6, {top:0, opacity:1, delay:0.9, ease:Power3.easeOut});
		TweenMax.to($(".tabContent3 .scrollDiv .tabCont .rollD .roll .tit").eq(0), 0.6, {top:0, opacity:1, delay:1, ease:Power3.easeOut});
		TweenMax.to($(".tabContent3 .scrollDiv .tabCont .rollD .roll .txt").eq(0), 0.6, {top:0, opacity:1, delay:1.1, ease:Power3.easeOut});
		TweenMax.to($(".contentName p").eq(1), 0.6, {opacity:1, ease:Power3.easeOut});
	});

	var con2rollN = 0;
	$(".tabContent2 .scrollDiv .rollBtn a").each(function(index){
		$(this).click(function(){
			if(!index){
				$(".tabContent2 .scrollDiv .con1 .rollDiv .roll").eq(con2rollN).stop(true, true).fadeOut(300);
				con2rollN --;
				if(con2rollN < 0) con2rollN = 2;
				$(".tabContent2 .scrollDiv .con1 .rollDiv .roll").eq(con2rollN).stop(true, true).fadeIn(300);
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .type").eq(con2rollN), 0, {top:100, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .img").eq(con2rollN), 0, {top:146, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .tit").eq(con2rollN), 0, {top:870, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .txt").eq(con2rollN), 0, {top:870, opacity:0, ease:Power3.easeOut});

				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .type").eq(con2rollN), 0.6, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .img").eq(con2rollN), 0.6, {top:46, opacity:1, delay:0.5, ease:Power3.easeOut});
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .tit").eq(con2rollN), 0.6, {top:770, opacity:1, delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .txt").eq(con2rollN), 0.6, {top:770, opacity:1, delay:0.7, ease:Power3.easeOut});
			}else{
				$(".tabContent2 .scrollDiv .con1 .rollDiv .roll").eq(con2rollN).stop(true, true).fadeOut(300);
				con2rollN ++;
				if(con2rollN == 3) con2rollN = 0;
				$(".tabContent2 .scrollDiv .con1 .rollDiv .roll").eq(con2rollN).stop(true, true).fadeIn(300);
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .type").eq(con2rollN), 0, {top:100, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .img").eq(con2rollN), 0, {top:146, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .tit").eq(con2rollN), 0, {top:870, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .txt").eq(con2rollN), 0, {top:870, opacity:0, ease:Power3.easeOut});

				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .type").eq(con2rollN), 0.6, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .img").eq(con2rollN), 0.6, {top:46, opacity:1, delay:0.5, ease:Power3.easeOut});
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .tit").eq(con2rollN), 0.6, {top:770, opacity:1, delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".tabContent2 .scrollDiv .rollDiv .roll .txt").eq(con2rollN), 0.6, {top:770, opacity:1, delay:0.7, ease:Power3.easeOut});
			}
		});
	});

	$(".tabContent3 .scrollDiv .con1 .tabEtc .tabDiv .list").each(function(q){
		$(this).mouseenter(function(){
			if(!$(this).hasClass("on")){
				$(".tabContent3 .scrollDiv .con1 .tabEtc .tabDiv .list").removeClass("on");
				$(".tabContent3 .scrollDiv .con1 .tabCont .roll").stop(true, true).fadeOut(300);
				
				$(this).addClass("on");
				$(".tabContent3 .scrollDiv .con1 .tabCont .roll").eq(q).stop(true, true).fadeIn(300);
				TweenMax.to($(".tabContent3 .scrollDiv .con1 .tabCont .roll .tit").eq(q), 0, {top:100, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".tabContent3 .scrollDiv .con1 .tabCont .roll .txt").eq(q), 0, {top:100, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".tabContent3 .scrollDiv .con1 .tabCont .roll .tit").eq(q), 0.6, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});
				TweenMax.to($(".tabContent3 .scrollDiv .con1 .tabCont .roll .txt").eq(q), 0.6, {top:0, opacity:1, delay:0.4, ease:Power3.easeOut});
			}
		});
	});

	$(".tabContent3 .scrollDiv .con1 .tabEtc .tabs a").eq(0).click(function(){
		if(!$(this).hasClass("on")){
			$(".tabContent3 .scrollDiv .con1 .tabEtc .tabs a").eq(1).removeClass("on");
			$(".tabContent3 .scrollDiv .con1 .tabEtc .tabs a").eq(0).addClass("on");
			$(".tabContent3 .scrollDiv .con1 .tabEtc .tabDiv").stop(true, true).slideDown(300);
			$(".tabContent3 .scrollDiv .con1 .tabCont").eq(1).stop(true, true).fadeOut(300);
			$(".tabContent3 .scrollDiv .con1 .tabCont").eq(0).stop(true, true).fadeIn(300);
		}
	});
	$(".tabContent3 .scrollDiv .con1 .tabEtc .tabs a").eq(1).click(function(){
		if(!$(this).hasClass("on")){
			$(".tabContent3 .scrollDiv .con1 .tabEtc .tabs a").eq(0).removeClass("on");
			$(".tabContent3 .scrollDiv .con1 .tabEtc .tabs a").eq(1).addClass("on");
			$(".tabContent3 .scrollDiv .con1 .tabEtc .tabDiv").stop(true, true).slideUp(300);
			$(".tabContent3 .scrollDiv .con1 .tabCont").eq(0).stop(true, true).fadeOut(300);
			$(".tabContent3 .scrollDiv .con1 .tabCont").eq(1).stop(true, true).fadeIn(300);
			$(".tabContent3 .scrollDiv .con1 .tabCont .brandList .list").each(function(q){
				TweenMax.to($(this), 0.6, {top:0, opacity:1, delay:0.3 + q*0.1, ease:Power3.easeOut});
			});
		}
	});

	$(".indicator .plus").click(function(){
		TweenMax.to($(".quickMenu"), 0, {className:"+=on", delay:0.3});
		$(".header .search").css("right","-80px");
		$(".indicator .tabs").css("left","80px");
		$(".quickMenu").css("height","382px");
	});

	$(".quickMenu .two").click(function(){
		$(".quickPop").stop(true, true).fadeIn(300);
		$(".dimdBg").stop(true, true).fadeIn(300);
	});
	$(".quickPop .step1").click(function(){
		$(".quickPop .step1").stop(true, true).fadeOut(300);
	});
	$(".quickPop .step2").click(function(){
		$(".quickPop").stop(true, true).fadeOut(300);
		$(".dimdBg").stop(true, true).fadeOut(300);
	});
	$(".quickMenu .xBtn").click(function(){
		$(".quickMenu").removeClass("on");
		$(".header .search").css("right","0");
		$(".indicator .tabs").css("left","0");
		$(".quickMenu").css("height","0");
	});

	$(".gnb").hover(function(){
		$(".header").addClass("on");
	},function(){
		$(".header").removeClass("on");
	});
	
	var scrollMove = false;
	$(".tabContent3 .scrollDiv .con4").mouseenter(function(){
		scrollMove = true;
	});

	$(".contentName p").eq(0).click(function(){
		TweenMax.to($(".tabContent3"), 0.6, {right:"-100%", ease:Power3.easeOut});
		TweenMax.to($(".tabContent2"), 0.6, {right:"-100%", delay:0.2, ease:Power3.easeOut});
		/*
		TweenMax.to($(".tabContent2 .scrollDiv .title2"), 0.6, {opacity:"0", ease:Power3.easeOut});
		TweenMax.to($(".tabContent3 .scrollDiv .title2"), 0.6, {opacity:"0", ease:Power3.easeOut});*/
		TweenMax.to($(".contentName p"), 0.6, {opacity:"0", ease:Power3.easeOut});
		TweenMax.to($(".tabContent1 .scrollDiv"), 0.6, {opacity:1, overflowY:"auto", delay:0.4, ease:Power3.easeOut});
		TweenMax.to($(".tabContent1 .scrollDiv"), 0.2, {scrollTop:0});
	});

	$(".tabContent1 .scrollDiv").scroll(function(){
		/*
		if($(".tabContent1 .scrollDiv").scrollTop() > 180 + $(".tabContent1 .scrollDiv .title").height()){
			TweenMax.to($(".tabContent1 .scrollDiv .title2"), 0.6, {top:220, opacity:1, ease:Power3.easeOut});
		}else{
			TweenMax.to($(".tabContent1 .scrollDiv .title2"), 0.6, {top:140, opacity:0, ease:Power3.easeOut});
		}*/
		if($(".tabContent1 .scrollDiv").scrollTop() < $(".tabContent1 .scrollDiv .con2").position().top - 300){
			$(".tabContent1 .scrollDiv .con2 .video").css("width","40%");
		}
		if($(".tabContent1 .scrollDiv").scrollTop() > $(".tabContent1 .scrollDiv .con2").position().top - 300){
			if(!$(".tabContent1 .scrollDiv .con2 .video").hasClass("on")){
				$(".tabContent1 .scrollDiv .con2 .video").addClass("on");
				document.getElementById("video2").play();
			}
			$(".tabContent1 .scrollDiv .con2 .video").css("width","50%");
		}
		if($(".tabContent1 .scrollDiv").scrollTop() > $(".tabContent1 .scrollDiv .con2").position().top - 100){
			$(".tabContent1 .scrollDiv .con2 .video").css("width","60%");
		}
		if($(".tabContent1 .scrollDiv").scrollTop() > $(".tabContent1 .scrollDiv .con2").position().top + 100){
			$(".tabContent1 .scrollDiv .con2 .video").css("width","70%");
		}
		if($(".tabContent1 .scrollDiv").scrollTop() > $(".tabContent1 .scrollDiv .con2").position().top + 300){
			$(".tabContent1 .scrollDiv .con2 .video").css("width","80%");
		}
		if($(".tabContent1 .scrollDiv").scrollTop() > $(".tabContent1 .scrollDiv .con2").position().top + 500){
			$(".tabContent1 .scrollDiv .con2 .video").css("width","90%");
		}
		if($(".tabContent1 .scrollDiv").scrollTop() > $(".tabContent1 .scrollDiv .con2").position().top + 700){
			$(".tabContent1 .scrollDiv .con2 .video").css("width","100%");
		}


		if($(".tabContent1 .scrollDiv").scrollTop() > $(".tabContent1 .scrollDiv .con3").position().top + 100){
			TweenMax.to($(".tabContent1 .scrollDiv .con3 .imgArea"), 1, {width:1240, ease:Power3.easeOut});
		}

		if($(".tabContent1 .scrollDiv").scrollTop() > $(".tabContent1 .scrollDiv .con4").position().top + 150){
			if(!$(".tabContent1 .scrollDiv .con4 .listDiv").hasClass("on")){
				$(".tabContent1 .scrollDiv .con4 .listDiv").addClass("on")
				$(".tabContent1 .scrollDiv .con4 .listDiv .list").each(function(q){
					TweenMax.to($(this).find("span"), 0.7, {height:"100%", delay:0.15*q, ease:Power3.easeOut})
				});
			}
		}
	});

	$(".tabContent2 .scrollDiv").scroll(function(){
		/*
		if($(".tabContent2 .scrollDiv").scrollTop() > 150 + $(".tabContent2 .scrollDiv .title").height()){
			TweenMax.to($(".tabContent2 .scrollDiv .title2"), 0.6, {top:140, opacity:1, ease:Power3.easeOut});
		}else{
			TweenMax.to($(".tabContent2 .scrollDiv .title2"), 0.6, {top:100, opacity:0, ease:Power3.easeOut});
		}*/

		if($(".tabContent2 .scrollDiv").scrollTop() > $(".tabContent2 .scrollDiv .con2").position().top - 200){
			TweenMax.to($(".tabContent2 .scrollDiv .con2 .tit"), 0.6, {top:0, opacity:1, ease:Power3.easeOut});
			$(".tabContent2 .scrollDiv .con2 .listDiv .list").each(function(q){
				TweenMax.to($(this), 0.6, {top:0, opacity:1, delay:q*0.1 + 0.1, ease:Power3.easeOut});
			});
		}

		if($(".tabContent2 .scrollDiv").scrollTop() > $(".tabContent2 .scrollDiv .con3").position().top - 100){
			TweenMax.to($(".tabContent2 .scrollDiv .con3 .tag"), 0.6, {top:0, opacity:1, ease:Power3.easeOut});
		}
		if($(".tabContent2 .scrollDiv").scrollTop() > $(".tabContent2 .scrollDiv .con3").position().top + 200){
			$(".tabContent2 .scrollDiv .con3 .listDiv .list").each(function(q){
				TweenMax.to($(this).find(".img"), 0.6, {height:362, delay:q*0.1 + 0.1, ease:Power3.easeOut});
			});
		}
	});

	$(".tabContent3 .scrollDiv").scroll(function(){
		/*
		if($(".tabContent3 .scrollDiv").scrollTop() > 130 + $(".tabContent3 .scrollDiv .title").height()){
			TweenMax.to($(".tabContent3 .scrollDiv .title2"), 0.6, {top:250, opacity:1, ease:Power3.easeOut});
		}else{
			TweenMax.to($(".tabContent3 .scrollDiv .title2"), 0.6, {top:180, opacity:0, ease:Power3.easeOut});
		}*/

		if($(".tabContent3 .scrollDiv").scrollTop() > $(".tabContent3 .scrollDiv .con2").position().top - 200){
			TweenMax.to($(".tabContent3 .scrollDiv .con2 .tit"), 0.6, {top:0, opacity:1, ease:Power3.easeOut});
			$(".tabContent3 .scrollDiv .con2 .listDiv .list").each(function(q){
				if(q == 0){
					TweenMax.to($(this).find("span"), 0.6, {height:794, delay:q*0.1 + 0.1, ease:Power3.easeOut});
				}else{
					TweenMax.to($(this).find("span"), 0.6, {height:380, opacity:1, delay:q*0.1 + 0.1, ease:Power3.easeOut});
				}
			});
		}

		if($(".tabContent3 .scrollDiv").scrollTop() > $(".tabContent3 .scrollDiv .con3").position().top - 200){
			TweenMax.to($(".tabContent3 .scrollDiv .con3 .tit1"), 0.6, {top:0, opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".tabContent3 .scrollDiv .con3 .txt"), 0.6, {top:0, opacity:1, delay:0.2, ease:Power3.easeOut});
		}
	});
	

	$(".tabContent3").on('mousewheel DOMMouseScroll', function(e) {
		if(scrollMove){
			var E = e.originalEvent;
			delta = E.wheelDelta;
			deltaY = E.deltaY
			if (delta == 120) {
			}else{
				TweenMax.to($(".footer"), 0.6, {bottom:0, ease:Power3.easeOut});
			}
		}
	});
	
	$(".footer").on('mousewheel DOMMouseScroll', function(e) {
		var E = e.originalEvent;
		delta = E.wheelDelta;
		deltaY = E.deltaY
		if (delta == 120) {
			TweenMax.to($(".footer"), 0.6, {bottom:-230, ease:Power3.easeOut});
			scrollMove = false;
		}
	});
	
	$(".tabContent3").on('mousewheel DOMMouseScroll', function(e) {
		if(scrollMove){
			if($(".tabContent3 .scrollDiv").scrollTop() + 1150 == $(".tabContent3 .scrollDiv .con1").outerHeight() + $(".tabContent3 .scrollDiv .con2").outerHeight() + $(".tabContent3 .scrollDiv .con4").outerHeight()){
				console.log("aa");
				var E = e.originalEvent;
				delta = E.wheelDelta;
				deltaY = E.deltaY
				if (delta == 120) {
					console.lg(1)
				}else{
						console.lg(2)
					TweenMax.to($(".footer"), 0.6, {bottom:0, ease:Power3.easeOut});
				}
			}
		}
	});
	
	$(".footer").on('mousewheel DOMMouseScroll', function(e) {
		var E = e.originalEvent;
		delta = E.wheelDelta;
		deltaY = E.deltaY
		if (delta == 120) {
			console.lg(3)
			TweenMax.to($(".footer"), 0.6, {bottom:-230, ease:Power3.easeOut});
			scrollMove = false;
		}else{
			console.lg(4)
		}
	});
});