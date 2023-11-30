const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8888;
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const configViewEngine = require("./config/viewEngine");
const configDB = require("./config/database");
const fileUpload = require("express-fileupload");
const { MongoClient } = require("mongodb")


app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);

configViewEngine(app);

(async () => {
  try {
    await configDB();

    // const url = process.env.Db_host_withdriver
    // const client = new MongoClient(url);
    // const db_name = process.env.DB_database
    // await client.connect();
    // console.log('Connected successfully to server');
    // const db = client.db(db_name)
    // const conn = db.collection("customers")
    app.listen(port, () => {
      console.log(`Be app listening on port ${port}`);
    });
  } catch (e) {
    console.log("error", e);
  }
})();
