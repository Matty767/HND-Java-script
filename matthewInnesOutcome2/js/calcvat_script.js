// Global variable
const vatRate = 0.22; // VAT rate is set to 22%

// Function to validate input and calculate VAT and total amount
function calculateVAT() {
    // Local variables
    let amountInput = document.getElementById('amount');
    let amount = parseFloat(amountInput.value); // Parse the input value to a float
    let amountError = document.getElementById('amountError');

    // Clear previous error message
    amountError.textContent = '';

    // Input validation: Check if the input is a number and greater than zero
    if (!isNaN(amount) && amount > 0) {
        // Arithmetic operations: Calculate VAT and total
        let vat = amount * vatRate;
        let total = amount + vat;

        // DOM Manipulation: Display the results in their respective fields
        document.getElementById('vat').value = vat.toFixed(2);  // Format VAT to two decimal places
        document.getElementById('total').value = total.toFixed(2);  // Format total to two decimal places
    } else {
        // Display error message within the DOM instead of an alert box
        amountError.textContent = 'Please enter a valid positive amount.'; // Display error below the input field
    }
}

// Function to reset the input fields
function resetFields() {
    // Clear the input fields for amount, VAT, and total
    document.getElementById('amount').value = '';
    document.getElementById('vat').value = '';
    document.getElementById('total').value = '';
    document.getElementById('amountError').textContent = ''; // Clear error message
}

// Event handling: Attach functions to button click events
document.getElementById('calcbtn').addEventListener('click', calculateVAT);
document.getElementById('reset').addEventListener('click', resetFields);
