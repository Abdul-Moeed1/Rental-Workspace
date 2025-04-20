const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name :{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    city:{
        type:String,
    },
    image:{
        type:String,
        default:"https://via.placeholder.com/150",
    },
    joinDate:{
        type:Date,
        default: Date.now,
    }
});

const User = mongoose.model("User",userSchema);
module.exports = User;