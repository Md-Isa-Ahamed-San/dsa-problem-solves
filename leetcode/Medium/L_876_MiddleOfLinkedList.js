//optimal
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast){
        fast = fast.next;
        if(fast===null){
            return slow
        }
            fast=fast.next;
        slow = slow.next;
    }
    return slow;
};
var middleNode = function (head) {
    if (head === null || head.next === null) return head;
    let slow = head;
    let fast = head.next; //by starting fast from 2nd node will make the slow pointer to middle left side of even list.
    while(fast!==null && fast.next!==null){
      fast=fast.next.next;
      slow=slow.next;
    }
    return slow;
  };
//bruteforce
var middleNode = function(head) {
    let count = 0;
    let curr = head;
    while(curr!== null){
        count++;
        curr=curr.next;
    }
    curr=head;
    let t = Math.floor(count/2)
    while(t--){
       curr=curr.next
    }
    return curr;
};
