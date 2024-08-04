/*
Write a function that takes an array of users as inputs 
and returns only the users who are more than 18 years old
*/

// Solution
function filterUsers(users) {
  return users.filter((user) => user.age > 18);
}

// Test
const users = [
  {
    name: "Pratham",
    age: 18,
  },
  {
    name: "Harkirat",
    age: 21,
  },
  {
    name: "Aman",
    age: 17,
  },
];

console.log(filterUsers(users));
