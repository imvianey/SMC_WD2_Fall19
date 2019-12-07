$(document).ready(function () {
    $(".menu").click(function(){
        $("nav a").toggleClass("hidden");
    })

    // CLICK, CAPTION DROPS
$(".drop")
    .click(function () {
            $(this).children(".caption").slideToggle("slow");
        }
    );
});
