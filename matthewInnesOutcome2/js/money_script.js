// Add event listener for the button click event
document.getElementById('currencybtn').addEventListener('click', function () {
    // Get the value entered by the user in the currency input field
    let currencyInput = parseFloat(document.getElementById('currency').value);
    let currencyError = document.getElementById('currencyError');

    // Elements where the output will be displayed
    let output50 = document.getElementById('output50');
    let output20 = document.getElementById('output20');
    let output10 = document.getElementById('output10');

    // Clear any previous output messages and error messages
    output50.textContent = '';
    output20.textContent = '';
    output10.textContent = '';
    currencyError.textContent = '';

    // Input validation: Check if the input is a valid number
    if (!isNaN(currencyInput) && currencyInput > 0) {
        // Convert the currency input to pence
        let totalPence = Math.floor(currencyInput * 100);

        // Calculate how many 50p, 20p, and 10p coins the total represents
        let num50 = Math.floor(totalPence / 50); // Calculate total 50p coins
        let num20 = Math.floor(totalPence / 20); // Calculate total 20p coins
        let num10 = Math.floor(totalPence / 10); // Calculate total 10p coins

        // Display the results to the user
        output50.textContent = `${num50} x 50p coins`;
        output20.textContent = `${num20} x 20p coins`;
        output10.textContent = `${num10} x 10p coins`;
    } else {
        // Display an error message if the input is not a valid number
        currencyError.textContent = 'Please enter a valid positive amount in pounds.';
    }
});
