var subsets = function(nums) {
    let ans = [[]];
    let idx=0;
    let output = [];

    function rec(nums,output,idx,ans){
        if(idx>=nums.length ) {
            if(output.length>0){
                ans.push([...output]);}
            return;
        }
        //exclude
        rec(nums,output,idx+1,ans);
        //include
        let element = nums[idx];
        output.push(element);
        rec(nums,[...output],idx+1,ans);
        output.pop();
    }
    rec(nums,[...output],idx,ans);
    // console.log(ans);
    return ans;
};
subsets([1,2,3])

var subsets = function(nums) {
    let ans = [];
    
    function backtrack(start, curr) {
        ans.push([...curr]);
        
        for (let i = start; i < nums.length; i++) {
            curr.push(nums[i]);
            backtrack(i + 1, curr);
            curr.pop();
        }
    }
    
    backtrack(0, []);
    return ans;
};