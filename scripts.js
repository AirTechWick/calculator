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
