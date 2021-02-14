#! /usr/bin/nodejs
// Javascript algorith showcases the concept of tail recursion
// @author Jordan



// Factorial function using recursion
var factorial = function(n)
{
    if (n === 1)
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    }
}


// Factorial function using tail-recursion
var tailRecursionFunction = function(n, accumalator)
{
    if (n === 1)
    {
        return accumalator
    }
    else
    {
    return tailRecursionFunction((n-1), (accumalator * n))
    }
}


var integer = 25


// use the unix 'time' command to compare the runtimes of both of these functions in order to see which executes more consistently faster.

console.log(tailRecursionFunction(integer, 1))
console.log(factorial(integer))




