# --------------------------------
#  Problem : B_Coins
#  Author  : Md Isa Ahamed San
#  Date    : 2026-03-01
# --------------------------------

import sys

# ---------- FAST IO / PyPy Optimization ----------
input = sys.stdin.readline
# Uncomment next line if using PyPy for faster input/output
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
def is_even(number):
    return (number & 1) == 0


def is_odd(number):
    return (number & 1) == 1


def gcd(first, second):
    while second:
        first, second = second, first % second
    return first


def lcm(first, second):
    return first // gcd(first, second) * second


def ceil_div(numerator, denominator):
    return (numerator + denominator - 1) // denominator


# ---------- PRIME CHECK ----------
def is_prime(value):
    if value < 2:
        return False
    if value == 2:
        return True
    if value % 2 == 0:
        return False
    for divisor in range(3, int(value**0.5) + 1, 2):
        if value % divisor == 0:
            return False
    return True


# ---------- SIEVE ----------
def prime_list_sieve(limit):
    prime_flags = [True] * (limit + 1)
    prime_flags[0] = prime_flags[1] = False
    for base in range(2, int(limit**0.5) + 1):
        if prime_flags[base]:
            for multiple in range(base * base, limit + 1, base):
                prime_flags[multiple] = False
    return prime_flags


# ---------- PREFIX / SUFFIX ----------
def prefix_sum(arr):
    prefix = [0]
    for value in arr:
        prefix.append(prefix[-1] + value)
    return prefix


def suffix_sum(arr):
    size = len(arr)
    suffix = [0] * (size + 1)
    for index in range(size - 1, -1, -1):
        suffix[index] = suffix[index + 1] + arr[index]
    return suffix


# ---------- BINARY SEARCH ----------
def lower_bound(arr, target):
    left, right = 0, len(arr)
    while left < right:
        mid = (left + right) // 2
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left


def upper_bound(arr, target):
    left, right = 0, len(arr)
    while left < right:
        mid = (left + right) // 2
        if arr[mid] <= target:
            left = mid + 1
        else:
            right = mid
    return left


# ---------- SOLVE ----------
def solve():
    arr = []

    for _ in range(3):
        s = input().strip()
        # sob gula ke "<" format e convert
        if s[1] == ">":
            s = s[2] + "<" + s[0]
        arr.append(s)

    left_count = {}
    right_count = {}

    for s in arr:
        left = s[0]
        right = s[2]

        left_count[left] = left_count.get(left, 0) + 1
        right_count[right] = right_count.get(right, 0) + 1

    letters = ["A", "B", "C"]

    smallest = ""
    largest = ""

    for ch in letters:
        l = left_count.get(ch, 0)
        r = right_count.get(ch, 0)

        # jodi kono letter er count 2 er beshi hoy → impossible
        if l > 2 or r > 2:
            print("Impossible")
            return

        if l == 2:
            smallest = ch
        if r == 2:
            largest = ch

    # jodi smallest ba largest na pai → impossible
    if smallest == "" or largest == "":
        print("Impossible")
        return

    # middle ber kora
    middle = ""
    for ch in letters:
        if ch != smallest and ch != largest:
            middle = ch

    print(smallest + middle + largest)


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
