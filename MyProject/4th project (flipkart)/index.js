document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const sliderImages = document.querySelectorAll('.slider-image');
    

    let currentIndex = 0;
    const slideInterval = 2000;
    const totalImages = sliderImages.length; // Define totalImages here

    // Function to show the current slide
    function showSlide(index) {
        sliderImages.forEach((image, i) => {
            if (i === index) {
                image.classList.add('active');
            } else {
                image.classList.remove('active');
            }
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
        showSlide(currentIndex);
    }, slideInterval);
});

// Basic Search Functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        console.log(`Searching for: ${query}`);
        alert(`Searching for: ${query}`);
    } else {
        alert('Please enter a product to search for.');
    }
});

// Login Button Functionality
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});


// Cart Button Functionality
const cartButton = document.querySelector('.header-buttons button:last-child');
cartButton.addEventListener('click', () => {
    alert('You have 0 items in your cart. Start shopping!');
    window.location.href = 'cart.html';
});
