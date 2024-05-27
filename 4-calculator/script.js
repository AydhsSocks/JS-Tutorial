const outputDisplay = document.getElementById('output-value');
const historyDisplay = document.getElementById('history-value');
const numberButtons = document.getElementsByClassName('number');
const operatorButtons = document.getElementsByClassName('operator');
let CurrentOperator = '';

let value = '';
let history = '';
let operator = '';

function appendNumber(number) {
    if (value == '0') {
        value = number;
    } else if (value.length <= 16) {
        value += number;
    }

    outputDisplay.innerHTML = value;
}

for (let btn of numberButtons) {
    btn.addEventListener('click', () => {
        appendNumber(btn.innerHTML);
    });
}

document.getElementById('clear').addEventListener('click', function () {
    value = '';
    history = '';
    outputDisplay.innerHTML = '';
    historyDisplay.innerText = '';
    CurrentOperator = '';
});

document.getElementById('backspace').addEventListener('click', function () {
    value = value.slice(0, -1);
    outputDisplay.innerHTML = value;
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