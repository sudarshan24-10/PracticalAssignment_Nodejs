import Image from "../schema/imageSchema.js";
import User from "../schema/userSchema.js";
import CreateError from "../utils/error.js";

export async function create(data,next) {       // create user data
  try {

    const userData = await User.create(data);
    return userData;    // return user data
  } catch (err) {

    if (err.name === 'MongoServerError' && err.code === 11000) {
        next(new CreateError(400,"Duplicate email address"));
    }
    next(err);
  }
}

export async function _delete(email,next) {         // delete user data
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new CreateError(404, "User not found with this email address");
    }

    const deletedUser = await User.deleteOne({ email });
    if (!deletedUser) {
      throw new CreateError(500, "Error deleting user");
    }
    return { userId: user._id };   // returning user id after delete
  } catch (err) {
    next(err);
  }
}

export async function update(email, data,next) {            // update user details
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new CreateError(404, "User not found with this email address");
    }

    const updatedUser = await User.findOneAndUpdate({ email }, data, { new: true });
    return updatedUser;    // return updated user data
  } catch (err) {
    next(err);
  }
}

export async function read(next) {
  try {
    const users = await User.find();
    return users;    // return all user data 
  } catch (err) {
    next(err);
  }
}

export async function getAllDetails(email,next) {                 // return all details of a user
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new CreateError(404, "User not found with this email address");
    }else{
        return user;       // return user data
    }
  } catch (err) {
    next(err);
  }
}

export async function uploadImageMetaData(email,url,next) {        // uplaod image meta data to db
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new CreateError(404, "User not found with this email address");
      }
      await Image.create({ userRefId:user._id, url:url}); // creating new Image document with reference of user id
      console.log("saved image meta data successfully");
    } catch (err) {
      next(err);
    }
}
