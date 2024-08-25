var addTwoNumbers = function (l1, l2) {
let c1 = l1;
let c2=l2;
let carry = 0;
let head = new ListNode(-1)
let current = head;
while(c1&&c2){
    let val = (c1.val+c2.val+carry)%10
    carry = Math.floor((c1.val+c2.val+carry)/10)
    let node = new ListNode(val)
    current.next = node;
    c1=c1.next;
    c2=c2.next;
}
while(c1){
    let val= (c1.val+carry)%10;
    carry = Math.floor((c1.val+carry)/10)
    let node = new ListNode(val)
    current.next = node;
    c1=c1.next;
}
while(c2){
    let val= (c2.val+carry)%10;
    carry = Math.floor((c2.val+carry)/10)
    let node = new ListNode(val)
    current.next = node;
    c2=c2.next;
}
if(carry===1){
    let node = new ListNode(1)
    current.next = node;
}
return head.next;
};
addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9])
addTwoNumbers([2,4,3],[5,6,4])
addTwoNumbers([0],[])