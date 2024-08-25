// brute force
// #include <bits/stdc++.h>
// using namespace std;

// // Function to find the length of the longest sub-array having sum k
// int lenOfLongSubarr(int arr[], int N, int K) {
//     int maxlength = 0;
//     for (int i = 0; i < N; i++) {
//         int Sum = 0;
//         for (int j = i; j < N; j++) {
//             Sum += arr[j];
//             if (Sum == K) {
//                 maxlength = max(maxlength, j - i + 1);
//             }
//         }
//     }
//     return maxlength;
// }

// int main() {
//     int arr[] = {10, 5, 2, 7, 1, 9};
//     int n = sizeof(arr) / sizeof(arr[0]);
//     int k = 15;
//     cout << "Length = " << lenOfLongSubarr(arr, n, k);
//     return 0;
// }


//optimal

function subarraySum(arr, m, k) {
  let maxLen = 0;
  let n = arr.length;
  let sum = 0;

  const mapp = new Map();
  // map.set(0, 0);
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    // if (mapp.get(sum) === undefined) {
    //   mapp.set(sum, i);
    // }
    // or
    if (!mapp.has(sum)) {
      mapp.set(sum, i);
    }

    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    let reminder = sum - k;
    if (mapp.has(reminder)) {
      let len = i - mapp.get(reminder);
      maxLen = Math.max(maxLen, len);
    }
  }

  return maxLen;
}

console.log(
  subarraySum(
    [
      -7, 8, 6, 0, -4, -5, -8, 3, 0, 10, 5, -8, 3, 5, -7, 6, 8, -5, 2, -8, 9,
      -2, -8, -9, -2, 9, 5, -6, -1, -10, 8, -1, -9, -2, -10, 7, 4, -3, 5, -10,
      5, -8, 10, -6, 3, -8, 10, 7, -5, -9,
    ],
    50,
    -11
  )
);
