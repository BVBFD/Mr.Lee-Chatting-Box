import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import AllTweets from "./pages/AllTweets.jsx";
import MyTweets from "./pages/MyTweets.jsx";
import Header from "./components/Header.jsx";

const App = ({ authService, tweetService, tokenStorage }) => {
  const user = localStorage.getItem("user");

  return (
    <div className="app">
      <Routes>
        <Route path={"/"} element={<Login authService={authService} />} />
        <Route
          path={"/:id/alltweets"}
          element={
            user && (
              <>
                <Header authService={authService} tokenStorage={tokenStorage} />
                <AllTweets
                  authService={authService}
                  tweetService={tweetService}
                />
              </>
            )
          }
        />
        <Route
          path={"/:id/mytweets"}
          element={
            <>
              <Header />
              <MyTweets tweetService={tweetService} />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
