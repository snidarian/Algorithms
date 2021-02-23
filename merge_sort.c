
// Merge sort C implementation

#include <stdio.h>



//                   0  1  2  3   4  5  6  7   8   9   10  11  12  13  14
int num_array0[15] = {4, 2, 5, 34, 6, 4, 8, 46, 35, 77, 13, 24, 76, 34, 35};
int num_array1[15] = {7, 5, 4, 8, 7, 12, 14, 15, 10, 66, 70, 30, 99, 100, 13};

int col_array[10];
int max_index = 15;

void merge_subarrays(int low, int mid, int max)
{
    int l1, l2, i;
    l1 = low;
    l2 = (mid + 1);
    for(i=low; l1 <= mid && l2 <= max; i++)
    {
        if(num_array0[l1] <= num_array0[l2])
        {
            col_array[i] = num_array0[l1++];
        }
        else
        {
            col_array[i] = num_array0[l2++];
        }
    }

    while(l1 <= mid)
    {
        col_array[i++] = num_array0[l1++];
    }
    while (l2 <= max)
    {
        col_array[i++] = num_array0[l2++];
    }
    for(i=low; i<=max; i++)
    {
        num_array0[i] = col_array[i];
    }
}

void sort(int low, int max)
{
    
    if (low < max)
    {
        int mid = ((low + max) / 2);
        printf("mid = %d ", mid);
        
        
        printf("low = %d ", low);
        printf("mid = %d ", mid);
        printf("mid+1 = %d ", (mid+1));
        printf("max = %d \n", max);
        
        // Call merge function on two subarrays now:
        // subarray1 = 0-mid
        // subarray2 = (mid+1)-max
        sort(low, mid);
        sort((mid+1), max);
        merge_subarrays(low, mid, max);
    }
    else
    {
        printf("return statement\n");
        return;
    }
}

int main()
{
    int i;
    printf("Unsorted\n");
    for(i=0;i<max_index;i++)
    {
        printf("%d, ", num_array0[i]);
    }

    sort(0, max_index);

    printf("\nSorted\n");
    for(i=0;i<max_index;i++)
    {
        printf("%d, ", num_array0[i]);
        
    }
    printf("\n");

    return 0;
}







