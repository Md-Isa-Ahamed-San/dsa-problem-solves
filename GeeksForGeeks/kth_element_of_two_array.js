let kthElement = (A, B, n, m, k) => {
  let low1 = 0;
  let low2 = 0;
  let high1 = Math.min(n,k - 1);
  let high2 = Math.min(m,k - 1);
let ans = -1;
let t =3;
  while (t--) {
      let mid2 = Math.floor(Math.floor(low2 + high2) / 2);
      console.log(mid1,mid2)
      
      if(A[high1]>=B[high2]){
       let mid1 = Math.floor(Math.floor(low1 + high1) / 2);
       if(A[mid1])

   }
  }
};
// kthElement([2, 3, 6, 7, 9], [1, 4, 8, 10], 5, 4, 4);
// kthElement([2, 3, 6, 7, 9], [1, 4, 8, 10], 5, 4, 7);
// kthElement([100, 112, 256, 349, 770], [72, 86, 113, 119, 265, 445, 892], 5, 7, 7);
kthElement(
  [5, 5, 8, 8, 8, 9, 11, 11, 11, 11, 11],
  [4, 4, 4, 4, 6, 8, 9, 9, 9, 11, 13],
  11,
  11,
  5
);
