
// algorithm effectively sorts number arrays 
// providing array arguments to the function that contain repeated values does not break the function.


var numArray0 = [33, 67, 43, 47, 20, 9, 143, 635, 746, 456, 242, 65, 45, 1533, 244, 143]
var numArray1 = [46, 90, 32, 45, 67, 34, 132, 575, 846, 354, 245, 265, 34, 293, 12, 4, 5]
var numArray2 = [42, 57, 120, 45, 46, 98, 3, 24, 464, 1000, 123, 45, 63, 56, 12, 42, 53, 4]
var numArray3 = [3, 135, 645, 543, 74566, 375, 6, 735, 3754, 36546, 745, 45, 25, 63, 42, 1]
var numArray4 = [7, 64, 235, 234, 6234, 624, 432, 63, 534, 235, 6345, 64, 123, 52, 2, 12, 3]
var numArray5 = [1, 234, 634, 45, 64, 32, 74, 45, 7345, 344, 532, 534, 534, 234, 765, 122, 313]

var swap = function(array, firstIndex, secondIndex)
{
    var tempvar = array[firstIndex] ;
    array[firstIndex] = array[secondIndex] ;
    array[secondIndex] = tempvar ;
}


var compareValue = function(array, startIndex)
{
    var minValue = array[startIndex]
    var minIndex = startIndex;
    
    for(j=startIndex; j < array.length; ++j)
    {
        // array[startIndex] compare with all other array values
        

        if (minValue > array[j])
        {
            minValue = array [j]
            minIndex = j
        }


    }    
    
    if (minValue < array[startIndex])
    {
        swap(array, startIndex, minIndex)
    }
    return 0;
}


var selectionSort = function(array)
{
    for(i=0;i < array.length; i++)
    {
        compareValue(array, i)
    }

}


selectionSort(numArray0)
selectionSort(numArray1)
selectionSort(numArray2)
selectionSort(numArray3)
selectionSort(numArray4)
selectionSort(numArray5)

console.log(numArray0)
console.log(numArray1)
console.log(numArray2)
console.log(numArray3)
console.log(numArray4)
console.log(numArray5)
