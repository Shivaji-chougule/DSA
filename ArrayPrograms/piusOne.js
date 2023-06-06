let digits = [1,2,3,2,6,5,4,7,8,9,5,2]
var plusOne = function (digits) {
    let no ="";
    
for(let i=0;i<digits.length;i++){
  no = no + digits[i];
}


  return Array.from(String(BigInt(no)+BigInt(1)), Number);
}
console.log(plusOne(digits))