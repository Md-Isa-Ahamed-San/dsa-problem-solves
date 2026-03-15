# --------------------------------
#  Problem : B_Longest_Divisors_Interval
#  Author  : Md Isa Ahamed San
#  Date    : 2026-03-12
# --------------------------------

import sys

input = sys.stdin.readline

MOD = 10**9 + 7
INF = 10**18


def ints():
    return map(int, input().split())


def list_ints():
    return list(map(int, input().split()))


def str_input():
    return input().strip()


def gcd(first, second):
    while second:
        first, second = second, first % second
    return first


def lcm(first, second):
    return first * second // gcd(first, second)


# ---------- SOLVE ----------
def solve():
    t = int(input())

    # Precompute LCM(1..k)
    lcm_list = [1]
    current_lcm = 1

    for i in range(1, 60):
        current_lcm = lcm(current_lcm, i)
        lcm_list.append(current_lcm)

    for _ in range(t):
        n = int(input())

        ans = 1
        for k in range(1, len(lcm_list)):
            if lcm_list[k] > n:
                break
            if n % lcm_list[k] == 0:
                ans = k

        print(ans)


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
