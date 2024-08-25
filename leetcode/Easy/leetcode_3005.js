var maxFrequencyElements = function (nums) {
  let frequencyCounter = {};
  for (let i = 0; i < nums.length; i++) {
    frequencyCounter[nums[i]] = (frequencyCounter[nums[i]] || 0) + 1;
  }
  console.log(frequencyCounter);
  let maxfrequency = -1;
  for (let item in frequencyCounter) {
    if (frequencyCounter[item] > maxfrequency) {
      maxfrequency = frequencyCounter[item];
    }
  }
  let sum =0;
  for(let item in frequencyCounter){
    if(frequencyCounter[item]=== maxfrequency){
        sum+=maxfrequency;
    }
  }
  console.log(maxfrequency,sum);
  return sum;
};
// maxFrequencyElements([2, 2, 1, 1, 1, 5, 5, 5, 7, 7]);
maxFrequencyElements( [1,2,2,3,1,4]);
