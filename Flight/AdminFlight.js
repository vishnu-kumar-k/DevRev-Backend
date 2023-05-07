const con = require("../Connection/Connection")


const AdminFlight=(req,res)=>
{
    try{
        con.query("select * from flightDetails order by flightId desc",(err,result)=>
        {
            if(err)
                res.json({err})
            else{
                res.json({result})
            }    
        })
    }
    catch(err)
    {
        res.json({err})
    }
}
module.exports=AdminFlight;