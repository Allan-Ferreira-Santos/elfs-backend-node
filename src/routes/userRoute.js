const route = require('express').Router();
const userController = require("../controller/userController");

route.post("/", userController.create);
route.get("/", userController.findAll);
route.get("/:id", userController.findById);

module.exports = route;
