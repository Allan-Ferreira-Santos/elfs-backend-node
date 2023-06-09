import User from "../models/userModel.js";

const createServices = (body) => User.create(body);

const findAllServices = () => User.find().sort({_id: -1});

const findByServices = (id) => User.findById(id);

const userUpdateServices = (
    id,
    name,   
    email,
    password,
    endereco,
    typeUser) => User.findOneAndUpdate({ _id: id }, {
        name,
        email,
        password,
        endereco,
        typeUser
    });

    const deleteServices = (id) => User.findByIdAndDelete(id)

export default  { createServices, findAllServices, findByServices, userUpdateServices, deleteServices };  