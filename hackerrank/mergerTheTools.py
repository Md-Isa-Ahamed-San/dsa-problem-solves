def merge_the_tools(string, k):
    arrOfAns = []
    for i in range(0, len(string), k):
        substring = string[i:i+k]
        tempSet = set()
        item = ""
        for ch in substring:
            if ch not in tempSet: # instead of just pushing we are checking the existence which will make the ch ordered
                tempSet.add(ch)
                item += ch
        arrOfAns.append(item)
    
    for ans in arrOfAns:
        print(ans)
