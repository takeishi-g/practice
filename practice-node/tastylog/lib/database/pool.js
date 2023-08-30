const {promisify} = require("util");
const config = require("../../config/mysql.config.js")
const mysql = require("mysql");
const { query } = require("express");
const pool = mysql.createPool({
  host: config.HOST,
  port: config.PORT,
  user: config.USERNAME,
  password: config.PASSWORD,
  database: config.DATABASE,
  connectionLimit: config.CONNECTION_LIMIT,
  queueLimit: config.QUEUEL_LIMIT
});
module.exports = {
  pool,
  getConnection: promisify(pool.getConnection).bind(pool),
  executeQuery: promisify(pool.query).bind(pool),
  releaseConnection: (connection) => {
    connection.release();
  },
  end: promisify(pool.end).bind(pool)
};