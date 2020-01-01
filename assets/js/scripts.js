

function openMobileNav() {
  var mobileNavList = document.querySelector(".mobile-nav__list");
  mobileNavList.classList.add("active");
}

function closeMobileNav() {
  var mobileNavList = document.querySelector(".mobile-nav__list");
  mobileNavList.classList.remove("active");
}