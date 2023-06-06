function findMinMax(array) {
    let min = array[0];
    let max = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
  
      if (array[i] > max) {
        max = array[i];
      }
    }
  
    return { min,max };
  }
  
  // Testing the function
  let numbers = [5, 2, 9, 1, 7, 3];
  let result = findMinMax(numbers);
  console.log(result.min); // Output: 1
  
  console.log(result.max); // Output: 9
//   ////////////////////////////////////////
// const numbers = [5, 2, 9, 1, 7, 3];

// const max = Math.max(...numbers);
// const min = Math.min(...numbers);

// console.log("Maximum:", max);
// console.log("Minimum:", min);
