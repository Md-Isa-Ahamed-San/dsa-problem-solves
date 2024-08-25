class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class doubly_linked_list {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      newNode.next = null;
      this.tail = newNode;
      this.length++;
    }
    return this.head;
  }
}
function addNode(head, pos, data) {
  let current = head;
  while (pos--) {
    current = current.next;
  }
  let newNode = new Node(data);
  newNode.next = current.next;

  current.next = newNode;
  newNode.prev = current;
  return head;
}
function deleteNode(head, x) {
  let count = x - 1;
  let current = head;
  while (count--) {
    current = current.next;
  }
  if (current.prev) {
    current.prev.next = current.next;
  }

  if (current.next) {
    current.next.prev = current.prev;
  }

  return head;
}

let dll = new doubly_linked_list();
dll.push(6);
dll.push(4);
dll.push(2);
dll.push(9);
dll.push(1);
dll.push(7);
// console.dir(dll, { depth: null });

