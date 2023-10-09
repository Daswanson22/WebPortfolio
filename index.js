$(document).ready(function() {
    $(window).on('scroll', function() {
        $("fixed-scroll").fadeOut('slow');
    })

    $(".nav-link").hover(function() {
        var navItemChanges = {
            "font-weight": "700",
            "color": "black"
        };
        $(this).css(navItemChanges);
    }, function() {
        var navItemChanges = {
            "font-weight": "400",
            "color": "black"
        };
        $(this).css(navItemChanges);
    })
})