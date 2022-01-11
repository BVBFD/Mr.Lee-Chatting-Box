import React from "react";
import { Link } from "react-router-dom";

const TweetCard = ({ user, tweet, tweetService, setTweets }) => {
  const deleteTweet = async (event) => {
    event.preventDefault();
    tweetService
      .deleteTweet(tweet)
      .then((tweets) => setTweets(tweets))
      .catch(console.error);
  };

  return (
    <li className="tweetCardLi">
      <div className="nameImgDate">
        <img src={tweet.url} alt="logoImg" />
        <span>{tweet.name}</span>
        <Link to={`/${user.id}/mytweets`}>
          <span>@{tweet.name}</span>
        </Link>
        <span>on {tweet.createdAt}</span>
      </div>
      <div className="textBox">
        <p>{tweet.text}</p>
      </div>
      {user.id === tweet.id ? (
        <button onClick={deleteTweet} className="deleteBtn">
          x
        </button>
      ) : (
        ""
      )}
      {user.id === tweet.id ? <button className="editBtn">✎</button> : ""}
    </li>
  );
};

export default TweetCard;
