import User from "../models/userModel.js";

const loginServices = (email) => User.findOne({email: email});

export default {loginServices}