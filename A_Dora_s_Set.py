# --------------------------------
#  Problem : A_Dora_s_Set
#  Author  : Md Isa Ahamed San
#  Date    : 2026-07-25
# --------------------------------

# region TEMPLATE

import math
import sys

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
        left, right = map(int, input().strip().split())
        num_of_odd=0
        if is_even(left) and is_even(right):
            num_of_odd = math.floor((right - left + 1) / 2)
        else:
            num_of_odd = math.ceil((right - left + 1) / 2)
        print(num_of_odd//2)


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
