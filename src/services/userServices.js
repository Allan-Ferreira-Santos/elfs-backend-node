const User = require("../models/userModel");

//criar
const create = (body) => User.create(body);
//listar todos usuarios
const findAllServices = () => User.find();
//Listar um usuario
const findByServices = (id) => User.findById(id);
    
module.exports = {create , findAllServices , findByServices};  