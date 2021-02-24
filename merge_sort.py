# Merge sort implementation in python3.7


num_array0 = [4, 56, 3, 3, 13, 14, 17, 34, 1, 4, 3, 76, 30, 40, 99, 40, 50, 99, 1, 4]



def merge_sort(array):
    if len(array) > 1:
        mid = len(array) // 2

        left = array[:mid]  
        right = array[mid:]  

        merge_sort(left)  # Sort first half
        merge_sort(right)  # Sort 2nd half

        Li = 0
        Ri = 0
        current_index = 0

        # compare index values and add lowest to current index
        while Li < len(left) and Ri < len(right):
            if left[Li] < right[Ri]:
                array[current_index] = left[Li]
                Li += 1
            else:
                array[current_index] = right[Ri]
                Ri += 1
            current_index += 1

        # copy remaining elements of left[]
        while Li < len(left):
            array[current_index] = left[Li]
            Li += 1
            current_index += 1

        # copy remaining elements of right[]
        while Ri < len(right):
            array[current_index] = right[Ri]
            Ri += 1
            current_index += 1

if __name__ == '__main__':
    merge_sort(num_array0)
    print(num_array0)




















