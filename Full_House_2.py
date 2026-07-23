# --------------------------------
#  Problem : Full_House_2
#  Author  : Md Isa Ahamed San
#  Date    : 2026-07-23
# --------------------------------



# ---------- SOLVE ----------
def solve():
    a, b, c, d = map(int, input().strip().split())
    s = set([a, b, c, d])
    if len(s) == 2:
        print("Yes")
    else:
        print("No")


# ---------- MAIN ----------
def main():
    solve()


if __name__ == "__main__":
    main()
