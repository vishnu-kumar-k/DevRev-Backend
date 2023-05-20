const con = require("../Connection/Connection");

const Location = (req, res) => {
  con.query(
    "select DISTINCT destinationLocation from flightDetails WHERE departureDatetime >= CURDATE() and seatCount>0",
    (err, result) => {
      if (err) res.json({ err });
      else {
        con.query(
          "select DISTINCT sourceLocation from flightDetails WHERE departureDatetime >= CURDATE() and seatCount>0",
          (err, result1) => {
            if (err) res.json({ err });
            else {
              res.json({ des: result, sou: result1 });
            }
          }
        );
      }
    }
  );
};
module.exports = Location;
