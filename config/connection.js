var mysql = require("mysql");

var connection = mysql.createConnection({
  database: "burger_db",
  host: "localhost",
  port: 3306,
  user: "root",
  password: ""
});

connection.connect(function(err) {
  if (err) {
    console.error("Connection Error " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;