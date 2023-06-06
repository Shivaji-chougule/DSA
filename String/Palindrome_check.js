let data="1001"
function palindrome(data){

    let start=0;
    let end=data.length-1;
    // console.log(end)
    while(end>start){
        if(data[start]!=data[end]){
            return false
        }
        start++;
        end--
    }
    return true
}

let ans=palindrome(data)
console.log(ans)