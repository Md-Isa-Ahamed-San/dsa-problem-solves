var swapNodes = function(head, k) {
    let curr = head;
    let count = 0;
    let swapNode1;
    let swapNode2;
    while(curr){
     count++;
     if(swapNode2!==undefined){
        swapNode2 = swapNode2.next;
     }
     if(count===k){
        swapNode1 = curr;
        swapNode2 = head;
     }
     curr = curr.next;
    }
    let temp = swapNode1?.val;
    swapNode1.val = swapNode2?.val;
    swapNode2.val = temp
return head;
};