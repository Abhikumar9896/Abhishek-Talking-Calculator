const display = document.getElementById('display');

// Function to append a digit, operator, or percentage to the display
function appendToDisplay(value) {
    display.value += value;
    speak(value); // Call the speak function
}

// Function to clear the last digit from the display
function clearLastDigit() {
    const removedDigit = display.value.slice(-1);
    display.value = display.value.slice(0, -1);
    speak(`Removed ${removedDigit}`);
}

// Function to clear the entire display
function clearDisplay() {
    display.value = '';
    speak('All clear');
}

// Function to calculate and display the result
function calculate() {
    try {
        let expression = display.value;
        const result = eval(expression);
        display.value = result;
        speak(result.toString()); // Call the speak function with the result
    } catch (error) {
        display.value = 'Error';
        speak('Error');
    }
}

// Function to speak a given text
function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speechSynthesis.speak(speech);
}
