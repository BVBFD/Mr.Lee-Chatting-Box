import React, { useEffect, useState } from "react";
import EditForm from "../components/EditForm";
import Tweets from "../components/Tweets";

const AllTweets = ({ user, tweetService, authService }) => {
  const [allTweets, setAllTweets] = useState([]);
  const [allTweetsLength, setAllTweetsLength] = useState();

  useEffect(() => {
    tweetService
      .getTweet()
      .then((tweets) => {
        setAllTweets(tweets);
        setAllTweetsLength(tweets.length);
      })
      .catch((err) => console.log(err));
  }, [user, tweetService, allTweetsLength]);

  return (
    <>
      <EditForm
        tweetService={tweetService}
        authService={authService}
        allTweets={allTweets}
        allTweetsLength={allTweetsLength}
        setAllTweetsLength={setAllTweetsLength}
      />
      <Tweets allTweets={allTweets} />
    </>
  );
};

export default AllTweets;
