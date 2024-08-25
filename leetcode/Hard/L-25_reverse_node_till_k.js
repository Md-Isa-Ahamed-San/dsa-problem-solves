var getKthNode = (head, k) => {
  let i = 1;
  while (i < k && head !== null) {
    head = head.next;
    i++;
  }
  return head;
};

function reverseLinkedList(head) {
  let temp = head;
  let prev = null;
  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}
var reverseKGroup  = (head, k) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    let kthNode = getKthNode(current, k);
    if (kthNode === null) {
      if (prev) {
        prev.next = current;
    }
    break;
    }
    let nextNode = kthNode.next;
    kthNode.next = null;
    reverseLinkedList(current);
    if(current===head){
      head = kthNode;
    }
    else{
      prev.next = kthNode;
    }
    prev=current;
    current =nextNode;
  }
  console.log(head)
  return head;
};
