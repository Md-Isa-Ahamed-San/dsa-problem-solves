s = input().strip()
l = len(s)
w = 0
for char in s:
    if char == "W":
        w += 1
if l - w > w:
    print("East")
else:
    print("West")
