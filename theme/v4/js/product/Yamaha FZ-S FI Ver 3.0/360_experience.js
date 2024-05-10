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
    
    if (color === 'mattegrey') {
        document.getElementById('mattegrey_color_details').style.display = 'block';
        document.getElementById('mattered_color_details').style.display = 'none';
        document.getElementById('black_color_details').style.display = 'none';
    } else if (color === 'mattered') {
        document.getElementById('mattegrey_color_details').style.display = 'none';
        document.getElementById('mattered_color_details').style.display = 'block';
        document.getElementById('black_color_details').style.display = 'none';
    }
    else if (color === 'black') {
        document.getElementById('mattegrey_color_details').style.display = 'none';
        document.getElementById('mattered_color_details').style.display = 'none';
        document.getElementById('black_color_details').style.display = 'block';
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
            'mattegrey': '₹ 1,21,700*',
            'mattered': '₹ 1,21,700*',
            'black': '₹ 1,22,700*'
        };
        priceElement.textContent = priceMap[color] || ''; // Update price based on color
    }

    // Show the color details container corresponding to the selected color
    var colorDetailsContainer = document.getElementById(color + '_color_details');
    if (colorDetailsContainer) {
        colorDetailsContainer.style.display = 'block';
    }
    
    // Hide all bike color containers
    var bikeColorContainers = document.querySelectorAll('.exp_360_bike_color');
    bikeColorContainers.forEach(function(bikeColor) {
        bikeColor.classList.add('d-none');
    });
    
    // Show the bike color container corresponding to the selected color
    var selectedBikeColor = document.querySelector('.bike_color_' + color);
    if (selectedBikeColor) {
        selectedBikeColor.classList.remove('d-none');
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