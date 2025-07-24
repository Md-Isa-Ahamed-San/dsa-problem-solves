def pushZerosToEnd(arr):
    n = len(arr)
    initial_non_zero_index = -1

    for i in range(n):
        if arr[i]==0 and initial_non_zero_index ==-1 :
            initial_non_zero_index = i
        elif arr[i]!= 0 and initial_non_zero_index!= -1:
            arr[initial_non_zero_index], arr[i] = arr[i], arr[initial_non_zero_index]
            initial_non_zero_index += 1
    return arr


pushZerosToEnd( [1, 2, 0, 4, 3, 0, 5, 0])
