const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function handleSignup(req,res) {
    const { name, email, password } = req.body;
    try{
        const existing = await User.findOne({email});
        if(existing) return res.status(400).json({error:"User Already Exists"});
        const user = await User.create({
            name,
            email,
            password,
        });
        res.status(201).json({message:"User registered successfully"});

    }catch(err){
        res.status(500).json({error: err.message});
    }  
};
async function handleLogin(req,res){
    const {email,password} = req.body;
  try{    
    const user = await User.findOne({email})
    if(!user) return res.status(400).json({error:"User not found"});
    const checkpass = await bcrypt.compare(password,user.password);
    if(!checkpass) return res.status(401).json({error: "invalid credentials"})

        const token = jwt.sign({
            id:user._id, isAdmin: user.isAdmin},
            process.env.JWT_KEY,
            {expiresIn:"7d"});


            res.json({token,user:{
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
            }});
        }
        catch(err){
        res.status(500).json({error: err.message});
    }

}
module.exports = {
    handleSignup,
    handleLogin,
}