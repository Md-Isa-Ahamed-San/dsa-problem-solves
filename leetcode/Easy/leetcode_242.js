var isAnagram = function (s, t) {
  let ss = {};
  let tt = {};

  let ssCount =0;
  let ttCount =0;
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    ss[s[i]] = (ss[s[i]] || 0) + 1;
    tt[t[i]] = (tt[t[i]] || 0) + 1;
  }
//   console.log(ss,tt)
  for(let item in ss){
                              //checking if both value is valid 
    if(ss[item]!==tt[item] || !(ss[item]&&tt[item])){
        console.log('false')
        return false
    }
  }
  console.log('true')
  return true
};
isAnagram("anagram", "nagaram");
isAnagram("rat", "car");
isAnagram("aa", "bb");
