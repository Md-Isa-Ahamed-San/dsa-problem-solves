def firstStableIndex(nums, k):
    min_stable_idx = -1
    for i in range(len(nums)):
        max_val = max(nums[: i + 1])
        min_val = min(nums[i:])
        # print(nums[:i+1])
        # print(nums[i:])

        # print("mm:",max_val,min_val)
        if max_val - min_val <= k:
            min_stable_idx = i
            break
    # print(min_stable_idx)
    return min_stable_idx


firstStableIndex([5, 0, 1, 4], 3)
