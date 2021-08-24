// Globals
let DISPLAY_VALUE = 0; // default
const displayText = document.querySelector("#displayText");


function start()
{
    addButtonlisteners();
    addOptionListeners();
}

function add(a,b)
{
    return a + b;
}

function subtract(a,b)
{
    return a - b;
}

function multiply(a,b)
{
    return a * b;    
}

function divide(a,b)
{
    if(b == 0)
    {
        window.alert("Nope, You can't do that!");
        return;
    }

    return a / b;
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
    case "*":
        multiply(a,b);
        break;
    case "/":
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

}

function populateDisplay()
{

    if(displayText.textContent[0] == "0") // if the display is 0
    {
        displayText.textContent = DISPLAY_VALUE;
        return;
    }

    if(DISPLAY_VALUE == "=")
    {
        console.log(2);
    }

    else
    {
        displayText.textContent += DISPLAY_VALUE;
    }
}

function addButtonlisteners()
{
    const buttonNodes = document.querySelectorAll(".button");

    let buttonArray = Array.from(buttonNodes);

    console.log(buttonArray);

    buttonArray.forEach(element => {
        element.addEventListener('click', function(e){
            const value = element.getAttribute('value');
            DISPLAY_VALUE = value;
            populateDisplay();
        });
    });
}

function addOptionListeners()
{
    const clear = document.querySelector("#clear");

    clear.addEventListener('click', function(e){
        clearDisplay();
    });
}


start();