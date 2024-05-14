import express from "express";
import authController from "../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.post("/:id", authController.addUser);

authRouter.get("/:id", authController.getAllUsers);

export default authRouter;
