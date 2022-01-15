import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import { useState } from "react";
import AllTweets from "./pages/AllTweets.jsx";
import MyTweets from "./pages/MyTweets.jsx";

const App = ({ authService, tweetService }) => {
  const [user, setUser] = useState({});

  return (
    <div className="app">
      <Routes>
        <Route
          path={"/"}
          element={<Login authService={authService} setUser={setUser} />}
        />
        <Route
          path={"/:id/alltweets"}
          element={
            user && <AllTweets user={user} tweetService={tweetService} />
          }
        />
        <Route
          path={"/:id/mytweets"}
          element={user && <MyTweets user={user} tweetService={tweetService} />}
        />
      </Routes>
    </div>
  );
};

export default App;
