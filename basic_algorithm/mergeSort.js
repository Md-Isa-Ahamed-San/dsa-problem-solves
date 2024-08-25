function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  // if()
  console.log(results);
  return results;
}

function mergeMainFunction(mainArr) {
  if (mainArr.length <= 1) return mainArr;
  let midPoint = Math.floor(mainArr.length / 2);
  let left = mergeMainFunction(mainArr.slice(0, midPoint));
  let right = mergeMainFunction(mainArr.slice(midPoint));
  return merge(left, right);
}
// console.log(mergeMainFunction([3, 1, 5, 2, 6, 7, 8, 9]));

// thought process:
// so we will split the array until we get 1 item from
// each mergeMainFunction()

//merge sort geeks for geeks method

function merge(arr, l, m, r) {
  let i = l;
  let j = m+ 1;
  let newArr = [];
  while (i <= m && j <= r) {
    if (arr[i] < arr[j]) {
      newArr.push(arr[i]);
      i++;
    } else {
      newArr.push(arr[j]);
      j++;
    }
  }
  while (i <= m) {
    newArr.push(arr[i]);
    i++;
  }
  while (j <= r) {
    newArr.push(arr[j]);
    j++;
  }
  for(let i = l;i<=r;i++){
    arr[i] = newArr[i-l]
  }
  
}

function mergeSort(arr, l = 0, r = arr.length - 1) {
  if (l >= r) return;
  let mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, left, mid, right);

}
console.log(mergeSort([3, 1, 5, 2, 6, 7, 8, 9]));