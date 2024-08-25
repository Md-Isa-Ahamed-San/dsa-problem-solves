class Node {
  constructor(data, next) {
    this.value = data;
    this.next = null;
  }
}

class Solution {
  insertAtBegining(head, newData) {
    let node = new Node(newData);
    node.next = head;

    return node;
  }
  //Function to insert a node at the end of the linked list.
  insertAtEnd(head, newData) {
    let node = new Node(newData);
    if (head === null) head = node;
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    return head;
  }

  constructLL(arr) {
    let head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
      let newNode = new Node(arr[i]);
      current.next = newNode;
      current = current.next;
    }
    return head;
  }
}

const ssl = new Solution();
// console.log(ssl.constructLL([1, 2, 3, 4, 5]));
console.log(ssl.insertAtEnd(ssl.constructLL([1, 2, 3, 4, 5]), 99));
// console.log(ssl.pushByArr([1,2,3,4,5]))
// console.dir(ssl.pushByArr([1,2,3,4,5]), { depth: null });
