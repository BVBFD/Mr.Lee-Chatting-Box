import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';
import morgan from 'morgan';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import loginRouter from './router/login.js';
import tweetsRouter from './router/tweets.js';
import { config } from './config.js';
import { initSocketIO } from './connection/socket.js';
import { sequelize } from './db/database.js';
// import { Server } from "socket.io";

const app = express();

const corsOption = {
  origin: config.cors.allowedOrigin,
  optionsSuccessStatus: 200,
  credentials: true, // Access-Control-Allow-Credentials
};

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors(corsOption));
app.use(morgan('tiny'));

app.use('/login', loginRouter);
app.use('/tweets', tweetsRouter);
app.get('/getCSRFtoken', async (req, res, next) => {
  const CSRF_TOKEN = await bcrypt.hash(config.csrf.plainToken, 1);
  const options = {
    maxAge: config.jwt.jwtExpires * 1000,
    // 밀리 세컨드 기준임
    // 토큰 영원히 보관하는 것이 아니라 일정시간 지난 후 폐기
    httpOnly: true,
    // http로 전달해야함
    sameSite: 'none',
    // cors 허용
    secure: true,
    // cors 허용에 따른 보안 설정 true
  };

  res.cookie('CSRF_TOKEN', CSRF_TOKEN, options);
  res.status(200).json(CSRF_TOKEN);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

// db.getConnection().then(() => console.log("DB connection success!"));
sequelize.sync().then(() => {
  console.log(`Server is started...${new Date()}`);
  const server = app.listen(config.port);
  initSocketIO(server);
});
// const socketIO = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });

// socketIO.on("connection", (socket) => {
//   console.log("Client is here!");
//   socketIO.emit("dwitter", "New Tweet");
// });
