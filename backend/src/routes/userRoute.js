import express from "express";
import { createUser, deleteUser, getUser, readUserData, updateUser } from "../controllers/userController.js";

const userRouter=express.Router();

userRouter.post("/createUser",createUser);

userRouter.patch("/updateUser",updateUser);

userRouter.delete("/deleteUser",deleteUser);

userRouter.get("/readUserData/:query",readUserData);

userRouter.get("/getUser",getUser);

export default userRouter;