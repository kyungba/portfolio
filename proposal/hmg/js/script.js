$(function () {
	//로드
	$(window).load(function(){
		TweenMax.to($(".mainV .visual .tit"), 0.6, {top:395, opacity:1, delay:0.4, ease:Power3.easeOut});
	});
	$(".wrapNavi .up").addClass("on");
	
	var canvas1 = document.getElementById("canvas1");
	var context1 = canvas1.getContext("2d");
	var canvas1a = document.getElementById("canvas1a");
	var context1a = canvas1a.getContext("2d");
	var canvas1b = document.getElementById("canvas1b");
	var context1b = canvas1b.getContext("2d");
	var canvas2 = document.getElementById("canvas2");
	var context2 = canvas2.getContext("2d");
	var canvas2a = document.getElementById("canvas2a");
	var context2a = canvas2a.getContext("2d");
	var canvas2b = document.getElementById("canvas2b");
	var context2b = canvas2b.getContext("2d");
	var canvas3 = document.getElementById("canvas3");
	var context3 = canvas3.getContext("2d");
	var canvas3a = document.getElementById("canvas3a");
	var context3a = canvas3a.getContext("2d");
	var canvas3b = document.getElementById("canvas3b");
	var context3b = canvas3b.getContext("2d");
	var a=0, b=0, c=0;
	var count1=0, count2=0, count3=0;

	context1.beginPath();
	context1.strokeStyle = "rgba(255, 255, 255, 0.15)"
	context1.arc(1421, 1421, 1421, 0, Math.PI, true);
	context1.stroke();
	context1b.beginPath();
	context1b.strokeStyle = "rgba(255, 255, 255, 0.4)"
	context1b.lineWidth = 40;
	context1b.arc(0, 0, 1401, 0, Math.PI);
	context1b.stroke();
	context2.beginPath();
	context2.strokeStyle = "rgba(255, 255, 255, 0.15)"
	context2.arc(960, 960, 960, 0, Math.PI, true);
	context2.stroke();
	context2b.beginPath();
	context2b.strokeStyle = "rgba(255, 255, 255, 0.4)"
	context2b.lineWidth = 40;
	context2b.arc(0, 0, 940, 2*Math.PI, Math.PI);
	context2b.stroke();
	context3.beginPath();
	context3.strokeStyle = "rgba(255, 255, 255, 0.15)"
	context3.arc(499, 499, 499, 0, Math.PI, true);
	context3.stroke();
	context3b.beginPath();
	context3b.strokeStyle = "rgba(255, 255, 255, 0.4)"
	context3b.lineWidth = 40;
	context3b.arc(0, 0, 479, 0, Math.PI);
	context3b.stroke();

	drawLoading1();
	drawLoading2();
	drawLoading3();
	function drawLoading1(){
		a+=0.003;
		context1a.beginPath();
		context1a.strokeStyle = "rgba(0, 44, 95, 0.7)"
		context1a.arc(0, 0, 1401, 0, Math.PI * count1);
		context1a.lineWidth = 40;
		context1a.stroke();
		count1 += a;
		if(count1<=1) setTimeout(drawLoading1, 30);
	}

	
	function drawLoading2(){
		setTimeout(function(){
			b+=0.003;
			context2a.beginPath();
			context2a.strokeStyle = "rgba(163, 107, 79, 0.6)"
			context2a.arc(0, 0, 940, Math.PI, 2*Math.PI*count2);
			context2a.lineWidth = 40;
			context2a.stroke();
			count2 += b;
		}, 700);
		if(count2<=1) setTimeout(drawLoading2, 30);
	}

	function drawLoading3(){
		setTimeout(function(){
			c+=0.003;
			context3a.beginPath();
			context3a.strokeStyle = "rgba(187, 22, 43, 0.5)"
			context3a.arc(0, 0, 479, 0, Math.PI*count3);
			context3a.lineWidth = 40;
			context3a.stroke();
			count3 += c;
		}, 1100);
		if(count3<=1) setTimeout(drawLoading3, 30);
	}

	TweenMax.to($("#canvas1a, #canvas2a, #canvas3a"), 0.6, {opacity:0, delay:2, ease:Power3.easeOut});
	TweenMax.to($("#canvas1b, #canvas2b, #canvas3b"), 0.6, {opacity:0.1, delay:2, ease:Power3.easeOut});


	var sectionN = 0;
	var sectionMove = false;
	var sectionScrollN = 0;
	var sectionScrollMove = true;


	$(".hamburger").click(function(){
		TweenMax.to($(".allMenu"), 0.6, {right:0, ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeIn(600);
		sectionMove = true;

	});

	$(".allMenu .closeBtn").click(function(){
		TweenMax.to($(".allMenu"), 0.6, {right:"-100%", ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeOut(600);
		sectionMove = false;
	});

	$("#wrap .mainV .roll").click(function(){
		if(!$(this).parents(".mainV").hasClass("on")){
			$(this).parents(".mainV").addClass("on");
			TweenMax.to($("#wrap .mainV .visualD .visual").eq(0), 0.6, {left:"-100%", ease:Power3.easeOut});
			TweenMax.to($("#wrap .mainV .visualD .visual").eq(1), 0, {left:"100%", ease:Power3.easeOut});
			TweenMax.to($("#wrap .mainV .visualD .visual .tit").eq(1), 0, {top:"495", opacity:0, ease:Power3.easeOut});
			TweenMax.to($("#wrap .mainV .visualD .visual .tit").eq(1), 0.6, {top:"395", opacity:1, delay:0.4, ease:Power3.easeOut});
			TweenMax.to($("#wrap .mainV .visualD .visual").eq(1), 0.6, {left:"0", ease:Power3.easeOut});
			$(".visualBtn .cellD span").eq(0).removeClass("on");
			$(".visualBtn .cellD span").eq(1).addClass("on");
			$(".visualBtn .count span").text(2);
		}else{
			$(this).parents(".mainV").removeClass("on");
			TweenMax.to($("#wrap .mainV .visualD .visual").eq(1), 0.6, {left:"-100%", ease:Power3.easeOut});
			TweenMax.to($("#wrap .mainV .visualD .visual").eq(0), 0, {left:"100%", ease:Power3.easeOut});
			TweenMax.to($("#wrap .mainV .visualD .visual .tit").eq(0), 0, {top:"495", opacity:0, ease:Power3.easeOut});
			TweenMax.to($("#wrap .mainV .visualD .visual .tit").eq(0), 0.6, {top:"395", opacity:1, delay:0.4, ease:Power3.easeOut});
			TweenMax.to($("#wrap .mainV .visualD .visual").eq(0), 0.6, {left:"0", ease:Power3.easeOut});
			$(".visualBtn .cellD span").eq(1).removeClass("on");
			$(".visualBtn .cellD span").eq(0).addClass("on");
			$(".visualBtn .count span").text(1);
		}
	});

	$(".bookBtn").click(function(){
		TweenMax.to($(".bookingArea"), 0.6, {display:"block", right:0, ease:Power3.easeOut});
		TweenMax.to($(".bookingArea .intro .tit"), 0.4, {top:0, opacity:1, delay:0.55, ease:Power3.easeOut});
		TweenMax.to($(".bookingArea .intro .btn"), 0.4, {top:0, opacity:1, delay:0.75, ease:Power3.easeOut});
		$(".dimdBg").stop(true, true).fadeIn(600);
		sectionMove = true;
	});

	$(".bookingArea .intro .btn").click(function(){
		$(".bookingArea .intro").hide();
		$(".bookingArea .top").fadeIn(300);
		$(".bookingArea .step1").fadeIn(300);
	});

	$(".bookingArea .step1 .hover").click(function(){
		$(".bookingArea .step1").hide();
		$(".bookingArea .bottom").fadeIn(300);
		$(".bookingArea .step2").fadeIn(300);
	});

	$(".bookingArea .step2 .hover").click(function(){
		$(".bookingArea .step2").hide();
		$(".bookingArea .step3").fadeIn(300);
		$(".bookingArea .bottom span").fadeIn(300);
	});

	$(".bookingArea .step3 .left .data").click(function(){
		$(this).addClass("on");
		$(".bookingArea .step3 .right .data").fadeIn(300);
	});

	$(".bookingArea .step3 .right .data").click(function(){
		$(".bookingArea .step3 .result").fadeIn(300);
		$(".bookingArea .reserve").fadeIn(300);
	});

	$(".bookingArea .reserve").click(function(){
		$(".bookingArea .closeBtn").click();
	});

	$(".bookingArea .closeBtn").click(function(){
		TweenMax.to($(".bookingArea"), 0.6, {right:"-100%", ease:Power3.easeOut, onComplete:function(){
			TweenMax.to($(".bookingArea"), 0, {display:"none", ease:Power3.easeOut});
		}});
		$(".dimdBg").stop(true, true).fadeOut(600);
		sectionMove = false;
	});

	
	$("#wrap").on('mousewheel DOMMouseScroll', function(e) {
		var E = e.originalEvent;
		delta = 0;
		if (E.detail) {
		}else{
			delta = E.wheelDelta;
			if(delta > 0){
				//위
				if(sectionN == 1){
					if(!sectionMove){
						if(sectionScrollN == 0){
							console.log(111)
							if(!sectionScrollMove){
								sectionScrollMove = true;
								sectionMove = true;
								$("#wrap .pagiNavi .bar span").eq(1).removeClass("on");
								$("#wrap .pagiNavi .text span").eq(1).removeClass("on");
								TweenMax.to($("#wrap .mainV"), 0.6, {top:"0"});
								TweenMax.to($("#wrap .mainTabCon"), 0.6, {top:"100%", onComplete:function(){
									sectionMove = false;
									sectionN = 0;
								}});
							}
						}

						if(sectionScrollN == 1){
							if(!sectionScrollMove){
								sectionScrollMove = true;
								$("#wrap .mainTabCon .oneD .listDiv .list").each(function(q){
									TweenMax.to($(this), 0.35, {top:parseInt($(this).css("top").split("p")[0]) + 650, opacity:1, delay:(8-q)*0.07});
									if(q == 0){
										TweenMax.to($(this), 0.35, {top:parseInt($(this).css("top").split("p")[0]) + 650, opacity:1, delay:(8-q)*0.07, onComplete:function(){
											sectionScrollN = 0;
											sectionScrollMove = false;
										}});							
									}
								});
							}
						}

						if(sectionScrollN == 2){
							if(!sectionScrollMove){
								sectionScrollMove = true;
								$("#wrap .mainTabCon .oneD .listDiv .list").each(function(q){
									TweenMax.to($(this), 0.35, {top:parseInt($(this).css("top").split("p")[0]) + 650, opacity:1, delay:(8-q)*0.07});
									if(q == 0){
										TweenMax.to($(this), 0.35, {top:parseInt($(this).css("top").split("p")[0]) + 650, opacity:1, delay:(8-q)*0.07, onComplete:function(){
											sectionScrollN = 1;
											sectionScrollMove = false;
										}});							
									}
								});
							}
						}
					}
				}

				if(sectionN == 2){
					if(!sectionMove){
						sectionMove = true;
						$("#wrap .pagiNavi .bar span").eq(2).removeClass("on");
						$("#wrap .pagiNavi .text span").eq(2).removeClass("on");
						TweenMax.to($("#wrap .mainTabCon .oneD"), 0.6, {top:"0"});
						TweenMax.to($("#wrap .mainTabCon .twoD"), 0.6, {top:"100%", onComplete:function(){
							sectionMove = false;
							sectionN = 1;
							sectionScrollMove = false;
						}});
					}
				}

				if(sectionN == 3){
					if($("#wrap .mainTabCon .thrD .listDiv").offset().top == 0){
						if(!sectionMove){
							sectionMove = true;
							$("#wrap .pagiNavi .bar span").eq(3).removeClass("on");
							$("#wrap .pagiNavi .text span").eq(3).removeClass("on");
							TweenMax.to($("#wrap .mainTabCon .thrD"), 0.6, {top:"100%"});
							TweenMax.to($("#wrap .mainTabCon .twoD"), 0.6, {top:"0", onComplete:function(){
								sectionMove = false;
								sectionN = 2;
							}});
						}
					}
				}
			}else if(delta < 0){
				//아래
				if(sectionN == 0){
					if(!sectionMove){
						sectionMove = true;
						/*
						$(".header .logo").addClass("on");
						$(".utill").addClass("on");
						$(".hamburger").addClass("on");*/
						$("#wrap .pagiNavi .bar span").eq(1).addClass("on");
						$("#wrap .pagiNavi .text span").eq(1).addClass("on");
						
						if(parseInt($("#wrap .mainTabCon .oneD .listDiv .list:first").css("top").split("p")[0]) != 0){
							TweenMax.to($(".wrapNavi .up"), 0.4, {className:"-=on"});
							TweenMax.to($("#wrap .mainV"), 0.6, {top:"-100%"});
							TweenMax.to($("#wrap .mainTabCon"), 0.6, {top:"0"});
							$("#wrap .mainTabCon .oneD .listDiv .list").each(function(q){
								if(q < 5){
									TweenMax.to($(this), 0.35, {top:parseInt($(this).css("top").split("p")[0]) - 400, opacity:1, delay:0.45 + q*0.07});
									if(q == 4){
										TweenMax.to($(this), 0.35, {top:parseInt($(this).css("top").split("p")[0]) - 400, opacity:1, delay:0.45 + q*0.07, onComplete:function(){
											sectionMove = false;
											sectionN = 1;
											sectionScrollMove = false;
											sectionScrollN = 0;
										}});							
									}
								}else{
									TweenMax.to($(this), 0, {top:parseInt($(this).css("top").split("p")[0]) - 400, opacity:1});
								}
							});
						}else{
							TweenMax.to($(".wrapNavi .up"), 0.4, {className:"-=on"});
							TweenMax.to($("#wrap .mainV"), 0.6, {top:"-100%"});
							TweenMax.to($("#wrap .mainTabCon"), 0.6, {top:"0", onComplete:function(){
								sectionMove = false;
								sectionN = 1;
								sectionScrollMove = false;
								sectionScrollN = 0;
							}});
						}
						
					}
				}

				if(sectionN == 1){
					if(sectionScrollN == 0){
						if(!sectionScrollMove){
							sectionScrollMove = true;
							$("#wrap .mainTabCon .oneD .listDiv .list").each(function(q){
								TweenMax.to($(this), 0.35, {top:parseInt($(this).css("top").split("p")[0]) - 650, opacity:1, delay:q*0.07});
								if(q == $("#wrap .mainTabCon .oneD .listDiv .list").size() - 1){
									TweenMax.to($(this), 0.35, {top:parseInt($(this).css("top").split("p")[0]) - 650, opacity:1, delay:q*0.07, onComplete:function(){
										sectionScrollN = 1;
										sectionScrollMove = false;
									}});							
								}
							});
						}
					}

					if(sectionScrollN == 1){
						if(!sectionScrollMove){
							sectionScrollMove = true;
							$("#wrap .mainTabCon .oneD .listDiv .list").each(function(q){
								if(parseInt($("#wrap .mainTabCon .oneD .listDiv .list:first").css("top").split("p")[0]) > -1300){
									TweenMax.to($(this), 0.35, {top:parseInt($(this).css("top").split("p")[0]) - 650, opacity:1, delay:q*0.07});
									if(q == $("#wrap .mainTabCon .oneD .listDiv .list").size() - 1){
										TweenMax.to($(this), 0.35, {top:parseInt($(this).css("top").split("p")[0]) - 650, opacity:1, delay:q*0.07, onComplete:function(){
											sectionScrollN = 2;
											sectionScrollMove = false;
										}});							
									}
								}
							});
						}
					}

					if(sectionScrollN == 2){
						sectionScrollMove = true;
						if(!sectionMove){
							sectionMove = true;
							$("#wrap .pagiNavi .bar span").eq(2).addClass("on");
							$("#wrap .pagiNavi .text span").eq(2).addClass("on");
							TweenMax.to($("#wrap .mainTabCon .oneD"), 0.6, {top:"-100%"});
							TweenMax.to($("#wrap .mainTabCon .twoD .bgDiv .bg img"), 2, {scale:1, delay:0.2, ease:Power3.easeOut});
							TweenMax.to($("#wrap .mainTabCon .twoD"), 0.6, {top:"0", onComplete:function(){
								sectionMove = false;
								sectionN = 2;
								sectionScrollMove = false;
							}});
						}
					}
				}

				if(sectionN == 2){
					if(!sectionMove){
						sectionMove = true;
						$("#wrap .pagiNavi .bar span").eq(3).addClass("on");
						$("#wrap .pagiNavi .text span").eq(3).addClass("on");
						TweenMax.to($("#wrap .mainTabCon .twoD"), 0.6, {top:"-100%"});
						TweenMax.to($("#wrap .mainTabCon .thrD"), 0.6, {top:"0", onComplete:function(){
							sectionMove = false;
							sectionN = 3;
						}});
					}
				}
			}
		}
	})

	var isKiaView = false;
	var rememberY = 0;
	$("#wrap .mainTabCon .oneD .listDiv .list.click").click(function(){
		if(!isKiaView) {
			isKiaView = true;
			TweenMax.to($("#wrap .mainTabCon .oneD .listDiv .list"), 0.5, {opacity:0, ease:Power2.easeOut});
			rememberY = parseInt($("#wrap .mainTabCon .oneD .listDiv .list.click").css("top").split("p")[0]);
			TweenMax.to($("#wrap .mainTabCon .oneD .listDiv .list.click"), 0.5, {opacity:1, top:0, ease:Power2.easeOut});
			TweenMax.to($("#wrap .mainTabCon .oneD .kiaView"), 0.7, {bottom:0, ease:Power2.easeOut});
			// $(".kiaView").css("paddingBottom", ($(window).height()/2) - 344)
			$("#wrap .bookBtn").fadeOut(500);
		} else {
			isKiaView = false;
			TweenMax.to($("#wrap .mainTabCon .oneD .listDiv .list"), 0.5, {opacity:1, ease:Power2.easeOut});
			TweenMax.to($("#wrap .mainTabCon .oneD .listDiv .list.click"), 0.5, {opacity:1, top:rememberY, ease:Power2.easeOut});
			TweenMax.to($("#wrap .mainTabCon .oneD .kiaView"), 0.7, {bottom:"-100%", ease:Power2.easeOut});
			$("#wrap .bookBtn").fadeIn(500);
		}
		//$("#wrap .mainTabCon .oneD .lyPop").stop(true, true).fadeIn(400);
	});

	$("#wrap .mainTabCon .oneD .lyPop").click(function(){
		$("#wrap .mainTabCon .oneD .lyPop").stop(true, true).fadeOut(400);
	});

	$("#wrap .pagiNavi .text span .toolTip").click(function(){
		if(sectionN == 0){
			if(!sectionMove){
				sectionMove = true;
				/*
				$(".header .logo").removeClass("on");
				$(".utill").removeClass("on");
				$(".hamburger").removeClass("on");*/
				$("#wrap .pagiNavi .bar span").eq(1).addClass("on");
				$("#wrap .pagiNavi .text span").eq(1).addClass("on");
				
				if(parseInt($("#wrap .mainTabCon .oneD .listDiv .list:first").css("top").split("p")[0]) != 0){
					TweenMax.to($(".wrapNavi .up"), 0.4, {className:"-=on"});
					TweenMax.to($("#wrap .mainV"), 0.6, {top:"-100%"});
					TweenMax.to($("#wrap .mainTabCon"), 0.6, {top:"0"});
					$("#wrap .mainTabCon .oneD .listDiv .list").each(function(q){
						if(q < 5){
							TweenMax.to($(this), 0.35, {top:parseInt($(this).css("top").split("p")[0]) - 400, opacity:1, delay:0.45 + q*0.07});
							if(q == 4){
								TweenMax.to($(this), 0.35, {top:parseInt($(this).css("top").split("p")[0]) - 400, opacity:1, delay:0.45 + q*0.07, onComplete:function(){
									sectionMove = false;
									sectionN = 1;
									sectionScrollMove = false;
									sectionScrollN = 0;
								}});							
							}
						}else{
							TweenMax.to($(this), 0, {top:parseInt($(this).css("top").split("p")[0]) - 400, opacity:1});
						}
					});
				}else{
					TweenMax.to($(".wrapNavi .up"), 0.4, {className:"-=on"});
					TweenMax.to($("#wrap .mainV"), 0.6, {top:"-100%"});
					TweenMax.to($("#wrap .mainTabCon"), 0.6, {top:"0", onComplete:function(){
						sectionMove = false;
						sectionN = 1;
						sectionScrollMove = false;
						sectionScrollN = 0;
					}});
				}
				
			}
		}
	});
	
	$(".mainTabCon .oneD .navi span.next").click(function(){
		if(!$(this).parents(".navi").hasClass("on")){
			$(this).parents(".navi").addClass("on");
			TweenMax.to($(".mainTabCon .oneD .pagination span"), 1, {width:"700", ease:Power3.easeOut});
			$(".mainTabCon .listDiv .list").each(function(q){
				TweenMax.to($(this), 0.7, {left:q * 430 - 1720, delay: q*0.1, ease:Power3.easeOut}); 
			});
		}
	});
	$(".mainTabCon .oneD .navi span.prev").click(function(){
		if($(this).parents(".navi").hasClass("on")){
			$(this).parents(".navi").removeClass("on");
			TweenMax.to($(".mainTabCon .oneD .pagination span"), 1, {width:"310", ease:Power3.easeOut});
			$(".mainTabCon .listDiv .list").each(function(q){
				TweenMax.to($(this), 0.7, {left:q * 430, delay: (7-q)*0.1, ease:Power3.easeOut}); 
			});
		}
	});

	$(".footer").click(function(){
		TweenMax.to($("#wrap .mainV"), 0.6, {top:0, ease:Power3.easeOut});
		TweenMax.to($("#wrap .mainTabCon"), 0.6, {top:"100%", ease:Power3.easeOut});
		TweenMax.to($("#wrap .mainTabCon .oneD"), 0.6, {top:"0", ease:Power3.easeOut});
		TweenMax.to($("#wrap .mainTabCon .twoD"), 0.6, {top:"100%", ease:Power3.easeOut});
		TweenMax.to($("#wrap .mainTabCon .thrD"), 0.6, {top:"100%", ease:Power3.easeOut});
		$("#wrap .mainTabCon .oneD .listDiv .list").css("top","");
		/*
		$(".header .logo").removeClass("on");
		$(".utill").removeClass("on");
		$(".hamburger").removeClass("on");*/
		sectionN = 0;
		$("#wrap .pagiNavi .bar span").eq(1).removeClass("on");
		$("#wrap .pagiNavi .bar span").eq(2).removeClass("on");
		$("#wrap .pagiNavi .bar span").eq(3).removeClass("on");
		$("#wrap .pagiNavi .text span").eq(1).removeClass("on");
		$("#wrap .pagiNavi .text span").eq(2).removeClass("on");
		$("#wrap .pagiNavi .text span").eq(3).removeClass("on");
		$("#wrap .bookBtn").css("bottom", "0")
		TweenMax.to($("#wrap .mainTabCon .thrD"), 0.1, {scrollTop:0});
	});

	$("#wrap .mainTabCon .twoD .bgDiv .hover a").each(function(q){
		$(this).hover(function(){
			TweenMax.to($("#wrap .mainTabCon .twoD .bgDiv .bg img").eq(q+1), 0.5, {opacity:1, ease:Power3.easeOut});
		}, function(){
			TweenMax.to($("#wrap .mainTabCon .twoD .bgDiv .bg img").eq(q+1), 0.5, {opacity:0, ease:Power3.easeOut});
		});
	});

	var offsetLeft;
	$(window).resize(function(){
		offsetLeft = $("#wrap").offset().left;
		$(".bookBtn").css("left", offsetLeft + 1580);
	});$(window).resize();

	$("#wrap .mainTabCon .thrD").scroll(function(){
		if($("#wrap .mainTabCon .thrD").scrollTop() > 0){
			$("#wrap .bookBtn").css("bottom", $("#wrap .mainTabCon .thrD").scrollTop())
		}else{
			$("#wrap .bookBtn").css("bottom", "0")
		}
	});
})