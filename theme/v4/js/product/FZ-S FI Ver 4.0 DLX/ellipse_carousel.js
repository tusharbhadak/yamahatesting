let currentActiveDot = null;
const ellipseContentMapping = [
  {
    bikeTitle: "FZ-S FI V4.0 DLX",
    heading: "Features",
    featureDetails: [
      {
        subHeading: "Y-Connect with Bluetooth",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/features/y_connect_with_bluetooth.webp",
        description:
          "Stay connected even on the move. Y-Connect is Yamaha’s latest innovation that lets you link your smartphone directly to your Yamaha motorcycle.",
      },
      {
        subHeading: "Multi-function LCD Instrument Cluster",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/features/multi_function_lcd_instrument_cluster.webp",
        description:
          "Take advantage of all the information that the sleek and stylish LCD instrument cluster has to offer to help you ride better.",
      },
      {
        subHeading: "E20 Fuel Compatible",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/features/e20_fuel_compatible.webp",
        description:
          "Reduce emissions and ride greener with E20 Fuel compatibility, as part of our commitment to a cleaner, more sustainable future.",
      },
      {
        subHeading: "Under Cowl",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/features/under_cowl.webp",
        description:
          "The lower engine fairing has been introduced to reduce mud and dirt splatter, enhancing the sporty look of the bike.",
      },
      {
        subHeading: "Lightweight Body",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/features/light_weight_body.webp",
        description:
          "Control your ride with ease while enhancing economy, thanks to the lightweight body that maintains the perfect power-to-weight ratio for an exhilarating experience.",
      },
    ],
  },
  {
    bikeTitle: "FZ-S FI V4.0 DLX",
    heading: "Design",
    featureDetails: [
      {
        subHeading: "Class (D) Headlight with Position Lamp",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/design/newly_designed_class_d_headlight_with_position_lamp.webp",
        description:
          "Illuminate the night with the brighter LED headlight and enhanced light distribution, ensuring maximum visibility",
      },
      {
        subHeading: "LED Flashers & LED Tail Light",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/design/led_flashers_led_tail_light.webp",
        description:
          "Stand out on the streets with eye-catching LED flashers and LED tail light that leaves a lasting impression.",
      },
      {
        subHeading: "Coloured Wheels",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/design/coloured_wheels.webp",
        description:
          "Add a touch of flair to your ride with the vibrant coloured wheels, designed to turn heads wherever you go!",
      },
      {
        subHeading: "Chrome Duct Plating and 3D emblem",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/design/chrome_duct_plating_and_3d_emblem.webp",
        description:
          "Elevate your street presence with glossy chrome plating and a premium 3D emblem that reflects exclusivity.",
      },
      {
        subHeading: "Comfortable Two-Level Seat",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/design/comfortable_two_level_seat.webp",
        description:
          "Experience unmatched comfort with the two-level seat, offering excellent cushioning and support for both the rider and pillion.",
      },
      {
        subHeading: "Advanced Midship Muffler & enhanced muffler sound",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/design/advanced_midship_muffler_enhanced_muffler_sound.webp",
        description:
          "Enjoy a bold and exhilarating ride with the advanced midship muffler and sound that adds to the thrill of riding.",
      },
    ],
  },
  {
    bikeTitle: "FZ-S FI V4.0 DLX",
    heading: "Performance",
    featureDetails: [
      {
        subHeading: "Traction Control System",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/performance/traction_control_system.webp",
        description:
          "Stay in control with this category-first electronic system. It reduces the chances of wheelspin and offers a stable ride.",
      },
      {
        subHeading: "Trusted & Efficient 149cc FI Engine",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/performance/trusted_efficient_149cc_fi_engine.webp",
        description:
          "Experience the strength of the air-cooled 149cc fuel-injected engine, delivering superior acceleration and exhilarating performance.",
      },
      {
        subHeading: "Monocross Suspension",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/performance/monocross_suspension.webp",
        description:
          "Enjoy excellent shock-absorbing performance and stability during braking with the lightweight Monocross suspension.",
      },
    ],
  },
  {
    bikeTitle: "FZ-S FI V4.0 DLX",
    heading: "Comfort",
    featureDetails: [
      {
        subHeading: "Front Disc Brake with single channel ABS",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/comfort/",
        description:
          "Stay in control with the Front Disc Brake and Bosch Anti-Lock Braking System (ABS), ensuring controlled braking and stability even in slippery conditions.",
      },
      {
        subHeading: "140mm Wide Radial Tyre",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/comfort/",
        description:
          "Conquer any road with ease, thanks to the wide radial tyre that offers low rolling resistance, excellent fuel economy, and superior grip.",
      },
    ],
  },
  {
    bikeTitle: "FZ-S FI V4.0 DLX",
    heading: "Y-CONNECT APP",
    featureDetails: [
      {
        subHeading: "CALL, SMS, EMAIL ALERTS ",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzx/fzx arc images/yconnect/call_sms_email (1).webp",
        description:
          "Stay connected with call, SMS, and email alerts on your instrument cluster screen, keeping you informed on the go. ",
      },
      {
        subHeading: "APP CONNECTIVITY STATUS",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzx/fzx arc images/yconnect/call_sms_email (1).webp",
        description:
          "Keep tabs on whether your bike's hooked up to the Y-Connect app on your phone. ",
      },
      {
        subHeading: "PHONE BATTERY LEVEL STATUS ",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzx/fzx arc images/yconnect/call_sms_email (1).webp",
        description:
          "Never be in the dark about your phone's battery – check it right on your bike. ",
      },
      {
        subHeading: "Fuel Consumption Tracker ",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/yconnect/fuel.webp",
        description:
          "Keep an eye on how much fuel you're burning through each day and month.",
      },
      {
        subHeading: "Maintenance Recommendations",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/yconnect/maintenance_.webp",
        description:
          "Get smart advice based on your bike's data, like when it's time to give your battery a check. ",
      },
      {
        subHeading: "Last Parking Location",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/yconnect/lastparking.webp",
        description:
          "Find out where you left your ride last – it's like a built-in memory for your bike. But remember, if the machine has moved since it was parked, it won’t be tracked.",
      },
      {
        subHeading: "Malfunction Notification",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/yconnect/malfunction.webp",
        description:
          "Get a heads-up if your bike's acting up, so you can sort it out quickly.",
      },
      {
        subHeading: "Revs Dashboard",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/yconnect/revdashboard.webp",
        description:
          "See what's going on underneath with real-time stats like Engine RPM and Eco-friendly Riding Indicator.",
      },
      {
        subHeading: "Ranking",
        imageUrl: "/theme/v4/images/webp images/FZ ALL series/fzv4dlx arc images/yconnect/ranking.webp",
        description:
          "Join the Yamaha riders and see how you measure up against others when it comes to racking up miles and being eco-friendly.",
      },
    ],
  },
];
function initializeDots() {
  $(
    ".ellipse_carousel_selection_dot, .ellipse_carousel_selection_label"
  ).remove();
  $(".ellipse_carousel_circle_svg").empty();

  var $circle = $(".ellipse_carousel_selection_circle");
  var circleWidth = $circle.width(); // Get the current width of the circle container
  var radius = circleWidth / 2; // Radius adjusted for dot size

  let ellipseCircleDots = [
    { label: "Features" },
    { label: "Design" },
    { label: "Performance" },
    { label: "Comfort" },
    { label: "Y-CONNECT APP" },
  ];
  var quantity = 5; // Number of dots
  var gap = 0.261799; // Gap of about 15 degrees in radians

  var centerX = radius,
    centerY = radius;

  // Initialize SVG path for dashed line
  var svgNS = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(svgNS, "svg");
  //   $(svg).addClass("ellipse_carousel_circle_svg");
  $(svg)
    .attr({
      width: circleWidth,
      height: circleWidth,
      class: "ellipse_carousel_circle_svg",
    })
    .appendTo($circle);
  var path = document.createElementNS(svgNS, "path");

  $(path)
    .attr({
      class: "ellipse_carousel_circle_path",
      d: `M${centerX - radius},${centerY} A${radius},${radius} 0 0 1 ${
        centerX + radius
      },${centerY}`,
      fill: "none",
      stroke: "black",
      "stroke-width": "2",
      "stroke-dasharray": "4, 4",
    })
    .appendTo(svg);

  ellipseCircleDots.forEach((dot, i) => {
    var angle =
      Math.PI +
      gap +
      ((Math.PI - 2 * gap) * i) / (ellipseCircleDots.length - 1);
    var x = centerX + radius * Math.cos(angle);
    var y = centerY + radius * Math.sin(angle);

    $("<div />", { id: "ellipse_carousel_dot" + i, onclick: `toggleDot(${i})` })
      .addClass(`ellipse_carousel_selection_dot`)
      .css({ left: x - 9 + "px", top: y - 9 + "px" }) // x-(widthOfDots/2) to place on the line
      .appendTo($circle);

    // Create label
    var $label = $("<div />")
      .addClass("ellipse_carousel_selection_label")
      .text(dot.label)
      .appendTo($circle);

    let labelWidth = $label.width();
    $label.css({
      left: x - labelWidth / 2 + "px",
      top: y - 35 + "px",
    });
  });
  if (currentActiveDot === null) {
    toggleDot(0);
  } else {
    toggleDot(currentActiveDot);
  }
}

