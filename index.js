// Simple Calculator in Node.js
const prompt = require('prompt-sync')();

// Take user input
let num1 = parseFloat(prompt("Enter first number: "));
let operator = prompt("Enter operator (+, -, *, /): ");
let num2 = parseFloat(prompt("Enter second number: "));

let result;

// Perform operation
switch (operator) {
    case '+':
        result = num1 + num2;
        break;

    case '-':
        result = num1 - num2;
        break;

    case '*':
        result = num1 * num2;
        break;

    case '/':
        if (num2 === 0) {
            console.log("❌ Cannot divide by zero");
            process.exit();
        }
        result = num1 / num2;
        break;

    default:
        console.log("❌ Invalid operator");
        process.exit();
}

// Output result
console.log(`✅ Result: ${result}`);