
def reverseAGroup(arr,start,end):
    if end>=len(arr):
        end = len(arr)-1
    while(start<=end):
        arr[start],arr[end] = arr[end],arr[start]
        start+=1
        end-=1

def reverseingroups(arr, k):
    n = len(arr)
    i = 0
    while i<n:
        reverseAGroup(arr,i,i+k-1)
        i+=k
    return arr


# after solving the pb got this cleaner version from Claude
def reverse_in_groups_original(arr, k):
    def reverse_group(arr, start, end):
        end = min(end, len(arr) - 1)  # More concise boundary check
        while start < end:
            arr[start], arr[end] = arr[end], arr[start]
            start += 1
            end -= 1
    
    for i in range(0, len(arr), k):
        reverse_group(arr, i, i + k - 1)
    
    return arr


# reverseingroups([1, 2, 3, 4, 5],3)
reverseingroups([5, 6, 8, 9],5)