// Add event listeners to inner dots
$(".ellipse_carousel_select_dot").each(function(index) {
  $(this).on("click", function() {
    const content = ellipseContentMapping[currentActiveDot].featureDetails[index];
    updateEllipseSubHeadingAndDescription(content.subHeading, content.description, content.imageUrl);
  });
});

// Function to update sub-heading and description
function updateEllipseSubHeadingAndDescription(subHeading, description, imageUrl) {
  $(".ellipse_carousel_sub_heading").text(subHeading);
  $(".ellipse_carousel_description").text(description);
  $("#ellipse_img1 image").attr("href", imageUrl);
}


function toggleDot(index) {
  if (currentActiveDot !== null) {
    let $previousActiveDot = $("#ellipse_carousel_dot" + currentActiveDot);
    $previousActiveDot.removeClass("active");
  }

  let $currentDot = $("#ellipse_carousel_dot" + index);
  $currentDot.addClass("active");

  // Update inner dots' active state based on the selected section
  // $(".ellipse_carousel_select_dot").each(function(innerIndex) {
  //   if (index === innerIndex) {
  //     $(this).find(".ellipse_carousel_dot_inner").addClass("active");
  //   } else {
  //     $(this).find(".ellipse_carousel_dot_inner").removeClass("active");
  //   }
  // });

  const content = ellipseContentMapping[index];

  var lineEllipse = content.featureDetails.length;
  var generatedHTML = '';
    for (var i = 0; i < lineEllipse; i++) {
      generatedHTML += `<div class="ellipse_carousel_select_dot">
                          <span class="ellipse_carousel_dot_out"><span class="ellipse_carousel_dot_inner"></span></span>
                        </div>`;
    }

    var container = document.querySelector('.ellipse_carousel_select_dots_container');
    container.innerHTML = '';
    container.innerHTML += generatedHTML;
    
    $(".ellipse_carousel_select_dot").each(function(index) {
      $(this).on("click", function() {
        const content = ellipseContentMapping[currentActiveDot].featureDetails[index];
        updateEllipseSubHeadingAndDescription(content.subHeading, content.description, content.imageUrl);
      });
    });
    let ellipseInnerDots = document.querySelectorAll(".ellipse_carousel_select_dot");
    
    ellipseInnerDots.forEach((dot) => {
      dot.addEventListener("click", () => setEllipseInnerActiveDots(dot, ellipseInnerDots));
    });
    setEllipseInnerActiveDots($(".ellipse_carousel_select_dot:first-child")[0], ellipseInnerDots);


  updateEllipseImage(content.imageUrl);
  updateEllipseBikeTitle(content.bikeTitle);
  updateEllipseHeading(content.heading);
  updateEllipseDetails(content.featureDetails[0]);

  currentActiveDot = index;
}

