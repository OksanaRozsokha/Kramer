$(document).ready(function() {
    $(window).scroll(function () {
        var blockHeight = $(".intro-section").height();
        var nav = $(".main-header");
        if ($(this).scrollTop() > (blockHeight - 2)) {
            nav.addClass("affix")
        } else {
            $(".main-header").removeClass("affix");
        }
    });

    $('.scroll').on('click', function () {

        let scrollTo = $(this).attr('data-scrollTo');
        $('body, html').animate({
            "scrollTop": $('.' + scrollTo).offset().top}, 2000);
        return false;
    });

    //menu on click
    let flagMenu = true;

    $('.menu-btn').on('click', function (e) {
        e.stopPropagation();
        if(flagMenu) {
            flagMenu = false;
            $('.menu-list').slideToggle(function () {
                flagMenu = true;
            });
            $('body').toggleClass('active');
        }
    });
    $('body').on('click', function () {
        $('.menu-list').fadeOut();
        $('body').removeClass()('active');
    });
    $('.menu-list').on('click', function (e) {
        e.stopPropagation();
    });

});