def sortInWave(arr):
        n = len(arr)
        for i in range(0, n-1, 2):
                arr[i],arr[i+1] = arr[i+1], arr[i]
        # print(arr)
        return arr

sortInWave([1, 2, 3, 4, 5, 6, 7, 8])
sortInWave([2, 4, 7, 8, 9, 10])
sortInWave([2, 4, 7, 8, 9])
sortInWave([1])