var reverseWords = function(s) {
    let n=[]
    n=s.split(' ')
    // console.log("🚀 ~ reverseWords ~ n:", n)
    n=n.filter(item=>item!=='')
    // console.log("🚀 ~ reverseWords ~ n:", n)
    // console.log(n.reverse().join(" "))
    return n.reverse().join(" ")
};
reverseWords("hello world")
reverseWords("a good   example")