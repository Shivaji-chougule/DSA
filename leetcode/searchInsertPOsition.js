let nums = [1, 3, 5, 7];
let target = 8;
var searchInsert = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
    if (target < nums[i]) {
      return i;
    }
    if (nums[nums.length - 1] < target) {
      return nums.length;
    }
  }
};
console.log(searchInsert(nums, target));
