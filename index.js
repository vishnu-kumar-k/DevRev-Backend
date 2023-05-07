const express=require("express");
const cors=require("cors")
const router = require("./Routes");
const app=new express()
app.use(express.json());
app.use(cors())

app.listen(8001,()=>console.log("Running on Port Number 8001"))

app.use(router)