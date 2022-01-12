import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import EditTweetForm from "./EditTweetForm";

const TweetCard = ({ user, tweet, tweetService, setTweets }) => {
  const [editBtnIndex, setEditBtnIndex] = useState(false);

  const deleteTweet = async (event) => {
    event.preventDefault();
    tweetService
      .deleteTweet(tweet)
      .then((tweets) => setTweets(tweets))
      .catch(console.error);
  };

  const editBtnStateChange = () => {
    if (!editBtnIndex) {
      setEditBtnIndex(true);
    } else {
      setEditBtnIndex(false);
    }
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
      {user.id === tweet.id ? (
        <button className="editBtn" onClick={editBtnStateChange}>
          ✎
        </button>
      ) : (
        ""
      )}
      {editBtnIndex ? (
        <EditTweetForm
          user={user}
          tweet={tweet}
          tweetService={tweetService}
          setTweets={setTweets}
          editBtnStateChange={editBtnStateChange}
        />
      ) : (
        ""
      )}
    </li>
  );
};

export default TweetCard;
