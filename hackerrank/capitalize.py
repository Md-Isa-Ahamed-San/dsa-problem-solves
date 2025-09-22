def solve(s):
    newS = []
    s = s.split(" ")
    print(s)
    for item in range(len(s)):
        # print(s[item])
        print(item)
        currItem = s[item]
        newItem = currItem[0].upper() + currItem[1:]
        newS.append(newItem)
    newS = " ".join(newS)

    print(newS)


solve("hello world")
