// To complete this drill, you need to implement 2 functions, max and min. Both functions should take a single argument: an array of numbers called numbers. max(numbers) should return the largest number in the array, while min(numbers) should return the smallest.

// Assume that the numbers input only contains numbers (that is, you don't have to inspect your inputs to confirm they only contain numbers).

// If the numbers array is empty, then both max and min should return null or undefined, whichever is more convenient.

// Redo the "max and min (without sort or Math.max/min)" drill but this time use a while loop instead of a for loop

'use strict';

function max(numbers) {
  if (numbers === []) {
    return null;
  }

  // set to max number to 0
  // iterate through each element and check if it is greater than the last element or 0
  // if so, set that element to the max number
  let maxNumber = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
    i++;
  }
  return maxNumber;
}

function min(numbers) {
  if (numbers === []) {
    return null;
  }
  let i = 0;
  let minNumber = numbers[0];
  while (i < numbers.length) {
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
    i++;
  }
  return minNumber;
}

// console.log(min([70, 5, 35, 60]));


//Write a function called average that takes an array of numbers as its input and returns the average 
//generated from the array of numbers.

function average(numbers) {
  let total = 0;
  numbers.forEach(element => total += element);

  return total/numbers.length;
}

//const numbers = [2, 4, 6, 10];

console.log(average([2, 4, 6, 10]));

