import express from "express";
import { createUser, deleteUser, getUser, readUserData, updateUser } from "../controllers/userController.js";
import { validateCreateUser, validateDeleteUser, validateGetUser, validateReadUserData, validateUpdateUser, handleValidationErrors } from "../utils/userDataValidator.js";

const userRouter = express.Router();

userRouter.post("/createUser", validateCreateUser, handleValidationErrors, async (req, res ,next) => {
  try {
    const result = await createUser(req.body,next);
    res.json(result);
  } catch (error) {
    throw error;
  }
});

userRouter.patch("/updateUser",validateUpdateUser,handleValidationErrors ,async (req, res,next) => {
    console
  try {
    const result = await updateUser(req.body.email,req.body,next);
    res.json(result);
  } catch (error) {
    throw error
  }
});

userRouter.delete("/deleteUser", validateDeleteUser, handleValidationErrors, async (req, res,next) => {
  try {
    const result = await deleteUser(req.body.email,next);
    res.json(result);
  } catch (error) {
    throw error
  }
});

userRouter.get("/readUserData/:value", validateReadUserData, handleValidationErrors, async (req, res,next) => {
  try {
    const result = await readUserData(req.params, req.body.email,next);
    res.json(result);
  } catch (error) {
    throw error;
  }
});

userRouter.get("/getUser", validateGetUser, handleValidationErrors, async (req, res, next) => {
  try {
    const result = await getUser(req.body.email,next);
    if(result){
        res.json(result);
    };
  } catch (error) {
    throw error;
  }
});

export default userRouter;
