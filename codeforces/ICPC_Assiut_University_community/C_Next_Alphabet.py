def next_alphabet(alphabet):
    if alphabet == "z":
        print("a")
    else:
        print(chr(ord(alphabet) + 1))

alphabet = input()
next_alphabet(alphabet)