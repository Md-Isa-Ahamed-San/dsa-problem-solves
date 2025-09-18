def findMaxLength(nums):
    countMap = {}
    sum = 0
    ans = 0
    countMap[0] = -1 #assuming that sum = 0 is in -1 th idx. so if we find first sum=0 we can compare it with -1th idx

    for idx in range(len(nums)):
        if nums[idx] == 0:
            sum -= 1
        else:
            sum += 1
        if sum in countMap:
            ans = max(ans, idx - countMap[sum])
        else:
            countMap[sum] = idx
    print(ans)
    return ans


findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0])
