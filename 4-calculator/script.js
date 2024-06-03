const outputDisplay = document.getElementById('output-value');
const historyDisplay = document.getElementById('history-value');
const numberButtons = document.getElementsByClassName('number');
const operatorButtons = document.getElementsByClassName('operator');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const equalsButton = document.getElementById('=');

let currentValue = '';
let previousValue = '';
let currentOperator = '';

function appendNumber(number) {
    if (currentValue === '0') {
        currentValue = number;
    } else if (currentValue.length <= 16) {
        currentValue += number;
    }
    outputDisplay.innerHTML = currentValue;
}

for (let btn of numberButtons) {
    btn.addEventListener('click', () => {
        appendNumber(btn.innerHTML);
    });
}

clearButton.addEventListener('click', () => {
    outputDisplay.innerHTML = '';
    currentValue = '';
    previousValue = '';
    currentOperator = '';
    historyDisplay.innerHTML = '';
});

<<<<<<< HEAD
backspaceButton.addEventListener('click', () => {
=======
backspaceButton.addEventListener('click', function () {
>>>>>>> main
    currentValue = currentValue.slice(0, -1);
    outputDisplay.innerHTML = currentValue;
});

<<<<<<< HEAD
function calculate(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (op) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '×':
            return (num1 * num2).toString();
        case '÷':
            if (num2 === 0) return 'Error'; // Handle division by zero
            return (num1 / num2).toString();
        case '%':
            return (num1 % num2).toString();
        default:
            return 'Error';
    }
}

function handleOperatorClick(op) {
    if (currentValue === '') return;
    if (previousValue === '') {
        previousValue = currentValue;
    } else {
        previousValue = calculate(previousValue, currentValue, currentOperator);
    }
    currentValue = '';
    currentOperator = op;
    outputDisplay.innerHTML = '';
    historyDisplay.innerHTML = previousValue;
}

for (let btn of operatorButtons) {
    btn.addEventListener('click', () => {
        handleOperatorClick(btn.innerHTML);
    });
}

equalsButton.addEventListener('click', () => {
    if (previousValue === '' || currentValue === '') return;
    currentValue = calculate(previousValue, currentValue, currentOperator);
    previousValue = '';
    currentOperator = '';
    outputDisplay.innerHTML = currentValue;
    historyDisplay.innerHTML = '';
=======
function calculate(number1, number2, operator) {
    if (operator == '+') {
        return number1 + number2;
    }
    if (operator == '-') {
        return number1 - number2;
    }
    if (operator == '×') {
        return number1 * number2;
    }
    if (operator == '÷') {
        return number1 / number2;
    }
}

for (let btn of operatorButtons) {
    btn.addEventListener('click', function () {
        previousValue = currentValue;
        currentValue = '0';
        outputDisplay.innerHTML = currentValue;
        historyDisplay.innerHTML = previousValue;
        currentOperator = btn.innerHTML;
    });
}

document.getElementById('=').addEventListener('click', function () {
    currentValue = calculate(Number(previousValue), Number(currentValue), currentOperator);
    previousValue = '';
    outputDisplay.innerHTML = currentValue;
    historyDisplay.innerHTML = previousValue;
>>>>>>> main
});
