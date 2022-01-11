import React from "react";
import { useState } from "react";

const Editbar = ({ user, tweetService, tweets, setTweets }) => {
  const [text, setText] = useState();

  const onChange = (event) => {
    setText(event.target.value);
  };

  const uploadTweet = async (event) => {
    event.preventDefault();
    tweetService
      .postTweet(user.id, user.name, user.url, text, new Date().toString())
      .then((tweet) => setTweets([...tweets, tweet]))
      .catch(console.error);
  };

  return (
    <form onSubmit={uploadTweet} className="editForm">
      <input
        id="editInput"
        type="text"
        placeholder="Edit your chat"
        required
        autoFocus
        onChange={onChange}
      />
      <button type="submit">POST</button>
    </form>
  );
};

export default Editbar;
