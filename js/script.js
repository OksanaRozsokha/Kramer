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

});