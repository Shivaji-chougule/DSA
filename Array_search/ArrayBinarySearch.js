// binary search
// to do the binary search data should be sorted
let data=[5,9,13,17,26,37,42,47,58,62];
let find=62;
let start=0;
let end=data.length;
// console.log(end)
let position
while(start <= end){
    let mid = Math.floor((start+end)/2);
    // console.log(data[mid])
    if(data[mid]==find){
        position=mid;
   break;
    }else if(data[mid]<find){
        start=mid+1
    }else{
        end=mid-1
    }
   
}
console.log(position)