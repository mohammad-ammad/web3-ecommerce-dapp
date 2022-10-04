const mongoose = require('mongoose')

//---INTIALIZED THE USER SCHEMA
const AttributesSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    sizeId:{type: mongoose.Schema.Types.ObjectId, ref:'Sizes'},
    colorId:{type: mongoose.Schema.Types.ObjectId, ref:'Colors'},
    availabilty:{
        type:Number
    },
    native_price:{
        type:Number,
        required:true
    },
    crypto_price:
    {
        type:Number,
        required:true
    }  
},{timestamps:true})

module.exports = mongoose.model('Attributes',AttributesSchema);