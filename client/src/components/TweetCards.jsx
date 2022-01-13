import React from "react";
import TweetCard from "./TweetCard";

const TweetCards = ({ user, tweets, tweetService, setTweets }) => {
  return (
    <ul className="tweetCardsUl">
      {tweets.map((tweet) => {
        return (
          <TweetCard
            user={user}
            tweet={tweet}
            setTweets={setTweets}
            tweetService={tweetService}
          />
        );
      })}
    </ul>
  );
};

export default TweetCards;
