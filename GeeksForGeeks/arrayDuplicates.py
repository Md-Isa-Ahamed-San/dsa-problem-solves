# def findDuplicates(arr):
#     counts = {}
#     ansArr = []

#     for num in arr:
#         if num in counts:
#             counts[num] += 1

#         else:
#             counts[num] = 1

#     for item in counts:
#         if counts[item] ==2:
#             ansArr.append(item)
#         # print(item, counts[item])
#     # print(counts)
#     return ansArr


def findDuplicates(arr):
    # counts = {}
    ansArr = []
    for num in arr:
        if arr[abs(num) - 1] < 0:
            ansArr.append(abs(num))
        else:
            arr[abs(num) - 1] = -arr[abs(num) - 1]

    print(ansArr)
    return ansArr


findDuplicates([1, 2])
# findDuplicates([2, 3, 1, 2, 3])
# findDuplicates([4,3,2,7,8,2,3,1])
