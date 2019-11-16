$(document).ready(function () {
    $('.imgToggle').click(function () {
        $('.icon').toggle();
    })

    // Hover over image, caption slides up
    $(".gallery-01").hover(function () {
            $('.caption').slideDown(1000);
        },
        function () {
            $('.caption').slideUp(1000);
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