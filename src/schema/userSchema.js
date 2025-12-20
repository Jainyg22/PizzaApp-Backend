const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:{
        type : String,
        required : [true , "First Name is required"],
        minlength : [5, "First name must be atleast 5 char long"],
        lowercase : true,
        trim : true ,
        maxlength: [20, "First name should be <= 20 chars"]
    },

    lastName:{
        type : String,
        required : [true , "Last Name is required"],
        minlength : [5, "Last name must be atleast 5 char long"],
        lowercase : true,
        trim : true ,
        maxlength: [20, "Last name should be <= 20 chars"]
    },

    mobileNumber:{
        type: String,
        trim: true,
        unique: [true,"Mobile number is already in use"],
        required: [true ,"Mobile number should be provided"],
        maxlength: [10, "Mobile number should of length 10"],
        minlength: [10, "Mobile number should of length 10"]
        
    },

    email:{
        type:String,
        trim : true,
        required : [true , "Email should be provided"],
        unique:[true, "Email is already in use"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:[true,"Password should be provided"],
        minlength:[6,"Password must be of atleast 6 chars long"]
    }
},{
    timestamps : true
});

const User = mongoose.model("User",userSchema); // collection

module.exports = User;