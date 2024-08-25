let reverseRecursion = head => {
    if (head === null || head?.next === null) {
      return head;
    }
  
    let newHead = reverseRecursion(head.next);
    let front = head.next;
    front.next = head;
    head.next = null;
    return newHead;
  };
  var isPalindrome = function(head) {
      let slow = head;
      let fast = head;
      let current = head;
      while (fast) {
        fast = fast.next;
        if (fast?.next) {
          fast = fast.next;
          slow = slow.next;
        }
      }
      let reversedSecHalf =  reverseRecursion(slow?.next);
      // console.log(reversedSecHalf)
      while(reversedSecHalf){
        if(reversedSecHalf.val!== current.val){
          return false;
        }
        else{
          reversedSecHalf = reversedSecHalf.next;
          current = current.next;
        }
      }
      // console.dir(slow, { depth: null });
      return true;
  };


  //////////////////////////////////////////
  //using stack 
  var isPalindrome = function(head) {
    let current = head;
    let stack = []
    while(current){
      stack.push(current.val)
      current = current.next;
    }
    let len = stack.length-1;
     current = head;
    while(current){
      // console.log(current.val , stack[len])
      if(current.val!==stack[len]){
        // console.log(false)
        return false
        }
        else{
          current = current.next;
          stack.pop()
          // console.log(stack)
        len--;
      }

    }
    // console.log(true)
    return true;

};