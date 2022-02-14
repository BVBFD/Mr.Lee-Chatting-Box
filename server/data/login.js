import { useVirtualId } from "../db/database.js";
import Mongoose from "mongoose";

const loginDatasSchema = new Mongoose.Schema({
  id: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  url: String,
});

useVirtualId(loginDatasSchema);
const LoginDatas = Mongoose.model("LoginDatas", loginDatasSchema);

export async function findData(id) {
  // return getUsers() //
  //   .findOne({ id })
  //   .then((data) => data);
  return LoginDatas.findOne({ id });
}

export async function addData(data) {
  // return getUsers() //
  //   .insertOne(data)
  //   .then((data) => data.insertedId);
  return LoginDatas(data)
    .save()
    .then((data) => data.id);
}
