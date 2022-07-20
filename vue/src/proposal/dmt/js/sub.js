$(function(){
    TweenMax.fromTo($("#header .logo"), 0.6, {left:-300, opacity:0}, {left:0, opacity:1, ease:Power1.easeOut});
    TweenMax.fromTo($("#header .gnb"), 0.6, {right:-1345, opacity:0}, {right:0, opacity:1, ease:Power1.easeOut});

    //검색
    var isSearch = false;
    $(".search").on("click", function(){
        if(!isSearch) {
            isSearch = true;
            $(".search-cont").show();
            TweenMax.to($(".search-cont"), 0.4, {height:300, ease:Power1.easeOut});
            TweenMax.to($(".search-cont img"), 0, {top:-300, ease:Power3.easeOut});
            TweenMax.to($(".search-cont img"), 0.5, {delay:0.2, top:0, ease:Power1.easeOut});
            $(".black-bg").stop(true, true).fadeIn(400);
        } else {
            isSearch = false;
            TweenMax.to($(".search-cont"), 0.4, {height:0, ease:Power1.easeOut, onComplete:function(){
                    $(".search-cont").hide();
                }});
            $(".black-bg").stop(true, true).fadeOut(400);
        }
    });

    //메뉴 오버
    $("#header .gnb .menu").hover(function(){
        $(".gnb-menu").show();
        $(".gnb-menu").css("left", 700);
        $(".gnb-menu").css("opacity", 0);
        $(".black-bg").stop(true, true).fadeIn(400);
        TweenMax.to($(".gnb-menu"), 0.5, {left:660, opacity:1, ease:Power2.easeOut});
    }, function(){
        $(".black-bg").stop(true, true).fadeOut(400);
        TweenMax.to($(".gnb-menu"), 0.5, {left:620, opacity:0, ease:Power2.easeOut});
    })


    //sub
    $(".sub-container .sub-tab-cont .one-dep").each(function(q){
        $(this).on("click", function(){
            if($(this).hasClass("on")) {
                $(this).removeClass("on");
                $(this).find("img").attr("src", $(this).find("img").attr("src").replace("_on.jpg", ".jpg"));
                $(this).next().stop(true, true).slideUp(300);
            } else {
                $(this).addClass("on");
                $(this).find("img").attr("src", $(this).find("img").attr("src").replace(".jpg", "_on.jpg"));
                $(this).next().stop(true, true).slideDown(300);
            }
        });
    });

    $(".sub-container .sub-tab-cont .slide-cont > .slide a").each(function(q){
        $(this).on("click", function(){
           if($(this).find("img").attr("src").indexOf("_on") < 0) {
               $(this).find("img").attr("src", $(this).find("img").attr("src").replace(".jpg", "_on.jpg"));
           } else {
               $(this).find("img").attr("src", $(this).find("img").attr("src").replace("_on.jpg", ".jpg"));
           }
        });
    })

    //좌측 탭
    $(".sub-container .sub-left .tab a").each(function(q){
        $(this).on("click", function(){
            $(".sub-container .sub-left .tab a").removeClass("on");
            $(this).addClass("on");
            $(".sub-container .sub-tab-cont .cont").removeClass("on");
            $(".sub-container .sub-tab-cont .cont").eq(q).addClass("on");
        });
    });

    //sort
    $(".sub-container .sub-left .reset a").each(function(q){
        $(this).on("click", function(){
            if(!q) {
                $(".sub-container .sub-right .item-cont1 div").eq(2).show();
                TweenMax.to($(".sub-container .sub-right .item-cont1 div").eq(2), 0.3, {scale:1, opacity:1, ease:Power3.easeOut, onComplete:function(){
                }})

                $(".sub-container .sub-right .item-cont1 div").eq(4).show();
                TweenMax.to($(".sub-container .sub-right .item-cont1 div").eq(4), 0.3, {scale:1, opacity:1, ease:Power3.easeOut, onComplete:function(){
                }})

                $(".sub-container .sub-right .item-cont1 div").eq(5).show();
                TweenMax.to($(".sub-container .sub-right .item-cont1 div").eq(5), 0.3, {scale:1, opacity:1, ease:Power3.easeOut, onComplete:function(){
                }})
            } else {
                TweenMax.to($(".sub-container .sub-right .item-cont1 div").eq(2), 0.3, {scale:0.3, opacity:0, ease:Power3.easeOut, onComplete:function(){
                    $(".sub-container .sub-right .item-cont1 div").eq(2).hide();
                }})

                TweenMax.to($(".sub-container .sub-right .item-cont1 div").eq(4), 0.3, {scale:0.3, opacity:0, ease:Power3.easeOut, onComplete:function(){
                    $(".sub-container .sub-right .item-cont1 div").eq(4).hide();
                }})

                TweenMax.to($(".sub-container .sub-right .item-cont1 div").eq(5), 0.3, {scale:0.3, opacity:0, ease:Power3.easeOut, onComplete:function(){
                    $(".sub-container .sub-right .item-cont1 div").eq(5).hide();
                }})
            }
        })
    })


    //product
    $(".sub-container .sub-right .item-cont1 > div").hover(function(){
        $(this).find(".over").stop(true, true).fadeIn(500);
    }, function(){
        $(this).find(".over").stop(true, true).fadeOut(500);
    })
    $(".sub-container .sub-right .item-cont1 > div .check").on("click", function(){
        if($(this).css("opacity") == 0) {
            TweenMax.to($(this), 0.5, {opacity:1});
        } else {
            TweenMax.to($(this), 0.5, {opacity:0});
        }
    })

    $(".sub-container .sub-right .item-cont2 > a").hover(function(){
        $(this).find(".over").stop(true, true).fadeIn(500);
    }, function(){
        $(this).find(".over").stop(true, true).fadeOut(500);
    }).on("click", function(){
        if($(this).find(".check").is(":hidden")) {
            $(this).find(".check").show();
        } else {
            $(this).find(".check").hide();
        }
    })


    // 섬네일형식 / 리스트형식
    $(".sub-container .sub-right .btn-area a").each(function(q){
        $(this).on("click", function(){
            if(q == 0) {
                $(".sub-container .sub-right .btn-area a").eq(0).find("img").attr("src", "./images/btn_gallery_on.jpg");
                $(".sub-container .sub-right .btn-area a").eq(1).find("img").attr("src", "./images/btn_list.jpg");
                $(".sub-container .sub-right .item-cont1").show();
                $(".sub-container .sub-right .item-cont2").hide();

                TweenMax.to($(".sub-container .sub-right .item-cont1").find("div").eq(0), 0, {top:50, opacity:0, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont1").find("div").eq(1), 0, {top:50, opacity:0, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont1").find("div").eq(2), 0, {top:50, opacity:0, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont1").find("div").eq(3), 0, {top:50, opacity:0, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont1").find("div").eq(4), 0, {top:50, opacity:0, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont1").find("div").eq(5), 0, {top:50, opacity:0, ease:Power2.easeOut});

                TweenMax.to($(".sub-container .sub-right .item-cont1").find("div").eq(0), 0.5, {delay:0.1, top:0, opacity:1, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont1").find("div").eq(1), 0.5, {delay:0.2, top:0, opacity:1, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont1").find("div").eq(2), 0.5, {delay:0.3, top:0, opacity:1, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont1").find("div").eq(3), 0.5, {delay:0.4, top:0, opacity:1, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont1").find("div").eq(4), 0.5, {delay:0.5, top:0, opacity:1, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont1").find("div").eq(5), 0.5, {delay:0.6, top:0, opacity:1, ease:Power2.easeOut});
            } else if(q == 1) {
                $(".sub-container .sub-right .btn-area a").eq(0).find("img").attr("src", "./images/btn_gallery.jpg");
                $(".sub-container .sub-right .btn-area a").eq(1).find("img").attr("src", "./images/btn_list_on.jpg");
                $(".sub-container .sub-right .item-cont1").hide();
                $(".sub-container .sub-right .item-cont2").show();

                TweenMax.to($(".sub-container .sub-right .item-cont2").find("a").eq(0), 0, {top:50, opacity:0, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont2").find("a").eq(1), 0, {top:50, opacity:0, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont2").find("a").eq(2), 0, {top:50, opacity:0, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont2").find("a").eq(3), 0, {top:50, opacity:0, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont2").find("a").eq(4), 0, {top:50, opacity:0, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont2").find("a").eq(5), 0, {top:50, opacity:0, ease:Power2.easeOut});

                TweenMax.to($(".sub-container .sub-right .item-cont2").find("a").eq(0), 0.5, {delay:0.1, top:0, opacity:1, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont2").find("a").eq(1), 0.5, {delay:0.2, top:0, opacity:1, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont2").find("a").eq(2), 0.5, {delay:0.3, top:0, opacity:1, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont2").find("a").eq(3), 0.5, {delay:0.4, top:0, opacity:1, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont2").find("a").eq(4), 0.5, {delay:0.5, top:0, opacity:1, ease:Power2.easeOut});
                TweenMax.to($(".sub-container .sub-right .item-cont2").find("a").eq(5), 0.5, {delay:0.6, top:0, opacity:1, ease:Power2.easeOut});
            } else {
                //팝업
                $(".black-bg2").stop(true, true).fadeIn(400);
                $(".popup").stop(true, true).fadeIn(400);
            }
        })
    });
    $(".popup .header").on("click", function(){
        $(".black-bg2").stop(true, true).fadeOut(400);
        $(".popup").stop(true, true).fadeOut(400);
    });


    //상세 제품 롤링
    var isRoll1 = false;
    $(".roll-area .left > a").each(function(q){
        $(this).on("click", function(){
            if(!isRoll1) {
                isRoll1 = true;
                TweenMax.to($(".roll-area .left .roll .img").eq(0), 0.7, {left:"-100%", ease:Power3.easeOut});
                TweenMax.to($(".roll-area .left .roll .img").eq(1), 0.7, {left:0, ease:Power3.easeOut});
                $(".roll-area .left .thumb").find("img:eq(0)").attr("src", "./images/sub_detail_product_thumb2.jpg");
            } else {
                isRoll1 = false;
                TweenMax.to($(".roll-area .left .roll .img").eq(0), 0.7, {left:0, ease:Power3.easeOut});
                TweenMax.to($(".roll-area .left .roll .img").eq(1), 0.7, {left:"100%", ease:Power3.easeOut});
                $(".roll-area .left .thumb").find("img:eq(0)").attr("src", "./images/sub_detail_product_thumb1.jpg");
            }
        })
    });

    //sub-section7
    var isRoll2 = false;
    $(".sub-section7 .inner-area > a").each(function(q){
        $(this).on("click", function(){
            if(!isRoll2) {
                isRoll2 = true;
                TweenMax.to($(".sub-section7 .roll .img").eq(0), 0.7, {left:"-100%", ease:Power3.easeOut});
                TweenMax.to($(".sub-section7 .roll .img").eq(1), 0.7, {left:0, ease:Power3.easeOut});
                TweenMax.to($(".sub-section7 .inner-area .txt-area .txt1"), 0.7, {opacity:0, ease:Power3.easeOut});
                TweenMax.to($(".sub-section7 .inner-area .txt-area .txt2"), 0.7, {opacity:1, ease:Power3.easeOut});
                $(".sub-section7 .inner-area .blt span").eq(0).removeClass("on");
                $(".sub-section7 .inner-area .blt span").eq(1).addClass("on");
            } else {
                isRoll2 = false;
                TweenMax.to($(".sub-section7 .roll .img").eq(0), 0.7, {left:0, ease:Power3.easeOut});
                TweenMax.to($(".sub-section7 .roll .img").eq(1), 0.7, {left:"100%", ease:Power3.easeOut});
                TweenMax.to($(".sub-section7 .inner-area .txt-area .txt1"), 0.7, {opacity:1, ease:Power3.easeOut});
                TweenMax.to($(".sub-section7 .inner-area .txt-area .txt2"), 0.7, {opacity:0, ease:Power3.easeOut});
                $(".sub-section7 .inner-area .blt span").eq(1).removeClass("on");
                $(".sub-section7 .inner-area .blt span").eq(0).addClass("on");
            }
        });
    })


    //sub-section8
    var isRoll3 = false;
    $(".sub-section8 .roll .btn > a").each(function(q){
        $(this).on("click", function(){
            if(!isRoll3) {
                isRoll3 = true;
                $(".sub-section8 .roll .btn").hide();
                TweenMax.to($(".sub-section8 .roll .img1"), 0.5, {left:-1180, ease:Power2.easeOut});
                TweenMax.to($(".sub-section8 .roll .img2"), 0.5, {left:-360, width:800, ease:Power2.easeOut});
                TweenMax.to($(".sub-section8 .roll .img3"), 0.5, {left:460, width:1000, ease:Power2.easeOut});
                TweenMax.to($(".sub-section8 .roll .img4"), 0.5, {left:1480, ease:Power2.easeOut, onComplete:function(){
                    $(".sub-section8 .roll .btn").stop(true, true).fadeIn(300);
                }});

                TweenMax.to($(".sub-section8 .txt img").eq(0), 0.6, {left:-100, opacity:0, ease:Power3.easeOut});
                TweenMax.to($(".sub-section8 .txt img").eq(1), 0, {left:100, opacity:0, ease:Power3.easeOut});
                TweenMax.to($(".sub-section8 .txt img").eq(1), 0.6, {left:0, opacity:1, ease:Power3.easeOut});
            } else {
                isRoll3 = false;
                $(".sub-section8 .roll .btn").hide();
                TweenMax.to($(".sub-section8 .roll .img1"), 0.5, {left:-360, ease:Power2.easeOut});
                TweenMax.to($(".sub-section8 .roll .img2"), 0.5, {left:460, width:1000, ease:Power2.easeOut});
                TweenMax.to($(".sub-section8 .roll .img3"), 0.5, {left:1480, width:800, ease:Power2.easeOut});
                TweenMax.to($(".sub-section8 .roll .img4"), 0.5, {left:2300, ease:Power2.easeOut, onComplete:function(){
                    $(".sub-section8 .roll .btn").stop(true, true).fadeIn(300);
                }});

                TweenMax.to($(".sub-section8 .txt img").eq(0), 0.6, {left:0, opacity:1, ease:Power3.easeOut});
                // TweenMax.to($(".sub-section8 .txt img").eq(1), 0, {left:100, opacity:0, ease:Power3.easeOut});
                TweenMax.to($(".sub-section8 .txt img").eq(1), 0.6, {left:100, opacity:0, ease:Power3.easeOut});
            }
        })
    });

    //sub-section10
    $(".sub-section10 .roll-cont .roll").hover(function(){
        $(this).find(".over").stop(true, true).fadeIn(500);
    }, function(){
        $(this).find(".over").stop(true, true).fadeOut(500);
    });
    var isRoll4 = false;
    $(".sub-section10 .btn a").each(function(q){
        $(this).on("click", function(){
            if(!isRoll4) {
                isRoll4 = true;
                TweenMax.to($(".sub-section10 .roll-cont .roll").eq(0), 0.5, {scale:0.3, opacity:0, ease:Power3.easeOut});
                TweenMax.to($(".sub-section10 .roll-cont .roll").eq(1), 0.5, {delay:0.2, left:0, ease:Power3.easeOut});
                TweenMax.to($(".sub-section10 .roll-cont .roll").eq(2), 0.5, {delay:0.3, left:425, ease:Power3.easeOut});
                TweenMax.to($(".sub-section10 .roll-cont .roll").eq(3), 0, {scale:0.3, opacity:0, ease:Power3.easeOut});
                TweenMax.to($(".sub-section10 .roll-cont .roll").eq(3), 0.5, {delay:0.4, scale:1, opacity:1, ease:Power3.easeOut});
            } else {
                isRoll4 = false;
                TweenMax.to($(".sub-section10 .roll-cont .roll").eq(0), 0.5, {delay:0.4, scale:1, opacity:1, ease:Power3.easeOut});
                TweenMax.to($(".sub-section10 .roll-cont .roll").eq(1), 0.5, {delay:0.3, left:425, ease:Power3.easeOut});
                TweenMax.to($(".sub-section10 .roll-cont .roll").eq(2), 0.5, {delay:0.2, left:853, ease:Power3.easeOut});
                TweenMax.to($(".sub-section10 .roll-cont .roll").eq(3), 0.5, {scale:0.3, opacity:0, ease:Power3.easeOut});
            }
        })
    });

    //sub-section11
    $(".sub-section11 .over").hover(function(){
        TweenMax.to($(this), 0.5, {opacity:1, ease:Power3.easeOut});
    }, function(){
        TweenMax.to($(this), 0.5, {opacity:0, ease:Power3.easeOut});
    });




    //스크롤 모션
    var scrolY;
    $(window).scroll(function(){
        if($(window).scrollTop() > $(".sub-section2").offset().top - 400) {
            scrolY = -$(window).scrollTop() / 15 + "px";
            TweenMax.to($(".sub-section2 .img1"), 0.5, {delay:0.4, top:123, opacity:1, ease:Power2.easeOut});
            TweenMax.to($(".sub-section2 .img2"), 0.5, {delay:0.6, top:217, opacity:1, ease:Power2.easeOut});
            TweenMax.to($(".sub-section2 .img3"), 0.5, {delay:0.7, top:217, opacity:1, ease:Power2.easeOut});
            TweenMax.to($(".sub-section2 .img4"), 0.5, {delay:0.8, top:217, opacity:1, ease:Power2.easeOut});
            TweenMax.to($(".sub-section2 .img5"), 0.5, {delay:0.9, top:217, opacity:1, ease:Power2.easeOut});
            TweenMax.to($(".sub-section2"), 0.5, {backgroundPosition:"0 "+scrolY+"", ease:Power1.easeOut});
        }

        if($(window).scrollTop() > $(".sub-section3 .list:eq(0)").offset().top - 700) {
            TweenMax.to($(".sub-section3 .img1"), 0.9, {delay:0, top:0, opacity:1, ease:Power2.easeOut});
            TweenMax.to($(".sub-section3 .img2"), 0.9, {delay:0.3, top:0, opacity:1, ease:Power2.easeOut});
            TweenMax.to($(".sub-section3 .img3"), 0.9, {delay:0.5, top:0, opacity:1, ease:Power2.easeOut});
        }

        if($(window).scrollTop() > $(".sub-section4 .list:eq(0)").offset().top - 700) {
            TweenMax.to($(".sub-section4 .img1"), 0.9, {delay:0, top:0, opacity:1, ease:Power2.easeOut});
        }

        if($(window).scrollTop() > $(".sub-section5 .list:eq(0)").offset().top - 700) {
            TweenMax.to($(".sub-section5 .img1"), 0.9, {delay:0, top:0, opacity:1, ease:Power2.easeOut});
            TweenMax.to($(".sub-section5 .img2"), 0.9, {delay:0.3, top:226, opacity:1, ease:Power2.easeOut});
        }

        if($(window).scrollTop() > $(".sub-section6").offset().top - 700) {
            TweenMax.to($(".sub-section6 img"), 0.9, {delay:0, top:0, opacity:1, ease:Power2.easeOut});
        }

        if($(window).scrollTop() > $(".sub-section7").offset().top - 700) {
            TweenMax.to($(".sub-section7"), 0.9, {top:0, opacity:1, ease:Power2.easeOut});
        }

        if($(window).scrollTop() > $(".sub-section8").offset().top - 700) {
            TweenMax.to($(".sub-section8"), 0.9, {top:0, opacity:1, ease:Power2.easeOut});
        }

        if($(window).scrollTop() > $(".sub-section9").offset().top - 700) {
            TweenMax.to($(".sub-section9"), 0.9, {top:0, opacity:1, ease:Power2.easeOut});
        }

        if($(window).scrollTop() > $(".sub-section10").offset().top - 700) {
            TweenMax.to($(".sub-section10"), 0.9, {top:0, opacity:1, ease:Power2.easeOut});
        }

        if($(window).scrollTop() > $(".sub-section11").offset().top - 700) {
            TweenMax.to($(".sub-section11"), 0.9, {top:0, opacity:1, ease:Power2.easeOut});
        }
    }); $(window).scroll();
});