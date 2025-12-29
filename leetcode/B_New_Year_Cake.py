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
    line = input().strip()
    if not line:
        return
    t = int(line)
    
    for _ in range(t):
        a, b = map(int, input().split())
        
        # Top layer (size 1) is White (a)
        count1 = 0
        temp_a, temp_b = a, b
        current_size = 1
        while True:
            # If count is even (0, 2, 4...), use White (temp_a)
            # If count is odd (1, 3, 5...), use Dark (temp_b)
            if count1 % 2 == 0:
                if temp_a >= current_size:
                    temp_a -= current_size
                else:
                    break
            else:
                if temp_b >= current_size:
                    temp_b -= current_size
                else:
                    break
            count1 += 1
            current_size *= 2
            
        # Top layer (size 1) is Dark (b)
        count2 = 0
        temp_a, temp_b = a, b
        current_size = 1
        while True:
            # If count is even (0, 2, 4...), use Dark (temp_b)
            # If count is odd (1, 3, 5...), use White (temp_a)
            if count2 % 2 == 0:
                if temp_b >= current_size:
                    temp_b -= current_size
                else:
                    break
            else:
                if temp_a >= current_size:
                    temp_a -= current_size
                else:
                    break
            count2 += 1
            current_size *= 2
            
        print(max(count1, count2))
        

# ---------- MAIN ----------
def main():
    solve()

if __name__ == "__main__":
    main()