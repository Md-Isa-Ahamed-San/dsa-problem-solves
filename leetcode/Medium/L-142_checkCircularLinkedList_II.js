
//we have to return the node where the loop began
var detectCycle = function(head) {
    let map = new Map();
    let current = head;

    while(current){
        if(map.has(current)){
            return current;
        }
        map.set(current,current)
        current = current.next;
    }
    return null;
};