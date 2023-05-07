const con = require("../Connection/Connection");


const AddFlight=(req,res)=>
{
    const{name,sourceLocation,destinationLocation,departureDate,arrivalDate,flightPrice,airlineName,departureTime,arrivalTime}=req.body;
    var values=[[name,sourceLocation,destinationLocation,departureDate,arrivalDate,flightPrice,airlineName,departureTime,arrivalTime]] 
    try
    {
        con.query(`insert into flightDetails(flightName,sourceLocation,destinationLocation,departureDatetime,arrivalDatetime,flightPrice,airlineName,departureTime,arrivalTime) values ?`,[values],(err,result)=>{
            if(err)
            {
                console.log(err)
                res.json({err})
            }
            else{
                res.json({status:true,msg:"Added Successfully"})
            }    
        })   
    }
    catch(err)
    {
        console.log(err)
        res.json({err})
    }
}

module.exports=AddFlight;