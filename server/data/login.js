import { getUsers } from "../db/database.js";
import MongoDb from "mongodb";

export async function findData(id) {
  return getUsers() //
    .findOne({ id })
    .then((data) => data);
}

export async function addData(data) {
  return getUsers() //
    .insertOne(data)
    .then((data) => data.insertedId);
}
