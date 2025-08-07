def leaders(arr):
        max = -1
        ans=[]
        for i in range(len(arr)-1,-1,-1):
            if arr[i]>=max:
                max=arr[i]
                ans.append(arr[i])
                
        ans.reverse()
        return ans 
