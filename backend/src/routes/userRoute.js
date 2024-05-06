import express from "express";
import { createUser, deleteUser, getUser, readUserData, updateUser } from "../controllers/userController.js";
import { validateCreateUser, validateDeleteUser, validateGetUser, validateUpdateUser, handleValidationErrors } from "../utils/userDataValidator.js";

const userRouter = express.Router();

userRouter.post("/createUser", validateCreateUser, handleValidationErrors, async (req, res ,next) => {      // creates a new user and returns that user object
  try {
    const result = await createUser(req.body,next);
    res.json(result);     
  } catch (error) {
    throw error;
  }
});

userRouter.patch("/updateUser",validateUpdateUser,handleValidationErrors ,async (req, res,next) => {   // update user object and returns updated user object
    console
  try {
    const result = await updateUser(req.body.email,req.body,next);
    res.json(result);
  } catch (error) {
    throw error
  }
});

userRouter.delete("/deleteUser", validateDeleteUser, handleValidationErrors, async (req, res,next) => {   // deletes the user object and returns its obj id
  try {
    const result = await deleteUser(req.body.email,next);
    res.json(result);
  } catch (error) {
    throw error
  }
});

userRouter.get("/readUserData", async (req, res, next) => {   // returns all users 
  try {
    const result = await readUserData(next);
    res.json(result);
  } catch (error) {
    throw error;
  }
});

userRouter.get("/getUser", validateGetUser, handleValidationErrors, async (req, res, next) => {      // returns a user object 
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
