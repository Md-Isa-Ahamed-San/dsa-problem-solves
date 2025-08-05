def rearrange(arr):
        neg_arr = []
        pos_arr = []
        ans_arr = []
        if len(arr)==1 : return arr
        
        for i in range(len(arr)):
            if arr[i]<0 :
                  neg_arr.append(arr[i])
            else:
                  pos_arr.append(arr[i])
        i=0
        j=0
        while i <len(pos_arr) and j <len(neg_arr):
              ans_arr.append(pos_arr[i])
              ans_arr.append(neg_arr[j])
              i+=1
              j+=1
        

        while i < len(pos_arr):
                ans_arr.append(pos_arr[i])
                i+=1
        while j < len(neg_arr):
                ans_arr.append(neg_arr[j])
                j+=1
        print(ans_arr)
        #assign method e arr = ans_arr dile error ashbe. ei vabe slice method e ans_arr main arr te shift korte hobe
        arr[:] = ans_arr
        return ans_arr

rearrange([9, 4,6, -2, -1, 5, 0, -5, -3, 2])