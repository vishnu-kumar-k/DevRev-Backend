const jwt = require("jsonwebtoken");
const con = require("../Connection/Connection");
const { compareSync } = require("bcrypt");


const Booking=async(req,res)=>
{
    console.log(req.body);
    var values=[];
    const {token,flightId,currentDate}=req.body;
    try{
    var decode=await jwt.verify(token,process.env.jwtToken)
    var v=[[decode.id,flightId,currentDate]]
    
    con.query(`insert into bookingDetails(userId,flightId,bookingDate) values ?`,[v],(err,result)=>
    {
        if(err)
            res.json({err})
        else{
            for(i=0;i<req.body.passenger.length;i++)
            {
                var t=[result.insertId,req.body.passenger[i].name,req.body.passenger[i].ageGroup,req.body.passenger[i].gender,req.body.passenger[i].phoneNumber]
                values.push(t);
            }
            con.query(`update flightDetails set seatCount=seatCount-${values.length} where flightId=${flightId}`)
            con.query(`insert into ticketDetails(bookingId,name,age,gender,phoneNumber) values ?`,[values],(error,result1)=>
            {
                if(error){
                    console.log(error,err)
                    res.json({error})
                }
                else
                {
                    res.json({status:true});
                }    
            })
        }    
        
    })
    
}
catch(err)
{
    res.json({err});
}

}
module.exports=Booking