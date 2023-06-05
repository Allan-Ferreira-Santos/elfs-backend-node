import User from "../models/userModel.js";

//criar
const create = (body) => User.create(body);
//listar todos usuarios
const findAllServices = () => User.find();
//Listar um usuario
const findByServices = (id) => User.findById(id);

const userUpdateServices = (
    id,
    name,   
    email,
    password,
    endereco,
    carrinho) => User.findOneAndUpdate({ _id: id }, {
        name,
        email,
        password,
        endereco,
        carrinho
    });

export default  { create, findAllServices, findByServices, userUpdateServices };  