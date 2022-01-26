import express from "express";
import {} from "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as loginController from "../controller/login.js";

const loginRouter = express.Router();

const validateCredential = [
  body("id")
    .trim()
    .notEmpty()
    .withMessage("id and password should be at least 5 characters"),
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("id and password should be at least 5 characters"),
  validate,
];

const validateSignUpData = [
  ...validateCredential,
  body("name").trim().notEmpty().withMessage("name is missing"),
  body("email").trim().isEmail().normalizeEmail().withMessage("invalid email"),
  body("url")
    .trim()
    .isURL()
    .withMessage("invalid URL")
    .optional({ nullable: true, checkFalsy: true }),
  validate,
];

// GET /login?id=:id
loginRouter.post(
  "/getLoginData",
  validateCredential,
  loginController.getLoginData
);

loginRouter.post("/", validateSignUpData, loginController.signUpLoginData);

export default loginRouter;
