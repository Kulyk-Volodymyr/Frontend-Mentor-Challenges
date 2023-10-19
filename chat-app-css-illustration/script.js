const bgLeft = document.getElementById("bg-item-1");
bgLeft.style.transform = "translateY(0%)";
bgLeft.style.transitionDuration = "0.4s";

const bgRight = document.getElementById("bg-item-2");
bgRight.style.transform = "translateY(0%)";
bgRight.style.transitionDuration = "0.4s";
bgRight.style.transitionDelay = "0.4s";

const phone = document.getElementById("phone");
phone.style.transform = "translateY(0%)";
phone.style.transitionDuration = "0.4s";
phone.style.transitionDelay = "0.8s";

const text = document.getElementById("text");
text.style.transform = "translateY(0%)";
text.style.transitionDuration = "0.4s";
text.style.transitionDelay = "1.2s";

const input = document.getElementById("input");
const inputBtn = document.getElementById("input-btn");

/* First message start */
let text1 = "Here are a few pictures. She’s a happy girl!";
const msg1 = document.getElementById("msg1");

setTimeout(() => {
  input.innerText = "";
  input.style.color = "var(--very-dark-desaturated-violet)";
}, 2500);

setTimeout(() => {
  for (let i = 0; i < text1.length; i++) {
    setTimeout(() => {
      input.textContent += `${text1[i]}`;
    }, (i + 1) * 40);
  }
}, 2800);

setTimeout(() => {
  inputBtn.style.backgroundColor = "var(--light-magenta)";
}, 5400);

setTimeout(() => {
  inputBtn.style.backgroundColor = "var(--very-dark-desaturated-violet)";
  input.innerText = "Type a message…";
  input.style.color = "var(--dark-grayish-violet)";
}, 5700);

setTimeout(() => {
  msg1.style.opacity = "1";
}, 6200);
/* First message end */

/* Second message start */
let text2 = "Can you make it?";
const msg2 = document.getElementById("msg2");

setTimeout(() => {
  input.innerText = "";
  input.style.color = "var(--very-dark-desaturated-violet)";
}, 6300);

setTimeout(() => {
  for (let i = 0; i < text2.length; i++) {
    setTimeout(() => {
      input.textContent += `${text2[i]}`;
    }, (i + 1) * 40);
  }
}, 6600);

setTimeout(() => {
  inputBtn.style.backgroundColor = "var(--light-magenta)";
}, 7800);

setTimeout(() => {
  inputBtn.style.backgroundColor = "var(--very-dark-desaturated-violet)";
  input.innerText = "Type a message…";
  input.style.color = "var(--dark-grayish-violet)";
}, 8100);

setTimeout(() => {
  msg2.style.opacity = "1";
}, 8600);
/* Second message end */

const msg3 = document.getElementById("msg3");
msg3.style.transitionDelay = "9.4s";
msg3.style.opacity = "1";

const msg4 = document.getElementById("msg4");
msg4.style.transitionDelay = "10.2s";
msg4.style.opacity = "1";

const msg5 = document.getElementById("msg5");
msg5.style.transitionDelay = "11s";
msg5.style.opacity = "1";
