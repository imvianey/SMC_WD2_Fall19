$(document).ready(function () {

  // Nav icon toggle
  $(".icon").click(function () {
    $(".nav-item").toggleClass("hidden");
  })

  $('.img-toggle').click(function () {
    $('.icon').toggle();
  })

  // Image hover change
  var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
  }

  $('.hover-img').hover(sourceSwap, sourceSwap);

  // Change H2 color
  $('.make-red').mouseover(function () {
    $('.red-h2', this).css("color", "#F25E5E");
  })

  $('.make-red').mouseleave(function () {
    $('.red-h2', this).css("color", "#024873");
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
  $(".donate-submit").click(function () {
    $("form").replaceWith($(".replace"));
  });

  //   Remove hidden class from replace message
  $(".donate-submit").click(function () {
    $(".replace").removeClass("hidden-all");
  });
});