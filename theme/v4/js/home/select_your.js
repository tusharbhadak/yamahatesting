// select section tab start

function openTab(tabName, clickedBtn) {
  // Hide all tabs

  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  // Show the selected tab
  document.getElementById(tabName).classList.add("active");
  // Deactivate all tab buttons
  var tabButtons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  // Activate the selected tab button
  clickedBtn.classList.add("active");

  const subTabId = document.querySelector(`#${tabName} .sub-tab-button.active`).getAttribute("id");
  const subTabHtmlFile = `/templates/v4/home/carousel_${subTabId}.html`; // Example file path
  addSubTab(`${subTabId}_select`, subTabHtmlFile);
}

function openSubTab(subTabId, clickedBtn) {
  console.log(clickedBtn)
  const tab = clickedBtn.closest('.tab');
  const subTabButtons = tab.querySelectorAll(".sub-tab-button");
  const subTabContainers = tab.querySelectorAll('.sub-tab-container');
  const subTabDots = tab.querySelectorAll(".sub-tab-dot");

  subTabContainers.forEach(container => container.style.display = 'none');
  subTabButtons.forEach(button => button.classList.remove('active'));
  subTabDots.forEach(dot => dot.classList.remove("active"));

  clickedBtn.classList.add("active");

  const subTabContainer = document.getElementById(`${tab.id}_${subTabId}_select`);
  if (subTabContainer) {
    subTabContainer.style.display = 'block';
  }
  tab.querySelector(`#${subTabId}`).classList.add("active");

  const tabName = tab.id;
  const subTabHtmlFile = `/templates/v4/home/carousel_${tabName}_${subTabId}.html`; // file path
  addSubTab(`${tabName}_${subTabId}_select`, subTabHtmlFile);
}

function openSubTabs(subTabId, clickedDot) {
  const tab = clickedDot.closest('.tab');
  const subTabButtons = tab.querySelectorAll(".sub-tab-button");
  const subTabContainers = tab.querySelectorAll('.sub-tab-container');
  const subTabDots = tab.querySelectorAll(".sub-tab-dot");

  subTabContainers.forEach(container => container.style.display = 'none');
  subTabButtons.forEach(button => button.classList.remove('active'));
  subTabDots.forEach(dot => dot.classList.remove("active"));

  const currentIndex = Array.from(subTabDots).findIndex(dot => dot === clickedDot);

  console.log("INDEX:", currentIndex)

  // Get the next dot and button elements
  const nextIndex = (currentIndex) % subTabDots.length;
  const nextDot = subTabDots[nextIndex];
  const nextButton = subTabButtons[nextIndex];

  // Add 'active' class to the next dot and button
  nextDot.classList.add("active");
  nextButton.classList.add("active");

  // clickedDot.classList.add("active");

  const subTabContainer = document.getElementById(`${tab.id}_${subTabId}_select`);
  if (subTabContainer) {
    subTabContainer.style.display = 'block';
  }
  tab.querySelector(`#${subTabId}`).classList.add("active");

  const tabName = tab.id;
  const subTabHtmlFile = `/templates/v4/home/carousel_${tabName}_${subTabId}.html`; // file path  templates/v4/home\carousel_motorcycle_fz_series.html
  addSubTabs(`${tabName}_${subTabId}_select`, subTabHtmlFile);
}

function addSubTab(id, subTabHtmlFile) {

  fetch(subTabHtmlFile)
    .then((response) => response.text())
    .then((html) => {
      // document.getElementById(id).innerHTML = html;
      const scripts = Array.from(
        new DOMParser().parseFromString(html, "text/html").querySelectorAll("script")
      );
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        if (script.src) {
          newScript.src = script.getAttribute("src");
          newScript.onerror = () =>
            console.error(`Error loading script with src ${script.src}`);
        } else {
          newScript.innerHTML = script.innerHTML;
        }
        document.body.appendChild(newScript);
      });
    })
    .catch((error) => console.error("Error fetching sub-tab content:", error));
}

function addSubTabs(id, subTabHtmlFile) {
  fetch(subTabHtmlFile)
    .then((response) => response.text())
    .then((html) => {
      // document.getElementById(id).innerHTML = html;
      const scripts = Array.from(
        new DOMParser().parseFromString(html, "text/html").querySelectorAll("script")
      );
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        if (script.src) {
          newScript.src = script.getAttribute("src");
          newScript.onerror = () =>
            console.error(`Error loading script with src ${script.src}`);
        } else {
          newScript.innerHTML = script.innerHTML;
        }
        document.body.appendChild(newScript);
      });
    })
    .catch((error) => console.error("Error fetching sub-tab content:", error));
}


// document.addEventListener("DOMContentLoaded", function() {
openTab('motorcycle', document.querySelector('.tab-button'));
// });



$(document).ready(function () {


  // document.getElementById("motorcycle_mt_series_select").innerHTML = " ";
  // document.getElementById("motorcycle_fz_series_select").innerHTML = " ";


  $('.floatingButton').on('click',
    function (e) {
      e.preventDefault();
      $(this).toggleClass('open');
      if ($(this).children('.fa').hasClass('fa-plus')) {
        $(this).children('.fa').removeClass('fa-plus');
        $(this).children('.fa').addClass('fa-close');
      }
      else if ($(this).children('.fa').hasClass('fa-close')) {
        $(this).children('.fa').removeClass('fa-close');
        $(this).children('.fa').addClass('fa-plus');
      }
      $('.floatingMenu').stop().slideToggle();
      $('.floatingMenu').stop().animate({
        right: $(this).hasClass('open') ? '50px' : '-270px'
      }, 400);
    }
  );
  $(this).on('click', function (e) {

    var container = $(".floatingButton");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0) {
      if (container.hasClass('open')) {
        container.removeClass('open');
      }
      if (container.children('.fa').hasClass('fa-close')) {
        container.children('.fa').removeClass('fa-close');
        container.children('.fa').addClass('fa-plus');
      }
      // $('.floatingMenu').hide();
    }

    // if the target of the click isn't the container and a descendant of the menu
    if (!container.is(e.target) && ($('.floatingMenu').has(e.target).length > 0)) {
      $('.floatingButton').removeClass('open');
      // $('.floatingMenu').stop().slideToggle();
    }
  });
});


function changeText() {
  var buttonText = document.getElementById("buttonText");
  var bg = document.getElementById('bg-color')
  buttonText.innerHTML = buttonText.innerHTML === 'Click Now' ? "<img src='/theme/v4/images/icons/Group 2.png' />" : 'Click Now';
  bg.style.backgroundColor = buttonText.innerHTML === "Click Now" ? "#0001a0" : "white"
  buttonText.style.color = buttonText.innerHTML === "Click Now" ? "white" : "#0001a0"
  // button.classList.add("clicked");


}


$(document).ready(function () {
  $('.carousels-container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});