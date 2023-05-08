const con = require("../Connection/Connection");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserLogin = (req, res) => {
  const { email, password } = req.body;
  try {
    con.query(
      `select * from userDetails where email='${email}'`,
      async (err, result) => {
        if (err) res.json({ err });
        else {
          if (result.length === 0) {
            res.json({ status: false, msg: "Account not Exists" });
          } else {
            if (bcrypt.compare(password, result[0].password)) {
              const token = await jwt.sign(
                { id: result[0].userId },
                process.env.jwtToken,
                { expiresIn: "1d" }
              );
              res.json({ jwt: token, name: result[0].name, status: true });
            }
          }
        }
      }
    );
  } catch (e) {
    res.json({ e });
  }
};

module.exports = UserLogin;
