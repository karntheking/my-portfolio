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
