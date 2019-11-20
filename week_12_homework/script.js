$(document).ready(function () {
console.log(window.innerWidth);

    $('.imgToggle').click(function () {
        $('.icon').toggle();
    })

    // Hover over image, caption slides
    $(".cap-img")
        .hover(function () {
                $(this).children(".caption").slideDown(400);
            },
            function () {
                $(this).children(".caption").slideUp(400);
            }
        );

    // Buttons hides/shows color images
        $( ".button-colors" ).click(function() {
            $( ".colors" ).toggle( "slow" );
            });

    // Button hides/shows black and white images
          $( ".button-bw" ).click(function() {
            $( ".bw" ).toggle( "slow" )
        });
        
$('.gallery-image').click(function(){
    var modal = $(this).parent('.cap-img').sibling('.modal');
    $('img', modal).attr('src', $(this).attr('src'));
    $('.modal-caption', modal).prepend('<p>' + $(this).attr('alt') + '<p>');
});

$('.close').click(function(){
$(this).parent('.modal').hide();
})

    // // Modal:  Click gallery image,  image full screen
    // var modal = document.getElementById("myModal");
    // var img = document.getElements("gallery-image");
    // var modalImg = document.getElementById("img01");
    // var captionText = document.getElementsByClassName(".modal-caption");

    // img.onclick = function () {
    //     modal.style.display = "block";
    //     modalImg.src = this.src;
    //     captionText.innerHTML = this.alt;
    // }

    // // Close modal
    // var span = document.getElementsByClassName("close")[0];

    // span.onclick = function () {
    //     modal.style.display = "none";
    // }
 });