t = int(input())

for _ in range(t):
    n = int(input())
    s = input()

    max_len = 0
    current = 0

    for ch in s:
        if ch == '#':
            current += 1
            max_len = max(max_len, current)
        else:
            current = 0

    ans = (max_len + 1) // 2
    print(ans)