const { check, validationResult } = require("express-validator");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_14smdo",
  password: "fGQknR3J6Mln2E1Y",
  database: "lab_blank01_143kapi",
});

module.exports = [
  async (req, res) => {
    const owner = req.query.userId;

    console.log(`Owner ${owner}`);
    try {
      connection.query(
        `SELECT * FROM events WHERE owner = ?`,
        [owner],
        (err, rows) => {
          if (err) {
            res.json({
              success: false,
              data: null,
              error: err.message,
            });
          } else {
            console.log(rows);
            if (rows.length > 0) {
              res.json({
                success: true,
                data: {
                  rows,
                },
                message: "Events successfully fetched",
              });
            } else {
              res.json({
                success: false,
                data: {
                  message: "Error: Event doesn't exist",
                },
              });
            }
          }
        }
      );
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR");
    }
  },
];
