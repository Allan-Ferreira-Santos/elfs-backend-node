const route = require('express').Router();
const userController = require("../controller/userController");

route.post("/", userController.create);

module.exports = route;
