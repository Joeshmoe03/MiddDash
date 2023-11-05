var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  database: "test",
  user: "root",
  password: "MiddDev23",
});

connection.connect(function (error) {
  if (error) {
    console.error("Error connecting: " + error.stack);
    return;
  }
  console.log("Connected as id " + connection.threadID);
});

connection.query("SELECT * FROM customer", function (error, results, fields) {
  if (error) {
    throw error;
  }
  results.forEach((result) => {
    console.log(result);
  });
});
