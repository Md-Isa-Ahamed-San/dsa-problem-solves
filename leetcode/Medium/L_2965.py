from collections import defaultdict
from typing import List

class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        
        n = len(grid)
        total_elements = n * n
        
        # Use defaultdict(int) for convenient counting.
        # When a new key is accessed, it's automatically initialized to int(), which is 0.
        counts = defaultdict(int)
        
        repeated_num = -1
        for row in grid:
            for num in row:
                counts[num] += 1
                # If a number's count becomes 2, it's the one that's repeated.
                if counts[num] == 2:
                    repeated_num = num

        missing_num = -1 
        
        # The numbers are supposed to be in the range [1, n*n].
        # We check which number from this range is not in our counts dictionary.
        for i in range(1, total_elements + 1):
            # The missing number will have a count of 0 (i.e., it won't be a key).
            if counts[i]==0:
                missing_num = i
                break # Since there's only one missing number, we can stop once found.
        return [repeated_num, missing_num]

# Example Usage:
solver = Solution()

# Example 1 from LeetCode
grid1 = [[1, 3], [2, 2]]
# n = 2, n*n = 4. Range is [1, 4].
# Numbers present: 1, 3, 2, 2.
# Repeated is 2, Missing is 4.
print(f"Input: {grid1}")
print(f"Output: {solver.findMissingAndRepeatedValues(grid1)}") # Expected: [2, 4]
print("-" * 20)

# Example 2 from LeetCode
grid2 = [[9, 1, 7], [8, 9, 2], [3, 4, 6]]
# n = 3, n*n = 9. Range is [1, 9].
# Numbers present: 9, 1, 7, 8, 9, 2, 3, 4, 6.
# Repeated is 9, Missing is 5.
print(f"Input: {grid2}")
print(f"Output: {solver.findMissingAndRepeatedValues(grid2)}") # Expected: [9, 5]
print("-" * 20)