import React from "react";

const TweetCard = ({ tweet }) => {
  console.log(tweet);
  return (
    <>
      <p>{tweet.text}</p>
    </>
  );
};

export default TweetCard;
