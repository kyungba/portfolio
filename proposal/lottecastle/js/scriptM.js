$(function () {
	$("#mobileWrap .contents .scrollArea .rollDiv .roll").eq(0).find(".two").click(function(){
		TweenMax.to($("#mobileWrap .contents .scrollArea .rollDiv .roll").eq(0), 0.4, {left:-750, ease:Power3.easeOut});
		TweenMax.to($("#mobileWrap .contents .scrollArea .rollDiv .roll").eq(1), 0.4, {left:0, ease:Power3.easeOut});
	});
	$("#mobileWrap .contents .scrollArea .rollDiv .roll").eq(0).find(".thr").click(function(){
		TweenMax.to($("#mobileWrap .contents .scrollArea .rollDiv .roll").eq(0), 0.4, {left:750, ease:Power3.easeOut});
		TweenMax.to($("#mobileWrap .contents .scrollArea .rollDiv .roll").eq(2), 0.4, {left:0, ease:Power3.easeOut});
	});
	$("#mobileWrap .contents .scrollArea .rollDiv .roll").eq(1).find(".one").click(function(){
		TweenMax.to($("#mobileWrap .contents .scrollArea .rollDiv .roll").eq(1), 0.4, {left:750, ease:Power3.easeOut});
		TweenMax.to($("#mobileWrap .contents .scrollArea .rollDiv .roll").eq(0), 0.4, {left:0, ease:Power3.easeOut});
	});
	$("#mobileWrap .contents .scrollArea .rollDiv .roll").eq(2).find(".one").click(function(){
		TweenMax.to($("#mobileWrap .contents .scrollArea .rollDiv .roll").eq(2), 0.4, {left:-750, ease:Power3.easeOut});
		TweenMax.to($("#mobileWrap .contents .scrollArea .rollDiv .roll").eq(0), 0.4, {left:0, ease:Power3.easeOut});
	});

	$("#mobileWrap .phone .top").click(function(){
		TweenMax.to($(".scrollArea"), 0.5, {scrollTop:0, ease:Power3.easeOut});
	});
})