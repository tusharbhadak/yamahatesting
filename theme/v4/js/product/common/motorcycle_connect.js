const motorcycleImages = [
    '/theme/v4/images/product/motorcycle_connect/image 61.png',
    '/theme/v4/images/product/motorcycle_connect/image 62.png',
    '/theme/v4/images/product/motorcycle_connect/image 63.png',
    '/theme/v4/images/product/motorcycle_connect/image 64.png',
    '/theme/v4/images/product/motorcycle_connect/image 65.png',
    '/theme/v4/images/product/motorcycle_connect/image 66.png',
    '/theme/v4/images/product/motorcycle_connect/image 67.png',
];

const motorcycleCarouselInner = document.querySelector('.motorcycle_connect_carousel_inner');
const leftButton = document.querySelector('#motorcycle_connect_left');
const rightButton = document.querySelector('#motorcycle_connect_right');
const totalSlides = motorcycleImages.length;

let motorcycleCurrentIndex = 0;
let prevIndex;

    motorcycleImages.forEach((imageUrl, index) => {
    const slide = document.createElement('div');
    slide.classList.add('motorcycle_connect_carousel_slide');
    const img = document.createElement('img');
    img.src = imageUrl;
    slide.appendChild(img);
    const test = document.createElement('span');
    test.innerText = index; // For testing purposes
    slide.appendChild(test);
    motorcycleCarouselInner.appendChild(slide);
});

let motorcycleSlides = document.querySelectorAll('.motorcycle_connect_carousel_slide');

motorcycleSlides[Math.floor(motorcycleSlides.length/2)].classList.add('active');

// function createMotorcycleSlide(imageUrl,index) {
//     const slide = document.createElement('div');
//     const test = document.createElement('span');
//     test.innerText = index;
//     slide.classList.add('motorcycle_connect_carousel_slide');
//     const img = document.createElement('img');
//     img.src = imageUrl;
//     slide.appendChild(img);
//     slide.appendChild(test);
//     motorcycleCarouselInner.appendChild(slide);
// }

// function initMotorcycleCarousel() {
//     motorcycleImages.forEach((imageUrl,index) => {
//         createMotorcycleSlide(imageUrl, index);
//     });

//     motorcycleSlides = document.querySelectorAll('.motorcycle_connect_carousel_slide');

// }
leftButton.addEventListener("click", () => {
    const imageWidth = motorcycleSlides[0].offsetWidth;
    prevIndex = motorcycleCurrentIndex;
    motorcycleCurrentIndex = (motorcycleCurrentIndex - 1 + totalSlides) % totalSlides;
    motorcycleCarouselInner.style.transform = `translateX(-${imageWidth}px)`;
    motorcycleCarouselInner.insertBefore(motorcycleSlides[motorcycleCurrentIndex], motorcycleCarouselInner.firstChild);

    const currentMotorCyleSlides = document.querySelectorAll('.motorcycle_connect_carousel_slide');
    let middleSlide = Math.floor(currentMotorCyleSlides.length/2);
    currentMotorCyleSlides.forEach(slide=> slide.classList.remove('active'))
    currentMotorCyleSlides[middleSlide].classList.add('active')

    setTimeout(() => {
        motorcycleCarouselInner.style.transform = "";
        motorcycleCarouselInner.classList.add("sliding_transition");
    }, 10);

    setTimeout(() => {
        motorcycleCarouselInner.classList.remove("sliding_transition");
    }, 490);
    console.log(motorcycleCurrentIndex);
});

rightButton.addEventListener("click", () => {
    const imageWidth = motorcycleSlides[0].offsetWidth;
    motorcycleCarouselInner.classList.add("sliding_transition");
    const currentMotorCyleSlides = document.querySelectorAll('.motorcycle_connect_carousel_slide');
    let middleSlide = Math.floor(currentMotorCyleSlides.length/2)+1
    currentMotorCyleSlides.forEach(slide=> slide.classList.remove('active'))
    currentMotorCyleSlides[middleSlide].classList.add('active')

    prevIndex = motorcycleCurrentIndex;
    motorcycleCurrentIndex = (motorcycleCurrentIndex + 1) % totalSlides;

    motorcycleCarouselInner.style.transform = `translateX(-${imageWidth}px)`;

    setTimeout(() => {
        motorcycleCarouselInner.appendChild(motorcycleSlides[prevIndex]);
        motorcycleCarouselInner.classList.remove("sliding_transition");
        motorcycleCarouselInner.style.transform = "";
        console.log(motorcycleCurrentIndex, prevIndex);
    }, 500);
});

