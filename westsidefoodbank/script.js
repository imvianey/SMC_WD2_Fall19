$(document).ready(function () {
    $(".logo").click(function(){
        $("nav a").toggleClass("hidden");
    })

    // CLICK, CAPTION DROPS
$(".drop")
    .click(function () {
            $(this).children(".caption").slideToggle("slow");
        }
    );
});
