reverseDLL(head){
    let current = head;
    let prevNode = null;
    let nextNode = current.next;
    while(current){
        nextNode = current.next;
        current.next = prevNode;
        current.prev = nextNode;
        prevNode = current;
        current = nextNode;
    }
    return prevNode
}