const mongoose = require('mongoose');


const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    carrinho: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userModel);

module.exports = User;