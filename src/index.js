import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthService from "./service/auth";
import TweetService from "./service/tweet";

const authService = new AuthService();
const tweetService = new TweetService();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App tweetService={tweetService} authService={authService} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
