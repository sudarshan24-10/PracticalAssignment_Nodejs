import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: String,
  email: {
    type: String,
    index:true,     // fetching user document using email so setting it as index for fast retrieval 
    required: true,
    unique:true // setting email as unique identifier to get, update, delete user details as there is no auth route for signin and signup or user specific tokens to recognize user
  },
  phone_no: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  address: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
