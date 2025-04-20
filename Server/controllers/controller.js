const User = require("../models/user");

const signUp = async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        const data = await user.save();
        console.log(data);
        res.send("User Created Successfully");

    } catch (error) {
        if (error.code === 11000) {
            console.log(error);
            res.status(409);
            res.json({ "email": "duplicate" });
        }else{
            console.log(error);
            res.status(400);
            res.send("Cant create user");
        }
    }
}

module.exports = {signUp};