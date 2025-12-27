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
        target,range_of_nums,forbidden_num = ii()
        if forbidden_num!=1:
            yes()
            print(target)
            print(*([1] * target))
        else:
            if range_of_nums==1:
                no()
             # 1 is forbidden so now we have to take care for range about numbers
            elif range_of_nums==2:
                # now if target is even then yes or its no
                if target%2==0:
                    yes()
                    print((target//2))
                    print(*([2] * (target//2)))
                else:
                    no()
            else: #range is more than 2
                if target%2==0:
                    yes()
                    print((target//2))
                    print(*([2] * (target//2)))
                else:
                    arr = [2]*(target//2 - 1) + [3]
                    yes()
                    print(len(arr))
                    print(*arr)


            
        



# ---------- MAIN ----------
if __name__ == "__main__":
    solve()
