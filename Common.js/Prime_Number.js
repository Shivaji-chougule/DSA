
////////////////////////////////check num is prime or not
// let num = prompt();
// let ans=""
//   for (i = 2; i < num; i++) {
//     if (num % i == 0) {
//       ans= "not prime";
//       break;
//     } else {
//       ans= "prime";
//     }
//   }
// console.log(ans);

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
// check if number is greater than 1
else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
// /////////////////////////Factorial
// find factorial of given number
// let num = prompt()
// let fac=1;
// for(let i=1;i<=num;i++){
//     fac=fac*i
// }
// console.log(fac)
// ///////////////////////////////Fibonachi
// print fibonachi series for 20 numbers
// let fib = [0, 1];
// for(let i=fib.length; i<20; i++) {
//     fib[i] = fib[i-2] + fib[i-1];
// }
// console.log(fib); 
// console.log(fib.join()); 
// ///////////////////////////////////////sum of digit
// sum of given digit length
// let no=1234;
// let num=no.toString()
// let ans=0
// console.log(num)
// for(i=0;i<=num.length-1;i++){
// ans= ans+parseInt(num[i])
// }
//   console.log(ans)
// ///////////////////////////////////////////////////array to object
// convert given array to object
// Example 1
// let arr=[1,2,3,4,5,6,7,8,9]
// let obj1 = {};
//    for (var i = 0; i < arr.length; ++i){
//      obj1[i] = arr[i];
//    }
//  console.log(obj) 
// /////////////////
// Example 2
//  var obj2 = arr.reduce(function(acc, cur, i) {
//    acc[i] = cur;
//    return acc;
//  }, {});
//  console.log(obj2)
