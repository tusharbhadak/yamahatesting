let currentActiveDot = null;
const ellipseContentMapping = [
  {
    bikeTitle: "MT15 V2",
    heading: "Features",
    featureDetails: [
      {
        subHeading: "Bi functional Class D LED Headlight with LED Flashers*",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/features/bi_functional_class_d.webp",
        description:
          "Illuminate the darkest streets, thanks to the bi-functional LED headlight. Its compact design integrates high and low beams, providing you with enhanced night vision.",
      },
      {
        subHeading: "*LED Flashers are not in Metallic Black & Dark Matte Blue models.",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/features/multi_function_lcd.webp",
        description:
          "Multi-function LCD Instrument Cluster Stay informed and ride smarter. Your multi-function LCD instrument cluster provides all the information you need for a seamless ride.",
      },
      {
        subHeading: "Deltabox Frame",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/features/deltabox_frame.webp",
        description:
          "Experience unmatched rigidity and balance. Our Deltabox frame ensures superior handling and stability on any terrain.",
      },
      {
        subHeading: "E20 Fuel Compatible",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/features/e20.webp",
        description:
          "Reduce emissions and ride greener with E20 Fuel compatibility, reflecting our commitment to a cleaner, more sustainable future.",
      },
    ],
  },
  {
    bikeTitle: "MT15 V2",
    heading: "Design",
    featureDetails: [
      {
        subHeading: "Uni-Level Seat With Grab Bar",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/Design/uni_level_seat.webp",
        description:
          "Get comfy and ride upright. The Uni-Level seat and easy-to-hold grab-bar ensure comfort for you and your pillion.",
      },
      {
        subHeading: "Raised LED Tail Light with LED Flashers*",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/Design/raised_led_tail_light.webp",
        description:
          "Stand out on the road with the raised LED Tail Light. Its sleek design demands attention wherever you ride.",
      },
    ],
  },
  {
    bikeTitle: "MT15 V2",
    heading: "Performance",
    featureDetails: [
      {
        subHeading: "Traction Control System",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/performance/traction_control.webp",
        description:
          "Stay in control with this dedicated electronic system. It reduces the chances of wheelspin and offers a stable ride.",
      },
      {
        subHeading: "155cc LC 4V FI Engine",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/performance/155cc_lc_4v_fi_engine.webp",
        description:
          "At the core of the MT-15 V2 is a beastly 155cc liquid-cooled 4-valve engine, delivering ample power and torque whenever you need it.",
      },
      {
        subHeading: "Upside Down Front Forks",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/performance/upside_down_front_forks.webp",
        description:
          "The MT-15 V2 elevates sporty handling on winding roads with an upside-down front suspension fork featuring 37 mm inner tubes. These forks enhance rigidity and stability during high-speed turns and intense braking.",
      },
      {
        subHeading: "Aluminium Swingarm",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/performance/aluminium_swingarm.webp",
        description:
          "The Aluminium Swingarm reduces the unsprung weight, making the bike easier to handle – giving you an added advantage!",
      },
      {
        subHeading: "Variable Valve Actuation",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/performance/variable_valves_actuation_vva_.webp",
        description:
          "This unique high-performance VVA system delivers torque even at low RPMs for easy use. It features two intake valve cams – one for low to mid-range RPMs and another for high RPMs. These switch at 7,400 RPM to maintain strong power and torque across the full rev range.",
      },
      {
        subHeading: "Assist & Slipper Clutch",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/performance/assist_slipper_clutch.webp",
        description:
          "The A&S clutch lightens the clutch pull for low-stress shifting during deceleration, reducing rider fatigue. It also prevents excessive engine braking, improving chassis behaviour. The A&S clutch ensures smooth, enjoyable downshifts.",
      },
    ],
  },
  {
    bikeTitle: "MT15 V2",
    heading: "Comfort",
    featureDetails: [
      {
        subHeading: "Dual Channel ABS with 282 mm (Front) / 220 mm (Rear) Disk Brake",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/Comfort/dual_channel_abs.webp",
        description:
          "Stay in control with the Front & Rear Disc brakes equipped with Bosch Anti-Lock Braking System (ABS). These ensure controlled braking, even in slippery conditions, for a confident and exhilarating ride.",
      },
      {
        subHeading: "140mm Super Wide Radial Rear Tyre",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/Comfort/super_wide_tire.webp",
        description:
          "Conquer high speeds with confidence. The 140mm radial rear tyre offers superior grip and shock absorption, ensuring a comfortable and thrilling ride every time.",
      },
    ],
  },
  {
    bikeTitle: "MT15 V2",
    heading: "Y-CONNECT APP",
    featureDetails: [
      {
        subHeading: "CALL, SMS, EMAIL ALERTS ",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/yconnect/call_sms_email (1).webp",
        description:
          "Stay connected with call, SMS, and email alerts on your instrument cluster screen, keeping you informed on the go. ",
      },
      {
        subHeading: "APP CONNECTIVITY STATUS",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/yconnect/call_sms_email (1).webp",
        description:
          "Keep tabs on whether your bike's hooked up to the Y-Connect app on your phone. ",
      },
      {
        subHeading: "PHONE BATTERY LEVEL STATUS ",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/yconnect/call_sms_email (1).webp",
        description:
          "Never be in the dark about your phone's battery – check it right on your bike. ",
      },
      {
        subHeading: "Fuel Consumption Tracker ",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/yconnect/fuel.webp",
        description:
          "Keep an eye on how much fuel you're burning through each day and month.",
      },
      {
        subHeading: "Maintenance Recommendations",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/yconnect/maintenance_.webp",
        description:
          "Get smart advice based on your bike's data, like when it's time to give your battery a check. ",
      },
      {
        subHeading: "Last Parking Location",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/yconnect/lastparking.webp",
        description:
          "Find out where you left your ride last – it's like a built-in memory for your bike. But remember, if the machine has moved since it was parked, it won’t be tracked.",
      },
      {
        subHeading: "Malfunction Notification",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/yconnect/malfunction.webp",
        description:
          "Get a heads-up if your bike's acting up, so you can sort it out quickly.",
      },
      {
        subHeading: "Revs Dashboard",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/yconnect/revdashboard.webp",
        description:
          "See what's going on underneath with real-time stats like Engine RPM and Eco-friendly Riding Indicator.",
      },
      {
        subHeading: "Ranking",
        imageUrl: "/theme/v4/images/webp images/MT Series/mt15v2/MT15V2 arc images/yconnect/ranking.webp",
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
