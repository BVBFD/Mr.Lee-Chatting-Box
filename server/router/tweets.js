import express from "express";
import "express-async-errors";

let tweets = [
  {
    num: "1",
    id: "lse126",
    name: "Lee Seong Eun",
    url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
    text: "아카데미아에 온것을 환영합니다.",
    createdAt: "2021-05-09T04:20:57.000Zdfsd",
  },
  {
    num: "2",
    id: "lse126",
    name: "Lee Seong Eun",
    url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
    text: "안녕하십니까.",
    createdAt: "2021-05-09T04:20:57.000Z",
  },
];

const tweetsRouter = express.Router();

tweetsRouter.get("/", (req, res, next) => {
  res.status(200).json(tweets);
});

tweetsRouter.get("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  tweets = tweets.filter((tweet) => tweet.id === id);
  console.log(tweets);
  if (tweets) {
    res.status(200).json(tweets);
  } else if (!tweets) {
    res.status(200).json("There is no your tweet at all!");
  } else {
    res.status(404).json("Not Found!");
  }
});

tweetsRouter.post("/", (req, res, next) => {
  const { num, id, name, url, text, createdAt } = req.body;
  const newTweet = {
    num: num,
    id: id,
    name: name,
    url: url,
    text: text,
    createdAt: createdAt,
  };
  tweets.push(newTweet);
  res.status(201).json(newTweet);
  // res.status(201).json(tweets);
});

tweetsRouter.put("/:num", (req, res, next) => {
  const num = req.params.num;
  console.log(num);
  const originData = tweets.find((tweet) => tweet.num === num);
  const text = req.body.text;
  if (originData) {
    originData.text = text;
    res.status(200).json(originData);
  } else {
    res.status(404).json({ message: `Origin Tweet ${num} is not found!` });
  }
});

tweetsRouter.delete("/:num", (req, res, next) => {
  const num = req.params.num;
  tweets = tweets.filter((tweet) => tweet.num !== num);
  tweets;
  res.status(204).json(tweets);
});

export default tweetsRouter;
