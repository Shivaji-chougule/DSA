// Array methods

// 1 map

// The map() method in JavaScript is used to iterate over each element of an array and
// create a new array based on the results of applying a provided function to each element
// . It doesn't modify the original array but instead returns a new array with the modified elements.

 const arrNum = [1,2,3,4,5,6,7,8,9];

 const result = arrNum.map((num)=>{
                return num * 3
 })
 console.log(result)

//  2 fiter
// The filter() method in JavaScript is used to create a new array containing elements
 //that satisfy a specified condition. It doesn't modify the original array; instead,
 // it returns a new array with the elements that passed the condition.

 const arrNumTwo = [1,2,3,4,5,6,7,8,9];

 const resultTwo = arrNumTwo.filter((num)=>{
                    return num % 2
 })
 console.log(resultTwo)

 //3 reduce
 //The reduce() method in JavaScript is used to reduce an array to a single value,
  //accumulating the results of applying a provided function to each element of the array.
  // It takes a callback function as its argument and iterates over the array, maintaining
  // an accumulator value that is updated with each iteration.

  const arrNum3 = [1,2,3,4,5,6,7,8,9];

  const reduce = arrNum3.reduce((arr,curr)=>{
                 return arr + curr
  },0) 
 console.log(reduce)

 //4 forEach
 //The forEach() method in JavaScript is used to iterate over the elements of an array 
 //and execute a provided function once for each element. It is a way to perform an
 // action on each element of the array without creating a new array or modifying the
  // existing one. The forEach() method does not return a new array.

  const arrNum4 = [1,2,3,4,5,6,7,8,9];

   arrNum4.forEach((num)=>{
        const ans = num * 5
        console.log(ans)
  }) 
 console.log(arrNum4)

 //5 revrese 
 //The reverse() method in JavaScript is used to reverse the order of elements in an 
 //array. It modifies the original array and does not create a new one.

 const arryRev = ['batman','ironman','spiderman'];
 const reversed = arryRev.reverse((sups)=>{
                return sups
 })
console.log(reversed)

////6 find 
//The find() method in JavaScript is used to retrieve the first element in an array 
//that satisfies a provided condition. It is particularly useful when you want to find
// a specific element in an array based on a certain criteria.

// Example: Using find to retrieve the first element that satisfies a condition
const numbersFind = [5, 12, 8, 3, 9];

const foundNumber = numbersFind.find( (number)=> {
  return number > 7;
});

console.log(foundNumber);
// Output: 12

////7 sort 
//The sort() method in JavaScript is used to sort the elements of an array in place.
// By default, the sort() method sorts the elements as strings, which may not always 
// produce the expected results for numbers. If you want to sort an array of numbers, 
 //you can provide a compare function as an argument to the sort() method.

 // Example1: Using sort with a compare function to sort an array of numbers
 const numbers = [3, 1, 10, 8, 5];

 numbers.sort((a, b)=> {
   return a - b;
 });
 
 console.log(numbers);
 // Output: [1, 3, 5, 8, 10]
 
 // Example2: Using sort to sort an array of strings
 const fruitsSort = ['banana', 'orange', 'apple', 'grape'];
 
 fruitsSort.sort();
 
 console.log(fruitsSort);
 // Output: ['apple', 'banana', 'grape', 'orange']

 // slice 
 //The slice() method in JavaScript is used to extract a portion of an array and create
//  a new array with the extracted elements. It doesn't modify the original array but
 //  returns a new array containing the selected elements. The slice() method takes two 
 //  parameters: the start index (inclusive) and the end index (exclusive) of the slice.

 const arrNum5 = [1,2,3,4,5,6,7,8,9];
 const result5 = arrNum5.slice(3,7);
 console.log(result5)

 // splice
 //The splice() method in JavaScript is used to change the contents of an array by
 // removing or replacing existing elements and/or adding new elements in place.
 // Unlike slice(), which returns a new array containing the selected elements,
  //  splice() modifies the original array directly.

  const arr = ['one','two','three','four','five','six'];
  const result6 = arr.splice(2,3,'seven','eight'); // first starting at index 2 and removing three elements.
  console.log(result6)
  console.log(arr) //print remaing into array

  // push ////////////////////////////////////////////////
  //The push() method in JavaScript is used to add one or more elements to the end 
  //of an array. It modifies the original array and returns the new length of the array.

  const fruits = ['apple', 'banana', 'orange'];
            fruits.push('berry','cherry')

  console.log(fruits)

  // pop  
  //The pop() method in JavaScript is used to remove the last element from an array.
  // It modifies the original array and returns the removed element. If the array is
  //  empty, pop() returns undefined.

  //The pop() method in JavaScript removes only the last element from an array
  const fruits2 = ['apple', 'banana', 'orange', 'grape'];

     const poped =   fruits2.pop()
        console.log(poped) // returns poped element
        console.log(fruits2)

 // shift 
 //The shift() method in JavaScript is used to remove the first element from an array.
 // It modifies the original array and returns the removed element. If the array is empty,
 //  shift() returns undefined.

 const fruits3 = ['a', 'b', 'o', 'g'];
        const shifted = fruits3.shift()
        console.log(fruits3) 
        console.log(shifted)// returns removed element

 // unshift 
//The unshift() method in JavaScript is used to add one or more elements to the 
//beginning of an array. It modifies the original array and returns the new length 
//of the array.

const fruits4 = ['a', 'b', 'o', 'g'];
       const newLenght = fruits4.unshift("m","n") 
       console.log(fruits4)
       console.log(newLenght)//returns the new length of the array

       ////////////////////////////////////////////////////////////////////////////



////indexOf/////
//The indexOf() method in JavaScript is used to find the first occurrence of a 
//specified value within an array. It returns the index of the first occurrence of
 //the specified element or -1 if the element is not found.

 const arryOfNames = ['john','kane','max','robert']
 const indexIs = arryOfNames.indexOf("max")
 console.log(indexIs)

 ////findIndex/////
 //The findIndex() method in JavaScript is similar to the find() method, but instead 
 //of returning the value of the first element that satisfies the provided testing 
 //function, it returns the index of that element. If no element satisfies the testing 
 //function, it returns -1.

 // Example: Using findIndex to find the index of an element that satisfies a condition
const numbersIndex = [5, 12, 8, 3, 9];

const indexGreaterThan7 = numbersIndex.findIndex((number)=> {
  return number > 7;
});

console.log(indexGreaterThan7);
// Output: 1 (index of the first element greater than 7)

///// length //////
//The length property in JavaScript is a property of arrays, strings, and other
// objects that indicates the number of elements in an array or the number of characters
 // in a string. It does not require parentheses because it is not a method; it is a 
 // property.

 // Example: Using length with an array
const fruitsLenght = ['apple', 'banana', 'orange'];

const arrayLength = fruitsLenght.length;

console.log(arrayLength);
// Output: 3 (number of elements in the array)
