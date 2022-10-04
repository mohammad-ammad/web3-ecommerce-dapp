const mongoose = require('mongoose')

//---INTIALIZED THE USER SCHEMA
const ColorSchema = new mongoose.Schema({
    color:{
        type: String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }    
},{timestamps:true})

module.exports = mongoose.model('Colors',ColorSchema);