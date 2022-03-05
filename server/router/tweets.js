import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as tweetController from "../controller/tweet.js";
import { isAuth } from "../middleware/isAuth.js";

const tweetsRouter = express.Router();

const validator = [
  body("text").trim().isLength({ min: 1 }).withMessage("3글자 이상 입력하세요"),
  validate,
];

tweetsRouter.get("/", isAuth, tweetController.getAllTweets);
// getAllTweets() 이렇게 표현해서 함수를 호출하면 안된다.
// 호출하면 결과값이 연결되기 때문에..
// 결과 값이 아니라 ()를 빼고 표현해서 함수 자체를 연결해주어야함.

tweetsRouter.get("/:id", isAuth, tweetController.getTweetsById);

tweetsRouter.post("/", isAuth, validator, tweetController.createTweet);

tweetsRouter.put("/:num", isAuth, validator, tweetController.updateTweet);

tweetsRouter.delete("/:num", isAuth, tweetController.deleteTweet);

export default tweetsRouter;
