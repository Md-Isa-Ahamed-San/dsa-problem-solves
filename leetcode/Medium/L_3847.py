def swapRole(f, s):
    f, s = s, f
    return f, s


def is_odd(num):
    if num % 2 != 0:
        return True
    return False


def scoreDifference(nums):
    f = True  # initially active
    s = False  # initially inactive
    f_score = 0
    s_score = 0
    for idx, val in enumerate(nums):
        if is_odd(val):
            f, s = swapRole(f, s)
    
        if (idx + 1) % 6 == 0:
            f, s = swapRole(f, s)
        # print(val)
        if f:
            f_score += val
        else:
            s_score += val
        # print(f_score,s_score)
    return f_score - s_score


# print(scoreDifference([1, 2, 3]))
print(scoreDifference([2,4,2,1,2,1]))
# print(scoreDifference([1]))
