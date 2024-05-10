var scrollableDivY = document.getElementById('carousalSclollY');
var scrollableDivX = document.getElementById('carousalSclollX');
var scrollableDotsY = scrollableDivY.querySelectorAll('.carousel-dot');
var scrollableDotsX = scrollableDivX.querySelectorAll('.carousel-dot');
var animationDuration = 500;

document.getElementById('scrollUpButton').addEventListener('click', function () {
    let scrollStep = scrollableDotsY[0].offsetHeight;
    animateScroll(-scrollStep, 'vertical', scrollableDivY);
});

document.getElementById('scrollDownButton').addEventListener('click', function () {
    let scrollStep = scrollableDotsY[0].offsetHeight;
    animateScroll(scrollStep, 'vertical', scrollableDivY);
});
document.getElementById('scrollLeftButton').addEventListener('click', function () {
    let scrollStep = scrollableDotsX[0].offsetWidth;
    animateScroll(scrollStep, 'horizontal', scrollableDivX);
});

document.getElementById('scrollRightButton').addEventListener('click', function () {
    let scrollStep = scrollableDotsX[0].offsetWidth;
    animateScroll(-scrollStep, 'horizontal', scrollableDivX);
});
function animateScroll(scrollChange, axis, scrollableDiv) {
    var startTime = performance.now();
    var startScroll = axis === 'horizontal' ? scrollableDiv.scrollLeft : scrollableDiv.scrollTop;
    var endScroll = startScroll + scrollChange;

    function scrollStep(timestamp) {
        var progress = timestamp - startTime;
        var scrollFraction = progress / animationDuration;

        if (scrollFraction < 1) {
            if (axis === 'horizontal') {
                scrollableDiv.scrollLeft = startScroll + scrollChange * scrollFraction;
            } else {
                scrollableDiv.scrollTop = startScroll + scrollChange * scrollFraction;
            }
            requestAnimationFrame(scrollStep);
        } else {
            if (axis === 'horizontal') {
                scrollableDiv.scrollLeft = endScroll;
            } else {
                scrollableDiv.scrollTop = endScroll;
            }
        }
    }

    requestAnimationFrame(scrollStep);
}




var motorcycle_r_series_State = {
    duration: 600,
    currentIndex: 0
};
var motorcycle_mt_series_State = {
    duration: 600,
    currentIndex: 0
};
var motorcycle_fz_series_State = {
    duration: 600,
    currentIndex: 0
};
var motorcycle_moto_gp_State = {
    duration: 600,
    currentIndex: 0
};
var scooter_maxi_State = {
    duration: 600,
    currentIndex: 0
};
var scooter_street_State = {
    duration: 600,
    currentIndex: 0
};
var scooter_fashion_State = {
    duration: 600,
    currentIndex: 0
};

let bike_name_data;
let bikes_alternate_name_data;

// function goToSlide(index, seriesName, bikeName) {
//     bike_name_data = bikeName
//     const seriesState = window[`${seriesName}_State`];
//     const seriesContainer = document.querySelector(`#${seriesName}_select`)

//     let slides = seriesContainer.querySelectorAll('.carousel-slide');

//     if (seriesState.currentIndex !== index) {
//         let currentSlide = slides[seriesState.currentIndex];
//         var nextSlide = slides[index];
//         var nextIndex = index + 1;
//         var prevIndex = index - 1;

//         if (index > seriesState.currentIndex) {

//             // for multiple slide transform
//             for (let i = seriesState.currentIndex; i <= index; i++) {
//                 if (i !== seriesState.currentIndex && i !== index) {
//                     slides[i].style.height = '80%';
//                     slides[i].style.transform = `translateY(-130%)`;
//                 }
//             }
//             currentSlide.style.transform = 'translateY(-130%)';
//             currentSlide.classList.remove('selected_slide');

//             setTimeout(function () {
//                 slides.forEach(slide => slide.classList.remove('upcomingSlide'));
//                 nextSlide.classList.add('selected_slide');
//                 nextSlide.style.transform = 'translateY(-25%)';
//             }, 500);

//             setTimeout(function () {
//                 if (slides[nextIndex]) {
//                     slides[nextIndex].classList.add('upcomingSlide');
//                     slides[nextIndex].style.transition = 'transform 1s ease';
//                 }
//             }, 800)
//         } else { // Decremental direction
//             slides.forEach(slide => slide.classList.remove('upcomingSlide'));

//             // for multiple slide transform
//             for (let i = seriesState.currentIndex; i > index; i--) {
//                 setTimeout(function () {
//                     slides[i].classList.remove('selected_slide');
//                     slides[i].style.height = '';
//                     slides[i].style.transform = '';
//                 }, 300)
//             }

//             setTimeout(function () {
//                 slides[nextIndex].classList.add('upcomingSlide')
//             }, 500);

//             setTimeout(function () {
//                 nextSlide.classList.add('selected_slide');
//                 nextSlide.style.transform = 'translateY(-25%)';
//             }, 700)
//         }
//         seriesState.currentIndex = index;
//         updateRSeriesContent(seriesContainer, bikeName);
//     }
// }


