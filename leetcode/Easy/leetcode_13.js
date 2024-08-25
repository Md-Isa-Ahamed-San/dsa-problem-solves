// var romanToInt = function (s) {
//   let romanObj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let sum = 0;
// //   console.log(romanObj[s[0]])
//   for(let i =0;i<s.length;i++){
//    if(romanObj[s[i]] <romanObj[s[i+1]]){
//     sum-= romanObj[s[i]]
//    }
//    else{
//     sum+=romanObj[s[i]]
//    }
//   }
//   console.log(sum)
//   return sum;
// };
// romanToInt("MCMXCIV");
// romanToInt("LVIII");

const stringValue = "55 words and 987";
const numericValue = parseInt(stringValue.match(/\d+/)[0]);

console.log(numericValue); // Output: 987
