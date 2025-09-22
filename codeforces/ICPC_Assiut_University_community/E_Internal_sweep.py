def solve():
    a, b = map(int, input().split())
    if a==0 and b==0:
        print("NO")
        return
    if a == b or abs(a - b) == 1:
        print("YES")
    else:
        print("NO")
 
if __name__ == "__main__":
    solve()
