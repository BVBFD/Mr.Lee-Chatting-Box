import React from "react";
import Editbar from "../components/Editbar";
import TweetCards from "../components/TweetCards";

const AllTweets = (props) => {
  return (
    <div className="allTweetsBox">
      <Editbar />
      <TweetCards />
    </div>
  );
};

export default AllTweets;
