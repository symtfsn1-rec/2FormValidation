
const contactForm = document.getElementById("contactForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const submitBtn = document.getElementById("submitBtn");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validationName = () => {
  const value = usernameInput.value.trim();
  if (value.length >= 3) {
    nameError.textContent = "";
    return true;
  } else {
    nameError.textContent = "Username must be at least 3 characters long.";
    return false;
  }
};

const validationEmail = () => {
  const value = emailInput.value.trim();
  if (emailPattern.test(value)) {
    emailError.textContent = "";
    return true;
  } else {
    emailError.textContent = "Please enter a valid email address.";
    return false;
  }
};

usernameInput.addEventListener("input", () => {
  validationName();
  toggleSubmitButton();
});
emailInput.addEventListener("input", () => {
  validationEmail();
  toggleSubmitButton();
});

const toggleSubmitButton = () => {
  const isNameValid = usernameInput.value.trim().length >= 3;
  const isEmailValid = emailPattern.test(emailInput.value.trim());
  submitBtn.disabled = !(isNameValid && isEmailValid);
};

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  submitBtn.textContent = "Submitting...";
  submitBtn.disabled = true;

  setTimeout(() => {
    contactForm.reset();
    contactForm.innerHTML = "<p>Form submitted successfully!</p>";
  }, 2000);
});