import React from "react";
import Header from "../src/components/Header.jsx";
import AllTweets from "./pages/AllTweets.jsx";
import Login from "./pages/Login.jsx";
import MyTweets from "./pages/MyTweets.jsx";

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <AllTweets />
      {/* <MyTweets /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
