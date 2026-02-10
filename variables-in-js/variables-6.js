function f1()
{
    variable = 55;
    console.log(variable);
}

f1() // must call the function before accessing the variable declared inside the function

if (true)
{
     varInside = 'o'
}
console.log(variable) // valid 
console.log(varInside);
