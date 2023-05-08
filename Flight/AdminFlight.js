const con = require("../Connection/Connection");

const AdminFlight = (req, res) => {
  const { len } = req.body;
  var count;
  try {
    if (len === 0) {
      con.query(
        `select count(*) as count from flightDetails`,
        (err, result) => {
          count = result[0].count;
        }
      );
    }
    con.query(
      `select * from flightDetails order by flightId desc limit 10 offset ${
        len * 10
      } `,
      (err, result) => {
        if (err) {
          console.log(err);
          res.json({ err });
        } else {
          res.json({ result, count });
        }
      }
    );
  } catch (err) {
    res.json({ err });
  }
};
module.exports = AdminFlight;
