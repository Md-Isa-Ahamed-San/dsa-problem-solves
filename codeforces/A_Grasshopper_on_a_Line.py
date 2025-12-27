# -------------------------------
#  FAST PYTHON CP TEMPLATE
# -------------------------------

import sys
import threading
input = sys.stdin.readline

# ---------- CONSTANTS ----------
MOD = 10**9 + 7
INF = 10**18

# ---------- BASIC IO ----------
def ii():
    return map(int, input().split())

def li():
    return list(map(int, input().split()))

def si():
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
        # Example reading:
        n,k =ii()
        if n<k: # k is greater so n cant be divisible by k
            print(1)
            print(n)
        else: # k is less than n 
            if n%k ==0:
                print(2)
                print(n-1, 1)
            elif (is_even(n) and is_even(k)) or (is_odd(n) and is_odd(k)):
                if n%k!=0:
                    print(1)
                    print(n)
                else:
                    print(2)
                    print(n-1,1)
            else:
                print(1)
                print(n)
            # jodi n even hoy and k o even hoy 
                # tahole  10 2 tahole ans hobe n-1, 1 = 9,1
            # if n even , k odd 10 3
                # print(n which is even)
            # if n odd , k even 9 4 or 9 2
                # print(n which is odd)
            # if n odd , k odd 9 3 
                # print n -1  , 1

# ---------- MAIN ----------
def main():
    solve()

if __name__ == "__main__":
    main()


