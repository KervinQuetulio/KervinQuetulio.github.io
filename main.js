 // When the document is loaded
 document.addEventListener('DOMContentLoaded', function () {
    setThemeByTime();

    // Hero section animations
    gsap.from(".h-screen h1, .h-screen p, .h-screen a", {
        duration: 1.5,
        opacity: 0,
        y: '-100%',
        stagger: 0.3,
        ease: "power2.out"
    });

    // Projects animations
    gsap.from("#projects li:nth-child(odd)", {
        duration: 1,
        opacity: 0,
        x: '-100%',
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#projects",
            start: "top center"
        }
    });

    gsap.from("#projects li:nth-child(even)", {
        duration: 1,
        opacity: 0,
        x: '100%',
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#projects",
            start: "top center"
        }
    });

    // Contact section animations
    gsap.from(".bg-yellow-500 h2, .bg-yellow-500 p, .bg-yellow-500 a", {
        duration: 1,
        opacity: 0,
        y: '100%',
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".bg-yellow-500",
            start: "top center"
        }
    });

});


function setThemeByTime() {
    const currentHour = new Date().getHours();

    if (currentHour >= 18 || currentHour < 6) { // Between 6 PM and 6 AM
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        currentTheme = 'dark';
    }
}


const themeToggle = document.getElementById('themeToggle');
let currentTheme = localStorage.getItem('theme');

// Update button based on the current theme
function updateButton() {
    if (currentTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Normal Mode';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
}

// On page load
if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    updateButton();
}

themeToggle.addEventListener('click', () => {
    if (document.body.hasAttribute('data-theme')) {
        document.body.removeAttribute('data-theme');
        localStorage.removeItem('theme');
        currentTheme = null;
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        currentTheme = 'dark';
    }
    updateButton();
});


const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    // Show the button when user scrolls down 300px from the top
    if (document.documentElement.scrollTop > 300) {
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.opacity = '0';
    }
});

backToTopButton.addEventListener('click', () => {
    // Scroll to the top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
