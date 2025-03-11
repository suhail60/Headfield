function startInfiniteScroll(slider, direction) {
    const slides = slider.querySelector(".slides");
    const slideImages = slides.children;
    
    // Clone all images and append them inside `.slides` for seamless looping
    for (let i = 0; i < slideImages.length; i++) {
        let clone = slideImages[i].cloneNode(true);
        slides.appendChild(clone);
    }

    let scrollAmount = 0;
    let speed = 1; // Adjust scrolling speed
    let step = speed; // Scrolling step

    function scroll() {
        if (direction === "right") {
            scrollAmount += step;
            if (scrollAmount >= slides.scrollWidth / 2) {
                scrollAmount = 0; // Reset to prevent jump
            }
        } else {
            scrollAmount -= step;
            if (scrollAmount <= -slides.scrollWidth / 2) {
                scrollAmount = 0; // Reset to prevent jump
            }
        }

        slides.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(scroll);
    }

    scroll();
}

// Start the scrolling effect after window loads
window.onload = function () {
    startInfiniteScroll(document.querySelector(".slider-wrapper:first-child"), "right"); // Left to Right
    startInfiniteScroll(document.querySelector(".slider-wrapper:last-child"), "left"); // Right to Left
};




const text1 = "Why Choose Us"; // First text for h1
const text2 = "Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at."; // Shorter paragraph

let index1 = 0, index2 = 0;
let isDeleting1 = false, isDeleting2 = false;
const minLength1 = 5; // Minimum letters to keep before retyping
const minLength2 = 20; // Minimum letters to keep before retyping

function typeWriterEffect(element, text, index, isDeleting, minLength, speedTyping = 100, speedDeleting = 50, pause = 1000) {
    if (!isDeleting && index < text.length) {
        // Typing
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriterEffect(element, text, index, isDeleting, minLength, speedTyping, speedDeleting, pause), speedTyping);
    } else if (isDeleting && index > minLength) {
        // Deleting partially (keeping some characters)
        element.innerHTML = text.substring(0, index - 1);
        index--;
        setTimeout(() => typeWriterEffect(element, text, index, isDeleting, minLength, speedTyping, speedDeleting, pause), speedDeleting);
    } else {
        // Pause before switching between typing and deleting
        isDeleting = !isDeleting;
        setTimeout(() => typeWriterEffect(element, text, index, isDeleting, minLength, speedTyping, speedDeleting, pause), pause);
    }
}

// Start animation on page load
window.onload = function () {
    typeWriterEffect(document.getElementById("typewriter"), text1, index1, isDeleting1, minLength1);
    typeWriterEffect(document.getElementById("typewriter-p"), text2, index2, isDeleting2, minLength2, 50, 25, 2000);
};




document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const visibleCards = 4; // Number of cards visible at a time
    const testimonials = document.querySelectorAll(".testimonial");
    const totalSlides = testimonials.length;
    const container = document.querySelector(".testimonial-slider");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    // Calculate the total width of one card including margin
    function getSlideWidth() {
        return testimonials[0].offsetWidth + 24; // Card width + margin
    }

    // Function to update the slider position
    function updateSlider() {
        const offset = -(currentIndex * getSlideWidth());
        container.style.transform = `translateX(${offset}px)`;
    }

    // Next Slide
    function nextSlide() {
        if (currentIndex < totalSlides - visibleCards) {
            currentIndex++;
        } else {
            currentIndex = 0; // Reset to first slide when reaching the end
        }
        updateSlider();
    }

    // Previous Slide
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - visibleCards; // Move to last set of slides
        }
        updateSlider();
    }

    // Auto Slide Every 3 Seconds
    let autoSlide = setInterval(nextSlide, 3000);

    // Attach event listeners to navigation buttons
    prevButton.addEventListener("click", function () {
        prevSlide();
        resetAutoSlide();
    });

    nextButton.addEventListener("click", function () {
        nextSlide();
        resetAutoSlide();
    });

    // Reset auto-slide when user interacts with buttons
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000);
    }

    // Initialize slider
    updateSlider();
});




