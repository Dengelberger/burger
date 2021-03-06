// SET PASSWORD HIDE 
require("dotenv").config();
// Set up MySQL connection.
var mysql = require("mysql");

var connection;

//DYNAMIC CONNECTION FOR EITHER HEROKU USER OR DEVELOPER
if(process.env.JAWSDB_URL) {

connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MySQL_PASS,
    database: "burgers_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
