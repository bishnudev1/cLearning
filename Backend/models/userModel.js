const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required:[true,'Enter a valid name']
    },
    email: {
        type: String,
        required:[true,'Enter a valid email']
    },
    password: {
        type: String,
        required:[true,'Enter a valid password']
    },
    cpassword: {
        type: String,
        required:[true,'Enter same password']
    },
    intro: {
        type: String,
        required:[true,'Enter some details about you']
    },
});

const user = new mongoose.model('cUsers',userModel);

module.exports = user;