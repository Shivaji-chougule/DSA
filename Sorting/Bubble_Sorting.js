let data=[11,52,63,41]
// let data=[45,65,87,24,69,10,36,52,68,14,54,0,3]

for(let i=0;i<data.length;i++){
// console.log(data)
    for(let j=0;j<data.length;j++){
// console.log(data)
        if(data[j]>data[j+1]){


            [data[j],data[j+1]]=[data[j+1],data[j]] //destructuring method
           
            // let temp=data[j];
            // data[j]=data[j+1];
            // data[j+1]=temp
        }
    }
}
console.log(data)

// // Direct method
// function ans(a,b){
//     return a-b
// }
// console.log(data.sort(ans))
// console.log(data.sort((a,b)=>a-b)) //by using anynomus function


