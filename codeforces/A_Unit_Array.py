# -------------------------------
#  FAST PYTHON CP TEMPLATE
# -------------------------------

import math
import sys
import threading
input = sys.stdin.readline
# ---------- CONSTANTS ----------
MOD = 10**9 + 7
INF = 10**18

# ---------- BASIC IO ----------


def integers_input():
    return map(int, input().split())


def list_input():
    return list(map(int, input().split()))


def simple_input():
    return input().strip()

# ---------- COMMON PRINTS ----------


def yes():
    print("YES")


def no():
    print("NO")


def print_arr(arr):
    print(*arr)

# ---------- MATH UTILS ----------


def is_even(x):
    return x & 1 == 0


def is_odd(x):
    return x & 1 == 1


def gcd(a, b):
    while b:
        a, b = b, a % b
    return a


def lcm(a, b):
    return a // gcd(a, b) * b


def ceil_div(a, b):
    return (a + b - 1) // b

# ---------- ARRAY UTILS ----------


def prefix_sum(arr):
    n = len(arr)
    ps = [0] * (n + 1)
    for i in range(n):
        ps[i + 1] = ps[i] + arr[i]
    return ps


def suffix_sum(arr):
    n = len(arr)
    ss = [0] * (n + 1)
    for i in range(n - 1, -1, -1):
        ss[i] = ss[i + 1] + arr[i]
    return ss

# ---------- BINARY SEARCH ----------


def lower_bound(arr, x):
    l, r = 0, len(arr)
    while l < r:
        m = (l + r) // 2
        if arr[m] < x:
            l = m + 1
        else:
            r = m
    return l


def upper_bound(arr, x):
    l, r = 0, len(arr)
    while l < r:
        m = (l + r) // 2
        if arr[m] <= x:
            l = m + 1
        else:
            r = m
    return l

# ---------- SOLVE ----------


def solve():
    t = int(input())
    for _ in range(t):
        n = int(input())
        arr = list(map(int, input().split()))
        sum_of_arr = 0
        neg = 0
        pos = 0
        ans = 0
        for num in arr:
            if num == -1:
                sum_of_arr -= 1
                neg += 1
            else:
                sum_of_arr += 1
                pos += 1
        if sum_of_arr >= 0 and is_even(neg):
            # both condition fill up already so ans is 0
            print(0)
        else:
            if sum_of_arr >= 0 and is_odd(neg):
                # sum 0 er boro but odd number of neg value ase so mul value will be neg
                print(1)
            else:
                # sum_of_arr is less than 0 and number of neg value can be odd or even
                while (sum_of_arr < 0):
                    sum_of_arr += 2
                    neg -= 1
                    ans += 1
                if is_odd(neg):
                    neg -= 1
                    ans += 1
                print(ans)


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
