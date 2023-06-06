const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    
    First_name:{
        type:String,
        required:[true,"first name is required"]
    },
    Last_name:{
        type:String,
        required:[true,"last name is required"]
    },
    Email:{
        type:String,
        lowercase:true,
        unique:true,
        required:[true,"Email is required"]
    },
    Password:{
        type:String,
        required:[true,"Password is required"]
    },
    role:{
        type:String,
    },
    profile:{
        type:String,
        default:""
    },


},{timestamps:true});

const User =mongoose.model("User",UserSchema);

module.exports = User;