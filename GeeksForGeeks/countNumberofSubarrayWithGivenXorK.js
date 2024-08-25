//better solution where getting all the value using double loop;
let subarrayWIthXorKBetter = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let xor = 0;
    for (let j = i; j < arr.length; j++) {
      xor = xor ^ arr[j];
      if (xor === k) count++;
    }
  }
  return count;
};

// optimal
let subarrayWIthXorKOptimal = (arr, k) => {
  // let arr = A;
  // let k = B;
  let map = new Map();
  let count = 0;
  map.set(0, 1);
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
    let x = xor ^ k;
    count += map.get(x) || 0;
    map.set(xor, (map.get(xor) || 0) + 1);
  }
  return count;
};

console.log(subarrayWIthXorKOptimal([4, 2, 2, 6, 4], 6));
