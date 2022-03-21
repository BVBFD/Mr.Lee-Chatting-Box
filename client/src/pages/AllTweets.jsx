import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import EditForm from '../components/EditForm';
import Tweets from '../components/Tweets';

const AllTweets = memo(({ tweetService, authService }) => {
  const [allTweets, setAllTweets] = useState([]);
  const [allTweetsLength, setAllTweetsLength] = useState();

  useEffect(
    useCallback(() => {
      tweetService
        .getTweet()
        .then((tweets) => {
          tweetService.onSync((tweets) => {
            setAllTweets(tweets);
          });
          setAllTweetsLength(tweets?.length);
        })
        .catch((err) => console.log(err));
    }),
    [allTweets]
  );

  return (
    <>
      <EditForm
        tweetService={tweetService}
        authService={authService}
        allTweets={allTweets}
        allTweetsLength={allTweetsLength}
        setAllTweetsLength={setAllTweetsLength}
        setAllTweets={setAllTweets}
      />
      <Tweets
        allTweetsLength={allTweetsLength}
        setAllTweetsLength={setAllTweetsLength}
        allTweets={allTweets}
        tweetService={tweetService}
      />
    </>
  );
});

export default AllTweets;
