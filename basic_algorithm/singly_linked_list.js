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

    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;

    // if(this.length === 0) return undefined;
    let current = this.head;
    let newTail = this.head;
    let removedNode = null;
    while (current.next) {
      newTail = current;
      current = current.next;
      console.log("new tail :", newTail);
    }
    removedNode = current;
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // console.log(removedNode)
    return removedNode;
  }
  //remove from beginning
  shift() {
    if (this.length === 0) return undefined;
    let removedValueFromBeginning = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    console.log("the removed value ", removedValueFromBeginning);
    return removedValueFromBeginning;
  }
  //adding element to beginning
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }

    return this;
  }
  //geting an element by its index
  get(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (index === currentIndex) {
        console.log(currentNode);

        return currentNode;
      }
      currentNode = currentNode.next;
      currentIndex++;
      // console.log(currentNode)
    }
    console.log(undefined);
    return undefined;
  }
  set(index, value) {
    let indexedNode = this.get(index);
    if (indexedNode) {
      indexedNode.val = value;
      // console.log(indexedNode);
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);
    let currentNode = this.head;
    let currentIndex = 1;
    //currentIndex should be 1 instead of 0. so i can stop before the inserted index. if i set currentIndex to 0 the i have to compare if(currentIndex == index-1 <---)
    while (currentNode) {
      if (currentIndex === index) {
        let newInsertedNode = new Node(value);
        newInsertedNode.next = currentNode.next;
        currentNode.next = newInsertedNode;
        this.length++;
        return newInsertedNode;
      }
      //do something
      currentNode = currentNode.next;
      currentIndex++;
    }
    return undefined;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const theIndex = this.get(index - 1);
    console.log("the index is ", theIndex);
    if (theIndex) {
      let removedNode = theIndex.next;
      theIndex.next = removedNode.next;
      this.length--;
      console.log("removed NOde: ", removedNode);
    }
  }
  reverse() {
    if (this.length == 1) {
      return this;
    }

    let node = this.head;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
  }

  reverseList() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    console.dir(prev, { depth: null });
  }
  isPalindrome() {
    let slow = this.head;
    let fast = this.head;
    let current = this.head;
    while (fast) {
      fast = fast.next;
      if (fast?.next) {
        fast = fast.next;
        slow = slow.next;
      }
    }
    let reversedSecHalf = reverseRecursion(slow?.next);
    console.log(reversedSecHalf);
    while (reversedSecHalf) {
      if (reversedSecHalf.val !== current.val) {
        return false;
      } else {
        reversedSecHalf = reversedSecHalf.next;
        current = current.next;
      }
    }
    // console.dir(slow, { depth: null });
    return true;
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

  console.log("the newLinkedList: ", newLL);
};
let reverseRecursion = head => {
  if (head === null || head?.next === null) {
    return head;
  }

  let newHead = reverseRecursion(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;
  return newHead;

  // console.log(head);
};
var mergeTwoLists = function (list1, list2) {
  let current1 = list1;
  let current2 = list2;
  let node = new ListNode();
  let head = node;

  while (current1 !== null && current2 !== null) {
    if (current1.val <= current2.val) {
      head.next = current1;
      current1 = current1.next;
    } else {
      head.next = current2;
      current2 = current2.next;
    }
    head = head.next;
  }
  if (current1 !== null) {
    head.next = current1;
  } else {
    head.next = current2;
  }

  return node.next;
};
var middleNode = function (head) {
  if (head === null || head.next === null) return head;
  let slow = head;
  let fast = head.next; //by starting fast from 2nd node will make the slow pointer to middle left side of even list.
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
function sortList(head) {
  if (head === null || head.next === null) return head;
  let left = head;
  let mid = middleNode(head);
  let right = mid.next;
  mid.next = null;
  let leftHead = sortList(left);
  let rightHead = sortList(right);
  return mergeTwoLists(leftHead, rightHead);
}
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
var addTwoNumbers = function (l1, l2) {
  // console.log(l1,l2)
  let c1 = l1;
  let c2 = l2;
  let carry = 0;
  let head = new Node(-1);
  let current = head;
  while (c1 && c2) {
    let val = (c1.val + c2.val + carry) % 10;
    carry = Math.floor((c1.val + c2.val + carry) / 10);
    let node = new Node(val);
    current.next = node;
    current= current.next
    c1 = c1.next;
    c2 = c2.next;
  }
  while (c1) {
    let val = (c1.val + carry) % 10;
    carry = Math.floor((c1.val + carry) / 10);
    let node = new Node(val);
    current.next = node;
    current= current.next
    c1 = c1.next;
  }
  while (c2) {
    let val = (c2.val + carry) % 10;
    carry = Math.floor((c2.val + carry) / 10);
    let node = new Node(val);
    current.next = node;
    current= current.next
    c2 = c2.next;
  }
  if (carry === 1) {
    let node = new Node(1);
    current.next = node;
  }
  return head;
};

const sll = new single_linked_list();
sll.push(9);
sll.push(9);
sll.push(9);
sll.push(9);
sll.push(9);
const sll2 = new single_linked_list();
sll2.push(9);
sll2.push(9);
sll2.push(9);

console.dir(addTwoNumbers(sll, sll2),{depth:null});
// sll.push(5);
// console.log(isPalindrome(sll));
// console.log(sll.isPalindrome());
// const sll2 = new single_linked_list();
// sll2.push(3);
// sll2.push(5);
// sll2.push(6);
// console.log(sll, sll2);
// mergeTwoLists(sll, sll2);
// sll.push(4);
// sll.push("shan2");
// sll.shift()
// sll.shift()
// sll.shift()
// sll.pop();
// sll.pop();
// sll.pop();
// sll.unshift("third")
// sll.unshift("second")
// sll.unshift("first")
// sll.get(2);
// console.log(sll);
// sll.set(2, "isa");
// sll.insert(1,"inbetween")
// sll.remove(3);
// sll.reverse();
// console.log("the Linked list:\n", sll);
//
