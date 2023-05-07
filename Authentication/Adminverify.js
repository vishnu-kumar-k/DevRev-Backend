
const jwt=require("jsonwebtoken");
const con = require("../Connection/Connection");

const Adminverify=async(req,res)=>
{
    const{token}=req.headers;
    try{
    var decode=jwt.verify(token,process.env.jwtToken);
    con.query(`select * from Admin where userId=${decode.id}`,(error,result)=>
    {
        if(error)
        {
            console.log(error)
        }
        else
        {
            res.json({status:true,name:result[0].name});
        }
    })
    }
    catch(err)
    {
        res.json({status:false});
    }

}
module.exports=Adminverify;