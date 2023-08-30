module.exports = {
  HOST: process.env.MYSQL_HOST || "localhost",
  PORT: process.env.MYSQL_PORT || "3306",
  USERNAME: process.env.MYSQL_USERNAME || "test",
  PASSWORD: process.env.MYSQL_PASSWORD || "test_Password01",
  DATABASE: process.env.MYSQL_DATABASE || "tastylog",
  CONNECTION_LIMIT: process.env.MYSQL_CONNECTION_LIMIT ?
    parseInt(process.env.MYSQL_CONNECTION_LIMIT) : 10,
  QUEUEL_LIMIT : process.env.MYSQL_QUEUEL_LIMIT ?
    parseInt(process.env.MYSQL_QUEUEL_LIMIT) :0
};