// function goToSlide(index, seriesName, bikeName, bike) {
//     // console.log(index, seriesName, bikeName, bike)
//     bikes_alternate_name_data = bike;
//     bike_name_data = bikeName;
//     const seriesState = window[`${seriesName}_State`];
//     const seriesContainer = document.querySelector(`#${seriesName}_select`);
//     let slides = seriesContainer.querySelectorAll('.carousel-slide');

//     console.log(seriesState.currentIndex,index)

//     if (seriesState.currentIndex !== index) {
//         let currentSlide = slides[seriesState.currentIndex];
//         let nextSlide = slides[index];
//         let nextIndex = index + 1;
//         let prevIndex = index - 1;

//         // Clear any previous timeouts
//         clearTimeout(seriesState.transitionTimeout);

//         // Reset all slides
//         slides.forEach(slide => {
//             slide.style.height = '';
//             slide.style.transform = '';
//             slide.classList.remove('selected_slide', 'upcomingSlide');
//         });

//         if (index > seriesState.currentIndex) { // Incremental direction
//             // for multiple slide transform
//             for (let i = seriesState.currentIndex; i <= index; i++) {
//                 if (i !== seriesState.currentIndex && i !== index) {
//                     slides[i].style.height = '80%';
//                     slides[i].style.transform = `translateY(-130%)`;
//                 }
//             }
//             currentSlide.style.transform = 'translateY(-130%)';
//             currentSlide.classList.remove('selected_slide');

//             // Set initial position for the next slide (from the bottom)
//             nextSlide.style.transform = 'translateY(0%)';
//             nextSlide.style.transition = 'transform 15s'; // Disable transition for initial position
//             nextSlide.offsetHeight; // Trigger reflow to apply transition
//             nextSlide.style.transition = 'transform 15s ease';

//             // Slide up
//             nextSlide.style.transform = 'translateY(-25%)';

//             // Start the animation
//             seriesState.transitionTimeout = setTimeout(function () {
//                 slides.forEach(slide => slide.classList.remove('upcomingSlide'));
//                 nextSlide.classList.add('selected_slide');
//             }, 500);

//             setTimeout(function () {
//                 if (slides[nextIndex]) {
//                     slides[nextIndex].classList.add('upcomingSlide');
//                 }
//             }, 500);
//         } else { // Decremental direction
//             // console.log(true)
//             // for multiple slide transform
//             for (let i = seriesState.currentIndex; i > index; i--) {
//                 if (i !== seriesState.currentIndex && i !== index) {
//                     slides[i].style.height = '80%';
//                     slides[i].style.transform = `translateY(-130%)`;
//                 }
//             }
//             currentSlide.style.transform = 'translateY(-130%)';
//             currentSlide.classList.remove('selected_slide');

//             // Set initial position for the next slide (from the top)
//             nextSlide.style.transform = 'translateY(0%)';
//             nextSlide.style.transition = 'transform 15s'; // Disable transition for initial position
//             nextSlide.offsetHeight; // Trigger reflow to apply transition
//             nextSlide.style.transition = 'transform 15s ease';

//             // Slide up
//             nextSlide.style.transform = 'translateY(-25%)';

//             // Start the animation
//             seriesState.transitionTimeout = setTimeout(function () {
//                 slides.forEach(slide => slide.classList.remove('upcomingSlide'));
//                 nextSlide.classList.add('selected_slide');
//             }, 100);

//             setTimeout(function () {
//                 if (slides[prevIndex]) {
//                     slides[prevIndex].classList.add('upcomingSlide');
//                 }
//             }, 1000);
//         }

//         seriesState.currentIndex = index;
//         updateRSeriesContent(seriesContainer, bikeName);
//     }
// }

// function goToSlide(index, seriesName, bikeName, bike) {
//     bikes_alternate_name_data = bike;
//     bike_name_data = bikeName;
//     const seriesState = window[`${seriesName}_State`];
//     const seriesContainer = document.querySelector(`#${seriesName}_select`);
//     let slides = seriesContainer.querySelectorAll('.carousel-slide');

//     if (seriesState.currentIndex !== index) {
//         let currentSlide = slides[seriesState.currentIndex];
//         let nextSlide = slides[index];
//         let nextIndex = (index + 1) % slides.length; // Calculate the next index in a circular manner
//         let prevIndex = (index - 1 + slides.length) % slides.length; // Calculate the previous index in a circular manner

//         // Clear any previous timeouts
//         clearTimeout(seriesState.transitionTimeout);

//         // Reset all slides
//         slides.forEach(slide => {
//             slide.style.height = '';
//             slide.style.transform = '';
//             slide.classList.remove('selected_slide', 'upcomingSlide');
//             slide.style.opacity = 0; // Hide all slides
//         });

//         // Set initial position for the next slide (from the bottom)
//         nextSlide.style.opacity = 1;
//         nextSlide.style.transform = 'translateY(100%)';
//         nextSlide.offsetHeight; // Trigger reflow to apply transition

//         // Slide up
//         nextSlide.style.transform = 'translateY(-25%)';

