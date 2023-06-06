let data=[10,20,30,70,40,50,60,70,80,90,70]
let item=70;
let index
for(let i=0;i<=data.length-1;i++){
   if(data[i]==item){
      index=i
    break;
   } 
}
console.log(index)
if(!index){
   alert("item not found")
}else if(index){
   alert("item index is"+" "+index)
}


// Direct method
// console.log(data.indexOf(item))