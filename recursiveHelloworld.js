// hello world with recursion

var helloRecursive = function(name, times)
{
    // recursive case 
    if (times > 0)
    {
        console.log("Hello, " + name + ".")
        helloRecursive(name, (times -1));
    }

    else
    {
        return 0;
    }

}

var gen_name = "world"
var times_printed = 10

helloRecursive(gen_name, times_printed)



