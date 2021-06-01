/* Carousel */

var index = 1;
initSlides(index);

function prevSlide(x) {
    initSlides(index += x);
}

function nextSlide(x) {
    initSlides(index += x)
}

function initSlides(x) {
    const slide = document.querySelectorAll(".explore-slide");

    if (x < 1) {
        index = slide.length;
    }

    if (x > slide.length) {
        index = 1;
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[index-1].style.display = "block";
}