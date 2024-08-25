var deleteMiddle = function(head) {
    let fast = head;
    let slow = head;
    let deleteNode = null;
    if((head.next) === null || head ===null){
        return null;
    }
    
    while(fast){
        fast=fast.next;
        if(fast!== null){
            fast =fast.next;
            deleteNode = slow;
            slow=slow.next;
        }
    }
    deleteNode.next = slow.next;
    slow.next = null;
    return head;
};