const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Server Started")
}).catch((err)=>{
    console.log("error",err)
});

app.get("/",(req,res)=>{
    res.send("server is running");
});


const PORT = process.env.PORT;
app.listen(PORT,()=> console.log(`server running on ${PORT}`))