//using hash map
var majorityElement = function (nums) {
  let numsFrequency = -99;
  let theNumber = -99;
  let frequency = {};
  for (let item in nums) {
    frequency[nums[item]] = (frequency[nums[item]] || 0) + 1;

    // console.log("half len: ", Math.floor(nums.length / 2));
    if (numsFrequency < frequency[item]) {
        numsFrequency = frequency[item];
        theNumber = parseInt(item);
        console.log("theNumber: ", theNumber);
        console.log("frequency: ", numsFrequency);
    }
    if (numsFrequency > Math.floor(nums.length / 2)) {
      // console.log(numsFrequency);
      return theNumber;
    }
  }
console.log(frequency)
  return null;
};

//optimal solution 
var majorityElement = function (nums) {
  let currMejorityEle;
  let count = 0;
  let mejorityNumberCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      currMejorityEle = nums[i];
      count++;
    } else if (nums[i] !== currMejorityEle) {
      count--;
    } else if (nums[i] === currMejorityEle) {
      count++;
    }
  }
  console.log(currMejorityEle, count);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === currMejorityEle) {
      mejorityNumberCount++;
    }
  }
  if (mejorityNumberCount > Math.floor(nums.length / 2)) {
    return currMejorityEle;
  } else return 0;
};

majorityElement([3, 2, 3]);
// majorityElement([2,2,1,1,1,2,2]);
