def addOne( arr):
    n = len(arr)
    if arr[n-1] != 9:
        arr[n-1] += 1
        print("case 1 type:",arr)
        return arr
    elif arr[n-1] == 9:
        while n>0 and arr[n-1]==9:
            arr[n-1] = 0
            n -= 1
        if(n<=0):
            arr.insert(0, 1)
            print("case 3 type:",arr)
            return arr
        else:
            arr[n-1]+=1
            print("case 2 type:",arr)
            return arr
    return arr


def addOne(arr):
    # Start from the rightmost digit
    for i in range(len(arr) - 1, -1, -1):
        if arr[i] < 9:
            arr[i] += 1
            return arr
        arr[i] = 0
    
    # If we reach here, all digits were 9
    return [1] + arr

# case 1: 
# addOne([5,6,7,8])
# case 2:
# addOne([3,4,5,9,9,9])
# case 3:
addOne([9,9,9,9,9,9])