const express = require("express");
const app = express();
const mysql = require("mysql");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const options = {
  host: "localhost",
  user: "root",
  password: "alstjd48119!",
  database: "NODE_DB",
};

const sessionStore = new MySQLStore(options);

const con = mysql.createConnection(options);

con.connect(function (err) {
  if (err) throw err;
  console.log("connect");
});

app.use(
  session({
    key: "session_cookie_name",
    secret: "session_cookie_secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

sessionStore
  .onReady()
  .then(() => {
    // MySQL session store ready for use.
    console.log("MySQLStore ready");
  })
  .catch((error) => {
    // Something went wrong.
    console.error(error);
  });

module.exports = { con, app };