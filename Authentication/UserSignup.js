const con = require("../Connection/Connection");
require("dotenv").config();
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")
const UserSignup =async (req, res) => {
  const { name, email, address, phoneNumber,password } = req.body;
  const p= await bcrypt.hash(password,1);
  var values = [[name, email, address, phoneNumber,p]];

  try {
    con.query(`select count(*) as count from userDetails where email='${email}'`,(err,result)=>
    {
        if(err)
            res.json({err})
        else
        {
          if(result[0].count!==0)
          {
            res.json({msg:"Account already exists",status:false})
          }
          else 
          {
            con.query(
              `insert into userDetails(name,email,Address,phoneNumber,password) values ?`,
              [values],
              (err, result) => {
                if(err)
                    res.json({err})
                else
                {
                  const token=jwt.sign({id:result.insertId},process.env.jwtToken,{expiresIn:"10d"})
                  res.json({jwt:token,name,status:true})
                }
                       
              }
            );
          }
        }    

    })
    
  } catch (err) {
    res.json({ err });
  }
};

module.exports=UserSignup;