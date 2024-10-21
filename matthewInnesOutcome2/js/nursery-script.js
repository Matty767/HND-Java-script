// Add event listener for when the user selects an option from the dropdown menu
document.getElementById('menuselect').addEventListener('change', function () {
    // Get the selected value from the dropdown menu and format it to uppercase
    let selectedDay = document.getElementById('menuselect').value.toUpperCase();

    // Message output element where we will display the result
    let messageOutput = document.getElementById('msgout');

    // Clear any previous message
    messageOutput.textContent = '';

    // Check if the user has selected a day
    if (selectedDay) {
        // Create an array with tasks associated with each weekday, keys are formatted to uppercase
        let nurseryTasks = {
            'MONDAY': 'Play with blocks',
            'TUESDAY': 'Painting session',
            'WEDNESDAY': 'Outdoor games',
            'THURSDAY': 'Storytelling hour',
            'FRIDAY': 'Music and dancing'
        };

        // Use an IF statement to match the selected day with the corresponding message
        if (nurseryTasks[selectedDay]) {
            // Display the task associated with the selected day
            messageOutput.textContent = `On ${selectedDay.charAt(0) + selectedDay.slice(1).toLowerCase()}, the task is: ${nurseryTasks[selectedDay]}.`;
        } else {
            // If no matching day is found, show an error message
            messageOutput.textContent = 'Invalid selection, please choose a valid day.';
        }
    } else {
        // If no day is selected, prompt the user to choose a day
        messageOutput.textContent = 'Please select a day to see the task.';
    }
});

// Add event listener for the reset button
document.getElementById('rst').addEventListener('click', function () {
    // Clear the dropdown selection
    document.getElementById('menuselect').value = '';

    // Clear the message output
    document.getElementById('msgout').textContent = '';
});
