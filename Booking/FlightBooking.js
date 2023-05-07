var jwt = require("jsonwebtoken");
const con = require("../Connection/Connection");
const FlightBooking = async (req, res) => {
  const { id } = req.body;
  try {
    con.query(
      `select * from bookingDetails
    join
    ticketDetails
    on
    ticketDetails.bookingId=bookingDetails.bookingId
     where bookingDetails.flightId=${id} order by bookingDetails.bookingId desc`,
      (err, result) => {
        if (err) res.json({ err });
        else {
          res.json({ result });
        }
      }
    );
  } catch (err) {
    res.json({ err });
  }
};

module.exports = FlightBooking;
