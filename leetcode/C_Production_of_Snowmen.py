# -------------------------------
#  FAST PYTHON CP TEMPLATE
# -------------------------------

import sys

input = sys.stdin.readline

# ---------- BASIC IO ----------
def list_input():
    return list(map(int, input().split()))

def simple_input():
    return input().strip()

# ---------- SOLVE ----------

def solve():
    # প্রথম লাইনে টেস্ট কেস সংখ্যা
    line = simple_input()
    if not line:
        return
    t = int(line)
    
    for _ in range(t):
        # n এর মান পড়া
        n_line = simple_input()
        if not n_line:
            break
        n = int(n_line)
        
        # তিনটি বেল্টের ডাটা পড়া
        a_belt = list_input()
        b_belt = list_input()
        c_belt = list_input()
        
        # ১. A এবং B এর মধ্যে বৈধ শিফট (Shift) বের করা
        # b_belt + b_belt করা হয়েছে মডুলাস (%) এড়ানোর জন্য
        b_doubled = b_belt + b_belt
        valid_ab_count = 0
        for shift in range(n):
            is_ok = True
            for i in range(n):
                # মাথা অবশ্যই বডির চেয়ে ছোট হতে হবে
                if a_belt[i] >= b_doubled[i + shift]:
                    is_ok = False
                    break
            if is_ok:
                valid_ab_count += 1
        
        # ২. B এবং C এর মধ্যে বৈধ শিফট বের করা
        c_doubled = c_belt + c_belt
        valid_bc_count = 0
        for shift in range(n):
            is_ok = True
            for i in range(n):
                # বডি অবশ্যই পায়ের চেয়ে ছোট হতে হবে
                if b_belt[i] >= c_doubled[i + shift]:
                    is_ok = False
                    break
            if is_ok:
                valid_bc_count += 1
        
        # মোট কম্বিনেশন = n * (A-B shifts) * (B-C shifts)
        print(n * valid_ab_count * valid_bc_count)

# ---------- MAIN ----------
def main():
    solve()

if __name__ == "__main__":
    main()