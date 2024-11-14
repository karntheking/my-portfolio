// grab buttons
const toggleButtons = document.querySelectorAll('.toggle-details');

// adding event listenres to buttons
toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        details.classList.toggle('hidden');
        
        // Toggle button text
        if (details.classList.contains('hidden')) {
            button.textContent = 'Show Details';
        } else {
            button.textContent = 'Hide Details';
        }
    });
});

// validation for contact form
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessages = document.querySelectorAll('.error-message');

form.addEventListener('submit', (event) => {
    let isValid = true;

    // Reset error messages
    errorMessages.forEach((error) => error.classList.add('hidden'));

    // Name Validation
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== '') {
            nameInput.nextElementSibling.classList.add('hidden');
        }
    });

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailInput.addEventListener('input', () => {
        if (emailRegex.test(emailInput.value.trim())) {
            emailInput.nextElementSibling.classList.add('hidden');
        }
    });

    // Message Validation
    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim() !== '') {
            messageInput.nextElementSibling.classList.add('hidden');
        }
    });

    // Prevent form submission if invalid
    if (!isValid) {
        event.preventDefault();
    }
});


