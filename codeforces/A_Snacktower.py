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
    n = int(input())
    arr = list(map(int, input().split()))
    chk_arr = [False]*(n+1) # 1 index arr. so we will not consider 0th idx
    ans = []
    next_to_place = n
    for val in arr:
        chk_arr[val] = True
        today_placed = []
        while next_to_place > 0 and chk_arr[next_to_place]:
            today_placed.append(str(next_to_place))
            next_to_place -=1
        ans.append(" ".join(today_placed))

    print("\n".join(ans)+"\n")

# ---------- MAIN ----------
def main():
    solve()

if __name__ == "__main__":
    main()