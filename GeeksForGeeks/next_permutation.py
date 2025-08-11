
def nextPermutation(arr):
    n = len(arr)
    bp = -1

    for i in range(n-2,-1,-1):
        if arr[i] < arr[i+1]:
            bp = i
            break
    for i in range(n-1, bp, -1):
        if arr[i]>arr[bp]:
            arr[i], arr[bp] = arr[bp], arr[i]
            break
    # print(arr)
    arr[bp+1:] = sorted(arr[bp+1:])
    # print(arr)
    return arr

nextPermutation([2, 4, 1, 7, 5, 0])
# ans: 2,4,5,0,1,7