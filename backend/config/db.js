const mysql = require("mysql2");
const dotenv=require("dotenv")
dotenv.config()


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.db_pass,
  database: "ai_system"
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = db;