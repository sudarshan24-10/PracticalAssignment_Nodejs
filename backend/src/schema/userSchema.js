import mongoose from "mongoose";
import { GENDER } from "../utils/constants.js"; // Assuming you have defined GENDER in your validator file

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: String,
  email: {
    type: String,
    index: true,
    required: true,
    unique: true
  },
  phone_no: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: [GENDER.MALE, GENDER.FEMALE, GENDER.OTHERS], 
    required: true
  },
  address: String
});

const User = mongoose.model('User', userSchema);

export default User;
