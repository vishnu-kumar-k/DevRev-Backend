const mysql = require("mysql");
require("dotenv").config();
const con = mysql.createConnection({
  host: process.env.a.split('').reverse().join('')+process.env.b.split('').reverse().join(''),
  password: process.env.c.slice(0,15).split('').reverse().join('')+process.env.d,
  user: process.env.e.split("00").reverse().join(""),
  database: process.env.database,
});

try {
  con.connect((err, result) => {
    if (err) console.log("Some Error  " + err);
    else console.log("Connected to database");
  });
} catch (err) {+
  console.log(err);
}
module.exports = con;
