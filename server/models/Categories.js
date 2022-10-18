const mongoose = require('mongoose')

//---INTIALIZED THE USER SCHEMA
const CategorySchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    collection_address:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }    
},{timestamps:true})

module.exports = mongoose.model('Categories',CategorySchema);