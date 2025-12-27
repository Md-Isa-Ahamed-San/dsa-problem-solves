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
        n = int(input())
        arr = list(map(int, input().split()))
        
        odd_count = sum(x % 2 for x in arr)
        
        if odd_count % 2 == 0:
            print("YES")
        else:
            print("NO")


# ---------- MAIN ----------
if __name__ == "__main__":
    solve()
