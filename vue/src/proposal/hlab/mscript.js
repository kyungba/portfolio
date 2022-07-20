isMove = false;
curRoll = 0;

$(function(){

	//load
	TweenMax.to($(".mainRollDiv .mainRoll").eq(0).find(".txtW p").eq(0), 0.6 ,{left:0, opacity:1, ease:Power3.easeOut});
	TweenMax.to($(".mainRollDiv .mainRoll").eq(0).find(".txtW p").eq(1), 0.6 ,{left:0, opacity:1, delay:0.3, ease:Power3.easeOut});
	TweenMax.to($(".mainRollDiv .mainRoll").eq(0).find(".txtW p").eq(2), 0.6 ,{left:0, opacity:1, delay:0.6, ease:Power3.easeOut});
	TweenMax.to($(".mainRollDiv .mainRoll").eq(0).find(".txtW a"), 0.6 ,{left:0, opacity:1, delay:0.9, ease:Power3.easeOut});
	TweenMax.to($(".mainRollDiv .mainRoll").eq(0).find(".bg"), 1.5 ,{scale:1.1, delay:0.6, ease:Power3.easeOut});
	TweenMax.to($(".mainBoxDiv"), 1.2 ,{top:80, opacity:1, delay:1.4, ease:Power3.easeOut});
	TweenMax.to($('.con1 .con1_list li').eq(0), .8, {top:0, opacity:1, delay:0.9, ease:Power3.easeOut});
	TweenMax.to($('.con1 .con1_list li').eq(1), .8, {top:0, opacity:1, delay:1.2, ease:Power3.easeOut});
	TweenMax.to($('.con1 .con1_list li').eq(2), .8, {top:0, opacity:1, delay:1.5, ease:Power3.easeOut});
	
	
	//scroll
	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			//console.log($(window).scrollTop());

			if($(window).scrollTop() + $(window).height() - 300 >= $(".con1").offset().top){
				TweenMax.to($('.con1 .con1_list li').eq(3), .8, {top:0, opacity:1, delay:0.9, ease:Power3.easeOut});
				TweenMax.to($('.con1 .con1_list li').eq(4), .8, {top:0, opacity:1, delay:1.2, ease:Power3.easeOut});
				TweenMax.to($('.con1 .con1_list li').eq(5), .8, {top:0, opacity:1, delay:1.5, ease:Power3.easeOut});
				TweenMax.to($('.con1 .con1_list li').eq(6), .8, {top:0, opacity:1, delay:1.8, ease:Power3.easeOut});
				TweenMax.to($('.con1 .con1_list li').eq(7), .8, {top:0, opacity:1, delay:2.1, ease:Power3.easeOut});
				TweenMax.to($('.con1 .con1_list li').eq(8), .8, {top:0, opacity:1, delay:2.4, ease:Power3.easeOut});
			}
			
			if($(window).scrollTop() + $(window).height() - 300 >= $(".con2").offset().top){
				TweenMax.to($('.con2 .inner > div').eq(0), .8, {top:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($('.con2 .inner > div').eq(1), .8, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});
				TweenMax.to($('.con2 .inner > div').eq(2), .8, {top:0, opacity:1, delay:0.6, ease:Power3.easeOut});
				TweenMax.to($('.con3'), 1, {opacity:1, delay:0.9, ease:Power3.easeOut});
				
			}
		}
	});

	//mainV
	$(".arrowDiv .next").click(function(){
		if(isMove == false){
			isMove = true;
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll), 0.6 ,{left:"-100%", ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(0), 0 ,{left:100, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(1), 0 ,{left:100, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(2), 0 ,{left:100, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW a"), 0 ,{left:100, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".bg"), 0 ,{scale:1, ease:Power3.easeOut});

			curRoll++;
			if(curRoll > 1){
				curRoll = 0; 
				$(".indi").removeClass("on");
			}else{	
				$(".indi").addClass("on");			
			}
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll), 0 ,{left:"100%", ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll), 0.6 ,{left:0, ease:Power3.easeOut, onComplete:function(){
				isMove = false;
				TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(0), 0.6 ,{left:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(1), 0.6 ,{left:0, opacity:1, delay:0.3, ease:Power3.easeOut});
				TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(2), 0.6 ,{left:0, opacity:1, delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW a"), 0.6 ,{left:0, opacity:1, delay:0.9, ease:Power3.easeOut});
				TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".bg"), 1.5 ,{scale:1.1, delay:0.6, ease:Power3.easeOut});
			}});
		}
	});

	$(".arrowDiv .prev").click(function(){
		if(isMove == false){
			isMove = true;
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll), 0.6 ,{left:"100%", ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(0), 0 ,{left:100, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(1), 0 ,{left:100, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(2), 0 ,{left:100, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW a"), 0 ,{left:100, opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".bg"), 0 ,{scale:1, ease:Power3.easeOut});

			curRoll --;
			if(curRoll < 0){
				curRoll = 1;
				$(".indi").addClass("on");	
			}else{
				$(".indi").removeClass("on");				
			}
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll), 0 ,{left:"-100%", ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll), 0.6 ,{left:0, ease:Power3.easeOut, onComplete:function(){
				isMove = false;
				TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(0), 0.6 ,{left:0, opacity:1, ease:Power3.easeOut});
				TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(1), 0.6 ,{left:0, opacity:1, delay:0.3, ease:Power3.easeOut});
				TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(2), 0.6 ,{left:0, opacity:1, delay:0.6, ease:Power3.easeOut});
				TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW a"), 0.6 ,{left:0, opacity:1, delay:0.9, ease:Power3.easeOut});
				TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".bg"), 1.5 ,{scale:1.1, delay:0.6, ease:Power3.easeOut});
			}});
		}
	});

	$(".indi").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");			
			indiRoll();
		}else{
			$(this).addClass("on");
			indiRoll();			
		}
	});
	
	//
	$(".mainBox .tabBtn a").each(function(index){
		$(this).click(function(){
			if(index){
				$(".mainBox .tabBtn a").removeClass("on");
				//$(".mainBox .tabBtn a").find("img").attr("src", $(".mainBox .tabBtn a").find("img").attr("src").replace("_on.jpg", ".jpg"));
				$(".mainBox .tabBtn a").eq(1).addClass("on");
				//$(".mainBox .tabBtn a").eq(1).find("img").attr("src", $(".mainBox .tabBtn a").eq(1).find("img").attr("src").replace(".jpg", "_on.jpg"));
				TweenMax.to($(".mainBoxDiv .tabCon").eq(1), 0.6, {top:50, ease:Power3.easeOut});
				TweenMax.to($(".mainBoxDiv .grad"), 0.6, {opacity:1, ease:Power3.easeOut});
				//console.log(1);
			}else{
				$(".mainBox .tabBtn a").removeClass("on");
				//$(".mainBox .tabBtn a").find("img").attr("src", $(".mainBox .tabBtn a").find("img").attr("src").replace("_on.jpg", ".jpg"));
				$(".mainBox .tabBtn a").eq(0).addClass("on");
				//$(".mainBox .tabBtn a").eq(0).find("img").attr("src", $(".mainBox .tabBtn a").eq(0).find("img").attr("src").replace(".jpg", "_on.jpg"));
				TweenMax.to($(".mainBoxDiv .tabCon").eq(1), 0.6, {top:"100%", ease:Power3.easeOut});
				TweenMax.to($(".mainBoxDiv .grad"), 0.6, {opacity:0, ease:Power3.easeOut});
				//console.log(2);
				
			}
		})
	})

	$(".tabCon.t2 ").on('scroll', function(){
      var top = $(this).scrollTop();
      //$("span").text("Left:" + left + ", Top" + top);
	  //console.log(top)
	  if(top == 58) {
		TweenMax.to($(".mainBoxDiv .grad"), 0.6, {opacity:0, ease:Power3.easeOut});
	  }else{
		TweenMax.to($(".mainBoxDiv .grad"), 0.6, {opacity:1, ease:Power3.easeOut});
	  }
    });

	//서브
	$(".sub3 a").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
		}else{
			$(this).addClass("on");
		
		}
	})
	

});

function indiRoll(){
	if(isMove == false){
		isMove = true;
		TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll), 0.6 ,{left:"-100%", ease:Power3.easeOut});
		TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(0), 0 ,{left:100, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(1), 0 ,{left:100, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(2), 0 ,{left:100, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW a"), 0 ,{left:100, opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".bg"), 0 ,{scale:1, ease:Power3.easeOut});

		curRoll++;
		if(curRoll > 1){
			curRoll = 0; 
			$(".indi").removeClass("on");
		}else{	
			$(".indi").addClass("on");			
		}
		TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll), 0 ,{left:"100%", ease:Power3.easeOut});
		TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll), 0.6 ,{left:0, ease:Power3.easeOut, onComplete:function(){
			isMove = false;
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(0), 0.6 ,{left:0, opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(1), 0.6 ,{left:0, opacity:1, delay:0.3, ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW p").eq(2), 0.6 ,{left:0, opacity:1, delay:0.6, ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".txtW a"), 0.6 ,{left:0, opacity:1, delay:0.9, ease:Power3.easeOut});
			TweenMax.to($(".mainRollDiv .mainRoll").eq(curRoll).find(".bg"), 1.5 ,{scale:1.1, delay:0.6, ease:Power3.easeOut});
		}});
	}
}
