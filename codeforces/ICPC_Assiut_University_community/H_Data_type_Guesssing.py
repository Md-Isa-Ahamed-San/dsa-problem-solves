n, k, a = map(int, input().split())
numerator = n * k
if numerator % a != 0:
    print("double")
else:
    res = numerator // a

    if -2147483648 <= res <= 2147483647:
        print("int")
    else:
        print("long long")
