# --------------------------------
#  Problem : A. A Gift From Orangutan
#  Author  : Md Isa Ahamed San
# --------------------------------

import sys

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))

    print((max(a) - min(a)) * (n - 1))
