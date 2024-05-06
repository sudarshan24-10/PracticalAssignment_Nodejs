import User from "../schema/userSchema.js";
import CreateError from "../utils/error.js";

export async function create(data,next) {
  try {

    const userData = await User.create(data);
    return userData;
  } catch (err) {

    if (err.name === 'MongoServerError' && err.code === 11000) {
        next(new CreateError(400,"Duplicate email address"));
    }
    next(err);
  }
}

export async function _delete(email,next) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new CreateError(404, "User not found with this email address");
    }

    const deletedUser = await User.deleteOne({ email });
    if (!deletedUser) {
      throw new CreateError(500, "Error deleting user");
    }

    return { userId: user._id };
  } catch (err) {
    next(err);
  }
}

export async function update(email, data,next) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new CreateError(404, "User not found with this email address");
    }

    const updatedUser = await User.findOneAndUpdate({ email }, data, { new: true });
    return updatedUser;
  } catch (err) {
    next(err);
  }
}

export async function read(value, email,next) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new CreateError(404, "User not found with this email address");
    }
    const v = user[value.value];
    return v;
  } catch (err) {
    next(err);
  }
}

export async function getAllDetails(email,next) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new CreateError(404, "User not found with this email address");
    }else{
        return user;
    }
  } catch (err) {
    next(err);
  }
}
