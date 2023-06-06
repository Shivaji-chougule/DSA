// not solved
let nums = [1, 2, 3, 0, 4, 5, 0, 6, 7];
const morethantwo = nums.filter((num) => {
  return num >= 1;
});
let newL = ((nums.length-1) - (morethantwo.length-1));


for(let i=0;i<2;i++){
    nums.push(0);
}

console.log(nums)