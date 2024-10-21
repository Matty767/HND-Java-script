// Global variable to count the number of times the button is clicked 
let clickCount = 0;

// Array containing letters corresponding to numbers 1 to 26
const letters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Function to generate a random number and handle the display logic
function generateRandomNumber(clickCounter, lettersArray) {
    // Increment the click counter each time the button is clicked
    clickCounter++;

    // Generate a random number between 1 and 26
    let randomNumber = Math.floor(Math.random() * 26) + 1;

    // Display the updated click count in the "counter_output" span
    document.getElementById('counter_output').textContent = clickCounter;

    // Display the generated random number in the "rand_num" span
    document.getElementById('rand_num').textContent = randomNumber;

    // Test the random number and display the appropriate message
    if (randomNumber < 13) {
        document.getElementById('greater_less').textContent = `The number generated ${randomNumber} is less than 13`;
    } else if (randomNumber > 13 && randomNumber <= 26) {
        document.getElementById('greater_less').textContent = `The number generated ${randomNumber} is greater than 13`;
    } else {
        document.getElementById('greater_less').textContent = `The number generated ${randomNumber} is equal to 13`;
    }

    // Display the corresponding letter image using the random number
    displayLetter(randomNumber, lettersArray);

    // Return the updated click counter (parameter passing)
    return clickCounter;
}

// Function to display the corresponding letter image
function displayLetter(number, lettersArray) {
    // Get the letter corresponding to the random number
    let letter = lettersArray[number - 1]; // Access the letter corresponding to the random number

    // Create the image file path based on the letter
    let imagePath = `images/${letter}.png`; // Assuming images are named A.png, B.png, etc.

    // Find the image container element
    let imageContainer = document.getElementById('image');

    // Clear any previous content in the image container
    imageContainer.innerHTML = '';

    // Create a new image element
    let imgElement = document.createElement('img');
    imgElement.src = imagePath; // Set the image source to the correct file path
    imgElement.alt = letter;    // Set alt text for accessibility
    imgElement.width = 100;     // Optionally, set a width for the image (adjust as needed)

    // Append the image element to the container
    imageContainer.appendChild(imgElement);
}

// Add an event listener for when the "Generate" button is clicked
document.getElementById('genbtn').addEventListener('click', function () {
    // Update the click count using parameter passing
    clickCount = generateRandomNumber(clickCount, letters); // Pass the clickCount and letters array
});

// Add an event listener for when the "Reset" button is clicked
document.getElementById('reset').addEventListener('click', function () {
    // Reset the click counter back to zero
    clickCount = 0;

    // Clear the displayed values in all the output elements
    document.getElementById('counter_output').textContent = '';
    document.getElementById('rand_num').textContent = '';
    document.getElementById('greater_less').textContent = '';
    document.getElementById('image').textContent = ''; // Clear the image display
});
