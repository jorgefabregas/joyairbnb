const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Indicates the shape of documents entering in the database
const userSchema = new Schema({
    

    firstname:
    {
        type:String,
        required:true
    },

    lastname:
    {
        type:String,
        required:true
    },

    email:
    {
        type:String,
        required:true
    },

    password:
    {
        type:String,
        required:true
    },

    profilePic:
    {
        type:String,
    },

    dateCreated:
    {
        type:Date,
        default:Date.now()
    }
});


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;