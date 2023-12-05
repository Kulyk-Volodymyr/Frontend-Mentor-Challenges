const menuBtn = document.getElementById("navbar-btn");
const burgerIcon = document.getElementById("burger-icon");
menuBtn.addEventListener("click", () => toggleMenu());
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const navbar = document.getElementById("navbar");

const toggleMenu = () => {
  if (burgerIcon.getAttribute("src") === "./images/icon-hamburger.svg") {
    burgerIcon.src = "./images/icon-close.svg";
    header.className = "header-bg-white";
    logo.className = "invisible-item";
    navbar.className = "visible-item";
  } else {
    burgerIcon.src = "./images/icon-hamburger.svg";
    header.className = "header-bg-transparent";
    logo.className = "visible-item";
    navbar.className = "invisible-item";
  }
};

const headers = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials"
];
const paragraphs = [
  "We provide unmatched quality, comfort, and style for property \
  owners across the country. Our experts combine form and function \
  in bringing your vision to life. Create a room in your own style \
  with our collection and make your property a reflection of you and \
  what you love.",
  "With stores all over the world, it's easy for you to find \
  furniture for your home or place of business. Locally, we’re in \
  most major cities throughout the country. Find the branch nearest \
  you using our store locator. Any questions? Don't hesitate to \
  contact us today.",
  "Our modern furniture store provide a high level of quality. Our \
  company has invested in advanced technology to ensure that every \
  product is made as perfect and as consistent as possible. With \
  three decades of experience in this industry, we understand what \
  customers want for their home and office."
];
let indicator = 0;

const mainHeader = document.getElementById("info-header");
const paragraph = document.getElementById("info-paragraph");
const imgDesctop = document.getElementById("img-desctop");
const imgMobile = document.getElementById("img-mobile");

const changeInfo = () => {
  mainHeader.innerText = headers[indicator];
  paragraph.innerText = paragraphs[indicator];
  imgDesctop.src = `./images/desktop-image-hero-${indicator + 1}.jpg`;
  imgMobile.srcset = `./images/mobile-image-hero-${indicator + 1}.jpg`;
}

const preveouslyItems = () => {
  indicator === 0 ? indicator = 2 : indicator--;
  changeInfo();
}

const nextItems = () => {
  indicator === 2 ? indicator = 0 : indicator++;
  changeInfo();
}
