// Javascript implementation of a basic integer insertion sort algorithm


var insert = function(array, rightIndex, value)
{
    
    var key = value;

    for(i=rightIndex; value < array[i]; i--)
    {
        array[i + 1] = array[i];
        

        if (value >= array[i -1] || (i === 0))
            {
                array[i] = value;
            }
    }

}

var insertionSort = function(array)
{

    for(j=1; j < (array.length); j++)
    {
        insert(array, (j -1), array[j])
    }

}


var num_array0 = [1, 3, 4, 5, 7, 8, 10, 4, 7, 15, 123, 1205, 0, 43, 20, 99, 105, 304, 12, 15, 209, 209];
//     index     0  1  2  3  4  5  6   7  8  9
var num_array1 = [5, 10, 17, 53, 24, 25, 26, 13, 26, 14, 54, 11, 565, 204, 2200, 143, 25, 234, 1235, 10000, 405, 12, 1, 0];
var num_array2 = [2, 29, 15.45, 47, 52, 55.3, 100, 108, 12, 17, 43, 67, 107, 0, 0, 14, 72, 83];
var num_array3 = [405, 12, 632, 854, 34, 23, 1, 7, 3526.2, 375, 234, 2, 6, 2, 16, 123, 125, 1634, 1235, 125, 9999, 555, 102]
var num_array4 = [12, 24, 412, 24, 25, 262, 75, 24, 8445, 4234, 234, 62, 234, 1, 23, 235, 63, 26, 2346, 68, 96, 55, 88, 3]
var num_array5 = [1000, 23.1, 662, 23, 75.5, 9, 43, 53, 23, 67.8, 9, 34, 345, 23, 345, 3, 23, 634, 34, 64, 23, 533, 23, 13, 15]
var num_array6 = [55, 41, 72, 5, 6, 23, 25, 78, 34, 25, 10000, 234, 666.1, 434, 234, 12323, 23, 54, 366, 309, 2094, 23905]
var num_array7 = [412, 111, 345, 23, 10.2, 9, 55, 29, 209, 200, 3999, 40, 39, 65, 1, 30, 299, 5930, 590, 23, 1, 609, 490.5]



console.log("unsorted: " + num_array0)

insertionSort(num_array0)

console.log("sorted: " + num_array0)

console.log("unsorted: " + num_array1)

insertionSort(num_array1)

console.log("sorted: " + num_array1)

console.log("unsorted: " + num_array2)

insertionSort(num_array2)

console.log("sorted: " + num_array2)

console.log("unsorted: " + num_array3)

insertionSort(num_array3)

console.log("sorted: " + num_array3)

console.log("unsorted: " + num_array4)

insertionSort(num_array4)

console.log("sorted: " + num_array4)

console.log("unsorted: " + num_array5)

insertionSort(num_array5)

console.log("sorted: " + num_array5)

console.log("unsorted: " + num_array6)

insertionSort(num_array6)

console.log("sorted: " + num_array6)

console.log("unsorted: " + num_array7)

insertionSort(num_array7)

console.log("sorted: " + num_array7)








