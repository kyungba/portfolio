var secMove = false;
var scrollNum = 0;
var scrollMax;
var intervalMotion;
var duration = 7000; //이거는 안 쓰는 것 같음.
var barMotion;

$(function(){
	$(window).on("load", function(){
		$("#header #gnb").mouseenter(function(){
			$("#header").addClass("hover");
			$(".blackBg").fadeIn(200);
			TweenMax.to($("#header .gnbBg"), 0.3, {height:495, ease:Power0.easeNone});
			TweenMax.to($("#header .twoD"), 0.3, {height:495, ease:Power0.easeNone});
		});
		$("#header #gnb").mouseleave(function(){
			$(".blackBg").fadeOut(200);
			TweenMax.to($("#header .gnbBg"), 0.2, {height:0, ease:Power0.easeNone});
			TweenMax.to($("#header .twoD"), 0.2, {height:0, ease:Power0.easeNone, onComplete:function(){
				$("#header").removeClass("hover");
			}});
		});


		scrollMax = $(".scrollDiv .sec").size()-1;

		barMotion = TweenMax.to($(".timer .moveBar"), 7, {width:"100%", ease:Power0.easeNone, onComplete:function(){ 
			autoMotion(); 
			TweenMax.to($(".timer .moveBar"), 0, {width:0, ease:Power3.easeInOut});
		}});
		/*
		TweenMax.to($(".timer .moveBar"), duration/1000, {width:'100%'});

		intervalMotion = setInterval(function(){
			autoMotion()
		}, duration);
		*/
		/*var time = 0;
		var timePrint = setInterval(function(){
			time++;
			console.log('time '+ time);
		}, 1000);*/





		TweenMax.to($(".sec1 .bg1"), 1.4, {scale:1, top:0, opacity:1, delay:0.1, ease:Power3.easeInOut});
		TweenMax.to($(".sec1 .bg1"), 3.3, {opacity:0, delay:0.8, ease:Power3.easeInOut});
		TweenMax.to($(".sec1 .bg2"), 3.6, {opacity:0, delay:2.5, ease:Power3.easeInOut});

		TweenMax.to($(".sec1 .txtW .txt1"), 1.5, {top:0, opacity:1, delay:1.1, ease:Power3.easeInOut});
		TweenMax.to($(".sec1 .txtW .txt2"), 1.5, {top:0, opacity:1, delay:1.2, ease:Power3.easeInOut, onComplete:function(){
			secMove = false;
		}});


		/*secMove = true;
		TweenMax.to($(".sec1 .back"), 1.4, {scale:1, top:0, opacity:1, delay:0.1, ease:Power3.easeInOut});
		TweenMax.to($(".sec1 .front"), 1.4, {scale:1, top:0, opacity:1, delay:0.1, ease:Power3.easeInOut});

		TweenMax.to($(".sec1 .txtW .txt1"), 1.5, {top:0, opacity:1, delay:1.1, ease:Power3.easeInOut});
		TweenMax.to($(".sec1 .txtW .txt2"), 1.5, {top:0, opacity:1, delay:1.2, ease:Power3.easeInOut, onComplete:function(){
			secMove = false;
		}});*/
	});

	
	// 메인 스크롤 이벤트		
	$("html, body").on('mousewheel DOMMouseScroll', function(e) {
		var E = e.originalEvent;
		delta = 0;
		if (E.detail) {
			delta = E.detail * -40;
		}else{
			delta = E.wheelDelta;
		};

		if(delta < 0 && !secMove && scrollNum < scrollMax){ // 마우스 휠을 아래로 내렸을 경우
			barMotion.restart();
			$(".indiArea .controlBtn a").removeClass("stopped");

			if(scrollNum == 0){
				conMotion(scrollNum+1);

				//secMoveDown();
				secMove = true;
				scrollNum++;
				if(scrollNum>scrollMax) scrollNum = scrollMax;
				TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					TweenMax.to($(".sec1 .txt"), 1, {top:200, opacity:0, ease:Power3.easeInOut});
				}});

				secMove = true;

				TweenMax.to($(".sec2 .txt1 p:nth-child(1)"), 1, {top:"100%", opacity:0, delay:3, ease:Power3.easeInOut, onComplete:function(){
					
				}});
				TweenMax.to($(".sec2 .txt1 p:nth-child(2)"), 1, {top:0, opacity:1, delay:3.2, ease:Power3.easeInOut});
				TweenMax.to($(".sec2 .txt2 p:nth-child(1)"), 1, {top:"100%", opacity:0, delay:3.4, ease:Power3.easeInOut, onComplete:function(){
					
					secMove = false;
				}});
				TweenMax.to($(".sec2 .txt2 p:nth-child(2)"), 1, {top:0, opacity:1, delay:3.6, ease:Power3.easeInOut});
				TweenMax.to($(".sec2 .lightHouse"), 2.5, {top:0, opacity:1, scale:1, delay:1.2, ease:Power3.easeInOut});
				TweenMax.to($(".sec2 .light"), 3.5, {opacity:1, delay:2.6, ease:Power3.easeInOut});
			}else if(scrollNum == 1){
				conMotion(scrollNum+1);
				secMoveDown();
				$('.mainIndi a').removeClass('on');
				$('.mainIndi a').eq(1).addClass('on');

				TweenMax.to($(".sec3 .sun"), 3, {top:0, opacity:1, scale:1, delay:1.3, ease:Power3.easeInOut});
				TweenMax.to($(".sec3 .sunLight"), 2.5, {top:0, opacity:1, delay:3, ease:Power3.easeInOut});
			}else if(scrollNum == 2){
				conMotion(scrollNum+1);
				secMoveDown();	
			}else if(scrollNum == 3){
				conMotion(scrollNum+1);
				secMoveDown();
				$('.mainIndi a').removeClass('on');
				$('.mainIndi a').eq(2).addClass('on');
				TweenMax.to($(".sec5 .man"), 3.5, {opacity:1, delay:1, ease:Power3.easeInOut});
			}else if(scrollNum == 4){
				conMotion(scrollNum+1);
				//secMoveDown();	
				secMove = true;
				scrollNum++;
				if(scrollNum>scrollMax) scrollNum = scrollMax;
				TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					//TweenMax.to($(".sec5 .man"), 0, {opacity:1});
				}});


				TweenMax.to($(".sec5 .man"), 2.5, {opacity:0, ease:Power3.easeInOut});
				TweenMax.to($(".sec6 .man2"), 2.5, {opacity:0, ease:Power3.easeInOut});
			}else if(scrollNum == 5){
				scrollNum ++;
				secMove = true;
				TweenMax.to($(".scrollDiv"), 1.5, {top:$(".scrollDiv").offset().top - 200, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
				}});
			}
		};

		if(delta > 0 && !secMove && scrollNum > 0){ // 마우스 휠을 위로 올렸을 경우
			barMotion.restart();
			$(".indiArea .controlBtn a").removeClass("stopped");

			if(scrollNum == 1){
				reest(scrollNum)
				//secMoveUp();

				secMove = true;
				scrollNum--;
				if(scrollNum<0) scrollNum = 0;
				TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					TweenMax.to($(".sec2 .lightHouse"), 0, {top:300, opacity:0, scale:1.4});
					TweenMax.to($(".sec2 .light"), 0, {opacity:0});
				}});						
			}else if(scrollNum == 2){
				TweenMax.to($(".sec2 .txt p:nth-child(1)"), 0, {top:0, opacity:1, ease:Power3.easeInOut});
				TweenMax.to($(".sec2 .txt p:nth-child(2)"), 0, {top:"100%", opacity:0, ease:Power3.easeInOut});

				reest(scrollNum)
				secMove = true;
				scrollNum--;
				if(scrollNum<0) scrollNum = 0;
				TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					TweenMax.to($(".sec3 .sun"), 0, {top:350, opacity:0, scale:2.6});
					TweenMax.to($(".sec3 .sunLight"), 0, {opacity:0});
				}});

				$(".mainIndi a").removeClass('on');
				$(".mainIndi a").eq(0).addClass('on');
			}else if(scrollNum == 3){
				reest(scrollNum)
				//secMoveUp();
				secMove = true;
				scrollNum--;
				if(scrollNum<0) scrollNum = 0;
				TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					TweenMax.to($(".sec5 .man"), 3.5, {opacity:1, delay:1, ease:Power3.easeInOut});
				}});				
			}else if(scrollNum == 4){
				reest(scrollNum)
				//secMoveUp();
				$(".mainIndi a").removeClass('on');
				$(".mainIndi a").eq(1).addClass('on');

				secMove = true;
				scrollNum--;
				if(scrollNum<0) scrollNum = 0;
				TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					TweenMax.to($(".sec6 .man2"), 0, {opacity:1});
				}});				

			}else if(scrollNum == 5){
				reest(scrollNum)
				TweenMax.to($(".sec5 .man"), 3.5, {opacity:1, ease:Power3.easeInOut});
				TweenMax.to($(".sec6 .man2"), 3.5, {opacity:1, ease:Power3.easeInOut});
				secMoveUp();				
			}else if(scrollNum == 6){
				scrollNum --;
				secMove = true;
				TweenMax.to($(".scrollDiv"), 1.5, {top:$(".scrollDiv").offset().top + 200, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
				}});
			}
		};
		console.log('scrollNum ' + scrollNum);
	});


	// 인디게이터
	$(".mainIndi a").each(function(i){
		$(this).click(function(){
			if(!secMove){				
				barMotion.restart();
				$(".indiArea .controlBtn a").removeClass("stopped");

				secMove = true;

				allReest();

				scrollNum = $(this).index() + $(this).index();

				$(".mainIndi a").removeClass('on');
				$(".mainIndi a").eq($(this).index()).addClass('on');

				// 리셋
				TweenMax.to($(".sec2 .txt p:nth-child(1)"), 0, {top:0, opacity:1, ease:Power3.easeInOut});
				TweenMax.to($(".sec2 .txt p:nth-child(2)"), 0, {top:"100%", opacity:0, ease:Power3.easeInOut});
				TweenMax.to($(".sec2 .lightHouse"), 0, {top:300, opacity:0, scale:1.4});
				TweenMax.to($(".sec2 .light"), 0, {opacity:0});

				if(i==0){
					TweenMax.to($(".sec3 .sun"), 0, {top:350, opacity:0, scale:2.6, ease:Power3.easeInOut});
					TweenMax.to($(".sec3 .sunLight"), 0, {opacity:0, ease:Power3.easeInOut});
				}else if(i==1){
					TweenMax.to($(".sec3 .sun"), 0, {top:350, opacity:0, scale:2.6, ease:Power3.easeInOut});
					TweenMax.to($(".sec3 .sunLight"), 0, {opacity:0, ease:Power3.easeInOut});
				}else if(i==2){
					TweenMax.to($(".sec5 .man"), 0, {opacity:1});
				}


				TweenMax.to($(".scrollDiv"), 2, {top:-($(".scrollDiv").height() * ($(this).index() * 2)) , ease:Power3.easeInOut, onComplete:function(){
					TweenMax.to($(".sec .txtW.scene2 .txt1"), 0, {top:200, opacity:0, ease:Power3.easeInOut});
					TweenMax.to($(".sec .txtW.scene2 .txt2"), 0, {top:200, opacity:0, ease:Power3.easeInOut});

					TweenMax.to($(".sec:gt("+scrollNum+")").find(".txtW.firstScene .txt1"), 0, {top:200, opacity:0, ease:Power3.easeInOut});
					TweenMax.to($(".sec:gt("+scrollNum+")").find(".txtW.firstScene .txt2"), 0, {top:200, opacity:0, ease:Power3.easeInOut});
					secMove = false;
				}});


			}
		});
	});

	// 재생, 멈춤 버튼
	$(".indiArea .controlBtn a").click(function(){
		if(!$(this).hasClass("stopped")){
			$(".indiArea .controlBtn a").addClass("stopped");
			barMotion.pause();
		}else{
			$(".indiArea .controlBtn a").removeClass("stopped");
			barMotion.resume();
		}
	});


	// quick버튼 (IR, FAMILY)
	var familyNum = 0;
	var isQuickOpen = false;
	var currentView = 0;

	$(".quickBtn a").each(function(q){ // 열기
		$(this).click(function(){
			if(!isQuickOpen){				
				currentView = q;
				TweenMax.to($(".quickBtn"), 1.5, {left:0, ease:Power3.easeInOut});
				TweenMax.to($(".quickCon .con"), 0, {display:"none"});
				TweenMax.to($(".quickCon .con").eq(q), 0, {display:"block"});
				TweenMax.to($(".quickCon"), 1.5, {left:0, ease:Power3.easeInOut, onComplete:function(){
					isQuickOpen = true;
				}});

				TweenMax.to($(".quickCon .family .txt1"), 1.5, {opacity:1, delay:1, ease:Power3.easeInOut});
				TweenMax.to($(".quickCon .family .txt2"), 1.5, {opacity:1, delay:1.2, ease:Power3.easeInOut});

				setTimeout(function(){
					$(".quickCon .con").eq(q).find(".conList .list").each(function(q){
						var thisItem = $(this);
						setTimeout(function(){
							TweenMax.to(thisItem, 1.2, {top:0, opacity:1, ease:Power3.easeInOut});
						}, q*130);
					})
				}, 1000);
				
			}else{
				if(currentView!=q){
					currentView = q;
					TweenMax.to($(".quickCon .con"), 0, {display:"none"});
					TweenMax.to($(".quickCon .con").eq(q), 0, {display:"block", onComplete:function(){
						TweenMax.to($(".quickCon .con .conList .list"), 0, {top:350, opacity:0});
						TweenMax.to($(".quickCon .family .txt1"), 0, {opacity:0});
						TweenMax.to($(".quickCon .family .txt2"), 0, {opacity:0});

						TweenMax.to($(".quickCon .family .txt1"), 1.5, {opacity:1, ease:Power3.easeInOut});
						TweenMax.to($(".quickCon .family .txt2"), 1.5, {opacity:1, delay:0.2, ease:Power3.easeInOut});

						$(".quickCon .con").eq(q).find(".conList .list").each(function(q){
							var thisItem = $(this);
							setTimeout(function(){
								TweenMax.to(thisItem, 1.2, {top:0, opacity:1, ease:Power3.easeInOut});
							}, q*130);
						})
					}});
				}
			}
		})
	});

	$(".quickCon .con a").click(function(){ // 닫기
		TweenMax.to($(".quickBtn"), 1.5, {left:$(window).width() - 70, ease:Power3.easeInOut});
		TweenMax.to($(".quickCon"), 1.5, {left:"100%", ease:Power3.easeInOut, onComplete:function(){
			isQuickOpen = false;
			TweenMax.to($(".quickCon .con"), 0, {display:"block"});
			TweenMax.to($(".quickCon .con .conList .list"), 0, {top:350, opacity:0});

			TweenMax.to($(".quickCon .family .txt1"), 0, {opacity:0});
			TweenMax.to($(".quickCon .family .txt2"), 0, {opacity:0});
		}});
	})

	// JB FAMILY 썸네일 호버 했을때 이미지 커지는거
	$(".quickCon .family .conList .list").eq(0).hover(function(){
		TweenMax.to($(".quickCon .family .conList .list").eq(0).find(".imgArea p"), 0.8, {scale:1.2});
	}, function(){
		TweenMax.to($(".quickCon .family .conList .list").eq(0).find(".imgArea p"), 0.8, {scale:1});
	});
});

