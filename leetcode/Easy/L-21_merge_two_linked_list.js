var mergeTwoLists = function (list1, list2) {
  let node = new ListNode();
  let head = node;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    head = head.next;
  }
  if (list1 !== null) {
    head.next = list1;
  } else {
    head.next = list2;
  }

  return node.next;
};
