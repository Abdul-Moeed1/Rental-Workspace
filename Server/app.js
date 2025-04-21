const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { signUp, logIn, postProduct } = require("./controllers/controller");
const { authMiddleware } = require("./middleware/middlewares");
require("./database/connection");
const port = 3000;

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Allowed HTTP methods
    credentials: true, // To allow cookies
}));

app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.post("/signUp" , signUp);

app.post("/logIn" , logIn);

app.post("/postProduct", authMiddleware , postProduct);



app.listen(port, ()=>{
    console.log(`App is live at port no: ${port}`);
    
})