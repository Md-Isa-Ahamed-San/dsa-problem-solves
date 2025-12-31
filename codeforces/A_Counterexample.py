# -------------------------------
#  FAST PYTHON CP TEMPLATE
# -------------------------------

import sys

input = sys.stdin.readline

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
def is_even(x):
    return (x & 1) == 0


def is_odd(x):
    return (x & 1) == 1


def gcd(a, b):
    while b:
        a, b = b, a % b
    return a


def lcm(a, b):
    return a // gcd(a, b) * b


def ceil_div(a, b):
    return (a + b - 1) // b


# ---------- PRIME CHECK (NORMAL) ----------
def is_prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True


# ---------- SIEVE OF ERATOSTHENES ----------
def is_prime_sieve(n):
    is_prime_arr = [True] * (n + 1)
    is_prime_arr[0] = is_prime_arr[1] = False
    for i in range(2, int(n**0.5) + 1):
        if is_prime_arr[i]:
            for j in range(i * i, n + 1, i):
                is_prime_arr[j] = False
    return is_prime_arr


# ---------- PREFIX / SUFFIX ----------
def prefix_sum(arr):
    ps = [0]
    for x in arr:
        ps.append(ps[-1] + x)
    return ps


def suffix_sum(arr):
    ss = [0] * (len(arr) + 1)
    for i in range(len(arr) - 1, -1, -1):
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
    l, r = map(int, input().strip().split())
    for i in range(l, r - 1, 1):
        # print(i)
        if gcd(i, i + 1) == 1 and gcd(i + 1, i + 2) == 1 and gcd(i, i + 2) != 1:
            print(i, i + 1, i + 2)
            return
    print(-1)


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
