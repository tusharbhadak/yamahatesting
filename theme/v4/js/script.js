// slider js starts 
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide_header");
  const dotsContainer = document.querySelector(".slider-dots");
  // const heroSliderArrow = document.querySelector(".hero-slider-container .slide_right_arrow")
  // heroSliderArrow.addEventListener('click',()=>{
  //   currentSlide = (currentSlide + 1) % slides.length;
  //   showSlide(currentSlide) 
  // })

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
    updateDots();
  }

  function createDots() {
    slides.forEach((slide, i) => {
      const dot = document.createElement("div");
      dot.innerHTML = '<span></span>'
      dot.addEventListener("click", () => {
        currentSlide = i;
        showSlide(currentSlide);
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = document.querySelectorAll(".slider-dots span");
    dots.forEach((dot, i) => {
      console.log(dot)
      if (i === currentSlide) {
        dot.style.backgroundColor = "#0002D7"; // Active dot color
      } else {
        dot.style.backgroundColor = "#FFFFFF"; // Inactive dot color
      }
    });
  }

  // function autoSlide() {
  //   const initialSlideInterval = 30000; // Interval for the first slide
  //   const subsequentSlideInterval = 3000; // Interval for subsequent slides

  //   // Display the first slide for a longer duration
  //   setTimeout(() => {
  //     setInterval(() => {
  //       currentSlide = (currentSlide + 1) % slides.length;
  //       showSlide(currentSlide);
  //     }, subsequentSlideInterval);
  //   }, initialSlideInterval);
  // }

  function autoSlide() {
    const initialSlideInterval = 30000; // Interval for the first slide
    const subsequentSlideInterval = 3000; // Interval for subsequent slides

    let isFirstSlide = true;

    function startInterval(interval) {
      return setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }, interval);
    }

    let slideInterval;

    function resetInterval(interval) {
      clearInterval(slideInterval);
      slideInterval = startInterval(interval);
    }

    // Display the first slide for a longer duration initially
    resetInterval(initialSlideInterval);

    // Event listener for when the slide changes
    function handleSlideChange() {
      if (currentSlide === 0 && !isFirstSlide) {
        resetInterval(initialSlideInterval);
      } else if (currentSlide !== 0 && isFirstSlide) {
        resetInterval(subsequentSlideInterval);
        isFirstSlide = false;
      }
    }

    // Update interval when slide changes
    slides.forEach((slide) => {
      slide.addEventListener("transitionend", handleSlideChange);
    });
  }


  console.log(currentSlide)


  function handleSwipe(direction) {
    if (direction === "left") {
      currentSlide = (currentSlide + 1) % slides.length;
    } else if (direction === "right") {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    showSlide(currentSlide);
  }

  // Initialize TouchSwipe for swipe detection
  $(".slide-track").swipe({
    swipeLeft: function () {
      handleSwipe("left");
    },
    swipeRight: function () {
      handleSwipe("right");
    },
    threshold: 50 // Adjust the swipe threshold as needed
  });

  createDots();
  showSlide(currentSlide);
  autoSlide();
});

document.addEventListener("DOMContentLoaded", function () {
  const bannerContainer = document.querySelector(".hero-slider-container");
  const bannerDots = bannerContainer.querySelector(".slider-dots");
  let hoverTimer;
  console.log(bannerContainer);
  bannerContainer.addEventListener("mousemove", () => {
    bannerDots.style.opacity = "1";
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      bannerDots.style.opacity = "0";
    }, 2000);
  });
});

//   slider js ends
//   slider js ends

// contest carousel scripts
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.carousel_contest img');

  function showSlide(n) {
    slideIndex = n;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
  }

  function nextSlide() {
    showSlide(slideIndex + 1);
  }

  function prevSlide() {
    showSlide(slideIndex - 1);
  }

  showSlide(slideIndex);

  document.getElementById("prevButton").addEventListener("click", prevSlide);
  document.getElementById("nextButton").addEventListener("click", nextSlide);
});




// contest carousel scripts ends

// click now button

document.addEventListener("DOMContentLoaded", function () {
  const clickNowbutton = document.getElementById("fixed-click-now-button");
  const clickNowslidingContainer = document.querySelector(".click-now-slider");

  function closeSliderOnClickOutside(event) {
    if (!clickNowslidingContainer.contains(event.target) && event.target !== clickNowbutton) {
      clickNowslidingContainer.style.display = "none";
      document.removeEventListener("click", closeSliderOnClickOutside);
    }
  }

  clickNowbutton.addEventListener("click", function (event) {
    event.stopPropagation()
    const clickNowComputedStyle = window.getComputedStyle(
      clickNowslidingContainer
    );
    clickNowslidingContainer.style.display =
      clickNowComputedStyle.display === "none" ? "flex" : "none";

    if (clickNowslidingContainer.style.display === "flex") {
      document.addEventListener("click", closeSliderOnClickOutside);
    } else {
      document.removeEventListener("click", closeSliderOnClickOutside);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const eventSliders = document.querySelectorAll('.event_banner_slide');
  let currentEventSlide = 0;

  function showEventSlide(n) {
    currentEventSlide = n;
    if (currentEventSlide < 0) {
      currentEventSlide = eventSliders.length - 1;
    } else if (currentEventSlide >= eventSliders.length) {
      currentEventSlide = 0;
    }

    eventSliders.forEach((slide, i) => slide.style.transform = `translateX(-${currentEventSlide * 100}%)`);
  }

  function nextEventSlide() {
    showEventSlide(currentEventSlide + 1);
  }

  function prevEventSlide() {
    showEventSlide(currentEventSlide - 1);
  }
  function eventAutoSlide() {
    setInterval(() => {
      showEventSlide(currentEventSlide + 1)
    }, 5000)
  }
  document.getElementById("event_prevButton").addEventListener("click", prevEventSlide);
  document.getElementById("event_nextButton").addEventListener("click", nextEventSlide);
  eventAutoSlide();
})

document.addEventListener("DOMContentLoaded", function () {
  const jaipurEventContainer = document.querySelector("#jaipur_event_timer");
  // const delhiEventTimeContainer = document.querySelector('#delhi_event_timer');

  let jaipurEventDate = new Date("May 31, 2024").getTime();
  // let delhiEventDate = new Date("May 5, 2024").getTime();

  function updateEventCountDown(countDownDate, countDownId) {
    let counter = setInterval(function () {
      let now = new Date().getTime();

      let distance = countDownDate - now;
      if (distance < 0) {
        clearInterval(counter);
        return;
      }

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const dayCont = countDownId.querySelector('.event_time_box.days div')
      dayCont.innerHTML = days;
      const hourCont = countDownId.querySelector('.event_time_box.hours div')
      hourCont.innerHTML = hours;
      const minuteCont = countDownId.querySelector('.event_time_box.minutes div')
      minuteCont.innerHTML = minutes;
      const secondCont = countDownId.querySelector('.event_time_box.seconds div')
      secondCont.innerHTML = seconds;

    }, 1000);
  }
  // updateEventCountDown(delhiEventDate, delhiEventTimeContainer);
  updateEventCountDown(jaipurEventDate, jaipurEventContainer);
});