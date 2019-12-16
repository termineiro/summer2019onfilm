// Current Slide
var slideIndex = 1;

// Displays Slides
showSlides(slideIndex);

// Goes To Previous Slide
function minusSlides() {
    showSlides(slideIndex -= 1);

}
var prevSlide = document.querySelector('.slide-prev');
prevSlide.addEventListener('click', minusSlides);


// Goes To Next Slide
function plusSlides() {
    showSlides(slideIndex += 1);

}
var nextSlide = document.querySelector('.slide-next');
nextSlide.addEventListener('click', plusSlides);


// Gets Slides
function showSlides(cur) {
    var dots;
    var i;
    var slides = document.getElementsByClassName("slide-current");


    if (cur > slides.length) {
        slideIndex = 1;
    };

    if (cur < 1) {
        slideIndex = slides.length;
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    };


    slides[slideIndex-1].style.display = "block";  
}


// Keeps Track of Current Slide for Dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}
