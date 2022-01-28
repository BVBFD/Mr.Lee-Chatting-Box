import jwt from "jsonwebtoken";
import * as loginDataRepo from "../data/login.js";
const Auth_ERROR = { message: "Authentication Error" };

export const isAuth = async (req, res, next) => {
  const authToken = req.get("Authorization");
  if (!(authToken && authToken.startsWith("Bearer "))) {
    return res.status(401).json(Auth_ERROR);
  }

  const token = authToken.split(" ")[1];
  jwt.verify(
    token,
    "0lq@Ij!zElI8SGkt0zU5lEwwb1xf#RG7",
    async (error, decoded) => {
      if (error) {
        return res.status(401).json(Auth_ERROR);
      }
      const user = await loginDataRepo.findData(decoded.id);
      if (!user) {
        return res.status(401).json(Auth_ERROR);
      }
      req.authId = user.id;
      next();
    }
  );
};
