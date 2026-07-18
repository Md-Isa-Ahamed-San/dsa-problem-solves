h,w=map(int,input().strip().split())
h=h/100.00
if w/(h*h)>=25.00:
  print("Yes")
else:
  print("No")