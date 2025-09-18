def getSubstringWithEqual012(Str):
    c0 = 0
    c1 = 0
    c2 = 0
    dict = {}
    ans = 0

    code = str(c1-c0) + "#" + str(c2-c1)
    dict[code] = 1
    
    for item in Str: 
        if item == "0":
            c0 += 1
        elif item == "1":
            c1 += 1
        elif item == "2":
            c2 += 1
        code = str(c1-c0) + "#" + str(c2-c1)

        if code in dict:
            ans += dict[code]
            dict[code] += 1
        else:
            dict[code] = 1
    # print (dict,ans)
    return ans

getSubstringWithEqual012('0102010')
# getSubstringWithEqual012('1120101212201')