require('env2')('.env');
const { Pool } = require('pg');

let dbUrl = '';
if (process.env.NODE_ENV === 'dev') dbUrl = process.env.DB_URL;
else if (process.env.NODE_ENV === 'production') dbUrl = process.env.DATABASE_URL;
else if (process.env.NODE_ENV === 'test') dbUrl = process.env.DB_TEST;

const connection = new Pool({
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
  connectionString: dbUrl,
});

module.exports = connection;
