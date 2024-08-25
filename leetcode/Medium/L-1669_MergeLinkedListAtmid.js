
var mergeInBetween = function(list1, a, b, list2) {
    let currOfList1 = list1;
    let currOfList2 = list2; //1000002
    while(currOfList2.next){
        currOfList2 = currOfList2.next;
    }
    let count =1;
    while(currOfList1){
    if(count===a){
      let link = currOfList1;
      currOfList1 = currOfList1.next;
      link.next = list2;
      count++;
    }
    else if(count===b+2){
    currOfList2.next = currOfList1;
    return list1;
    }
    else{
    currOfList1 = currOfList1.next;
    count++;
    }
    }
};