let str = "eveything is enclosed with double or single quotes is called string";

let str1 = str.split(" ");
let str2 = "";
let str3 ='';
for (let x of str1) {
  str2 = x.split("");
  for (let j = 0; j < str2.length; j++) {
    if (j == 0)
      str3 = str3 + str2[j].toUpperCase()
    else
      str3 = str3 + str2[j].toLowerCase()
  }
  str3 = str3 + " ";
}
console.log(str3);