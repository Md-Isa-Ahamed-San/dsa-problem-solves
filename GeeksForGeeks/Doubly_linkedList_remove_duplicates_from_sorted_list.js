removeDuplicates(head) {
    let current =head;
    while(current){
        if(current.prev && current.prev.data === current.data){
           let next = current.next;
           if(current.prev!==null){
               current.prev.next = next
           }
           if(current.next!==null){
               next.prev = current.prev
           }
           current.prev = null;
           current.next =null;
           current = next;
        }
        else{
            current= current.next;
        }
    }
    return head;
}