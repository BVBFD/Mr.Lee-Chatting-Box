import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Header from "../src/components/Header.jsx";
import AllTweets from "./pages/AllTweets.jsx";
import Login from "./pages/Login.jsx";
import MyTweets from "./pages/MyTweets.jsx";
import { useState } from "react";

const App = ({ authService }) => {
  const [user, setUser] = useState({});
  console.log(user);

  return (
    <div className="app">
      <Routes>
        <Route
          path={"/"}
          element={<Login authService={authService} setUser={setUser} />}
        />
        <Route
          path={`/${user.id}`}
          element={
            <>
              <Header user={user} />
              <AllTweets />
            </>
          }
        />
        <Route
          path={`/${user.id}/mytweets`}
          element={
            <>
              <Header user={user} />
              <MyTweets />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
