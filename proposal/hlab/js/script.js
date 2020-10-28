$(function(){
	//mainvisual
	mainVisual();

	//gnb
	gnbMenu();

	//scroll
	windowScroll();

	//img hover
	moreImgHover();

	//news more
	$(".section3 .newsBtn").on("click", function(){
		$(this).hide();
		$("#myCanvas").hide();
		$(".section3 .newsS").slideDown(400);
	});

	
});

var _interval, _time = 1, _drawN = 0;
$(window).load(function(){
	draw();
});

function draw()
{
	_drawN++;
	if(_drawN >= 180) {
		_drawN = 180;
		clearInterval(_interval);
	}
	var  canvas1= document.getElementById("myCanvas")
	var  context1 =canvas1.getContext("2d");
	context1.clearRect(0,0,2000,200); 
	context1.beginPath();
	context1.moveTo(0,180);
	context1.lineTo(2000,_drawN);
	context1.lineWidth=12;
	context1.strokeStyle="#ededed";
	
	context1.stroke();
}

function mainVisual()
{
	var vNum = 0;
	var $btn = $(".visual_cont .btnArea a");
	$btn.each(function(q){
		$(this).on("click", function(){
			if(q != vNum) {
				if(q > vNum) {
					$btn.eq(vNum).find("img").attr("src", "./images/visual1_txt"+(vNum + 1)+".png");
					TweenMax.to($(".visual_cont .visual").eq(vNum), 1, {delay:0.1, top:-900, ease:Power3.easeOut});
					vNum = q;
					$btn.eq(vNum).find("img").attr("src", "./images/visual1_txt"+(vNum + 1)+"_on.png");
					TweenMax.to($(".visual_cont .visual").eq(vNum), 0, {top:900, ease:Power3.easeOut});
					TweenMax.to($(".visual_cont .visual").eq(vNum), 1, {top:0, ease:Power3.easeOut});
				} else {
					$btn.eq(vNum).find("img").attr("src", "./images/visual1_txt"+(vNum + 1)+".png");
					TweenMax.to($(".visual_cont .visual").eq(vNum), 1, {delay:0.1, top:900, ease:Power3.easeOut});
					vNum = q;
					$btn.eq(vNum).find("img").attr("src", "./images/visual1_txt"+(vNum + 1)+"_on.png");
					TweenMax.to($(".visual_cont .visual").eq(vNum), 0, {top:-900, ease:Power3.easeOut});
					TweenMax.to($(".visual_cont .visual").eq(vNum), 1, {top:0, ease:Power3.easeOut});
				}
			}
		});
	});

	var $bg = $(".visual_cont");
	$bg.mousemove(function(e){
		TweenMax.to($(this).find(".bg"), 0.3, {backgroundPosition:(e.pageX/80) + "px "+(-(e.pageY/40)-10)+"px"})
	});
}


function gnbMenu()
{
	var $menu = $(".header .gnb");
	$menu.on("click", function(){
		if($(".gnbTwoD").is(":hidden")) {
			$(".gnbTwoD").stop(true, true).slideDown(400);
		} else {
			$(".gnbTwoD").stop(true, true).slideUp(400);
		}
	});
}


function windowScroll()
{
	$(window).scroll(function(){
		TweenMax.to($(".section2 .whiteArea .motif"), 1, {delay:0.2, top : ($(window).scrollTop() / 5) - 120, ease:Power2.easeOut});

		if($(window).scrollTop() > 540) {
			TweenMax.to($(".section2 .img_cont a").eq(0), 0.7, {delay:0.2, top:50, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".section2 .img_cont a").eq(1), 0.7, {top:0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($(".section2 .img_cont a").eq(2), 0.7, {delay:0.4, top:100, opacity:1, ease:Power2.easeOut});
		}

		if($(window).scrollTop() > 1200) {
			TweenMax.to($(".section2 .movieArea .txt"), 0.7, {top:315, opacity:1, ease:Power2.easeOut});
		}

		if($(window).scrollTop() > 1600) {
			TweenMax.to($(".section3 .news"), 0.7, {top:0, opacity:1, ease:Power2.easeOut});
		}

		if($(window).scrollTop() > 2100) {
			//clearInterval(_interval);
			_interval = setInterval("draw()", _time);
		}
	}); $(window).scroll();
}

function moreImgHover()
{
	var $img = $(".section2 .img_cont .img");
	$img.each(function(q){
		$(this).hover(function(){
			TweenMax.to($(this).find(".bg"), 0.4, {scale:1.1, ease:Power2.easeOut});
		}, function(){
			TweenMax.to($(this).find(".bg"), 0.4, {scale:1, ease:Power2.easeOut});
		});
	});
}