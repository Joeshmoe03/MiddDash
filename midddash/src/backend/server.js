const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "",
});

app.listen(3306, () => {
  console.log("Listening...");
});
