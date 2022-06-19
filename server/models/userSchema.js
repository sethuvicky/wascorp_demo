const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    due: {
        type: String,
        required: true
    },
    sendname: {
        type: String,
        required: true,
    },
    sendaddress: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    useraddress: {
        type: String,
        required: true
    },
 
});

const Users = new mongoose.model("users",userSchema);


module.exports = Users;