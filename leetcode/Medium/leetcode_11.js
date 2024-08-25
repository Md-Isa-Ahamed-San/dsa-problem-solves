var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = -Infinity;

  while (left < right) {
   
    let area = (right - left) * Math.min(height[left], height[right]);
    // console.log("maxArea ~ area:", area);

    max = Math.max(max, area);
    height[left] <= height[right] ? left++ : right--;
  }
  // console.log(max);
  return max;
};

// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
maxArea([2, 3, 4, 5, 18, 17, 6]);
