// checking sum zero problem
let arr=[-5,-4,-3,-2,-1,0,2,4,6,8]
// [-4,4] output
function sumZero(){
        for(let number of array){
        for(let i=1;i<arr.length;i++){
            if(number = arr[i]==0){
                return [number,arr[i]]
            }

        }
        }
}
let ans=sumZero(arr);
console.log(ans)