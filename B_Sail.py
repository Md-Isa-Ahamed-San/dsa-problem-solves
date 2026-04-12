# --------------------------------
#  Problem : B_Sail
#  Author  : Md Isa Ahamed San
#  Date    : 2026-04-11
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
    n, x0, y0, x1, y1 = map(int, input().strip().split())
    s = input().strip()
    freq = {}
    for char in s:
        freq[char] = freq.get(char, 0) + 1
    x_diff = abs(x1 - x0)
    y_diff = abs(y1 - y0)
    # print(freq)
    no_ans = False
    x = ""
    y = ""
    # print("xdiff,ydiff: ", x_diff, y_diff)
    if x0 > x1:  # have to go to west which will deduct 1 of x
        if freq.get("W", 0) and freq["W"] < abs(x_diff):
            no_ans = True
        else:
            x = "W"
        # count W in string. if not enough W then ans is -1
    else:  # boat will go to east which will increase x by 1
        # count E in string. if not enough E then ans is -1
        if freq.get("E", 0) and freq["E"] < abs(x_diff):
            no_ans = True
        else:
            x = "E"

    if y0 > y1:
        if freq.get("S", 0) and freq["S"] < abs(y_diff):
            no_ans = True
        else:
            y = "S"
    else:
        if freq.get("N", 0) and freq["N"] < abs(y_diff):
            no_ans = True
        else:
            y = "N"
    # print(x.strip(), y.strip(), s.rfind(x.strip()), s.rfind(y.strip()), no_ans)
    if no_ans:
        print(-1)
        return
    else:
        # print("gg")
        X = x_diff
        Y = y_diff
        for idx, char in enumerate(s):
            # print(X,Y)

            if char == x.strip() and X > 0:
                X -= 1
            elif char == y.strip() and Y > 0:
                Y -= 1
            if X == 0 and Y == 0:
                print(idx + 1)
                return

        # print(max(s.rfind(x.strip()), s.rfind(y.strip())) + 1)
        print(-1)
        return


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
