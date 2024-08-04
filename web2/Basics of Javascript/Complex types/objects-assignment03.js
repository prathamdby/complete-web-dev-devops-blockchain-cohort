/*
Also tell the user if they are legal to vote or not.
*/

// Solution
function greetUser(user) {
  let canVote = "illegal";

  if (user.age > 18) {
    canVote = "legal";
  }

  return `Hi ${user.title} ${user.name}, your age is ${user.age}. You are ${canVote} to vote.`;
}

// Test
const user = {
  title: "Mr",
  name: "Pratham",
  age: 18,
};

console.log(greetUser(user));
