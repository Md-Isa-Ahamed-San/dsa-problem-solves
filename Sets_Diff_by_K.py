# --------------------------------
#  Problem : Sets Diff by K
#  Author  : Md Isa Ahamed San
#  Date    : 2026-03-18
# --------------------------------

import sys
from collections import defaultdict

# ---------- FAST IO / PyPy Optimization ----------
input = sys.stdin.readline
# Uncomment next line if using PyPy for faster input/output
# import os; input = lambda: os.read(0, 8192).decode().rstrip()


# ---------- SOLVE ----------
# ---------- SOLVE ----------
def solve():
    try:
        line1 = input().strip()
        if not line1:
            return
        t = int(line1)
    except EOFError:
        return

    for _ in range(t):
        n, k = map(int, input().split())
        b = list(map(int, input().split()))

        # indices where B[i] == 1 (using simple loop instead of comprehension)
        ones = []
        for i in range(n):
            if b[i] == 1:
                ones.append(i)

        # Condition 1: Check distance between all pairs of 1s
        possible = True
        for i in range(len(ones) - 1):
            if ones[i + 1] - ones[i] <= k:
                possible = False
                break

        # If no 1s found, it's impossible to form a set S (unless S is empty,
        # but the problem implies at least one element could be added)
        if not ones:
            possible = False

        # Condition 2: Check if every 0 is covered by at least one 1 within distance K
        if possible:
            for i in range(n):
                if b[i] == 0:
                    found = False
                    for pos in ones:
                        if abs(pos - i) <= k:
                            found = True
                            break
                    if not found:
                        possible = False
                        break

        if possible:
            print("Yes")
        else:
            print("No")


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
