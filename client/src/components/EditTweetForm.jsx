import React from "react";
import { useState } from "react";

const EditTweetForm = ({
  user,
  tweet,
  tweetService,
  setTweets,
  editBtnStateChange,
}) => {
  const [editedText, setEditedText] = useState();

  const inputValue = (event) => {
    setEditedText(event.target.value);
  };
  console.log(editedText);

  const onUpdate = async (event) => {
    event.preventDefault();
    tweetService
      .updateTweet(tweet, editedText)
      .then((tweets) => setTweets(tweets))
      .catch(console.error);
    editBtnStateChange();
  };

  return (
    <form className="editTweetForm">
      <input
        onChange={inputValue}
        type="text"
        required
        placeholder="Edit your tweet"
        autoFocus
        className="editTweetFormInput"
      />
      <button type="submit" onClick={onUpdate} className="formBtnUpdate">
        Update
      </button>
      <button onClick={editBtnStateChange} className="formBtnCancel">
        Cancel
      </button>
    </form>
  );
};

export default EditTweetForm;
