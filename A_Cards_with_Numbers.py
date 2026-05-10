# --------------------------------
#  Problem : A_Cards_with_Numbers
#  Author  : Md Isa Ahamed San
#  Date    : 2026-05-10
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

sys.stdin = open('input.txt', 'r')
sys.stdout = open('output.txt', 'w')

input = sys.stdin.readline

# ---------- SOLVE ----------
def solve():
    n = int(input().strip())
    arr = list(map(int, input().strip().split()))
    sorted_arr = sorted(arr)
    for i in range(1, (n * 2), 2):
        if i < (n * 2) and sorted_arr[i] != sorted_arr[i - 1]:
            print(-1)
            return
    index_map = {}
    for idx, val in enumerate(arr):
        if val not in index_map:
            index_map[val] = [idx + 1]
            # print(index_map[val])
        else:
            index_map[val].append(idx + 1)
            # print(index_map[val])
    for val in index_map.values():
        # print(val)
        val_arr_len = len(val)
        if val_arr_len == 2:
            print(*val)
        else:
            for i in range(0, val_arr_len - 1, 2):
                print(val[i], val[i + 1])


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
