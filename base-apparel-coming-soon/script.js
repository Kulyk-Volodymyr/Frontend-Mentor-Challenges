const email = document.getElementById("email");
const submit = document.getElementById("submit");
const errorIcon = document.getElementById("error-icon");
const errorText = document.getElementById("eroor-info");
submit.addEventListener("click", (e) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    email.style.border = "1px solid var(--desaturated-red)";
    errorText.style.display = "none";
    errorIcon.style.display = "none";
  } else {
    e.preventDefault();
    email.style.border = "1px solid var(--soft--red)";
    errorText.style.display = "block";
    errorIcon.style.display = "block";
  }
});
