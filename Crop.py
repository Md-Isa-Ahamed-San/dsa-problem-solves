# --------------------------------
#  Problem : Crop
#  Author  : Md Isa Ahamed San
#  Date    : 2026-06-27
# --------------------------------

import sys
from collections import defaultdict

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


# ---------- DEBUG PRINT ----------
DEBUG = False


def debug(*args, **kwargs):
    if DEBUG:
        print(*args, **kwargs, file=sys.stderr)


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


# ---------- SIEVE ----------
def prime_list_sieve(limit):
    is_prime_arr = [True] * (limit + 1)
    is_prime_arr[0] = is_prime_arr[1] = False
    for p in range(2, int(limit**0.5) + 1):
        if is_prime_arr[p]:
            for multiple in range(p * p, limit + 1, p):
                is_prime_arr[multiple] = False
    return is_prime_arr


def prime_list(limit):
    flags = prime_list_sieve(limit)
    return [p for p in range(limit + 1) if flags[p]]


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


# ---------- BINARY SEARCH ----------
def lower_bound(arr, target):
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid
    return lo


def upper_bound(arr, target):
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] <= target:
            lo = mid + 1
        else:
            hi = mid
    return lo


# ---------- GRAPH UTIL ----------
def build_graph(n, edges, directed=False):
    graph = defaultdict(list)
    for u, v in edges:
        graph[u].append(v)
        if not directed:
            graph[v].append(u)
    return graph


# ---------- SOLVE ----------
def solve():
    r, c = map(int, input().strip().split())
    matrix = []
    for _ in range(r):
        rrr = input().strip()
        matrix.append(rrr)
    # print(*matrix)
    start_left = 999
    start_right = -999
    start_top = 999
    start_bottom = -999

    for i in range(r):
        for j in range(c):
            if matrix[i][j] == "#":
                start_top = min(start_top, i)
                start_bottom = max(start_bottom, i)
                start_left = min(start_left, j)
                start_right = max(start_right, j)
    # print(start_top,start_bottom,start_left,start_right)

    new_matrix = []
    for i in range(start_top, start_bottom+1):
        new_row = ""
        for j in range(start_left, start_right+1):
            new_row += matrix[i][j]
        new_matrix.append(new_row)
    # print(new_matrix)
    for row in range(len(new_matrix)):
        print(new_matrix[row])


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
