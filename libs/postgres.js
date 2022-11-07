const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: '5432',
    user: 'jules',
    password: 'admin123',
    database: 'university'
  });

  await client.connect();
  return client
};

module.exports = getConnection;
