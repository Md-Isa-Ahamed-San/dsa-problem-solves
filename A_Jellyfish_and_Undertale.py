import sys
import math

input = sys.stdin.readline

MOD = 10**9 + 7
INF = 10**18


def ints():
    return map(int, input().split())


def list_ints():
    return list(map(int, input().split()))


def str_input():
    return input().strip()


DEBUG = False


def debug(*args, **kwargs):
    if DEBUG:
        print(*args, **kwargs, file=sys.stderr)


def yes():
    print("YES")


def no():
    print("NO")


def out(arr):
    print(*arr)


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


def prime_list_sieve(limit):
    prime_flags = [True] * (limit + 1)
    prime_flags[0] = prime_flags[1] = False
    for base in range(2, int(limit**0.5) + 1):
        if prime_flags[base]:
            for multiple in range(base * base, limit + 1, base):
                prime_flags[multiple] = False
    return prime_flags


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


def solve():
    test_cases = int(input())
    for _ in range(test_cases):
        max_timer, initial_timer, num_tools = ints()
        tool_values = list_ints()

        total_time = initial_timer
        for tool_value in tool_values:
            total_time += min(tool_value, max_timer - 1)

        print(total_time)


def main():
    solve()


if __name__ == "__main__":
    main()
