const sections = document.getElementsByClassName("section");
const sectionsContents = document.querySelectorAll(".section > *");
sections[0].style.trans;

for (let i = 0; i < sections.length; i++) {
  setTimeout(() => {
    sections[i].style.transitionDuration = "1s";
    sections[i].style.opacity = "1";
    sections[i].style.transform = "scale(1)";
  }, (i + 1) * 80);
}

setTimeout(() => {
  for (let i = 0; i < sectionsContents.length; i++) {
    setTimeout(() => {
      sectionsContents[i].style.transitionDuration = "1s";
      sectionsContents[i].style.opacity = "1";
      sectionsContents[i].style.transform = "scale(1)";
    }, (i + 1) * 40);
  }
}, 320);
