const { query } = require("express");
const path = require("path");
const Transaction = require("./transaction");
const { sql } = require("@garafu/mysql-fileloader")({ root: path.join(__dirname, "./sql") });
const pool = require("./pool");

const mySQLClient = {
  executeQuery: async (query, values) => {
    let results = await pool.executeQuery(query, values);
    return results;
  },
  beginTransaction: async() => {
    let tran = new Transaction();
    await tran.begin();
    return tran;
  }
};

module.exports = {
  mySQLClient,
  sql
};