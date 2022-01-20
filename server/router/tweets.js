import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";

const tweetsRouter = express.Router();

tweetsRouter.get("/", tweetController.getAllTweets);

tweetsRouter.get("/:id", tweetController.getTweetsById);

tweetsRouter.post("/", tweetController.createTweet);

tweetsRouter.put("/:num", tweetController.updateTweet);

tweetsRouter.delete("/:num", tweetController.deleteTweet);

export default tweetsRouter;
