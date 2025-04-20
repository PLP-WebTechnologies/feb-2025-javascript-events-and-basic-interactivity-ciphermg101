
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const successMessage = document.getElementById('successMessage');

// Event Listener for real-time input validation
nameInput.addEventListener('input', () => {
    nameError.textContent = nameInput.value.trim() === "" ? "Name is required." : "";
});

emailInput.addEventListener('input', () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.textContent = !emailPattern.test(emailInput.value) ? "Enter a valid email." : "";
});

// Event Listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    let valid = true;

    // Validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email.";
        valid = false;
    }

    if (valid) {
        successMessage.textContent = `✅ Thank you, ${nameInput.value.trim()}! We'll contact you soon.`;
        form.reset();
        nameError.textContent = "";
        emailError.textContent = "";
    }
});