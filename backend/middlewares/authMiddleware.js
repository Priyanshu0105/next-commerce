const jwt = require("jsonwebtoken");

async function verifyToken(req,res,next) {
    const authHeader = req.headers["authorization"];
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({error:"No token provided"});
    }
    const token = authHeader.split("Bearer ")[1];

    try{
        const decoded = await jwt.verify(token , process.env.JWT_KEY);
        req.user = decoded;
        next();
    }catch(err){
        res.status(403).json({error:"invalid or expired token"});
    }
}

module.exports = verifyToken;