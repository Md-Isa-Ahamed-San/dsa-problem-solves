# -------------------------------
#  FAST PYTHON CP TEMPLATE
# -------------------------------

import sys

input = sys.stdin.readline

# ---------- CONSTANTS ----------
MOD = 10**9 + 7
INF = 10**18


# ---------- HELPER FUNCTIONS ----------


def ii():
    """Read two integers: a b"""
    return map(int, input().split())


def li():
    """Read list of integers"""
    return list(map(int, input().split()))


def yes():
    print("YES")


def no():
    print("NO")


def print_arr(arr):
    """Print array without brackets or commas"""
    print(*arr)


# ---------- SOLVE ----------
def solve():
    t = int(input())
    for _ in range(t):
        str_arr = list(input().strip())
        n = len(str_arr)
        ops = 0

        if str_arr[0] == "u":
            str_arr[0] = "s"
            ops += 1

        if str_arr[-1] == "u":
            str_arr[-1] = "s"
            ops += 1

        for i in range(n - 1):
            if str_arr[i] == "u" and str_arr[i + 1] == "u":
                str_arr[i + 1] = "s"
                ops += 1

        print(ops)
    


# ---------- MAIN ----------
if __name__ == "__main__":
    solve()
