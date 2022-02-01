import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthService from "./service/auth";
import TweetService from "./service/tweet";
import HttpClient from "./network/http";
import TokenStorage from "./db/token";
import socket from "socket.io-client";

const tokenStorage = new TokenStorage();
const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const authService = new AuthService(baseURL, tokenStorage);
const tweetService = new TweetService(httpClient, tokenStorage);

const socketIO = socket(baseURL);
socketIO.on("connect_error", (error) => {
  console.log("socket error", error);
});
socketIO.on("dwitter", (message) => console.log(message));

ReactDOM.render(
  <BrowserRouter>
    <App tweetService={tweetService} authService={authService} />
  </BrowserRouter>,
  document.getElementById("root")
);
