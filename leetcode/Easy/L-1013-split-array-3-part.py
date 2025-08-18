def canThreePartsEqualSum(arr):
        total = sum(arr)
        if total % 3 != 0:
            return False

        target = total // 3
        partSum = 0
        count = 0

        for i in range(len(arr)):
            partSum += arr[i]

            if partSum == target:
                count += 1
                partSum = 0

                # if we already found 2 partitions, no need to check further (last part is guaranteed)
                if count == 2 and i < len(arr) - 1:
                    return True

        return False

print(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0])) # Expected: False
print(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 0])) # Expected: False
print(canThreePartsEqualSum([1, -1, 1, -1])) # Expected: False
print(canThreePartsEqualSum([1, 1, 1])) # Expected: True
print(canThreePartsEqualSum([0,0,0,0,0,0,0])) # Expected: True