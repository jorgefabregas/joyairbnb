const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Indicates the shape of documents entering in the database
const taskSchema = new Schema({
    title:
    {
        type:String,
        required:true
    },

    description:
    {
        type:String,
        required:true
    },

    dueDate:
    {
        type:Date,
        required:true
    },

    priority:
    {
        type:String,
        required:true
    },

    status:
    {
        type:String,
        default:"Open"
    },

    dateCreated:
    {
        type:Date,
        default:Date.now()
    }
});


const taskModel = mongoose.model('Task', taskSchema);

module.exports = taskModel;