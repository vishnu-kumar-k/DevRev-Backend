
const jwt=require("jsonwebtoken");
const con = require("../Connection/Connection");

const Userverify=async(req,res)=>
{
    const{token}=req.headers;
    try{
    var decode=jwt.verify(token,process.env.jwtToken);
    con.query(`select * from userDetails where userId=${decode.id}`,(error,result)=>
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
module.exports=Userverify;