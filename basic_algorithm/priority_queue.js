class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class priority_queue {
  constructor() {
    // this.heapArr = [41, 39, 33, 18, 27, 12];
    this.heapArr = [];
  }
  insertMaxHeap(value,priority) {
    let newNode = new Node(value,priority)
    this.heapArr.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let newItemIdx = this.heapArr.length - 1;
    while (true) {
      let newItemValue = this.heapArr[newItemIdx];
      let parentIdx = Math.floor(newItemIdx / 2) - 1;
      if (parentIdx < 0) parentIdx = 0;
      let parentValue = this.heapArr[parentIdx];
      if (newItemValue.priority >= parentValue.priority) {
        break;
      }
      [this.heapArr[newItemIdx], this.heapArr[parentIdx]] = [
        this.heapArr[parentIdx],
        this.heapArr[newItemIdx],
      ];
      newItemIdx = parentIdx;
    }
    console.log(this.heapArr);
  }
}
const pq = new priority_queue();
pq.insertMaxHeap(39,1);
pq.insertMaxHeap(41,2);
pq.insertMaxHeap(18,3);
pq.insertMaxHeap(33,4);
pq.insertMaxHeap(12,5);
pq.insertMaxHeap(27,6);
pq.insertMaxHeap(55,7);
