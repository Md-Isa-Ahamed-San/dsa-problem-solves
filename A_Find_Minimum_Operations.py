# --------------------------------
#  Problem : A_Find_Minimum_Operations
#  Author  : Md Isa Ahamed San
#  Date    : 2026-07-25
# --------------------------------

# region TEMPLATE

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
        n, k = map(int, input().strip().split())
        count = 0

        if k == 1:
            print(n)
            continue
        i = 0
        arr = []

        while k**i <= n:
            arr.append(k**i)
            i += 1
        arr.reverse()
        l = len(arr)
        j = 0
        while n != 0:
            if j == l - 1:
                count += n
                break
            if arr[j] <= n:
                n -= arr[j]
                count += 1
            else:
                j += 1
        # print(arr)
        print(count)


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
