// Simple linear search implemented in Javascript. O(n) time complexity


var array = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]





var performLinearSearch = function(searchSpace, searchValue)
    {
    var searchSize = searchSpace.length - 1
    for (i=0 ; i< (searchSpace.length - 1); i++)
        {   
        if (searchSpace[i] == searchValue)
            {
            console.log("The value has been found:")
            console.log("The value is at index " + i)
            return i
            }
        }
        

        return -1; // value not found
    }
    


var userSearchValue = window.prompt("Provide a number to search for: ")


performLinearSearch(array, userSearchValue)



