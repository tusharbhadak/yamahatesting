function adjust360EllipseHeight() {
    const ellipse360 = document.querySelector(".exp_360_rotate_ellipse");
    ellipse360.style.height = `${(ellipse360.offsetWidth * 10) / 100}px`;
  }
  
  // Adjust position on initial load
  window.onload = adjust360EllipseHeight;
  
  // Adjust position on resize if necessary
  window.onresize = adjust360EllipseHeight;
  
  document.getElementById('exp_360_leftArrowButton').addEventListener('click', function() {
      simulateKeydown(37); 
  });
  
  document.getElementById('exp_360_rightArrowButton').addEventListener('click', function() {
      simulateKeydown(39); 
  });
  
  function changeColor(button, color) {
      // Remove 'active' class from all buttons
      document.querySelectorAll('.exp_360_select_color_btn').forEach(btn => btn.classList.remove('active'));
  
      // Add 'active' class to the clicked button
      button.classList.add('active');
  
      // Hide all color details
      document.querySelectorAll('.exp_360_color_details').forEach(detail => detail.style.display = 'none');
  
      // Show color details based on the color clicked
      document.getElementById(color + '_color_details').style.display = 'block';
  
  
      var buttons = document.querySelectorAll('.exp_360_select_color_btn');
      buttons.forEach(function(btn) {
          btn.classList.remove('active');
      });
      
      // Add active class to the clicked button
      button.classList.add('active');
      
      if (color === 'blue') {
          document.getElementById('cyan_color_details').style.display = 'block';
          document.getElementById('black_color_details').style.display = 'none';
      } else if (color === 'black') {
          document.getElementById('cyan_color_details').style.display = 'none';
          document.getElementById('black_color_details').style.display = 'block';
      }
  
      // Hide all color details containers
      var colorDetailsContainers = document.querySelectorAll('.exp_360_color_details');
      colorDetailsContainers.forEach(function(container) {
          container.style.display = 'none';
      });
      
      // Show the color details container corresponding to the selected color
    var colorDetailsContainer = document.getElementById(color + '_color_details');
    if (colorDetailsContainer) {
        colorDetailsContainer.style.display = 'block';
    }
    
    // Hide all bike color containers and apply fade animation
    var bikeColorContainers = document.querySelectorAll('.exp_360_bike_color');
    bikeColorContainers.forEach(function(bikeColor) {
        bikeColor.classList.add('d-none'); // Hide all images
        bikeColor.querySelector('img').classList.add('hidden'); // Apply fade out effect
    });

    // Show the bike color container corresponding to the selected color with fade in effect
    var selectedBikeColor = document.querySelector('.bike_color_' + color);
    if (selectedBikeColor) {
        selectedBikeColor.classList.remove('d-none'); // Show selected image container
        setTimeout(() => {
            selectedBikeColor.querySelector('img').classList.remove('hidden'); // Apply fade in effect
        }, 10); // Set a timeout to ensure CSS class is applied after display change
    }
}

function simulateKeydown(keyCode) {
    const target = document.querySelector('.exp_360_rotate_image');
    if (!target) return; 

    var event = new KeyboardEvent('keydown', {
        keyCode: keyCode,
        which: keyCode,
        altKey: false,
        ctrlKey: false,
        shiftKey: false,
        metaKey: false,
        bubbles: true
    });

    target.dispatchEvent(event);
}

// Get the 360-degree viewer element
var viewer = document.querySelector('.cloudimage-360');

// Specify the total number of images (assuming 40 based on data-amount-x attribute)
var totalImages = parseInt(viewer.getAttribute('data-amount-x'));

// Array to hold individual image URLs
var imageUrls = [];

// Generate individual image URLs for the images numbered from 1 to totalImages
for (var i = 1; i <= totalImages; i++) {
    var imageUrl = i + '.webp'; // Construct the individual image URL
    imageUrls.push(imageUrl);
}

// Set the data-filename-x attribute with the first image URL initially
viewer.setAttribute('data-filename-x', imageUrls[0]);

// Function to rotate to the next or previous image
function rotateImage(direction) {
var currentImageUrl = viewer.getAttribute('data-filename-x');
var currentIndex = imageUrls.indexOf(currentImageUrl);
var nextIndex = (currentIndex + direction + imageUrls.length) % imageUrls.length;
var nextImageUrl = imageUrls[nextIndex];
viewer.setAttribute('data-filename-x', nextImageUrl);
}

// Handle image rotation on clicking the left arrow button
document.getElementById('exp_360_leftArrowButton').addEventListener('click', function() {
rotateImage(-1); // Rotate to the previous image
});

// Handle image rotation on clicking the right arrow button
document.getElementById('exp_360_rightArrowButton').addEventListener('click', function() {
rotateImage(1); // Rotate to the next image
});

// Function to handle automatic rotation based on scroll direction
var lastScrollTop = 0;
function handleScroll() {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // Scrolling down
        rotateImage(1); // Rotate to the next image
    } else {
        // Scrolling up
        rotateImage(-1); // Rotate to the previous image
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}

// Event listener for scroll events
var scrollThrottleTimer;
window.addEventListener('scroll', function() {
    // Throttle scroll event to avoid excessive function calls
    if (!scrollThrottleTimer) {
        scrollThrottleTimer = setTimeout(function() {
            handleScroll();
            scrollThrottleTimer = null;
        }, 100); // Adjust throttle time (milliseconds) based on desired responsiveness
    }
});