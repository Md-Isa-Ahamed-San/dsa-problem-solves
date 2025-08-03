def getMinDiff(arr, k):
        n = len(arr)
        if n == 1:
            return 0

        arr.sort()

        min_diff = arr[n-1] - arr[0]
    
        for i in range(n-1):
        # Left side: arr[0] to arr[i] এ +k করবো
        # Right side: arr[i+1] to arr[n-1] এ -k করবো
        
     
            if arr[i+1] - k < 0:
                continue
        
     
            new_min = min(arr[0] + k, arr[i+1] - k)
        
      
            new_max = max(arr[i] + k, arr[n-1] - k)
        
       
            min_diff = min(min_diff, new_max - new_min)
        print(min_diff)
        return min_diff
        



getMinDiff([1, 5 ,8 ,10],2)
getMinDiff([3, 9, 12, 16,2,40, 20],3)
getMinDiff([1, 8, 10, 6, 4, 6, 9, 1],7)
getMinDiff([2, 4 ,3, 9 ,9 ,10, 9, 7, 1, 2],4)
getMinDiff([1, 10, 15],5)

# 1, 10
# 1+4 
# 10-4