const carouselContainer = document.querySelector('.gallery-container');
const slides = carouselContainer.querySelector('.gallery-slides');
const slide = carouselContainer.querySelectorAll('.gallery-slide');
const prev = carouselContainer.querySelector('.prev');
const next = carouselContainer.querySelector('.next');
const dots = carouselContainer.querySelectorAll('.carousel-control-img');
let slideIndex = 0;

function showSlide(n) {
    slideIndex = (n + slide.length) % slide.length;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    if (slideIndex < slide.length - 1) {
        showSlide(slideIndex + 1);
    } else {
        showSlide(0);
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        showSlide(slideIndex - 1);
    }
}

function galleryCurrentSlide(n) {
    showSlide(n);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => galleryCurrentSlide(index));
});

setInterval(nextSlide, 5000);

function toggleGallery(type) {
    const gallerySlides = document.querySelectorAll('.gallery-slides');
    const galleryButtons = document.querySelectorAll('.gallery-button');
    const carouselControlImgs = document.querySelector('.carousel-control-imgs');
    const videos = document.querySelectorAll('.video-container video');

    gallerySlides.forEach(slide => {
        if (slide.classList.contains(type)) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });

    galleryButtons.forEach(button => {
        if (button.innerText.toLowerCase() === type.toLowerCase()) {
            button.classList.add('gallery-active');
        } else {
            button.classList.remove('gallery-active');
        }
    });

    // Show or hide carousel control images based on the gallery type
    if (type === 'photos') {
        carouselControlImgs.style.display = 'flex';
        // Reinitialize JavaScript specific to photos if not already initialized
        if (carouselControlImgs.dataset.initialized !== 'true') {
            initializePhotosCarousel();
            carouselControlImgs.dataset.initialized = 'true';
        }
    } else {
        carouselControlImgs.style.display = 'none';
    }
}

// Function to initialize JavaScript specific to photos
function initializePhotosCarousel() {
    const prev = document.getElementById('gallery_prev');
    const next = document.getElementById('gallery_next');
    
    prev.addEventListener('click', () => {
        // Logic for previous slide in photos carousel
        console.log('Previous slide clicked in photos carousel');
    });
    
    next.addEventListener('click', () => {
        // Logic for next slide in photos carousel
        console.log('Next slide clicked in photos carousel');
    });
}