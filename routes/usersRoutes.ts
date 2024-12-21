import {Router} from "express";
import authController from "../controllers/usersController";

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

export {router as userRouter};