var maxDepth = function(s) {
    let max =0;
    let count =0;
    for(let i=0;i<s.length;i++) {
        if(s[i]==='('){
            count+=1
        }
        else if(s[i]===')'){
            count-=1
        }
        max = Math.max(count,max)
    }
    console.log(max)
    return max
};
maxDepth("(1+(2*3)+((8)/4))+1")
maxDepth("(1)+((2))+(((3)))")