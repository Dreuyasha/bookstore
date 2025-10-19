const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 8081;

const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "rootpassword",
  database: "bookstore",
});

app.get("/books", (req, res) => {
  db.query("SELECT title, author FROM books", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
