//  selection sort method
 let item=[20,12,53,5];
function selectionSort(data){
let minId
for(let i=0;i<item.length;i++){
    minId=i;
    for(let j=i+1;j<data.length;j++){
        if(data[j]<data[minId]){
            minId=j;
        }
    }
    // let temp=data[minId];
    // data[minId]=data[i]    
    // data[i]=temp

    // destucturing method
    [data[minId],data[i]]=[data[i],data[minId]]
}
}
selectionSort(item)
console.log(item)
