let reverse =(head)=>{
    let prev = null;
    while(head){
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
    }
    return prev;
 }

 var removeNodes = function(head) {
    if (!head || !head.next) return head;
    let reverseHead = reverse(head);

    let newHead = reverseHead;
    let prev = newHead;
    let curr = newHead.next;
    while(curr){
        if(prev.val>curr.val){ //removing value
          prev.next = curr.next;
          curr = prev.next;
        }
        else{
            prev = curr;
            curr =curr.next
        }
    }
    return reverse(newHead)
};