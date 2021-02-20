// A program function from the K&R


#include <stdio.h>
#include <stdlib.h>

int num_array0[20] = {3, 6, 8, 9, 10, 15, 17, 25, 26, 29, 30, 48, 49, 57, 67, 70, 75, 82, 90, 95};

int num_array1[20] = {1, 3, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 21, 25, 26, 27, 28, 30};

int num_array2[20] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19};


int target = 7;
int high_index = 20;



int bin_search(int target, int high, int array[])
{
    
    high = high;
    int mid = (high / 2);
    int low = 0;
    int count = 0;
    printf("mid init = %d\n", mid);

    while (count < 15)
    {
        
        if (target == array[mid])
        {

            return mid;

        }

        else if (target == array[high])
        {

            return high;

        }

        else if (target > array[mid])
        {

            low = mid;
            mid = ((low + high) / 2);
            printf("mid = %d\n", mid);

        }
        else if (target < array[mid])
        {

            high = mid;
            mid = ((low + high) / 2);
            printf("mid = %d\n", mid);

        }
        ++count;

    }


    return -1;

}



int main()
{
    
    if ( bin_search(target, high_index, num_array0) == -1 )
    {

        printf("Value %d not found in requested array: ", target);
    }
    else
    {
        printf("index value of target \"%d\" in array is: %d\n", target,  bin_search(target, high_index, num_array0));    
    }
    
        
    return 0;

}











