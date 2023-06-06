function isAnagaram(str1, str2){
    if(str1.length!== str2.length){
        return false;
    }
    var obj1 = {};
    var obj2 = {};
    for(var arg of str1){
        obj1[arg] =  (obj1[arg] || 0 ) + 1 ;
    }
    console.log(obj1);
    for(var arg of str2){
        obj2[arg] =  (obj2[arg] || 0 ) + 1 ;
    }
    console.log(obj2);

    for( var key in obj1){
        console.log(key)
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

console.log(isAnagaram("ollhe" , "hello"));