function secMoveDown(){
	secMove = true;
	scrollNum++;
	if(scrollNum>scrollMax) scrollNum = scrollMax;
	TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
		secMove = false;
	}});
}

function secMoveUp(){
	secMove = true;
	scrollNum--;
	if(scrollNum<0) scrollNum = 0;
	TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
		secMove = false;
	}});
}

function conMotion(num){
	TweenMax.to($(".sec"+num+" .txt1"), 1.8, {top:200, opacity:0, ease:Power3.easeInOut});
	TweenMax.to($(".sec"+num+" .txt2"), 1.8, {top:200, opacity:0, ease:Power3.easeInOut});
	TweenMax.to($(".sec"+(num+1)+" .txt1"), 1.5, {top:0, opacity:1, delay:1.2, ease:Power3.easeInOut});
	TweenMax.to($(".sec"+(num+1)+" .txt2"), 1.5, {top:0, opacity:1, delay:1.3, ease:Power3.easeInOut, onComplete:function(){
		secMove = false;
	}});
}

function reest(num){
	TweenMax.to($(".sec"+num+" .txt1"), 0, {top:0, opacity:1, ease:Power3.easeInOut});
	TweenMax.to($(".sec"+num+" .txt2"), 1, {top:0, opacity:1, ease:Power3.easeInOut, onComplete:function(){
		TweenMax.to($(".sec"+(num+1)+" .txt1"), 0, {top:200, opacity:0, ease:Power3.easeInOut});
		TweenMax.to($(".sec"+(num+1)+" .txt2"), 0, {top:200, opacity:0, ease:Power3.easeInOut});
	}});
}

