// Registration Form Validation
function validateRegistrationForm() {
    let isValid = true;
  
    // Name Validation
    const name = document.getElementById('name').value;
    if (name === "") {
      document.getElementById('nameError').innerText = "Name is required.";
      isValid = false;
    } else {
      document.getElementById('nameError').innerText = "";
    }
  
    // Email Validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').innerText = "Invalid email format.";
      isValid = false;
    } else {
      document.getElementById('emailError').innerText = "";
    }
  
    // Password Validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
      document.getElementById('passwordError').innerText = "Password must be at least 8 characters.";
      isValid = false;
    } else {
      document.getElementById('passwordError').innerText = "";
    }
  
    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').innerText = "Passwords do not match.";
      isValid = false;
    } else {
      document.getElementById('confirmPasswordError').innerText = "";
    }
  
    // Age Validation
    const age = parseInt(document.getElementById('age').value, 10);
    if (isNaN(age) || age < 18 || age > 100) {
      document.getElementById('ageError').innerText = "Age must be between 18 and 100.";
      isValid = false;
    } else {
      document.getElementById('ageError').innerText = "";
    }
  
    // Gender Validation
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    if (!genderMale && !genderFemale) {
      document.getElementById('genderError').innerText = "Please select a gender.";
      isValid = false;
    } else {
      document.getElementById('genderError').innerText = "";
    }
  
    // Country Validation
    const country = document.getElementById('country').value;
    if (country === "") {
      document.getElementById('countryError').innerText = "Please select a country.";
      isValid = false;
    } else {
      document.getElementById('countryError').innerText = "";
    }
  
    // Terms and Conditions Validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
      document.getElementById('termsError').innerText = "You must agree to the terms.";
      isValid = false;
    } else {
      document.getElementById('termsError').innerText = "";
    }
  
    return isValid;
  }
  
  // Login Form Validation
  function validateLoginForm() {
    let isValid = true;
  
    // Email Validation
    const email = document.getElementById('loginEmail').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('loginEmailError').innerText = "Invalid email format.";
      isValid = false;
    } else {
      document.getElementById('loginEmailError').innerText = "";
    }
  
    // Password Validation
    const password = document.getElementById('loginPassword').value;
    if (password === "") {
      document.getElementById('loginPasswordError').innerText = "Password is required.";
      isValid = false;
    } else {
      document.getElementById('loginPasswordError').innerText = "";
    }
  
    return isValid;
  }