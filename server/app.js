import express from "express";
import cors from "cors";
import helmet from "helmet";
import "express-async-errors";
import morgan from "morgan";
import loginRouter from "./router/login.js";
import tweetsRouter from "./router/tweets.js";
import { config } from "./config.js";
import { Server } from "socket.io";

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

const server = app.listen(config.host.localHost);
const socketIO = new Server(server, {
  cors: {
    origin: "*",
  },
});

socketIO.on("connection", (socket) => {
  console.log("Client is here!");
  socketIO.emit("dwitter", "Hello~!");
  socketIO.emit("dwitter", "Hi");
});
