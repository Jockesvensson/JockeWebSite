$(document).ready(function() {
    $('.header').height($(window).height());
})


$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 8
    }, 2);
});


$(document).ready(function() {

    $("#show").click(function() {
        $(".picturediv").slideDown(300);
        //   $(".container-information").show();
        $(".container").css({ opacity: 0.3 });
    });
});

$(".info-close").on("click", function() {
    closeView()
});

$(document).ready(function() {

    $("#show1").click(function() {
        $(".picturediv1").slideDown(300);
        //   $(".container-information").show();
        $(".container").css({ opacity: 0.3 });
    });
});

$(".info-close1").on("click", function() {
    closeView1()
});

$(document).ready(function() {

    $("#show2").click(function() {
        $(".picturediv2").slideDown(300);
        //   $(".container-information").show();
        $(".container").css({ opacity: 0.3 });
    });
});

$(".info-close2").on("click", function() {
    closeView2()
});

$(document).ready(function() {

    $("#show3").click(function() {
        $(".picturediv3").slideDown(300);
        //   $(".container-information").show();
        $(".container").css({ opacity: 0.3 });
    });
});

$(".info-close3").on("click", function() {
    closeView3()
});

$(document).ready(function() {

    $("#show4").click(function() {
        $(".picturediv4").slideDown(300);
        //   $(".container-information").show();
        $(".container").css({ opacity: 0.3 });
    });
});

$(".info-close4").on("click", function() {
    closeView4()
});

function closeView() {
    $(".picturediv").slideUp(300);
    $(".container").css({ opacity: 1 });
}

function closeView1() {
    $(".picturediv1").slideUp(300);
    $(".container").css({ opacity: 1 });
}

function closeView2() {
    $(".picturediv2").slideUp(300);
    $(".container").css({ opacity: 1 });
}

function closeView3() {
    $(".picturediv3").slideUp(300);
    $(".container").css({ opacity: 1 });
}

function closeView4() {
    $(".picturediv4").slideUp(300);
    $(".container").css({ opacity: 1 });
}

$(document).mouseup(function(e) {
    var popup = $(".picturediv, .picturediv1, .picturediv2, .picturediv3, .picturediv4");
    if (!$('#show').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
        popup.slideUp(300);
        $(".container").css({ opacity: 1 });
    }
});


$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $(".nav-box").slideToggle(300);
    });
});

$(".nav-box-link").on("click", function() {
    closeNav()
});

function closeNav() {
    $(".nav-box").slideUp(300);
}




$(document).ready(function() {
    $('#info-box').mouseleave(function(event) {
        $('.image').stop().animate({
            opacity: '1',

        }, 1000, function() { //animation complete
            $('#info-box').removeClass('hovered');
        });
        $(".top").stop().fadeOut(800),
            function() {
                $("#info-box").addClass("hovered");
            }
        $(".bottom").stop().slideUp("slow"),
            function() {
                $("#info-box").addClass("hovered");
            }
    });
    $('#info-box').mouseover(function(event) {
        $('.image').stop().animate({
            opacity: '0',



        }, 1000, function() { //animation complete
            $('#info-box').addClass('hovered');
        });
        $(".top").stop().fadeIn(1000),
            function() {
                $("#info-box").addClass("hovered");
            }
        $(".bottom").stop().slideDown("slow"),
            function() {
                $("#info-box").addClass("hovered");
            }
    });
});

$(document).ready(function() {
    $('#info-box1').mouseleave(function(event) {
        $('.image1').stop().animate({
            opacity: '1',

        }, 1000, function() { //animation complete
            $('#info-box1').removeClass('hovered');
        });
        $(".top1").stop().fadeOut(800),
            function() {
                $("#info-box1").addClass("hovered");
            }
        $(".bottom1").stop().slideUp("slow"),
            function() {
                $("#info-box1").addClass("hovered");
            }
    });
    $('#info-box1').mouseover(function(event) {
        $('.image1').stop().animate({
            opacity: '0'


        }, 1000, function() { //animation complete
            $('#info-box1').addClass('hovered');
        });
        $(".top1").stop().fadeIn(1000),
            function() {
                $("#info-box1").addClass("hovered");
            }
        $(".bottom1").stop().slideDown("slow"),
            function() {
                $("#info-box1").addClass("hovered");
            }
    });
});

$(document).ready(function() {
    $('#info-box2').mouseleave(function(event) {
        $('.image2').stop().animate({
            opacity: '1',

        }, 1000, function() { //animation complete
            $('#info-box2').removeClass('hovered');
        });
        $(".top2").stop().fadeOut(800),
            function() {
                $("#info-box2").addClass("hovered");
            }
        $(".bottom2").stop().slideUp("slow"),
            function() {
                $("#info-box2").addClass("hovered");
            }
    });
    $('#info-box2').mouseover(function(event) {
        $('.image2').stop().animate({
            opacity: '0'


        }, 1000, function() { //animation complete
            $('#info-box2').addClass('hovered');
        });
        $(".top2").stop().fadeIn(1000),
            function() {
                $("#info-box2").addClass("hovered");
            }
        $(".bottom2").stop().slideDown("slow"),
            function() {
                $("#info-box2").addClass("hovered");
            }
    });
});

$(document).ready(function() {
    $('#info-box3').mouseleave(function(event) {
        $('.image3').stop().animate({
            opacity: '1',

        }, 1000, function() { //animation complete
            $('#info-box3').removeClass('hovered');
        });
        $(".top3").stop().fadeOut(800),
            function() {
                $("#info-box3").addClass("hovered");
            }
        $(".bottom3").stop().slideUp("slow"),
            function() {
                $("#info-box3").addClass("hovered");
            }
    });
    $('#info-box3').mouseover(function(event) {
        $('.image3').stop().animate({
            opacity: '0'


        }, 1000, function() { //animation complete
            $('#info-box3').addClass('hovered');
        });
        $(".top3").stop().fadeIn(1000),
            function() {
                $("#info-box3").addClass("hovered");
            }
        $(".bottom3").stop().slideDown("slow"),
            function() {
                $("#info-box3").addClass("hovered");
            }
    });
});

$(document).ready(function() {
    $('#info-box4').mouseleave(function(event) {
        $('.image4').stop().animate({
            opacity: '1',

        }, 1000, function() { //animation complete
            $('#info-box4').removeClass('hovered');
        });
        $(".top4").stop().fadeOut(800),
            function() {
                $("#info-box4").addClass("hovered");
            }
        $(".bottom4").stop().slideUp("slow"),
            function() {
                $("#info-box4").addClass("hovered");
            }
    });
    $('#info-box4').mouseover(function(event) {
        $('.image4').stop().animate({
            opacity: '0'


        }, 1000, function() { //animation complete
            $('#info-box4').addClass('hovered');
        });
        $(".top4").stop().fadeIn(1000),
            function() {
                $("#info-box4").addClass("hovered");
            }
        $(".bottom4").stop().slideDown("slow"),
            function() {
                $("#info-box4").addClass("hovered");
            }
    });
});