var _winH;
var script = (function(){
	return {
		readyEvt : function(){
			$(".workList .listDiv .list").each(function(){
				$(this).find(".dimd").css("background", $(this).data("color"));
			});
		},
		thumbHover : function (selector, cover) {
            var w, h, x, y, direction;
            $(selector).each(function(){
				$(this).on("mouseenter", function () {
					w = $(this).width();
					h = $(this).height();
					x = ( event.pageX - $(this).offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
					y = ( event.pageY - $(this).offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
					direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4;

					$(this).find(cover).show();

					if(direction == 0) {
						$(this).find(cover).css({"top":-h, "left":0});
					} else if(direction == 1) {
						$(this).find(cover).css({"top":0, "left":w});
					} else if(direction == 2) {
						$(this).find(cover).css({"top":h, "left":0});
					} else {
						$(this).find(cover).css({"top":0, "left":-w});
					}

					TweenMax.to($(this).find(cover), 0.4, {top:0, left:0, ease:Power3.easeOut});
				});

				$(this).on("mouseleave", function () {
					w = $(this).width();
					h = $(this).height();
					x = ( event.pageX - $(this).offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
					y = ( event.pageY - $(this).offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
					direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4;

					if(direction == 0) {
						TweenMax.to($(this).find(cover), 0.4, {top:-h, left:0, ease:Power3.easeOut, onComplete:function () {
							$(this).parent().find(cover).hide();
						}});
					} else if(direction == 1) {
						TweenMax.to($(this).find(cover), 0.4, {top:0, left:w, ease:Power3.easeOut, onComplete:function () {
							$(this).parent().find(cover).hide();
						}});
					} else if(direction == 2) {
						TweenMax.to($(this).find(cover), 0.4, {top:h, left:0, ease:Power3.easeOut, onComplete:function () {
							$(this).parent().find(cover).hide();
						}});
					} else {
						TweenMax.to($(this).find(cover), 0.4, {top:0, left:-w, ease:Power3.easeOut, onComplete:function () {
							$(this).parent().find(cover).hide();
						}});
					}
				})
            })
        },
		resizeEvt : function(){
			$(window).resize(function(){
				_winH = $(window).height();
				if($(".viewPop").is(":visible")){
					if(parseInt(_winH * 0.9) % 2 == 1){
						$(".viewPop").height(parseInt(_winH * 0.9) - 1);
					}else{
						$(".viewPop").height(parseInt(_winH * 0.9));
					}
				}
			});$(window).resize();
		},
		scrollEvt : function(){
			$(window).scroll(function(){
				if($(window).scrollTop() + $(window).height()/2 > $(".listDiv").offset().top){
					$(".listDiv .list").each(function(q){
						TweenMax.to($(".listDiv .list").eq(q), 0, {top:0, opacity:1, delay:q*0.15});
					});
				}
			});$(window).scroll();
		},
		viewPop : function(){
			var scrollT = 0;
			$(".listDiv .list").each(function(){
				$(this).click(function(){
					$(".dimdBg").stop(true, true).fadeIn(300);
					$(".viewPop").stop(true, true).fadeIn(300);
					scrollT = $(window).scrollTop();
					$("html").addClass("lock");
					if(!$(".viewPop").hasClass($(this).attr("id"))){
						$(".viewPop .titArea .tit span").text($(this).find(".txtArea .tit").text());
						if(!$(this).hasClass("etc")){
							$(".viewPop").removeClass().addClass("viewPop loading").addClass($(this).attr("id"));
							$(".viewPop .titArea .link").show();
							if($(this).data("href") == "intra"){
								if(!$(".viewPop .titArea .link").hasClass("on")){
									$(".viewPop .titArea .link").addClass("on");
								}
							}else{
								if($(".viewPop .titArea .link").hasClass("on")){
									$(".viewPop .titArea .link").removeClass("on");
								}
								$(".viewPop .titArea .link a").attr("href", $(this).data("href"));
							}
							$(".viewPop .etcArea").empty();
							$(".viewPop .conArea .imgArea").empty();
							$(".viewPop").height("");
							for (var i=0; i < $(this).data("img-size"); i++){
								$(".viewPop .conArea .imgArea").append('<img src="https://raw.githack.com/kyungba/portfolio/master/images/project_view_'+$(this).attr("id")+i+'.jpg" alt="" />').find("img").load(function(){
									if($(".viewPop").hasClass("loading")){
										$(".viewPop").removeClass("loading");
									}
								});
							}
						}else{
							$(".viewPop").removeClass().addClass("viewPop").addClass($(this).attr("id"));
							$(".viewPop .titArea .link").hide();
							$(".viewPop .conArea .imgArea").empty();
							$(".viewPop").height("");
							$(".viewPop .conArea .etcArea").html($(this).find(".kindD").html());
						}
						if(parseInt(_winH * 0.9) % 2 == 1){
							$(".viewPop").height(parseInt(_winH * 0.9) - 1);
						}else{
							$(".viewPop").height(parseInt(_winH * 0.9));
						}
					}
				});
			});
			$(".viewPop .xBtn").click(function(){
				$(".dimdBg").stop(true, true).fadeOut(300);
				$(".viewPop").stop(true, true).fadeOut(300);
				$("html").removeClass("lock");
				$("html, body").scrollTop(scrollT);
			});
		},
	}
})();



$(document).ready(function(){
	script.readyEvt();
	script.resizeEvt();
	script.scrollEvt();
	script.viewPop();
});


$(window).load(function(){
	script.thumbHover(".listDiv .list", ".dimd")
});