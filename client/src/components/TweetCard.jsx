import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TweetCard = ({
  tweet,
  allTweetsLength,
  tweetService,
  setAllTweetsLength,
}) => {
  console.log(tweet);
  const [openEditBoxIndex, setOpenEditBoxIndex] = useState(false);
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
        setAllTweetsLength(allTweetsLength - 1);
        console.log(allTweetsLength);
      })
      .catch((error) => console.log(error));
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
          <input type="text" className="updateInput" />
          <div className="btnBox">
            <button className="onUpdateBtn">update</button>
            <button className="cancelBtn">cancel</button>
          </div>
        </form>
      )}
      <button onClick={deleteTweet} className="deleteBtn">
        x
      </button>
      <button onClick={openEditBox} className="updateBtn">
        ✎
      </button>
    </div>
  );
};

export default TweetCard;
