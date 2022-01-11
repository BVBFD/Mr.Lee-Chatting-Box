import React from "react";
import TweetCard from "./TweetCard";

const TweetCards = ({ user, tweets }) => {
  return (
    <ul className="tweetCardsUl">
      {tweets.map((tweet) => {
        return <TweetCard user={user} tweet={tweet} />;
      })}
    </ul>
  );
};

export default TweetCards;
