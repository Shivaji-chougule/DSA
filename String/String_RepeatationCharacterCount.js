let str1 = "eveything is enclosed with double or single quotes is called string";
let obj1={}
for(let i=0;i<str.length;i++){
    obj1[str1[i]]=(obj1[str[i]] || 0)+1
}
console.log(obj1)
let ans1=""
for(let x in obj1){ 
    ans1=`${ans1} character count of ${x} is ${obj1[x]}\n`
}
console.log(ans1)

// /////////////////////////////////////////////////////////////////////////////

a=['pear', 'apple', 'orange', 'apple'];
b={};
max='', maxi=0;
for(let k of a) {
  if(b[k]) b[k]++; else b[k]=1;
  if(maxi < b[k]) { max=k; maxi=b[k] }
}
console.log(max)

// //////////////////////////////////////////////////////////////////////////////
let str  = "abcbd",
    obj= {};

for(let i=0;i<str.length;i++){
    obj[str[i]]=(obj[str[i]] || 0)+1
}
let small = 0;
let value;
for(let key in obj){
  if (obj[key] > small) {
        small = obj[key];
        value = key;
    }
}
   

console.log(value);
