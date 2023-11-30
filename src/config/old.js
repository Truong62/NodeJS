require("dotenv").config();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_host,
  port: process.env.DB_port,
  password: process.env.DB_password,
  user: process.env.DB_user,
  database: process.env.DB_database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
