"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {
    const num = 3;
    // Check if num is even or odd using modulus operator
    evenOrOddElement.innerText = (num % 2 === 0) ? "Even" : "Odd";
}

function sumTheNumbers() {
    let sum = 0;
    // Sum numbers from 1 to 10
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    sumTheNumbersElement.innerText = sum;  // The sum of numbers from 1 to 10 is 55
}

function createNumberArray() {
    const numberArray = [];
    // Add numbers from 1 to 10 to the array
    for (let i = 1; i <= 10; i++) {
        numberArray.push(i);
    }
    createNumberArrayElement.innerText = numberArray.join(','); // Join numbers as a comma-separated string
}

function render() {
    evenOrOdd();           // Call evenOrOdd to update the result
    sumTheNumbers();       // Call sumTheNumbers to update the result
    createNumberArray();   // Call createNumberArray to update the result
}

submissionBtn.addEventListener("click", function () {
    render();
});
