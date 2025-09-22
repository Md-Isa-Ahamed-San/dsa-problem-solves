def solve(a, b, c, d):
    if a+b-c == d or a-b+c == d or (a*b)+c == d or a*(b+c) == d  or a+(b*c) == d or (a+b)*c == d or a-(b*c) == d or (a-b)*c or (a*b)-c ==d or a*(b-c)==d:
        print("YES")
    else:
        print("NO")

a, b, c, d = map(int, input().split())
solve(a, b, c, d)




# *-