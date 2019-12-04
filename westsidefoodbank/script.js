$(document).ready(function () {
    $(".logo").click(function(){
        $("nav a").toggleClass("hidden");
    })

    // Hover over image, caption slides
$(".drop")
    .click(function () {
            $(this).children(".caption").slideToggle("slow");
        }
    );
});
