import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true,
    },
    schoolname:{
        type : String,
        required : true,
        // lowercase: true,
    },
    mobilenumber:{
        type : Number,
        required : true
    },
    whatsappnumber :{
        type : Number ,
        required : true
    },
    email :{
        type : String,
        required : true,
        validate: [validator.isEmail,"Provide a valid email !"],
    },
    tennumber :{
        type : String,
        required : true
    },
    twelvenumber :{
        type : String,
        required : true
    },
    city :{
        type : String
    },
    category :{
        type : String,
        required : true
    },
    course :{
        type : String
    }
});

export default mongoose.model("user",userSchema);