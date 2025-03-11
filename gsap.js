
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".logo", {
        y: 50,  /* Move up from 50px */
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".nav-links li", {
        y: 50, /* Move up from 50px */
        opacity: 0,
        duration: 1,
        stagger: 0.2, /* Stagger effect for smooth delay */
        ease: "power3.out"
    });

    gsap.from(".btn", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8, /* Button appears last */
        ease: "power3.out"
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Bounce effect for headings
    gsap.from(".banner-content h1", {
        y: -50, /* Move down from -50px */
        opacity: 0,
        duration: 1.2,
        stagger: 0.2, /* Stagger effect for each h1 */
        ease: "bounce.out" /* Bounce effect */
    });

    // Fade in paragraph
    gsap.from(".banner-content p", {
        opacity: 0,
        duration: 1.2,
        delay: 0.8,
        ease: "power2.out"
    });

    // Bounce effect for input fields
    gsap.from(".input input", {
        y: 50, /* Move up from 50px */
        opacity: 0,
        duration: 1.2,
        stagger: 0.3, /* Stagger between inputs */
        ease: "bounce.out",
        delay: 1
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Animate the left section (h1) from the left
    gsap.from(".left", {
        x: -100,  /* Moves in from the left */
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    // Animate the right section (p) from the right
    gsap.from(".right", {
        x: 100,  /* Moves in from the right */
        opacity: 0,
        duration: 1.2,
        delay: 0.5, /* Delays slightly for a better effect */
        ease: "power3.out"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function duplicateSlides(sliderClass) {
        const slider = document.querySelector(sliderClass);
        const slides = slider.innerHTML; // Get existing slides
        slider.innerHTML += slides; // Clone content for seamless loop
    }

    // Clone slides for both sliders
    duplicateSlides(".slides1");
    duplicateSlides(".slides2");

    const slideSpeed = 10; // Adjust speed (higher = slower)

    // Move first slider from right to left
    gsap.to(".slides1", {
        xPercent: -50,  /* Move half width left */
        duration: slideSpeed, /* Speed of animation */
        ease: "linear",
        repeat: -1, /* Infinite loop */
    });

    // Move second slider from left to right
    gsap.to(".slides2", {
        xPercent: 50, /* Move half width right */
        duration: slideSpeed, /* Same speed as first */
        ease: "linear",
        repeat: -1, /* Infinite loop */
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Animate cards sliding in from the left smoothly
    gsap.from(".card", {
        x: -100,  
        opacity: 0,
        duration: 1.2,
        stagger: 0.2, // Each card appears one after another
        ease: "power3.out",
        onComplete: startFloatingEffect // Starts floating after entrance animation
    });

    function startFloatingEffect() {
        gsap.to(".card", {
            y: 5, // Gentle floating effect (reduce movement)
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Hover effect: Rotating gradient border
    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("mouseenter", function () {
            gsap.to(card, {
                "--angle": "360deg",
                duration: 1.5,
                ease: "linear",
                repeat: -1
            });
        });

        card.addEventListener("mouseleave", function () {
            gsap.to(card, {
                "--angle": "0deg",
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".footer div", {
        y: 100,  // Move up from below
        opacity: 0,
        duration: 1.2,
        stagger: 0.2, // Each section appears one after another
        ease: "power3.out"
    });
});