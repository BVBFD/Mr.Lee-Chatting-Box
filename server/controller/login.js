import * as loginDataRepo from '../data/login.js';
import bcrypt from 'bcrypt';
import {} from 'express-async-errors';
import jwt from 'jsonwebtoken';
import { config } from '../config.js';

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
  const options = {
    maxAge: config.jwt.jwtExpires * 1000,
    // 밀리 세컨드 기준임
    // 토큰 영원히 보관하는 것이 아니라 일정시간 지난 후 폐기
    httpOnly: true,
    // http로 전달해야함
    sameSite: 'none',
    // cors 허용
    secure: true,
    // cors 허용에 따른 보안 설정 true
  };

  res.cookie('token', token, options);
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
