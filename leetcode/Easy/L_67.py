def addBinary(a, b):
    a_arr = list(a)
    b_arr = list(b)
    ans_arr = []
    carry = 1
    # print(a_arr, b_arr)
    for i in range(1,len(b_arr),1):
        # 0 and 0
        if a_arr[-i] == 0 and b_arr[-i] == 0:
            
        
        # one of them is 0 another one is 1
        elif (a_arr[-i] == 1 and b_arr[-1] == 0) or  (a_arr[-i] == 0 and b_arr[-1] == 1):
        
        # both are 1
        else:


addBinary("1010", "1011")
