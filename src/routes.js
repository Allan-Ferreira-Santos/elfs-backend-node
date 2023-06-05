import express from "express";
import userController from "../controller/userController.js"
const route = express.Router();

/* USER */

route.post("/user", userController.create);
route.get("/user", userController.findAll);
route.get("/user:id", userController.findById);
route.patch("/user:id", userController.userUpdate);

export default route;
