const mongoose = require('mongoose')

//---INTIALIZED THE USER SCHEMA
const ContactSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
    
},{timestamps:true})

module.exports = mongoose.model('Contacts',ContactSchema);