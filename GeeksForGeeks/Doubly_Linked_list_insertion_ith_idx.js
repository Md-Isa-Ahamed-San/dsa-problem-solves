addNode(head, pos, data);
{
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


reverseDLL(head){
  let current = head;
 
  let nextNode = current.next;
  if(!head) return null;
  if(!head.next){
    head.prev = null;
      return head;
  }
  let newHead = reverseDLL(head.next)
  let front = head.next;
  front.next =  head;
  front.prev = null;
  
 head.next = null;
  head.prev = front;
  return newHead;
  
}