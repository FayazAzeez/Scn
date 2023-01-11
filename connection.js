var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node"
});

con.connect(function(err) {
  if (err) console.log("Not Connected!");
  console.log("Connected!");
});

module.exports = con;