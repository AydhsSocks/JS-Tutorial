const outputDisplay = document.getElementById('output-value');
const historyDisplay = document.getElementById('history-value');
const numberButtons = document.getElementsByClassName('number');
const operatorButtons = document.getElementsByClassName('operator');
<<<<<<< HEAD
let CurrentOperator = '';
=======
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const equalsButton = document.getElementById('=');
>>>>>>> f9f275f4ba65497cbd2a50686dd6f90d6e448c2a

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

<<<<<<< HEAD
document.getElementById('clear').addEventListener('click', function () {
    value = '';
    history = '';
    outputDisplay.innerHTML = '';
    historyDisplay.innerText = '';
    CurrentOperator = '';
=======
clearButton.addEventListener('click', () => {
    outputDisplay.innerHTML = '';
    currentValue = '';
    previousValue = '';
    currentOperator = '';
    historyDisplay.innerHTML = '';
>>>>>>> f9f275f4ba65497cbd2a50686dd6f90d6e448c2a
});

backspaceButton.addEventListener('click', () => {
    currentValue = currentValue.slice(0, -1);
    outputDisplay.innerHTML = currentValue;
});

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
    currentValue = calculate(
        Number(previousValue),
        Number(currentValue),
        currentOperator
    );
    previousValue = '';
    outputDisplay.innerHTML = currentValue;
    historyDisplay.innerHTML = previousValue;
});

function calculator(num1, num2, operator) {
    if (operator == "+") { return num1 + num2 }
    if (operator == "-") { return num1 - num2 }
    if (operator == "×") { return num1 * num2 }
    if (operator == "÷") { return num1 / num2 }
}

for (let btn of operatorButtons) {
    btn.addEventListener('click', function () {
        if(history == ''){
            history = value;
            historyDisplay.innerHTML=history;
            value='';
            outputDisplay.innerHTML=value;
        }else{
            history = calculator(
                Number(history),
                Number(value),
                CurrentOperator
            );
            value = '';
            outputDisplay.innerHTML=value;
            historyDisplay.innerHTML=history;
        }
        CurrentOperator=btn.innerHTML;
    })
}

document.getElementById('=').addEventListener('click', function () {
    if (history != '' && value != '' && CurrentOperator != ''){
        value = calculator(
            Number(history),
            Number(value),
            CurrentOperator
        );
        history = '';
        outputDisplay.innerHTML=value;
        historyDisplay.innerHTML=history;
    }
})