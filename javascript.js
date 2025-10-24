// Basic functions using the operation as the name
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// variables used for displaying the numbers and operator on display
let num1 = "";
let num2 = "";
let operator = "";

// function that takes an operator and then calls one of the basic math functions
const operate = (num1, num2, operator) => operator(num1, num2);

const allButtons = document.querySelectorAll("button")
for(each of allButtons){
    each.addEventListener("click", (e) => {
        console.log("click")
    })

}
// allButtons.addEventListener("click", (e) =>{
//     console.log("click"); // logs the className of my_element
// })

// create a function that stores the clicked button in num1
const storeInNum1 = () => {

}