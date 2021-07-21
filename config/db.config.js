const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "us-cdbr-east-04.cleardb.com",
  user: "b1ef1cfb66f626",
  password: "6c47cefa",
  database: "heroku_3fe06f27ca0b5a8",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;