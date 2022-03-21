import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthService from './service/auth';
import TweetService from './service/tweet';
import HttpClient from './network/http';
import Socket from './network/socket.js';
// import socket from "socket.io-client";

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const authService = new AuthService(baseURL);
const socketClient = new Socket(baseURL, () => localStorage.getItem('token'));
const tweetService = new TweetService(httpClient, socketClient);

// const socketIO = socket(baseURL);
// socketIO.on("connect_error", (error) => {
//   console.log("socket error", error);
// });
// socketIO.on("tweets", (tweets) => console.log(tweets));

ReactDOM.render(
  <BrowserRouter>
    <App tweetService={tweetService} authService={authService} />
  </BrowserRouter>,
  document.getElementById('root')
);
