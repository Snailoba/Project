const express = require("express");
const app = express();
const port = 6000;
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_14smdo",
  password: "fGQknR3J6Mln2E1Y",
  database: "lab_blank01_143kapi",
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
