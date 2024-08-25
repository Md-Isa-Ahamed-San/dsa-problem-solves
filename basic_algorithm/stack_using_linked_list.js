class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    newNode.next = null;

    this.length++;
  }
  pop() {
    if (this.length == 0) return undefined;
if(this.length ==1) {
    this.head = null;
    this.tail = null;
    this.length--;
    return this
}
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    this.tail = current;
    current.next = null;
    this.length--;
    console.log("current: ", current);
  }
}
const sll = new stack();
sll.push(1);
// sll.push(2);
// sll.push(3);
// sll.push(4);
sll.pop();
console.log(sll);
