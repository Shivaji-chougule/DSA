let data  = "abcbd",
    obj= {};

for (let i = 0; i < data.length;i++) {
    obj[data[i]] = (obj[data[i]] || 0)+1 ;
   
}
console.log(obj)


for (let key in obj) {
    // console.log("Obj[key]",obj[key],"condition",obj[key] > small, key, small)
    if (obj[key] > small) {
        small = obj[key];
        value = key;
    }
}
console.log(value);
