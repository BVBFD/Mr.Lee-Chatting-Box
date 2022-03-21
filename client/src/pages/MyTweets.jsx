import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Tweets from '../components/Tweets';

const MyTweets = ({ tweetService }) => {
  const [myTweets, setMyTweets] = useState([]);
  const [myTweetsLength, setMyTweetsLength] = useState();
  const { id } = useParams();

  useEffect(() => {
    tweetService
      .getTweetById(id)
      .then((tweets) => {
        setMyTweets(tweets);
        setMyTweetsLength(tweets?.length);
      })
      .catch((err) => console.log(err));
  }, [id, myTweetsLength]);

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
