def romanToDecimal(s):
    l = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    ans = 0
    for i in range(len(s)):
        ans += l.get(s[i], 0)
        # print(s[i])

        if l.get(s[i], 0) > l.get(s[i - 1], 0) and i > 0:
            ans -= l.get(s[i - 1], 0) * 2
        # print(ans)
    # print(ans)

    return ans


romanToDecimal("MCMIV")  # Expected: 1994
romanToDecimal("XL")  # Expected: 40
