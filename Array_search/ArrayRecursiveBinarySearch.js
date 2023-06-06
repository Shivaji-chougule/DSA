let data=[10,20,25,30,40,45,50]
let start=0;
let end=data.length;
let find=50;
let position
function search(data,start,end){
  let mid=Math.floor((start+end)/2);
  if(data[mid]==find){
    position=mid;
    return true
  }else if(data[mid]<find){
    search(data,mid+1,end)
  }else {
    search(data,start,mid-1)
  }
}
search(data,start,end);
console.log(position)