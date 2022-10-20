const mongoose = require('mongoose')

//---INTIALIZED THE ORDERS SCHEMA
const OrdersSchema = new mongoose.Schema({
    product_id:{type: mongoose.Schema.Types.ObjectId, ref:'Products'},
    userAddress:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    trxId:{type:Number},
    status:{
        type:String,
        default:"Pending"
    }
},{timestamps:true})

module.exports = mongoose.model('Orders',OrdersSchema);