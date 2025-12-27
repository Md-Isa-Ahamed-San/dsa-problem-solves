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
        ans_arr=[]
        ans_arr.append(arr[0])
        for idx in range(1,len(arr),1):
            if arr[idx]<arr[idx-1]:
                ans_arr.append(arr[idx])
            ans_arr.append(arr[idx])
            
        print(len(ans_arr))
        print(*ans_arr)


# ---------- MAIN ----------
if __name__ == "__main__":
    solve()
