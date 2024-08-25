var rotateRight = function(head, k) {
    if(head===null || head.next ===null) return head;
    
    let current = head;
    let len = 0;
    while(current){
    len++;
    if(current.next ===null){
        current.next =head;
        break;
    }
        current= current.next;
    }
    k = k%len;
    let breakPointIdx =len-k-1;
    
    current = head;
    while(breakPointIdx--){
        current = current.next;
    }
    let newHead = current.next;
    current.next=null;
    return newHead;
    
};