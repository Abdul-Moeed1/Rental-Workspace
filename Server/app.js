const express = require("express");
const { signUp } = require("./controllers/controller");
require("./database/connection");
const port = 3000;

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.post("/signUp" , signUp);

app.listen(port, ()=>{
    console.log(`App is live at port no: ${port}`);
    
})