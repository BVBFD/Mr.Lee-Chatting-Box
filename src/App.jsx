import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Header from "../src/components/Header.jsx";
import AllTweets from "./pages/AllTweets.jsx";
import Login from "./pages/Login.jsx";
import MyTweets from "./pages/MyTweets.jsx";
import { useState } from "react";

const App = ({ authService, tweetService }) => {
  const [user, setUser] = useState({});
  const [tweets, setTweets] = useState([]);
  console.log(user);
  console.log(tweets);

  useEffect(async () => {
    tweetService
      .getTweet()
      .then((tweets) => setTweets(tweets))
      .catch(console.error);
    // setTweets(tweetService.tweets);
  }, [tweets, user]);

  return (
    <div className="app">
      <Routes>
        <Route
          path={"/"}
          element={<Login authService={authService} setUser={setUser} />}
        />
        <Route
          path={`/:id`}
          element={
            <>
              <Header user={user} />
              <AllTweets
                user={user}
                tweets={tweets}
                setTweets={setTweets}
                tweetService={tweetService}
              />
            </>
          }
        />
        <Route
          path={`/:id/mytweets`}
          element={
            <>
              <Header user={user} />
              <MyTweets user={user} tweets={tweets} />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
