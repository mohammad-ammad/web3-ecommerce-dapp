const mongoose = require('mongoose')

//---INTIALIZED THE PRODUCT SCHEMA
const ProductSchema = new mongoose.Schema({
    vendorAddress:{type:String, required:true},
    catId:{type: String, required:true},
    attribute:[
        {type: mongoose.Schema.Types.ObjectId, ref:'Attributes'}
    ],
    title:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
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

module.exports = mongoose.model('Products',ProductSchema);