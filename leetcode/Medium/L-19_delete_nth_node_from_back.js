var removeNthFromEnd = function(head, n) {
    let count = 0; 
    if(head === null) return null;
    if(head.next ===null && n ===1) return null
    let current = head;
    while(current){
        count++;
        current=current.next;
    }
    count = count- n;
    current = head;
    let check = 1;
    while(current){
        if(count ===0){
            head = head.next;
            return head;
        }
        else if(check === count){
        current.next = current.next.next;
        return head;
     }
     else{
        check++;
        current = current.next
     }
    }
    return head;
};