//         // Start the animation
//         seriesState.transitionTimeout = setTimeout(() => {
//             // Hide all slides again
//             slides.forEach(slide => {
//                 slide.style.opacity = 0;
//             });
//             // Show the selected slide
//             nextSlide.style.opacity = 1;
//             nextSlide.classList.add('selected_slide');
//         }, 500);

//         // Show the upcoming slide
//         slides[nextIndex].style.opacity = 1;

//         seriesState.currentIndex = index;
//         updateRSeriesContent(seriesContainer, bikeName);
//     }
// }


function handleClick(element, index, series, model, modelName) {
    // Get the parent div of the clicked dot
    var parentDiv = element.closest('.sub-tab-container');

    // Remove active class from all dots within the current div
    var dotsInCurrentDiv = parentDiv.querySelectorAll('.carousel-dot');
    dotsInCurrentDiv.forEach(function (dot) {
        dot.classList.remove('active-thumbnail');
    });

    // Get the series of the clicked dot's parent div
    var parentSeries = parentDiv.getAttribute('data-series');

    // Remove active class from all dots within the same series
    var dots = document.querySelectorAll('.carousel-dot[data-series="' + parentSeries + '"]');
    dots.forEach(function (dot) {
        dot.classList.remove('active-thumbnail');
    });

    // Add active class to clicked dot
    element.classList.add('active-thumbnail');

    // Call your existing goToSlide function with parameters
    goToSlide(index, series, model, modelName);
}


function goToSlide(index, seriesName, bikeName, bike) {
    console.log(index, seriesName, bikeName, bike)
    bikes_alternate_name_data = bike;
    bike_name_data = bikeName;
    const seriesState = window[`${seriesName}_State`];
    const seriesContainer = document.querySelector(`#${seriesName}_select`);
    let slides = seriesContainer.querySelectorAll('.carousel-slide');

    if (seriesState.currentIndex !== index) {
        let currentSlide = slides[seriesState.currentIndex];
        let nextSlide = slides[index];
        let nextIndex = (index + 1) % slides.length; // Calculate the next index in a circular manner
        let prevIndex = (index - 1 + slides.length) % slides.length; // Calculate the previous index in a circular manner

        // Clear any previous timeouts
        clearTimeout(seriesState.transitionTimeout);

        // Reset all slides
        slides.forEach(slide => {
            slide.style.height = '';
            slide.style.transform = '';
            slide.classList.remove('selected_slide', 'upcomingSlide');
            slide.style.display = 'none'; // Hide all slides
        });

        // Set initial position for the selected slide (from the bottom)
        currentSlide.style.display = 'inline-flex';
        currentSlide.style.transition = 'transform 0.5s ease';
        currentSlide.style.transform = 'translateY(0)';
        currentSlide.offsetHeight; // Trigger reflow to apply transition

        // Push up the selected slide
        currentSlide.style.transform = 'translateY(-135%)';

        // Set initial position for the upcoming slide (from the bottom)
        nextSlide.style.display = 'inline-flex';
        currentSlide.style.transition = 'transform 0.5s ease';
        nextSlide.style.transform = 'translateY(100%)';
        nextSlide.offsetHeight; // Trigger reflow to apply transition

        // Slide up
        nextSlide.style.transform = 'translateY(-30%)';
        nextSlide.style.transition = 'transform 1s ease';

        // Start the animation
        seriesState.transitionTimeout = setTimeout(() => {
            // Hide all slides again
            slides.forEach(slide => {
                slide.style.display = 'none';
            });
            // Show the selected slide
            nextSlide.style.display = 'inline-flex';
            nextSlide.classList.add('selected_slide');
        }, 500);

        // Show the upcoming slide
        slides[nextIndex].style.display = 'inline-flex';

        seriesState.currentIndex = index;
        updateRSeriesContent(seriesContainer, bikeName);
    }
}





// for carousel dots height adjust

function adjustCarouselDotSize(parentSelector, childSelector, dimension) {
    const parent = document.querySelector(parentSelector);
    const children = parent.querySelectorAll(childSelector);
    const parentSize = parent.getBoundingClientRect()[dimension]; // Get parent width or height

    const childSize = (parentSize - 30) / 2.5; // Calculate size for each child

    children.forEach(child => {
        child.style.width = `${childSize}px`; // Set width or height for each child
        child.style.height = `${childSize}px`; // Set width or height for each child
    });
}

function handleCarouselDotResize() {
    const screenSize = window.innerWidth; // Get screen width

    if (screenSize < 992) {
        adjustCarouselDotSize("#carousalSclollX", ".carousel-dot", "width");
    } else {
        adjustCarouselDotSize("#carousalSclollY", ".carousel-dot", "height");
    }
}

window.addEventListener('resize', handleCarouselDotResize);
handleCarouselDotResize();

