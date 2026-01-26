# --------------------------------
#  Problem : contest
#  Author  : Md Isa Ahamed San
#  Date    : 2026-01-25
# --------------------------------

import sys

# ---------- FAST IO / PyPy Optimization ----------
input = sys.stdin.readline
# import os; input = lambda: os.read(0, 8192).decode().rstrip()

# ---------- CONSTANTS ----------
MOD = 10**9 + 7
INF = 10**18


# ---------- BASIC IO ----------
def ints():
    return map(int, input().strip().split())


def list_ints():
    return list(map(int, input().strip().split()))


def str_input():
    return input().strip()


# ---------- DEBUG PRINT ----------
DEBUG = False


def debug(*args, **kwargs):
    if DEBUG:
        print(*args, **kwargs, file=sys.stderr)


# ---------- COMMON OUTPUT ----------
def yes():
    print("YES")


def no():
    print("NO")


def out(arr):
    print(*arr)


# ---------- SOLVE ----------
def solve():
    t = int(input().strip())
    for _ in range(t):
        n, s, x = ints()
        arr = list_ints()

        total = sum(arr)

        if total > s:
            no()
            continue

        if (s - total) % x == 0:
            yes()
        else:
            no()


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
