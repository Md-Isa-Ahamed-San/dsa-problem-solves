import sys
input = sys.stdin.readline

def solve():
    t_str = input().strip()
    if not t_str: return
    t = int(t_str)
    
    for _ in range(t):
        n = int(input())
        a = list(map(int, input().split()))
        
        if n == 1: # Though n >= 2 per constraints
            print(0)
            continue

        # Calculate the sum of a[k+1...n-1] suffix
        # We'll use a suffix sum to get -sum(a[k+1:]) efficiently
        suffix_sum = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            suffix_sum[i] = suffix_sum[i+1] + a[i]
            
        # V1: a[0] is survivor
        max_x = -suffix_sum[1]
        
        # V_k: a[k] is survivor (0-indexed k)
        # current_abs_sum stores sum(|a[1]...a[k-1]|)
        current_abs_sum = 0
        for k in range(1, n):
            # Formula: a[0] + sum(|a[1...k-1]|) - sum(a[k+1...n-1])
            val = a[0] + current_abs_sum - suffix_sum[k+1]
            if val > max_x:
                max_x = val
            
            # Update abs sum for the next k
            current_abs_sum += abs(a[k])
            
        print(max_x)

solve()