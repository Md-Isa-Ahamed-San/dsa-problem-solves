def missingRange(arr, low, high):
        arr_set = set(arr)
        print(arr_set)
        missing_numbers = []
        for num in range(low, high + 1):
            if num not in arr_set:
                missing_numbers.append(num)
                
        return missing_numbers
missingRange([1, 4, 11, 51, 15],50,55)