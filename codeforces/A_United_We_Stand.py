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
        # Example reading:
        n= int(input())
        arr = li()
        b=[]
        c=[]
        m=min(arr)
        for num in arr:
            if num ==m:
                b.append(num)
            else:
                c.append(num)
        if len(b)==0 or len(c)==0:
            print(-1)
        else:
            print(len(b),len(c))
            print(*b)
            print(*c)


# ---------- MAIN ----------
if __name__ == "__main__":
    solve()
