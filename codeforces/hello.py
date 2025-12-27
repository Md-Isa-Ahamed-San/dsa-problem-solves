def subarraySum(nums, k):
    l = len(nums)
    if l<= 1:
        return 0
    prefix_sum = 0
    count = 0
    hash_map = {}
    hash_map[0]=1
    for num in nums:
        prefix_sum+= num
        reminder = prefix_sum-k
        #check in the hashmap if reminder exist already or not
        if reminder in hash_map:
            count+= hash_map[reminder]
            # count+= hash_map.get(reminder, 0) # we can also use this. in the if condition we are already checking the reminder in the map thats why we can also use the array access directly in this case
        #after adding/not adding count we will put
        #  the current sum in the hash_map. and if 
        # the current sum already in the hash_map we 
        # will increase the count by 1
        hash_map[prefix_sum]= hash_map.get(prefix_sum, 0) + 1
        #in python we cant directly use hash_map[reminder]without confirming the value in the hash_map just like the 13th line. thats why we have to use get
    return count





print(subarraySum([1, 2, 3, -3, 1, 1, 1, 4, 2, -3],3))