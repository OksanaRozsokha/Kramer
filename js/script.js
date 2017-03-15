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

});