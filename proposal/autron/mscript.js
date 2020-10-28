$(document).ready(function(){
	// 원페이지 스크롤 플러그인
	$('#fullpage').fullpage({
		anchors: ['section1', 'section2', 'section3', 'section4'],
		menu:'#menu',
		scrollOverflow: true,
		scrollingSpeed: 1000,
		resetSliders: true,
		onLeave: function(anchorLink, index){ // move start
			if(index == 3){
				$("#header").addClass("on");
			}else{
				$("#header").removeClass("on");
			}
		},
		afterLoad: function(anchorLink, index){ // move end
			if(index == 2){
				TweenMax.to($(".technology .txt1"), 1, {top:235, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".technology .txt2"), 1, {top:305, opacity:1, delay:0.3, ease:Power3.easeOut});
				TweenMax.to($(".technology .listDiv .list1"), 0.6, {top:0, opacity:1, delay:0.8, ease:Power3.easeOut});
				TweenMax.to($(".technology .listDiv .list2"), 0.6, {top:0, opacity:1, delay:1, ease:Power3.easeOut});
				TweenMax.to($(".technology .listDiv .list3"), 0.6, {top:0, opacity:1, delay:1.2, ease:Power3.easeOut});
				TweenMax.to($(".technology .listDiv .list4"), 0.6, {top:0, opacity:1, delay:1.4, ease:Power3.easeOut});
				TweenMax.to($(".technology .listDiv .list5"), 0.6, {top:0, opacity:1, delay:1.6, ease:Power3.easeOut});
			}else if(index == 3){
				TweenMax.to($(".news .txt1"), 1, {top:180, opacity:1, ease:Power3.easeOut});
				$(".news .listDiv .list").each(function(q){
					if(q < 4){
						TweenMax.to($(".news .listDiv  .list").eq(q), 1, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut});
					}else{
						TweenMax.to($(".news .listDiv  .list").eq(q), 1, {top:283, opacity:1, delay:0.8, ease:Power3.easeOut});
					}
				});
				TweenMax.to($(".news .btn"), 1, {opacity:1, delay:1.2, ease:Power3.easeOut});
			}else if(index == 4){
				TweenMax.to($(".customer .content .txt1"), 2, {width:318, ease:Power3.easeOut});
				TweenMax.to($(".customer .content .txt2"), 1.5, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut});
				$(".customer .content .listDiv .list").each(function(q){
					TweenMax.to($(".customer .content .listDiv .list").eq(q), 0.6, {top:0, opacity:1, delay:0.8 + q*0.3, ease:Power3.easeOut});
				});
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


	// 기술
	$(".technology .listDiv > a").each(function(q){
		$(this).hover(function(){
			TweenMax.to($(this).find("img").eq(0), 0.7, {opacity:0, ease:Power3.easeOut});
			TweenMax.to($(this).find("img").eq(1), 0.7, {opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".technology .bg").find("div").eq(q), 0.7, {display:"block", opacity:1, ease:Power3.easeOut});
		}, function(){
			TweenMax.to($(this).find("img").eq(0), 0.7, {opacity:1, ease:Power3.easeOut});
			TweenMax.to($(this).find("img").eq(1), 0.7, {opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".technology .bg").find("div").eq(q), 0.7, {display:"none", opacity:0, ease:Power3.easeOut});
		});
	});
	
});


function mainVis(){
	TweenMax.to($(".mainVis .visArea .vis").eq(0).find(".txt1").find("img"), 0.6, {top:0, delay:0.5, ease:Power4.easeOut});
	TweenMax.to($(".mainVis .visArea .vis").eq(0).find(".txt2").find("img"), 0.6, {top:0, delay:0.9, ease:Power4.easeOut});
	TweenMax.to($(".mainVis .visArea .vis").eq(0).find(".txt3"), 2, {width:349, delay:1.3, ease:Power4.easeOut});
	TweenMax.to($(".mainVis .visIndi a").eq(0).find(".bar"), 2, {width:"100%", delay:0.5, ease:Power0.easeOut});

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
			TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt1").find("img"), 0, {top:59, ease:Power4.easeOut});
			TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt2").find("img"), 0, {top:59, ease:Power4.easeOut});
			TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt3"), 0, {width:0, ease:Power4.easeOut});
			TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum), 1, {left:"0", ease:Power2.easeOut, onComplete:function(){
				TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt1").find("img"), 0.6, {top:0, delay:0.5, ease:Power4.easeOut});
				TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt2").find("img"), 0.6, {top:0, delay:0.9, ease:Power4.easeOut});
				TweenMax.to($(".mainVis .visArea .vis").eq(mainVisNum).find(".txt3"), 2, {width:349, delay:1.3, ease:Power4.easeOut});
				TweenMax.to($(".mainVis .visIndi a").eq(mainVisNum).find(".bar"), 2, {width:"100%", ease:Power0.easeOut});
			}});
		});
	});
}