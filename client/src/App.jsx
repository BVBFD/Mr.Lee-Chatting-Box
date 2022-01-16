import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import { useState } from "react";
import AllTweets from "./pages/AllTweets.jsx";
import MyTweets from "./pages/MyTweets.jsx";
import Header from "./components/Header.jsx";

const App = ({ authService, tweetService }) => {
  const [user, setUser] = useState({});
  console.log(user);
  // 리액트는 페이지가 바뀌는 그 기준으로 서버 통신을 해서 데이터를 받아와야함
  // ex) 로그인 뒤, AllTweets 페이지 접속을 하면 이 user 데이터가 유지가 되지만
  // 로그인 페이지 거치지 않고 AllTweets 페이지 접속시 로그인 페이지에서
  // 유저 데이터 받는 통신이 이루어지지 않기때문에 페이지 기준으로 통신해서 데이터 받아와야함.

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
            user && (
              <>
                <Header />
                <AllTweets
                  user={user}
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
