
# ---------- SOLVE ----------
def solve():
    t = int(input().strip())
    for _ in range(t):
        n = int(input().strip())
        if n==3:
            print(3)
        else:
            print(2)

# ---------- MAIN ----------
def main():
    solve()

if __name__ == '__main__':
    main()