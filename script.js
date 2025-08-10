let display = document.getElementById("display");
let currentInput = "";

function appendValue(value) {
    if (value === '+/-') {
        if (currentInput) {
            currentInput = (parseFloat(currentInput) * -1).toString();
        }
    } else {
        currentInput += value;
    }
    display.textContent = currentInput || "0";
}

function clearDisplay() {
    currentInput = "";
    display.textContent = "0";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch {
        display.textContent = "Error";
    }
}
