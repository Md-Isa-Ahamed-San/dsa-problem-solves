isCircular(head){
    let current = head.next;
    if(head.data === null) return false;
    while(current){
        if(current===head) return true;
        current = current.next;
    }
    return false;
  }