n = int(input().strip())
arr = list(map(int,input().strip().split()))
s=sum(arr)
is_possible=False
ans_count = 0
for left in range(n):
    total_sum=0
    for right in range(left,n):
        total_sum+=arr[right]
        ok = True
        for i in range(left,right+1):
            if total_sum%arr[i]==0:
                ok=False
                break
        if ok:
            ans_count+=1

        
print(ans_count)


  