function adjust360EllipseHeight() {
  const ellipse360 = document.querySelector(".exp_360_rotate_ellipse");
  ellipse360.style.height = `${(ellipse360.offsetWidth * 10) / 100}px`;
}

// Adjust position on initial load
window.onload = adjust360EllipseHeight;

// Adjust position on resize if necessary
window.onresize = adjust360EllipseHeight;

// const HOTSPOTS_CONFIG = [
//     {
//         positions: [
//             { imageIndex: 0, xCoord: 427, yCoord: 319 },
//             { imageIndex: 1, xCoord: 424 },
//             { imageIndex: 2, xCoord: 420 },
//             { imageIndex: 3, xCoord: 398 },
//             { imageIndex: 4, xCoord: 370 },
//             { imageIndex: 5, xCoord: 341 },
//             { imageIndex: 6, xCoord: 331 },
//             { imageIndex: 7, xCoord: 321 },
//             { imageIndex: 8, xCoord: 311 },
//         ],
//         variant: {
//             title: 'New Gurkha Technical Specifications',
//             // url: 'https://www.forcegurkha.co.in/specifications/',
//             // newTab: true
//             description: 'To display a carousel of images we need an array of objects, each object should include the src and the alt of each image',
//             moreDetailsTitle: "Read More",
//             moreDetailsUrl: "https://www.forcegurkha.co.in/specifications/"
//         }
//     }
// ]
// window.CI360.addHotspots('YZF-R3_360', HOTSPOTS_CONFIG);

// function updateLinePosition() {
//     var startElem = document.querySelector('.cloudimage-360-hotspot-custom-icon');
//     var endElem = document.getElementById('endPoint');
//     var line = document.getElementById('connectorLine');

//     var svg = document.getElementById('lineContainer');
//     var svgRect = svg.getBoundingClientRect();

//     var startPos = startElem.getBoundingClientRect();
//     var endPos = endElem.getBoundingClientRect();

//     // Set the attributes of the line
//     line.setAttribute('x1', startPos.left - svgRect.left + startElem.offsetWidth / 2);
//     line.setAttribute('y1', startPos.top - svgRect.top + startElem.offsetHeight / 2);
//     line.setAttribute('x2', endPos.left - svgRect.left + endElem.offsetWidth / 2);
//     line.setAttribute('y2', endPos.top - svgRect.top + endElem.offsetHeight / 2);
// }

// // Call this function on load and whenever the elements might move
// window.onload = updateLinePosition;
// window.onresize = updateLinePosition; 

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
        document.getElementById('blue_color_details').style.display = 'block';
        document.getElementById('magenta_color_details').style.display = 'none';
        document.getElementById('white_color_details').style.display = 'none';
        document.getElementById('black_color_details').style.display = 'none';
        document.getElementById('red_color_details').style.display = 'none';
    } else if (color === 'magenta') {
        document.getElementById('blue_color_details').style.display = 'none';
        document.getElementById('magenta_color_details').style.display = 'block';
        document.getElementById('white_color_details').style.display = 'none';
        document.getElementById('black_color_details').style.display = 'none';
        document.getElementById('red_color_details').style.display = 'none';
    }
    else if (color === 'white') {
        document.getElementById('blue_color_details').style.display = 'none';
        document.getElementById('magenta_color_details').style.display = 'none';
        document.getElementById('white_color_details').style.display = 'block';
        document.getElementById('black_color_details').style.display = 'none';
        document.getElementById('red_color_details').style.display = 'none';
    }
    else if (color === 'black') {
        document.getElementById('blue_color_details').style.display = 'none';
        document.getElementById('magenta_color_details').style.display = 'none';
        document.getElementById('white_color_details').style.display = 'none';
        document.getElementById('black_color_details').style.display = 'block';
        document.getElementById('red_color_details').style.display = 'none';
    }
    else if (color === 'red') {
        document.getElementById('blue_color_details').style.display = 'none';
        document.getElementById('magenta_color_details').style.display = 'none';
        document.getElementById('white_color_details').style.display = 'none';
        document.getElementById('black_color_details').style.display = 'none';
        document.getElementById('red_color_details').style.display = 'red';
    }

    // Hide all color details containers
    var colorDetailsContainers = document.querySelectorAll('.exp_360_color_details');
    colorDetailsContainers.forEach(function(container) {
        container.style.display = 'none';
    });
    
    // Update prices based on color selection
    var priceElement = document.querySelector('.exp_360_price');
    if (priceElement) {
        var priceMap = {
            'blue': '₹ 1,87,300*',
            'magenta': '₹ 1,87,300*',
            'white': '₹ 1,87,300*',
            'black': '₹ 1,83,300*',
            'red': '₹ 1,82,300*'
        };
        priceElement.textContent = priceMap[color] || ''; // Update price based on color
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
const images = document.querySelectorAll('.cloudimage-360');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    images.forEach((image, index) => {
        const maxRotation = 45; // Maximum rotation angle (in degrees)
        const scrollSpeed = 0.1; // Scroll speed multiplier

        // Calculate rotation angle based on scroll position
        const rotation = (scrollPosition * scrollSpeed) % 360; // Full rotation with scroll

        // Calculate constrained rotation angle within the specified maximum rotation
        let constrainedRotation = rotation % (maxRotation * 2); // Range from 0 to (maxRotation * 2)
        if (constrainedRotation > maxRotation) {
            constrainedRotation = (maxRotation * 2) - constrainedRotation;
        }

        // Apply the constrained rotation to the image
        image.style.transform = `rotateY(${constrainedRotation}deg)`; // Anticlockwise rotation
    });
});