// not solved
// let s = "loveleetcode"
// let firstUniqChar = function(s) {
//     for(let i=0;i<s.length-1;i++){
//         for(let j=i+1;j<s.length-1;i++){
//             if(s[i]!==s[j]){
//                 return i
//             }
//             if(s[i]==s[j]){
//                 return
//             }

//         }
//     }
// };
// console.log(firstUniqChar(s))
let nums = [2, 2, 1];
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[i] = nums[i];
  }
  let value=1;
  for (let key in obj) {
   
    if (obj[key] < value) {
      value=obj[key]
    }
   
  }
console.log(small)
};

singleNumber(nums);
