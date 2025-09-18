def rearrangeArray(nums):
        posArr=[]
        negArr=[]
        ansArr=[]
        for idx in range(len(nums)):
            if nums[idx]<0:
                negArr.append(nums[idx])
            else:
                posArr.append(nums[idx])
        # print(posArr)
        # print(negArr)
        for idx in range(len(negArr)):
            ansArr.append(posArr[idx])
            ansArr.append(negArr[idx])
        # print(ansArr)
        return ansArr
rearrangeArray([3,1,-2,-5,2,-4])