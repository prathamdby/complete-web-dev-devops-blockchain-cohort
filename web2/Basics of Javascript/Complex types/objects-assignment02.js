/*
Write a function that takes a new object as input which has name, age, and gender
and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
*/

// Solution
function greetUser(user) {
  return `Hi ${user.title} ${user.name}, your age is ${user.age}.`;
}

// Test
const user = {
  title: "Mr",
  name: "Pratham",
  age: 18,
};

console.log(greetUser(user));
