import { create, _delete, update, read, getAllDetails } from "../repository/mongodb.source.js";


//user controller functions which will call respective repositories methods and usecases methods
export async function createUser(data, next) {
  return await create(data, next);
}

export async function deleteUser(email, next) {
  return await _delete(email, next);
}

export async function updateUser(email, data, next) {
  return await update(email, data, next);
}

export async function getUser(email, next) {
  return await getAllDetails(email, next);
}

export async function readUserData(value, email, next) {
  return await read(value, email, next);
}
