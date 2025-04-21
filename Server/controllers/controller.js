const User = require("../models/user");
const Product = require("../models/product");
const jwt = require("jsonwebtoken");

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
        } else {
            console.log(error);
            res.status(400);
            res.send("Cant create user");
        }
    }
}

const logIn = async (req, res) => {

    const { email, password } = req.body;
    let client;
    // console.log(email, password);

    try {
        client = await User.findOne({ email });
        // console.log(client);

        if (!client) {
            res.status(401).send("Inncorrect Credentials");
        }
        else if (client.password !== password) {
            res.status(401).send("Inncorrect Credentials");
        } else {
            let name = client.name;
            const token = jwt.sign({ email }, "Thissmysecretkeyforjsonwebtokenthatisverysecure", { expiresIn: "10m" });
            // console.log(token);
            res.cookie("jwt", token,
                {
                    httpOnly: true,  // Prevent client-side access to the cookie
                    secure: false,
                    maxAge: 10 * 60 * 1000,
                }
            )
            // res.json({ token });
            res.status(200).send("Login Susessful");
        }
    } catch (error) {
        res.status(401).send("Inncorrect Credentials");
    }

}

const postProduct = async (req, res) => {

    try {
        console.log(req.body);
        const {name , discription , dailyRent , city, image} = req.body;
        const ownerId = req.person._id.toString();
        const product = new Product({name , discription , dailyRent , city, image, ownerId });
        const data = await product.save();
        console.log(data);
        res.send("Product added Successfully");

    } catch (error) {
       
            console.log(error);
            res.status(400);
            res.send("Cant added product");
       
    }

}

module.exports = { signUp, logIn , postProduct };