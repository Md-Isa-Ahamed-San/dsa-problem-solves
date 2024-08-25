var commonChars = function (words) {
  let objArr = [];
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    let objj = {};
    for (let j = 0; j < words[i].length; j++) {
      objj[words[i][j]] = (objj[words[i][j]] || 0) + 1;
    }
    objArr.push(objj);
  }
//   console.log(objArr);

  let firstObj = objArr[0];
  for (let key in firstObj) {
    let min = Infinity;

    for (let i = 0; i < objArr.length; i++) {
      // console.log(objArr[i][key])
      if (!objArr[i][key]) {
        min = Infinity;
        break;
      }
      min = Math.min(min, objArr[i][key]);
    }
    // console.log(min, key);
    if (min !== Infinity) {
      for (let i = 1; i <= min; i++) {
        ans.push(key);
      }
    }

    // ans.fill(key,ans.length-1, min);
  }
  console.log(ans);
  return ans;
};
// commonChars(["bella", "label", "roller"]);
// commonChars(["cool","lock","cook"]);
commonChars(["dadaabaa","bdaaabcc","abccddbb","bbaacdba","ababbbab","ccddbbba","bbdabbda","bdabaacb"]);
