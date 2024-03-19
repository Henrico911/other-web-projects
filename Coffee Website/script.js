let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    slideIndex += direction;
    if (slideIndex === totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slider').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    
    // Update opacity of description content
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.querySelector('.slide-text').style.opacity = 1;
        } else {
            slide.querySelector('.slide-text').style.opacity = 0;
        }
    });
}

function autoSlide() {
    moveSlide(1);
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds



document.addEventListener("DOMContentLoaded", function() {
    // Ensure the first slide is initially visible
    slides[slideIndex].style.opacity = 1;
    slides[slideIndex].classList.add('active');
});