// const motorcycleImages = [
//     '/images/product/image 61.png',
//     '/images/product/image 62.png',
//     '/images/product/image 63.png',
//     '/images/product/image 64.png',
//     '/images/product/image 65.png',
//     '/images/product/image 66.png',
//     '/images/product/image 67.png',
// ];

// const motorcycleCarouselInner = document.querySelector('.motorcycle_connect_carousel_inner');
// const leftButton = document.querySelector('#motorcycle_connect_left');
// const rightButton = document.querySelector('#motorcycle_connect_right');
// let motorcycleCurrentIndex = 0;

// motorcycleImages.forEach((imageUrl, index) => {
//     const slide = document.createElement('div');
//     slide.classList.add('motorcycle_connect_carousel_slide');
//     const img = document.createElement('img');
//     img.src = imageUrl;
//     slide.appendChild(img);
//     const test = document.createElement('span');
//     test.innerText = index; // For testing purposes
//     slide.appendChild(test);
//     motorcycleCarouselInner.appendChild(slide);
// });

// let motorcycleSlides = document.querySelectorAll('.motorcycle_connect_carousel_slide');

// function updateCarousel(direction) {
//     const totalSlides = motorcycleSlides.length;
//     const imageWidth = motorcycleSlides[0].offsetWidth;
//     // Adjust currentIndex for circular behavior without immediate DOM changes
//     motorcycleCurrentIndex = direction === 'next' ?
//         (motorcycleCurrentIndex + 1) % totalSlides :
//         (motorcycleCurrentIndex - 1 + totalSlides) % totalSlides;

//     // For movement, calculate and apply transform
//     const offset = -(imageWidth);
//     motorcycleCarouselInner.style.transform = `translateX(${offset}px)`;

//     // After moving, reset the position with a slight delay to allow for a seamless loop
//     if (direction === 'next') {
//         setTimeout(() => {
//             motorcycleCarouselInner.appendChild(motorcycleSlides[0]); // Move the first slide to the end
//             motorcycleCarouselInner.style.transition = 'none'; // Disable transition for instant repositioning
//             motorcycleCarouselInner.style.transform = ''; // Reset transform to adjust for the slide move
//             // Force reflow to apply the transition none instantly
//             motorcycleCarouselInner.offsetWidth;
//             motorcycleCarouselInner.style.transition = 'transform 0.5s ease'; // Re-enable transition
//             motorcycleSlides = document.querySelectorAll('.motorcycle_connect_carousel_slide'); // Update slides NodeList
//             updateActiveSlide();
//         }, 500); // Match with CSS transition time
//     } else { // 'prev'
//         motorcycleCarouselInner.insertBefore(motorcycleSlides[totalSlides - 1], motorcycleSlides[0]); // Move the last slide to the start
//         motorcycleCarouselInner.style.transition = 'none'; // Disable transition for instant repositioning
//         motorcycleCarouselInner.offsetWidth; // Force reflow
//         motorcycleCarouselInner.style.transform = ''; // Reset transform to adjust for the slide move
//         setTimeout(() => {
//             motorcycleCarouselInner.style.transition = 'transform 0.5s ease'; // Re-enable transition
//             motorcycleSlides = document.querySelectorAll('.motorcycle_connect_carousel_slide'); // Update slides NodeList
//             updateActiveSlide();
//         }, 10);
//     }
// }
// function updateActiveSlide() {
//     const middleIndex = Math.floor((motorcycleSlides.length - 1) / 2);
//     motorcycleSlides.forEach((slide, index) => {
//         slide.classList.toggle('active', index === middleIndex);
//     });
// }
// leftButton.addEventListener("click", () => updateCarousel('prev'));
// rightButton.addEventListener("click", () => updateCarousel('next'));