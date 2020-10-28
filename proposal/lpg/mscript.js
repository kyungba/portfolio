$(function(){
	var visualInterval, visualTime = 24000;
	visualInterval = setInterval(function(){
		TweenMax.to($(".visual2"), .8, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".mainV .visual img"), 0, {scale:1.2, ease:Power3.easeOut});
		TweenMax.to($(".mainV .visual img"), 8, {scale:1, ease:Power3.easeOut});
		clearInterval(visualInterval);
	}, visualTime);

	TweenMax.to($('.con0 .txt1'), 0, {top:220, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con0 .txt2'), 0, {top:275, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con0 .btpack'), 0, {top:354, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con1 .rolling .inner .txt1'), 0, {right:-23, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con1 .rolling .inner .txt2'), 0, {right:-31, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con1 .rolling .inner .bt'), 0, {right:50, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con2 .tit'), 0, {top:50, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con2>ul'), 0, {top:134, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con2>div'), 0, {top:483, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con3 .inner .txt1'), 0, {top:202, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con3 .inner .bt1'), 0, {left:360, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con3 .inner .bt2'), 0, {left:497, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con3 .inner .bt3'), 0, {left:673, opacity:0, ease:Power3.easeOut});
	TweenMax.to($('.con3 .inner .img'), 0, {top:395, opacity:0, ease:Power3.easeOut});

	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			gnbScrolled = true;
			console.log($(window).scrollTop());

			if($(window).scrollTop() >= 400 && $(window).scrollTop() < 1300){
				TweenMax.to($('.con0 .txt1'), .8, {top:170, opacity:1, ease:Power3.easeOut});
				TweenMax.to($('.con0 .txt2'), .8, {top:225, opacity:1, delay:.2, ease:Power3.easeOut});
				TweenMax.to($('.con0 .btpack'), .8, {top:304, opacity:1, delay:.4, ease:Power3.easeOut});
			}else if($(window).scrollTop() >= 1300 && $(window).scrollTop() < 2000){
				TweenMax.to($('.con1 .rolling .inner .txt1'), .8, {right:-73, opacity:1, ease:Power3.easeOut});
				TweenMax.to($('.con1 .rolling .inner .txt2'), .8, {right:19, opacity:1, ease:Power3.easeOut});
				TweenMax.to($('.con1 .rolling .inner .bt'), .8, {right:0, opacity:1, ease:Power3.easeOut});
				
			}else if($(window).scrollTop() >= 2000 && $(window).scrollTop() < 2800){
				TweenMax.to($('.con2 .tit'), .8, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($('.con2>ul'), .8, {top:84, opacity:1, delay:.2, ease:Power3.easeOut});
				TweenMax.to($('.con2>div'), .8, {top:433, opacity:1, delay:.4, ease:Power3.easeOut});
				
			}else if($(window).scrollTop() >= 2800){
				TweenMax.to($('.con3 .inner .txt1'), .8, {top:152, opacity:1, ease:Power3.easeOut});
				TweenMax.to($('.con3 .inner .bt1'), .8, {left:410, opacity:1, delay:.2, ease:Power3.easeOut});
				TweenMax.to($('.con3 .inner .bt2'), .8, {left:547, opacity:1, delay:.3, ease:Power3.easeOut});
				TweenMax.to($('.con3 .inner .bt3'), .8, {left:723, opacity:1, delay:.4, ease:Power3.easeOut});
				TweenMax.to($('.con3 .inner .img'), .8, {top:445, opacity:1, delay:.6, ease:Power3.easeOut});
			}
		}
	});
	

	$(".rChemiDiv .rChemi").css('height', $(window).height());
	$(".rChemiDiv .rChemiLeft").css('height', $(window).height());
	$(".rChemiDiv .rChemi.two .rCheInner2").css('height', $(window).height());

	var curRchemi = 0;
	$(".rChemiDiv .rChemi").css('top', $(window).height());
	$(".rChemiDiv .rChemi").eq(curRchemi).css('top', 0);

	TweenMax.to($(".rChemiDiv .rChemi .rCheInner .txt1"), 0, {top:50, opacity:0, ease:Power3.easeOut});
	TweenMax.to($(".rChemiDiv .rChemi .rCheInner .txt2"), 0, {top:122, opacity:0, ease:Power3.easeOut});
	TweenMax.to($(".rChemiDiv .rChemi .rCheInner .txt3"), 0, {top:198, opacity:0, ease:Power3.easeOut});

	TweenMax.to($(".rChemiDiv .rChemiLeft .rChemiNum a .on"), 0, {opacity:0, ease:Power3.easeOut});
	TweenMax.to($(".rChemiDiv .rChemiLeft .rChemiNum a").eq(curRchemi).find(".on"), 0, {opacity:1, ease:Power3.easeOut});

	TweenMax.to($(".rChemiDiv .rChemiLeft .arrow a").eq(0), .8, {opacity:.3, ease:Power3.easeOut});
	TweenMax.to($(".rChemiDiv .rChemiLeft .arrow a").eq(1), .8, {opacity:1, ease:Power3.easeOut});
	
	$(".mainV .rChemi").click(function(){
		TweenMax.to($(".rChemiDiv"), .8, {left:0, ease:Power3.easeOut, onComplete:function(){
			$("#wrap.main").css('height', $(window).height());
		}});
		

		TweenMax.to($(".rChemiDiv .rChemi.one .rCheInner .txt1"), .8, {top:0, opacity:1, delay:.8, ease:Power3.easeOut});
		TweenMax.to($(".rChemiDiv .rChemi.one .rCheInner .txt2"), .8, {top:95, opacity:1, delay:1, ease:Power3.easeOut});
	});

	$(".rChemiDiv .rChemiLeft .goMain").click(function(){
		curRchemi = 0;
		curRchemiBt = -1;
		$("#wrap.main").css('height', '');
		TweenMax.to($(".rChemiDiv"), .8, {left:'100%', ease:Power3.easeOut, onComplete:function(){
			$(".rChemiDiv .rChemi").css('top', $(window).height());
			$(".rChemiDiv .rChemi").eq(curRchemi).css('top', 0);
			TweenMax.to($(".rChemiDiv .rChemi.one .rCheInner .txt1"), 0, {top:50, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".rChemiDiv .rChemi.one .rCheInner .txt2"), 0, {top:145, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".rChemiDiv .rChemiLeft .rChemiNum a .on"), 0, {opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".rChemiDiv .rChemiLeft .rChemiNum a").eq(curRchemi).find(".on"), 0, {opacity:1, ease:Power3.easeOut});

			TweenMax.to($(".rChemiDiv .rChemi .rCheInner .txt1"), 0, {top:50, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".rChemiDiv .rChemi .rCheInner .txt2"), 0, {top:122, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".rChemiDiv .rChemi .rCheInner .txt3"), 0, {top:198, opacity:0, ease:Power3.easeOut});
		}});

		$(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt1 span").eq(0).css('width', 0);
		$(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt2 span").eq(0).css('width', 0);
		$(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt3 span").eq(0).css('width', 0);
		$(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt4 span").eq(0).css('width', 0);
		TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt1 span").eq(1), 0, {right:30, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt2 span").eq(1), 0, {right:30, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt3 span").eq(1), 0, {right:30, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt4 span").eq(1), 0, {right:30, opacity:0, ease:Power3.easeOut});
	});

	$(".rChemiDiv .rChemiLeft .rChemiNum a").each(function(q){
		$(this).click(function(){
			if(curRchemi != q){
				TweenMax.to($(".rChemiDiv .rChemiLeft .rChemiNum a").eq(curRchemi).find(".on"), .5, {opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".rChemiDiv .rChemi").eq(curRchemi), 1, {top:'-100%', ease:Power3.easeOut});
				curRchemi = q;
				
				TweenMax.to($(".rChemiDiv .rChemiLeft .rChemiNum a").eq(curRchemi).find(".on"), .5, {opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".rChemiDiv .rChemi").eq(curRchemi), 0, {top:'100%', ease:Power3.easeOut});
				TweenMax.to($(".rChemiDiv .rChemi").eq(curRchemi), 1, {top:0, ease:Power3.easeOut});
				if(q == 0){
					TweenMax.to($(".rChemiDiv .rChemi.one .rCheInner .txt1"), 0, {top:50, opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi.one .rCheInner .txt2"), 0, {top:145, opacity:0, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi.one .rCheInner .txt1"), .8, {top:0, opacity:1, delay:.8, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi.one .rCheInner .txt2"), .8, {top:95, opacity:1, delay:.9, ease:Power3.easeOut});

					TweenMax.to($(".rChemiDiv .rChemiLeft .arrow a").eq(0), .8, {opacity:.3, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemiLeft .arrow a").eq(1), .8, {opacity:1, ease:Power3.easeOut});
				}else if(q == 5){
					TweenMax.to($(".rChemiDiv .rChemi .rCheInner .txt1"), 0, {top:50, opacity:0, delay:.5, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi .rCheInner .txt2"), 0, {top:122, opacity:0, delay:.5, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi .rCheInner .txt3"), 0, {top:198, opacity:0, delay:.5, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi").eq(curRchemi).find(".rCheInner .txt1"), .8, {top:0, opacity:1, delay:.8, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi").eq(curRchemi).find(".rCheInner .txt2"), .8, {top:72, opacity:1, delay:.9, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi").eq(curRchemi).find(".rCheInner .txt3"), .8, {top:148, opacity:1, delay:1, ease:Power3.easeOut});

					TweenMax.to($(".rChemiDiv .rChemiLeft .arrow a").eq(1), .8, {opacity:.3, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemiLeft .arrow a").eq(0), .8, {opacity:1, ease:Power3.easeOut});
				}else{
					TweenMax.to($(".rChemiDiv .rChemi .rCheInner .txt1"), 0, {top:50, opacity:0, delay:.5, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi .rCheInner .txt2"), 0, {top:122, opacity:0, delay:.5, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi .rCheInner .txt3"), 0, {top:198, opacity:0, delay:.5, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi").eq(curRchemi).find(".rCheInner .txt1"), .8, {top:0, opacity:1, delay:.8, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi").eq(curRchemi).find(".rCheInner .txt2"), .8, {top:72, opacity:1, delay:.9, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemi").eq(curRchemi).find(".rCheInner .txt3"), .8, {top:148, opacity:1, delay:1, ease:Power3.easeOut});

					TweenMax.to($(".rChemiDiv .rChemiLeft .arrow a").eq(1), .8, {opacity:1, ease:Power3.easeOut});
					TweenMax.to($(".rChemiDiv .rChemiLeft .arrow a").eq(0), .8, {opacity:1, ease:Power3.easeOut});
				}
			}
		})
	});
	
	var curRchemiBt = -1;
	$(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt1 span").eq(0).css('width', 0);
	$(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt2 span").eq(0).css('width', 0);
	$(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt3 span").eq(0).css('width', 0);
	$(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt4 span").eq(0).css('width', 0);

	TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt1 span").eq(1), 0, {right:30, opacity:0, ease:Power3.easeOut});
	TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt2 span").eq(1), 0, {right:30, opacity:0, ease:Power3.easeOut});
	TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt3 span").eq(1), 0, {right:30, opacity:0, ease:Power3.easeOut});
	TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt4 span").eq(1), 0, {right:30, opacity:0, ease:Power3.easeOut});

	$(".rChemiDiv .rChemi.two .rCheInner2 a").each(function(q){
		$(this).click(function(){
			TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt1 span").eq(0), .8, {width:0, ease:Power3.easeOut});
			TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt2 span").eq(0), .8, {width:0, ease:Power3.easeOut});
			TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt3 span").eq(0), .8, {width:0, ease:Power3.easeOut});
			TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt4 span").eq(0), .8, {width:0, ease:Power3.easeOut});

			TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt1 span").eq(1), .8, {right:30, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt2 span").eq(1), .8, {right:30, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt3 span").eq(1), .8, {right:30, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt4 span").eq(1), .8, {right:30, opacity:0, ease:Power3.easeOut});
			curRchemiBt = q;
			if(q == 0){
				TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt1 span").eq(0), .8, {width:139, ease:Power3.easeOut});
				TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt1 span").eq(1), .8, {right:0, opacity:1, delay:.6, ease:Power3.easeOut});
			}else if(q == 1){
				TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt2 span").eq(0), .8, {width:159, ease:Power3.easeOut});
				TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt2 span").eq(1), .8, {right:0, opacity:1, delay:.6, ease:Power3.easeOut});
			}else if(q == 2){
				TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt3 span").eq(0), .8, {width:330, ease:Power3.easeOut});
				TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt3 span").eq(1), .8, {right:0, opacity:1, delay:.6, ease:Power3.easeOut});
			}else if(q == 3){
				TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt4 span").eq(0), .8, {width:422, ease:Power3.easeOut});
				TweenMax.to($(".rChemiDiv .rChemi.two .rCheInner2 .rChemi_contxt4 span").eq(1), .8, {right:0, opacity:1, delay:.6, ease:Power3.easeOut});
			}
			
		})
	});

	var curGnb = false;


	$(".header .gnb a").click(function(){
		if(curGnb == false){
			$(".twoD").stop().slideDown(350);
			curGnb = true;
		}else if(curGnb == true){
			$(".twoD").stop().slideUp(350);
			curGnb = false;
		}
	});

	TweenMax.to($(".con0 .btpack a .on"), 0, {opacity:0, ease:Power3.easeOut});
	TweenMax.to($(".con0 .btpack a").eq(0).find(".on"), 0, {opacity:1, ease:Power3.easeOut});
	TweenMax.to($(".con0 .bg1"), 0, {opacity:1, ease:Power3.easeOut});
	TweenMax.to($(".con0 .bg2"), 0, {opacity:0, ease:Power3.easeOut});
	TweenMax.to($(".con0 .bg3"), 0, {opacity:0, ease:Power3.easeOut});

	var curCon0 = 0;
	$(".con0 .btpack a").each(function(q){
		$(this).click(function(){
			TweenMax.to($(".con0 .btpack a").eq(curCon0).find(".on"), .3, {opacity:0, ease:Power3.easeOut});
			if(curCon0 == 0){
				TweenMax.to($(".con0 .btpack a").eq(curCon0).find(".arrow"), .3, {opacity:0, left:70, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg1"), 1, {opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg2"), 1, {opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg3"), 1, {opacity:0, ease:Power3.easeOut});
			}else if(curCon0 == 1){
				TweenMax.to($(".con0 .btpack a").eq(curCon0).find(".arrow"), .3, {opacity:0, left:33, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg1"), 1, {opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg2"), 1, {opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg3"), 1, {opacity:0, ease:Power3.easeOut});
			}else if(curCon0 == 2){
				TweenMax.to($(".con0 .btpack a").eq(curCon0).find(".arrow"), .3, {opacity:0, left:116, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg1"), 1, {opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg2"), 1, {opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg3"), 1, {opacity:1, ease:Power3.easeOut});
			}
			
			curCon0 = q;

			TweenMax.to($(".con0 .btpack a").eq(curCon0).find(".on"), .3, {opacity:1, ease:Power3.easeOut});
			if(curCon0 == 0){
				TweenMax.to($(".con0 .btpack a").eq(curCon0).find(".arrow"), .3, {opacity:1, left:90, delay:.2, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg1"), 1, {opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg2"), 1, {opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg3"), 1, {opacity:0, ease:Power3.easeOut});
			}else if(curCon0 == 1){
				TweenMax.to($(".con0 .btpack a").eq(curCon0).find(".arrow"), .3, {opacity:1, left:53, delay:.2, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg1"), 1, {opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg2"), 1, {opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg3"), 1, {opacity:0, ease:Power3.easeOut});
			}else if(curCon0 == 2){
				TweenMax.to($(".con0 .btpack a").eq(curCon0).find(".arrow"), .3, {opacity:1, left:136, delay:.2, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg1"), 1, {opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg2"), 1, {opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".con0 .bg3"), 1, {opacity:1, ease:Power3.easeOut});
			}
		});
	});
	$(".con0 .btpack").mouseleave(function(){
		TweenMax.to($(".con0 .btpack a").eq(0).find(".arrow"), .3, {opacity:0, left:70, ease:Power3.easeOut});
		TweenMax.to($(".con0 .btpack a").eq(1).find(".arrow"), .3, {opacity:0, left:33, ease:Power3.easeOut});
		TweenMax.to($(".con0 .btpack a").eq(2).find(".arrow"), .3, {opacity:0, left:116, ease:Power3.easeOut});
	})
	
	var curCon1 = 0;
	TweenMax.to($(".con1 .rolling .img2 .on"), 0, {opacity:0, ease:Power3.easeOut});
	$(".con1 .rolling").each(function(q){
		$(this).find(".rBt").hover(function(){
			if(q == 0){
				TweenMax.to($(".con1 .rolling").eq(0).find(".inner .linePoint"), 1, {right:-385, ease:Power3.easeOut});	
				TweenMax.to($(".con1 .rolling").eq(0).find(".img2 .on"), .8, {opacity:1, ease:Power3.easeIn});
			}else if(q == 1){
				TweenMax.to($(".con1 .rolling").eq(1).find(".inner .linePoint"), 1, {right:-557, ease:Power3.easeOut});	
				TweenMax.to($(".con1 .rolling").eq(1).find(".img2 .on"), .8, {opacity:1, ease:Power3.easeIn});
			}
		}, function(){
			if(q == 0){
				TweenMax.to($(".con1 .rolling").eq(0).find(".inner .linePoint"), 1, {right:239, ease:Power3.easeOut});	
				TweenMax.to($(".con1 .rolling").eq(0).find(".img2 .on"), .8, {opacity:0, ease:Power3.easeOut});	
			}else if(q == 1){
				TweenMax.to($(".con1 .rolling").eq(1).find(".inner .linePoint"), 1, {right:239, ease:Power3.easeOut});	
				TweenMax.to($(".con1 .rolling").eq(1).find(".img2 .on"), .8, {opacity:0, ease:Power3.easeOut});	
			}
		});

		$(this).find(".rBt").click(function(){
			TweenMax.to($(".con1 .rolling").eq(curCon1), 1, {left:"-100%", ease:Power3.easeOut});
			curCon1++;
			if(curCon1 > 1){
				curCon1 = 0;
			}
			TweenMax.to($(".con1 .rolling").eq(curCon1), 0, {left:"100%", ease:Power3.easeOut});
			TweenMax.to($(".con1 .rolling").eq(curCon1), 1, {left:0, ease:Power3.easeOut});

			if(curCon1 == 1){
				TweenMax.to($(".con1 .rolling").eq(1).find(".inner .txt1"), 0, {right:-33, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".con1 .rolling").eq(1).find(".inner .txt2"), 0, {right:-76, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".con1 .rolling").eq(1).find(".inner .bt"), 0, {right:50, opacity:0, ease:Power3.easeOut});

				TweenMax.to($(".con1 .rolling").eq(1).find(".inner .txt1"), .8, {right:-83, opacity:1, delay:.7, ease:Power3.easeOut});
				TweenMax.to($(".con1 .rolling").eq(1).find(".inner .txt2"), .8, {right:-26, opacity:1, delay:.7, ease:Power3.easeOut});
				TweenMax.to($(".con1 .rolling").eq(1).find(".inner .bt"), .8, {right:0, opacity:1, delay:.7, ease:Power3.easeOut});
			}else if(curCon1 == 0){

				TweenMax.to($(".con1 .rolling").eq(0).find(".inner .txt1"), 0, {right:-23, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".con1 .rolling").eq(0).find(".inner .txt2"), 0, {right:-31, opacity:0, ease:Power3.easeOut});
				TweenMax.to($(".con1 .rolling").eq(0).find(".inner .bt"), 0, {right:50, opacity:0, ease:Power3.easeOut});

				TweenMax.to($(".con1 .rolling").eq(0).find(".inner .txt1"), .8, {right:-73, opacity:1, delay:.7, ease:Power3.easeOut});
				TweenMax.to($(".con1 .rolling").eq(0).find(".inner .txt2"), .8, {right:19, opacity:1, delay:.7, ease:Power3.easeOut});
				TweenMax.to($(".con1 .rolling").eq(0).find(".inner .bt"), .8, {right:0, opacity:1, delay:.7, ease:Power3.easeOut});

			}
		})
	});

	TweenMax.to($(".con2>ul li a").eq(0).find(".on"), 0, {opacity:0, ease:Power3.easeOut});
	$(".con2>ul li a").eq(0).hover(function(){
		TweenMax.to($(".con2>ul li a").eq(0).find(".on"), .5, {opacity:1, ease:Power3.easeOut});
	}, function(){
		TweenMax.to($(".con2>ul li a").eq(0).find(".on"), .5, {opacity:0, ease:Power3.easeOut});		
	})
	

});
