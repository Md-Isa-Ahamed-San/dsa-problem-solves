let reverseLinkedList = head => {
  let current = head;
  let prev = null;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

let LinkedListAdd1 = head => {
  let reverseListHead = reverseLinkedList(head);
  let current = reverseListHead;
  let newhead = reverseListHead;
  while (current) {
    let carry = Math.floor(current.data + 1) / 10;
    current.data = (current.data + 1) % 10;
    if (carry === 1 && current.next === null) {
      let newNode = new Node(1);
      current.next = newNode;
      break;
    }
    current = current.next;
  }
  return reverseLinkedList(newhead);
};

//recursive method
function handleSum(node) {
  let current = node;
  if (current === null) return 0;
let carry;
  if (current) {
    carry = this.handleSum(current.next);
  }
  if (current.next?.data === 0 || current.next === null) {
    current.data + 1 === 10 ? (current.data = 0) : (current.data += 1);
  }

  return carry;
}

function addOne(node) {
  let head = node;

  let carry = handleSum(head);
  if(carry ===0){
let newHead = new Node(1)
newHead.next = head;
  }
  return newHead;
}

// 6, 5, 4, 2, 9, 9, 9;

// 9, 9, 9, 2, 4, 5, 6;

// 6, 5, 4, 3, 0, 0, 0;
