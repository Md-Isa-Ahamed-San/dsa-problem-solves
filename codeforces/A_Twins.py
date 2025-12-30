# -------------------------------
#  FAST PYTHON CP TEMPLATE
# -------------------------------

import sys

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
    n = int(input().strip())
    coins = list(map(int, input().strip().split()))
    coins.sort()
    coins.reverse()
    total_sum = sum(coins)
    f_member_money =0
    coin_took=0
    i = 0
    for i in range(n):
        f_member_money+=coins[i]
        coin_took+=1
        i+=1
        if f_member_money>total_sum//2:
            break
    print(coin_took)



# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
