const email = document.getElementById("form-email");
email.addEventListener("input", checkValid);
const formBtn = document.getElementById("form-btn");
formBtn.addEventListener("click", checkEmail);
let emailIsValid = true;
const emailErrorText = document.getElementById("email-error-text");

function checkEmail(event) {
  event.preventDefault();
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    email.value = "";
  } else {
    emailIsValid = false;
    email.classList.add("form-email-invalid");
    emailErrorText.style.display = "block";
  }
}

function checkValid() {
  if (!emailIsValid) {
    emailIsValid = true;
    email.classList.remove("form-email-invalid");
    emailErrorText.style.display = "none";
  }
}
