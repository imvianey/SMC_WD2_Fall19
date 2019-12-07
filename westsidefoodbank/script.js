$(document).ready(function () {
    $(".menu").click(function () {
        $("nav a").toggleClass("hidden");
    })

    // CLICK, CAPTION DROPS
    $(".drop")
        .click(function () {
            $(this).children(".caption").slideToggle("slow");
        });

    //Set & Highlight Donation Amount
    $(".button").click(function () {
        $(".button").removeClass("selected");
        $(this).addClass("selected");

        $(this).find("input").focus();
    });
});