import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Tweets from "../components/Tweets";

const MyTweets = ({ tweetService }) => {
  const [myTweets, setMyTweets] = useState([]);
  const [myTweetsLength, setMyTweetsLength] = useState();
  const { id } = useParams();
  console.log(myTweetsLength);

  useEffect(() => {
    tweetService
      .getTweetById(id)
      .then((tweets) => {
        setMyTweets(tweets);
        setMyTweetsLength(tweets.length);
        console.log(myTweets);
      })
      .catch((err) => console.log(err));
  }, [id, myTweetsLength]);
  console.log(myTweets);

  return (
    <>
      <Tweets
        tweetService={tweetService}
        allTweets={myTweets}
        setMyTweetsLength={setMyTweetsLength}
      />
    </>
  );
};

export default MyTweets;
