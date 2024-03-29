require("dotenv").config();

const mongoose = require("mongoose");

// const connection2 = mysql.createPool({
//   host: process.env.DB_host,
//   port: process.env.DB_port,
//   password: process.env.DB_password,
//   user: process.env.DB_user,
//   database: process.env.DB_database,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

const dbState = [
  {
    value: 0,
    label: "disconnected",
  },
  {
    value: 1,
    label: "connected",
  },
  {
    value: 2,
    label: "connecting",
  },
  {
    value: 3,
    label: "disconnecting",
  },
];

const connection = async () => {
  try {
    const obj = {
      user: process.env.DB_user,
      pass: process.env.DB_password,
      dbName: process.env.DB_database,
    };
    await mongoose.connect(process.env.DB_host, obj);
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value == state).label, "to db"); // connected to db
  } catch (error) {
    console.log("error: ", error);
  }
};

module.exports = connection;
