const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alstjd48119!",
  database: "NODE_DB",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connect");
});

module.exports = con;