// const bikeDetaileArr = {
//     R3: {
//         power: {
//             kw: 'Power of 30.9 kW',
//             rpm: '@10,750 rpm'
//         },
//         torque: {
//             torque: 'Torque of 29.5 nm',
//             details: '@9,000 rpm'
//         },
//         keyFeature: {
//             details: '321 CC',
//             body: 'High Revving Parallel twin engine'
//         },
//         designLang: {
//             details: 'SuperSport design'
//         }
//     },
//     R4: {
//         power: {
//             kw: '30.9kW',
//             power: '42.0PS',
//             rpm: '10,750 RPM'
//         },
//         torque: {
//             rpm: '9,000 RPM',
//             torque: '29.5 Nm',
//             details: '3.0 kgfm'
//         },
//         keyFeature: {
//             details: 'High Revving 321 CC parallel twin engine'
//         },
//         designLang: {
//             details: 'SuperSport design',
//             info: 'inspired by Yamaha’s iconic race-winning M1 MotoGP® machine'
//         }
//     },
//     Aerox155: {
//         power: {
//             kw: 'Power of 11.0 kW',
//             rpm: '@8,000 rpm'
//         },
//         torque: {
//             torque: 'Torque of 13.9 nm',
//             details: '@6,500 rpm'
//         },
//         keyFeature: {
//             details: 'Smart Key',
//         },
//         designLang: {
//             details: 'Maxi Sport Design'
//         }
//     },
//     Aerox155N: {
//         power: {
//             kw: 'Power of 11.0 kW',
//             rpm: '@8,000 rpm'
//         },
//         torque: {
//             torque: 'Torque of 13.9 nm',
//             details: '@6,500 rpm'
//         },
//         keyFeature: {
//             details: 'Y-CONNECT WITH BLUETOOTH',
//         },
//         designLang: {
//             details: 'Maxi Sport Design'
//         }
//     },
//     R156M: {
//         power: {
//             kw: '30.9kW',
//             power: '42.0PS',
//             rpm: '10,750 RPM'
//         },
//         torque: {
//             rpm: '9,000 RPM',
//             torque: '29.5 Nm',
//             details: '3.0 kgfm'
//         },
//         keyFeature: {
//             details: 'High Revving 321 CC parallel twin engine'
//         },
//         designLang: {
//             details: 'SuperSport design',
//             info: 'inspired by Yamaha’s iconic race-winning M1 MotoGP® machine'
//         }
//     },
//     R15V74: {
//         power: {
//             kw: '30.9kW',
//             power: '42.0PS',
//             rpm: '10,750 RPM'
//         },
//         torque: {
//             rpm: '9,000 RPM',
//             torque: '29.5 Nm',
//             details: '3.0 kgfm'
//         },
//         keyFeature: {
//             details: 'High Revving 321 CC parallel twin engine'
//         },
//         designLang: {
//             details: 'SuperSport design',
//             info: 'inspired by Yamaha’s iconic race-winning M1 MotoGP® machine'
//         }
//     },
//     R15sS: {
//         power: {
//             kw: '30.9kW',
//             power: '42.0PS',
//             rpm: '10,750 RPM'
//         },
//         torque: {
//             rpm: '9,000 RPM',
//             torque: '29.5 Nm',
//             details: '3.0 kgfm'
//         },
//         keyFeature: {
//             details: 'High Revving 321 CC parallel twin engine'
//         },
//         designLang: {
//             details: 'SuperSport design',
//             info: 'inspired by Yamaha’s iconic race-winning M1 MotoGP® machine'
//         }
//     },
//     R15M: {
//         power: {
//             kw: 'Power of 13.5 kW ',
//             rpm: '@10,000 rpm'
//         },
//         torque: {
//             torque: 'Torque of 14.2 nm',
//             details: '@7,500 rpm'
//         },
//         keyFeature: {
//             details: 'Color TFT Meter',
//             body: 'inspired by R1'
//         },
//         designLang: {
//             details: 'SuperSport design'
//         }
//     },
//     MT03: {
//         power: {
//             kw: 'Power of 30.9 kW',
//             rpm: '@10,700 rpm'
//         },
//         torque: {
//             torque: 'Torque of 29.2 nm',
//             details: '@9,000 rpm'
//         },
//         keyFeature: {
//             details: '321 CC',
//             body: 'High Revving parallel twin engine'
//         },
//         designLang: {
//             details: 'Hyper Naked unique MT design'
//         }
//     },
//     RayZR125SR: {
//         power: {
//             kw: 'Power of 6.0 kW',
//             rpm: '@6,500 rpm'
//         },
//         torque: {
//             torque: 'Torque of 10.3 nm',
//             details: '@5,000 rpm'
//         },
//         keyFeature: {
//             details: 'FULL DIGITAL INSTRUMENT CLUSTER',
//             body: 'WITH Y-CONNECT'
//         },
//         designLang: {
//             details: 'Tough Sporty Design',
//             info: 'with Brush Guard'
//         }
//     },
//     RayZR125: {
//         power: {
//             kw: 'Power of 6.0 kW',
//             rpm: '@6,500 rpm'
//         },
//         torque: {
//             torque: 'Torque of 10.3 nm',
//             details: '@5,000 rpm'
//         },
//         keyFeature: {
//             details: '99 Kgs',
//             body: 'Light Weight'
//         },
//         designLang: {
//             details: 'Tough Sporty Design',
//             // info: 'with Brush Guard'
//         }
//     },
//     MT15: {
//         power: {
//             kw: 'Power of 13.5 kW',
//             rpm: '@10,000 rpm'
//         },
//         torque: {
//             torque: 'Torque of 14.1 nm',
//             details: '@7,500 rpm'
//         },
//         keyFeature: {
//             details: 'Assist & Slipper Clutch',
//             body: 'with Variable Valve Actuation (VVA)'
//         },
//         designLang: {
//             details: 'Hyper Naked unique MT design'
//         }
//     },
//     FZX: {
//         power: {
//             kw: 'Power of 9.1 kW',
//             rpm: '@7,250 rpm'
//         },
//         torque: {
//             torque: 'Torque of 13.3 nm',
//             details: '@5,500 rpm'
//         },
//         keyFeature: {
//             details: 'Tough Metal Body',
//             // body: 'with Variable Valve Actuation (VVA)'
//         },
//         designLang: {
//             details: 'Neo Retro design'
//         }
//     },
//     FZSV4: {
//         power: {
//             kw: 'Power of 9.1 kW',
//             rpm: '@7,250 rpm'
//         },
//         torque: {
//             torque: 'Torque of 13.3 nm',
//             details: '@5,500 rpm'
//         },
//         keyFeature: {
//             details: 'Trusted and Efficient 149 CC Engine',
//             // body: 'with Variable Valve Actuation (VVA)'
//         },
//         designLang: {
//             details: 'Muscular Street Fighter design'
//         }
//     },
//     FZSV3: {
//         power: {
//             kw: 'Power of 9.1 kW',
//             rpm: '@7,250 rpm'
//         },
//         torque: {
//             torque: 'Torque of 13.3 nm',
//             details: '@5,500 rpm'
//         },
//         keyFeature: {
//             details: 'Negative LCD Instrument Cluster',
//             body: 'with Bluetooth connectivity'
//         },
//         designLang: {
//             details: 'Muscular Street Fighter design'
//         }
//     },
//     FZFI: {
//         power: {
//             kw: 'Power of 9.1 kW',
//             rpm: '@7,250 rpm'
//         },
//         torque: {
//             torque: 'Torque of 13.3 nm',
//             details: '@5,500 rpm'
//         },
//         keyFeature: {
//             details: 'Y-Connect with Bluetooth',
//         },
//         designLang: {
//             details: 'Muscular Street Fighter design'
//         }
//     },
//     FZFIV3: {
//         power: {
//             kw: 'Power of 9.1 kW',
//             rpm: '@7,250 rpm'
//         },
//         torque: {
//             torque: 'Torque of 13.3 nm',
//             details: '@5,500 rpm'
//         },
//         keyFeature: {
//             details: 'Negative LCD Instrument Cluster',
//             body: 'with Bluetooth connectivity'
//         },
//         designLang: {
//             details: 'Muscular Street Fighter design',
//         }
//     },
//     R15V4: {
//         power: {
//             kw: 'Power of 13.5 kW',
//             rpm: '@10,000 rpm'
//         },
//         torque: {
//             torque: 'Torque of 14.2 nm',
//             details: '@7,500 rpm'
//         },
//         keyFeature: {
//             details: 'Assist & Slipper Clutch',
//             body: 'with Variable Valve Actuation (VVA)'
//         },
//         designLang: {
//             details: 'SuperSport design'
//         }
//     },
//     R15S: {
//         power: {
//             kw: 'Power of 13.5 kW',
//             rpm: '@10,000 rpm'
//         },
//         torque: {
//             torque: 'Torque of 14.2 nm',
//             details: '@7,500 rpm'
//         },
//         keyFeature: {
//             details: 'Unibody Seat',
//             // body: 'with Variable Valve Actuation (VVA)'
//         },
//         designLang: {
//             details: 'SuperSport design'
//         }
//     },

