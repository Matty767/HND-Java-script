document.addEventListener('DOMContentLoaded', function () {
    // Get form elements and error messages
    const emailField = document.getElementById('email');
    const usernameField = document.getElementById('username');
    const emailError = document.getElementById('emailerror');
    const unameError = document.getElementById('unameerror');
    const form = document.querySelector('form');
    const resetButton = document.getElementById('btn');

    // Function to handle form submission
    function handleSubmit(event) {
        // Prevent the form from submitting by default
        event.preventDefault();
        
        // Retrieve trimmed input values from form fields
        const email = emailField.value.trim();
        const username = usernameField.value.trim();

        // Clear any previous error messages
        emailError.textContent = '';
        unameError.textContent = '';

        // Set a flag to determine if the form is valid
        let formValid = true;

        // Regular expression for validating email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Regular expression for validating username format (only letters and numbers)
        const usernamePattern = /^[a-zA-Z0-9]+$/;

        // Validate if the email is empty or incorrectly formatted
        if (email === '') {
            emailError.textContent = 'Email cannot be empty.';
            emailError.style.color = 'red';
            formValid = false; // Set form as invalid if email is empty
        } else if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.color = 'red';
            formValid = false; // Set form as invalid if email is incorrect
        }

        // Validate if the username is empty or contains invalid characters
        if (username === '') {
            unameError.textContent = 'Username cannot be empty.';
            unameError.style.color = 'red';
            formValid = false; // Set form as invalid if username is empty
        } else if (!usernamePattern.test(username)) {
            unameError.textContent = 'Username can only contain letters and numbers.';
            unameError.style.color = 'red';
            formValid = false; // Set form as invalid if username contains invalid characters
        }

        // If the form is valid, redirect to the subbed.html page
        if (formValid) {
            console.log('Form is valid, redirecting to subbed.html...');
            // Redirect to the subbed.html page
            window.location.href = 'subbed.html';
        } else {
            console.log('Form is invalid. Please correct the errors.');
        }
    }

    // Function to handle resetting the form fields and error messages
    function handleReset(event) {
        // Prevent the default reset behaviour
        event.preventDefault();

        // Clear the values of all input fields
        emailField.value = '';
        usernameField.value = '';

        // Clear any displayed error messages
        emailError.textContent = '';
        unameError.textContent = '';

        console.log('Form reset complete.');
    }

    // Attach event listener to the form submission
    form.addEventListener('submit', handleSubmit);

    // Attach event listener to the reset button
    resetButton.addEventListener('click', handleReset);
});
