$(document).ready(function () {
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
        


    // Modal:  Click gallery image,  image full screen
    var modal = document.getElementById("myModal");
    var img = document.getElementById("gallery-image");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementsByClassName(".modal-caption");

    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Close modal
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }
});