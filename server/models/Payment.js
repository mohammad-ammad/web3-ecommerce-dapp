const mongoose = require('mongoose')

//---INTIALIZED THE PAYMENT SCHEMA
const PaymentSchema = new mongoose.Schema({
   order_id:{type: mongoose.Schema.Types.ObjectId, ref:'Orders'},
   type:{
    type:String,
    default:"Crypto"
   },
   price:{
    type:Number,
    required:true 
   },
   transaction_id:{
    type:String
   }
},{timestamps:true})

module.exports = mongoose.model('Payments',PaymentSchema);