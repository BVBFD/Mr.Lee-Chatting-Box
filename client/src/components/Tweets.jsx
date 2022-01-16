import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TweetCard from "./TweetCard";

const Tweets = ({
  allTweets,
  tweetService,
  allTweetsLength,
  setAllTweetsLength,
}) => {
  return (
    allTweets && (
      <div className="tweetsBox">
        {allTweets.map((tweet) => {
          return (
            <>
              <TweetCard
                tweet={tweet}
                allTweetsLength={allTweetsLength}
                setAllTweetsLength={setAllTweetsLength}
                tweetService={tweetService}
              />
            </>
          );
        })}
      </div>
    )
  );
};

export default Tweets;
