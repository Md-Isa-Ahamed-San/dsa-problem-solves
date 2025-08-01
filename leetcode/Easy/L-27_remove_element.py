def removeElement(nums, val):
    lastTargetIdx = -1
    for i in range(len(nums)):
        # print("lastTargetIdx: ",lastTargetIdx)
        if nums[i]==val and lastTargetIdx == -1:
            lastTargetIdx = i
        elif nums[i]!=val and lastTargetIdx != -1:
            nums[lastTargetIdx],nums[i] = nums[i],nums[lastTargetIdx]
            lastTargetIdx +=1
        # print("nums: ", nums)
        # print(lastTargetIdx)
    
    # Count target values and subtract from total length
    target_count = 0
    for num in nums:
        if num == val:
            target_count += 1
    
    return len(nums) - target_count

# Test cases
print("=== Test Case 1: [3,2,2,3], val=3 ===")
nums1 = [3, 2, 2, 3]
result1 = removeElement(nums1, 3)
print(f"Result: {result1}")
print(f"Array after: {nums1}")
print()

print("=== Test Case 2: [0,1,2,2,3,0,4,2], val=2 ===")
nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
result2 = removeElement(nums2, 2)
print(f"Result: {result2}")
print(f"Array after: {nums2}")
print()

print("=== Test Case 3: [3,2,4,5,1,3,4,2,1], val=3 ===")
nums3 = [3, 2, 4, 5, 1, 3, 4, 2, 1]
result3 = removeElement(nums3, 3)
print(f"Result: {result3}")
print(f"Array after: {nums3}")

# Even simpler - you can use count() method
def removeElementEvenSimpler(nums, val):
    lastTargetIdx = -1
    for i in range(len(nums)):
        if nums[i]==val and lastTargetIdx == -1:
            lastTargetIdx = i
        elif nums[i]!=val and lastTargetIdx != -1:
            nums[lastTargetIdx],nums[i] = nums[i],nums[lastTargetIdx]
            lastTargetIdx +=1
    
    
    return len(nums) - nums.count(val)

print("\n=== Using count() method ===")
nums4 = [3, 2, 2, 3]
result4 = removeElementEvenSimpler(nums4, 3)
print(f"Result: {result4}")