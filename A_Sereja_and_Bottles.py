from collections import Counter

n = int(input())
a, b = [], []

for _ in range(n):
    x, y = map(int, input().split())
    a.append(x)
    b.append(y)

freq = Counter(b)

ans = 0

for i in range(n):
    freq[b[i]] -= 1

    if freq[a[i]] == 0:
        ans += 1

    freq[b[i]] += 1

print(ans)