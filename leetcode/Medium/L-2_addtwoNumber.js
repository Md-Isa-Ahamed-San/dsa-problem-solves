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
  