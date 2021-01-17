// binary search implemented in Javascript (as function)



primesArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]



function binSearch(array, targetValue)
{
var min = 0
var max = array.length - 1;
var mid = ((min + max) / 2);
var whilevar = true
var count = 0

    while (whilevar = true && count < 12)
    {   
        count += 1
        if (targetValue === array[mid])
        {
            targetValue = array[mid]
            console.log("index value in provided array refering to targetValue: " + mid)
            whilevar = false
            break
        }
        else if (targetValue < array[mid])
        {
            max = mid;
            mid = Math.floor((min + max) / 2)
            // mid = ((min + max) / 2)
            console.log(min, mid, max)
            console.log("Target lesser")
            continue
        }

        else if (targetValue > array[mid])
        {
            min = mid
            mid = Math.floor((min + max) / 2)
            //mid = ((min + max) / 2)
            console.log(min, mid, max)
            console.log("Target greater")
            continue
        }
    }

    // returns the index value for the prime that was supplied
    console.log("index value for " + user_target_prime + " = " + mid)
    return mid
}

var user_target_prime = window.prompt("Supply prime value: ")

binSearch(primesArray, user_target_prime)




