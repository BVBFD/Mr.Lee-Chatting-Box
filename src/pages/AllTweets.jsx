import React from "react";
import Editbar from "../components/Editbar";
import TweetCards from "../components/TweetCards";

const AllTweets = ({ user, tweets, tweetService, setTweets }) => {
  return (
    <div className="allTweetsBox">
      <Editbar
        tweetService={tweetService}
        user={user}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetCards
        tweetService={tweetService}
        setTweets={setTweets}
        user={user}
        tweets={tweets}
      />
    </div>
  );
};

export default AllTweets;
