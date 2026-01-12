
t = int(input())
for _ in range(t):
    current_pile, target_apples = map(int, input().split())

    if target_apples > current_pile:
        print(-1)
        continue

    time_taken = 0

    while current_pile > target_apples:
        left_pile = current_pile // 2
        right_pile = current_pile - left_pile  # same as ceil

        if target_apples <= left_pile:
            current_pile = left_pile
        elif target_apples <= right_pile:
            current_pile = right_pile
        else:
            print(-1)
            break

        time_taken += 1
    else:
        print(time_taken)
