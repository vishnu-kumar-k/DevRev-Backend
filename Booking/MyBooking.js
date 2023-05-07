
var jwt=require("jsonwebtoken");
const con = require("../Connection/Connection");
const MyBooking=async(req,res)=>
{
    const {token}=req.headers;
    try{
    var decode= await jwt.verify(token,process.env.jwtToken);
    con.query(`select * from bookingDetails
    join
    flightDetails
    on
    flightDetails.flightId=bookingDetails.flightId
     where bookingDetails.userId=${decode.id} order by bookingDetails.bookingId desc`,(err,result)=>
    {
        if(err)
            res.json({err});
        else{
            res.json({result});
        }    
    })
}
catch(err)
{
    res.json({err});
}
}

module.exports=MyBooking;