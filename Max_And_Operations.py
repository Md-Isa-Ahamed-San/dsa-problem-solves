# --------------------------------
#  Problem : Max_And_Operations_Single_Array
#  Author  : Md Isa Ahamed San
#  Date    : 2026-03-04
# --------------------------------

import sys
import heapq

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

# ---------- SOLVE ----------
def solve():
    t = int(input().strip())
    for _ in range(t):
        # Input array size
        n = int(input().strip())
        # Input array elements
        arr = list_ints()

        # Max-heap for largest element first
        # Python heapq is min-heap, so use negative values
        heap = [-x for x in arr]
        heapq.heapify(heap)

        score = 0
        # Perform n-1 operations
        for _ in range(n-1):
            X = -heapq.heappop(heap)
            Y = -heapq.heappop(heap)

            # Add max(X, Y) to score
            score += max(X, Y)

            # Compute AND
            Z = X & Y

            # Push Z back to heap
            heapq.heappush(heap, -Z)

        print(score % MOD)

# ---------- MAIN ----------
def main():
    solve()

if __name__ == "__main__":
    main()