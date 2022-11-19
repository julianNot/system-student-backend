const bcrypt = require('bcrypt');

async function hashPass() {
  const myPass = 'admin 123 .202';
  const hash = await bcrypt.hash(myPass, 10);
  console.log(hash);
}

hashPass();