//     Aerox: {
//         power: {
//             kw: '11.0 kW',
//             power: '15.0 PS',
//             rpm: '8000 RPM'
//         },
//         torque: {
//             rpm: '6500 RPM',
//             torque: '13.9 Nm',
//             details: '1.4 kgfm'
//         },
//         keyFeature: {
//             details: 'Smart Key'
//         },
//         designLang: {
//             details: 'Maxi Sport Design'
//         }
//     },
//     Fascino125: {
//         power: {
//             kw: '6.0kW',
//             power: '8.2PS',
//             rpm: '6500 RPM'
//         },
//         torque: {
//             rpm: '5000 RPM',
//             torque: '10.3 Nm',
//             details: '1.1 kgfm'
//         },
//         keyFeature: {
//             details: 'Light Weight (99Kg)'
//         },
//         designLang: {
//             details: 'European Fashion'
//         }
//     },
// }




// for (const model in bikeDetaileArr) {
//     if (Object.hasOwnProperty.call(bikeDetaileArr, model)) {
//         const bike = bikeDetaileArr[model];

//         // Iterate over each property of the bike
//         for (const prop in bike) {
//             if (Object.hasOwnProperty.call(bike, prop)) {
//                 const detail = bike[prop];

//                 // Check if the detail contains 'kw'
//                 if (detail.hasOwnProperty('kw')) {
//                     // Wrap 'kW' text in a span tag
//                     detail.kw = detail.kw.replace('kW', '<span>kW</span>');
//                 }
//             }
//         }
//     }
// }


