var singleNonDuplicate = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let theNumber = -1;
  if (nums[0] !== nums[1]) return nums[0];
  if (nums[nums.length - 1] !== nums[nums.length - 2]) {
    console.log("num : ", nums[nums.length - 1]);
    return nums[nums.length - 1];
  }
  while (low <= high) {
    console.log(theNumber);
    let mid = Math.floor((low + high) / 2);
    console.log(low, high);

    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
      console.log("the number f: ", nums[mid]);
      return nums[mid];
    }
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid - 1]) {
        //item of left
        high = mid - 2;
      } else if (nums[mid] === nums[mid + 1]) {
        //nums of right side
        low = mid + 2;
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        //item on right side;
        low = mid + 1;
      } else if (nums[mid] === nums[mid + 1]) {
        //item on left side
        high = mid - 1;
      }
    }
  }
  console.log("the number: ", theNumber);
  return theNumber;
};
//   singleNonDuplicate([1,2,2,3,3])
  singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]);
  singleNonDuplicate([1, 1, 2,2, 3, 3, 4, 8, 8]);

//   singleNonDuplicate([0, 1, 1, 2, 2, 5, 5]);
singleNonDuplicate([2, 2, 3, 3, 4, 8, 8]);

//   singleNonDuplicate([0,1,1])
  singleNonDuplicate([1, 1, 2, 3, 3, 4,4, 8, 8]);
//   singleNonDuplicate([0, 0, 1, 1, 2, 2, 5]);

//   singleNonDuplicate([1,2,2])
