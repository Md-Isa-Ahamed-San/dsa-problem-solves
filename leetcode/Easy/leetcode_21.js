class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}
class single_linked_list {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    newNode.next = null;
    newNode.val = val;
    this.length++;
    return newNode;
  }
}
var mergeTwoLists = function (list1, list2) {
    const newLL = new single_linked_list();
    // console.log(list1,list2)
    let current1 = list1.head;
    // console.log("🚀 ~ mergeTwoLists ~ node1:", node1.head);
    let current2 = list2.head;
    // console.log("🚀 ~ mergeTwoLists ~ node2:", node2.head);
  
    while (current1 !== null && current2 !== null) {
      if (current1.val < current2.val) {
        newLL.push(current1.val);
        current1 = current1.next;
      } else {
        newLL.push(current2.val);
        current2 = current2.next;
      }
    }
    while (current1) {
      newLL.push(current1.val);
      current1 = current1.next;
    }
    while (current2) {
      newLL.push(current2.val);
      current2 = current2.next;
    }
  
    // console.log("the newLinkedList: ", newLL);
    return newLL
  };
const sll = new single_linked_list();
sll.push(1);
sll.push(2);
sll.push(7);
const sll2 = new single_linked_list();
sll2.push(3);
sll2.push(5);
sll2.push(6);
console.log(sll, sll2);
mergeTwoLists(sll, sll2);
