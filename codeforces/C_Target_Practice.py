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
        matrix = [input().strip() for _ in range(10)]
        ans = 0
        
        for i in range(10):
            for j in range(10):
                if matrix[i][j] == "X":
                    ans += min(i + 1, j + 1, 10 - i, 10 - j)
        
        print(ans)


# ---------- MAIN ----------
if __name__ == "__main__":
    solve()
