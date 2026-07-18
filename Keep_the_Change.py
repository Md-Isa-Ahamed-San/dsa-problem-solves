t = int(input().strip())
total=0
for _ in range(t):
  val,pay,status = map(str,input().strip().split())
  if status=="keep" and int(pay)>int(val):
    total+= int(pay)-int(val)

print(total)