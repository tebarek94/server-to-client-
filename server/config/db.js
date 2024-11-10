const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const connction = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connction.connect((err) => {
  if (err) {
    console.log("Error connecting to database ", err);
  } else {
    console.log("Connected to mysql database");
  }
});
