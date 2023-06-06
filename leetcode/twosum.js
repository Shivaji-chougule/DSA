// leetcode problem no.1
let nums = [2, 7, 11, 15];
let target = 9;

var twoSum = function (nums, target) {
  const numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    const currValue = nums[i];
    if (target - currValue in numsObj) {
      return [numsObj[target - currValue], i];
    }
    numsObj[nums[i]] = i;
  }
  return [-1, -1];
};
console.log(twoSum(nums, target));
