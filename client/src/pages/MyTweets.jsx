import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Tweets from "../components/Tweets";

const MyTweets = ({ tweetService }) => {
  const [myTweets, setMyTweets] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    tweetService
      .getTweetById(id)
      .then((tweets) => setMyTweets(tweets))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Tweets allTweets={myTweets} />
    </>
  );
};

export default MyTweets;
