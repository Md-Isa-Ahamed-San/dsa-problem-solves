var oddEvenList = function(head) {
    if(head===null || head.next === null) return head;
    let current = head;
    let odd = head;
    let evenHead = head.next;
    let even = head.next;
    while(odd.next && even.next){
     odd.next = even.next;
     odd = even.next;
     even.next = odd.next;
     even = odd.next;
    }
    odd.next = evenHead;
    return current;
};
//naive approach is to store odd value first to an array then store even value to that same array then assign all value again but it needs extra O(n) space.