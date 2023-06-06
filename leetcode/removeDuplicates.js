let nums = [1,1,2];
let arr = []; 
var removeDuplicates = function(nums) {
    arr.push(nums[0]);
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] !== nums[i+1]){
            arr.push(nums[i+1]);
        }
    }
    return arr.length, arr;
};

console.log(removeDuplicates(nums));