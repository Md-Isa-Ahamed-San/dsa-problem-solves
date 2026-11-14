# --------------------------------
#  Problem : D_Letters_Down
#  Rating  : auto from Codeforces
#  Tags    : auto from Codeforces
#  Author  : Md Isa Ahamed San
#  Date    : 2026-11-14
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
        if s == s[::-1]:
            print(0)
            continue
        left = n // 2 - 1
        right = 0
        if is_even(n):
            right = n // 2
        else:
            right = n // 2 + 1
        print(left, right)
        count = 0
        while left > 0:
            curr_left_val = ord(s[left])
            curr_right_val = ord(s[right])
            count += abs(curr_left_val - curr_right_val)
            max_val = max(curr_left_val, curr_right_val)
            left -= 1
            right += 1
            if left > 0:
                future_left_val = ord(s[left])
                future_right_val = ord(s[right])
                if 

        print(ord("a") - ord("c"))


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
