a=['pear', 'apple', 'orange', 'apple'];
b={};
max='', maxi=0;
for(let k of a) {
  if(b[k]) b[k]++; else b[k]=1;
  if(maxi < b[k]) { max=k; maxi=b[k] }
}
console.log(max)