const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name:{
        type:String,
        required:true
    },
    Surname:{
        type:String,
        required:true
    },
    Login:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
})

module.exports = User = mongoose.model('user',UserSchema)