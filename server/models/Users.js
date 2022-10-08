const mongoose = require('mongoose')

//---INTIALIZED THE USER SCHEMA
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        default:""
    },
    shop_address:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    password:{
        type:String,
        default:""
    },
    wallet:{
        type:String,
        required:true,
        unique:true
    },
    auth_type:{
        type:String
    },
    DOB:{
        type:String,
        default:""
    },
    phone:{
        type:Number,
        default:""
    }

},{timestamps:true})

module.exports = mongoose.model('Users',UserSchema);