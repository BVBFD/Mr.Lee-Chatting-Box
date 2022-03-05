import React, { useEffect, useState } from "react";
import EditForm from "../components/EditForm";
import Tweets from "../components/Tweets";

const AllTweets = ({ tweetService, authService }) => {
  const [allTweets, setAllTweets] = useState([]);
  const [allTweetsLength, setAllTweetsLength] = useState();

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
    tweetService
      .getTweet()
      .then((tweets) => {
        tweetService.onSync((tweets) => {
          setAllTweets(tweets.reverse());
        });
        setAllTweetsLength(tweets.length);
      })
      .catch((err) => console.log(err));
    return () => {
      setAllTweets([]);
    };
  }, [user, tweetService, allTweetsLength]);
  console.log(allTweets);

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
};

export default AllTweets;
