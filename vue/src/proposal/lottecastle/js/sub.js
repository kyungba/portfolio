$(function(){
		
	if($(".sub1").size() > 0){
		TweenMax.to($(".sub1 .title"), 0.6, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut});
		TweenMax.to($(".sub1 .visual"), 0.6, {top:0, opacity:1, delay:1, ease:Power3.easeOut});
	}

	if($(".sub2").size() > 0){
		TweenMax.to($(".sub2 .indi"), 0.6, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut});
		TweenMax.to($(".sub2 .title"), 0.6, {top:0, opacity:1, delay:0.8, ease:Power3.easeOut});
		TweenMax.to($(".sub2 .search"), 0.6, {top:0, opacity:1, delay:1, ease:Power3.easeOut});
		TweenMax.to($(".sub2 .tab"), 0.6, {top:0, opacity:1, delay:1.2, ease:Power3.easeOut});
		TweenMax.to($(".sub2 .type"), 0.6, {top:0, opacity:1, delay:1.4, ease:Power3.easeOut});
		$(".sub2 .listDiv .list").each(function(q){
			TweenMax.to($(this), 0.6, {top:0, opacity:1, delay:q*0.2 + 1.4, ease:Power3.easeOut});
		});
		TweenMax.to($(".sub2 .btn"), 0.6, {top:0, opacity:1, delay:3.2, ease:Power3.easeOut});
	}
	
	$(window).scroll(function(){
		if($(".sub1").size() > 0){
			if($(window).scrollTop() < 110){
				$(".gnb2").css({"position":"","top":"","left":""})
			}else{
				$(".gnb2").css({"position":"fixed","top":"0","left":$("#wrap").offset().left + 70})
			}

			if($(window).scrollTop() > 400){
				TweenMax.to($(".sub1 .tit"), 0.6, {top:0, opacity:1, ease:Power3.easeOut});
			}
			if($(window).scrollTop() > 600){
				$(".sub1 .listDiv .list").each(function(q){
					TweenMax.to($(this), 0.6, {top:0, opacity:1, delay:q*0.2, ease:Power3.easeOut});
				});
			}
		}

		if($(".sub2").size() > 0){
			if($(window).scrollTop() > 300){
				
			}
		}
	});$(window).scroll();
});