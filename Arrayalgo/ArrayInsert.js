

function arrayinsert(){

    let data=[60,30,10,67,40];
    console.log(data)
    let newel=parseInt(document.getElementById("value").value);
    let position=document.getElementById("position").value;
    
    for(let i=data.length-1;i>=0;i--){
    
        if(i>=position){
    
            data[i+1]=data[i];
    
            if(i==position){
    
                data[i]=newel;
            }
        }
    }
    console.log(data)
}