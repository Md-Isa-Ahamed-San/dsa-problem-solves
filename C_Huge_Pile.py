t = int(input())
for _ in range(t):
    start_pile, target_apples = map(int, input().split())

    time_taken = 0
    left = target_apples
    right = target_apples
    possible = True
    while True:
        
        if start_pile >= left and start_pile <= right:
            # print(start_pile,left,right)
            break
        if start_pile < left:
            # print("brea: ",start_pile,left)
            possible = False
            break
        left = left * 2 - 1
        right = right * 2 + 1
        time_taken += 1

    if possible:
        print(time_taken)
    else:
        print(-1)
