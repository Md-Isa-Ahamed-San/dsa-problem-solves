import sys


def solve():
    input_data = sys.stdin.read().split()
    if not input_data:
        return

    t = int(input_data[0])
    idx = 1
    results = []

    for _ in range(t):
        s = int(input_data[idx])
        k = int(input_data[idx + 1])
        m = int(input_data[idx + 2])
        idx += 3

        n_flips = m // k
        remaining_time_after_last_flip = m % k

        if s <= k:
            sand_in_top_after_flips = s
        else:
            if n_flips % 2 == 0:
                sand_in_top_after_flips = s
            else:
                sand_in_top_after_flips = k

        ans = max(0, sand_in_top_after_flips - remaining_time_after_last_flip)
        results.append(str(ans))

    sys.stdout.write("\n".join(results) + "\n")


if __name__ == "__main__":
    solve()
