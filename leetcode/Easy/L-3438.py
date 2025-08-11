def findValidPair(self, s: str) -> str:
        freq = {}
        ans=""
        for num in s:
            freq[num] = freq.get(num,0)+1
        # print(freq)
        for i in range(len(s)-1):
            first_val = s[i]
            sec_val = s[i+1]
            if first_val != sec_val:
                if (int(first_val) ==freq[first_val] and int(sec_val)==freq[sec_val]):
                    return first_val+sec_val
        return ""
        