/*
Write a function called canVote 
that returns true or false if the age of a user is > 18
*/

// Solution
function canVote(age) {
  return age > 18;
}

// Test
console.log(canVote(18));
console.log(canVote(19));
console.log(canVote(20));
