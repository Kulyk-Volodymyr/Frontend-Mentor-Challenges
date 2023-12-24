const menuBtn = document.getElementById("header-navbar-btn");
const navbar = document.getElementById("header-navbar");
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("visible-navbar");
  menuBtn.classList.toggle("navbar-btn-light");
});
