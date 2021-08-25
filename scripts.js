// Globals
let DISPLAY_DIGIT = 0; // default
const displayText = document.querySelector("#displayText");
let FIRST_NUMBER = null;
let SECOND_NUMBER = null;
let OPERATION = null;
let PREV_OPERATION = null;
let RESULT = null;
let userPress = null;


function start()
{
    addNumberListeners();
    addOptionListeners();
    addOperatorListeners();
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

function populateDisplay()
{
    const operators = ["+","-","x","÷","="];

    if(displayText.textContent[0] == "0") // if the display is 0
    {
        displayText.textContent = DISPLAY_DIGIT;
        return;
    }

    if(operators.includes(displayText.textContent[0])) // if the display is an operator
    {
        displayText.textContent = DISPLAY_DIGIT;
        return;
    }


    if(DISPLAY_DIGIT == "=")
    {
        console.log(2);
    }

    else
    {
        displayText.textContent += DISPLAY_DIGIT;
    }

}

function addNumberListeners()
{
    const numberNodes = document.querySelectorAll(".number");

    let numberArray = Array.from(numberNodes);


    numberArray.forEach(element => {
        element.addEventListener('click', function(e){
            const value = element.getAttribute('value');
            DISPLAY_DIGIT = value;
            populateDisplay();
            userPress = value;
        });
    });
}

function addOperatorListeners()
{
    const operatorNodes = document.querySelectorAll(".operator");

    let operatorArray = Array.from(operatorNodes);


    operatorArray.forEach(element => {
        element.addEventListener('click', function(e){
            const value = element.getAttribute('value');
            DISPLAY_DIGIT = value;
            populateDisplay();
            userPress = value;

            saveNumber();


        });
    });
}


function addOptionListeners()
{
    const clear = document.querySelector("#clear");
    const deleteNum = document.querySelector("#delete");


    clear.addEventListener('click', function(e){
        const value = clear.getAttribute('value');
        userPress = value;
        clearDisplay();
    });

    deleteNum.addEventListener('click', function(e){
        const value = deleteNum.getAttribute('value');
        userPress = value;
        deleteNumber();
    });

}

function saveNumber()
{
    /// if a user presses an operator save the first number and the operator
    // if a user presses "=" operate() on the two numbers
    if(RESULT != null)
    {
        console.log(176);
        FIRST_NUMBER = RESULT;
        console.log("First: ", FIRST_NUMBER);
        SECOND_NUMBER = displayText.textContent.slice(0,-1);
        console.log("Second: ", SECOND_NUMBER);
        console.log("Operation: ", OPERATION);
        operate(OPERATION,FIRST_NUMBER,SECOND_NUMBER);
        console.log("Result: ",RESULT);
    }


    if(FIRST_NUMBER != null && OPERATION != null && SECOND_NUMBER == null)
    {
        console.log(186);
        SECOND_NUMBER = displayText.textContent.slice(0,-1);
        operate(OPERATION, FIRST_NUMBER, SECOND_NUMBER);
        console.log("Result: ",RESULT);
    }   
   
    if(FIRST_NUMBER == null && OPERATION == null)
    {
        console.log(194);
        FIRST_NUMBER = displayText.textContent.slice(0,-1);
        OPERATION = displayText.textContent.slice(-1);
        console.log(FIRST_NUMBER);
        console.log(OPERATION);        
    }

    displayText.textContent = userPress;
}


start();