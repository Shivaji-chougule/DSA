// delete postion 3

let data=[30,20,45,76,20,80]
let position=3
for(let i=position;i<data.length-1;i++){

    data[i]=data[i+1]
   
}
// data.length=data.length-1
console.log(data)

// Direct method
// data.splice(2,1)
// console.log(data)