function allReest(){
	TweenMax.to($(".sec .txtW .txt1"), 0, {top:0, opacity:1, ease:Power3.easeInOut});
	TweenMax.to($(".sec .txtW .txt2"), 0, {top:0, opacity:1, ease:Power3.easeInOut});

	TweenMax.to($(".sec2 .lightHouse"), 0, {top:300, opacity:0, ease:Power3.easeInOut});
}

function autoMotion(){
	barMotion.restart();

	if(scrollNum == 0){
		conMotion(scrollNum+1);

		//secMoveDown();
		secMove = true;
		scrollNum++;
		if(scrollNum>scrollMax) scrollNum = scrollMax;
		TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
			secMove = false;
			TweenMax.to($(".sec1 .txt"), 1, {top:200, opacity:0, ease:Power3.easeInOut});
		}});

		secMove = true;

		TweenMax.to($(".sec2 .txt1 p:nth-child(1)"), 1, {top:"100%", opacity:0, delay:3, ease:Power3.easeInOut, onComplete:function(){
			
		}});
		TweenMax.to($(".sec2 .txt1 p:nth-child(2)"), 1, {top:0, opacity:1, delay:3.2, ease:Power3.easeInOut});
		TweenMax.to($(".sec2 .txt2 p:nth-child(1)"), 1, {top:"100%", opacity:0, delay:3.4, ease:Power3.easeInOut, onComplete:function(){
			
			secMove = false;
		}});
		TweenMax.to($(".sec2 .txt2 p:nth-child(2)"), 1, {top:0, opacity:1, delay:3.6, ease:Power3.easeInOut});
		TweenMax.to($(".sec2 .lightHouse"), 2.5, {top:0, opacity:1, scale:1, delay:1.2, ease:Power3.easeInOut});
		TweenMax.to($(".sec2 .light"), 3.5, {opacity:1, delay:2.6, ease:Power3.easeInOut});
	}else if(scrollNum == 1){
		conMotion(scrollNum+1);
		secMoveDown();
		$('.mainIndi a').removeClass('on');
		$('.mainIndi a').eq(1).addClass('on');

		TweenMax.to($(".sec3 .sun"), 3, {top:0, opacity:1, scale:1, delay:1.3, ease:Power3.easeInOut});
		TweenMax.to($(".sec3 .sunLight"), 2.5, {top:0, opacity:1, delay:3, ease:Power3.easeInOut});
	}else if(scrollNum == 2){
		conMotion(scrollNum+1);
		secMoveDown();	
	}else if(scrollNum == 3){
		conMotion(scrollNum+1);
		secMoveDown();
		$('.mainIndi a').removeClass('on');
		$('.mainIndi a').eq(2).addClass('on');
		TweenMax.to($(".sec5 .man"), 3.5, {opacity:1, delay:1, ease:Power3.easeInOut});
	}else if(scrollNum == 4){
		conMotion(scrollNum+1);
		secMoveDown();	
		TweenMax.to($(".sec5 .man"), 2.5, {opacity:0, ease:Power3.easeInOut});
		TweenMax.to($(".sec6 .man2"), 2.5, {opacity:0, ease:Power3.easeInOut});
	}else if(scrollNum == 5|| scrollNum == 6){ // footer전 슬라이드
		$('.mainIndi a').removeClass('on');
		$('.mainIndi a').eq(0).addClass('on');

		TweenMax.to($(".sec1 .txt1"), 0, {top:0, opacity:1});
		TweenMax.to($(".sec1 .txt2"), 0, {top:0, opacity:1});

		TweenMax.to($(".sec2 .lightHouse"), 0, {top:300, opacity:0, scale:1.4});
		TweenMax.to($(".sec2 .light"), 0, {opacity:0});

		TweenMax.to($(".sec3 .sun"), 0, {top:350, opacity:0, scale:2.6});
		TweenMax.to($(".sec3 .sunLight"), 0, {opacity:0});

		TweenMax.to($(".sec5 .man1"), 0, {opacity:0});

		scrollNum = 0;
		secMove = true;

		TweenMax.to($(".scrollDiv"), 1.5, {top:0, ease:Power3.easeInOut, onComplete:function(){
			secMove = false;
			TweenMax.to($(".sec6 .man2"), 0, {opacity:1});
		}});
	}
}