var sortList = function(head) {
    let arr = []
    let current = head;
    while(current){
        arr.push(current.val)
        current = current.next;
    }
    arr.sort((a,b)=>a-b)
    current = head;
    i=0;
    while(current){
        current.val = arr[i++]
        current = current.next;
    }
    return head;
};