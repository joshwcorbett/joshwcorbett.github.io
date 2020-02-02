
// Mobile Navigation
function openMobileNav() {
  var mobileNavList = document.querySelector(".mobile-nav__list");
  mobileNavList.classList.add("active");
}
function closeMobileNav() {
  var mobileNavList = document.querySelector(".mobile-nav__list");
  mobileNavList.classList.remove("active");
}

// Random colors
var colorsArray = [
  "#1089ff",
  "#00ffc4",
  "#52de97",
  "#f17362",
  "#5f6caf",
  "#05dfd7",
  "#ff2e63",
  "#ff9999",
  "#00e0ff"
]
var randomColor = colorsArray[Math.floor(Math.random()*colorsArray.length)];
var postBannerOverlay  = document.querySelector(".post__banner__overlay");

postBannerOverlay.style.backgroundColor = randomColor;


// Project Calculator

// Pricing Values
var projectPricingArray = [

]

var projectFormValues = [

]