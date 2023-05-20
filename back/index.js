const express = require("express");
const app = express();
const port = 2000;
const mysql = require("mysql2");
const cors = require("cors");
const login = require("./endpoints/login");
const register = require("./endpoints/register");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_14smdo",
  password: "fGQknR3J6Mln2E1Y",
  database: "lab_blank01_143kapi",
});

connection.connect(() => {
  console.log("Database is connected");
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is working");
});

app.post("/log", login);

app.post("/reg", register);

// app.get("/cal", calendar);

// app.get("/weat", weather);

// app.get("/sub", submit);

// app.get("/inv", inventory);

// app.get("/comb", combo);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// process.on("uncaughtException", function (err) {
//   console.log(err);
// });
