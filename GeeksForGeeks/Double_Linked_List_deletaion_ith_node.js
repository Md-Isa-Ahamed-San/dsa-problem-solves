deleteNode(head, x)
    {
        let count = x-1;
        let current = head;
        while(count--){
            current = current.next;
        }
        if(current.prev){
        current.prev.next = current.next;
        }
        
        if(current.next){
        current.next.prev = current.prev
        }
        
        return head;
    }