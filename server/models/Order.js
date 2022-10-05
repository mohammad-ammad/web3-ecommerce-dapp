const mongoose = require('mongoose')

//---INTIALIZED THE ORDERS SCHEMA
const OrdersSchema = new mongoose.Schema({
    product_id:{type: mongoose.Schema.Types.ObjectId, ref:'Products'},
    vendorAddress:{
        type:String,
        required:true
    },
    userAddress:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    status:{
        type:String,
        default:"Pending"
    }
},{timestamps:true})

module.exports = mongoose.model('Orders',OrdersSchema);