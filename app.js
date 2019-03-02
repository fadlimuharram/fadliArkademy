const express = require("express");
const mysql = require("mysql");
const path = require("path");
const bodyParser = require("body-parser");

const {
  getHome,
  getTambahProduct,
  tambahProduct,
  getTambahCategory,
  tambahCategory
} = require("./routes");

const port = process.env.PORT || 3000;

var app = express();

const dbConfig = {
  user: "root",
  password: "root",
  database: "gudangArkademy",
  host: "localhost",
  port: 8889
};

const db = mysql.createConnection(dbConfig);

db.connect(err => {
  if (err) console.log(err);
  console.log("connected");
});

global.db = db;

app.set("port", port);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs"); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", getHome);
app.get("/add-product", getTambahProduct);
app.post("/add-product", tambahProduct);
app.get("/add-category", getTambahCategory);
app.post("/add-category", tambahCategory);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
