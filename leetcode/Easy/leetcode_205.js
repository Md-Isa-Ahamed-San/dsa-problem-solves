var isIsomorphic = function (s, t) {
  let m = {};
  let n={}
  if (s.length !== t.length) {
    console.log("false");
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if(m[s[i]] && m[s[i]]!== t[i] ){
        console.log('false')
        return false
    }
    if(n[t[i]] && n[t[i]]!== s[i] ){
        console.log('false')
        return false
    }
    m[s[i]] = t[i];
    n[t[i]] = s[i];
  }
  console.log(m);
  console.log("true")
  return true
};

// isIsomorphic("egg", "add");
// isIsomorphic("foo", "bar");
isIsomorphic("badc", "baba");