const bikeDetaileArr = {
    R3: {
        power: {
            topInfoP: 'Power',
            kw: '30.9 kW',
            rpm: '@10,750 rpm'
        },
        torque: {
            topInfoT: 'Torque',
            torque: '29.5 nm',
            details: '@9,000 rpm'
        },
        keyFeature: {
            details: '321 CC',
            body: 'High Revving Parallel twin engine'
        },
        designLang: {
            details: 'SuperSport',
            bottomInfo: 'design' 
        }
    },
    R4: {
        power: {
            kw: '30.9kW',
            power: '42.0PS',
            rpm: '10,750 RPM'
        },
        torque: {
            rpm: '9,000 RPM',
            torque: '29.5 Nm',
            details: '3.0 kgfm'
        },
        keyFeature: {
            details: 'High Revving 321 CC parallel twin engine'
        },
        designLang: {
            details: 'SuperSport design',
            info: 'inspired by Yamaha’s iconic race-winning M1 MotoGP® machine'
        }
    },
    Aerox155: {
        power: {
            topInfoP: "Power",
            kw: '11.0 kW',
            rpm: '@8,000 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '13.9 nm',
            details: '@6,500 rpm'
        },
        keyFeature: {
            details: 'Smart Key',
            body: 'Convenient & Secure'
        },
        designLang: {
            details: 'Maxi Sport',
            bottomInfo: 'Design'
        }
    },
    Aerox155N: {
        power: {
            topInfoP: "Power",
            kw: '11.0 kW',
            rpm: '@8,000 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '13.9 nm',
            details: '@6,500 rpm'
        },
        keyFeature: {
            details: 'Y-CONNECT',
            body: 'BLUETOOTH'
        },
        designLang: {
            details: 'Maxi Sport',
            bottomInfo: 'Design'
        }
    },
    R156M: {
        power: {
            kw: '30.9kW',
            power: '42.0PS',
            rpm: '10,750 RPM'
        },
        torque: {
            rpm: '9,000 RPM',
            torque: '29.5 Nm',
            details: '3.0 kgfm'
        },
        keyFeature: {
            details: 'High Revving 321 CC parallel twin engine'
        },
        designLang: {
            details: 'SuperSport design',
            info: 'inspired by Yamaha’s iconic race-winning M1 MotoGP® machine'
        }
    },
    R15V74: {
        power: {
            kw: '30.9kW',
            power: '42.0PS',
            rpm: '10,750 RPM'
        },
        torque: {
            rpm: '9,000 RPM',
            torque: '29.5 Nm',
            details: '3.0 kgfm'
        },
        keyFeature: {
            details: 'High Revving 321 CC parallel twin engine'
        },
        designLang: {
            details: 'SuperSport design',
            info: 'inspired by Yamaha’s iconic race-winning M1 MotoGP® machine'
        }
    },
    R15sS: {
        power: {
            kw: '30.9kW',
            power: '42.0PS',
            rpm: '10,750 RPM'
        },
        torque: {
            rpm: '9,000 RPM',
            torque: '29.5 Nm',
            details: '3.0 kgfm'
        },
        keyFeature: {
            details: 'High Revving 321 CC parallel twin engine'
        },
        designLang: {
            details: 'SuperSport design',
            info: 'inspired by Yamaha’s iconic race-winning M1 MotoGP® machine'
        }
    },
    R15M: {
        power: {
            topInfoP: "Power",
            kw: '13.5 kW ',
            rpm: '@10,000 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '14.2 nm',
            details: '@7,500 rpm'
        },
        keyFeature: {
            details: 'Color TFT Meter',
            body: 'inspired by R1'
        },
        designLang: {
            details: 'SuperSport',
            bottomInfo: "design"
        }
    },
    MT03: {
        power: {
            topInfoP: "Power",
            kw: '30.9 kW',
            rpm: '@10,700 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '29.2 nm',
            details: '@9,000 rpm'
        },
        keyFeature: {
            details: '321 CC',
            body: 'High Revving parallel twin engine'
        },
        designLang: {
            details: 'Hyper Naked',
            bottomInfo: 'unique MT design'
        }
    },
    RayZR125SR: {
        power: {
            topInfoP: "Power",
            kw: '6.0 kW',
            rpm: '@6,500 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '10.3 nm',
            details: '@5,000 rpm'
        },
        keyFeature: {
            details: 'FULL DIGITAL INSTRUMENT CLUSTER',
            body: 'WITH Y-CONNECT'
        },
        designLang: {
            details: 'Tough Sporty Design',
            info: 'Motorcycle like design with Brush Guard'
        }
    },
    RayZR125: {
        power: {
            topInfoP: "Power",
            kw: '6.0 kW',
            rpm: '@6,500 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '10.3 nm',
            details: '@5,000 rpm'
        },
        keyFeature: {
            details: '99 Kgs',
            body: 'Light Weight'
        },
        designLang: {
            details: 'Tough Sporty',
            info: 'Motorcycle like design'
        }
    },
    MT15: {
        power: {
            topInfoP: "Power",
            kw: '13.5 kW',
            rpm: '@10,000 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '14.1 nm',
            details: '@7,500 rpm'
        },
        keyFeature: {
            details: 'Assist & Slipper Clutch',
            body: 'with Variable Valve Actuation (VVA)'
        },
        designLang: {
            details: 'Hyper Naked',
            bottomInfo: 'unique MT design'
        }
    },
    FZX: {
        power: {
            topInfoP: "Power",
            kw: '9.1 kW',
            rpm: '@7,250 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '13.3 nm',
            details: '@5,500 rpm'
        },
        keyFeature: {
            details: 'Metal Body',
            body: 'Tough & Rugged'
        },
        designLang: {
            details: 'Neo Retro',
            bottomInfo: 'design'
        }
    },
    FZSV4: {
        power: {
            topInfoP: "Power",
            kw: '9.1 kW',
            rpm: '@7,250 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '13.3 nm',
            details: '@5,500 rpm'
        },
        keyFeature: {
            details: '149 CC',
            // body: 'with Variable Valve Actuation (VVA)'
            body: 'Trusted and Efficient Engine'
        },
        designLang: {
            details: 'Muscular Street Fighter',
            bottomInfo: 'design'
        }
    },
    FZSV3: {
        power: {
            topInfoP: "Power",
            kw: '9.1 kW',
            rpm: '@7,250 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '13.3 nm',
            details: '@5,500 rpm'
        },
        keyFeature: {
            details: 'Negative LCD Instrument Cluster',
            body: 'with Bluetooth connectivity'
        },
        designLang: {
            details: 'Muscular Street Fighter',
            bottomInfo: 'design'
        }
    },
    FZFI: {
        power: {
            topInfoP: "Power",
            kw: '9.1 kW',
            rpm: '@7,250 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '13.3 nm',
            details: '@5,500 rpm'
        },
        keyFeature: {
            details: 'Y-Connect',
            body: 'Bluetooth'
        },
        designLang: {
            details: 'Muscular Street Fighter',
            bottomInfo: 'design'
        }
    },
    FZFIV3: {
        power: {
            topInfoP: "Power",
            kw: '9.1 kW',
            rpm: '@7,250 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '13.3 nm',
            details: '@5,500 rpm'
        },
        keyFeature: {
            details: 'Negative LCD Instrument Cluster',
            body: 'with Bluetooth connectivity'
        },
        designLang: {
            details: 'Muscular Street Fighter',
            bottomInfo: 'design'
        }
    },
    R15V4: {
        power: {
            topInfoP: "Power",
            kw: '13.5 kW',
            rpm: '@10,000 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '14.2 nm',
            details: '@7,500 rpm'
        },
        keyFeature: {
            details: 'Assist & Slipper Clutch',
            body: 'with Variable Valve Actuation (VVA)'
        },
        designLang: {
            details: 'SuperSport',
            bottomInfo: 'design'
        }
    },
    R15S: {
        power: {
            topInfoP: "Power",
            kw: '13.5 kW',
            rpm: '@10,000 rpm'
        },
        torque: {
            topInfoT: "Torque",
            torque: '14.2 nm',
            details: '@7,500 rpm'
        },
        keyFeature: {
            details: 'Unibody Seat',
            body: 'Comfort'
        },
        designLang: {
            details: 'SuperSport',
            bottomInfo: 'design'
        }
    },

    Aerox: {
        power: {
            kw: '11.0 kW',
            power: '15.0 PS',
            rpm: '8000 RPM'
        },
        torque: {
            rpm: '6500 RPM',
            torque: '13.9 Nm',
            details: '1.4 kgfm'
        },
        keyFeature: {
            details: 'Smart Key',
            body: 'Convenient & Secure'
        },
        designLang: {
            details: 'Maxi Sport Design'
        }
    },
    Fascino125: {
        power: {
            kw: '6.0kW',
            power: '8.2PS',
            rpm: '6500 RPM'
        },
        torque: {
            rpm: '5000 RPM',
            torque: '10.3 Nm',
            details: '1.1 kgfm'
        },
        keyFeature: {
            details: 'Light Weight (99Kg)'
        },
        designLang: {
            details: 'European Fashion',
            bottomInfo: 'Design'
        }
    },
}

