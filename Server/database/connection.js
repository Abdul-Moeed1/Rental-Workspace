const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/RentalWorkSpace").then(()=>{
    console.log("DataBase connection successful");
}).catch((e)=>{
    console.log(`Error while connecting to database : ${e}`);
})