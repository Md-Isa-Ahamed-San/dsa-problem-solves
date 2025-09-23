
eyes, mouths, body = map(int, input().split())

minVal = min(eyes, mouths, body)
ans = minVal

eyes -= minVal
mouths -= minVal
body -= minVal

if eyes == 0 or body == 0:
    print(ans)
elif mouths == 0 and body * 2 <= eyes:
    # If no mouths left, but we have enough eyes (2 per body),
    # we can use bodies + 2 eyes to make more creatures
    print(ans + body)
elif mouths == 0 and body * 2 > eyes:
    # If no mouths, but not enough eyes for all bodies,
    # we can only use eyes in pairs to form creatures
    print(ans + eyes // 2)
