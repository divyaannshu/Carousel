let slideindex = 1;
showSlide(slideindex);

function plusSlides(n) {
    showSlide(slideindex += n);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideindex = 1 }
    if (n < 1) { slideindex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideindex - 1].style.display = "block";

}