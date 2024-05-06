import mongoose from "mongoose";
import { GENDER } from "../utils/constants.js"; 

const userSchema = new mongoose.Schema({ 
  first_name: {
    type: String,
    required: true
  },
  last_name: String, 
  email: {                   // there is no api to store user id and use it for curd operations so using email instead as default unique identifier to delete,update, get, read operations  
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
