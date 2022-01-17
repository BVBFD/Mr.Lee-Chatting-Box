import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const TweetCard = ({
  tweet,
  allTweetsLength,
  tweetService,
  setAllTweetsLength,
  setMyTweetsLength,
}) => {
  console.log(tweet);
  const [openEditBoxIndex, setOpenEditBoxIndex] = useState(false);
  const [inputText, setInputText] = useState();
  const { id } = useParams();

  const openEditBox = () => {
    if (!openEditBoxIndex) {
      setOpenEditBoxIndex(true);
    } else {
      setOpenEditBoxIndex(false);
    }
  };

  const deleteTweet = () => {
    console.log(tweet.num);
    tweetService
      .deleteTweet(tweet.num)
      .then(() => {
        setMyTweetsLength ? setMyTweetsLength(0) : setAllTweetsLength(0);
        console.log(allTweetsLength);
      })
      .catch((error) => console.log(error));
  };

  const onTextChange = (event) => {
    setInputText(event.target.value);
  };

  const onUpdate = (event) => {
    event.preventDefault();
    console.log(tweet.num, inputText);
    tweetService
      .updateTweet(tweet.num, inputText)
      .then((editedTweet) => {
        console.log(editedTweet);
        setMyTweetsLength ? setMyTweetsLength(0) : setAllTweetsLength(0);
      })
      .catch((err) => console.log(err));
  };

  const onCancel = (event) => {
    event.preventDefault();
    setOpenEditBoxIndex(false);
  };

  return (
    <div className="tweetCard">
      <div className="userImgInfoBox">
        <img src={tweet.url} alt="" />
        <span>{tweet.name}</span>
        <span>@{tweet.id}</span>
        <span>on {tweet.createdAt}</span>
      </div>
      <div className="textBox">
        <p>{tweet.text}</p>
      </div>
      {openEditBoxIndex && (
        <form action="" className="updateForm">
          <input onChange={onTextChange} type="text" className="updateInput" />
          <div className="btnBox">
            <button onClick={onUpdate} className="onUpdateBtn">
              update
            </button>
            <button onClick={onCancel} className="cancelBtn">
              cancel
            </button>
          </div>
        </form>
      )}
      {tweet.id === id && (
        <button onClick={deleteTweet} className="deleteBtn">
          x
        </button>
      )}
      {tweet.id === id && (
        <button onClick={openEditBox} className="updateBtn">
          ✎
        </button>
      )}
    </div>
  );
};

export default TweetCard;
