import React from "react";
import TweetCard from "./TweetCard";

const Tweets = ({ allTweets }) => {
  return (
    <>
      {allTweets.map((tweet) => {
        return (
          <>
            <TweetCard tweet={tweet} />
          </>
        );
      })}
    </>
  );
};

export default Tweets;
