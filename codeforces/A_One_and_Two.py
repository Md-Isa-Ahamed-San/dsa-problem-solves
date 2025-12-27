# -------------------------------
#  FAST PYTHON CP TEMPLATE
# -------------------------------

import sys

# Increase recursion depth for deep DP/DFS if needed
sys.setrecursionlimit(2000)
input = sys.stdin.readline

# ---------- CONSTANTS ----------
MOD = 10**9 + 7
INF = 10**18

# ---------- BASIC IO ----------
def int_inputs():
    return map(int, input().split())

def list_inputs():
    return list(map(int, input().split()))

def simple_input():
    return input().strip()

# ---------- COMMON PRINTS ----------
def yes():
    print("YES")

def no():
    print("NO")

def print_arr(arr):
    print(*arr)

# ---------- SOLVE ----------
def solve():
    # Read number of test cases
    line = input().strip()
    if not line:
        return
    t = int(line)
    
    for _ in range(t):
        n = int(input())
        arr = list_inputs()
        if arr[0] == arr[-1]:
            no()
        else:
            yes()
            res = [arr[-1]] + arr[:-1] # putting last element to first. 
            #so making a new arr where first element is arrays last element
            #+ arrays all element except last element
            print_arr(res)

# ---------- MAIN ----------
def main():
    solve()

if __name__ == "__main__":
    main()