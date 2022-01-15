import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tweets from "../components/Tweets";

const AllTweets = ({ user, tweetService }) => {
  const [allTweets, setAllTweets] = useState([]);
  const [allTweetsLength, setAllTweetsLength] = useState();
  const [text, setText] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(user);

  useEffect(() => {
    tweetService
      .getTweet()
      .then((tweets) => {
        setAllTweets(tweets);
        setAllTweetsLength(tweets.length);
      })
      .catch((err) => console.log(err));
  }, [user, tweetService, allTweetsLength]);

  const onUpdate = (event) => {
    event.preventDefault();
    tweetService
      .postTweet(
        `${allTweetsLength + 1}`,
        user.id,
        user.name,
        text,
        `${new Date()}`
      )
      .then((newTweet) => {
        console.log(newTweet);
        setAllTweetsLength(allTweets.length + 1);
        // setAllTweets(newTweets);
      })
      .catch((err) => console.log(err));
  };

  const inputChange = (event) => {
    setText(event.target.value);
  };

  const toMyTweet = () => {
    navigate(`/${id}/mytweets`);
  };

  return (
    <>
      <form action="" onSubmit={onUpdate}>
        <input type="text" onChange={inputChange} />
        <button>POST</button>
      </form>
      <button onClick={toMyTweet}>MyTweet</button>
      <Tweets user={user} allTweets={allTweets} />
    </>
  );
};

export default AllTweets;
