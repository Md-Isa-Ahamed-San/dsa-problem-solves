var getIntersectionNodeNormal = function (headA, headB) {
  let currentA = headA;
  let currentB = headB;
  let map = new Map();
  while (currentA) {
    map.set(currentA, currentA);
    currentA = currentA.next;
  }
  while (currentB) {
    if (map.has(currentB)) {
      return currentB;
    }
    currentB = currentB.next;
  }
  return null;
};

var getIntersectionNodeBetter = function (headA, headB) {
  let currentA = headA;
  let currentB = headB;
  let lenA = 0;
  let lenB = 0;
  while (currentA) {
    lenA++;
    currentA = currentA.next;
  }
  while (currentB) {
    lenB++;
    currentB = currentB.next;
  }
  let skip = Math.abs(lenA - lenB);
  currentA = headA;
  currentB = headB;
  if (lenA > lenB) {
    while (skip--) {
      currentA = currentA.next;
    }
  } else if (lenB > lenA) {
    while (skip--) {
      currentB = currentB.next;
    }
  }
  // here we are not comparing with currentA.next to currentB.next because in case of [0], [0] where the are linked each other will be invalid in case of currentA.next thats why we are comparing with currentA to currentB instead of its next;
  while (currentA && currentB) {
    if (currentA === currentB) {
      return currentA;
    }
    currentA = currentA.next;
    currentB = currentB.next;
  }
  return null;
};
var getIntersectionNodeOptimal = function (headA, headB) {
  let currentA = headA;
  let currentB = headB;
  let countNull = 0;

  while (true) {
    if (currentA === currentB) {
      return currentA;
    }
    if(currentA.next=== null && currentB.next === null){
      return null
    }
    if (currentA.next === null) {
      countNull++;
      currentA = headB;
    } else {
      currentA = currentA.next;
    }

    if (currentB.next === null) {
      countNull++;
      currentB = headA;
    } else {
      currentB = currentB.next;
    }
    // if (countNull > 2) {
    //   return null;
    // }
  }
};
