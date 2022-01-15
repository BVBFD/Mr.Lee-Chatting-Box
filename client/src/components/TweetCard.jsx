import React from "react";

const TweetCard = ({ user, tweet }) => {
  return (
    <>
      <span>{user.id}</span>
      <p>{tweet.text}</p>
    </>
  );
};

export default TweetCard;
