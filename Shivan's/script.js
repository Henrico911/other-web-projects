let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const intervalTime = 3000; // Change slide every 3 seconds (3000 milliseconds)

// Function to show slides
function showSlides() {
    // Hide all slides
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
    }

    // Increment slide index
    slideIndex++;

    // Reset slide index if it exceeds the number of slides
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    // Display current slide
    slides[slideIndex].style.display = 'block';
}

// Initial call to show slides
showSlides();

// Function to move slides automatically
function autoMoveSlides() {
    setInterval(() => {
        showSlides();
    }, intervalTime);
}

// Initial call to move slides automatically
autoMoveSlides();
