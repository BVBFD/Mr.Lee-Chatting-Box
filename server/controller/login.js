import * as loginDataRepo from "../data/login.js";
import bcrypt from "bcrypt";
import {} from "express-async-errors";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

export async function getLoginDataName(req, res, next) {
  const id = req.query.id;
  const data = await loginDataRepo.findData(id);
  if (!data) {
    return res.status(404).json({ message: `invalid ID and Password!` });
  }
  console.log(data.id);
  res.status(200).json({ data });
}

export async function getLoginData(req, res, next) {
  const id = req.query.id;
  const data = await loginDataRepo.findData(id);
  if (!data) {
    return res.status(404).json({ message: `invalid ID and Password!` });
  }
  const pwd = req.body.password;
  const unhashedPwdCompare = await bcrypt.compare(pwd, data.password);
  if (!unhashedPwdCompare) {
    return res.status(404).json({ message: `invalid ID and Password!` });
  }
  const token = createJwtToken(id);
  res.status(200).json({ token, data });
}

export async function signUpLoginData(req, res, next) {
  const { id, password, name, email, url } = req.body;
  const found = await loginDataRepo.findData(id);
  if (found) {
    return res.status(409).json({ message: `this id ${id} already exist.` });
  }
  const hashedPwd = await bcrypt.hash(password, config.bcrypt.saltRound);
  const newLoginData = {
    id: id.toString(),
    password: hashedPwd.toString(),
    name: name.toString(),
    email: email.toString(),
    url: url.toString(),
  };
  await loginDataRepo.addData(newLoginData);
  res.status(201).json(`${newLoginData.id} has created!`);
}

const createJwtToken = (id) => {
  return jwt.sign({ id }, config.jwt.jwtSecret, {
    expiresIn: config.jwt.jwtExpires,
  });
};
