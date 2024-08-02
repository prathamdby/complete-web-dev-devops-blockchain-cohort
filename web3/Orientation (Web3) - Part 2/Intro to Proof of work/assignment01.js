const crypto = require("crypto");

/*
What if I ask you the following question — 
Give me an input string that outputs a SHA-256 hash that starts with 00000. 
How will you do it?
*/

// Solution
function findHashWithPrefix(prefix) {
  let nonce = 0;

  while (true) {
    const nonceStr = nonce.toString();

    const hash = crypto.createHash("sha256").update(nonceStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { nonce, hash };
    }
    nonce++;
  }

  // No safe return needed as the while loop will always return a value
}

// Test
const prefix = "00000";
const { nonce, hash } = findHashWithPrefix(prefix);
console.log(`Nonce: ${nonce}`);
console.log(`Hash: ${hash}`);
