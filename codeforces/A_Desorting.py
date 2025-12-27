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
import math
def solve():
    t = int(input())
    for _ in range(t):
        # Example reading:
        n= int(input())
        arr = li()
        min_diff = INF
        not_sorted = False

        for idx in range(1,len(arr),1):
            if arr[idx-1]>arr[idx]:
                not_sorted = True
                break
            min_diff = min(min_diff, arr[idx]-arr[idx-1])
        if not_sorted:
            print(0)
        elif min_diff ==0:
            print(1)
        else:
            # print(min_diff)
            print(min_diff//2 + 1)


# ---------- MAIN ----------
if __name__ == "__main__":
    solve()
