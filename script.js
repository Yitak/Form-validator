const form = document.getElementById('form');
const formGroup = [document.getElementById('name'),document.getElementById('phone'),document.getElementById('email'),document.getElementById('website'),document.getElementById('password1'),document.getElementById('password2')];
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

// Color constants
const green = 'rgb(79, 139, 79)';
const red = 'rgb(180, 51, 51)';

let isValid = false;
let passwordsMatch = false;

// Reset form
function resetForm() {
    form.reset();
}

function validateForm() {
    // Using contraint api
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = `${red}`;
        messageContainer.style.borderColor = `${red}`;
        return;
    }
    // Check to see if passwords match
    if (password1El.value === password2El.value && password1El.value && password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = `${green}`;
        password2El.style.borderColor = `${green}`;
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.'
        message.style.color = `${red}`;
        messageContainer.style.borderColor = `${red}`;
        password1El.style.borderColor = `${red}`;
        password2El.style.borderColor = `${red}`;
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Sucessfully Registered!';
        message.style.color = `${green}`;
        messageContainer.style.borderColor = `${green}`;
    }
}

// Store form data
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

// Process the data in the form submitted
function processFormData(e) {
    e.preventDefault();
    // Validate form
    validateForm();
    // Submit form if valid
    if (isValid && passwordsMatch) {
        storeFormData();
        resetForm();
    }
}

// Event listeners
form.addEventListener('submit', processFormData);

// On load reset form
resetForm();