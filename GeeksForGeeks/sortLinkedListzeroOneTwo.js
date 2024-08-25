function segregateZeroOneTwo(head) {
    let current = head;
    let tempOneHead = new Node(-1);
    let currOne = tempOneHead;
    let tempTwoHead = new Node(-1);
    let currTwo = tempTwoHead;
    let tempZeroHead = new Node(-1);
    let currZero = tempZeroHead;
    while (current) {
      if (current.val === 0) {
        currZero.next = current;
        currZero = current;
      }
      if (current.val === 1) {
        currOne.next = current;
        currOne = current;
      }
      if (current.val === 2) {
        currTwo.next = current;
        currTwo = current;
      }
      current = current.next;
    }
    currZero.next = tempOneHead.next ? tempOneHead.next : tempTwoHead.next;
    currOne.next = tempTwoHead.next;
    currTwo.next = null;
    return tempZeroHead.next;
  }