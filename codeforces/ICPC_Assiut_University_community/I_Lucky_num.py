num = int(input())
left = num//10
right = num % 10
if left % right == 0 or right % left == 0:
    print("YES")
else:
    print("NO")