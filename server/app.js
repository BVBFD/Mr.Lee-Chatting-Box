import express from "express";
import cors from "cors";
import helmet from "helmet";
import "express-async-errors";
import morgan from "morgan";
import loginRouter from "./router/login.js";
import tweetsRouter from "./router/tweets.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

app.use("/login", loginRouter);

app.use("/tweets", tweetsRouter);

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(4000);
