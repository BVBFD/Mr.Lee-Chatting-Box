import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../src/components/Header.jsx";
import AllTweets from "./pages/AllTweets.jsx";
import Login from "./pages/Login.jsx";
import MyTweets from "./pages/MyTweets.jsx";
import { useState } from "react";

const App = ({ authService, tweetService }) => {
  const [user, setUser] = useState({});
  const [tweets, setTweets] = useState([]);

  tweetService
    .getTweet()
    .then((tweets) => setTweets(tweets))
    .catch(console.error);

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
              <MyTweets
                user={user}
                tweets={tweets}
                setTweets={setTweets}
                tweetService={tweetService}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
