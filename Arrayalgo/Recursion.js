//  Recursion   
// here we are calling function inside itself and handleing it conditionaly
// because when we callout it inside itself then it forms loop
// Example 1
function apple(x){
    console.log(x)
        if(x<10){
            apple(x+1)
        }
}
let data=0
apple(data)

// Example 2
function factorial(item){
    if(item==0){
        return 1
    }
  return item*factorial(item-1)
}
let data2=5;
console.log(factorial(data2))