import React from "react";
import { useParams } from "react-router-dom";
import TweetCard from "../components/TweetCard";
import TweetCards from "../components/TweetCards";

const MyTweets = ({ user, tweets }) => {
  const { id } = useParams();
  return (
    <div className="myTweetsBox">
      <ul>
        {tweets.map((tweet) => {
          return id === tweet.id ? <TweetCard user={user} tweet={tweet} /> : "";
        })}
      </ul>
    </div>
  );
};

export default MyTweets;
