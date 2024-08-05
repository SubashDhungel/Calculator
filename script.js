let resul = '';
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn-container button");
screen.disabled = true; 
buttons.forEach(button => button.disabled = true); // Disable all buttons initially

// Function to toggle the calculator on and off
function onOff() {
    if (screen.disabled) {
        // Turn on the calculator
        screen.placeholder = 0; // Set placeholder
        screen.disabled = false;
        buttons.forEach(button => button.disabled = false); // Enable all buttons
    } else {
        // Turn off the calculator
        screen.value = ""; // Clear the screen display
        screen.placeholder = ""; // Remove placeholder text
        screen.disabled = true;
        buttons.forEach(button => button.disabled = true); // Disable all buttons
    }
}

function expression(get) {
    if (get === '\u221A') {
        resul += 'Math.sqrt('; // Add square root function to the resul
        document.getElementById("screen").value += '√('; // Display square root symbol in the screen
    } else if (get === '\u00B2') {
        resul += '**2'; // Add square operation to the resul
        document.getElementById("screen").value += '²'; // Display square symbol in the screen
    } else {
        // Handle other button presses
        resul += get; // Add button value to the resul 
        document.getElementById("screen").value += get; // Display button value in the screen
    }
}

// Function to evaluate the expression and display the result
function result() {
    try {
        // Evaluate the result of the expression
        const evaluated = eval(resul); // Compute the result using eval
        document.getElementById("screen").value = evaluated; // Display the result on the screen
    } catch (error) {
        // Handle any errors during evaluation
        document.getElementById("screen").value = "Error"; // Display error message on the screen
        resul = ''; // Clear the result string
    }
}

// Function to clear the display and reset the result string
function clearAll() {
    document.getElementById("screen").value = ''; 
    resul = ''; 
}

// Function to delete the last character from the display and result string
function delOne() {
    let del = document.getElementById("screen").value;
    del = del.slice(0, -1); // Remove the last character from screen
    document.getElementById("screen").value = del; 
    resul = resul.slice(0, -1); // Remove the last character from the result
}
