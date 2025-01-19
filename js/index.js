// Prevent us from attempting to use variables
// that are not declared
"use strict"; 

"use strict";

// Using `break` and `continue` in the evenOrOdd function
function evenOrOddWithControlFlow() {
    const numbers = [1, 2, 3, 4, 5, 6];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 4) {
            console.log("Breaking the loop at number " + numbers[i]);
            break;  // Break the loop when the number 4 is encountered
        }
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i] + " is Even");
        } else {
            console.log(numbers[i] + " is Odd");
        }
    }
}

// Using `continue` to sum only even numbers from 1 to 10
function sumEvenNumbersWithContinue() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            continue;  // Skip odd numbers
        }
        sum += i;  // Add even numbers only
    }
    console.log("Sum of even numbers:", sum);  // Should output 30
}

// Call the functions to see the results
evenOrOddWithControlFlow();
sumEvenNumbersWithContinue();
