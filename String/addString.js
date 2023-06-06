let num1 = "11545645645645421212312312"
let num2 = "1235456456"
var addStrings = function(num1, num2) {
   let x= BigInt(num1) + BigInt(num2)
    return x.toString()
   
}
console.log(addStrings(num1,num2))


