import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import EditForm from "../components/EditForm";
import Tweets from "../components/Tweets";

const AllTweets = memo(({ tweetService, authService }) => {
  const [allTweets, setAllTweets] = useState([]);
  const [allTweetsLength, setAllTweetsLength] = useState();

  const [user, setUser] = useState("");

  console.log(allTweets);

  useEffect(
    useCallback(() => {
      setUser(localStorage.getItem("user"));
      tweetService
        .getTweet()
        .then((tweets) => {
          tweetService.onSync((tweets) => {
            setAllTweets(tweets.reverse());
          });
          setAllTweetsLength(tweets?.length);
        })
        .catch((err) => console.log(err));
    }),
    [allTweetsLength]
  );

  return (
    <>
      <EditForm
        tweetService={tweetService}
        authService={authService}
        allTweets={allTweets}
        allTweetsLength={allTweetsLength}
        setAllTweetsLength={setAllTweetsLength}
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
