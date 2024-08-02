const crypto = require("crypto");

/*
What if I ask you that the input string should start with '100xdevs'? 
How would the code change?
*/

// Solution
function findHashWithPrefix(noncePrefix, hashPrefix) {
  let nonce = 0;

  while (true) {
    const nonceStr = `${noncePrefix}${nonce.toString()}`;

    const hash = crypto.createHash("sha256").update(nonceStr).digest("hex");
    if (hash.startsWith(hashPrefix)) {
      return { nonce, hash };
    }
    nonce++;
  }

  // No safe return needed as the while loop will always return a value
}

// Export the function (for assignment03.js)
module.exports = findHashWithPrefix;

// Test
const noncePrefix = "100xdevs";
const hashPrefix = "00000";
const { nonce, hash } = findHashWithPrefix(noncePrefix, hashPrefix);
console.log(`Nonce: ${nonce}`);
console.log(`Hash: ${hash}`);
