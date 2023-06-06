//batman flash superman

//1 namrepus hsalf namtab
//2 namtab hsalf namrepus
//3 superman flash batman


let data="batman flash superman";
let result="";
for(let i=data.length-1;i>=0;i--){
  result=result+data[i];
}
console.log(result);
console.log(result.split(" ").reverse().join(" "))
console.log(data.split(" ").reverse().join(" "))