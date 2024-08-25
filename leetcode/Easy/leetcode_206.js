var reverseList = function(head) {
    let prev = null;
    let node = head;
    while (node !== null) {
        const next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return prev;
};

reverseList(sll)
