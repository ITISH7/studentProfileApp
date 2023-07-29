const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    Name: {
        type:String,
        required:true
    },
    className: {
        type:String,
        required:true
    },
    schoolName: {
        type:String,
        required:true
    },
    fatherName: {
        type:String,
        required:true
    },
    motherName: {
        type:String,
        required:true
    },
    addressName: {
        type:String,
        default:"kakad slum Indore"
    },
    age:{
        type:Number,
        default:null
    },
    mobile:{
        type:Number,
        default:null
    },
    disability:{
        type:Boolean,
        default:false
    },
    image:{
        type:String,
        default:'not available'
    }
}
)
module.exports = mongoose.model('Profile',profileSchema);