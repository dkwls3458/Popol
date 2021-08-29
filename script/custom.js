function webSlideMove() {
    const webCont = document.querySelector('.web_cont_all');
    const topBtn = document.querySelector('.web_top');
    const bottomBtn = document.querySelector('.web_bottom');
    let listCount = 0;

    topBtn.addEventListener('click', function () {
        if (listCount > 0) { //제일 위가 아니면 실행
            listCount--;
            webCont.style.top = -(940 * listCount) + "px"
        }
    });

    bottomBtn.addEventListener('click', function () {
        if (listCount < 2) { //제일 밑이 아니면 실행
            listCount++;
            webCont.style.top = -(940 * listCount) + "px";
        }
    });
}

webSlideMove();



// nav 스크롤 이동
$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800, );
    return false;
});



// web_slide 기능
var ws = 0;

setInterval(function () {
    if (ws == 0) {
        $('.web_slide_1 img').eq(0).fadeIn();
        $('.web_slide_1 img').eq(1).fadeOut();
        $('.web_slide_1 img').eq(2).fadeOut();
        ws++;
    } else if (ws == 1) {
        $('.web_slide_1 img').eq(0).fadeOut();
        $('.web_slide_1 img').eq(1).fadeIn();
        $('.web_slide_1 img').eq(2).fadeOut();
        ws++;
    } else {
        $('.web_slide_1 img').eq(0).fadeOut();
        $('.web_slide_1 img').eq(1).fadeOut();
        $('.web_slide_1 img').eq(2).fadeIn();
        ws = 0;
    }
}, 4000);

setInterval(function () {
    if (ws == 0) {
        $('.web_slide_2 img').eq(0).fadeIn();
        $('.web_slide_2 img').eq(1).fadeOut();
        $('.web_slide_2 img').eq(2).fadeOut();
    } else if (ws == 1) {
        $('.web_slide_2 img').eq(0).fadeOut();
        $('.web_slide_2 img').eq(1).fadeIn();
        $('.web_slide_2 img').eq(2).fadeOut();
    } else {
        $('.web_slide_2 img').eq(0).fadeOut();
        $('.web_slide_2 img').eq(1).fadeOut();
        $('.web_slide_2 img').eq(2).fadeIn();
    }
}, 4000);

setInterval(function () {
    if (ws == 0) {
        $('.web_slide_3 img').eq(0).fadeIn();
        $('.web_slide_3 img').eq(1).fadeOut();
        $('.web_slide_3 img').eq(2).fadeOut();
    } else if (ws == 1) {
        $('.web_slide_3 img').eq(0).fadeOut();
        $('.web_slide_3 img').eq(1).fadeIn();
        $('.web_slide_3 img').eq(2).fadeOut();
    } else {
        $('.web_slide_3 img').eq(0).fadeOut();
        $('.web_slide_3 img').eq(1).fadeOut();
        $('.web_slide_3 img').eq(2).fadeIn();
    }
}, 4000);


// edit_slide 기능
var es_1 = 0;
var es_2 = 0;
var es_3 = 0;
var es_4 = 0;
var es_5 = 0;
var es_6 = 0;
var es_7 = 0;

setInterval(function () {
    if (es_1 == 0) {
        $('.eslide_1').css("left", "0");
        es_1++;
    } else if (es_1 == 1) {
        $('.eslide_1').css("left", "-550px");
        es_1++;
    } else if (es_1 == 2) {
        $('.eslide_1').css("left", "-1100px");
        es_1 = 0;
    }
}, 3000);

setInterval(function () {
    if (es_2 == 0) {
        $('.eslide_2').css("top", "0px")
        es_2++;
    } else {
        $('.eslide_2').css("top", "-240px")
        es_2 = 0;
    }
}, 4000);

setInterval(function () {
    if (es_3 == 0) {
        $('.eslide_3').css("right", "0");
        es_3++;
    } else {
        $('.eslide_3').css("right", "275px");
        es_3 = 0;
    }
}, 2000);

setInterval(function () {
    if (es_4 == 0) {
        $('.eslide_4').css("left", "0px");
        es_4++;
    } else {
        $('.eslide_4').css("left", "-275px");
        es_4 = 0;
    }
}, 3000);

setInterval(function () {
    if (es_5 == 0) {
        $('.eslide_5').css("top", "0px");
        es_5++;
    } else {
        $('.eslide_5').css("top", "-240px");
        es_5 = 0;
    }
}, 6000);

setInterval(function () {
    if (es_6 == 0) {
        $('.eslide_6').css("left", "-550px");
        es_6++;
    } else if (es_6 == 1) {
        $('.eslide_6').css("left", "-1100px");
        es_6++;
    } else {
        $('.eslide_6').css("left", "0px");
        es_6 = 0;
    }
}, 5000);

setInterval(function () {
    if (es_7 == 0) {
        $('.eslide_7').css("top", "-120px")
        es_7++;
    } else if (es_7 == 1) {
        $('.eslide_7').css("top", "-240px")
        es_7++;
    } else {
        $('.eslide_7').css("top", "0px")
        es_7 = 0;
    }
}, 3000);



