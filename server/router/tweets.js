import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as tweetController from "../controller/tweet.js";

const tweetsRouter = express.Router();

const validator = [
  body("text").trim().isLength({ min: 3 }).withMessage("3글자 이상 입력하세요"),
  validate,
];

tweetsRouter.get("/", tweetController.getAllTweets);

tweetsRouter.get("/:id", tweetController.getTweetsById);

tweetsRouter.post("/", validator, tweetController.createTweet);

tweetsRouter.put("/:num", validator, tweetController.updateTweet);

tweetsRouter.delete("/:num", tweetController.deleteTweet);

export default tweetsRouter;
