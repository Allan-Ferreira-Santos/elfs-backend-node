import User from "../models/userModel.js";
import jwt from "jsonwebtoken";


const loginServices = (email) => User.findOne({email: email});

const generateToken = (id) => jwt.sign({id: id}, "4ee0ae6876c1417d2a9e8e374eefddc8", {expiresIn: 999999999999})

export default {loginServices ,generateToken}