// skill_mouseover/out 기능
// for (var i = 0; i < 7; i++) {
//     $('.skill_1 li').eq(i).mouseover(function () {
//         $('.skill_cont>ul>li').eq(i).slideUp().fadeIn();
//     });
//     $('.skill_1 li').eq(i).mouseout(function () {
//         $('.skill_cont>ul>li').eq(i).slideDown().fadeOut();
//     });

//     var count = 8;
//     $('.skill_2 li').eq(i).mouseover(function () {
//         $('.skill_cont>ul>li').eq(count).slideUp().fadeIn();
//     });
//     $('.skill_2 li').eq(i).mouseout(function () {
//         $('.skill_cont>ul>li').eq(count).slideDown().fadeOut();
//     });
//     count++;
// }



$('.skill_1 li').eq(0).mouseover(function () {
    $('.skill_cont>ul>li').eq(0).slideUp().fadeIn();
});
$('.skill_1 li').eq(0).mouseout(function () {
    $('.skill_cont>ul>li').eq(0).slideDown().fadeOut();
});
$('.skill_1 li').eq(1).mouseover(function () {
    $('.skill_cont>ul>li').eq(1).slideUp().fadeIn();
});
$('.skill_1 li').eq(1).mouseout(function () {
    $('.skill_cont>ul>li').eq(1).slideDown().fadeOut();
});
$('.skill_1 li').eq(2).mouseover(function () {
    $('.skill_cont>ul>li').eq(2).slideUp().fadeIn();
});
$('.skill_1 li').eq(2).mouseout(function () {
    $('.skill_cont>ul>li').eq(2).slideDown().fadeOut();
});
$('.skill_1 li').eq(3).mouseover(function () {
    $('.skill_cont>ul>li').eq(3).slideUp().fadeIn();
});
$('.skill_1 li').eq(3).mouseout(function () {
    $('.skill_cont>ul>li').eq(3).slideDown().fadeOut();
});
$('.skill_1 li').eq(4).mouseover(function () {
    $('.skill_cont>ul>li').eq(4).slideUp().fadeIn();
});
$('.skill_1 li').eq(4).mouseout(function () {
    $('.skill_cont>ul>li').eq(4).slideDown().fadeOut();
});
$('.skill_1 li').eq(5).mouseover(function () {
    $('.skill_cont>ul>li').eq(5).slideUp().fadeIn();
});
$('.skill_1 li').eq(5).mouseout(function () {
    $('.skill_cont>ul>li').eq(5).slideDown().fadeOut();
});
$('.skill_1 li').eq(6).mouseover(function () {
    $('.skill_cont>ul>li').eq(6).slideUp().fadeIn();
});
$('.skill_1 li').eq(6).mouseout(function () {
    $('.skill_cont>ul>li').eq(6).slideDown().fadeOut();
});
$('.skill_2 li').eq(0).mouseover(function () {
    $('.skill_cont>ul>li').eq(7).slideUp().fadeIn();
});
$('.skill_2 li').eq(0).mouseout(function () {
    $('.skill_cont>ul>li').eq(7).slideDown().fadeOut();
});
$('.skill_2 li').eq(1).mouseover(function () {
    $('.skill_cont>ul>li').eq(8).slideUp().fadeIn();
});
$('.skill_2 li').eq(1).mouseout(function () {
    $('.skill_cont>ul>li').eq(8).slideDown().fadeOut();
});
$('.skill_2 li').eq(2).mouseover(function () {
    $('.skill_cont>ul>li').eq(9).slideUp().fadeIn();
});
$('.skill_2 li').eq(2).mouseout(function () {
    $('.skill_cont>ul>li').eq(9).slideDown().fadeOut();
});
$('.skill_2 li').eq(3).mouseover(function () {
    $('.skill_cont>ul>li').eq(10).slideUp().fadeIn();
});
$('.skill_2 li').eq(3).mouseout(function () {
    $('.skill_cont>ul>li').eq(10).slideDown().fadeOut();
});
$('.skill_2 li').eq(4).mouseover(function () {
    $('.skill_cont>ul>li').eq(11).slideUp().fadeIn();
});
$('.skill_2 li').eq(4).mouseout(function () {
    $('.skill_cont>ul>li').eq(11).slideDown().fadeOut();
});
$('.skill_2 li').eq(5).mouseover(function () {
    $('.skill_cont>ul>li').eq(12).slideUp().fadeIn();
});
$('.skill_2 li').eq(5).mouseout(function () {
    $('.skill_cont>ul>li').eq(12).slideDown().fadeOut();
});
$('.skill_2 li').eq(6).mouseover(function () {
    $('.skill_cont>ul>li').eq(13).slideUp().fadeIn();
});
$('.skill_2 li').eq(6).mouseout(function () {
    $('.skill_cont>ul>li').eq(13).slideDown().fadeOut();
});



// skill_slide 기능 
$('.s_btn_1').click(function () {
    $('.skill_all').css("left", "0px");
});
$('.s_btn_2').click(function () {
    $('.skill_all').css("left", "-500px");
});



// 이건 머였지?
$(window).on("scroll", function () {
    var scroll_top = $(this).scrollTop();
    var scroll_left = $(this).scrollLeft();
    $(".top").text(scroll_top);
    $(".left").text(scroll_left);
});