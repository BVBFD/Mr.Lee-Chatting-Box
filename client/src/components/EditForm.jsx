import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = ({
  allTweets,
  tweetService,
  authService,
  allTweetsLength,
  setAllTweetsLength,
}) => {
  const [text, setText] = useState();
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(name);

  useEffect(() => {
    authService
      .getLoginDataName(id)
      .then((data) => {
        setName(data.name);
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  }, [authService]);

  const onUpdate = (event) => {
    event.preventDefault();
    tweetService
      .postTweet(`${allTweetsLength + 1}`, id, name, url, text, `${new Date()}`)
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
    </>
  );
};

export default EditForm;
