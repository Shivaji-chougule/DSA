let data1=[10,20,30,40,50];
let data2=[60,70,80,90,100];
let data3=[];
for(i=0;i<data1.length;i++){
    data3[i]=data1[i]
}
for(i=0;i<data2.length;i++){
    data3[data1.length+i]=data2[i]
}
console.log(data3)
// default function
// data3=[...data1,...data2]
// console.log(data3)