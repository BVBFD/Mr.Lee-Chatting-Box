import express from "express";
import "express-async-errors";

let tweets = [
  {
    num: "1",
    id: "lse126",
    name: "Lee Seong Eun",
    url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
    text: "리액트 화면 구성 마스터 할때 까지 안 잔다.",
    createdAt: "2021-05-09T04:20:57.000Zdfsd",
  },
  {
    num: "2",
    id: "lse126",
    name: "Lee Seong Eun",
    url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
    text: "2번째 문장 테스트 용",
    createdAt: "2021-05-09T04:20:57.000Z",
  },
];

const tweetsRouter = express.Router();

tweetsRouter.get("/", (req, res, next) => {
  res.status(200).json(tweets);
});

tweetsRouter.post("/", (req, res, next) => {
  const { num, id, name, url, text, createdAt } = req.body;
  const newTweet = {
    num: num.toString(),
    id: id.toString(),
    name: name.toString(),
    url: url.toString(),
    text: text.toString(),
    createdAt: createdAt.toString(),
  };
  tweets.push(newTweet);
  res.sendStatus(201);
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
  res.status(204).json(tweets);
});

export default tweetsRouter;
