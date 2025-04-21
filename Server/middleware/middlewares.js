const User = require("../models/user");

const authMiddleware = async(req , res , next) =>{
    try {
        const token = req.cookies.jwt;
        // console.log(token);
        if(!token){
            console.log("Res returned due to no token found");
            return (res.status(401).send("Token not found"))
        }
        const tokenArray = token.split('.');
        // console.log(tokenArray);
        const tokenPayload = JSON.parse(atob(tokenArray[1]));
        // console.log(tokenPayload);
        req.person = await User.findOne({email: tokenPayload.email});
        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).send("Token not found");
    }
}

module.exports = { authMiddleware }