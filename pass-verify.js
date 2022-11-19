const bcrypt = require('bcrypt');

async function verifyPass() {
  const myPass = 'admin 123 .202';
  const hash = '$2b$10$xXZvS5QdY7b.vuOpPEKd/ezpQHKDX73RiorVTxqta.OZTfumwq6nK'
  const isMatch = await bcrypt.compare(myPass, hash);
  console.log(isMatch);
}

verifyPass();
