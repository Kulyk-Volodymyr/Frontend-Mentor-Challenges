const burgerBtn = document.getElementById("burger-button");
const navbar = document.getElementById("navbar-items");
const navbarLinks = document.getElementById("navbar-links");
const navbarButtons = document.getElementById("navbar-buttons");
const detailsNavs = document.getElementsByTagName("details");
let mobileNavIsOpen = false;

function burgerClick() {
  burgerBtn.classList.toggle("burger-toggle");
  navbar.classList.toggle("navbar-transition");
  navbarLinks.classList.toggle("navbar-move");
  navbarButtons.classList.toggle("navbar-move");
  mobileNavIsOpen ? (mobileNavIsOpen = false) : (mobileNavIsOpen = true);
}

window.onclick = function (event) {
  if (!event.target.matches("summary") && !event.target.matches("summary *")) {
    if (
      event.target.matches("#burger-button") ||
      event.target.matches("#burger-button *")
    ) {
      burgerClick();
    } else {
      [...detailsNavs].forEach((i) => {
        if (i.open === true) i.open = false;
      });
      if (mobileNavIsOpen) burgerClick();
    }
  }
};
