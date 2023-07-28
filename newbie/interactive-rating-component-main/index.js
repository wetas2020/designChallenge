// Get all the rate_buttons elements
const rateButtons = document.querySelectorAll('.rate_buttons');
const rating_card = document.getElementById('rating_card');
const submit_card = document.getElementById('submit_card');
const submitButton = document.getElementById('submit');
const score = document.getElementById('score');
// Initialize a variable to store the last selected button
let lastSelectedButton = null;
let ratingScore = null;

// Add event listeners to each rate_buttons element
rateButtons.forEach((button) => {
    button.addEventListener('click', function () {
        // Check if the clicked button is the same as the last selected button
        if (this === lastSelectedButton) {
            // If it's the same, remove the background color (set to default)
            // this.style.backgroundColor = 'transparent';
            this.classList.remove('selected');
            // Reset the lastSelectedButton variable
            lastSelectedButton = null;
        } else {
            // If it's a different button, set the background color and reset the previous button
            this.classList.add('selected'); // You can change this to any color you want
            if (lastSelectedButton) {
                lastSelectedButton.classList.remove('selected');
            }
            lastSelectedButton = this;
        }
        ratingScore = this.innerText;
    });
});

submitButton.addEventListener('click', function () {
    rating_card.style.display = 'none';
    submit_card.style.display = 'block';
    score.innerText = ratingScore;
});
