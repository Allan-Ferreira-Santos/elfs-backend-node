import mongoose from "mongoose";

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
    typeUser: {
        type: Boolean,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model("User", userModel);

export default User;