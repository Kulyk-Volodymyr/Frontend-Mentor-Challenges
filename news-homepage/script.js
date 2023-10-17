const menuBtn = document.getElementById("menu-btn");
const menuBackground = document.getElementById("menu-background");
const menuIconOpen = document.getElementById("menu-icon-open");
const menuIconClose = document.getElementById("menu-icon-close");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  menuBackground.classList.toggle("menu-background-visible");
  menuIconOpen.classList.toggle("display-none");
  menuIconClose.classList.toggle("display-none");
  navbar.classList.toggle("display-block");
});
