const con = require("../Connection/Connection");

const RemoveFlight = (req, res) => {
  const { id } = req.body;
  try {
    con.query(
      `update flightDetails set status=2 where flightId=${id}`,
      (err, result) => {
        if (err) res.json({ err });
        else {
          res.json({ status: true });
        }
      }
    );
  } catch (e) {
    res.json({ e });
  }
};
module.exports=RemoveFlight;
