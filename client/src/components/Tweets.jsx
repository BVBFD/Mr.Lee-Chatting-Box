import React from "react";
import TweetCard from "./TweetCard";

const Tweets = ({ allTweets }) => {
  return (
    allTweets && (
      <div className="tweetsBox">
        {allTweets.map((tweet) => {
          return (
            <>
              <TweetCard tweet={tweet} />
            </>
          );
        })}
      </div>
    )
  );
};

export default Tweets;
