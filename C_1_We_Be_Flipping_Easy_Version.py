import sys
input = sys.stdin.readline

def solve():
    t = int(input())
    for _ in range(t):
        n = int(input())
        a = list(map(int, input().split()))

        inverted = False
        ops = []

        for i in range(n - 1, -1, -1):
            val = a[i]

            if inverted:
                val = -val

            if val > 0:
                ops.append(i + 1)
                inverted = not inverted

        print(len(ops))
        if ops:
            print(*ops)
        else:
            print()

solve()