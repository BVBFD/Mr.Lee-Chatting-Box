import React from "react";
import Header from "../src/components/Header.jsx";
import AllTweets from "./pages/AllTweets.jsx";
import MyTweets from "./pages/MyTweets.jsx";

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <AllTweets />
      {/* <MyTweets /> */}
    </div>
  );
};

export default App;