function setEllipseInnerActiveDots(dot, ellipseInnerDots) {
  ellipseInnerDots.forEach((d) => {
    d.querySelector(".ellipse_carousel_dot_out").classList.remove("active");
    d.querySelector(".ellipse_carousel_dot_inner").classList.remove("active");
  });

  dot.querySelector(".ellipse_carousel_dot_out").classList.add("active");
  dot.querySelector(".ellipse_carousel_dot_inner").classList.add("active");
}


function updateEllipseImage(imageUrl) {
  const imageElement = document.querySelector("#ellipse_img1 image");
  imageElement.setAttribute("href", imageUrl);
}

function updateEllipseBikeTitle(title) {
  document.querySelector(".ellipse_carousel_bike_title").textContent = title;
}

function updateEllipseHeading(heading) {
  document.querySelector(".ellipse_carousel_heading").textContent = heading;
}

function updateEllipseDetails(detail) {
  document.querySelector(".ellipse_carousel_sub_heading").textContent =
    detail.subHeading;
  document.querySelector(".ellipse_carousel_description").textContent =
    detail.description;
}

// Debounce function to limit the frequency of function calls
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
          func.apply(this, args);
      }, delay);
  };
}

// Function to handle keyboard arrow keys and mouse scroll with delay
const handleNavigationWithDelay = debounce(handleNavigation, 10000);

