/*
Write a function that takes a user as an input 
and greets them with their name and age
*/

// Solution
function greetUser(user) {
  return `Hello ${user.name}, you are ${user.age} years old.`;
}

// Test
const user = {
  name: "Pratham",
  age: 18,
};

console.log(greetUser(user));
