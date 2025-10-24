// Basic functions using the operation as the name
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// variables used for displaying the numbers and operator on display
// let num1 = ""
// let num2 = ""
// let operator = ""

// bind the variables to the display
let num1 = document.querySelector(".display_num1")
let num2 = document.querySelector(".display_num2")
let operator= document.querySelector(".display_operator")

num1.textContent = "6"
num2.textContent = "2"
operator.textContent = ""
const operatorlist = ["add", "substract", "multiply", "divide"]

const storeInNum1 = (input) => num1.textContent += input
const storeInNum2 = (input) => num1.textContent += input
const storeOperator = ((input) => {operator.textContent = input})


// function that takes an operator and then calls one of the basic math functions
const operate = (num1, num2, operator) => operator(num1, num2);

const allButtons = document.querySelectorAll("button")
for(each of allButtons){
    each.addEventListener("click", (e) => {
        console.log("click") // Test to see if clicks are registered, it does!
        console.log(e.target)
        num1.textContent += "1" // Test to see if clicks add, they do!

        if(operatorlist.includes(e.target.className)){
            console.log("you clicked an operator")
            if(e.target.className === "clear"){
                //Function that clears all values
            }
            else if(e.target.className === "="){
                // function that displays the result
            }
            else{
                storeOperator(e.target.className)
            }
        }



    })

}
// create a function that stores the clicked button in num1
