// var isPalindrome = function(x) {
//   let s = x.toString()
//   let start = 0;
//   let end = s.length-1;
//    while(start<end){
//        if(s[start]!==s[end]){
//         console.log('false')
//            return false
//        }
//        start++;
//        end--;
//    }
//    console.log("true")
//    return true
// };
isPalindrome = (x)=>{
    let y =x;
    let reverseNumber =0;
  while(x>0){
    reverseNumber = reverseNumber*10 + (x%10);
    x = Math.floor(x/10);
  }
  console.log(reverseNumber)
  if(y==reverseNumber){
    console.log("true")
    return true
  }
  console.log('false')
  return false
  }
  isPalindrome(121)
  // isPalindrome(10)