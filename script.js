let script = document.getElementsByTagName("body")[0];
let header = document.getElementsByTagName("header")[0];
let headerSecondLine = document.getElementsByClassName("titleSecondLine")[0];
let item = document.getElementsByClassName("item");
let imageShadow = document.getElementsByClassName("imageShadow");

script.onload = function () {
  setTimeout(() => {
    header.style.opacity = "1";
    header.style.transitionDuration = "0.8s";
  }, 50);

  setTimeout(() => {
    header.style.backgroundColor = "var(--bg-color)";
    header.classList.add("headerShadow");
    header.style.transitionDuration = "0.6s";
  }, 400);

  setTimeout(() => {
    headerSecondLine.style.backgroundColor = "var(--bg-color-light)";
    headerSecondLine.classList.add("titleSecondLineShadow");
    headerSecondLine.style.transitionDuration = "0.4s";
  }, 600);

  setTimeout(() => {
    for (i of item) {
      i.style.opacity = "1";
      i.style.transitionDuration = "0.8s";
    }
  }, 1000);

  setTimeout(() => {
    for (i of item) {
      i.style.backgroundColor = "var(--bg-color)";
      i.classList.add("itemShadow");
      i.style.transitionDuration = "0.6s";
    }
    for (i of imageShadow) {
      i.classList.add("imageShadowOnLoad");
      i.style.transitionDuration = "0.8s";
    }
  }, 1400);
};
