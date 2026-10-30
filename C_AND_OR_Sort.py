# --------------------------------
#  Problem : C_AND_OR_Sort
#  Rating  : auto from Codeforces
#  Tags    : auto from Codeforces
#  Author  : Md Isa Ahamed San
#  Date    : 2026-10-30
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
        top = []
        left_zero_count = 0
        left_one_count = 0

        tot_zero_count = s.count("0")
        tot_one_count = s.count("1")
        if s[0] == "1":
            print(tot_zero_count)
            continue
        else:
            for i in range(n):
                if i + 1 < n and s[i] == "0" and s[i + 1] == "1":
                    right_zero_count = tot_zero_count - left_zero_count-1
                    top.append([left_one_count, right_zero_count])
                if s[i] == "0":
                    left_zero_count += 1
                if s[i] == "1":
                    left_one_count += 1
        # print(top)
        min_val = 99999999999999
        for pair in top:
            left_one_count = pair[0]
            right_zero_count = pair[1]
            min_val = min(min_val, (left_one_count + right_zero_count))
            # print(left_one_count , right_zero_count)
        
        min_val = min(tot_one_count,min_val)
        print(min_val)
        # print("----------------------------")


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
