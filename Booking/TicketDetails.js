const con = require("../Connection/Connection");

const TicketDetails = (req, res) => {
  const { id } = req.body;
  try {
    con.query(
      `select * from ticketDetails where bookingId =${id}`,
      (error, result) => {
        if (error) res.json({ error });
        else {
          res.json({ result });
        }
      }
    );
  } catch (err) {
    res.json({ err });
  }
};
module.exports = TicketDetails;
