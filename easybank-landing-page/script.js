const header = document.getElementById("header");
const menuBtn = document.getElementById("header-navbar-btn");
const burgerIcon = document.getElementById("burger-icon");
menuBtn.addEventListener("click", () => toggleMenu());
const navbar = document.getElementById("header-navbar");

const toggleMenu = () => {
  if (burgerIcon.getAttribute("src") === "./images/icon-hamburger.svg") {
    burgerIcon.src = "./images/icon-close.svg";
    navbar.className = "visible-navbar";
    header.style.boxShadow =
      "0 0 50vh hsl(0, 0%, 0%), 0 0 50vh hsl(0, 0%, 0%), 0 0 50vh hsl(0, 0%, 0%)";
  } else {
    burgerIcon.src = "./images/icon-hamburger.svg";
    navbar.className = "invisible-navbar";
    header.style.boxShadow = "none";
  }
};
