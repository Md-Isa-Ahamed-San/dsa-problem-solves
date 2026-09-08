import sys
import math
from collections import defaultdict, deque, Counter
from itertools import accumulate
import heapq

input = sys.stdin.readline

MOD = 10**9 + 7
INF = 10**18

def ints(): return map(int, input().split())
def list_ints(): return list(map(int, input().split()))
def str_input(): return input().strip()

def yes(): print('YES')
def no(): print('NO')
def out(arr): print(*arr)

def is_even(n): return (n & 1) == 0
def is_odd(n): return (n & 1) == 1

def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def lcm(a, b):
    return a // gcd(a, b) * b

def ceil_div(a, b):
    return (a + b - 1) // b

def is_prime(n):
    if n < 2: return False
    if n == 2: return True
    if n % 2 == 0: return False
    for d in range(3, int(n**0.5)+1, 2):
        if n % d == 0: return False
    return True

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


def solve():
    t = int(input().strip())
    for _ in range(t):
        n, k = map(int, input().strip().split())
        arr = list_ints()

        freq = [0] * (n + 1)
        for val in arr:
            freq[val] += 1

        valid = True
        for val in range(1, n + 1):
            if freq[val] % k != 0:
                print(0)
                valid = False
                break

        if not valid:
            continue

        quota = [freq[val] // k for val in range(n + 1)]

        cc = [0] * (n + 1)
        count = 0
        left = 0

        for i in range(n):
            num = arr[i]
            cc[num] += 1

            while cc[num] > quota[num]:
                cc[arr[left]] -= 1
                left += 1

            count += i - left + 1

        print(count)


def main():
    solve()

if __name__ == '__main__':
    main()