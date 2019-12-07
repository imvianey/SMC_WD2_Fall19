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

    // Replace form with replace message
    $( ".donate-submit" ).click(function() {
        $("form").replaceWith( $( ".replace" ) );
      });
    
    //   Remove hidden class from replace message
      $(".donate-submit").click(function(){
        $(".replace").removeClass("hidden-all");
      });
});