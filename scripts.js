function start()
{

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

function populateDisplay()
{
    
}