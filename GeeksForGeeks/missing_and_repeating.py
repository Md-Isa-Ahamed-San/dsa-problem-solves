def findTwoElement(arr):
    double_occurrence = 0
    missing_number = 0
    n = len(arr)
    for i in range(n):
        if(arr[abs(arr[i])-1]<0):
            double_occurrence = abs(arr[i])
        else: 
            arr[abs(arr[i])-1] = -arr[abs(arr[i])-1]
    for i in range(n):
        if arr[i] > 0:
            missing_number = i+1
    # print(double_occurrence, missing_number)
    return [double_occurrence, missing_number]


findTwoElement([4, 3, 6, 2, 1, 1])