for (const model in bikeDetaileArr) {
    if (Object.hasOwnProperty.call(bikeDetaileArr, model)) {
        const bike = bikeDetaileArr[model];

        // Iterate over each property of the bike
        for (const prop in bike) {
            if (Object.hasOwnProperty.call(bike, prop)) {
                const detail = bike[prop];

                // console.log("nx", detail)
                // Check if the detail contains 'kw'
                if (detail.hasOwnProperty('kw')) {
                    // Wrap 'kW' text in a span tag
                    detail.kw = detail.kw.replace('kW', '<span>kW</span>');
                }

                // Check if the detail contains 'nm'
                if (detail.hasOwnProperty('torque')) {
                    // Wrap 'nm' text in a span tag
                    detail.torque = detail.torque.replace('nm', '<span>nm</span>');
                }
                if (detail.hasOwnProperty('details')) {
                    detail.details = detail.details.replace('Kgs', '<span>Kgs</span>')
                }
            }
        }
    }
}

// function updateRSeriesContent(seriesContainer, bikeName) {
//     // const subTab = document.querySelector('#motorcycle_r_series_select')
//     const bikeNameContainer = seriesContainer.querySelector('#bike_name');
//     const powerContainer = seriesContainer.querySelector('#bike_power');
//     const torqueContainer = seriesContainer.querySelector('#bike_torque');
//     const keyFeatureConatiner = seriesContainer.querySelector('#bike_key_feature');
//     const designLangContainer = seriesContainer.querySelector('#bike_design_lang')

