def list_operations():
    N = int(input())
    list1 = []
    for i in range(N):
        operations = input()
        operations = operations.split()
        if operations[0] == "insert":
            operations[1] = int(operations[1])
            operations[2] = int(operations[2])
            list1.insert(operations[1], operations[2])
        elif operations[0] == "print":
            print(list1)
        elif operations[0] == "remove":
            operations[1] = int(operations[1])
            list1.remove(operations[1])
        elif operations[0] == "append":
            operations[1] = int(operations[1])
            list1.append(operations[1])
        elif operations[0] == "sort":
            list1.sort()
        elif operations[0] == "pop":
            list1.pop()
        elif operations[0] == "reverse":
            list1.reverse()


list_operations()
