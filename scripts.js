// Globals
let RESULT = null;


// Query Selectors
let display = document.querySelector("#displayText");
const clear = document.querySelector("#clear");
const deleteNum = document.querySelector("#delete");
const equalSign = document.querySelector("#equalSign");
const numberNodes = document.querySelectorAll(".number");
const operatorNodes = document.querySelectorAll(".operator");



// Event Listeners
clear.addEventListener('click', () => doSomething())



function start()
{

}





function add(a,b)
{
    let intA = parseInt(a);
    let intB = parseInt(b);
    
    RESULT = intA + intB;

    return RESULT;
}

function subtract(a,b)
{
    RESULT = a - b;
    return RESULT;
}

function multiply(a,b)
{
    RESULT = a * b;
    return RESULT;    
}

function divide(a,b)
{
    if(b == 0)
    {
        window.alert("Nope, You can't do that!");
        return;
    }

    RESULT = a / b;

    return RESULT;
}

function operate(operator, a, b)
{
    switch(operator){
    case "+":
        add(a,b);
        break;
    case "-":
        subtract(a,b);
        break;
    case "x":
        multiply(a,b);
        break;
    case "÷":
        divide(a,b);
        break;
    }
}

function clearDisplay()
{
    displayText.textContent = 0;
}

function deleteNumber()
{
    let string = displayText.textContent;
    displayText.textContent = string.slice(1);
}






start();