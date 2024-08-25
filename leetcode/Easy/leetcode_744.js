var nextGreatestLetter = function (letters, target) {
  if (
    letters[0].charCodeAt(0) > target.charCodeAt(0) ||
    letters[letters.length - 1].charCodeAt(0) <= target.charCodeAt(0)
  ) {
     console.log(letters[0])
    return letters[0];
  }
  let low = 0;
  let high = letters.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (letters[mid].charCodeAt(0) <= target.charCodeAt(0)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

}
// console.log(low, high);

return letters[low]
};
// nextGreatestLetter(["c", "f", "j"], "a");
nextGreatestLetter(["c", "f", "j"], "c");
// nextGreatestLetter(["c","f","j"], "j");

// nextGreatestLetter(["x", "x", "y", "y"], "z");
