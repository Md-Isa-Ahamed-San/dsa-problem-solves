def reverseAGroup(arr,start,end):
    while start<end:
        arr[start],arr[end]=arr[end],arr[start]
        start+=1
        end-=1

def rotateArr(arr, d):
    n = len(arr)
    d = d % n
    arr.reverse()
    breakPoint = (len(arr)-1)-d # subtracting the d from the number of elements in the array
    reverseAGroup(arr,0,breakPoint)
    reverseAGroup(arr,breakPoint+1,len(arr)-1)
    print(arr)
    return arr

    

# rotateArr([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 10)
rotateArr([1, 2 ,3 ,4, 5], 2)

# 3,4,5,1,2