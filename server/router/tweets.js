import express from "express";
import "express-async-errors";
import * as tweetRepository from "../data/tweet.js";

const tweetsRouter = express.Router();

tweetsRouter.get("/", async (req, res, next) => {
  const tweets = await tweetRepository.getAll();
  res.status(200).json(tweets);
});

tweetsRouter.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  const filteredTweets = await tweetRepository.getAllById(id);
  if (filteredTweets) {
    res.status(200).json(filteredTweets);
  } else if (!filteredTweets) {
    res.status(200).json("There is no your tweet at all!");
  } else {
    res.status(404).json("Not Found!");
  }
});

tweetsRouter.post("/", async (req, res, next) => {
  const { num, id, name, url, text, createdAt } = req.body;
  const newTweet = await tweetRepository.create(
    num,
    id,
    name,
    url,
    text,
    createdAt
  );
  res.status(201).json(newTweet);
});

tweetsRouter.put("/:num", async (req, res, next) => {
  const num = req.params.num;
  const text = req.body.text;
  const originData = await tweetRepository.update(num, text);
  if (originData) {
    res.status(200).json(originData);
  } else {
    res.status(404).json({ message: `Origin Tweet ${num} is not found!` });
  }
});

tweetsRouter.delete("/:num", async (req, res, next) => {
  const num = req.params.num;
  const editedTweets = await tweetRepository.remove(num);
  res.status(204).json(editedTweets);
});

export default tweetsRouter;
