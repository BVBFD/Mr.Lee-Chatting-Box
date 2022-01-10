import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../src/components/Header.jsx";
import AllTweets from "./pages/AllTweets.jsx";
import Login from "./pages/Login.jsx";
import MyTweets from "./pages/MyTweets.jsx";

const App = (props) => {
  return (
    <div className="app">
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route
          path={"/:username"}
          element={
            <>
              <Header />
              <AllTweets />
            </>
          }
        />
        <Route
          path={"/:username/mytweets"}
          element={
            <>
              <Header />
              <MyTweets />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
