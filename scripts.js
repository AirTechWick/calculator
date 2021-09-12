// Globals
let result = null;
let firstNumber = null;
let secondNumber = null;
let savedOperator = null;
let activeOperator = null;
let displayValue = 0;
let startNewDisplay = false;
let needNewSecondNumber = false;

// Query Selectors
let display = document.querySelector("#displayText");
const clear = document.querySelector("#clear");
const deleteNum = document.querySelector("#delete");
const equalSign = document.querySelector("#equalSign");
const numberNodes = document.querySelectorAll(".number");
const operatorNodes = document.querySelectorAll(".operator");



// Event Listeners
clear.addEventListener('click', () => clearDisplay())
deleteNum.addEventListener('click', () => deleteNumber())
equalSign.addEventListener('click', () => evaluate())
numberNodes.forEach(element => {
    element.addEventListener('click', () => appendNumber(element))
});
operatorNodes.forEach(element => {
    element.addEventListener('click', () => {saveOperator(element); } ) // use this to add multiple listeners to one event
})


function add(a,b)
{
    
    result = a + b;
    return result;
}

function subtract(a,b)
{
    result = a - b;
    return result;
}

function multiply(a,b)
{
    result = a * b;
    return result;    
}

function divide(a,b)
{
    if(b == 0)
    {
        window.alert("Nope, You can't do that!");
        return;
    }

    result = a / b;

    return result;
}

function operate(operator, a, b)
{
    const A = Number(a);
    const B = Number(b);

    switch(operator){
    case "+":
        return add(A,B);
    case "-":
        return subtract(A,B);
    case "x":
       return multiply(A,B);
    case "÷":
        return divide(A,B);
    }
}

function clearDisplay()
{
    console.log("clearDisplay");
    display.textContent = 0;
    displayValue = display.textContent;
    clearAll();
    console.log("displayValue: ", displayValue);
}

function clearAll()
{
    console.log("clearAll");
    savedOperator = null;
    activeOperator = null;
    firstNumber = null;
    secondNumber = null;
    result = null;
}

function deleteNumber()
{
    console.log("deleteNumber");
    let string = displayText.textContent;
    display.textContent = string.slice(0,-1);
    displayValue = display.textContent;
    console.log("displayValue: ", displayValue);
}

function evaluate()
{
    console.log("evaluate");
    if(secondNumber == null)
    {
        secondNumber = displayValue;
        console.log("secondNumber saved: ", secondNumber);
    }

    if(needNewSecondNumber)
    {
        secondNumber = displayValue;
        console.log("secondNumber saved: ", secondNumber);
        needNewSecondNumber = false;
    }

    operate(activeOperator,firstNumber,secondNumber);
    displayResult();
}

function appendNumber(element)
{
    console.log("appendNumber");

    if(startNewDisplay)
    {
        display.textContent = element.getAttribute('value');
        startNewDisplay = false;
        displayValue = display.textContent;
        console.log("displayValue: ", displayValue);    
        return;
    }

    if (element.getAttribute('value') == "." && display.textContent.includes(".")) // stops from user adding too many decimals
    {
        return;
    }

    if(displayValue == 0) // if the first number on the calculator display is 0 then the display should change to the number pressed
    {
        display.textContent = element.getAttribute('value');
    }

    else
        display.textContent += element.getAttribute('value'); // else append the number to the end of the current number


    displayValue = display.textContent;
    console.log("displayValue: ", displayValue);
}


function saveOperator(element)
{
    console.log("saveOperator");
    savedOperator = element.getAttribute('value');
    console.log("savedOperator: ", savedOperator);



    if(firstNumber == null && activeOperator == null)
    {
        firstNumber = displayValue;
        startNewDisplay = true;
        console.log("firstNumber saved: ", firstNumber);
        activeOperator = savedOperator; // operator to be used in operate()
        console.log("activeOperator: ", activeOperator);
    }

    else if(firstNumber != null)
    {
        secondNumber = displayValue;
        console.log("secondNumber saved: ", secondNumber);
        operate(activeOperator,firstNumber,secondNumber);
        displayResult();
        startNewDisplay = true;
        firstNumber = result;
        activeOperator = savedOperator;
        console.log("new active operator: ", activeOperator);
        console.log("new first number: ", firstNumber);
        console.log("need new second number...");
        needNewSecondNumber = true;
    }

    else if(firstNumber != null && needNewSecondNumber)
    {
        secondNumber = displayValue;
        console.log("new secondNumber saved: ", secondNumber);
        operate(activeOperator, firstNumber, secondNumber);
        displayResult();
    }

}

function displayResult()
{
    console.log("displayResult");
    console.log("result: ", result);
    display.textContent = result;
}

