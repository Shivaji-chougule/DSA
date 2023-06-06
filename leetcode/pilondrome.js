let x=-121
var isPalindrome = function(x) {
    let start=0;
    let end=x.toString().length-1;
    while(end>start){
        if(x.toString()[start] != x.toString()[end]){
            return false;
        }
        start++;
        end--;
    }
    
    return true
};
console.log(isPalindrome(x))