import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthService from "./service/auth";
import TweetService from "./service/tweet";

const baseURL = process.env.REACT_APP_BASE_URL;
const authService = new AuthService(baseURL);
const tweetService = new TweetService(baseURL);

ReactDOM.render(
  <BrowserRouter>
    <App tweetService={tweetService} authService={authService} />
  </BrowserRouter>,
  document.getElementById("root")
);
