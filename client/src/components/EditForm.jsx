import React, { memo, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditForm = memo(
  ({ allTweets, tweetService, authService, setAllTweetsLength }) => {
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    // const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      authService
        .getLoginDataName(id)
        .then((data) => {
          setName(data.others.name);
          setUrl(data.others.url);
        })
        .catch((err) => console.log(err));
      return () => {
        setName("");
        setUrl("");
      };
    }, [authService]);

    const onUpdate = useCallback((event) => {
      event.preventDefault();
      tweetService
        .postTweet(
          `${allTweets.length + 1}`,
          id,
          name,
          url,
          text,
          `${new Date()}`
        )
        .then(() => {
          setAllTweetsLength(allTweets.length + 1);
          // setAllTweets(newTweets);
        })
        .catch((err) => console.log(err));
    });

    const inputChange = (event) => {
      setText(event.target.value);
    };

    return (
      <>
        <form className="editForm" action="" onSubmit={onUpdate}>
          <input type="text" onChange={inputChange} />
          <button>POST</button>
        </form>
      </>
    );
  }
);

export default EditForm;
