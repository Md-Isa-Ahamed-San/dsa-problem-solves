var hasCycle = function(head) {
    let map = new Map();
    let current = head;
    if(head===null)return false;
    while(current){
        if(map.get(current)===current){
            return true;
        }
        map.set(current,current);
        current = current.next;
    }
    return false;

};