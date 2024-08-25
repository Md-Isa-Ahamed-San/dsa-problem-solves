var pairSum = function (head) {
    let arr= []
    let current = head;
    let count = 0;
    let m = -Infinity;
    while(current){
    arr.push(current.val)
    count++;
    current = current.next;
    }
    for(let i = 0;i<arr.length;i++){
    m = Math.max(m, (arr[i]+arr[n-1-i]))

    }
    return m
};
