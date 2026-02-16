const form = document.querySelector(".form-box");
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page reload

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Simple email regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Remove old error messages
    removeErrors();

    let isValid = true;

    // Email Validation
    if (email === "") {
        showError(emailInput, "Email is required");
        isValid = false;
    } else if (!email.match(emailPattern)) {
        showError(emailInput, "Enter valid email");
        isValid = false;
    }

    // Password Validation
    if (password === "") {
        showError(passwordInput, "Password is required");
        isValid = false;
    } else if (password.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        isValid = false;
    }

    if (isValid) {
        alert("Account Created Successfully 🎉");
        form.reset();
    }
});

// Show error function
function showError(input, message) {
    const error = document.createElement("small");
    error.style.color = "red";
    error.style.marginTop = "5px";
    error.innerText = message;

    input.style.border = "1px solid red";
    input.parentElement.insertBefore(error, input.nextSibling);
}

// Remove old errors
function removeErrors() {
    const errors = document.querySelectorAll("small");
    errors.forEach(error => error.remove());

    emailInput.style.border = "1px solid #bfbfbf";
    passwordInput.style.border = "1px solid #bfbfbf";
}
