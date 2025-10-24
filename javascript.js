// Basic functions using the operation as the name
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// variables used for displaying the numbers and operator on display
let num1 = 0;
let num2 = 0;
let operator = "";

// function that takes an operator and then calls one of the basic math functions
const operate = (num1, num2, operator) => operator(num1, num2);
