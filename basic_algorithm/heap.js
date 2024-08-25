let maxHeapInsert = value => {
  let maxHeapArr = [41, 39, 33, 18, 27, 12];

  maxHeapArr.push(value);
  let len = 7;
  let childIdx = len - 1;
  // console.log(maxHeapArr)
  while (true) {
    let parentIdx = Math.floor(childIdx / 2) - 1;
    // console.log(maxHeapArr[parentIdx]);
//  if (parentIdx < 0) parentIdx = 0;  //have to add this line or have to break when parent idx is 0
    if (maxHeapArr[parentIdx] >= maxHeapArr[childIdx]) {
      break;
    }
    [maxHeapArr[parentIdx], maxHeapArr[childIdx]] = [
      maxHeapArr[childIdx],
      maxHeapArr[parentIdx],
    ];
    childIdx = parentIdx;
    if (parentIdx === 0) {
      break;
    }
  }

  console.log(maxHeapArr);
};
// maxHeapInsert(55);
let maxValueOfMaxHeadRemove = () => {
  let maxHeapArr = [41, 39, 33, 18, 27, 12];
  //swapping max value to last value
  let len = 6;
  [maxHeapArr[0], maxHeapArr[len - 1]] = [maxHeapArr[len - 1], maxHeapArr[0]];
  let maxVal = maxHeapArr.pop();
  //  console.log(maxHeapArr)
  let currentIdxOfLastElement = 0;
  while (true) {
    let adjustingNodeIdx = currentIdxOfLastElement;
    let adjustingNodeValue = maxHeapArr[currentIdxOfLastElement];
    let child1 = maxHeapArr[2 * currentIdxOfLastElement + 1];
    let child2 = maxHeapArr[2 * currentIdxOfLastElement + 2];
    let maxChildValue = Math.max(child1, child2);
    if (adjustingNodeValue < maxChildValue) {
      maxChildValue === child1
        ? (currentIdxOfLastElement = 2 * currentIdxOfLastElement + 1)
        : (currentIdxOfLastElement = 2 * currentIdxOfLastElement + 2);

      [maxHeapArr[adjustingNodeIdx], maxHeapArr[currentIdxOfLastElement]] = [
        maxHeapArr[currentIdxOfLastElement],
        maxHeapArr[adjustingNodeIdx],
      ];
    } else {
      break;
    }
    // console.log(maxHeapArr);
  }
  console.log(maxHeapArr);
};
maxValueOfMaxHeadRemove();
