import sys

def solve():
    # ইনপুট থেকে টেস্ট কেস সংখ্যা পড়া
    try:
        line = sys.stdin.readline()
        if not line:
            return
        t = int(line.strip())
    except ValueError:
        return

    for _ in range(t):
        # প্রতিটি স্ট্রিং পড়া
        s = sys.stdin.readline().strip()
        if not s:
            continue
        
        # স্ট্রিং-এ 'Y' এর সংখ্যা গণনা করা
        y_count = s.count('Y')
        
        # যদি 'Y' এর সংখ্যা ১ বা তার কম হয় তবে YES, নাহলে NO
        if y_count <= 1:
            print("YES")
        else:
            print("NO")

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
