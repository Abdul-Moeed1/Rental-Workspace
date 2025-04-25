const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    productId:{
        type:String,
        required:true,
    },
    customerId:{
        type:String,
        required:true,
    },
    totalRent:{
        type:Number,
    },
    myCustomTTLField: 
    { type: Date }
});

const Order = mongoose.model("Order",orderSchema);
module.exports = Order;