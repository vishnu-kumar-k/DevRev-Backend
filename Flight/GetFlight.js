const con = require("../Connection/Connection")

const GetFlight=(req,res)=>
{
    const{destinationLocation,sourceLocation,date}=req.body;
    
    const q=`SELECT * FROM flightDetails WHERE ${
        date ? `departureDatetime='${date}'` : 'departureDatetime >= NOW()'
    } AND seatCount > 0 AND status=1 ${
        destinationLocation.length ? `AND destinationLocation='${destinationLocation}'` : ''
    } ${
        sourceLocation.length ? `AND sourceLocation='${sourceLocation}'` : ''
    }
    `
    try{
        con.query(q,(err,result)=>
        {
            if(err)
                res.json({err})
            else{
                res.json({result})
            }    
        })
    }
    catch(e)
    {
        res.json({e})
    }
}

module.exports=GetFlight;