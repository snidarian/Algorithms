// Merge sort C implementation

#include <stdio.h>



//                   0  1  2  3   4  5  6  7   8   9   10  11  12  13  14
int num_array0[15] = {4, 2, 5, 34, 6, 4, 8, 46, 35, 77, 13, 24, 76, 34, 35};
int num_array1[15] = {7, 5, 4, 8, 7, 12, 14, 15, 10, 66, 70, 30, 99, 100, 13};

int max_index = 15;

void merge_subarrays()
{
    ;
}

void sort(int array[], int low, int max)
{
    int i;
    for(i=0;i<max;i++)
    {
        printf("%d, ", array[i]);
        
    }
    printf("\n");

    int mid = (max * 0.5);
    printf("mid == %d", mid);
    
    // Call merge function on two subarrays now:
    // subarray1 = 0-mid
    // subarray2 = (mid+1)-max
    printf("low = %d\n", low);
    printf("mid = %d\n", mid);
    printf("mid+1 = %d\n", (mid+1));
    printf("max = %d\n", max);

}

int main()
{

    sort(num_array0, 0, max_index);

    return 0;
}



