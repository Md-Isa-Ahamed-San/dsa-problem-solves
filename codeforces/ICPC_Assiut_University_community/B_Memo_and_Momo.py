def solve(a,b,k):
    if a%k == 0 and b%k==0:
        print("Both")
    elif a%k ==0 and b%k!=0:
        print("Memo")
    elif b%k ==0 and a%k!=0:
        print("Momo")
    else:
        print("No One")


a,b,k = map(int,input().split())
solve(a,b,k)