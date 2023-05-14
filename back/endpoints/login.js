const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");
const secret = require("../regular folder/secret");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_14smdo",
  password: "fGQknR3J6Mln2E1Y",
  database: "lab_blank01_143kapi",
});

module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  mysql.query(
    `SELECT * FROM users WHERE username = ?`,
    [username],
    async (err, rows) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        numRows = rows.length;
        if (numRows == 0) {
          return res.json({
            success: false,
            message: "This account does not exist",
          });
        }
        const isMatch = await bcrypt.compare(password, rows[0].hashed_password);
        if (!isMatch) {
          res.json({
            success: false,
            message: "the password is not correct",
          });
        } else {
          const token = jwt.sign(
            { userId: rows[0].id, username: rows[0].username },
            secret,
            {
              expiresIn: "1d",
            }
          );
          res.cookie("user", token);
          res.json({
            success: true,
            message: "login success",
            user: rows[0],
            token: token,
          });
        }
      }
    }
  );
};
console.log("Login module has been imported successfully");
