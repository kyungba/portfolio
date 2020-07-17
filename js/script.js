var script = (function(){
	console.log(1)
	return {
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

                    TweenMax.to($(this).find(cover), 0.8, {top:0, left:0, ease:Power3.easeOut});
                });

                $(this).on("mouseleave", function () {
                    w = $(this).width();
                    h = $(this).height();
                    x = ( event.pageX - $(this).offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
                        y = ( event.pageY - $(this).offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
                        direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4;

                    if(direction == 0) {
                        TweenMax.to($(this).find(cover), 0.8, {top:-h, left:0, ease:Power3.easeOut, onComplete:function () {
                                $(this).parent().find(cover).hide();
                            }});
                    } else if(direction == 1) {
                        TweenMax.to($(this).find(cover), 0.8, {top:0, left:w, ease:Power3.easeOut, onComplete:function () {
                                $(this).parent().find(cover).hide();
                            }});
                    } else if(direction == 2) {
                        TweenMax.to($(this).find(cover), 0.8, {top:h, left:0, ease:Power3.easeOut, onComplete:function () {
                                $(this).parent().find(cover).hide();
                            }});
                    } else {
                        TweenMax.to($(this).find(cover), 0.8, {top:0, left:-w, ease:Power3.easeOut, onComplete:function () {
                                $(this).parent().find(cover).hide();
                            }});
                    }
                })
            })
        },
	}
})();



$(document).ready(function(){
	
});


$(window).load(function(){
	script.thumbHover(".listDiv .list", ".after")
});