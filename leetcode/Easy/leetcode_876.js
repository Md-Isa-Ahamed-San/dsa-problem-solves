let middle = head => {
  // console.log(head);
  let len = 0;
  let current = head;
  while (current) {
    len++;
    current = current.next;
  }
  current = head; //reset the current to start

  let midPoint = Math.floor(len / 2);
  let currentIndex = 0;
  while (current) {
    if (currentIndex === midPoint) {
      return current;
    }
    currentIndex++;
    current = current.next;
  }
  // console.log(newArr);
  return undefined;
};
var middleNode = function (head) {
  return middle(head);
};
