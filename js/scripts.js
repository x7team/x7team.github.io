$(document).ready(function() {
    $(window).scroll(function() {
        var a = $(window).scrollTop();
        a >= 50 ? $("header").addClass("change") : $("header").removeClass("change")
    }), $("#nav_about").click(function() { $("html, body").animate({ scrollTop: $("#about").offset().top }, 1e3) }), $("#do_skills").click(function() { $("html, body").animate({ scrollTop: $("#service").offset().top }, 1e3) }), $("#nav_skills").click(function() { $("html, body").animate({ scrollTop: $("#skills").offset().top }, 1e3) }), $("#nav_works").click(function() { $("html, body").animate({ scrollTop: $("#projects").offset().top }, 1e3) }), $("#nav_contact").click(function() { $("html, body").animate({ scrollTop: $("#contact").offset().top }, 1e3) })

    $("#scroll_about").click(function() { $("html, body").animate({ scrollTop: $("#about").offset().top }, 1e3) })
});