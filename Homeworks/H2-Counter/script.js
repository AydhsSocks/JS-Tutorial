// Homework 2: Counter

// Requirements
// 1 + button should increase the counter by 1
// 2 - button should decrease the counter by 1
// 3 reset button should reset the counter to 0
// 4 counter should start with 0
// 5 counter should not go below 0
// 6 counter should not go above 99
// 7 we should be able to change the counter value by typing in the input field

// ##########################################
// Write your code here
const outputDisplay = document.getElementById('display');
let valuee = 0;

<<<<<<< HEAD
document.getElementById('minus').addEventListener('click', function(){
    if(valuee >= 1){
        valuee = valuee-1;
        outputDisplay.value = valuee;
    }
})
document.getElementById('plus').addEventListener('click', function(){
    if(valuee <= 99){
        valuee = valuee+1;
        outputDisplay.value = valuee;
    }
})
document.getElementById('resett').addEventListener('click', function(){
    valuee = 0;
    outputDisplay.value = valuee;
})
=======
const display = document.getElementById('display');

let total = 0;

document.getElementById('increment').addEventListener('click', function () {
    total = Number(display.value);

    if (total < 99) {
        display.value = ++total;
    }
});

document.getElementById('decrement').addEventListener('click', function () {
    total = Number(display.value);
    if (total > 0) {
        display.value = --total;
    }
});

document.getElementById('reset').addEventListener('click', function () {
    total = 0;
    display.value = total;
});
>>>>>>> f9f275f4ba65497cbd2a50686dd6f90d6e448c2a
