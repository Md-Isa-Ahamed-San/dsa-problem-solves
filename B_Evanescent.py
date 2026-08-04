# --------------------------------
#  Problem : B_Evanescent
#  Rating  : auto from Codeforces
#  Tags    : auto from Codeforces
#  Author  : Md Isa Ahamed San
#  Date    : 2026-08-04
# --------------------------------

# region TEMPLATE

import sys
import math
from collections import defaultdict, deque, Counter
from itertools import accumulate
import heapq

# ---------- FAST IO / PyPy Optimization ----------
input = sys.stdin.readline
# import os; input = lambda: os.read(0, 8192).decode().rstrip()

# ---------- CONSTANTS ----------
MOD = 10**9 + 7
INF = 10**18


# ---------- BASIC IO ----------
def ints():
    return map(int, input().split())


def list_ints():
    return list(map(int, input().split()))


def str_input():
    return input().strip()


# ---------- COMMON OUTPUT ----------
def yes():
    print("YES")


def no():
    print("NO")


def out(arr):
    print(*arr)


# ---------- MATH UTILS ----------
def is_even(n):
    return (n & 1) == 0


def is_odd(n):
    return (n & 1) == 1


def gcd(a, b):
    while b:
        a, b = b, a % b
    return a


def lcm(a, b):
    return a // gcd(a, b) * b


def ceil_div(a, b):
    return (a + b - 1) // b


# ---------- PRIME CHECK ----------
def is_prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for d in range(3, int(n**0.5) + 1, 2):
        if n % d == 0:
            return False
    return True


# ---------- PREFIX / SUFFIX ----------
def prefix_sum(arr):
    pre = [0]
    for x in arr:
        pre.append(pre[-1] + x)
    return pre


def suffix_sum(arr):
    n = len(arr)
    suf = [0] * (n + 1)
    for i in range(n - 1, -1, -1):
        suf[i] = suf[i + 1] + arr[i]
    return suf


# endregion


# ---------- SOLVE ----------
def solve():
    t = int(input().strip())
    for _ in range(t):
        n = int(input().strip())
        s = input().strip()
        str_set = set(s)
        got = False
        got_not_matched = -1
        idx = -1
        for i in range(1, n - 1, 1):
            if s[i] != s[i + 1] and s[i] != s[i - 1] and s[i + 1] == s[i - 1]:
                got = True
                idx = i
            if s[i] != s[i + 1] and s[i] != s[i - 1]:
                got_not_matched = i
        # print(got)

        ans = []
        for i in range(n):
            if i == 0:
                ans.append(s[i])
            elif got and i == idx or not got and i == got_not_matched:
                continue
            else:
                if ans[-1] != s[i]:
                    ans.append(s[i])

        print(len(ans))

        # print(ans)


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
