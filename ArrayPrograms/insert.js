// let arr = [1,2,30,40,5,7,3,6,1,74,35,2,634];
// console.log(arr.reverse())
// let arr2=[];
// for(let i=arr.length; i>=0;i--){
//     arr2.unshift(arr[i]);
// }
// console.log(arr2)

let data = [1,2,30,40,5,7,3,6,1,74,35,2,634];
let data1=[];
for(let i=0;i<data.length;i++){
    if(data[i]%2==0){
        data1.push(data[i]);  
    }
}
console.log(data1)