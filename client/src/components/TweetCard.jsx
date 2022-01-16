import React from "react";

const TweetCard = ({ tweet }) => {
  console.log(tweet);
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
    </div>
  );
};

export default TweetCard;
