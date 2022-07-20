var isTabOpen = false;
var index = 0;

$(function(){
	// 메인비주얼 높이값 잡기
	$('.mainVis').height($(window).height());

	// 로딩 시 메인비주얼 모션
	TweenMax.fromTo($('.mainVis'), 2, {opacity:0, scale:1.15}, {opacity:1, scale:1, ease:Power3.easeOut, onComplete:function(){
		
	}});
	TweenMax.to($('.header'), 1.3, {top:0, opacity:1, delay:0, ease:Power3.easeOut});
	TweenMax.to($('.mainVis .txtWrap .txt1'), 0.8, {top:0, opacity:1, delay:0.9, ease:Power3.easeOut});
	TweenMax.to($('.mainVis .txtWrap .txt2'), 1, {top:0, opacity:1, delay:1.1, ease:Power3.easeOut});
	TweenMax.to($('.mainVis .grandOpen'), 0.6, {opacity:1, delay:1.6, ease:Power3.easeOut});


	// 마우스 오버 시	
	$('.contents').not('.opened').find('.tabBtn a').hover(function(){
		if(!isTabOpen){
			TweenMax.to($(this), 0.4, {position:'relative', top:'-50px', ease:Power3.easeOut});
		}
	}, function(){
		if(!isTabOpen){
			TweenMax.to($(this), 0.4, {position:'relative', top:'0', ease:Power3.easeOut});
		}
	});
		
	// tab
	$('.contents .tabBtn a').each(function(q){			
		$(this).click(function(){
			if(!isTabOpen){
				isTabOpen = true;
				$('#wrap').css('height',$(window).height());
				TweenMax.to($('.contents .tabBtn a'), 0, {position:'relative', top:'0'});
				TweenMax.to($('.contents'), 0.4, {height:$(window).height()*0.90, ease:Power3.easeOut, onComplete:function(){
					TweenMax.to($('.contents .tabCon .conList'), 0.4, {height:$('.contents').height()-90, ease:Power3.easeOut});
				}});
				$('.dimd').stop().fadeIn(300);
			}

			$('.contents').addClass('opened');					
			$('.conList').scrollTop(0);
			$('.contents .tabBtn a').removeClass('on');
			$('.contents .tabCon .conList').removeClass('on').hide();	

			if(q==0){
				$('.contents .tabBtn a').eq(0).addClass('on');
				$('.contents .tabCon .conList').eq(0).addClass('on').show();
				TweenMax.fromTo($('.contents .tabCon .conList.con1 .s1'), 1, {opacity:0, top:'100px'}, {opacity:1, top:0, delay:0.3, ease:Power3.easeOut});
				TweenMax.fromTo($('.contents .tabCon .conList.con1 .s2'), 1, {opacity:0, top:'100px'}, {opacity:1, top:0, delay:0.6, ease:Power3.easeOut});
			}else{
				$('.contents .tabBtn a').eq(1).addClass('on');
				$('.contents .tabCon .conList').eq(1).addClass('on').show();
				TweenMax.fromTo($('.contents .tabCon .conList.con2 .s1'), 1, {opacity:0, top:'100px'}, {opacity:1, top:0, delay:0.3, ease:Power3.easeOut});
				TweenMax.fromTo($('.contents .tabCon .conList.con2 .s2'), 1, {opacity:0, top:'100px'}, {opacity:1, top:0, delay:0.6, ease:Power3.easeOut});
			}		
		});
	});

	// tab1 이미지 롤링
	$('.contents .tabCon .conList.con1 .s2 .txtArea .btn').click(function(){
		if(!$(this).hasClass('on')){
			$(this).addClass('on');
			TweenMax.to($('.contents .tabCon .conList.con1 .s2 .txtArea .txt.two'), 0.5, {opacity:1, ease:Power3.easeOut});
			$('.contents .tabCon .conList.con1 .s2 .imgArea .roll1').hide();
			$('.contents .tabCon .conList.con1 .s2 .imgArea .roll2').show();

		}else{
			$(this).removeClass('on');
			TweenMax.to($('.contents .tabCon .conList.con1 .s2 .txtArea .txt.two'), 0.5, {opacity:0, ease:Power3.easeOut});
			$('.contents .tabCon .conList.con1 .s2 .imgArea .roll1').show();
			$('.contents .tabCon .conList.con1 .s2 .imgArea .roll2').hide();
		}
	})


    // tab1 지도
    $('.con1 .s3 a').click(function(){
    	if(!$(this).hasClass('on')){
			$(this).addClass('on');
			$('.conList.con1 .s3 .mapImg.two').stop().fadeOut(200);
		}else{
			$(this).removeClass('on');
			$('.conList.con1 .s3 .mapImg.two').stop().fadeIn(200);
		}
    });

    $('.con1').scroll(function(){
    	if($('.conList.con1').scrollTop() > $('.contents .tabCon .conList.con1 .s3 .mapImg').offset().top - 100){
    		TweenMax.to($('.contents .tabCon .conList.con1 .s3'), 1, {opacity:1, ease:Power3.easeOut});
    	}
    });

    // tab2 롤링
    $('.con2 .imgRoll .list').eq(0).css({'left':'40px','width':'734px','height':'536px'});
    $('.con2 .imgRoll .list .listDimd').eq(0).css({'opacity':'0'});
    
    
    $('.con2 .imgRoll .list').on("click", function(){
    	movement2();    	
    })

    // 닫기버튼
	$('.xBtn').click(function(){
		$('#wrap').css('height','auto');
		TweenMax.to($('.contents'), 0.4, {height:'90px', ease:Power3.easeOut, onComplete:function(){
			isTabOpen = false;
		}});
		$('.dimd').stop().fadeOut(300);
		$('.contents').removeClass('opened');
	});

    // tab1 롤링
	var tab1_Rollone = new Swiper('.con1 .roll.roll1.swiper-container', {
		observer:true,
    	observeParents:true,
		pagination: {
			el: '.swiper-pagination',
		},
    });

    var tab1_Rolltwo = new Swiper('.con1 .roll.roll2.swiper-container', {
    	observer:true,
    	observeParents:true,
		pagination: {
			el: '.swiper-pagination',
		},
    });
});

