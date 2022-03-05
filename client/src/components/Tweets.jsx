import React from "react";
import TweetCard from "./TweetCard";

const Tweets = ({
  allTweets,
  tweetService,
  allTweetsLength,
  setAllTweetsLength,
  setMyTweetsLength,
}) => {
  return (
    <div className="tweetsBox">
      {allTweets.map((tweet) => {
        return (
          <>
            <TweetCard
              tweet={tweet}
              allTweetsLength={allTweetsLength}
              setAllTweetsLength={setAllTweetsLength}
              tweetService={tweetService}
              setMyTweetsLength={setMyTweetsLength}
            />
          </>
        );
      })}
    </div>
  );
};

export default Tweets;
