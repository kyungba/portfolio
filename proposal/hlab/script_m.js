$(document).ready(function(){
	$(window).load(function(){
		TweenMax.to($("#splash .txt1"), 0.5, {left:210, delay:0.4, ease:Power3.easeOut});
		TweenMax.to($("#splash .line"), 0.5, {left:0, delay:0.4, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt2"), 0.5, {opacity:1, delay:0.7, ease:Power3.easeOut});
		TweenMax.to($("#splash .bg1"), 0.5, {left:0, delay:0.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .bg2"), 0.5, {left:0, delay:0.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt1"), 1, {left:640, delay:1.8, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt2"), 0.5, {opacity:0, delay:1.7, ease:Power3.easeOut});
		TweenMax.to($("#splash .line"), 1, {left:640, delay:1.7, ease:Power3.easeOut});
		TweenMax.to($("#splash .bg1"), 0.6, {left:-640, delay:1.7, ease:Power3.easeOut});
		TweenMax.to($("#splash .bg2"), 0.6, {left:-640, delay:1.7, ease:Power3.easeOut});

		TweenMax.to($("#splash .txt1"), 0, {left:-215,delay:2.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt1 > img").eq(0), 0, {opacity:0, delay:2.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt1 > img").eq(1), 0, {opacity:1, delay:2.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .line"), 0, {left:-640, delay:2.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt1"), 0.5, {left:210, delay:2.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .line"), 0.5, {left:1, delay:2.5, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt2"), 0.5, {opacity:1, delay:2.5, ease:Power3.easeOut});
		TweenMax.to($("#splash .bg3"), 0.5, {left:0, delay:2.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .bg4"), 0.5, {left:0, delay:2.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt1"), 1, {left:640, delay:3.5, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt2"), 0.5, {opacity:0, delay:3.4, ease:Power3.easeOut});
		TweenMax.to($("#splash .line"), 1, {left:640, delay:3.4, ease:Power3.easeOut});
		TweenMax.to($("#splash .bg3"), 0.6, {left:-640, delay:3.6, ease:Power3.easeOut});
		TweenMax.to($("#splash .bg4"), 0.6, {left:-640, delay:3.6, ease:Power3.easeOut});
	
		TweenMax.to($("#splash .txt1"), 0, {left:-215, delay:4.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt1 > img").eq(1), 0, {opacity:0, delay:4.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt1 > img").eq(2), 0, {opacity:1, delay:4.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .line"), 0, {left:-640, delay:4.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt1"), 0.5, {left:210, delay:4.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .line"), 0.5, {left:0, delay:4.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .txt2"), 0.5, {opacity:1, delay:4.6, ease:Power3.easeOut});
		TweenMax.to($("#splash .bg5"), 0.5, {left:0, delay:4.3, ease:Power3.easeOut});
		TweenMax.to($("#splash .bg6"), 0.5, {left:0, delay:4.3, ease:Power3.easeOut});

		TweenMax.to($("#splash .lastBg"), 0.8, {opacity:1, delay:6.0, ease:Power3.easeOut});
		TweenMax.to($("#splash .lTxt1"), 0.5, {left:0, opacity:1, delay:7.0, ease:Power3.easeOut});
		TweenMax.to($("#splash .lTxt2"), 0.5, {left:0, opacity:1, delay:7.1, ease:Power3.easeOut});
		TweenMax.to($("#splash .lTxt3"), 0.5, {left:0, opacity:1, delay:7.2, ease:Power3.easeOut});
		TweenMax.to($("#splash .lTxt1"), 0.7, {top:364, delay:7.7, ease:Power3.easeOut});
		TweenMax.to($("#splash .lTxt2"), 0.7, {top:434, delay:7.7, ease:Power3.easeOut});
		TweenMax.to($("#splash .lTxt3"), 0.7, {top:504, delay:7.7, ease:Power3.easeOut});
		TweenMax.to($("a.logo"), 1.3, {opacity:1, delay:7.9, ease:Circ.easeOut});

		TweenMax.to($("#splash"), 0.7, {opacity:0, delay:9.0, ease:Power3.easeOut});
		TweenMax.to($("a.logo"), 0.9, {top:80, delay:9.0, ease:Circ.easeOut});
		TweenMax.to($("a.logo > img").eq(0), 0.9, {opacity:0, delay:9.0, ease:Circ.easeOut});
		TweenMax.to($("a.logo > img").eq(1), 0.9, {opacity:1, delay:9.0, ease:Circ.easeOut, onComplete:function(){
			$("#splash").hide(function(){
				/*
				setTimeout(function(){
					TweenMax.to($("#intro .roll span").eq(0).find("img").eq(1), 0.5, {opacity:1, ease:Power3.easeOut});
				}, 500);
				*/
			});
		}});
	});

	TweenMax.to($(".blkLine"), 1, {width:30, opacity:1, repeat:-1, yoyo:true, delay:0.2, ease:Circ.easeInOut});

	$("div.line").each(function(i){
		$(this).click(function(){
			if($(".blkLine").eq(i).hasClass("on") == false){
				$(".blkLine").eq(i).addClass("on");
				TweenMax.to($(".blkLine").eq(i), 0.3, {width:580, opacity:1, ease:Expo.easeOut});

				if(i == 0){
					$(".con2 .checkPop").fadeIn(300,function(){
						$(".con2 .checkPop").fadeOut(250);
						$(".con2 .checkLine").slideDown(250, function(){
							$(".con2 .checkLine").fadeOut(200);
							$(".menuDiv .left .checkBt").addClass("on");
						});
					});
				}
			}else if($(".blkLine").eq(i).hasClass("on") == true){
				$(".blkLine").eq(i).removeClass("on");
				TweenMax.to($(".blkLine").eq(i), 0.5, {width:0, ease:Expo.easeOut, onComplete:function(){
					TweenMax.to($(".blkLine").eq(i), 1, {width:30, opacity:1, repeat:-1, yoyo:true, delay:0.2, ease:Circ.easeInOut});
				}});

				if(i == 0){
					$(".menuDiv .left .checkBt").removeClass("on");
				}
			}
		});
	});
	
	var introNum = 0;
	$("#intro .roll").click(function(){
		introNum ++;
		if(introNum == 1){
			TweenMax.to($("#intro .roll span").eq(0).find("img").eq(1), 0.5, {opacity:1, ease:Power3.easeOut});
		}
		if(introNum == 2){
			TweenMax.to($("#intro .roll span").eq(0), 0.3, {left:"-100%", ease:Power3.easeOut});
			TweenMax.to($("#intro .indi img").eq(0), 0, {opacity:0});
			TweenMax.to($("#intro .indi img").eq(1), 0, {opacity:1});
			TweenMax.to($("#intro .roll span").eq(1), 0.3, {left:0, ease:Power3.easeOut});
		}
		if(introNum == 3){
			TweenMax.to($("#intro .roll span").eq(1).find("img").eq(1), 0.5, {opacity:1, ease:Power3.easeOut});
		}
		if(introNum == 4){
			TweenMax.to($("#intro .roll span").eq(1), 0.3, {left:"-100%", ease:Power3.easeOut});
			TweenMax.to($("#intro .indi img").eq(1), 0, {opacity:0});
			TweenMax.to($("#intro .indi img").eq(2), 0, {opacity:1});
			TweenMax.to($("#intro .roll span").eq(2), 0.3, {left:0, ease:Power3.easeOut});
		}
		if(introNum == 5){
			TweenMax.to($("#intro .roll span").eq(2).find("img").eq(1), 0.5, {opacity:1, ease:Power3.easeOut});
		}
		if(introNum > 5) {
			introNum = 5;
			$("#intro").fadeOut(250);
		}
	});
	
	/*
	$("#intro .roll").click(function(){
		introNum ++;
		if(introNum == 1){
			TweenMax.to($("#intro .roll span").eq(0), 0.5, {left:"-100%", ease:Power3.easeOut});
			TweenMax.to($("#intro .indi img").eq(0), 0, {opacity:0});
			TweenMax.to($("#intro .indi img").eq(1), 0, {opacity:1});
			TweenMax.to($("#intro .roll span").eq(1), 0.5, {left:0, ease:Power3.easeOut, onComplete:function(){
				setTimeout(function(){
					TweenMax.to($("#intro .roll span").eq(1).find("img").eq(1), 0.5, {opacity:1, ease:Power3.easeOut});
				}, 500);
			}});
		}
		if(introNum == 2){
			TweenMax.to($("#intro .roll span").eq(1), 0.5, {left:"-100%", ease:Power3.easeOut});
			TweenMax.to($("#intro .indi img").eq(1), 0, {opacity:0});
			TweenMax.to($("#intro .indi img").eq(2), 0, {opacity:1});
			TweenMax.to($("#intro .roll span").eq(2), 0.5, {left:0, ease:Power3.easeOut, onComplete:function(){
				setTimeout(function(){
					TweenMax.to($("#intro .roll span").eq(2).find("img").eq(1), 0.5, {opacity:1, ease:Power3.easeOut});
				}, 500);
			}});
		}
		if(introNum > 2) {
			introNum = 2;
			$("#intro").fadeOut(300);
		}
	});
	*/

	$("#intro .btn").click(function(){
		$("#intro").fadeOut(250);
	});

	$(".menuDiv .barcodeBt").click(function(){
		TweenMax.to($(".barcodeDiv"), 0.3, {top:0, ease:Power3.easeOut});
	});
	$(".barcodeDiv a").click(function(){
		TweenMax.to($(".barcodeDiv"), 0.3, {top:"100%", ease:Power3.easeOut});
	});

	$(".menuDiv .noteBt").click(function(){
		TweenMax.to($(".noteDiv"), 0.3, {top:0, ease:Power3.easeOut});
	});
	$(".noteDiv > .close").click(function(){
		TweenMax.to($(".noteDiv"), 0.3, {top:"100%", ease:Power3.easeOut});
	});
	var noteOn = false;
	$(".noteDiv .noteListBt a").click(function(){
		if(!noteOn){
			noteOn = true;
			TweenMax.to($(".noteDiv .noteListBt a > img"), 0.3, {left:-250, ease:Power3.easeOut});
		}else{
			noteOn = false;
			TweenMax.to($(".noteDiv .noteListBt a > img"), 0.3, {left:30, ease:Power3.easeOut});
		}
	});
	$(".noteDiv .view").click(function(){
		TweenMax.to($(".noteDiv .viewDiv"), 0.3, {left:0, ease:Power3.easeOut});
	});
	$(".noteDiv .viewDiv .close").click(function(){
		TweenMax.to($(".noteDiv .viewDiv"), 0.3, {left:"100%", ease:Power3.easeOut});
	});
	$(".noteDiv .viewDiv .layerBt").click(function(){
		TweenMax.to($(".noteDiv .viewDiv .layerBt .line"), 0.3, {width:"100%", ease:Power3.easeOut});
		$(".noteDiv .viewDiv .layer").delay(300).fadeIn(250);
	});
	$(".noteDiv .viewDiv .layer a").click(function(){
		TweenMax.to($(".noteDiv .viewDiv .layerBt .line"), 0.3, {width:0, ease:Power3.easeOut});
		$(".noteDiv .viewDiv .layer").fadeOut(250);
	});

	$(".menuDiv .checkBt").click(function(){
		TweenMax.to($(".checkDiv"), 0.3, {top:0, ease:Power3.easeOut});
	});
	$(".checkDiv .close").click(function(){
		TweenMax.to($(".checkDiv"), 0.3, {top:"100%", ease:Power3.easeOut});
	});
	$(".checkDiv .view").click(function(){
		TweenMax.to($(".viewDiv"), 0.3, {left:0, ease:Power3.easeOut});
	});
	$(".checkDiv .viewDiv a").click(function(){
		TweenMax.to($(".viewDiv"), 0.3, {left:"100%", ease:Power3.easeOut});
	});
	
	var menuOn = false
	$(".menuDiv .menu a").click(function(){
		if(menuOn == false){
			menuOn = true;
			$(".dimdBg").stop().fadeIn(200);
			$(".menuArea .left a").removeClass("on");
			$(".menuArea .left a").eq(0).addClass("on");
			TweenMax.to($(".menuArea .twoD .scrollHide"), 0, {scrollTop : 0, ease:Power3.easeOut});
			TweenMax.to($(".menuDiv .menu a img").eq(1), 0.3, {opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".menuDiv"), 0.3, {bottom:734, ease:Power3.easeOut});
			TweenMax.to($(".menuArea"), 0.3, {top:402, ease:Power3.easeOut});
		}else{
			menuOn = false;
			$(".dimdBg").stop().fadeOut(200);
			TweenMax.to($(".menuDiv .menu a img").eq(1), 0.3, {opacity:0, ease:Power3.easeOut});
			TweenMax.to($(".menuDiv"), 0.3, {bottom:0, ease:Power3.easeOut});
			TweenMax.to($(".menuArea"), 0.3, {top:"100%", ease:Power3.easeOut});
		}
	});

	$(".menuArea .left a").each(function(i){
		$(this).click(function(){
			if(i == 0){
				TweenMax.to($(".menuArea .twoD .scrollHide"), 0.3, {scrollTop : 0, ease:Power3.easeOut, onComplete:function(){
					$(".menuArea .left a").removeClass("on");
					$(".menuArea .left a").eq(0).addClass("on");
				}});
			}else if(i == 1){
				TweenMax.to($(".menuArea .twoD .scrollHide"), 0.3, {scrollTop : 404, ease:Power3.easeOut, onComplete:function(){
					$(".menuArea .left a").removeClass("on");
					$(".menuArea .left a").eq(1).addClass("on");
				}});
			}else if(i == 2){
				TweenMax.to($(".menuArea .twoD .scrollHide"), 0.3, {scrollTop : 597, ease:Power3.easeOut, onComplete:function(){
					$(".menuArea .left a").removeClass("on");
					$(".menuArea .left a").eq(2).addClass("on");
				}});
			}else if(i == 3){
				TweenMax.to($(".menuArea .twoD .scrollHide"), 0.3, {scrollTop : 790, ease:Power3.easeOut, onComplete:function(){
					$(".menuArea .left a").removeClass("on");
					$(".menuArea .left a").eq(3).addClass("on");
				}});
			}else if(i == 4){
				TweenMax.to($(".menuArea .twoD .scrollHide"), 0.3, {scrollTop : 1123, ease:Power3.easeOut, onComplete:function(){
					$(".menuArea .left a").removeClass("on");
					$(".menuArea .left a").eq(4).addClass("on");
				}});
			}
		});
	});

	$(".menuArea .twoD .scrollHide").scroll(function(){
		if($(this).scrollTop() < 50){
			$(".menuArea .left a").removeClass("on");
			$(".menuArea .left a").eq(0).addClass("on");
			$(".menuArea .twoD .container a").css("opacity", "0.5");
			$(".menuArea .twoD .container a").eq(0).css("opacity", "1");
		}
		if($(this).scrollTop() > 340){
			$(".menuArea .left a").removeClass("on");
			$(".menuArea .left a").eq(1).addClass("on");
			$(".menuArea .twoD .container a").css("opacity", "0.5");
			$(".menuArea .twoD .container a").eq(1).css("opacity", "1");
		}
		if($(this).scrollTop() > 530){
			$(".menuArea .left a").removeClass("on");
			$(".menuArea .left a").eq(2).addClass("on");
			$(".menuArea .twoD .container a").css("opacity", "0.5");
			$(".menuArea .twoD .container a").eq(2).css("opacity", "1");
		}
		if($(this).scrollTop() > 720){
			$(".menuArea .left a").removeClass("on");
			$(".menuArea .left a").eq(3).addClass("on");
			$(".menuArea .twoD .container a").css("opacity", "0.5");
			$(".menuArea .twoD .container a").eq(3).css("opacity", "1");
		}
		if($(this).scrollTop() > 1000){
			$(".menuArea .left a").removeClass("on");
			$(".menuArea .left a").eq(4).addClass("on");
			$(".menuArea .twoD .container a").css("opacity", "0.5");
			$(".menuArea .twoD .container a").eq(4).css("opacity", "1");
		}
	});

	$(".menuArea .twoD .container a").click(function(){
		$(".menuArea .left a").removeClass("on");
		$(".menuArea .left a").eq(0).addClass("on");
		TweenMax.to($(".menuArea .twoD .scrollHide"), 0, {scrollTop : 0, ease:Power3.easeOut});
	});

	$(".menuArea .twoD .container a").click(function(){
		menuOn = false;
		$(".dimdBg").stop().fadeOut(200);
		TweenMax.to($(".menuDiv .menu a img").eq(1), 0.3, {opacity:0, ease:Power3.easeOut});
		TweenMax.to($(".menuDiv"), 0.3, {bottom:0, ease:Power3.easeOut});
		TweenMax.to($(".menuArea"), 0.3, {top:"100%", ease:Power3.easeOut, onComplete:function(){
			$(".menuArea .left a").removeClass("on");
			$(".menuArea .left a").eq(0).addClass("on");
			TweenMax.to($(".menuArea .twoD .scrollHide"), 0, {scrollTop : 0, ease:Power3.easeOut});
			TweenMax.to($(".subPage"), 0.3, {left : 0, ease:Power3.easeOut});
		}});
	});
	$(".subPage .top a").click(function(){
		TweenMax.to($(".subPage"), 0.3, {left : 640, ease:Power3.easeOut});
	});
	
	var searchNum = 0;
	$(".subPage .search a").click(function(){
		if(searchNum == 0){
			searchNum = 1;
			$(".subPage .search a").find("img").attr("src", $(".subPage .search a").find("img").attr("src").replace("sub_img2.jpg", "sub_img2_on.jpg"));
		}else if(searchNum == 1){
			searchNum = 2;
			$(".subPage .search a").find("img").attr("src", $(".subPage .search a").find("img").attr("src").replace("sub_img2_on.jpg", "sub_img2_on2.jpg"));
		}else if(searchNum == 2){
			searchNum = 0;
			$(".subPage .search a").find("img").attr("src", $(".subPage .search a").find("img").attr("src").replace("sub_img2_on2.jpg", "sub_img2.jpg"));
		}
	});

	$(".subPage .category a").each(function(i){
		$(this).click(function(){
			if($(this).hasClass("on") == false){
				$(this).addClass("on");
				TweenMax.to($(this).find(".line"), 0.4, {width : "100%", ease:Power3.easeOut});
			}else{
				$(this).removeClass("on");
				TweenMax.to($(this).find(".line"), 0.4, {width : 0, ease:Power3.easeOut});
			}
		});
	});

	var con1Num = 0
	$(".con1 .rollArea").click(function(){
		TweenMax.to($(".con1 .rollArea .roll").eq(con1Num), 0.4, {left : "-100%", ease:Power3.easeOut});
		con1Num++;
		if(con1Num > 1) con1Num = 0;
		TweenMax.to($(".con1 .rollArea .roll").eq(con1Num), 0, {left : "100%", ease:Power3.easeOut});
		TweenMax.to($(".con1 .rollArea .roll").eq(con1Num), 0.4, {left : 0, ease:Power3.easeOut});
	});
});