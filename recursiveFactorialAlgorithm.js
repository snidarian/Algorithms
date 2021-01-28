// Factorial function

/*
// The below recursive function accomplishes the same task as this commented function in fewer lines of code

var factorial = function(n) {
    var result = 1;
    
    for(var i = n; i > 0; i--)
    {
        result *= i;
    }


    return result;
};

*/

var recursiveFactorial = function(n) {
	// base case: 
	if (n === 0)
	{
	    return 1;
	}
	// recursive case:
    return factorial(n -1) * n;


}; 


console.log(recursiveFactorial(5))








