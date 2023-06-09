import Produto from "../models/produtoModel.js";


const createServices = (body) => Produto.create(body);

const findAllServices = () => Produto.find().sort({ _id: -1 });

const findByServices = (id) => Produto.findById(id);

const updateServices = (
    id,
    name,
    type,
    preco,
    description,
    disponibilidade,
    user) => Produto.findOneAndUpdate({ _id: id }, {
        id,
        name,
        type,
        preco,
        description,
        disponibilidade,
        user
    });

const deleteServices = (id) => Produto.findByIdAndDelete(id)

const searchName = (name) => Produto.find({name: {$regex: `${name || ""}`, $options: "i"}}).sort({ _id: -1});

export default { createServices, findAllServices, findByServices, updateServices, deleteServices, searchName };
