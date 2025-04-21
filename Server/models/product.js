const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name :{
        type: String,
        required:true,
    },
    discription :{
        type: String,
        required:true,
    },
    ownerId:{
        type:String,
        required:true,
    },
    dailyRent:{
        type:Number,
        required:true,
    },
    availaible:{
        type:Boolean,
        required:true,
        default:true,
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

const Product = mongoose.model("Product",productSchema);
module.exports = Product;