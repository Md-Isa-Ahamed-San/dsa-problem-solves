def rotateString(s, goal):
        s1=s
        s2=goal
        if len(s1)!= len(s2):
            return False
        mergedString = s1+s1
        goalIdx=0

        for nums in mergedString:
            # print(nums)
            if nums ==s2[goalIdx]:
                goalIdx+=1
            else:
                goalIdx=0
            if goalIdx==len(s2)-1:
                return True
            print(goalIdx)
        return False


# rotateString("bbbacddceeb", "ceebbbbacdd");
print(rotateString("defdefdefabcabc", "defdefabcabcdef"))
# "def defdefabcabcdef defdefabcabc"