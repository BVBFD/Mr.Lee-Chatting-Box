import React from "react";
import TweetCard from "./TweetCard";

const Tweets = ({ user, allTweets }) => {
  return (
    <>
      {allTweets.map((tweet) => {
        return (
          <>
            <TweetCard user={user} tweet={tweet} />
          </>
        );
      })}
    </>
  );
};

export default Tweets;
