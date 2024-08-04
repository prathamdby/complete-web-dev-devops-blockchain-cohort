/*
Write a function called sum that finds the sum from 1 to a number.
*/

// Solution
function sum(num) {
  let total = 0;

  for (let i = 1; i <= num; i++) {
    total += i;
  }

  return total;
}

// Test
console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
