$(document).ready(function () {
    $('.imgToggle').click(function () {
        $('.icon').toggle();
    })

    // Hover over image, caption slides up
    var captionDrop = $("#gallery").find(".caption");

    $(".gallery-01, .gallery-02, .gallery-03").hover(function () {
            $(captionDrop, this).slideDown(400);
        },
        function () {
            $(captionDrop, this).slideUp(400);
        }
    );

    // Modal:  Click gallery image,  image full screen
    var modal = document.getElementById("myModal");

    var img = document.getElementById("gallery-image");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
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