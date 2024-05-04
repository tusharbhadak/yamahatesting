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
