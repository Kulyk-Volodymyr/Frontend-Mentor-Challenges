const menuBtn = document.getElementById("header-navbar-btn");
const burgerIcon = document.getElementById("burger-icon");
menuBtn.addEventListener("click", () => toggleMenu());
const navbar = document.getElementById("header-navbar");

const toggleMenu = () => {
  if (burgerIcon.getAttribute("src") === "./images/icon-hamburger.svg") {
    burgerIcon.src = "./images/icon-close.svg";
    navbar.className = "visible-item";
  } else {
    burgerIcon.src = "./images/icon-hamburger.svg";
    navbar.className = "invisible-item";
  }
};

const bannerHeader = document.querySelector("#banner .transitionDown");
bannerHeader.classList.add("transitionUp");

const about = document.getElementById("about");
const aboutImg = document.querySelector("#about img");
const aboutInfo = document.querySelector("#about div");
const cardsContainer = document.getElementById("cards");
const cards = document.querySelectorAll(".card");
console.log(cards[2].classList);

window.addEventListener("scroll", onScrollTransition);
function onScrollTransition() {
  console.log(window.innerHeight);
  console.log(about.getBoundingClientRect().top);
  if (about.getBoundingClientRect().top < window.innerHeight - 200) {
    aboutImg.classList.add("transitionUp");
    setTimeout(function () {
      aboutInfo.classList.add("transitionUp");
    }, 200);
  }
  if (cardsContainer.getBoundingClientRect().top < window.innerHeight - 200) {
    for (let i = 0; i < cards.length; i++) {
      setTimeout(function () {
        cards[i].classList.add("transitionUp");
      }, i * 100);
    }
  }
}
