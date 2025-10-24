// Basic functions using the operation as the name
const add = (num1, num2) => parseFloat(num1) + parseFloat(num2);
const subtract = (num1, num2) => parseFloat(num1) - parseFloat(num2);
const multiply = (num1, num2) => parseFloat(num1) * parseFloat(num2);
const divide = (num1, num2) => parseFloat(num1) / parseFloat(num2);
const clear = ((num1, num2, operator) => {
    num1.textContent = ""
    num2.textContent = ""
    operator.textContent = ""
})


// bind the variables to the display
let num1 = document.querySelector(".display_num1")
let num2 = document.querySelector(".display_num2")
let operator = document.querySelector(".display_operator")

num1.textContent = ""
num2.textContent = ""
operator.textContent = ""
result = ""
const operatorlist = ["add", "subtract", "multiply", "divide", "clear", "="]

const storeInNum = (num, input) => num.textContent += input
const storeOperator = ((input) => {operator.textContent = input})


// function that takes an operator and then calls one of the basic math functions
const operate = ((num1, num2, operator) =>{
    switch(operator){
        case "+":
            return add(num1, num2)
        case "-":
            return subtract(num1,num2)
        case "*":
            return multiply(num1, num2)
        case "/":
            return divide(num1, num2)       

    }
})

const allButtons = document.querySelectorAll("button")
for(each of allButtons){
    each.addEventListener("click", (e) => {
        
        if(operatorlist.includes(e.target.className)){
            if(e.target.className === "clear"){
                clear(num1, num2, operator)

            }
            else if(e.target.className === "="){
                let result = operate(num1.textContent, num2.textContent, operator.textContent)
                num1.textContent = []
                num2.textContent = []
                operator.textContent = result
            }        
            else if(operator.textContent === ""){
                storeOperator(e.target.textContent)
            }
                        
            else if(operator.textContent != ""){
                console.log("This is the second operator, we post result here")
                storeOperator(e.target.textContent)
            }
        }

        else if(operator.textContent === ""){
            storeInNum(num1, e.target.textContent)
        }
        else{
            storeInNum(num2, e.target.textContent)
        }



    })

}
// create a function that stores the clicked button in num1
