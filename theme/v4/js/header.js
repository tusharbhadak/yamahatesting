// JavaScript to toggle hamburger menu
const hamburgerMenu = document.querySelector("#hamburger_menu");
const mainNav = document.querySelector(".side-menu");
const closeIcon = document.querySelector(".close-icon");

hamburgerMenu.addEventListener("click", function () {
  mainNav.classList.toggle("open");
});
closeIcon.addEventListener("click", function () {
  mainNav.classList.toggle("open");
});
