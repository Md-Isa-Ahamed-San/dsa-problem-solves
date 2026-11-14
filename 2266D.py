import sys
from collections import defaultdict
input = sys.stdin.readline

def solve():
    n = int(input())
    a = list(map(int, input().split()))

    # Transform: b[i] = a[i] - i  (key invariant)
    b = [a[i] - i for i in range(n)]
    b.sort()

    # Longest chain of consecutive integers in b
    dp = defaultdict(int)
    ans = 0
    for x in b:
        dp[x] = dp[x - 1] + 1
        ans = max(ans, dp[x])

    print(ans)

t = int(input())
for _ in range(t):
    solve()
