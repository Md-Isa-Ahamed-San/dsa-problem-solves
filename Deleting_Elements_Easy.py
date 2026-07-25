# --------------------------------
#  Problem : Deleting_Elements_Easy
#  Author  : Md Isa Ahamed San
#  Date    : 2026-07-23
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
def check_deletable(arr, pair, left_sum, right_sum):
    left = pair[0]
    right = pair[1]
    possible = True

    for m in range(left + 1, right):
        l_part = left_sum[m - 1] - (left_sum[left - 1] if left > 0 else 0)
        r_part = right_sum[m + 1] - (
            right_sum[right + 1] if right + 1 < len(right_sum) else 0
        )
        if arr[m] > l_part + r_part:
            possible = False
            break
    return possible


def solve():
    t = int(input().strip())
    for _ in range(t):
        n = int(input().strip())
        arr = list_ints()
        sub_arr = []
        left_sum = []
        right_sum = []
        l_s = 0
        r_s = 0

        for i in range(len(arr)):
            l_s += arr[i]
            left_sum.append(l_s)
        for i in range(len(arr) - 1, -1, -1):
            r_s += arr[i]
            right_sum.append(r_s)

        right_sum.reverse()
        for i in range(n):
            arr_2 = []
            for j in range(i, n):
                # print(arr[j])
                arr_2.append(arr[j])
                sub_arr.append([i, j])
        count = 0

        for item in sub_arr:
            if item[1] - item[0] >= 2:
                # print(item)
                possible = check_deletable(arr, item, left_sum, right_sum)
                # print(possible)
                if possible:
                    count += 1
                    # print(item)
            else:
                # print(item)
                count += 1
        print(count)


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
