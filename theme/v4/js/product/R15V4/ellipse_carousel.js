let currentActiveDot = null;
const ellipseContentMapping = [
  {
    bikeTitle: "Yamaha R15V4",
    heading: "Features",
    featureDetails: [
      {
        subHeading: "Dual Horn",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/features01.webp",
        description:
          "In city hustle, your horn matters. Let the streets know you're blazing a trail to the future. R15M's split horns roar with higher and lower decibels (Dual Tone), echoing the spirit of a true racer.",
      },
      {
        subHeading: "Aluminium Swingarm",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/Aluminum-Swingarm.webp",
        description:
          "The Aluminium Swingarm reduces the unsprung weight, making the bike easier to handle – giving you an added advantage!",
      },
      {
        subHeading: "E20 Fuel Compatible",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/e-20-logo.webp",
        description:
          "The R15M is all about performance and eco-friendliness. It's compatible with E20 Fuel, which means it helps reduce emissions and cut down on pollution.",
      },
    ],
  },
  {
    bikeTitle: "Yamaha R15V4",
    heading: "Design",
    featureDetails: [
      {
        subHeading: "CLASS D BI-FUNCTIONAL HEADLIGHT UNIT",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/design01.webp",
        description:
          "The new headlight features a single bi-functional LED unit that emits both low and high beams. Plus, it's extra bright (Class-D) and super light with the sleek aerodynamic fairing (cowling) design.",
      },
      {
        subHeading: "LED POSITION LIGHTS",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/design02.webp",
        description:
          "Style your ride with these lights on the outer edges, making a bold visual statement and commanding presence.",
      },
      {
        subHeading: "AERODYNAMIC BODY DESIGN",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/design04.webp",
        description:
          "Experience improved airflow management that boosts top speed and helps with your stability at high speeds.",
      },
    ],
  },
  {
    bikeTitle: "Yamaha R15V4",
    heading: "Performance",
    featureDetails: [
      {
        subHeading: "155 cc LC4V SOHC FI Engine with VVA",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/performance01.webp",
        description:
          "Power up with the liquid-cooled single overhead camshaft fuel injected engine, delivering max horsepower of 13.5kW(18.4PS)/10000r/min and maximum torque of 14.2N.m (1.4kgf.m)/7500r/min. Plus, it's equipped with a Traction Control System and Quick Shifter* (up-shift). *Available as an accessory for Dark Knight & Metallic Red",
      },
      {
        subHeading: "Assist & Slipper Clutch",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/performance02.webp",
        description:
          "The A&S clutch lightens the clutch pull for low-stress shifting during deceleration, reducing rider fatigue. It also prevents excessive engine braking, improving chassis behavior. The A&S clutch ensures smooth, enjoyable downshifts.",
      },
      {
        subHeading: "Variable Valve Actuation (VVA)",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/performance03.webp",
        description:
          "This unique high-performance VVA system delivers torque even at low RPMs for easy use. It features two intake valve cams – one for low to mid-range RPMs and another for high RPMs. They switch at 7,400 RPM to maintain strong power and torque across the full rev range.",
      },
      {
        subHeading: "Traction Control System",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/performance05.webp",
        description:
          "Stay in control with this dedicated electronic system. It reduces the chances of wheelspin and offers a safer ride.",
      },
      {
        subHeading: "Quick Shifter",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/performance04.webp",
        description:
          "Shift gears without using clutch or throttle, enhancing your riding comfort with the Quick Shifter* (up-shift). *Available as an accessory for Dark Knight & Metallic Red.",
      },
    ],
  },
  {
    bikeTitle: "Yamaha R15V4",
    heading: "Comfort",
    featureDetails: [
      {
        subHeading: "Upside Down Front Forks",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/comfort01.webp",
        description:
          "The R15M elevates sporty handling on winding roads with an upside-down front suspension fork featuring 37 mm inner tubes. These forks enhance rigidity and stability during high-speed turns and intense braking. ",
      },
      {
        subHeading: "Dual Channel ABS",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/comfort02.webp",
        description:
          "The R15M offers great performance and more control with 282 mm front and 220 mm rear disc brakes plus ABS. Enjoy precise braking and limited wheel lockups at high speeds for a confident ride.",
      },
      {
        subHeading: "Super Wide 140 mm Radial Rear Tyre",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15m/comfort03.webp",
        description:
          "Experience better grip and shock absorption with the Super Wide 140 mm Radial Rear Tyre.",
      },
      {
        subHeading: "Side Stand Engine Cut-Off Switch",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15v4/features05.webp",
        description:
          "The in-built Side Stand Engine cut-off switch ensures you're always ready to ride, without any unexpected surprises along the way.",
      },
    ],
  },
  {
    bikeTitle: "Yamaha R15V4",
    heading: "Y-CONNECT APP",
    featureDetails: [
      {
        subHeading: "CALL, SMS, EMAIL ALERTS ",
        imageUrl: "../../../theme/v4/images/webp images/R series ALL/r15m/r15m arc images/y-connect/Battery.webp",
        description:
          "Stay connected with call, SMS, and email alerts on your instrument cluster screen, keeping you informed on the go. ",
      },
      {
        subHeading: "APP CONNECTIVITY STATUS",
        imageUrl: "../../../theme/v4/images/webp images/R series ALL/r15m/r15m arc images/y-connect/Connectivity.webp",
        description:
          "Keep tabs on whether your bike's hooked up to the Y-Connect app on your phone. ",
      },
      {
        subHeading: "PHONE BATTERY LEVEL STATUS ",
        imageUrl: "../../../theme/v4/images/webp images/R series ALL/r15m/r15m arc images/y-connect/Battery.webp",
        description:
          "Never be in the dark about your phone's battery – check it right on your bike. ",
      },
      {
        subHeading: "Fuel Consumption Tracker ",
        imageUrl: "../../../theme/v4/images/webp images/R series ALL/r15m/r15m arc images/y-connect/fuel.webp",
        description:
          "Keep an eye on how much fuel you're burning through each day and month.",
      },
      {
        subHeading: "Maintenance Recommendations",
        imageUrl: "../../../theme/v4/images/webp images/R series ALL/r15m/r15m arc images/y-connect/maintenance_.webp",
        description:
          "Get smart advice based on your bike's data, like when it's time to give your battery a check. ",
      },
      {
        subHeading: "Last Parking Location",
        imageUrl: "../../../theme/v4/images/webp images/R series ALL/r15m/r15m arc images/y-connect/lastparking.webp",
        description:
          "Find out where you left your ride last – it's like a built-in memory for your bike. But remember, if the machine has moved since it was parked, it won’t be tracked.",
      },
      {
        subHeading: "Malfunction Notification",
        imageUrl: "../../../theme/v4/images/webp images/R series ALL/r15m/r15m arc images/y-connect/malfunction.webp",
        description:
          "Get a heads-up if your bike's acting up, so you can sort it out quickly.",
      },
      {
        subHeading: "Revs Dashboard",
        imageUrl: "../../../theme/v4/images/webp images/R series ALL/r15m/r15m arc images/y-connect/revdashboard.webp",
        description:
          "See what's going on underneath with real-time stats like Engine RPM and Eco-friendly Riding Indicator.",
      },
      {
        subHeading: "Ranking",
        imageUrl: "../../../theme/v4/images/webp images/R series ALL/r15m/r15m arc images/y-connect/ranking.webp",
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
// function handleNavigation(event) {
//   if (event.key === "ArrowUp" || event.deltaY < 0) {
//       // Move to the previous section
//       moveSection(-1);
//   } else if (event.key === "ArrowDown" || event.deltaY > 0) {
//       // Move to the next section
//       moveSection(1);
//   }
// }

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
