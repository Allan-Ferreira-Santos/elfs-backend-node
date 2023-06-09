import express from "express";
import userController from "../src/controller/userController.js";
import loginController from "../src/controller/loginController.js"
import produtoController from "../src/controller/produtoController.js"

const route = express.Router();

/* USER */
route.post("/user", userController.create);
route.get("/user", userController.findAll);
route.get("/user/:id", userController.findById);
route.patch("/user/:id", userController.userUpdate);
route.delete("/user/:id", userController.deleteById);

/* ATENTICAÇÃO */
route.post("/user/login", loginController.login);

/* PRODUTO */
route.post("/produto", produtoController.create);
route.get("/produto", produtoController.findAll);
route.get("/produto/search", produtoController.search);
route.get("/produto/:id", produtoController.findById);
route.patch("/produto/:id", produtoController.produtoUpdate);
route.delete("/produto/:id", produtoController.deleteById);

export default route;
