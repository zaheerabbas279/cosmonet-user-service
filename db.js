const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "content_market_user",
});

db.connect((err) => {
  if (err) {
    console.log("err connecting to the database");
  } else {
    console.log("conncted to the users database successfully");
  }
});

module.exports = db;
