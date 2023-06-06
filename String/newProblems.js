// /////to check its string or not method is created by using prototype
// let is_string = function (input){
  
//     if(Object.prototype.toString.call(input) === '[object String]'){
//       return true
//     }else{
//       return false
//     }
//   }
//   let ans = is_string(12345)
//   console.log(ans)
//   //////////////////////////////////////////////////////
// Make capitalize the first letter of a string

// let str = 'js string exercises'
// capitalize = function(str){
  
//    return str.charAt(0).toUpperCase() + str.slice(1);
  
// }
    
//  console.log(capitalize(str));
// ////////////////////////////////////////////////////////////////////////////////
// 
swapcase = function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase('AaBbc'));