function verifyAdmin(req,res,next){
    if(!req.user || !req.user.isAdmin){
        return res.status(403).json({error:"Access denied . Admins Only!"});
    }
    next();
}

module.exports = verifyAdmin;