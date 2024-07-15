let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value !== '' && !isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

function appendDot() {
    if (display.value === '' || isNaN(display.value.slice(-1))) {
        display.value += '0.';
    } else if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value.includes('/0')) {
            throw new Error("Cannot divide by zero");
        }
        display.value = eval(display.value);
    } catch (error) {
        display.value = error.message;
    }
}
