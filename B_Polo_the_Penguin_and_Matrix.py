n, m, d = map(int, input().split())

arr = []

for _ in range(n):
    arr.extend(map(int, input().split()))

remainder = arr[0] % d

for x in arr:
    if x % d != remainder:
        print(-1)
        exit()

arr.sort()
target = arr[len(arr) // 2] # getting the mid value which we will try to make all value

moves = 0

for x in arr:
    moves += abs(x - target) // d

print(moves)
