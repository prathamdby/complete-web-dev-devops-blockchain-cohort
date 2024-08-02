// Import the function from assignment02.js
const findHashWithPrefix = require("./assignment02");

/*
What if I ask you to find a nonce for the following input - 
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
 */

// Test
const noncePrefix = `harkirat => Raman | Rs 100
Ram => Ankit | Rs 10`;
const hashPrefix = "00000";
const { nonce, hash } = findHashWithPrefix(noncePrefix, hashPrefix);
console.log(`Nonce: ${nonce}`);
console.log(`Hash: ${hash}`);
