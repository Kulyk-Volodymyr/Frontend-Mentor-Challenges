/* HEADER */
const headerLogoText = document.querySelector(
  "#header-logo svg g:first-child path"
);
const headerLogoCircle = document.querySelector(
  "#header-logo svg g:last-child circle"
);
const headerLogoCircleSign = document.querySelector(
  "#header-logo svg g:last-child circle + path"
);
const menuBtn = document.getElementById("header-navbar-btn");
const navbar = document.getElementById("header-navbar");
const burgerIcon = document.getElementById("burger-icon");

function toggleNavbar() {
  navbar.classList.toggle("visible-navbar");
  if (burgerIcon.getAttribute("src") === "./images/icon-hamburger.svg") {
    burgerIcon.src = "./images/icon-close.svg";
    headerLogoText.setAttribute("fill", "#fff");
    headerLogoCircle.setAttribute("fill", "#fff");
    headerLogoCircleSign.setAttribute("fill", "hsla(229, 31%, 21%, 0.9)");
  } else {
    burgerIcon.src = "./images/icon-hamburger.svg";
    headerLogoText.setAttribute("fill", "#242A45");
    headerLogoCircle.setAttribute("fill", "#5267DF");
    headerLogoCircleSign.setAttribute("fill", "#fff");
  }
}

menuBtn.addEventListener("click", toggleNavbar);
navbar.addEventListener("click", toggleNavbar);

/* FEATURES TABS */
let currentTab = 0;
const tabs = document.querySelectorAll("#features-tabs-btns label");
const images = document.querySelectorAll("img[id^='features-tabs-img-']");
const texts = document.querySelectorAll("div[id^='features-tabs-text-']");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    images[currentTab].classList.add("img-is-hidden");
    images[i].classList.remove("img-is-hidden");
    texts[currentTab].classList.add("text-is-hidden");
    texts[i].classList.remove("text-is-hidden");
    currentTab = i;
  });
}

/* ON SCROOL ANIMATION */
const extensionCardsContainer = document.getElementById("extension-cards");
const extensionCards = document.querySelectorAll(".extension-card");
window.addEventListener("scroll", moveCards);

function moveCards() {
  if (
    extensionCardsContainer.getBoundingClientRect().top <
    window.innerHeight - 300
  ) {
    for (let i = 0; i < extensionCards.length; i++) {
      extensionCards[i].classList.add("extension-card-move");
    }
  }
  if (
    extensionCardsContainer.getBoundingClientRect().top >
    window.innerHeight - 100
  ) {
    for (let i = 0; i < extensionCards.length; i++) {
      extensionCards[i].classList.remove("extension-card-move");
    }
  }
}

/* CONTACT US FORM */
const email = document.getElementById("join-email");
email.addEventListener("input", checkValid);
const joinBtn = document.getElementById("join-btn");
joinBtn.addEventListener("click", checkEmail);
let emailIsValid = true;
const emailErrorText = document.getElementById("email-error-text");
const emailErrorImg = document.getElementById("email-error-img");

function checkEmail(event) {
  event.preventDefault();
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    email.value = "";
  } else {
    emailIsValid = false;
    email.classList.add("join-email-invalid");
    emailErrorText.style.display = "block";
    emailErrorImg.style.display = "block";
  }
}

function checkValid() {
  if (!emailIsValid) {
    emailIsValid = true;
    email.classList.remove("join-email-invalid");
    emailErrorText.style.display = "none";
    emailErrorImg.style.display = "none";
  }
}
