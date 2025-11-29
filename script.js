// Get references to all form elements
const form = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const emailSuccess = document.getElementById("emailSuccess");
const passwordError = document.getElementById("passwordError");
const passwordSuccess = document.getElementById("passwordSuccess");
const submitBtn = document.getElementById("submitBtn");

// Variables to track validation status
let isEmailValid = false;
let isPasswordValid = false;

// Email validation function - onChange event
emailInput.addEventListener("input", function () {
  const emailValue = emailInput.value;

  // Only show messages if user has started typing
  if (emailValue.length > 0) {
    // Check if email has more than 3 characters and contains @ and .
    if (
      emailValue.length > 3 &&
      emailValue.includes("@") &&
      emailValue.includes(".")
    ) {
      // Email is valid
      isEmailValid = true;
      emailError.style.display = "none";
      emailSuccess.style.display = "block";
    } else {
      // Email is invalid
      isEmailValid = false;
      emailError.style.display = "block";
      emailSuccess.style.display = "none";
    }
  } else {
    // If input is empty, hide all messages
    emailError.style.display = "none";
    emailSuccess.style.display = "none";
    isEmailValid = false;
  }
});

// Password validation function - onChange event
passwordInput.addEventListener("input", function () {
  const passwordValue = passwordInput.value;

  // Only show messages if user has started typing
  if (passwordValue.length > 0) {
    // Check if password has more than 8 characters
    if (passwordValue.length > 8) {
      // Password is valid
      isPasswordValid = true;
      passwordError.style.display = "none";
      passwordSuccess.style.display = "block";
    } else {
      // Password is invalid
      isPasswordValid = false;
      passwordError.style.display = "block";
      passwordSuccess.style.display = "none";
    }
  } else {
    // If input is empty, hide all messages
    passwordError.style.display = "none";
    passwordSuccess.style.display = "none";
    isPasswordValid = false;
  }
});

// Form submit handler - onClick event
form.addEventListener("submit", function (event) {
  // Prevent default form submission
  event.preventDefault();

  // Show confirmation window
  const userConfirmed = confirm("Are you sure you want to submit?");

  // If user clicks OK
  if (userConfirmed) {
    // Show success alert
    alert("Successful signup!");

    // Clear all input values
    emailInput.value = "";
    passwordInput.value = "";

    // Hide all messages
    emailError.style.display = "none";
    emailSuccess.style.display = "none";
    passwordError.style.display = "none";
    passwordSuccess.style.display = "none";

    // Reset validation flags
    isEmailValid = false;
    isPasswordValid = false;
  } else {
    // User clicked Cancel - clear all input values
    emailInput.value = "";
    passwordInput.value = "";

    // Hide all messages
    emailError.style.display = "none";
    emailSuccess.style.display = "none";
    passwordError.style.display = "none";
    passwordSuccess.style.display = "none";

    // Reset validation flags
    isEmailValid = false;
    isPasswordValid = false;
  }
});
