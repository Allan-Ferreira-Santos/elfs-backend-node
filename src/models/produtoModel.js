import mongoose from "mongoose";


const proutoModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    preco: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    disponibilidade: {
        type: Boolean,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }

});

const Produto = mongoose.model("Produto", proutoModel);

export default Produto;