# --------------------------------
#  Problem : C_2_Marenol_hard_version
#  Rating  : auto from Codeforces
#  Tags    : auto from Codeforces
#  Author  : Md Isa Ahamed San
#  Date    : 2026-08-04
# --------------------------------

# region TEMPLATE

from ast import Continue
import sys
import math
from collections import defaultdict, deque, Counter
from itertools import accumulate
import heapq
from turtle import pos
from types import CodeType

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
        a = input().strip()
        b = input().strip()
        list_of_1_a_odd = []
        list_of_1_a_even = []
        list_of_1_b_odd = []
        list_of_1_b_even = []
        if n <= 2:
            if a == b:
                print(0)
                continue
            else:
                print(-1)
            continue
        for i in range(n):
            if a[i] == "1":
                if is_even(i):
                    list_of_1_a_even.append(i)
                else:
                    list_of_1_a_odd.append(i)

            if b[i] == "1":
                if is_even(i):
                    list_of_1_b_even.append(i)
                else:
                    list_of_1_b_odd.append(i)
        count = 0
        even_len = len(list_of_1_b_even)
        odd_len = len(list_of_1_b_odd)
        if len(list_of_1_a_even) == len(list_of_1_b_even) and len(list_of_1_a_odd) == len(list_of_1_b_odd):
            for i in range(even_len):
                even_distance = abs(list_of_1_a_even[i] - list_of_1_b_even[i])
                # print(even_distance)
                count += even_distance // 2
            for i in range(odd_len):
                odd_distance = abs(list_of_1_a_odd[i] - list_of_1_b_odd[i])
                # print(odd_distance)
                count += odd_distance // 2
            print(count)

        else:
            print(-1)


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
