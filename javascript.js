// Basic functions using the operation as the name
const add = (num1, num2) => parseFloat(num1) + parseFloat(num2);
const subtract = (num1, num2) => parseFloat(num1) - parseFloat(num2);
const multiply = (num1, num2) => parseFloat(num1) * parseFloat(num2);
const divide = (num1, num2) => parseFloat(num1) / parseFloat(num2);
const clear = ((num1, num2, operator) => {
    num1.textContent = ""
    num2.textContent = ""
    operator.textContent = ""
    display_zero.textContent = "0"
})

// bind the variables to the display
let num1 = document.querySelector(".display_num1")
let num2 = document.querySelector(".display_num2")
let operator = document.querySelector(".display_operator")
let display_zero = document.querySelector(".display_zero")

//initialisation
clear(num1, num2, operator)
result = ""
const operatorlist = ["add", "subtract", "multiply", "divide", "clear", "="]

// if statement to ensure you dont falsy add nums after result
const storeInNum = ((num, input) => {
    if(result != "" && operator.textContent === ""){
        num.textContent = ""
        result = ""
        num.textContent += input
    }
    else if(input === "." && num.textContent.includes(input)){
        return
    }
    else{
    num.textContent += input
    }

    })


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



const showResult = (num1, num2, operator) =>{
    // this ensures when pressing double operators nothing get parsed
    if(num2.textContent == ""){return}
    result = operate(num1.textContent, num2.textContent, operator.textContent)

    //purely here for funny message on impossible operation (like 0/0 or 2/0)
    if(isNaN(result) || result == "Infinity"){result = "Numnut"}
    num1.textContent = result
    num2.textContent = ""
    operator.textContent = ""

}
const allButtons = document.querySelectorAll("button")
for(each of allButtons){
    each.addEventListener("click", (e) => {
        if(result === "Numnut"){
            clear(num1, num2, operator)
            result = "" 
        }

        else if(operatorlist.includes(e.target.className)){
            if(e.target.className === "clear"){
                clear(num1, num2, operator)
                display_zero.textContent = "0"
            }           

            else if(e.target.className === "="){
                showResult(num1, num2, operator)
            }        
            else if(operator.textContent === ""){
                storeOperator(e.target.textContent)
            }
            //If a second operator is pressed before =, it should act as =
            else if(operator.textContent != ""){
                if(operator.textContent)
                showResult(num1, num2, operator)
                storeOperator(e.target.textContent)
            }
        }

        else if(operator.textContent === ""){
            display_zero.textContent = ""
            storeInNum(num1, e.target.textContent)
        }
        else{
            storeInNum(num2, e.target.textContent)
        }



    })

}