//     // console.log("XYZ:", bikeDetaileArr['R3'], bike_name_data)
//     bikeNameContainer.innerHTML = bikes_alternate_name_data;
//     bikeNameContainer.classList.add('fade-in');
//     const currentBike = bikeDetaileArr[bike_name_data]
//     // console.log(currentBike, powerContainer);

//     powerContainer.children[0].innerHTML = currentBike.power.kw;
//     // powerContainer.children[1].innerHTML = currentBike.power.power;
//     powerContainer.children[1].innerHTML = currentBike.power.rpm;
//     powerContainer.classList.add('fade-in');

//     torqueContainer.children[0].innerHTML = currentBike.torque.torque;
//     torqueContainer.children[1].innerHTML = currentBike.torque.details;
//     torqueContainer.classList.add('fade-in');
//     // torqueContainer.children[2].innerHTML = currentBike.torque.details;

//     keyFeatureConatiner.children[0].innerHTML = currentBike.keyFeature.details;
//     keyFeatureConatiner.children[1].innerHTML = currentBike.keyFeature.body || "";
//     keyFeatureConatiner.classList.add('fade-in');

//     // designLangContainer.children[0].innerHTML = currentBike.designLang.details;
//     // if (currentBike.designLang?.info) {
//     //     designLangContainer.children[1].innerHTML = currentBike.designLang.info;
//     // } else {
//     //     designLangContainer.children[1].innerHTML = ''
//     // }

//     designLangContainer.children[0].innerHTML = currentBike.designLang.details;
//     designLangContainer.children[1].innerHTML = currentBike.designLang?.info || '';
//     designLangContainer.classList.add('fade-in');
// }

function updateRSeriesContent(seriesContainer, bikeName) {
    const bikeNameContainer = seriesContainer.querySelector('#bike_name');
    const powerContainer = seriesContainer.querySelector('#bike_power');
    const torqueContainer = seriesContainer.querySelector('#bike_torque');
    const keyFeatureConatiner = seriesContainer.querySelector('#bike_key_feature');
    const designLangContainer = seriesContainer.querySelector('#bike_design_lang')

    // Update bike name
    bikeNameContainer.innerHTML = bikes_alternate_name_data;
    bikeNameContainer.classList.remove('fade-in'); // Remove existing fade-in class
    bikeNameContainer.offsetWidth; // Trigger reflow
    bikeNameContainer.classList.add('fade-in'); // Add fade-in animation

    const currentBike = bikeDetaileArr[bike_name_data];

    console.log(currentBike, "CCURR")

    // Update power
    powerContainer.children[0].innerHTML = currentBike.power.topInfoP;
    powerContainer.children[1].innerHTML = currentBike.power.kw;
    powerContainer.children[2].innerHTML = currentBike.power.rpm;
    powerContainer.classList.remove('fade-in'); // Remove existing fade-in class
    powerContainer.offsetWidth; // Trigger reflow
    powerContainer.classList.add('fade-in'); // Add fade-in animation

    // Update torque
    torqueContainer.children[0].innerHTML = currentBike.torque.topInfoT;
    torqueContainer.children[1].innerHTML = currentBike.torque.torque;
    torqueContainer.children[2].innerHTML = currentBike.torque.details;
    torqueContainer.classList.remove('fade-in'); // Remove existing fade-in class
    torqueContainer.offsetWidth; // Trigger reflow
    torqueContainer.classList.add('fade-in'); // Add fade-in animation

    // Update key features
    keyFeatureConatiner.children[0].innerHTML = currentBike.keyFeature.details;
    keyFeatureConatiner.children[1].innerHTML = currentBike.keyFeature.body || "";
    keyFeatureConatiner.classList.remove('fade-in'); // Remove existing fade-in class
    keyFeatureConatiner.offsetWidth; // Trigger reflow
    keyFeatureConatiner.classList.add('fade-in'); // Add fade-in animation

    // Update design language
    designLangContainer.children[0].innerHTML = currentBike.designLang.details;
    designLangContainer.children[1].innerHTML = (currentBike.designLang?.info || "") || (currentBike.designLang?.bottomInfo || "");
    designLangContainer.classList.remove('fade-in'); // Remove existing fade-in class
    designLangContainer.offsetWidth; // Trigger reflow
    designLangContainer.classList.add('fade-in'); // Add fade-in animation
}