// Function to handle keyboard arrow keys and mouse scroll
function handleNavigation(event) {
  if (event.key === "ArrowUp") {
      // Move to the previous section
      moveSection(-1);
  } else if (event.key === "ArrowDown") {
      // Move to the next section
      moveSection(1);
  }
}

// Add event listener for mouse scroll with delay
document.body.addEventListener("wheel", function(event) {
  event.preventDefault(); // Prevent default scrolling behavior
  handleNavigationWithDelay(event);
});

// Add event listener for mouse scroll
document.body.addEventListener("wheel", function(event) {
  event.preventDefault(); // Prevent default scrolling behavior
  handleNavigation(event);
});


document.body.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault(); // Prevent default scrolling behavior
    if (event.key === "ArrowUp") {
        // Move to the previous section
        moveSection(-1);
    } else {
        // Move to the next section
        moveSection(1);
    }
}
});


function moveSection(direction) {
  if (currentActiveDot !== null) {
      let newIndex = currentActiveDot + direction;
      // Ensure the newIndex is within bounds
      if (newIndex >= 0 && newIndex < ellipseContentMapping.length) {
          toggleDot(newIndex);
      }
  }
}

// Call initializeDots when the window is loaded and resized
$(window).ready(initializeDots);
$(window).resize(initializeDots);

// Add event listeners to inner dots if needed
let ellipseInnerDots = document.querySelectorAll(".ellipse_carousel_select_dot");

function setEllipseInnerActiveDot(dot) {
  ellipseInnerDots.forEach((d) => {
    d.querySelector(".ellipse_carousel_dot_out").classList.remove("active");
    d.querySelector(".ellipse_carousel_dot_inner").classList.remove("active");
  });

  dot.querySelector(".ellipse_carousel_dot_out").classList.add("active");
  dot.querySelector(".ellipse_carousel_dot_inner").classList.add("active");
}

ellipseInnerDots.forEach((dot) => {
  dot.addEventListener("click", () => setEllipseInnerActiveDot(dot));
});

if (ellipseInnerDots.length > 0) {
  setEllipseInnerActiveDot(ellipseInnerDots[0]);
}

// Update the event listener for inner dots to handle content update
$(".ellipse_carousel_select").on("click", ".ellipse_carousel_select_dot", function() {
  const index = $(this).index();
  toggleDot(index);
  const content = ellipseContentMapping[index];
  const featureDetails = getFeatureDetails(content.heading, content.featureDetails);
  updateEllipseDetails(featureDetails);
});

// Function to retrieve featureDetails based on heading
function getFeatureDetails(heading, featureDetails) {
  return featureDetails.find(item => item.subHeading === heading) || featureDetails[0];
}

// Call setEllipseInnerActiveDot when the page loads
setEllipseInnerActiveDot($(".ellipse_carousel_select_dot:first-child")[0]);

// Update the updateEllipseDetails function to accept featureDetails directly
function updateEllipseDetails(featureDetails) {
  $(".ellipse_carousel_sub_heading").text(featureDetails.subHeading);
  $(".ellipse_carousel_description").text(featureDetails.description);
  $("#ellipse_img1 image").attr("href", featureDetails.imageUrl);
}
