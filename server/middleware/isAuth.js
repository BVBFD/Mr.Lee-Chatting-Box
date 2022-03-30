import jwt from 'jsonwebtoken';
import { config } from '../config.js';
import * as loginDataRepo from '../data/login.js';
const Auth_ERROR = { message: 'Authentication Error' };

export const isAuth = async (req, res, next) => {
  // 1. Cookie (for Browser)
  // 2. Header (Non-Browser Client)

  let token;
  // Check the header first
  const authToken = req.get('Authorization');
  if (authToken && authToken.startsWith('Bearer ')) {
    token = authToken.split(' ')[1];
  }

  // if no token in the header, check the cookie
  // if (!token) {
  //   console.log(req.cookies);
  //   console.log(req.cookies.token);
  //   token = req.cookies['token'];
  // }

  // console.log(token);

  if (!token) {
    return res.status(401).json(Auth_ERROR);
  }

  jwt.verify(token, config.jwt.jwtSecret, async (error, decoded) => {
    if (error) {
      return res.status(401).json(Auth_ERROR);
    }
    const user = await loginDataRepo.findData(decoded.id);
    if (!user) {
      return res.status(401).json(Auth_ERROR);
    }
    req.authId = user.id;
    next();
  });
};
