let arr=[-3,0,1,-3,1,1,1,-3,10,0]
let obj={}
 function uniqueOccurrences(arr) {
    for(i=0;i<arr.length;i++){
       obj[i]=arr[i]
    }
};
uniqueOccurrences(arr)
console.log(obj)