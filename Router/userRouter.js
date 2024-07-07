import { Router } from "express";
import { getUser } from "../controllers/login_controllers.js";
import { postUser } from "../controllers/signup_controllers.js";

export const userRouter = Router();

userRouter.get('/user', getUser);
userRouter.post('/user', postUser)

