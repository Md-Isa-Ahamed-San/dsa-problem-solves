/*Description:

The removeDuplicates function takes an array nums as input, which is sorted in non-decreasing order. The function removes duplicate elements from the array in-place such that each unique element appears only once, while preserving the relative order of elements.

Algorithm:

    If the input array nums is empty (nums.length === 0), the function returns 0 to indicate that there are no elements to remove duplicates from.
    Initialize a variable j to 0, which will represent the index of the last unique element found in the modified array.
    Iterate through the array starting from index 1 (using variable i), comparing each element with the previous unique element (nums[j]).
    If the current element (nums[i]) is not equal to the previous unique element (nums[j]), it means a new unique element is found. Increment j by 1, and assign the value of the current element to the next position after the last unique element (nums[++j] = nums[i]). This effectively overwrites the current element with the next unique element.
    Continue this process until all elements in the array are traversed.
    Finally, return j + 1, which represents the number of unique elements in the modified array.*/
var removeDuplicates = function(nums) {
    let i = 0;
for(let j = 1 ;j<nums.length;j++){
    if(nums[i]!== nums[j]){
        nums[++i] = nums[j]
    }
}
// console.log(nums)
return i+1
};

removeDuplicates([0,0,0,0,1,1,1,2,2,3,3,4])