var isReverse = false;
function movement2(){
	
	if(!isReverse) {
		TweenMax.to($('.con2 .imgRoll .list').eq(index), 1, {left:'-466px', height:'356px', ease:Power3.easeOut});
		TweenMax.to($('.con2 .imgRoll .list .listDimd').eq(index), 1, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($('.con2 .txtRoll .list').eq(index), 1, {opacity:0, ease:Power3.easeOut});
		index++;
		if(index >= 2) {
			isReverse = true;
		}
		TweenMax.to($('.con2 .imgRoll .list').eq(index), 1, {left:'40px', width:'734px', height:'536px', ease:Power3.easeOut});
		TweenMax.to($('.con2 .imgRoll .list .listDimd').eq(index), 1, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($('.con2 .txtRoll .list').eq(index), 1, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($('.con2 .imgRoll .list').eq(index+1), 1, {left:'773px', ease:Power3.easeOut});
		TweenMax.to($('.contents .tabCon .conList.con2 .s2 .bar .current'), 1, {width:index * ($(".imgRoll").width()/3), ease:Power3.easeOut});
	} else {
		TweenMax.to($('.con2 .imgRoll .list').eq(index), 1, {left:'773px', height:'356px', ease:Power3.easeOut});
		TweenMax.to($('.con2 .imgRoll .list .listDimd').eq(index), 1, {opacity:1, ease:Power3.easeOut});
		TweenMax.to($('.con2 .txtRoll .list').eq(index), 1, {opacity:0, ease:Power3.easeOut});
		index--;
		if(index <= 0) {
			isReverse = false;
		}
		TweenMax.to($('.con2 .imgRoll .list').eq(index), 1, {left:'40px', width:'734px', height:'536px', ease:Power3.easeOut});
		TweenMax.to($('.con2 .imgRoll .list .listDimd').eq(index), 1, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($('.con2 .txtRoll .list').eq(index), 1, {opacity:1, ease:Power3.easeOut});
		if(index != 0) TweenMax.to($('.con2 .imgRoll .list').eq(index-1), 1, {left:'-466px', ease:Power3.easeOut});
		TweenMax.to($('.con2 .imgRoll .list').eq(index+2), 1, {left:'100%', ease:Power3.easeOut});
		TweenMax.to($('.contents .tabCon .conList.con2 .s2 .bar .current'), 1, {width:index * ($(".imgRoll").width()/3), ease:Power3.easeOut});
	}
}