let currentActiveDot = null;
const ellipseContentMapping = [
  {
    bikeTitle: "Yamaha R15S",
    heading: "Features",
    featureDetails: [
      {
        subHeading: "Unibody Seat",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/Unibody-Seat.webp",
        description:
          "Unibody Seat offers you a singular, flowing design for ultimate comfort, whether you're riding solo or with a pillion.",
      },
      {
        subHeading: "Deltabox Frame",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/features01.webp",
        description:
          "Engineered for superb rigidity balance, the Deltabox Frame gives you unmatched control and confident handling on curves.",
      },
      {
        subHeading: "Aluminium Swingarm",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/features02.webp",
        description:
          "The aluminum swingarm reduces unsprung weight, making the bike easier to handle. ",
      },
      {
        subHeading: "Negative LCD Instrument Cluster",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/features03.webp",
        description:
          "Get all the information you need at a glance on the Negative LCD Instrument Cluster panel, designed for easy reading in any condition.",
      },
      {
        subHeading: "Dual Horn",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/features04.webp",
        description:
          "Let the city hear you roar! The new split horns deliver higher decibels and lower decibels (Dual Tone), ensuring you sound like a true racer wherever you go.",
      },
      {
        subHeading: "E20 Fuel Compatible",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/e-20-logo.webp",
        description:
          "Reduce emissions and cut pollution with our E20 Fuel Compatibility. It's our commitment to a greener, more sustainable future for riders like You. ",
      },
    ],
  },
  {
    bikeTitle: "Yamaha R15S",
    heading: "Design",
    featureDetails: [
      {
        subHeading: "Aerodynamic LED Tail and Headlight",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/design01.webp",
        description:
          "Sleek and efficient, our Aerodynamic LED Tail and Headlight design ensures you're always visible, day or night, while adding a touch of style to your ride.",
      },
    ],
  },
  {
    bikeTitle: "Yamaha R15S",
    heading: "Performance",
    featureDetails: [
      {
        subHeading: "155cc LC4V SOHC FI Engine",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/performance01.webp",
        description:
          "The liquid-cooled single overhead camshaft fuel injection engine delivers up to 13.5 kW (18.4 PS) at 10,000 rpm and maximum torque of 14.2 N.m (1.4 kgf.m) at 7,500 rpm. It features a die-cast aluminum (DiASil) cylinder for excellent cooling performance.",
      },
      {
        subHeading: "Variable Valves Actuation (VVA)",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/performance02.webp",
        description:
          "This unique high-performance VVA system delivers torque even at low RPMs for easy use. It features two intake valve cams – one for low to mid-range RPMs and another for high RPMs. They switch at 7,400 RPM to maintain strong power and torque across the full rev range.",
      },
      {
        subHeading: "6 Speed Transmission",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/performance03.webp",
        description:
          "Shift gears with ease and efficiency. The R15S with 6-speed transmission lets you cruise at low RPM even in higher gears, saving fuel without sacrificing the thrill of the ride.",
      },
      {
        subHeading: "Assist & Slipper Clutch",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/performance04.webp",
        description:
          "The A&S clutch lightens the clutch pull for low-stress shifting during deceleration, reducing rider fatigue. It also prevents excessive engine braking, improving chassis behavior. The A&S clutch ensures smooth, enjoyable downshifts.",
      },
    ],
  },
  {
    bikeTitle: "Yamaha R15S",
    heading: "Comfort",
    featureDetails: [
      {
        subHeading: "Dual Channel ABS",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/performance05.webp",
        description:
          "The R15S offers great performance and more control with 282 mm front and 220 mm rear disc brakes plus ABS. Enjoy precise braking and limited wheel lockups at high speeds for a confident ride.",
      },
      {
        subHeading: "140mm Super Wide Radial Rear Tyre",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/safety02.webp",
        description:
          "Experience better grip and shock absorption with the Super Wide 140 mm Radial Rear Tyre.",
      },
      {
        subHeading: "In-Built Side Stand Engine Cut-off Switch",
        imageUrl: "/theme/v4/images/webp images/R series ALL/r15s/safety01.webp",
        description:
          "The in-built Side Stand Engine cut-off switch ensures you're always ready to ride, without any unexpected surprises along the way.",
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
  ];
  var quantity = 2; // Number of dots
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
