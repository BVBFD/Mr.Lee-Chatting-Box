import React, { memo, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditForm = memo(
  ({
    allTweets,
    tweetService,
    authService,
    setAllTweetsLength,
    setAllTweets,
  }) => {
    const [text, setText] = useState('');
    const [name, setName] = useState(
      JSON.parse(localStorage.getItem('user')).name
    );
    const [url, setUrl] = useState(
      JSON.parse(localStorage.getItem('user')).url
    );
    // const navigate = useNavigate();
    const { id } = useParams();

    const onUpdate = useCallback((event) => {
      event.preventDefault();
      console.log(id, name, url, text);
      tweetService
        .postTweet(
          `${allTweets.length + 1}`,
          id,
          name,
          url,
          text,
          `${new Date()}`
        )
        .then((newTweet) => {
          // setAllTweetsLength(allTweets.length + 1);
          setAllTweets([...allTweets, newTweet]);
        })
        .catch((err) => console.log(err));
    });

    const inputChange = (event) => {
      setText(event.target.value);
    };

    return (
      <>
        <form className='editForm' action='' onSubmit={onUpdate}>
          <input minLength='3' type='text' onChange={inputChange} />
          <button type='submit'>POST</button>
        </form>
      </>
    );
  }
);

export default EditForm;
